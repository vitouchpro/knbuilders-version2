import { useState, useEffect, useRef } from 'react'
import { Icon } from '../icons.jsx'
import { SITE, SERVICE_AREA_NAMES } from '../site.js'
import { SERVICES, FAQS } from '../data.js'
import { useFocusTrap } from './common.jsx'

/* ------------------------------------------------------------------ *
 * Smart rule-based assistant. Matches the visitor's message against a
 * set of intents built from the site's own data (services, FAQs, NAP)
 * and replies instantly — no backend, no API key. Falls back to a
 * human hand-off (call / WhatsApp / quote form) when unsure.
 * ------------------------------------------------------------------ */

// Whole-word / phrase match so short tokens like "hi"/"hey" don't
// trigger on substrings inside words ("which", "this", "where").
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const has = (t, ...words) => words.some((w) => new RegExp(`(^|[^a-z])${esc(w)}([^a-z]|$)`, 'i').test(t))

const SERVICE_LINES = SERVICES.map((s) => `• ${s.title}`).join('\n')

function matchService(t) {
  return SERVICES.find((s) =>
    s.title.toLowerCase().split(/\W+/).some((w) => w.length > 3 && t.includes(w)) ||
    t.includes(s.slug.split('-')[0]),
  )
}

function getReply(raw) {
  const t = raw.toLowerCase().trim()

  if (has(t, 'hi', 'hello', 'hey', 'good morning', 'good evening', 'vanakkam'))
    return { text: `Hi there! 👋 I'm the KN Builders assistant. I can help with our services, pricing, project timelines or booking a free site visit. What would you like to know?`, chips: ['Our services', 'Get a quote', 'How much to build?', 'Areas you cover'] }

  if (has(t, 'service', 'what do you do', 'what do you build', 'offer'))
    return { text: `We're a full-service construction company. Here's what we do:\n\n${SERVICE_LINES}\n\nWant details on any one of these?`, chips: [...SERVICES.slice(0, 3).map((s) => s.title), 'Get a quote'] }

  const svc = matchService(t)
  if (svc && has(t, 'detail', 'tell me', 'about', 'how', svc.title.toLowerCase().split(' ')[0]))
    return { text: `${svc.title} — ${svc.desc}\n\nIncludes: ${svc.features.join(', ')}.\n\nShall I have our team send you a free quote?`, chips: ['Get a quote', 'Call now', 'Other services'] }

  if (has(t, 'price', 'cost', 'budget', 'rate', 'how much', 'per sq', 'sqft', 'square'))
    return { text: `Cost depends on built-up area, materials, finishes and site conditions, so we give a transparent, itemised per-square-foot estimate after a quick site assessment — and your first consultation and quote are free. Want me to set that up?`, chips: ['Get a free quote', 'Call now'] }

  if (has(t, 'time', 'long', 'duration', 'how many month', 'timeline', 'finish'))
    return { text: `A typical independent house takes about 9–14 months from foundation to handover, depending on size and finishes. We share a milestone schedule at the start and track it weekly with photo updates.`, chips: ['Get a quote', 'See our projects'] }

  if (has(t, 'area', 'location', 'where', 'serve', 'cover', 'tambaram', 'chennai', 'near'))
    return { text: `We build across the north Tamil Nadu corridor — ${SERVICE_AREA_NAMES.slice(0, 6).join(', ')} and nearby localities — and in the Thanjavur delta districts. Our office is at ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}.`, chips: ['Get a quote', 'Call now'] }

  if (has(t, 'contact', 'call', 'phone', 'number', 'reach', 'talk', 'speak'))
    return { text: `You can reach us directly:\n📞 ${SITE.phone}\n✉️ ${SITE.email}\n\nOr leave your details and we'll call you back.`, chips: ['Get a quote', 'WhatsApp us'] }

  if (has(t, 'quote', 'estimate', 'enquiry', 'enquire', 'book', 'visit', 'callback', 'call back', 'start', 'project'))
    return { text: `Great — let's get you a free quote. Tap the button below to open our quick enquiry form, or call ${SITE.phone} and we'll take it from there.`, chips: ['Open quote form', 'Call now', 'WhatsApp us'] }

  if (has(t, 'project', 'portfolio', 'work', 'completed', 'example'))
    return { text: `We've delivered 640+ projects — homes, villas, apartments and commercial buildings across Chennai. You can browse them on our Projects page.`, chips: ['See projects', 'Get a quote'] }

  if (has(t, 'about', 'who are you', 'experience', 'year', 'trust', 'company'))
    return { text: `KN Builders has been building in Tambaram since 2001 — 25+ years, 640+ projects and a 4.9★ client rating. One accountable team handles design, build and handover.`, chips: ['Our services', 'Get a quote'] }

  if (has(t, 'thank', 'thanks', 'great', 'ok', 'cool', 'nice'))
    return { text: `Happy to help! 😊 Anything else I can do — a quote, a callback, or more on our services?`, chips: ['Get a quote', 'Our services'] }

  // Try to answer from the FAQ knowledge base
  const faq = FAQS.find((f) => f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 4).some((w) => t.includes(w)))
  if (faq) return { text: faq.a, chips: ['Get a quote', 'Our services'] }

  return { text: `I'm not totally sure on that one — but our team will know. You can call ${SITE.phone}, message us on WhatsApp, or leave your details for a free quote.`, chips: ['Open quote form', 'Call now', 'WhatsApp us'] }
}

