/**
 * Manual/local version of what api/cron-publish.js does automatically every
 * week. Run this yourself (`node scripts/publish-next-post.mjs`) to publish
 * the next queued post right now instead of waiting for the weekly cron —
 * useful for testing or for pushing an extra post out of schedule.
 *
 * It does NOT commit or push — it just writes the files. Review the diff,
 * then `git add -A && git commit && git push` (or let the cron do it).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  renderPostHtml,
  buildBlogCard,
  insertCardIntoIndex,
  addSeoEntry,
  pickNextQueued,
} from './lib/blog-lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const queuePath = join(root, 'content/blog-queue.json');
const indexPath = join(root, 'public/blog/index.html');
const seoPath = join(root, 'src/seo.json');
const templatePath = join(root, 'scripts/templates/post-template.html');

const queue = JSON.parse(readFileSync(queuePath, 'utf8'));
const post = pickNextQueued(queue);

if (!post) {
  console.log('No queued posts left in content/blog-queue.json. Add more topics before the next run.');
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
post.publishDate = today;

const template = readFileSync(templatePath, 'utf8');
const postHtml = renderPostHtml(template, post);

const postDir = join(root, 'public/blog', post.slug);
mkdirSync(postDir, { recursive: true });
writeFileSync(join(postDir, 'index.html'), postHtml);

const indexHtml = readFileSync(indexPath, 'utf8');
writeFileSync(indexPath, insertCardIntoIndex(indexHtml, buildBlogCard(post)));

const seo = JSON.parse(readFileSync(seoPath, 'utf8'));
addSeoEntry(seo, post);
writeFileSync(seoPath, JSON.stringify(seo, null, 2) + '\n');

post.status = 'published';
writeFileSync(queuePath, JSON.stringify(queue, null, 2) + '\n');

console.log(`Published: /blog/${post.slug}  ("${post.title}")`);
console.log('Run `npm run build` to confirm it builds, then commit and push.');
