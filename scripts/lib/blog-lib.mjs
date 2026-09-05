/**
 * Shared logic for turning a queued post (content/blog-queue.json) into the
 * three file changes a publish needs:
 *   1. public/blog/<slug>/index.html   (the new static article page)
 *   2. public/blog/index.html          (a new card linking to it)
 *   3. src/seo.json                    (a new entry so sitemap.xml picks it up)
 *
 * Used by both scripts/publish-next-post.mjs (manual/local run, uses the
 * filesystem) and api/cron-publish.js (Vercel Cron, reads/writes through the
 * GitHub API) so the two never drift apart.
 */

const ORIGIN = 'https://atlanticbear.com';

function jsonEsc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function htmlAttrEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function humanDate(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Render the full article HTML page for one queue item, given the template string. */
export function renderPostHtml(template, post) {
  const canonical = `${ORIGIN}/blog/${post.slug}`;
  return template
    .replaceAll('{{FULL_TITLE}}', htmlAttrEsc(`${post.title} | Atlantic Bear`))
    .replaceAll('{{TITLE}}', htmlAttrEsc(post.title))
    .replaceAll('{{TITLE_JSON}}', jsonEsc(post.title))
    .replaceAll('{{DESC}}', htmlAttrEsc(post.desc))
    .replaceAll('{{DESC_JSON}}', jsonEsc(post.desc))
    .replaceAll('{{CANONICAL}}', canonical)
    .replaceAll('{{DATE_ISO}}', post.publishDate)
    .replaceAll('{{DATE_HUMAN}}', humanDate(post.publishDate))
    .replaceAll('{{ARTICLE_LABEL}}', htmlAttrEsc(post.articleLabel))
    .replaceAll('{{BREADCRUMB_LABEL}}', htmlAttrEsc(post.breadcrumbLabel))
    .replaceAll('{{READ_TIME}}', htmlAttrEsc(post.readTime || '6 min read'))
    .replace('{{BODY_HTML}}', post.bodyHtml);
}

/** Build the <a class="blog-card"> snippet for the /blog index page. */
export function buildBlogCard(post) {
  // The part of cardTag before "·" doubles as the filter category on the
  // /blog index page (see the inline script there that builds filter pills
  // from whatever data-category values are present).
  const category = String(post.cardTag).split('·')[0].trim();
  return `    <a href="/blog/${post.slug}" class="blog-card" data-category="${htmlAttrEsc(category)}">
      <div class="tag">${htmlAttrEsc(post.cardTag)}</div>
      <h2>${htmlAttrEsc(post.title)}</h2>
      <p>${htmlAttrEsc(post.cardSummary)}</p>
      <span class="read-more">Read article →</span>
    </a>
`;
}

/** Insert a new card as the first item in the .blog-list on public/blog/index.html. */
export function insertCardIntoIndex(indexHtml, cardHtml) {
  const openTagMatch = indexHtml.match(/<div class="blog-list"[^>]*>/);
  if (!openTagMatch) throw new Error('Could not find <div class="blog-list"> in blog index.html');
  const insertAt = openTagMatch.index + openTagMatch[0].length;
  return indexHtml.slice(0, insertAt) + '\n\n' + cardHtml + indexHtml.slice(insertAt);
}

/** Add a page entry to the seo.json pages map (used to (re)build sitemap.xml at build time). */
export function addSeoEntry(seoObj, post) {
  const key = `blog-${post.slug}`;
  seoObj.pages[key] = {
    path: `/blog/${post.slug}`,
    title: `${post.title} | Atlantic Bear`,
    desc: post.desc,
    priority: '0.7',
  };
  return seoObj;
}

/** Find the next not-yet-published item in the queue (in array order). */
export function pickNextQueued(queue) {
  return queue.find(p => p.status === 'queued') || null;
}