const GREETING = {
  from: 'bot',
  text: `Hi! 👋 I'm the KN Builders assistant. Ask me about our services, pricing or timelines — or book a free site visit.`,
  chips: ['Our services', 'How much to build?', 'Get a quote', 'Areas you cover'],
}

export default function ChatAssistant({ onOpenQuote }) {
  const [open, setOpen] = useState(false)
  const [nudge, setNudge] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const trapRef = useFocusTrap(open)

  // gentle one-time nudge bubble after a few seconds
  useEffect(() => {
    const seen = sessionStorage.getItem('kn_chat_opened')
    if (seen) return
    const t = setTimeout(() => setNudge(true), 8000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, typing, open])

  useEffect(() => {
    if (open) {
      setNudge(false)
      sessionStorage.setItem('kn_chat_opened', '1')
      const t = setTimeout(() => inputRef.current?.focus(), 350)
      return () => clearTimeout(t)
    }
  }, [open])

  function pushBot(reply) {
    setTyping(true)
    const delay = Math.min(1100, 350 + reply.text.length * 12)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', ...reply }])
    }, delay)
  }

  function send(text) {
    const value = (text ?? input).trim()
    if (!value) return
    setInput('')

    // direct actions
    if (/open quote form/i.test(value)) { setMessages((m) => [...m, { from: 'user', text: value }]); onOpenQuote?.(); pushBot({ text: 'Opening the quick quote form for you now. 📝', chips: [] }); return }
    if (/call now/i.test(value)) { window.location.href = SITE.phoneHref; return }
    if (/whatsapp/i.test(value)) { window.open(SITE.whatsapp, '_blank'); return }
    if (/see projects|see our projects/i.test(value)) { window.location.href = '/projects.html'; return }
    if (/other services/i.test(value)) { setMessages((m) => [...m, { from: 'user', text: value }]); pushBot(getReply('our services')); return }

    setMessages((m) => [...m, { from: 'user', text: value }])
    pushBot(getReply(value))
  }

  return (
    <>
      {/* launcher */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {nudge && !open && (
          <button onClick={() => setOpen(true)} className="chat-nudge max-w-[240px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-left text-sm text-navy shadow-xl ring-1 ring-navy/10">
            <span className="font-semibold text-orange">Need help building?</span> Ask me anything or get a free quote. 👋
          </button>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
          aria-expanded={open}
          className={`group relative grid h-14 w-14 place-items-center rounded-full bg-orange text-white shadow-xl shadow-orange/30 transition hover:bg-orange-light ${open ? '' : 'chat-launch-pulse'}`}
        >
          <Icon name={open ? 'close' : 'chat'} className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          {!open && <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-olive text-[10px] font-bold ring-2 ring-cream">AI</span>}
        </button>
      </div>

      {/* panel */}
      {open && (
        <div ref={trapRef} tabIndex={-1} className="chat-panel fixed bottom-24 right-4 z-[60] flex h-[68vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl bg-cream shadow-2xl outline-none ring-1 ring-navy/10 sm:right-6" role="dialog" aria-label="KN Builders chat assistant">
          {/* header */}
          <div className="relative flex items-center gap-3 bg-navy px-5 py-4 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-orange"><Icon name="sparkles" className="h-5 w-5" /></span>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold">KN Builders Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-white/60"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online · replies instantly</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="ml-auto grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"><Icon name="close" className="h-5 w-5" /></button>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`msg-in max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${m.from === 'user' ? 'rounded-br-sm bg-orange text-white' : 'rounded-bl-sm bg-white text-navy ring-1 ring-navy/8'}`}>
                  {m.text}
                  {m.chips?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.chips.map((c) => (
                        <button key={c} onClick={() => send(c)} className="rounded-full bg-cream-deep px-3 py-1.5 text-xs font-semibold text-navy/80 ring-1 ring-navy/10 transition hover:bg-orange hover:text-white hover:ring-orange">{c}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 ring-1 ring-navy/8">
                  <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <form onSubmit={(e) => { e.preventDefault(); send() }} className="flex items-center gap-2 border-t border-navy/10 bg-cream px-3 py-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="w-full rounded-full bg-white px-4 py-2.5 text-sm text-navy outline-none ring-1 ring-navy/10 transition focus:ring-orange"
              aria-label="Message"
            />
            <button type="submit" aria-label="Send message" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange text-white transition hover:bg-orange-light disabled:opacity-40" disabled={!input.trim()}>
              <Icon name="send" className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
