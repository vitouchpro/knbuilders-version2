// Privacy Policy & Terms content. Plain, readable, India-focused (DPDP Act).
// Review with a legal professional before relying on these for production.
import { SITE, fullAddress } from '../site.js'

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'June 2026',
    lead: `This Privacy Policy explains how ${SITE.name} ("we", "us") collects, uses and protects the information you share with us through this website.`,
    sections: [
      { h2: 'Information we collect' },
      { p: 'When you submit an enquiry, quote request or newsletter signup, we collect the details you provide — typically your name, phone number, email address and any project details you share. We do not ask for sensitive personal data.' },
      { h2: 'How we use your information' },
      { ul: [
        'To respond to your enquiry and provide a quote or consultation.',
        'To contact you about your project by phone, WhatsApp or email.',
        'To send newsletter updates, if you have signed up (you can opt out anytime).',
        'To improve our website and services.',
      ] },
      { p: 'We do not sell your personal information, and we do not use it for advertising.' },
      { h2: 'How your data is processed' },
      { p: 'Form submissions are delivered to us by email through a third-party form service and/or via WhatsApp. These providers process the data only to deliver your message to us. We retain enquiry details only as long as needed to serve you and meet our legal obligations.' },
      { h2: 'Cookies and local storage' },
      { p: 'We do not use advertising cookies. The site uses your browser’s local and session storage for basic functionality — for example, to remember that our quote popup has already been shown during your visit. You can clear this anytime in your browser settings.' },
      { h2: 'Third-party services' },
      { ul: [
        'Google Maps — to display our location on the contact page.',
        'Google Fonts — to load the site’s typography.',
        'A form-delivery service — to email us your enquiries.',
      ] },
      { p: 'These services have their own privacy policies governing how they handle data.' },
      { h2: 'Your rights' },
      { p: 'Under India’s Digital Personal Data Protection Act, you may request access to, correction of, or deletion of the personal data you have shared with us. To make a request, contact us using the details below.' },
      { h2: 'Contact us' },
      { p: `For any privacy questions or requests, reach us at ${SITE.email} or ${SITE.phone}, or write to us at ${fullAddress()}.` },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    updated: 'June 2026',
    lead: `These terms govern your use of the ${SITE.name} website. By using this site, you agree to them.`,
    sections: [
      { h2: 'Use of this website' },
      { p: 'This website is provided for general information about our construction services. You agree to use it lawfully and not to misuse, disrupt or attempt to gain unauthorised access to it.' },
      { h2: 'No contract or guarantee' },
      { p: 'Information on this site — including service descriptions, project examples, timelines and indicative costs — is for general guidance only and does not form a binding quote or contract. Any quote, scope and pricing for your project will be confirmed in writing before work begins.' },
      { h2: 'Indicative information' },
      { p: 'Cost ranges, timelines and other figures mentioned on this site are illustrative and depend on your specific site, design, materials and conditions. Actual figures are provided after a site assessment.' },
      { h2: 'Intellectual property' },
      { p: 'The content, branding and design of this website belong to us or our licensors and may not be copied or reused without permission. Photographs may be illustrative.' },
      { h2: 'External links' },
      { p: 'Our site may link to third-party websites (for example, social media or maps). We are not responsible for the content or practices of those sites.' },
      { h2: 'Limitation of liability' },
      { p: 'To the extent permitted by law, we are not liable for any loss arising from reliance on information on this website. Always confirm details with us directly before making decisions.' },
      { h2: 'Governing law' },
      { p: 'These terms are governed by the laws of India, with jurisdiction in the courts of Chennai, Tamil Nadu.' },
      { h2: 'Contact us' },
      { p: `Questions about these terms? Contact us at ${SITE.email} or ${SITE.phone}.` },
    ],
  },
}
