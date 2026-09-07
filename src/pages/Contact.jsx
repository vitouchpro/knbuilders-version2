import { PageBanner } from '../components/common.jsx'
import { ContactSection, FaqSection } from '../components/sections.jsx'
import { faqsFor } from '../data.js'

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Let's Build Something"
        accent="Together"
        crumb="Contact Us"
        subtitle="Tell us about your project and get a free, no-obligation consultation and quote. We typically reply within one business day."
      />
      <ContactSection withMap />
      <FaqSection items={faqsFor('contact')} bg="bg-cream" />
    </>
  )
}
