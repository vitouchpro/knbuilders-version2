import { useState, useEffect } from 'react'
import { Icon } from '../icons.jsx'
import { SITE } from '../site.js'
import { SERVICES, IMAGES } from '../data.js'
import { useLeadForm, Honeypot, useFocusTrap } from './common.jsx'

/* ------------------------------------------------------------------ *
 * Auto-popup lead form.
 * - Opens after a delay OR on exit-intent, once per visit, and on demand
 *   (header "Get A Quote" button / chat assistant).
 * - Auto-closes 30s after opening, UNLESS the visitor starts filling it in.
 * - Two-pane attractive design with an animated countdown bar.
 * ------------------------------------------------------------------ */
const SEEN_KEY = 'kn_quote_seen'
const OPEN_DELAY_MS = 15000
const AUTO_CLOSE_MS = 30000

const TRUST = ['25+ years building in Chennai', '640+ projects delivered', 'Transparent, itemised pricing']

export default function QuotePopup({ open, onOpen, onClose }) {
  const { status, error, submit, reset } = useLeadForm()
  const [engaged, setEngaged] = useState(false)
  const sent = status === 'sent'
  const trapRef = useFocusTrap(open)

  // Auto-trigger: delay + exit-intent, once per visit.
  useEffect(() => {
    let done = false
    try { if (sessionStorage.getItem(SEEN_KEY)) return } catch { /* ignore */ }
    const fire = () => {
      if (done) return
      done = true
      try { sessionStorage.setItem(SEEN_KEY, '1') } catch { /* ignore */ }
      cleanup()
      onOpen?.()
    }
    const onMouseOut = (e) => { if (e.clientY <= 0) fire() }
    const timer = setTimeout(fire, OPEN_DELAY_MS)
    document.addEventListener('mouseout', onMouseOut)
    function cleanup() {
      clearTimeout(timer)
      document.removeEventListener('mouseout', onMouseOut)
    }
    return cleanup
  }, [onOpen])

  // Reset state every time the popup opens.
  useEffect(() => { if (open) { reset(); setEngaged(false) } }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-close 30s after opening — paused once the visitor engages or submits.
  useEffect(() => {
    if (!open || sent || engaged) return
    const t = setTimeout(() => onClose?.(), AUTO_CLOSE_MS)
    return () => clearTimeout(t)
  }, [open, sent, engaged, onClose])

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="popup-backdrop fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label="Get a free quote">
      <div ref={trapRef} tabIndex={-1} className="popup-card relative w-full max-w-3xl overflow-hidden rounded-3xl bg-cream shadow-2xl outline-none" onClick={(e) => e.stopPropagation()}>
        {/* 30s auto-close countdown — pauses (hidden) once the visitor engages */}
        {!sent && !engaged && (
          <span aria-hidden className="quote-countdown absolute left-0 top-0 z-20 h-1 bg-orange" style={{ animationDuration: `${AUTO_CLOSE_MS}ms` }} />
        )}

        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-30 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-navy shadow ring-1 ring-navy/10 transition hover:bg-navy hover:text-white">
          <Icon name="close" className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="px-7 py-14 text-center">
            <span className="success-pop mx-auto grid h-16 w-16 place-items-center rounded-full bg-orange text-white"><Icon name="check" className="h-8 w-8" /></span>
            <h2 className="heading mt-5 text-2xl text-navy">Thank you! 🎉</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-navy/65">Your request is in. Our team will reach out shortly. For anything urgent, call {SITE.phone}.</p>
            <button onClick={onClose} className="btn-primary mt-6">Done <Icon name="arrow" className="h-4 w-4" /></button>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1.05fr_1fr]">
            {/* left visual pane (desktop) */}
            <div className="relative hidden overflow-hidden bg-navy p-8 text-white dot-grid md:flex md:flex-col">
              <img src={IMAGES.whyChoose} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange/30 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Free · No Obligation
                </span>
                <h2 className="heading mt-4 text-3xl text-cream">Get a Free <span className="text-orange">Quote</span></h2>
                <p className="mt-2 text-sm text-cream/75">Tell us about your project — we'll call you back within one business day.</p>
              </div>
              <ul className="relative mt-auto space-y-3 pt-10">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-cream/85">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange text-white"><Icon name="check" className="h-3.5 w-3.5" /></span>{t}
                  </li>
                ))}
              </ul>
            </div>

            {/* form pane */}
            <div className="p-6 sm:p-8">
              {/* mobile header (left pane is hidden on small screens) */}
              <div className="md:hidden">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Free · No Obligation
                </span>
                <h2 className="heading mt-3 text-2xl text-navy">Get a Free <span className="text-orange">Quote</span></h2>
                <p className="mt-1.5 text-sm text-navy/70">We'll call you back within one business day.</p>
              </div>

              <form
                onFocusCapture={() => setEngaged(true)}
                onSubmit={(e) => { e.preventDefault(); submit(e.currentTarget, 'Free quote request') }}
                className="mt-5 md:mt-0"
              >
                <Honeypot />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className="text-sm font-medium text-navy">Your Name *</label>
                    <input id="q-name" name="name" required placeholder="Ex. John Doe" className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange" />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className="text-sm font-medium text-navy">Phone *</label>
                    <input id="q-phone" name="phone" required type="tel" placeholder="+91 ……" className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="q-service" className="text-sm font-medium text-navy">I'm interested in *</label>
                  <select id="q-service" name="service" required defaultValue="" className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-orange">
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="q-msg" className="text-sm font-medium text-navy">Project details <span className="text-navy/40">(optional)</span></label>
                  <textarea id="q-msg" name="message" rows="3" placeholder="Plot size, location, timeline…" className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange" />
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn-primary mt-5 w-full justify-center text-base disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Request My Free Quote'} <Icon name="arrow" className="h-4 w-4" />
                </button>
                {status === 'error' && <p className="mt-2 text-center text-sm text-orange" role="alert">{error}</p>}
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-navy/70">
                  <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 transition hover:text-orange"><Icon name="phone" className="h-3.5 w-3.5" /> {SITE.phone}</a>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-orange"><Icon name="whatsapp" className="h-3.5 w-3.5" /> WhatsApp</a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
