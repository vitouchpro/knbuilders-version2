// Build-time robots.txt generator.
// Generated (rather than hand-maintained in public/) so the host in the Sitemap
// and llms.txt lines always matches SITE.url — a hardcoded domain here silently
// breaks discovery the moment the site moves.
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { SITE } from '../src/site.js'

const base = SITE.url.replace(/\/$/, '')

// Crawlers that read pages to answer questions live, or to ground/train models.
// Listed explicitly: several ignore the wildcard group, and an explicit Allow is
// the clearest signal that this content may be used in answers.
const AI_AGENTS = [
  // OpenAI
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  // Anthropic
  'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'Claude-SearchBot',
  // Perplexity
  'PerplexityBot', 'Perplexity-User',
  // Google / Apple model + AI-surface access
  'Google-Extended', 'Applebot', 'Applebot-Extended',
  // Microsoft / Bing AI
  'bingbot', 'BingPreview',
  // Meta
  'meta-externalagent', 'FacebookBot',
  // Common Crawl (feeds many downstream models)
  'CCBot',
  // Others that surface answers or previews
  'Amazonbot', 'DuckAssistBot', 'YouBot', 'cohere-ai', 'Bytespider', 'Diffbot',
  // Social preview fetchers — needed for rich link cards
  'Twitterbot', 'LinkedInBot', 'WhatsApp', 'Slackbot-LinkExpanding', 'TelegramBot',
]

const lines = [
  `# ${SITE.name} — ${SITE.tagline}`,
  '# Search engines and AI/answer engines are welcome to read and cite this site.',
  `# Canonical host: ${base}`,
  '',
  '# ---------------------------------------------------------------------------',
  '# Default: everything is crawlable.',
  '# ---------------------------------------------------------------------------',
  'User-agent: *',
  'Allow: /',
  '',
  '# NOTE: /assets/ is deliberately NOT disallowed. It holds the CSS and JS every',
  '# page needs to render; blocking it stops Google seeing the rendered page and',
  '# is actively harmful, not a saving.',
  '',
  '# The 404 page is already noindex via meta; keeping it crawlable lets engines',
  '# confirm soft-404 handling.',
  '',
  '# Tracking-parameter duplicates (utm_*, gclid, fbclid) are handled by the',
  '# self-referencing <link rel="canonical"> on every page, which every major',
  '# engine honours — no non-standard directives needed here.',
  '',
  '# ---------------------------------------------------------------------------',
  '# AI / answer engines — explicitly permitted.',
  '# ---------------------------------------------------------------------------',
]

for (const agent of AI_AGENTS) {
  lines.push(`User-agent: ${agent}`, 'Allow: /', '')
}

lines.push(
  '# ---------------------------------------------------------------------------',
  '# Discovery',
  '# ---------------------------------------------------------------------------',
  `Sitemap: ${base}/sitemap.xml`,
  '',
  '# Plain-language summary of the business, services and service area, written',
  '# for LLMs. Nothing links to a file like this, so it is named here to make it',
  '# discoverable: https://llmstxt.org',
  `# LLMs: ${base}/llms.txt`,
  '',
)

writeFileSync(resolve(process.cwd(), 'dist/robots.txt'), lines.join('\n'), 'utf8')
console.log(`[robots] wrote ${AI_AGENTS.length + 1} agent groups`)
