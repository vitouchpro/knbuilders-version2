import { Icon } from '../icons.jsx'
import { IMAGES } from '../data.js'
import { relatedServices } from '../content/services.js'
import { postsForService } from '../content/posts.js'
import { PageBanner, CtaBand } from './common.jsx'
import { ProcessSection } from './sections.jsx'

/* Renders one content block. Mirrors the vocabulary used by blog posts
   (h2 | h3 | p | ul | ol | tip) plus a `table` for spec/cost comparisons,
   which read well for users and are easy for answer engines to quote. */
function Block({ block }) {
  if (block.h2) return <h2 className="heading mt-9 text-2xl text-navy">{block.h2}</h2>
  if (block.h3) return <h3 className="heading mt-7 text-lg text-navy">{block.h3}</h3>
  if (block.p) return <p className="mt-4 text-navy/70">{block.p}</p>
  if (block.tip)
    return (
      <div className="mt-6 flex gap-3 rounded-2xl border-l-4 border-orange bg-cream-deep p-5">
        <span className="mt-0.5 shrink-0 text-orange"><Icon name="sparkles" className="h-5 w-5" /></span>
        <p className="text-sm font-medium text-navy/80">{block.tip}</p>
      </div>
    )
  if (block.ul)
    return (
      <ul className="mt-4 space-y-2.5">
        {block.ul.map((li) => (
          <li key={li} className="flex gap-2.5 text-navy/70"><span className="mt-1 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span><span>{li}</span></li>
        ))}
      </ul>
    )
  if (block.ol)
    return (
      <ol className="mt-4 space-y-2.5">
        {block.ol.map((li, i) => (
          <li key={li} className="flex gap-3 text-navy/70">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange/15 text-xs font-bold text-orange">{i + 1}</span>
            <span>{li}</span>
          </li>
        ))}
      </ol>
    )
  if (block.table)
    return (
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy text-white">
              {block.table.head.map((h) => <th key={h} scope="col" className="px-4 py-2.5 font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((r, i) => (
              <tr key={i} className={i % 2 ? 'bg-white' : 'bg-cream-deep/40'}>
                {r.map((c, j) => <td key={j} className="border-t border-navy/8 px-4 py-2.5 text-navy/75">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        {block.caption && <p className="mt-2 text-xs text-navy/50">{block.caption}</p>}
      </div>
    )
  return null
}

export default function ServiceDetail({ service }) {
  if (!service) return <section className="container-px py-32 text-center text-navy/70">Service not found.</section>
  const related = relatedServices(service.slug)
  const guides = postsForService(service.slug)

  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title={service.title}
        crumb={service.title}
        subtitle={service.intro}
      />

      <section className="bg-cream py-12 sm:py-16">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl">
            <img src={IMAGES[service.img]} alt={`${service.title} services by KN Builders in Chennai`} className="h-56 w-full rounded-2xl object-cover sm:h-80" />
            {service.body.map((block, i) => <Block key={i} block={block} />)}

            {/* what's included */}
            <h2 className="heading mt-10 text-2xl text-navy">What's included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 text-sm text-navy/75 ring-1 ring-navy/8">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange/15 text-orange"><Icon name="check" className="h-4 w-4" /></span>{f}
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <h2 className="heading mt-12 text-2xl text-navy">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-navy/10 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy">
                    {f.q}<span className="text-orange transition group-open:rotate-45"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-sm text-navy/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-navy p-6 text-white">
                <h2 className="heading text-lg">Get a free quote</h2>
                <p className="mt-2 text-sm text-white/70">Tell us about your project and we'll get back within one business day.</p>
                <a href="/contact.html" className="btn-primary mt-4 w-full justify-center">Request a quote <Icon name="arrow" className="h-4 w-4" /></a>
              </div>
              {guides.length > 0 && (
                <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/8">
                  <h2 className="heading text-base text-navy">Guides worth reading</h2>
                  <ul className="mt-4 space-y-4">
                    {guides.map((g) => (
                      <li key={g.slug}>
                        <a href={`/blog/${g.slug}.html`} className="group flex gap-3">
                          <img src={IMAGES[g.img]} alt={g.title} loading="lazy" className="h-14 w-16 shrink-0 rounded-lg object-cover" />
                          <span className="text-sm font-medium text-navy/80 transition group-hover:text-orange">{g.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/8">
                <h2 className="heading text-base text-navy">Other services</h2>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <a href={`/services/${r.slug}.html`} className="flex items-center gap-2.5 text-sm font-medium text-navy/75 transition hover:text-orange">
                        <span className="text-orange"><Icon name={r.icon} className="h-4 w-4" /></span>{r.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ProcessSection />
      <CtaBand title={`Ready for ${service.title}?`} accent="Get a Free Quote." />
    </>
  )
}
