# Production launch checklist — KN Builders

This site is a Vite multi-page app, prerendered to static HTML (great for Google + AI
engines). Below is what's still required before going live.

## Build & deploy

```bash
npm install
npm run build      # client build → SSR build → prerender (bakes static HTML)
npm run preview    # verify locally
```

Deploy the `dist/` folder to any static host.
- **Vercel** (current target): `vercel.json` is the single source of truth for security
  headers, caching and the 404 route. Build command `npm run build`, output `dist`.
  The `rewrites` catch-all sends unmatched paths to `/404.html`; real files on disk are
  matched first, so it only fires on genuine misses. Note Vercel serves the rewritten
  404 page with a **200** status — if you need a true 404 status code for SEO, that
  requires a function rather than a static rewrite.
- **Other hosts** (Netlify / Cloudflare Pages / nginx / Apache): translate the `headers`
  and `routes` blocks in `vercel.json` into that platform's own config. Do not re-add a
  `public/_headers` file alongside `vercel.json` — Vercel ignores it, so the two copies
  drift apart and the live CSP silently stops matching the one in the repo.

Verify a prerendered page has real content: open `dist/index.html` and confirm the
markup inside `<div id="root">` is the full page (not an empty div).

## 1. Real business data  (edit `src/site.js` — single source of truth)

- [ ] `phone`, `phoneHref`, `whatsapp` — real number
- [ ] `email` — real inbox
- [ ] `address` — real Mudichur/Tambaram address + pincode
- [ ] `social` links, `foundingYear`
- [ ] `url` — the live domain

Then replace the placeholder domain `https://www.knbuilders.com` everywhere it's hardcoded
in static files: every `*.html`, `blog/*.html`, `services/*.html`, `public/sitemap.xml`,
`public/robots.txt`, `public/llms.txt` (canonical, OG, JSON-LD).

> Note: your Google listing is **"KN Architects & Builders, Mudichur"**. Keep the site name
> consistent with the listing for local SEO (NAP consistency).

## 2. Lead capture

- [ ] Create a free key at https://web3forms.com and paste it into `src/site.js` →
      `formAccessKey`. Until then, forms fall back to a WhatsApp deep-link.
- [ ] Send a test submission from each form (quote popup, contact, newsletter).

## 3. Images & icons  (need raster export — couldn't generate here)

Generate from the SVG masters (use https://realfavicongenerator.net or
`npx @vite-pwa/assets-generator`, or ImageMagick/sharp) and drop into `public/`:

- [ ] `apple-touch-icon.png` (180×180)  — referenced in `index.html`
- [ ] `icon-192.png`, `icon-512.png`     — referenced in `site.webmanifest`
- [ ] `favicon.ico`
- [ ] `og-image.png` (1200×630) from `public/og-image.svg`, then point OG/Twitter
      image tags at `/og-image.png` (currently they use Unsplash URLs)
- [ ] Self-host the photos (currently hot-linked from Unsplash) as optimized WebP/AVIF
      and update `src/data.js`. Improves reliability and Core Web Vitals.

## 4. Trust & content

- [ ] Replace stock-photo **testimonials** with real Google reviews (then you may re-add
      `aggregateRating` schema legitimately — it was removed to avoid a policy penalty).
- [ ] Replace stock **team/author** photos and names with real people.
- [ ] Have the **Privacy Policy** and **Terms** (`/privacy.html`, `/terms.html`) reviewed
      by a legal professional.

## 5. Off-site / growth (biggest ranking levers)

- [ ] Set up **Google Business Profile** with matching NAP + real photos + reviews.
- [ ] Verify in **Google Search Console** + **Bing Webmaster**; submit `sitemap.xml`.
- [ ] Add analytics (GA4 / Plausible) + conversion tracking on form submits & quote opens.
- [ ] Optional: error monitoring (Sentry) and an uptime check.

## 6. Verify before launch

- [ ] Lighthouse (performance, a11y, SEO, best-practices) on the built site.
- [ ] axe / keyboard pass: focus traps in popup & chat, skip link, contrast.
- [ ] Rich Results Test on a few pages (LocalBusiness, Service, BlogPosting, FAQ).
- [ ] Confirm the CSP in `vercel.json` doesn't block anything (check the
      browser console on the deployed site; relax sources if needed).
