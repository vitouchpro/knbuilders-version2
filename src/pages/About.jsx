import { Icon } from '../icons.jsx'
import { PageBanner, CtaBand, SectionHeading, Reveal, CountUp, useInView } from '../components/common.jsx'
import { WhyChooseSection } from '../components/sections.jsx'
import { IMAGES, VALUES } from '../data.js'
import { SITE } from '../site.js'

const FOUNDER_STATS = [
  { value: '25+', label: 'Years of Experience' },
  { value: '640+', label: 'Projects Delivered' },
  { value: '100%', label: 'Personal Attention' },
]

const FOUNDER_STRENGTHS = [
  'Transparent project guidance',
  'Quality-first construction',
  'Clear documentation',
  'Reliable site coordination',
  'Honest cost planning',
  'On-time handover',
]

function Story() {
  const [statsRef, statsIn] = useInView({ threshold: 0.4 })
  return (
    <section className="about-story-section bg-white py-14 sm:py-20">
      <div className="container-px">
        <SectionHeading eyebrow="Our Founder" title="Meet the" accent="Founder" />
      </div>
      <div className="container-px mt-10 grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal className="group relative overflow-hidden rounded-2xl bg-cream-deep">
          <img
            src={IMAGES.team1}
            alt="Tamil Priya, Founder and CEO of KN Builders"
            loading="lazy"
            className="aspect-[4/5] h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-navy/85 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-5 sm:bottom-5">
            <p className="heading text-lg">Tamil Priya</p>
            <p className="mt-1 text-xs font-medium text-orange-light">Founder &amp; CEO, KN Builders</p>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center">
          <h3 className="heading text-3xl text-navy sm:text-4xl">Tamil Priya</h3>
          <p className="mt-2 text-base font-semibold text-orange">Founder &amp; CEO, KN Builders</p>
          <p className="mt-6 text-sm leading-7 text-navy/75 sm:text-base">
            Since 2001, Tamil Priya has led KN Builders with a simple promise: build every project as if it were our own.
            This hands-on approach brings clarity, honest pricing and dependable execution to every home and commercial project.
          </p>
          <p className="mt-4 text-sm leading-7 text-navy/75 sm:text-base">
            From the first site visit to the final handover, Tamil Priya works closely with clients and teams to make construction feel straightforward, transparent and built to last.
          </p>
          <dl ref={statsRef} className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
            {FOUNDER_STATS.map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-cream-deep p-3 text-center ring-1 ring-navy/10 transition hover:ring-orange/35 sm:p-4">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-orange sm:text-3xl"><CountUp value={value} start={statsIn} /></span>
                  <span className="mt-1 block text-[10px] font-semibold leading-tight text-navy/70 sm:text-xs">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <h4 className="heading mt-8 text-base text-navy">What he brings to every project</h4>
          <ul className="mt-3 grid gap-2 text-sm text-navy/75 sm:grid-cols-2">
            {FOUNDER_STRENGTHS.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 shrink-0 text-orange" />{item}
              </Reveal>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-primary">Call Now <Icon name="phone" className="h-4 w-4" /></a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebd5c]"><Icon name="whatsapp" className="h-4 w-4" /> WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="bg-cream-deep py-14 sm:py-20">
      <div className="container-px">
        <SectionHeading center eyebrow="Our Values" title="What We" accent="Stand For" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 80} className="group rounded-2xl bg-white p-7 text-center ring-1 ring-navy/8 transition hover:-translate-y-1 hover:ring-orange/30 hover:shadow-lg hover:shadow-navy/5">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-navy text-orange transition group-hover:bg-orange group-hover:text-white"><Icon name={v.icon} className="h-7 w-7" /></span>
              <h3 className="heading mt-5 text-lg text-navy">{v.title}</h3>
              <p className="mt-3 text-sm leading-6 text-navy/75">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


const ENGAGEMENT = [
  {
    title: 'First conversation',
    desc: 'We talk through what you want to build, your plot, your budget range and your timeline. No cost, no obligation, and no pressure to commit on the call.',
  },
  {
    title: 'Site assessment',
    desc: 'We visit the site to look at access, ground conditions, orientation and any statutory constraints that will shape what can be built.',
  },
  {
    title: 'Design and specification',
    desc: 'Drawings are developed and a written specification agreed — materials, brands and grades named, so the quote that follows means something.',
  },
  {
    title: 'Itemised quotation',
    desc: 'You get a line-by-line estimate tied to the specification, with inclusions and exclusions stated plainly rather than left to assumption.',
  },
  {
    title: 'Construction with milestones',
    desc: 'Work runs to an agreed milestone schedule, with payments linked to stages completed rather than to dates on a calendar.',
  },
  {
    title: 'Handover with documents',
    desc: 'You receive the approvals, warranties and as-built information for your property — not just the keys.',
  },
]

const COMMITMENTS = [
  {
    icon: 'eye',
    title: 'A written specification',
    desc: 'Every quote names the materials and grades it is based on. A per-square-foot rate without a specification is not a price, and we will not ask you to accept one.',
  },
  {
    icon: 'check',
    title: 'Test results you can see',
    desc: 'Concrete cube tests and material checks are recorded and shared. You are entitled to the evidence behind the structure, not a verbal assurance.',
  },
  {
    icon: 'clock',
    title: 'Honest timelines',
    desc: 'We schedule around curing periods and monsoon risk rather than quoting an optimistic date we would have to miss. If something slips, you hear it from us early.',
  },
  {
    icon: 'award',
    title: 'Advice against our own interest',
    desc: 'If a floor addition is not structurally advisable, or a specification is more than your situation needs, we say so — even when the larger job would earn us more.',
  },
]

function HowWeWork() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-px">
        <SectionHeading center eyebrow="How We Work" title="What Working With Us" accent="Actually Looks Like" />
        <p className="mx-auto mt-5 max-w-3xl text-center text-navy/70">
          Most construction disputes come from expectations that were never written down. Our process is built
          to remove that ambiguity — each stage produces something you can read, check and hold us to.
        </p>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ENGAGEMENT.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 80} className="rounded-2xl bg-cream-deep p-6 ring-1 ring-navy/8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange text-sm font-bold text-white">{i + 1}</span>
              <h3 className="heading mt-4 text-lg text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/70">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Commitments() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="container-px">
        <SectionHeading center eyebrow="Our Commitments" title="What You Can" accent="Hold Us To" />
        <p className="mx-auto mt-5 max-w-3xl text-center text-navy/70">
          Anyone can promise quality. These are the specific, checkable things we commit to on every project —
          the kind of commitments worth asking any builder to make before you sign.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 90} className="flex gap-4 rounded-2xl bg-cream-deep p-6 ring-1 ring-navy/8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-orange">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="heading text-lg text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/70">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Building Trust in Tambaram,"
        accent="One Project at a Time"
        crumb="About Us"
        subtitle="Meet the team, values and 25-year track record behind every KN Builders project across Chennai."
      />
      <Story />
      <HowWeWork />
      <Commitments />
      <Values />
      <WhyChooseSection aboutPage />
      <CtaBand title="Want to Work With Us?" accent="Get in Touch." />
    </>
  )
}
