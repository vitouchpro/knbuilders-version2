import { useState, useEffect } from 'react'
import { Icon } from '../icons.jsx'
import { NAV_LINKS } from '../site.js'
import { Logo } from './common.jsx'

/* Sticky, scroll-aware header. `current` = active page key (e.g. 'services'). */
export default function Header({ current = 'home', onGetQuote }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        const docH = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(y > 24)
        setProgress(docH > 0 ? (y / docH) * 100 : 0)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On inner pages the header background is always solid for legibility.
  const solid = scrolled || current !== 'home'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        solid
          ? 'bg-cream/80 shadow-[0_8px_30px_-12px_rgba(46,42,38,0.25)] backdrop-blur-xl supports-[backdrop-filter]:bg-cream/65'
          : 'bg-transparent'
      }`}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-orange via-orange-light to-olive transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      <div className={`container-px flex items-center justify-between transition-[height] duration-500 ease-out ${solid ? 'h-16' : 'h-20'}`}>
        <Logo dark={!solid} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const isActive = current === l.key
            const idle = solid ? 'text-navy/75 hover:text-navy' : 'text-cream/85 hover:text-cream'
            return (
              <a
                key={l.key}
                href={l.href}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-orange' : idle}`}
                data-active={isActive}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" onClick={onGetQuote} className="btn-primary group hidden sm:inline-flex">
            Get A Quote
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full border backdrop-blur transition lg:hidden ${
              solid || open ? 'border-navy/15 bg-cream/60 text-navy hover:bg-navy hover:text-cream' : 'border-cream/30 text-cream hover:bg-cream hover:text-navy'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={`container-px overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden ${open ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mb-3 rounded-2xl border border-navy/10 bg-cream/95 p-3 shadow-2xl backdrop-blur-xl">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              aria-current={current === l.key ? 'page' : undefined}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-navy/5 ${current === l.key ? 'text-orange' : 'text-navy/80'}`}
            >
              {l.label}
            </a>
          ))}
          <button type="button" onClick={() => { setOpen(false); onGetQuote?.() }} className="btn-primary mt-2 w-full justify-center">
            Get A Quote <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
