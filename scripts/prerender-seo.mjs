/**
 * Writes a static HTML file per route into dist/, each with its own title,
 * description, canonical and OpenGraph tags.
 *
 * Why this exists: the app is client rendered, so the per-route metadata set
 * by updateMetadata() only appears after JavaScript runs. Social scrapers
 * (Facebook, WhatsApp, LinkedIn, Slack) do not run JavaScript, so every shared
 * link previewed as the home page. Vercel checks the filesystem before applying
 * the SPA rewrite, so dist/pricing/index.html is served for /pricing and the
 * correct tags are present in the raw HTML.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const seo = JSON.parse(readFileSync(join(root, 'src/seo.json'), 'utf8'));
const { origin, ogImage } = seo.site;
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replace the content of a meta/title/canonical tag, matching either attribute order. */
function setTag(html, matcher, replacement) {
  return matcher.test(html) ? html.replace(matcher, replacement) : html;
}

function buildPage({ title, desc, path }) {
  const url = path === '/' ? origin : origin + path;
  let html = shell;

  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(desc)}" />`);
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`);

  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(title)}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(desc)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${origin}${ogImage}" />`);

  html = setTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${esc(title)}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${esc(desc)}" />`);
  html = setTag(html, /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${origin}${ogImage}" />`);

  return html;
}

let written = 0;
for (const [key, page] of Object.entries(seo.pages)) {
  if (page.path === '/') {
    const html = buildPage(page);
    writeFileSync(join(dist, 'index.html'), html);           // rewrite the root shell too
    written++;
    console.log(`  ${page.path.padEnd(16)} ${key} (prerendered)`);
  } else {
    // Check if there is a custom static file in public
    const publicPath = join(root, 'public', page.path.replace(/^\//, ''), 'index.html');
    const publicFilePath = join(root, 'public', page.path.replace(/^\//, '') + '.html');
    if (existsSync(publicPath) || existsSync(publicFilePath)) {
      console.log(`  ${page.path.padEnd(16)} ${key} (skipped - custom static file exists in public/)`);
      continue;
    }
    const html = buildPage(page);
    const dir = join(dist, page.path.replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    written++;
    console.log(`  ${page.path.padEnd(16)} ${key} (prerendered)`);
  }
}

// ── sitemap.xml, generated from the same source so it cannot drift ──
const today = new Date().toISOString().slice(0, 10);
const urls = Object.values(seo.pages)
  .filter(p => !['/terms', '/privacy'].includes(p.path) || true)
  .map(p => `  <url>
    <loc>${origin}${p.path === '/' ? '/' : p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
writeFileSync(join(root, 'public/sitemap.xml'), sitemap);

console.log(`\nprerendered ${written} routes + sitemap (${Object.keys(seo.pages).length} urls)`);
