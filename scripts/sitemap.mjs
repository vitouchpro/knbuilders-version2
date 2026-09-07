// Build-time sitemap generator.
// Replaces a hand-maintained public/sitemap.xml so URLs, priorities and
// <lastmod> stay in sync with the real content instead of drifting.
//
// Blog posts use their true publish date (dateISO); evergreen pages use the
// build date. Service and project imagery is declared with the image namespace
// so Google Images can index it — worth doing for a construction firm, where
// the work is inherently visual and image search is a real discovery path.
//
// Runs after prerender; writes straight into dist/.
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { SITE } from '../src/site.js'
import { POSTS } from '../src/content/posts.js'
import { getService } from '../src/content/services.js'
import { SERVICES, IMAGES, PROJECTS, HERO_SLIDES } from '../src/data.js'

const base = SITE.url.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

// Most recent post date — the blog index is only as fresh as its newest entry.
const latestPost = POSTS
  .map((p) => p.dateISO)
  .sort()
  .reverse()[0] || today

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const urls = [
  {
    loc: '/', changefreq: 'weekly', priority: '1.0', lastmod: today,
    images: HERO_SLIDES.map((s) => ({ url: s.img, title: `${SITE.name} — ${SITE.tagline}` })),
  },
  { loc: '/services.html', changefreq: 'monthly', priority: '0.9', lastmod: today },
  {
    loc: '/projects.html', changefreq: 'monthly', priority: '0.8', lastmod: today,
    images: PROJECTS.map((p) => ({
      url: IMAGES[p.img],
      title: `${p.name} — ${p.location}`,
      caption: `${p.tag}, ${p.area}, completed ${p.year}`,
    })),
  },
  { loc: '/about.html', changefreq: 'yearly', priority: '0.7', lastmod: today },
  // The blog index changes whenever a post is published.
  { loc: '/blog.html', changefreq: 'weekly', priority: '0.7', lastmod: latestPost },
  { loc: '/contact.html', changefreq: 'yearly', priority: '0.6', lastmod: today },

  // Service detail pages — highest commercial intent after the home page.
  ...SERVICES.map((s) => {
    const full = getService(s.slug)
    const img = full?.img ? IMAGES[full.img] : null
    return {
      loc: `/services/${s.slug}.html`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: today,
      images: img ? [{ url: img, title: `${s.title} in Chennai — ${SITE.name}` }] : [],
    }
  }),

  // Blog posts carry their real publish date.
  ...POSTS.map((p) => ({
    loc: `/blog/${p.slug}.html`,
    changefreq: 'yearly', // guides are evergreen; lastmod is the real signal
    priority: '0.7',
    lastmod: p.dateISO,
    images: IMAGES[p.img] ? [{ url: IMAGES[p.img], title: p.title }] : [],
  })),

  { loc: '/privacy.html', changefreq: 'yearly', priority: '0.2', lastmod: today },
  { loc: '/terms.html', changefreq: 'yearly', priority: '0.2', lastmod: today },
]

// Sitemaps require fully-qualified image URLs. Bundled assets resolve to
// root-relative paths (/assets/...), so prefix those with the site origin;
// remote imagery (Unsplash) is already absolute and passes through.
const absUrl = (u) => (/^https?:\/\//i.test(u) ? u : `${base}${u}`)

const block = (u) => {
  const imgs = (u.images || [])
    .filter((i) => i.url)
    .map((i) => [
      '    <image:image>',
      `      <image:loc>${esc(absUrl(i.url))}</image:loc>`,
      `      <image:title>${esc(i.title)}</image:title>`,
      i.caption ? `      <image:caption>${esc(i.caption)}</image:caption>` : null,
      '    </image:image>',
    ].filter(Boolean).join('\n'))
    .join('\n')

  return [
    '  <url>',
    `    <loc>${base}${u.loc}</loc>`,
    `    <lastmod>${u.lastmod}</lastmod>`,
    `    <changefreq>${u.changefreq}</changefreq>`,
    `    <priority>${u.priority}</priority>`,
    imgs || null,
    '  </url>',
  ].filter(Boolean).join('\n')
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(block).join('\n')}
</urlset>
`

writeFileSync(resolve(process.cwd(), 'dist/sitemap.xml'), xml, 'utf8')
const imageCount = urls.reduce((n, u) => n + (u.images?.filter((i) => i.url).length || 0), 0)
console.log(`[sitemap] wrote ${urls.length} URLs (${imageCount} images) with lastmod`)
