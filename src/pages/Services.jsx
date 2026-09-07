import { PageBanner, CtaBand } from '../components/common.jsx'
import {
  ServicesSection, ProcessSection, WhyChooseSection, FaqSection,
} from '../components/sections.jsx'
import { faqsFor } from '../data.js'

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title="End-to-End Construction"
        accent="Done Right"
        crumb="Services"
        subtitle="From independent homes to commercial towers, KN Builders delivers every stage under one accountable team — design, approvals, civil work, finishing and handover across Tambaram and greater Chennai."
      />
      <ServicesSection showFeatures showCta={false} bg="bg-cream" />
      <ProcessSection />
      <WhyChooseSection />
      <FaqSection items={faqsFor('services')} bg="bg-cream-deep" />
      <CtaBand title="Ready to Start Building?" accent="Get a Free Quote." />
    </>
  )
}
