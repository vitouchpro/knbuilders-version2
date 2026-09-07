import { useState, useEffect, useRef, useCallback } from 'react'
import { Icon, Social } from '../icons.jsx'
import { SITE, SERVICE_REGIONS } from '../site.js'
import craftingExcellenceImage from '../images/kn-builders-quality-construction-workmanship.png'
import {
  IMAGES, HERO_SLIDES, STATS, SERVICES, STEPS, PROJECTS,
  WHY_CHOOSE, TEAM, TESTIMONIALS, BLOGS,
} from '../data.js'
import {
  CountUp, SectionHeading, Reveal, Field, InfoBlock, useReducedMotion, useInView, useLeadForm, Honeypot,
} from './common.jsx'

/* ===================== HERO (home only) ===================== */
const HERO_DURATION = 6000

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [statsIn, setStatsIn] = useState(false)
  const reduced = useReducedMotion()
  const sectionRef = useRef(null)
  const count = HERO_SLIDES.length
  const go = (i) => setCurrent((i + count) % count)

  useEffect(() => {
    if (paused || reduced) return
    const t = setTimeout(() => setCurrent((c) => (c + 1) % count), HERO_DURATION)
    return () => clearTimeout(t)
  }, [current, paused, reduced, count])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStatsIn(true), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section id="home" ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden bg-navy" role="region" aria-roledescription="carousel" aria-label="KN Builders featured highlights">
      {HERO_SLIDES.map((s, i) => (
        <div key={i} aria-hidden={i !== current} className={`absolute inset-0 transition-opacity duration-1000 ease-out ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          {/* Slide 0 is the LCP image: eager + high priority (and preloaded in the
              page head). Later slides load lazily so they do not compete for
              bandwidth during first paint. */}
          <img
            src={s.img}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'low'}
            decoding="async"
            className={`h-full w-full object-cover ${i === current && !reduced ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy-dark/95 via-navy/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/30" />

      <div className="container-px relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-28">
        <div className="max-w-2xl">
          <div key={current} className="hero-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />{slide.eyebrow}
            </span>
            <h1 className="heading mt-6 text-[2.6rem] leading-[1.04] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl xl:text-7xl">
              {slide.title.map((line, li) => (
                <span key={li} className="block"><span className={li === slide.accentLine ? 'text-orange' : ''}>{line}</span></span>
              ))}
            </h1>
            <p className="mt-5 max-w-lg text-base text-cream/85 sm:text-lg">{slide.desc}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={slide.ctaHref} className="btn-primary group text-base">
                {slide.cta}<Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="/about.html" className="inline-flex items-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-navy">
                Our Process
              </a>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-navy sm:hidden">
                <Icon name="phone" className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-cream/15 pt-7">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-orange sm:text-4xl"><CountUp value={s.value} start={statsIn} /></div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-cream/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-20">
        <div className="container-px flex items-center justify-between gap-4">
          <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
            {HERO_SLIDES.map((s, i) => {
              const isActive = i === current
              return (
                <button key={i} role="tab" aria-selected={isActive} aria-label={`Go to slide ${i + 1}`} onClick={() => go(i)} className="relative h-1.5 overflow-hidden rounded-full bg-cream/25 transition-[width] duration-500" style={{ width: isActive ? 56 : 24 }}>
                  {isActive && (
                    <span key={current} className={`absolute inset-y-0 left-0 rounded-full bg-orange ${paused || reduced ? 'w-full' : 'hero-progress'}`} style={{ animationDuration: `${HERO_DURATION}ms` }} />
                  )}
                </button>
              )
            })}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-navy"><Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" /></button>
            <button onClick={() => go(current - 1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-navy"><Icon name="arrow-left" className="h-4 w-4" /></button>
            <button onClick={() => go(current + 1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white transition hover:bg-orange-light"><Icon name="arrow" className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===================== ABOUT ===================== */
export function AboutSection() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={craftingExcellenceImage} alt="Construction workers on a building site" loading="lazy" className="h-80 w-full rounded-[24px] object-cover sm:h-[440px]" />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-orange px-6 py-4 text-white shadow-xl">
            <span className="font-display text-4xl font-extrabold">25+</span>
            <span className="text-xs font-medium leading-tight">Years of<br />Experience</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow="Who We Are" title="Crafting Excellence in" accent="Every Project" />
          <p className="mt-5 text-navy/70">
            For over two decades, KN Builders has been a trusted name in Tambaram for building homes and
            commercial spaces that stand the test of time. We combine modern engineering with honest
            craftsmanship — and a single accountable team from first drawing to final handover.
          </p>
          <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
            <h3 className="font-display text-lg font-bold text-orange">Our Mission</h3>
            <p className="mt-2 text-sm text-white/70">
              To deliver dependable, high-quality construction with transparency and care — turning our
              clients' visions into spaces they're proud to own.
            </p>
          </div>
          <a href="/about.html" className="btn-primary mt-6">Learn More <Icon name="arrow" className="h-4 w-4" /></a>
        </Reveal>
      </div>
    </section>
  )
}

/* ===================== SERVICES ===================== */
export function ServicesSection({ limit, detailed = false, showFeatures = detailed, showCta = true, bg = 'bg-cream-deep' }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES
  return (
    <section id="services" className={`${bg} py-14 sm:py-20`}>
      <div className="container-px">
        <SectionHeading center eyebrow="Our Services" title="Services That Fit" accent="Your Needs" />
      </div>
      <div className="container-px mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 90} className="group flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-transparent bg-white shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-1 hover:border-orange/40 hover:shadow-xl sm:flex-row">
            <a href={`/services/${s.slug}.html`} className="service-card-image block aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:min-h-[250px] sm:w-[40%] lg:w-[42%]">
              <img src={IMAGES[s.image]} alt="" loading="lazy" className="block h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
            </a>
            <div className="flex min-h-[250px] min-w-0 flex-1 flex-col p-5 sm:w-[60%] sm:p-4 lg:w-[58%] lg:p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="heading text-base leading-snug text-navy sm:text-[0.98rem]"><a href={`/services/${s.slug}.html`} className="transition hover:text-orange">{s.title}</a></h3>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy text-orange transition group-hover:bg-orange group-hover:text-white">
                  <Icon name={s.icon} className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-navy/70 sm:text-[0.72rem]">{detailed ? s.desc : s.summary}</p>
              {showFeatures && (
                <ul className="mt-3 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs leading-snug text-navy/70 sm:text-[0.68rem]"><span className="mt-0.5 shrink-0 text-orange"><Icon name="check" className="h-3 w-3" /></span>{f}</li>
                  ))}
                </ul>
              )}
              <a href={`/services/${s.slug}.html`} className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold text-orange">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      {showCta && (
        <div className="mt-10 text-center">
          <a href="/services.html" className="btn-primary">View All Services <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      )}
    </section>
  )
}

/* ===================== PROCESS ===================== */
export function ProcessSection() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="container-px flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="How We Work" title="How We" accent="Get It Done" />
        <a href="/contact.html" className="btn-primary">Learn More <Icon name="arrow" className="h-4 w-4" /></a>
      </div>
      <div className="container-px mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 110} className="relative rounded-2xl border border-navy/10 p-7">
            <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wide text-white">{s.step}</span>
            {i < STEPS.length - 1 && (
              <span className="absolute right-6 top-7 hidden h-8 w-8 place-items-center rounded-full bg-orange text-white lg:grid"><Icon name="arrow" className="h-4 w-4" /></span>
            )}
            <h3 className="heading mt-5 text-lg text-navy">{s.title}</h3>
            <p className="mt-3 text-sm text-navy/70">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ===================== TRUST BAR ===================== */
const TRUST = [
  { icon: 'award', label: '25+ Years of Experience' },
  { icon: 'check', label: 'Transparent, Itemised Pricing' },
  { icon: 'clock', label: 'On-Time Handover' },
  { icon: 'tech', label: 'CMDA Approval Support' },
  { icon: 'phone', label: 'Free Site Consultation' },
]

export function TrustBar() {
  return (
    <section className="border-b border-navy/5 bg-cream-deep">
      <div className="container-px grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
        {TRUST.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange"><Icon name={t.icon} className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-navy/80">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ===================== PROJECTS ===================== */
// Home showcase — a 3-card grid of recent projects.
export function ProjectsShowcase({ limit = 3 }) {
  const shown = PROJECTS.slice(0, limit)
  return (
    <section id="projects" className="relative overflow-hidden bg-navy py-14 dot-grid sm:py-20">
      <div className="container-px">
        <SectionHeading center dark eyebrow="Recent Projects" title="Our" accent="Completed Projects" />
      </div>
      <div className="container-px mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 80} className="group overflow-hidden rounded-2xl bg-navy-deep ring-1 ring-white/10 transition hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img src={IMAGES[p.img]} alt={`${p.name} — ${p.tag} by KN Builders in ${p.location}`} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-xs font-medium text-white">{p.category}</span>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">{p.year}</span>
            </div>
            <div className="p-6">
              <h3 className="heading text-lg text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-white/65">{p.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                <li className="flex items-center gap-2"><span className="text-orange"><Icon name="pin" className="h-4 w-4" /></span>{p.location}</li>
                <li className="flex items-center gap-2"><span className="text-orange"><Icon name="building" className="h-4 w-4" /></span>{p.area} · {p.duration}</li>
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="/projects.html" className="btn-primary">View All Projects <Icon name="arrow" className="h-4 w-4" /></a>
      </div>
    </section>
  )
}

// Full filterable grid for the Projects page.
export function ProjectsGrid() {
  const [filter, setFilter] = useState('All')
  const cats = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))]
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
  return (
    <section className="projects-grid-section bg-cream py-14 sm:py-20">
      <div className="container-px">
        <SectionHeading center eyebrow="Our Projects" title="Projects That Speak For" accent="Our Quality" />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-navy/70">Explore our completed commercial, residential and renovation projects.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition ${filter === c ? 'bg-orange text-white shadow-sm' : 'bg-white text-navy/70 ring-1 ring-navy/10 hover:bg-orange/10 hover:text-orange'}`}>
              <Icon name={c === 'Residential' ? 'home' : c === 'Commercial' ? 'building' : 'tools'} className="h-3.5 w-3.5" /> {c === 'All' ? 'All Projects' : c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80} className="project-card group overflow-hidden rounded-xl bg-white ring-1 ring-navy/10 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img src={IMAGES[p.img]} alt={`${p.name} — ${p.tag} by KN Builders in ${p.location}`} loading="lazy" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48" />
                <span className="absolute left-3 top-3 rounded-full bg-orange px-2.5 py-1 text-[10px] font-semibold text-white">{p.category}</span>
                <span className="absolute bottom-3 right-3 rounded-full bg-navy/75 px-2 py-1 text-[10px] text-white">{p.year}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="heading text-base text-navy">{p.name}</h3>
                <p className="mt-1.5 text-xs leading-5 text-navy/70">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-navy/70">
                  <li className="flex items-center gap-1.5"><span className="text-orange"><Icon name="pin" className="h-3.5 w-3.5" /></span>{p.location}</li>
                  <li className="flex items-center gap-1.5"><span className="text-orange"><Icon name="building" className="h-3.5 w-3.5" /></span>{p.area}</li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===================== WHY CHOOSE ===================== */
export function WhyChooseSection({ aboutPage = false }) {
  if (aboutPage) {
    return (
      <section className="about-why-section bg-white py-14 sm:py-20">
        <div className="container-px">
          <div className="about-why-top grid items-center gap-10 lg:grid-cols-[0.9fr_1.15fr_1fr] lg:gap-0">
            <Reveal className="relative z-10 flex flex-col lg:pr-10">
              <SectionHeading eyebrow="Why Choose Us" title="Building Trust," accent="Delivering Excellence" />
              <p className="mt-5 max-w-md text-sm leading-7 text-navy/65 sm:text-base">
                We keep the quote itemised, the site tidy and the updates regular — so you always know what is happening on your build and what it costs.
              </p>
              <a href="/contact.html" className="btn-primary mt-6 self-start">Learn More <Icon name="arrow" className="h-4 w-4" /></a>
            </Reveal>

            <Reveal delay={100} className="about-why-hero relative min-w-0">
              <div className="about-why-hero-image">
                <img src={IMAGES.whyChoose} alt="KN Builders engineers reviewing a construction site" loading="lazy" className="h-72 w-full object-cover sm:h-[420px] lg:h-[460px]" />
              </div>
            </Reveal>

            <Reveal delay={180} className="about-why-features grid gap-7 sm:grid-cols-2 lg:pl-10">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="about-why-feature">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white shadow-[0_8px_18px_rgba(201,89,31,0.2)]"><Icon name={w.icon} className="h-5 w-5" /></span>
                <h3 className="heading mt-3 text-base text-navy">{w.title}</h3>
                <div className="mt-2 h-0.5 w-7 bg-orange" />
                <p className="mt-2 text-sm leading-6 text-navy/65">{w.desc}</p>
              </div>
            ))}
            </Reveal>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="container-px grid items-stretch gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col">
          <SectionHeading eyebrow="Why Choose Us" title="Building Trust," accent="Delivering Excellence" />
          <a href="/contact.html" className="btn-primary mt-6 self-start">Learn More <Icon name="arrow" className="h-4 w-4" /></a>
          <div className="relative mt-8">
            <img src={IMAGES.whyChoose} alt="KN Builders engineers reviewing site plans" loading="lazy" className="h-64 w-full rounded-2xl object-cover sm:h-80" />
          </div>
          {aboutPage && (
            <div className="mt-3 rounded-xl bg-olive px-4 py-3 text-white sm:px-5 sm:py-4">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15"><Icon name="check" className="h-4 w-4" /></span>
                <div>
                  <h3 className="heading text-xs">Our Promise</h3>
                  <p className="mt-0.5 text-[10px] text-white/70">Transparent pricing, quality materials and dependable support from start to finish.</p>
                </div>
              </div>
            </div>
          )}
        </Reveal>
        <Reveal delay={120} className="flex self-stretch rounded-2xl bg-olive p-7 sm:p-8">
          {/* items-start keeps each card's own height; the titles below reserve two
              lines so a wrapping title (e.g. "Dates You Can Plan Around") does not
              push its body text out of line with its neighbour in the same row. */}
          <div className="grid w-full content-center items-start gap-x-5 gap-y-8 sm:grid-cols-2">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="flex flex-col">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-orange text-white"><Icon name={w.icon} className="h-5 w-5" /></span>
                <h3 className="heading mt-4 text-base text-white sm:min-h-[3rem]">{w.title}</h3>
                <p className="mt-2 text-sm text-white/85">{w.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ===================== TEAM ===================== */
export function TeamSection() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="container-px">
        <SectionHeading center eyebrow="Meet Our Team" title="Meet the Faces" accent="Behind the Structures" />
      </div>
      <div className="container-px mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 80} className="overflow-hidden rounded-2xl bg-cream-deep ring-1 ring-navy/5">
            <img src={IMAGES[m.img]} alt={`${m.name}, ${m.role} at KN Builders`} loading="lazy" className="h-64 w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="heading text-lg text-navy">{m.name}</h3>
              <p className="mt-1 text-sm text-orange">{m.role}</p>
              <div className="mt-3 flex justify-center gap-2">
                {['facebook', 'twitter', 'linkedin'].map((s) => (
                  <a key={s} href={SITE.social[s]} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full bg-navy/5 text-navy transition hover:bg-orange hover:text-white" aria-label={`${m.name} on ${s}`}><Social name={s} className="h-3.5 w-3.5" /></a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ===================== TESTIMONIALS ===================== */
export function TestimonialsSection({ limit }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS
  const count = items.length
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [perView, setPerView] = useState(1)
  const touchX = useRef(null)
  const viewportRef = useRef(null)

  // Only take over as a slider once mounted. Before that the plain grid below
  // is what renders, so SSR/no-JS still shows every testimonial.
  useEffect(() => { setHydrated(true) }, [])

  // How many cards fit at the current width. Measured rather than hardcoded to
  // a breakpoint so the clamp below stays correct at any viewport size.
  useEffect(() => {
    if (!hydrated) return
    const el = viewportRef.current
    if (!el) return
    const measure = () => {
      const slide = el.querySelector('.testimonial-slide')
      if (!slide) return
      const w = slide.getBoundingClientRect().width
      setPerView(w > 0 ? Math.max(1, Math.round(el.getBoundingClientRect().width / w)) : 1)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [hydrated])

  // Last index that still fills the viewport — going further would show a gap.
  const maxIndex = Math.max(0, count - perView)
  const go = useCallback((i) => {
    const max = Math.max(0, count - perView)
    // wrap around the pages that actually exist
    setCurrent(i < 0 ? max : i > max ? 0 : i)
  }, [count, perView])
  const next = useCallback(() => go(current + 1), [go, current])
  const prev = useCallback(() => go(current - 1), [go, current])

  // A resize can shrink the number of pages; pull `current` back into range.
  useEffect(() => { setCurrent((c) => Math.min(c, maxIndex)) }, [maxIndex])

  // Autoplay — skipped entirely under reduced motion.
  useEffect(() => {
    if (!hydrated || paused || reduced || maxIndex < 1) return
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [hydrated, paused, reduced, maxIndex, next])

  // Don't animate in a background tab.
  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
  }

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)()
    touchX.current = null
  }

  const Card = ({ t, active }) => (
    <article className={`testimonial-card relative h-full rounded-2xl bg-olive-dark p-6 sm:p-8 ${active ? 'is-active' : ''}`}>
      <span className="testimonial-quote" aria-hidden="true">&rdquo;</span>
      <div className="flex items-center gap-1 text-orange">
        {[...Array(5)].map((_, j) => <Icon key={j} name="star" className="h-4 w-4" />)}
        <span className="ml-2 rounded-full bg-white/10 px-2.5 py-1 text-sm font-semibold text-white">{t.rating}</span>
      </div>
      <h3 className="heading mt-5 text-lg text-white sm:text-xl">{t.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">{t.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <img src={IMAGES[t.img]} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full border-2 border-orange object-cover p-0.5" />
        <div>
          <p className="text-base font-semibold text-white">{t.name}</p>
          <p className="text-xs text-white/65">{t.role}</p>
        </div>
      </div>
      <span className="testimonial-accent" aria-hidden="true" />
    </article>
  )

  return (
    <section
      className="relative overflow-hidden bg-olive py-14 dot-grid sm:py-20"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      {/* soft brand glow behind the deck */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-orange/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cream/10 blur-3xl" aria-hidden />

      <div className="container-px relative">
        <SectionHeading center dark eyebrow="Testimonials" title="Experience Shared by" accent="Our Clients" />
      </div>

      {!hydrated ? (
        // Pre-hydration / no-JS: every testimonial, plainly.
        <div className="testimonial-track container-px relative mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => <Card key={t.name} t={t} />)}
        </div>
      ) : (
        <div
          className="container-px relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-live={paused ? 'polite' : 'off'}
        >
          <div className="testimonial-viewport" ref={viewportRef}>
            <div
              className="testimonial-rail"
              /* Shift by whole slides. Percentages here resolve against the
                 rail, whose width is the viewport (the slides overflow it),
                 so a slide is 100/perView percent of the rail — not
                 100/count, which drifted by a partial card on every step and
                 left the last page half empty. */
              style={{ transform: `translate3d(-${(current * 100) / perView}%, 0, 0)` }}
            >
              {items.map((t, i) => (
                <div
                  key={t.name}
                  className="testimonial-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={i < current || i >= current + perView}
                >
                  <Card t={t} active={i >= current && i < current + perView} />
                </div>
              ))}
            </div>
          </div>

          {/* controls — only meaningful when there is more than one page */}
          <div className={`mt-8 flex items-center justify-center gap-4 ${maxIndex < 1 ? 'hidden' : ''}`}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-navy"
            >
              <Icon name="arrow-left" className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1} of ${maxIndex + 1}`}
                  onClick={() => go(i)}
                  className={`testimonial-dot ${i === current ? 'is-active' : ''}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-navy"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

/* ===================== BLOG ===================== */
export function BlogSection({ limit, showCta = true, paginate = false }) {
  const [page, setPage] = useState(0)
  const pageSize = 3
  const pageCount = Math.ceil(BLOGS.length / pageSize)
  const items = paginate
    ? BLOGS.slice(page * pageSize, (page + 1) * pageSize)
    : (limit ? BLOGS.slice(0, limit) : BLOGS)
  return (
    <section id="blog" className="bg-cream py-14 sm:py-20">
      <div className="container-px flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="News & Blogs" title="Our Latest" accent="News & Blogs" />
        {showCta && <a href="/blog.html" className="btn-primary">View All Blogs <Icon name="arrow" className="h-4 w-4" /></a>}
      </div>
      <div className="container-px mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((b, i) => (
          <Reveal key={b.slug} delay={(i % 3) * 80} as="article" className="group overflow-hidden rounded-2xl bg-white ring-1 ring-navy/8 transition hover:-translate-y-1 hover:shadow-xl">
            <a href={`/blog/${b.slug}.html`} className="relative block overflow-hidden">
              <img src={IMAGES[b.img]} alt={`${b.title} — KN Builders`} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-xs font-medium text-white">{b.tag}</span>
            </a>
            <div className="p-5">
              <p className="text-xs text-navy/65">{b.date} · {b.readTime} read</p>
              <h3 className="heading mt-2 text-base text-navy"><a href={`/blog/${b.slug}.html`} className="transition hover:text-orange">{b.title}</a></h3>
              <p className="mt-2 text-sm text-navy/65">{b.excerpt}</p>
              <a href={`/blog/${b.slug}.html`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange">Read More <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
          </Reveal>
        ))}
      </div>
      {paginate && pageCount > 1 && (
        <nav className="container-px mt-10 flex items-center justify-center gap-3" aria-label="Blog pagination">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(current - 1, 0))}
            disabled={page === 0}
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Previous
          </button>
          <span className="text-sm font-semibold text-navy/70" aria-live="polite">Page {page + 1} of {pageCount}</span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(current + 1, pageCount - 1))}
            disabled={page === pageCount - 1}
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <Icon name="arrow" className="h-4 w-4" />
          </button>
        </nav>
      )}
    </section>
  )
}

/* ===================== FAQ ===================== */
export function FaqSection({ items, bg = 'bg-cream-deep' }) {
  const [active, setActive] = useState(0)
  return (
    <section className={`${bg} relative overflow-hidden py-12 sm:py-16`}>
      <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-orange/5 blur-3xl" />
      <div className="container-px relative">
        <SectionHeading center eyebrow="FAQs" title="Question?" accent="Look here." />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-navy/70">Find answers to the most common questions about our services.</p>
      </div>
      <div className="container-px relative mt-10 grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.85fr)]">
        <div className="min-w-0 space-y-3">
          {items.map((f, i) => {
            const open = active === i
            return (
              <div key={f.q} className={`group overflow-hidden rounded-xl border shadow-sm transition ${open ? 'border-orange/40 bg-cream-deep/60 shadow-md' : 'border-navy/8 bg-white hover:border-orange/25'}`}>
                <button type="button" onClick={() => setActive(open ? -1 : i)} className="flex w-full min-w-0 items-center justify-between gap-4 px-4 py-4 text-left sm:px-5" aria-expanded={open} aria-controls={`faq-panel-${i}`}>
                  <span className="flex min-w-0 items-center gap-3 text-sm font-semibold text-navy">
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition ${open ? 'bg-orange text-white' : 'bg-navy/5 text-navy/70 group-hover:bg-orange/10 group-hover:text-orange'}`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="min-w-0">{f.q}</span>
                  </span>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${open ? 'bg-orange/15 text-orange rotate-180' : 'bg-navy/5 text-navy/70 group-hover:bg-orange/10 group-hover:text-orange'}`}><Icon name={open ? 'minus' : 'plus'} className="h-4 w-4" /></span>
                </button>
                <div id={`faq-panel-${i}`} role="region" className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden" {...(open ? {} : { inert: '' })}>
                    <p className="mx-4 border-t border-navy/10 pb-5 pt-3 text-sm leading-relaxed text-navy/75 sm:mx-5">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="min-w-0 space-y-4">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-[0_12px_30px_rgba(46,42,38,0.22)] dot-grid sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange/20 blur-3xl" />
            <div className="relative">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-orange text-white"><Icon name="chat" className="h-5 w-5" /></span>
              <h3 className="heading mt-4 text-xl">You have different questions?</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">Our team will answer all your questions. We ensure a quick response.</p>
              <a href="/contact.html" className="btn-primary mt-5">Contact Us <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/8 sm:p-6">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-orange text-white"><Icon name="phone" className="h-5 w-5" /></span>
            <div className="min-w-0">
              <p className="text-xs text-navy/65">Your Contact, Our Priority</p>
              <p className="heading text-lg text-navy">24/7 Service</p>
              <a href={SITE.phoneHref} className="text-sm text-orange">{SITE.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===================== SERVICE AREAS (local SEO / GEO) =====================
   One observer on the grid (not one per card) so the cascade is actually seen
   as a cascade — ten independent observers meant cards below the fold popped
   in singly as you scrolled, and the stagger was never visible.

   Delay is passed as a CSS variable rather than an inline transitionDelay so
   the grid can re-time the cascade per breakpoint: the old `(i % 3) * 70`
   assumed three columns and ran diagonally at sm, out of order at mobile.

   The section alternates between the two delivery regions. Swapping is a
   two-phase fade (out, swap, cascade back in) driven by `phase`, so the grid
   never shows half of one region and half of the other. Both regions carry
   ten localities, so the grid keeps its shape across a swap.

   Rotation is slow, and stops for good once the visitor picks a region: an
   auto-swap firing mid-sentence reads as the page fighting the reader, and
   these notes are dense enough to be worth actually reading. */
const REGION_DURATION = 9000
const REGION_FADE = 420
// Mobile stacks one card per row, so all ten ran to ~2,200px of scroll with
// the content changing underneath the reader. Show a short list, then let
// them open the rest.
const MOBILE_PREVIEW = 4

export function ServiceAreas() {
  const [gridRef, gridIn] = useInView({ threshold: 0.05, rootMargin: '0px 0px -5% 0px' })
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('in')
  const [paused, setPaused] = useState(false)
  const [userPicked, setUserPicked] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()
  const count = SERVICE_REGIONS.length

  // Advance only while the grid is on screen, the pointer is away, and the
  // visitor has not taken over by choosing a region themselves.
  useEffect(() => {
    if (paused || reduced || !gridIn || userPicked) return
    const t = setTimeout(() => setPhase('out'), REGION_DURATION)
    return () => clearTimeout(t)
  }, [index, paused, reduced, gridIn, userPicked])

  // Second phase: once the old set has faded, swap the data and cascade back.
  useEffect(() => {
    if (phase !== 'out') return
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % count)
      setPhase('in')
    }, REGION_FADE)
    return () => clearTimeout(t)
  }, [phase, count])

  const select = (i) => {
    setUserPicked(true)
    if (i === index) return
    setPhase('out')
    setTimeout(() => { setIndex(i); setPhase('in') }, reduced ? 0 : REGION_FADE)
  }

  const region = SERVICE_REGIONS[index]
  const [home, ...rest] = region.areas
  const swapping = phase === 'out' && !reduced
  const rotating = !userPicked && !paused && !reduced && gridIn

  return (
    <section
      className="bg-cream-deep py-14 sm:py-20"
      aria-labelledby="service-areas-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-px">
        <div className="text-center">
          <span className="eyebrow justify-center">Service Area</span>
          <h2 id="service-areas-heading" className="heading mt-4 text-3xl text-navy sm:text-4xl">
            Proudly Building Across{' '}
            {/* Fixed-width slot: the two labels differ in length, so reserving
                the space keeps the heading from jumping as they cross-fade. */}
            <span className="region-swap">
              <span key={region.key} className="region-swap__label text-orange">{region.label}</span>
            </span>
          </h2>
        </div>

        <p
          key={`${region.key}-blurb`}
          className={`region-blurb mx-auto mt-5 max-w-3xl text-center text-navy/70 ${swapping ? 'is-out' : ''}`}
        >
          {region.blurb}
        </p>

        {/* Manual control, so the rotation is not the only way to reach a
            region — and so keyboard users can pick one directly. */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Delivery regions">
          {SERVICE_REGIONS.map((r, i) => (
            <button
              key={r.key}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => select(i)}
              className={`region-tab ${i === index ? 'is-active' : ''}`}
            >
              <span className="region-tab__text">{r.label}</span>
              {/* The countdown doubles as the affordance that this rotates on
                  its own; without it the swap arrives unexplained. Keyed on
                  index so each turn restarts the sweep. */}
              {i === index && rotating && (
                <span
                  key={`progress-${index}`}
                  className="region-tab__progress"
                  style={{ animationDuration: `${REGION_DURATION}ms` }}
                />
              )}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          aria-live="polite"
          className={`area-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${gridIn ? 'is-in' : ''} ${swapping ? 'is-swapping' : ''} ${expanded ? 'is-expanded' : ''}`}
        >
          {/* Lead card — spans the full row and inverts to charcoal so the grid
              has a focal point and the primary locality reads first. */}
          <article key={`${region.key}-${home.name}`} className="area-card area-card--home sm:col-span-2 lg:col-span-3" style={{ '--i': 0 }}>
            <span className="area-card__badge">
              <Icon name="pin" className="h-3.5 w-3.5" /> {region.key === 'north' ? 'Home base' : 'Delta base'}
            </span>
            <h3 className="area-card__title area-card__title--home">Construction in {home.name}</h3>
            <p className="area-card__note area-card__note--home">{home.note}</p>
          </article>

          {/* With the lead card on its own row the remaining nine divide evenly
              at lg (3 × 3); only the sm layout is left with an odd card, so
              only sm needs the final card widened to close the row. */}
          {rest.map((a, i) => (
            <article
              key={`${region.key}-${a.name}`}
              className={`area-card${i === rest.length - 1 ? ' sm:col-span-2 lg:col-span-1' : ''}${i >= MOBILE_PREVIEW ? ' area-card--extra' : ''}`}
              style={{ '--i': i + 1 }}
            >
              <h3 className="area-card__title">
                <span className="area-card__pin"><Icon name="pin" className="h-4 w-4" /></span>
                Construction in {a.name}
              </h3>
              <p className="area-card__note">{a.note}</p>
            </article>
          ))}
        </div>

        {/* Mobile only — from sm up the grid already shows every card. */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button type="button" onClick={() => setExpanded((v) => !v)} className="area-more" aria-expanded={expanded}>
            {expanded ? 'Show fewer areas' : `Show all ${region.areas.length} areas`}
            <Icon name={expanded ? 'minus' : 'plus'} className="h-4 w-4" />
          </button>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-navy/60">
          Building somewhere else in Tamil Nadu? <a href="/contact.html" className="font-semibold text-orange hover:underline">Get in touch</a> — we
          take projects beyond these districts too.
        </p>
      </div>
    </section>
  )
}

/* ===================== CONTACT ===================== */
export function ContactSection({ withMap = true }) {
  const { status, error, submit } = useLeadForm()
  return (
    <section id="contact" className="relative overflow-x-hidden bg-cream py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-olive/10 blur-3xl" />
      <div className="container-px relative">
        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)]">
        <form
          onSubmit={(e) => { e.preventDefault(); submit(e.currentTarget, 'Contact form enquiry') }}
          className="min-w-0 rounded-2xl bg-white p-5 shadow-[0_10px_35px_rgba(46,42,38,0.08)] ring-1 ring-navy/5 sm:p-7"
        >
          <div className="mb-6 flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange"><Icon name="send" className="h-5 w-5" /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">Get in touch</p>
              <h2 className="heading mt-1 text-xl text-navy sm:text-2xl">We'd Love to Hear From You</h2>
              <p className="mt-1 text-xs text-navy/70">Have a question, suggestion or project in mind? Let's talk!</p>
            </div>
          </div>
          <Honeypot />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="first" label="First Name *" placeholder="Enter your first name" required autoComplete="given-name" />
            <Field name="last" label="Last Name *" placeholder="Enter your last name" required autoComplete="family-name" />
            <Field name="email" label="Email *" type="email" placeholder="Enter your email" required autoComplete="email" />
            <Field name="phone" label="Phone Number *" type="tel" placeholder="Enter your phone number" required autoComplete="tel" />
          </div>
          <div className="mt-5"><Field name="subject" label="Subject *" placeholder="Enter subject here" required /></div>
          <div className="mt-5">
            <label htmlFor="f-message" className="text-sm font-medium text-navy">Your Message *</label>
            <textarea id="f-message" name="message" rows="5" required placeholder="Tell us about your project — type, location, approximate size and timeline." className="mt-2 w-full resize-y rounded-xl border border-navy/15 bg-cream-deep px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/15" />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:cursor-wait disabled:bg-orange/70">{status === 'sending' ? 'Sending…' : 'Send Message'} <Icon name={status === 'sending' ? 'clock' : 'send'} className={`h-4 w-4 ${status === 'sending' ? 'animate-spin-slow' : ''}`} /></button>
            <span className="inline-flex items-center gap-1.5 text-xs text-navy/70"><Icon name="clock" className="h-3.5 w-3.5" /> Our team will contact you shortly</span>
          </div>
          <div aria-live="polite" role="status">
            {status === 'sent' && (
              <p className="mt-4 flex items-center gap-2 rounded-xl bg-olive/10 px-3 py-2.5 text-sm font-medium text-olive ring-1 ring-olive/20">
                <Icon name="check" className="h-4 w-4 shrink-0" /> Message sent successfully. Our team will contact you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 flex items-center gap-2 rounded-xl bg-orange/10 px-3 py-2.5 text-sm font-medium text-orange ring-1 ring-orange/25">
                <Icon name="close" className="h-4 w-4 shrink-0" /> {error}
              </p>
            )}
          </div>
        </form>

        <div className="contact-info-panel relative min-w-0 overflow-hidden rounded-2xl bg-navy p-5 text-white shadow-[0_10px_35px_rgba(46,42,38,0.22)] dot-grid sm:p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange/20 blur-3xl" />
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange">Contact Us</p>
            <h2 className="heading mt-1 text-2xl text-white">Get in touch</h2>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-cream/70">We&apos;re here to help. Reach out to us through any of the channels below.</p>
            <div className="mt-5">
              <InfoBlock title="Address" lines={[{ text: `${SITE.address.street}, ${SITE.address.locality}`, href: SITE.mapLink }, { text: `${SITE.address.city}, ${SITE.address.region} - ${SITE.address.postalCode}`, href: SITE.mapLink }]} icon="pin" titleClassName="text-white" iconClassName="bg-orange text-white" lineClassName="text-cream/75" />
              <InfoBlock title="Phone" lines={[{ text: SITE.phone, href: SITE.phoneHref }]} icon="phone" titleClassName="text-white" iconClassName="bg-orange text-white" lineClassName="text-cream/75" />
              <InfoBlock title="Email" lines={[{ text: SITE.email, href: `mailto:${SITE.email}` }]} icon="mail" titleClassName="text-white" iconClassName="bg-orange text-white" lineClassName="text-cream/75" />
              <InfoBlock title="Open Time" lines={SITE.hours.map((h) => `${h.days} : ${h.time}`)} icon="clock" titleClassName="text-white" iconClassName="bg-orange text-white" lineClassName="text-cream/75" />
            </div>
            <div className="mt-6">
              <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <h3 className="heading text-sm text-white">Follow Us</h3>
                <p className="text-[10px] text-cream/60">Stay connected</p>
                <div className="mt-2 flex gap-2">
                {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((s) => (
                  <a key={s} href={SITE.social[s]} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-cream transition hover:bg-orange hover:text-white" aria-label={s}><Social name={s} /></a>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {withMap && (
        <div className="mt-5 grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)]">
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl ring-1 ring-navy/10">
            <iframe
              title={`Map to ${SITE.name}`}
              src={SITE.mapEmbed}
              className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-light"
            >
              <Icon name="pin" className="h-4 w-4" /> Get Directions
            </a>
          </div>
          <div className="flex min-h-[220px] flex-col justify-center rounded-2xl bg-orange/10 p-7 ring-1 ring-orange/15 sm:p-8">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-orange text-white"><Icon name="phone" className="h-5 w-5" /></span>
            <h2 className="heading mt-4 text-xl text-navy sm:text-2xl">Prefer to Talk Directly?</h2>
            <p className="mt-2 text-sm text-navy/70">Call us or message on WhatsApp for a faster response.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={SITE.phoneHref} className="btn-primary w-fit">Call Now <Icon name="phone" className="h-4 w-4" /></a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebd5c]">WhatsApp <Icon name="whatsapp" className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
