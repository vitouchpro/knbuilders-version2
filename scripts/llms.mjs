// Build-time llms.txt generator (https://llmstxt.org).
//
// A plain-language brief for LLMs and answer engines: what the business is,
// where it works, what it does, and answers to the questions people actually
// ask. Generated from the same sources as the site so it cannot drift — the
// hand-written version had already fallen out of step with the real content.
//
// AEO/GEO note: answer engines quote short, self-contained, factual statements.
// Each Q&A below is written to stand on its own out of context.
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { SITE, SERVICE_AREAS, DELTA_AREAS, fullAddress } from '../src/site.js'
import { POSTS } from '../src/content/posts.js'
import { SERVICES } from '../src/data.js'
import { getService } from '../src/content/services.js'

const base = SITE.url.replace(/\/$/, '')

const hours = SITE.hours.map((h) => `${h.days} ${h.time}`).join(', ')

// Pull the FAQ pairs already published on the service pages, so this file and
// the visible pages give answer engines a consistent answer.
const serviceFaqs = SERVICES.flatMap((s) => {
  const full = getService(s.slug)
  return (full?.faqs || []).slice(0, 2).map((f) => `- **${f.q}** ${f.a}`)
})

const out = `# ${SITE.name}

> ${SITE.legalName} is a construction company based in ${SITE.address.locality}, ${SITE.address.city}, Tamil Nadu, India, working across the southern ${SITE.address.city} corridor. Founded in ${SITE.foundingYear}. The company handles design, statutory approvals, civil and structural work, construction, finishing and handover with one accountable team, covering residential and commercial projects.

## Key facts

- Business: ${SITE.name} (${SITE.legalName}) — general contractor / construction company
- Founded: ${SITE.foundingYear}
- Address: ${fullAddress()}, India
- Phone: ${SITE.phone}
- Email: ${SITE.email}
- Hours: ${hours}
- Service area (north Tamil Nadu): ${SERVICE_AREAS.map((a) => a.name).join(', ')} and the surrounding Chennai, Kanchipuram, Thiruvallur and Chengalpattu districts
- Service area (delta districts): ${DELTA_AREAS.map((a) => a.name).join(', ')} and surrounding Thanjavur/Thiruvarur areas
- Free first consultation, site assessment and itemised quotation

## Services

${SERVICES.map((s) => `- **${s.title}** — ${s.summary} See ${base}/services/${s.slug}.html`).join('\n')}

## Service area detail

Ground conditions vary considerably between the two regions we build in, which changes how a building must be founded and waterproofed.

### North Tamil Nadu (Chennai corridor)

${SERVICE_AREAS.map((a) => `- **${a.name}** — ${a.note}`).join('\n')}

### Delta districts (Thanjavur belt)

${DELTA_AREAS.map((a) => `- **${a.name}** — ${a.note}`).join('\n')}

## Pages

- [Home](${base}/) — overview of the company, services and completed work.
- [Services](${base}/services.html) — all construction services offered.
- [Projects](${base}/projects.html) — portfolio of completed residential and commercial builds.
- [Blog](${base}/blog.html) — cost guides, buyer guides and construction advice for ${SITE.address.city}.
- [About](${base}/about.html) — company background, working process and commitments.
- [Contact](${base}/contact.html) — free quote, phone, email and office address.

## Guides

${POSTS.map((p) => `- [${p.title}](${base}/blog/${p.slug}.html) — ${p.excerpt}`).join('\n')}

## Common questions

- **Where does ${SITE.name} operate?** From ${SITE.address.locality} across the north Tamil Nadu corridor, including ${SERVICE_AREAS.slice(0, 6).map((a) => a.name).join(', ')} and nearby localities, and in the delta districts around ${DELTA_AREAS.slice(0, 3).map((a) => a.name).join(', ')}.
- **How long does it take to build an independent house in ${SITE.address.city}?** Typically 9–14 months from foundation to handover, depending on size and finishes. Concrete curing time cannot be compressed.
- **What determines the cost of building a house?** Built-up area, specification and finishes, soil and foundation type, number of floors, structural complexity, and prevailing material rates. A written specification, not a headline per-square-foot rate, is what makes a quote meaningful.
- **Are quotes free?** Yes — the first consultation, site assessment and itemised quotation are free.
- **Are approvals handled?** Yes. CMDA and local body drawings and documentation are prepared and submitted on the client's behalf.
${serviceFaqs.join('\n')}

## Contact

Call ${SITE.phone}, email ${SITE.email}, or visit ${fullAddress()}. Enquiries: ${base}/contact.html
`

writeFileSync(resolve(process.cwd(), 'dist/llms.txt'), out, 'utf8')
console.log(`[llms] wrote llms.txt (${out.length.toLocaleString()} chars)`)
