import { PageBanner, CtaBand } from '../components/common.jsx'
import { ProjectsGrid } from '../components/sections.jsx'

export default function Projects() {
  return (
    <>
      <PageBanner
        eyebrow="Our Portfolio"
        title="Projects We're"
        accent="Proud Of"
        crumb="Projects"
        subtitle="A selection of homes, villas, apartments and commercial spaces we've delivered across Chennai — engineered to last and finished with care. Filter by type to explore our work."
      />
      <ProjectsGrid />
      <CtaBand title="Have a Project in Mind?" accent="Let's Build It." projectPage />
    </>
  )
}
