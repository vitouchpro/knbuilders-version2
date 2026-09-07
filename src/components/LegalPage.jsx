import { PageBanner } from './common.jsx'
import { Icon } from '../icons.jsx'

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Headings repeat across documents ("Contact us"), so disambiguate with the index.
const anchorFor = (heading, i) => `${slugify(heading)}-${i}`

function Block({ block, index }) {
  if (block.h2) {
    return (
      <h2 id={anchorFor(block.h2, index)} className="heading mt-10 scroll-mt-28 text-xl text-navy first:mt-0">
        {block.h2}
      </h2>
    )
  }
  if (block.p) return <p className="mt-3 leading-7 text-navy/75">{block.p}</p>
  if (block.ul) {
    return (
      <ul className="mt-3 space-y-2">
        {block.ul.map((li) => (
          <li key={li} className="flex gap-2.5 leading-7 text-navy/75">
            <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-orange" />
            <span>{li}</span>
          </li>
        ))}
      </ul>
    )
  }
  return null
}

export default function LegalPage({ doc }) {
  const headings = doc.sections
    .map((b, i) => (b.h2 ? { text: b.h2, id: anchorFor(b.h2, i) } : null))
    .filter(Boolean)

  return (
    <>
      <PageBanner eyebrow="Legal" title={doc.title} crumb={doc.title} subtitle={`Last updated: ${doc.updated}`} />
      <section className="bg-cream py-12 sm:py-16">
        <div className="container-px grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
          <div className="min-w-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/8 sm:p-9">
            <p className="border-l-2 border-orange pl-4 text-lg leading-8 text-navy/85">{doc.lead}</p>
            <div className="mt-8">
              {doc.sections.map((b, i) => <Block key={i} block={b} index={i} />)}
            </div>
          </div>

          <nav aria-label="On this page" className="hidden lg:sticky lg:top-28 lg:block">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy/75">On this page</p>
            <ul className="mt-3 space-y-1.5 border-l border-navy/10">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1 pl-3 text-sm text-navy/70 transition hover:border-orange hover:text-orange"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
