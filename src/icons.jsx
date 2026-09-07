const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = ({ name, className = 'h-6 w-6' }) => {
  const props = { ...base, viewBox: '0 0 24 24', className }
  switch (name) {
    case 'home':
      return (
        <svg {...props}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>
      )
    case 'building':
      return (
        <svg {...props}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /><path d="M10 21v-3h4v3" /></svg>
      )
    case 'tools':
      return (
        <svg {...props}><path d="M14 6a3.5 3.5 0 0 0 4.6 4.6L21 13l-3 3-2.4-2.4A3.5 3.5 0 0 0 11 18l-5-5a3.5 3.5 0 0 0 4.4-4.6L8 6l3-3 3 3Z" /></svg>
      )
    case 'tech':
      return (
        <svg {...props}><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
      )
    case 'team':
      return (
        <svg {...props}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-5-5.9" /></svg>
      )
    case 'clock':
      return (
        <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
      )
    case 'award':
      return (
        <svg {...props}><circle cx="12" cy="9" r="5" /><path d="M9 13.5 7.5 21 12 18l4.5 3-1.5-7.5" /></svg>
      )
    case 'arrow':
      return (
        <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      )
    case 'arrow-left':
      return (
        <svg {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
      )
    case 'play':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5v14l11-7z" /></svg>
      )
    case 'pause':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
      )
    case 'check':
      return (
        <svg {...props}><path d="m5 13 4 4L19 7" /></svg>
      )
    case 'pin':
      return (
        <svg {...props}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
      )
    case 'phone':
      return (
        <svg {...props}><path d="M5 4h4l1.5 5-2 1a12 12 0 0 0 5.5 5.5l1-2 5 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
      )
    case 'mail':
      return (
        <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
      )
    case 'menu':
      return (
        <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      )
    case 'close':
      return (
        <svg {...props}><path d="M6 6l12 12M18 6 6 18" /></svg>
      )
    case 'plus':
      return (
        <svg {...props}><path d="M12 5v14M5 12h14" /></svg>
      )
    case 'minus':
      return (
        <svg {...props}><path d="M5 12h14" /></svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z" /></svg>
      )
    case 'chat':
      return (
        <svg {...props}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.4A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" /></svg>
      )
    case 'eye':
      return (
        <svg {...props}><path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2" /></svg>
      )
    case 'send':
      return (
        <svg {...props}><path d="M4 12 20 4l-6 16-3-7-7-1Z" /></svg>
      )
    case 'sparkles':
      return (
        <svg {...props}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" /></svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8.9-.3.2-.5 0a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11 11 0 0 0 4.3 3.8c2 .8 2 .6 2.4.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3Z" /></svg>
      )
    case 'spark-dot':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><circle cx="12" cy="12" r="4" /></svg>
      )
    default:
      return null
  }
}

export const Social = ({ name, className = 'h-4 w-4' }) => {
  switch (name) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3z" /></svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.9 3H21l-6.5 7.4L22 21h-5.9l-4.6-6-5.3 6H3l7-8L2 3h6l4.1 5.5L18.9 3z" /></svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M6.9 8.4H3.6V21h3.3V8.4zM5.2 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM21 21h-3.3v-6.2c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V21H10.5V8.4h3.2v1.7c.4-.7 1.2-1.7 3-1.7 2.2 0 3.8 1.4 3.8 4.5V21z" /></svg>
      )
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M22 8.3a3 3 0 0 0-2-2C18 6 12 6 12 6s-6 0-8 .3a3 3 0 0 0-2 2A31 31 0 0 0 2 12a31 31 0 0 0 .3 3.7 3 3 0 0 0 2 2C6 18 12 18 12 18s6 0 8-.3a3 3 0 0 0 2-2A31 31 0 0 0 22 12a31 31 0 0 0-.3-3.7zM10 15V9l5 3-5 3z" /></svg>
      )
    default:
      return null
  }
}
