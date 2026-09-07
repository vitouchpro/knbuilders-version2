import { PageBanner } from '../components/common.jsx'
import { BlogSection } from '../components/sections.jsx'

export default function Blog() {
  return (
    <>
      <PageBanner
        eyebrow="News & Insights"
        title="Construction Tips,"
        accent="Guides & Trends"
        crumb="Blog"
        subtitle="Practical advice on building, budgeting and design in Chennai — written by the KN Builders team to help you make confident decisions about your project."
      />
      <BlogSection showCta={false} paginate />
    </>
  )
}
