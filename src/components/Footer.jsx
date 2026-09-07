import { Icon, Social } from '../icons.jsx'
import { SITE, NAV_LINKS, fullAddress } from '../site.js'
import { Logo } from './common.jsx'

export default function Footer() {
  const socialOrder = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube']
  return (
    <footer className="mt-10 bg-navy text-white">
      <div className="container-px py-14">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <h2 className="heading text-2xl sm:text-3xl">
            Let's <span className="text-orange">Connect</span> there
          </h2>
          <a href="/contact.html" className="btn-primary">Contact Us <Icon name="arrow" className="h-4 w-4" /></a>
        </div>

        {/* Three columns since the newsletter signup was removed. The brand column
            takes the extra width so the row stays balanced rather than leaving a
            gap where the fourth column used to be. */}
        <div className="grid gap-10 py-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm text-white/70">
              Building trust and delivering excellence across Tambaram and greater Chennai for over 25 years.
            </p>
            <div className="mt-5 flex gap-2">
              {socialOrder.map((s) => (
                <a key={s} href={SITE.social[s]} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-orange" aria-label={s}>
                  <Social name={s} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading text-base">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.key}><a href={l.href} className="transition hover:text-orange">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="heading text-base">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href={SITE.phoneHref} className="transition hover:text-orange">{SITE.phone}</a></li>
              <li><a href={SITE.emailHref} className="transition hover:text-orange">{SITE.email}</a></li>
              <li>{fullAddress()}</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-navy-dark">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/65 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <p className="flex gap-3">
            <a href="/terms.html" className="transition hover:text-orange">Terms &amp; Conditions</a>
            <span aria-hidden>·</span>
            <a href="/privacy.html" className="transition hover:text-orange">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
