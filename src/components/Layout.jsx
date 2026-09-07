import { useState, useCallback } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ChatAssistant from './ChatAssistant.jsx'
import QuotePopup from './QuotePopup.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

/* Shared page shell: skip link + sticky header + main + footer, plus the
   site-wide AI chat assistant and the auto-popup quote form. The chat and the
   header "Get A Quote" button can open the popup, so the open-state lives here. */
export default function Layout({ current = 'home', children }) {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const openQuote = useCallback(() => setQuoteOpen(true), [])
  const closeQuote = useCallback(() => setQuoteOpen(false), [])

  return (
    <div className="overflow-x-hidden">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header current={current} onGetQuote={openQuote} />
      <main id="main" tabIndex={-1} className="outline-none">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
      <ChatAssistant onOpenQuote={openQuote} />
      <QuotePopup open={quoteOpen} onOpen={openQuote} onClose={closeQuote} />
    </div>
  )
}
