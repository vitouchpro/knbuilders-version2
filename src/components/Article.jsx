import { Icon } from '../icons.jsx'
import { IMAGES } from '../data.js'
import { AUTHORS, relatedPosts } from '../content/posts.js'
import { SERVICES } from '../data.js'
import { CtaBand } from './common.jsx'

/* Renders a single block from a post body. */
function Block({ block }) {
  if (block.h2) return <h2 className="heading mt-10 text-2xl text-navy">{block.h2}</h2>
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

export default function Article({ post }) {
  if (!post) return <section className="container-px py-32 text-center text-navy/70">Article not found.</section>
  const author = AUTHORS[post.author]
  const related = relatedPosts(post.slug)
  const linkedServices = (post.services || [])
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <>
      {/* banner */}
      <section className="relative isolate overflow-hidden bg-navy pt-32 pb-14 dot-grid sm:pt-36 sm:pb-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
        <div className="container-px relative">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-cream/60">
            <a href="/" className="transition hover:text-orange">Home</a><span aria-hidden>/</span>
            <a href="/blog.html" className="transition hover:text-orange">Blog</a><span aria-hidden>/</span>
            <span className="text-cream/85">{post.tag}</span>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">{post.tag}</span>
          <h1 className="heading mt-4 max-w-3xl text-3xl text-cream sm:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <img src={IMAGES[author.img]} alt={author.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-semibold text-cream">{author.name}</p>
              <p className="text-cream/60">{post.date} · {post.readTime} read</p>
            </div>
          </div>
        </div>
      </section>

      {/* hero image */}
      <div className="container-px mt-6 sm:mt-8">
        <img src={IMAGES[post.img]} alt={`${post.title} — KN Builders, Chennai`} className="h-56 w-full rounded-2xl object-cover shadow-xl sm:h-80 lg:h-[420px]" />
      </div>

      {/* body */}
      <article className="bg-cream py-12 sm:py-16">
        <div className="container-px grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="max-w-2xl">
            <p className="text-lg text-navy/80">{post.excerpt}</p>

            {/* key takeaways — surfaced for readers and answer engines */}
            <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
              <h2 className="heading flex items-center gap-2 text-base text-orange"><Icon name="check" className="h-5 w-5" /> Key takeaways</h2>
              <ul className="mt-4 space-y-2.5">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-white/80"><span className="mt-1 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span><span>{t}</span></li>
                ))}
              </ul>
            </div>

            {post.body.map((block, i) => <Block key={i} block={block} />)}

            {/* FAQ */}
            <h2 className="heading mt-12 text-2xl text-navy">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {post.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-navy/10 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy">
                    {f.q}<span className="text-orange transition group-open:rotate-45"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-sm text-navy/70">{f.a}</p>
                </details>
              ))}
            </div>

            {/* author bio */}
            <div className="mt-12 flex items-center gap-4 rounded-2xl bg-cream-deep p-6 ring-1 ring-navy/8">
              <img src={IMAGES[author.img]} alt={author.name} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="text-xs uppercase tracking-wide text-navy/70">Written by</p>
                <p className="heading text-base text-navy">{author.name}</p>
                <p className="text-sm text-orange">{author.role}</p>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <aside className="lg:pt-2">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-orange p-6 text-white">
                <h2 className="heading text-lg">Thinking of building?</h2>
                <p className="mt-2 text-sm text-white/85">Get a free, no-obligation quote from our Chennai team.</p>
                <a href="/contact.html" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange transition hover:bg-cream">Get a quote <Icon name="arrow" className="h-4 w-4" /></a>
              </div>
              {linkedServices.length > 0 && (
                <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/8">
                  <h2 className="heading text-base text-navy">Related services</h2>
                  <ul className="mt-4 space-y-2">
                    {linkedServices.map((sv) => (
                      <li key={sv.slug}>
                        <a href={`/services/${sv.slug}.html`} className="flex items-center gap-2.5 text-sm font-medium text-navy/75 transition hover:text-orange">
                          <span className="text-orange"><Icon name={sv.icon} className="h-4 w-4" /></span>{sv.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/8">
                <h2 className="heading text-base text-navy">Related articles</h2>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <a href={`/blog/${r.slug}.html`} className="group flex gap-3">
                        <img src={IMAGES[r.img]} alt={r.title} loading="lazy" className="h-14 w-16 shrink-0 rounded-lg object-cover" />
                        <span className="text-sm font-medium text-navy/80 transition group-hover:text-orange">{r.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <CtaBand title="Have a Project in Mind?" accent="Let's Build It." />
    </>
  )
}
