// Lead delivery. Posts to Web3Forms (free, no backend — emails you each lead)
// when an access key is configured in site.js; otherwise falls back to a
// prefilled WhatsApp deep-link so the form always does something useful.
import { SITE } from '../site.js'

const LABELS = {
  first: 'First name', last: 'Last name', name: 'Name', email: 'Email',
  phone: 'Phone', subject: 'Subject', service: 'Service', message: 'Message',
}

function format(fields) {
  return Object.entries(fields)
    .filter(([k, v]) => k !== 'botcheck' && v && String(v).trim())
    .map(([k, v]) => `${LABELS[k] || k}: ${v}`)
    .join('\n')
}

const waDigits = () => (SITE.whatsapp.match(/\d+/g) || []).join('')
const keyConfigured = () => SITE.formAccessKey && SITE.formAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY'

// Pull a plain object of values from a <form> (drops the honeypot field).
export const formValues = (form) => {
  const o = Object.fromEntries(new FormData(form).entries())
  delete o.botcheck
  return o
}

export function mailtoLead(subject, fields) {
  const body = `New enquiry from the KN Builders website:\n\n${format(fields)}`
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function deliverWhatsApp(fields, subject) {
  const text = `*${subject}*\n\n${format(fields)}`
  window.open(`https://wa.me/${waDigits()}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
}

// Async submit. Returns { ok, via, error }.
export async function submitLead(fields, { subject = 'Website enquiry' } = {}) {
  if (keyConfigured()) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.formAccessKey,
          subject,
          from_name: 'KN Builders Website',
          replyto: fields.email || SITE.email,
          botcheck: false,
          ...fields,
        }),
      })
      const data = await res.json()
      if (data.success) return { ok: true, via: 'web3forms' }
      return { ok: false, error: data.message || 'Submission failed. Please try again.' }
    } catch {
      return { ok: false, error: 'Network error. Please check your connection and try again.' }
    }
  }
  // No backend configured yet — hand off to WhatsApp.
  deliverWhatsApp(fields, subject)
  return { ok: true, via: 'whatsapp' }
}
