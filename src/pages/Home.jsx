import { CtaBand } from '../components/common.jsx'
import {
  Hero, TrustBar, AboutSection, ServicesSection, ProcessSection, ProjectsShowcase,
  WhyChooseSection, TestimonialsSection, BlogSection, ServiceAreas, FaqSection,
} from '../components/sections.jsx'
import { faqsFor } from '../data.js'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection limit={3} />
      <ProcessSection />
      <ProjectsShowcase limit={3} />
      <WhyChooseSection />
      <ServiceAreas />
      <TestimonialsSection />
      <BlogSection limit={3} />
      <FaqSection items={faqsFor('home')} bg="bg-cream-deep" />
      <CtaBand />
    </>
  )
}
