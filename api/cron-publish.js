/**
 * Vercel Cron target — fires weekly (see vercel.json "crons").
 *
 * Pulls the next queued post out of content/blog-queue.json, renders it into
 * a static page, adds it to the blog index and sitemap registry, and pushes
 * all three file changes to GitHub as one commit. That push is what actually
 * publishes it: Vercel's Git integration auto-deploys on every push to main,
 * `npm run build` regenerates sitemap.xml from src/seo.json, and the new
 * page is a real static HTML file at /blog/<slug> that Google can crawl.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   GITHUB_TOKEN  — fine-grained PAT, Contents: read & write, on this repo only
 *   CRON_SECRET   — Vercel sets the Authorization header to this automatically
 *                   for scheduled invocations; this just guards manual hits.
 */
import {
  renderPostHtml,
  buildBlogCard,
  insertCardIntoIndex,
  addSeoEntry,
  pickNextQueued,
} from '../scripts/lib/blog-lib.mjs';

const OWNER = 'branchingteam-bit';
const REPO = 'featherstudio';
const BRANCH = 'main';
const API = 'https://api.github.com';

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

async function gh(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: { ...authHeaders(), ...(opts.headers || {}) },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${path} -> ${res.status}: ${body}`);
  }
  return res.json();
}

/** Read a text file's current content from the repo (decoded from base64). */
async function getFile(path) {
  const data = await gh(`/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`);
  return Buffer.from(data.content, 'base64').toString('utf8');
}

export default async function handler(req, res) {
  const authHeader = req.headers['authorization'];
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = req.headers['x-vercel-cron-schedule'] || req.headers['x-vercel-cron'];
  if (cronSecret && !isVercelCron && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }
  if (!process.env.GITHUB_TOKEN) {
    return res.status(500).json({ ok: false, error: 'GITHUB_TOKEN is not set in this project\'s environment variables' });
  }

  try {
    const queue = JSON.parse(await getFile('content/blog-queue.json'));
    const post = pickNextQueued(queue);

    if (!post) {
      console.log('cron-publish: queue is empty, nothing to publish this week');
      return res.status(200).json({ ok: true, published: false, reason: 'queue empty' });
    }

    post.publishDate = new Date().toISOString().slice(0, 10);

    const template = await getFile('scripts/templates/post-template.html');
    const postHtml = renderPostHtml(template, post);

    const indexHtml = await getFile('public/blog/index.html');
    const newIndexHtml = insertCardIntoIndex(indexHtml, buildBlogCard(post));

    const seo = JSON.parse(await getFile('src/seo.json'));
    addSeoEntry(seo, post);

    post.status = 'published';
    const newQueueJson = JSON.stringify(queue, null, 2) + '\n';

    // --- one atomic commit touching all four files, via the Git Data API ---
    const ref = await gh(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
    const baseCommitSha = ref.object.sha;
    const baseCommit = await gh(`/repos/${OWNER}/${REPO}/git/commits/${baseCommitSha}`);
    const baseTreeSha = baseCommit.tree.sha;

    const files = [
      { path: `public/blog/${post.slug}/index.html`, content: postHtml },
      { path: 'public/blog/index.html', content: newIndexHtml },
      { path: 'src/seo.json', content: JSON.stringify(seo, null, 2) + '\n' },
      { path: 'content/blog-queue.json', content: newQueueJson },
    ];

    const blobs = await Promise.all(
      files.map(f =>
        gh(`/repos/${OWNER}/${REPO}/git/blobs`, {
          method: 'POST',
          body: JSON.stringify({ content: f.content, encoding: 'utf-8' }),
        })
      )
    );

    const tree = await gh(`/repos/${OWNER}/${REPO}/git/trees`, {
      method: 'POST',
      body: JSON.stringify({
        base_tree: baseTreeSha,
        tree: files.map((f, i) => ({
          path: f.path,
          mode: '100644',
          type: 'blob',
          sha: blobs[i].sha,
        })),
      }),
    });

    const commit = await gh(`/repos/${OWNER}/${REPO}/git/commits`, {
      method: 'POST',
      body: JSON.stringify({
        message: `blog: auto-publish "${post.title}"\n\nWeekly scheduled post via /api/cron-publish.`,
        tree: tree.sha,
        parents: [baseCommitSha],
      }),
    });

    await gh(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
      method: 'PATCH',
      body: JSON.stringify({ sha: commit.sha }),
    });

    console.log(`cron-publish: published "${post.title}" at /blog/${post.slug}`);
    return res.status(200).json({
      ok: true,
      published: true,
      slug: post.slug,
      title: post.title,
      commit: commit.sha,
    });
  } catch (err) {
    console.error('cron-publish failed:', err);
    return res.status(500).json({ ok: false, error: String(err && err.message || err) });
  }
}
