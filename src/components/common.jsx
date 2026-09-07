import { useState, useEffect, useRef } from 'react'
import { Icon } from '../icons.jsx'
import { SITE } from '../site.js'
import { IMAGES } from '../data.js'
import { submitLead, formValues } from '../lib/lead.js'

/* ---------------- Lead form helpers ---------------- */
// Hidden honeypot field — bots fill it, humans don't (Web3Forms drops them).
export function Honeypot() {
  return <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
}

// Shared submit state machine: idle | sending | sent | error.
export function useLeadForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const submit = async (form, subject) => {
    setStatus('sending'); setError('')
    const res = await submitLead(formValues(form), { subject })
    if (res.ok) { setStatus('sent'); try { form.reset() } catch { /* ignore */ } }
    else { setStatus('error'); setError(res.error || 'Something went wrong. Please try again.') }
    return res
  }
  const reset = () => { setStatus('idle'); setError('') }
  return { status, error, submit, reset }
}

/* ---------------- Motion hooks ---------------- */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const fn = () => setReduced(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return reduced
}

// Adds `.is-in` when the element scrolls into view — drives reveal-on-scroll animation.
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

// Trap keyboard focus within a container while `active`, and restore focus
// to the previously-focused element on deactivate. Returns a ref for the container.
export function useFocusTrap(active) {
  const ref = useRef(null)
  useEffect(() => {
    if (!active) return
    const node = ref.current
    if (!node) return
    const prev = document.activeElement
    const SEL = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
    const items = () => Array.from(node.querySelectorAll(SEL)).filter((el) => el.offsetParent !== null)
    ;(items()[0] || node).focus?.()
    const onKey = (e) => {
      if (e.key !== 'Tab') return
      const f = items()
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    node.addEventListener('keydown', onKey)
    return () => {
      node.removeEventListener('keydown', onKey)
      try { prev?.focus?.() } catch { /* ignore */ }
    }
  }, [active])
  return ref
}

/* Reveal wrapper — fades/slides children in on scroll (respects reduced motion). */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

/* ---------------- Brand mark ---------------- */
/* The KN monogram, traced from the original brand mark. Drawn inline (rather
   than via <img src="/logo.svg">) so the N and frame can follow the surrounding
   theme with currentColor — charcoal on light headers, cream on dark ones —
   while the K keeps the terracotta brand accent in both.

   The square frame is omitted below ~40px, where its stroke and the counters
   inside the letterforms close up and the mark turns into a blob. */
export function LogoMark({ className = 'h-9 w-9', framed = true }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={`${SITE.name} monogram`}>
      {framed && (
        <path d="M0 0 h120 v120 H0 Z M3.6 3.6 V116.4 H116.4 V3.6 Z" fill="currentColor" fillRule="evenodd" />
      )}
      {/* N */}
      <g fill="currentColor">
        <path d="M7.2 7.2 H26 L51 46 V54.5 L33.5 39.5 V51 L7.2 51 Z" />
        <path d="M59.5 55.5 L90 83 V112.8 L62.5 84.5 Z" />
        <rect x="90" y="7.2" width="23.3" height="105.6" />
      </g>
      {/* K — always the brand terracotta */}
      <g fill="#c9591f">
        <path d="M84.9 16.5 V43.5 L36.5 90 L21.5 74.5 Z" />
        <path d="M6.8 47 H30.5 V112.8 H6.8 Z" />
        <path d="M30.5 65.5 L79.1 112.8 H53.1 L30.5 89.5 Z" />
      </g>
    </svg>
  )
}

export function Logo({ dark = false }) {
  return (
    <a href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
      <LogoMark framed={false} className={`h-9 w-9 shrink-0 ${dark ? 'text-cream' : 'text-navy'}`} />
      {/* "KN Builders" is two words — set with a real space rather than relying on
          the colour change to separate them. The weight step (800 vs 600) carries
          the hierarchy even in greyscale or for colour-blind readers, and keeps the
          wordmark from competing with the already-heavy monogram beside it. */}
      <span className={`font-display text-xl tracking-[-0.2px] ${dark ? 'text-white' : 'text-navy'}`}>
        <span className="font-extrabold">KN</span>{' '}
        <span className="font-semibold text-orange">Builders</span>
      </span>
    </a>
  )
}

