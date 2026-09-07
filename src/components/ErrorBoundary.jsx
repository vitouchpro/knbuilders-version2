import { Component } from 'react'

// Catches render errors so one broken component doesn't blank the whole page.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (typeof console !== 'undefined') console.error('Render error:', error, info)
    // Hook a monitoring service (e.g. Sentry) here in production.
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container-px py-32 text-center">
          <h1 className="heading text-2xl text-navy">Something went wrong</h1>
          <p className="mt-3 text-navy/65">
            Please refresh the page, or <a href="/" className="font-semibold text-orange">go back home</a>.
          </p>
        </section>
      )
    }
    return this.props.children
  }
}