/* ---------------- Count-up stat ---------------- */
// Renders the final value during SSR (so crawlers and no-JS visitors see the real
// number), then resets to 0 on the client only once we know we can animate.
export function CountUp({ value, start }) {
  const num = parseInt(value, 10) || 0
  const suffix = value.replace(/[0-9]/g, '')
  const [n, setN] = useState(num)
  const [armed, setArmed] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    setN(0)
    setArmed(true)
  }, [reduced])

  useEffect(() => {
    if (!start || !armed || reduced) return
    let raf = 0
    const dur = 1400
    let t0 = null
    const tick = (t) => {
      if (t0 === null) t0 = t
      const p = Math.min((t - t0) / dur, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * num))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, armed, num, reduced])

  return <span>{n}{suffix}</span>
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({ eyebrow, title, accent, center = false, dark = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className={`heading mt-4 text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>
        {title} {accent && <span className="text-orange">{accent}</span>}
      </h2>
    </div>
  )
}

/* ---------------- Page banner (sub-page hero) ---------------- */
export function PageBanner({ eyebrow, title, accent, subtitle, crumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-32 pb-16 dot-grid sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-olive/20 blur-3xl" />
      <div className="container-px relative">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs font-medium text-cream/70">
          <a href="/" className="transition hover:text-orange">Home</a>
          <span aria-hidden>/</span>
          <span className="text-cream/85">{crumb || title}</span>
        </nav>
        <span className="eyebrow text-orange">{eyebrow}</span>
        <h1 className="heading mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
          {title} {accent && <span className="text-orange">{accent}</span>}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-cream/75 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}

/* ---------------- CTA band ---------------- */
export function CtaBand({ title = 'Have a Project in Mind?', accent = "Let's Build It.", text = 'Get a free, no-obligation consultation and a transparent quote from our team.', projectPage = false }) {
  if (projectPage) {
    return (
      <section className="project-cta-section bg-cream py-10 sm:py-16">
        <div className="container-px">
          <div className="project-cta relative overflow-hidden rounded-2xl bg-cream px-6 py-8 ring-1 ring-orange/10 sm:px-10 sm:py-10">
            <div className="relative z-10 max-w-xl">
              <span className="eyebrow text-[10px]">Start Your Journey</span>
              <h2 className="heading mt-3 text-2xl text-navy sm:text-4xl">
                {title} <span className="text-orange">{accent}</span>
              </h2>
              <p className="mt-3 max-w-md text-xs leading-5 text-navy/70 sm:text-sm">{text}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/contact.html" className="btn-primary group px-5 py-2.5 text-xs">
                  Get A Free Quote <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-xs font-semibold text-navy transition hover:border-orange hover:text-orange">
                  <Icon name="phone" className="h-3.5 w-3.5" /> {SITE.phone}
                </a>
              </div>
            </div>
            <div className="project-cta-art" aria-hidden="true">
              <div className="project-cta-sun" />
              <img src={IMAGES.projectCtaHouse} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center dot-grid sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange/20 blur-3xl" />
          <h2 className="heading relative mx-auto max-w-2xl text-2xl text-cream sm:text-4xl">
            {title} <span className="text-orange">{accent}</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-cream/70 sm:text-base">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact.html" className="btn-primary group text-base">
              Get A Free Quote <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-navy">
              <Icon name="phone" className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Form helpers ---------------- */
export function Field({ label, placeholder, type = 'text', name, required = false, autoComplete }) {
  const id = `f-${name || label.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">{label}</label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-navy/15 bg-cream-deep px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/15" />
    </div>
  )
}

// `lines` accepts strings, or { text, href } to render a tappable link (tel:/mailto:/map).
export function InfoBlock({ title, lines, icon, titleClassName = 'text-orange', iconClassName = 'bg-orange text-white', lineClassName = 'text-white/70' }) {
  return (
    <div className="mb-5 flex gap-3">
      <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full ${iconClassName}`}><Icon name={icon} className="h-4 w-4" /></span>
      <div className="min-w-0">
        <h3 className={`heading text-base ${titleClassName}`}>{title}</h3>
        {lines.map((l) => {
          const { text, href } = typeof l === 'string' ? { text: l, href: null } : l
          const external = href && /^https?:/.test(href)
          return href
            ? <a key={text} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={`block break-words text-sm underline-offset-2 transition hover:text-orange hover:underline ${lineClassName}`}>{text}</a>
            : <p key={text} className={`break-words text-sm ${lineClassName}`}>{text}</p>
        })}
      </div>
    </div>
  )
}
