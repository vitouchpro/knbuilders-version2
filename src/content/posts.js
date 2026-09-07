// Full blog articles. Each post renders to its own prerendered page at
// /blog/<slug>.html with BlogPosting + FAQ schema. Body is a list of blocks
// so the layout stays consistent and answer-engine-friendly.
//
// Block types: { h2 } | { p } | { ul:[...] } | { ol:[...] } | { tip }

export const AUTHORS = {
  priya: { name: 'Priya Venkat', role: 'Principal Architect, KN Builders', img: 'team4' },
  arjun: { name: 'Arjun Mehta', role: 'Lead Civil Engineer, KN Builders', img: 'team2' },
  karthik: { name: 'Tamil Priya', role: 'Founder & CEO, KN Builders', img: 'team1' },
}

export const POSTS = [
  {
    slug: 'cost-to-build-house-chennai',
    services: ['residential-construction', 'design-and-planning'],
    tag: 'Cost Guide',
    title: 'What Does It Cost to Build a House in Chennai in 2026?',
    metaTitle: 'Cost to Build a House in Chennai (2026) | KN Builders',
    metaDescription: 'A transparent 2026 breakdown of house construction costs in Chennai — per-square-foot rates, what drives the budget up or down, and how to plan with confidence.',
    date: 'May 28, 2026',
    dateISO: '2026-05-28',
    readTime: '7 min',
    img: 'blog4',
    author: 'arjun',
    excerpt: 'A transparent breakdown of per-square-foot costs, materials and the factors that move your budget up or down when building in Chennai.',
    takeaways: [
      'In 2026, standard home construction in Chennai typically runs ₹2,000–₹2,800 per sq ft for build-up area, depending on specification.',
      'Material quality, number of floors, soil condition and finishes are the biggest cost drivers.',
      'A detailed, itemised quote up front is the single best protection against budget surprises.',
    ],
    body: [
      { p: 'The first question almost every homeowner in Chennai asks is simple: what will it cost to build my house? The honest answer is that it depends — but that does not mean you should accept a vague figure. With the right breakdown, you can plan a realistic budget before you lay the first brick.' },
      { h2: 'Typical per-square-foot rates in 2026' },
      { p: 'For a standard independent house in and around Tambaram and southern Chennai, construction in 2026 generally falls between ₹2,000 and ₹2,800 per square foot of built-up area for a turnkey build. Premium finishes, imported fittings or complex architecture push this higher; a basic, no-frills specification can sit slightly lower.' },
      { p: 'As a rough guide, a 1,200 sq ft home at a mid-range specification works out to roughly ₹24–32 lakh for construction, excluding land and statutory charges.' },
      { h2: 'What actually drives the cost' },
      { ul: [
        'Specification & finishes — flooring, kitchen, bathrooms and joinery can swing the budget by 20% or more.',
        'Number of floors — a G+1 or G+2 changes structural steel and foundation requirements.',
        'Soil & site conditions — poor soil means a deeper or reinforced foundation.',
        'Material rates — cement, steel and sand prices move with the market.',
        'Design complexity — cantilevers, large spans and curved walls add cost.',
      ] },
      { tip: 'Ask any builder for a per-square-foot rate AND a line-item breakdown. The breakdown is where hidden costs hide.' },
      { h2: 'How to plan your budget' },
      { p: 'Start with a clear specification, get an itemised quotation, and keep a contingency of around 5–10% for changes during the build. A good builder will tie the quote to a milestone schedule so you can track spend against progress, with no surprises at handover.' },
      { p: 'At KN Builders, every project begins with a free site assessment and a transparent, itemised estimate — so you know exactly where your money is going before work starts.' },
    ],
    faqs: [
      { q: 'How much does it cost to build a 1,200 sq ft house in Chennai?', a: 'At a mid-range 2026 specification of roughly ₹2,000–₹2,800 per sq ft, a 1,200 sq ft home costs approximately ₹24–32 lakh for construction, excluding land and approval charges.' },
      { q: 'Does the rate include materials and labour?', a: 'A turnkey per-square-foot rate normally includes materials, labour and supervision. Always confirm what is in and out of scope — items like compound walls, sump or premium fittings are sometimes quoted separately.' },
      { q: 'How can I avoid cost overruns?', a: 'Lock the specification early, insist on an itemised quote tied to a milestone schedule, and keep a 5–10% contingency for changes.' },
    ],
  },
  {
    slug: 'choosing-a-builder-tambaram',
    services: ['residential-construction', 'civil-structural-works'],
    tag: 'Buyer Guide',
    title: 'How to Choose the Right Builder in Tambaram',
    metaTitle: 'How to Choose a Builder in Tambaram, Chennai | KN Builders',
    metaDescription: 'The questions to ask, documents to check and red flags to avoid before signing a construction contract with a builder in Tambaram or greater Chennai.',
    date: 'May 12, 2026',
    dateISO: '2026-05-12',
    readTime: '6 min',
    img: 'blog6',
    author: 'karthik',
    excerpt: 'The questions to ask, the documents to check and the red flags to avoid before you sign a construction contract.',
    takeaways: [
      'Check completed projects, licences and client references before signing anything.',
      'A transparent, itemised contract with a milestone payment schedule protects both sides.',
      'Beware quotes that are far below the market rate — they usually hide compromises.',
    ],
    body: [
      { p: 'Choosing a builder is the most important decision you will make about your home — more important than the tiles or the paint. The right partner delivers on time, communicates clearly and stands behind their work. Here is how to find them.' },
      { h2: 'Look at completed work, not just brochures' },
      { p: 'Ask to visit completed projects and, ideally, speak to past clients. A builder confident in their quality will happily arrange it. Pay attention to finishing details — they reveal the care taken in the parts you cannot see.' },
      { h2: 'Verify the essentials' },
      { ul: [
        'Business registration and GST.',
        'A portfolio of similar projects in your area.',
        'Client references you can actually call.',
        'A written, itemised quotation and contract.',
        'A clear milestone-based payment schedule.',
      ] },
      { h2: 'Questions worth asking' },
      { ol: [
        'Who is my single point of contact during the build?',
        'How do you handle changes and the costs that come with them?',
        'What is your typical timeline for a project like mine?',
        'How will I receive progress updates?',
        'What warranty do you provide after handover?',
      ] },
      { tip: 'If a quote is dramatically cheaper than everyone else, ask what was left out. Price is usually a signal of specification.' },
      { h2: 'Red flags to avoid' },
      { p: 'Be cautious of builders who resist a written contract, demand large upfront payments, cannot show recent local work, or are vague about timelines. Trust is built on transparency — if it is missing at the quoting stage, it rarely improves later.' },
    ],
    faqs: [
      { q: 'How do I verify a builder is trustworthy?', a: 'Check their business registration and GST, visit completed projects, call past clients, and insist on a written itemised contract with a milestone payment schedule.' },
      { q: 'How much deposit should a builder ask for?', a: 'Payments should be tied to milestones rather than a large lump sum upfront. A small mobilisation advance followed by stage-wise payments is standard and fair.' },
      { q: 'Why are some quotes so much cheaper?', a: 'A very low quote usually reflects lower-grade materials, thinner specifications or items excluded from scope. Always compare like-for-like line items.' },
    ],
  },
  {
    slug: 'vaastu-modern-homes',
    services: ['design-and-planning', 'interior-fitout'],
    tag: 'Design',
    title: 'Balancing Vaastu With Modern Home Design',
    metaTitle: 'Vaastu and Modern Home Design in Chennai | KN Builders',
    metaDescription: 'How to honour Vaastu principles without compromising on light, space and contemporary aesthetics when building a home in Chennai.',
    date: 'May 20, 2026',
    dateISO: '2026-05-20',
    readTime: '5 min',
    img: 'blog5',
    author: 'priya',
    excerpt: 'How to honour Vaastu principles without compromising on light, space and contemporary aesthetics.',
    takeaways: [
      'Vaastu and modern design are not opposites — most principles align with good planning.',
      'Orientation, entrance placement and room zoning matter most; resolve them at the design stage.',
      'Work with an architect who treats Vaastu as a design input, not an afterthought.',
    ],
    body: [
      { p: 'Many homeowners in Chennai want a home that respects Vaastu while still feeling open, bright and contemporary. The good news: with thoughtful planning, you rarely have to choose between the two.' },
      { h2: 'Start with orientation' },
      { p: 'The direction a plot faces and where the main entrance sits are the foundations of Vaastu. Settling these early lets the architect plan room placement, ventilation and daylight around them — instead of forcing awkward compromises later.' },
      { h2: 'Where Vaastu and good design already agree' },
      { ul: [
        'Kitchens in the south-east align with morning light and ventilation.',
        'Bedrooms in the south-west suit privacy and afternoon shade.',
        'Open north-east corners welcome natural light — a modern design goal too.',
        'Cross-ventilation, central to Vaastu, also keeps a home cooler in Chennai’s climate.',
      ] },
      { tip: 'Treat Vaastu as one of several design inputs. When it conflicts with daylight or flow, a skilled architect finds a balanced solution rather than a rigid one.' },
      { h2: 'Keep it contemporary' },
      { p: 'You can honour these principles with clean lines, large windows, open-plan living and modern materials. Vaastu guides the layout; your taste guides the look. The result is a home that feels right in every sense.' },
    ],
    faqs: [
      { q: 'Can a modern home follow Vaastu?', a: 'Yes. Most Vaastu principles — orientation, ventilation, room zoning and open north-east corners — align with good contemporary planning. The key is resolving them at the design stage.' },
      { q: 'Which Vaastu factors matter most?', a: 'Plot orientation, main entrance placement, and the zoning of kitchen, bedrooms and pooja space have the biggest impact and are hardest to change later.' },
      { q: 'Do I have to compromise on design for Vaastu?', a: 'Rarely. A skilled architect treats Vaastu as a design input and balances it with daylight, flow and aesthetics.' },
    ],
  },
  {
    slug: 'successful-construction-project-steps',
    services: ['residential-construction', 'renovation-remodeling'],
    tag: 'Project Management',
    title: '8 Essential Steps for a Successful Construction Project',
    metaTitle: '8 Steps to a Successful Construction Project | KN Builders',
    metaDescription: 'A clear, step-by-step framework that takes a construction project from first consultation to a smooth handover — and keeps it on time and on budget.',
    date: 'June 8, 2026',
    dateISO: '2026-06-08',
    readTime: '6 min',
    img: 'blog2',
    author: 'arjun',
    excerpt: 'A clear, step-by-step framework that takes a project from first consultation all the way to a smooth handover.',
    takeaways: [
      'Most project problems trace back to weak planning, not weak building.',
      'A milestone schedule and a single point of contact keep everyone aligned.',
      'A thorough handover checklist prevents snags from becoming long-term headaches.',
    ],
    body: [
      { p: 'A successful build is rarely luck. It is the result of a disciplined process repeated on every project. Here is the eight-step framework we follow at KN Builders.' },
      { h2: 'The eight steps' },
      { ol: [
        'Consultation — understand your vision, site, budget and timeline.',
        'Design & drawings — architecture, structural design and working drawings.',
        'Approvals — handle CMDA/local permissions before work starts.',
        'Estimation — a transparent, itemised quotation and milestone schedule.',
        'Foundation & structure — excavation, footings and the RCC framework.',
        'Construction — walls, services, plastering and waterproofing.',
        'Finishing — flooring, joinery, painting, fittings and fixtures.',
        'Inspection & handover — a quality check, snag list and clean handover.',
      ] },
      { tip: 'Insist on a milestone schedule at the start. It turns a vague “a few months” into a plan you can hold everyone to.' },
      { h2: 'Why the process matters' },
      { p: 'Each stage depends on the one before it. Skipping planning to “save time” almost always costs more later. With a clear process, a dedicated project manager and regular updates, surprises become rare and the finish line stays predictable.' },
    ],
    faqs: [
      { q: 'What are the stages of building a house?', a: 'Consultation, design and drawings, approvals, estimation, foundation and structure, construction, finishing, and inspection and handover.' },
      { q: 'How long does each stage take?', a: 'It varies by size and specification, but a milestone schedule agreed at the start gives realistic timelines for each stage and a target handover date.' },
      { q: 'What is a handover checklist?', a: 'A snag list and quality check completed before handover, ensuring every item — finishes, fittings, services — is right before you move in.' },
    ],
  },
  {
    slug: 'site-safety-tips',
    services: ['civil-structural-works', 'commercial-construction'],
    tag: 'Project Management',
    title: 'Site Safety Tips: Ensuring a Smooth Construction',
    metaTitle: 'Construction Site Safety Tips | KN Builders Chennai',
    metaDescription: 'Practical site-safety practices that protect workers, your timeline and your budget on every construction project in Chennai.',
    date: 'June 11, 2026',
    dateISO: '2026-06-11',
    readTime: '4 min',
    img: 'blog3',
    author: 'arjun',
    excerpt: 'Practical safety practices that protect your workers, your timeline and your budget on every site.',
    takeaways: [
      'Safety is not a cost — accidents and delays are far more expensive.',
      'PPE, housekeeping and trained supervision prevent most common incidents.',
      'A safe site is usually a well-managed, on-schedule site.',
    ],
    body: [
      { p: 'A safe construction site protects people first — and it protects your project too. Incidents cause delays, disputes and cost. Good safety practice is simply good project management.' },
      { p: 'If you are having a house built, site safety is not only the builder’s concern. As the person commissioning the work you have a practical interest in it, and a walk around the site tells you a great deal about how well your project is being run.' },

      { h2: 'The fundamentals' },
      { ul: [
        'Personal protective equipment (PPE) for everyone on site.',
        'Clear, tidy access routes and good housekeeping.',
        'Proper scaffolding, edge protection and safe ladders.',
        'Trained supervision and clear daily briefings.',
        'Secure storage and safe handling of materials.',
      ] },
      { tip: 'A clean site is a safe site. Most slips, trips and falls come down to housekeeping.' },

      { h2: 'The risks that matter most on Indian residential sites' },
      { p: 'Serious incidents on small and mid-sized building sites cluster around a short list of causes. Knowing them tells you what to look for:' },
      { ol: [
        'Falls from height — the single largest cause of serious injury. Scaffolding, edge protection at slab level and stair openings deserve the closest attention.',
        'Falling material — bricks, tools or debris dropped from an upper level onto people below, which is why access below active work should be controlled.',
        'Electrical contact — temporary site wiring is often the most improvised system on a site, and the most dangerous.',
        'Excavation collapse — deep foundation trenches in loose or waterlogged soil need shoring; this is a real risk in low-lying parts of Chennai.',
        'Manual handling injuries — the slow, cumulative kind that rarely get reported but steadily reduce a crew’s capacity.',
      ] },

      { h2: 'Monsoon changes the risk picture' },
      { p: 'Chennai’s rain introduces hazards that are absent for most of the year, and they arrive quickly once the north-east monsoon sets in:' },
      { ul: [
        'Excavations fill and trench walls soften, raising collapse risk substantially.',
        'Scaffolding boards and slab surfaces become slippery.',
        'Temporary electrical connections and standing water are a dangerous combination.',
        'Stored cement spoils, and steel left exposed begins to rust.',
        'Access routes turn to mud, which slows every material movement on site.',
      ] },
      { p: 'A builder who plans around the monsoon — sequencing structural work outside the heaviest weeks and protecting stored material — is managing both safety and your schedule at the same time.' },

      { h2: 'What to look for when you visit your site' },
      { p: 'You do not need technical training to read a site. These signals are visible to anyone:' },
      { ul: [
        'Are workers wearing helmets and footwear, and is anyone at height using a harness?',
        'Is scaffolding properly tied and braced, or improvised from whatever was available?',
        'Are stair and slab openings guarded, or open holes anyone could step into?',
        'Is the site tidy, with materials stacked rather than scattered across walkways?',
        'Is temporary wiring run properly, or are bare joints lying in the open?',
        'Is there drinking water, shade and a clean place for the crew to eat?',
      ] },
      { p: 'That last point matters more than it appears. Sites that look after their workers tend to keep the same crew for the length of the project, and continuity of crew is one of the strongest predictors of consistent workmanship.' },

      { h2: 'Safety and schedule go together' },
      { p: 'Well-run sites tend to be both safer and faster. When access is clear, materials are organised and the team is briefed, work flows smoothly and milestones are met. Cutting corners on safety almost always costs time in the end.' },
      { p: 'The reverse is equally reliable. A chaotic site — materials everywhere, no supervision, improvised access — is rarely producing careful work out of sight. What you can see on the surface is usually a fair indication of what is being buried in the concrete.' },
    ],
    faqs: [
      { q: 'Why is site safety important?', a: 'It protects workers from harm and protects your project from the delays, disputes and costs that incidents cause. Safe sites are usually well-managed, on-schedule sites.' },
      { q: 'What basic safety measures should every site have?', a: 'PPE for all workers, good housekeeping, proper scaffolding and edge protection, trained supervision, and safe material storage and handling.' },
    ],
  },
  {
    slug: 'technology-modern-construction',
    services: ['design-and-planning', 'civil-structural-works'],
    tag: 'Construction Trends',
    title: 'How Technology Is Revolutionizing Modern Construction',
    metaTitle: 'How Technology Is Changing Construction | KN Builders',
    metaDescription: 'From BIM to drones and on-site IoT, here is how digital tools are making construction faster, safer and more predictable in 2026.',
    date: 'June 2, 2026',
    dateISO: '2026-06-02',
    readTime: '5 min',
    img: 'blog1',
    author: 'priya',
    excerpt: 'From BIM to drones and on-site IoT, here is how digital tools are making builds faster, safer and more predictable.',
    takeaways: [
      'Technology reduces guesswork — it makes timelines and budgets more predictable.',
      'BIM, drones and project software are now practical on everyday projects, not just mega-builds.',
      'The biggest gains are fewer errors, better coordination and clearer client updates.',
    ],
    body: [
      { p: 'Construction has been slower to digitise than most industries, but the tools that have arrived are changing how projects are planned, tracked and handed over. For a homeowner, the value is not the technology itself — it is the visibility it gives you.' },

      { h2: 'BIM: designing the building before building it' },
      { p: 'Building Information Modelling produces a three-dimensional model that carries real information about each element — not just how the building looks, but what each component is and how it relates to the rest.' },
      { p: 'The practical benefit is clash detection. Structural, plumbing and electrical layouts can be checked against each other before anyone is on site, so the beam that would have run through a window opening, or the drain line crossing a footing, is found on screen instead of during construction. Every clash resolved in the model is a delay and a variation avoided later.' },
      { tip: 'Ask to see your design in 3D before construction starts. It is far easier to say "the kitchen feels cramped" while it is still a model than after the walls are up.' },

      { h2: 'Drones and photographic progress records' },
      { p: 'Aerial and systematic photography have become routine, and they serve two purposes. The first is progress reporting — genuinely useful if you live away from the site or work abroad, since you can see the actual state of the build rather than relying on a description.' },
      { p: 'The second is the more valuable one over the long term: a permanent record of the concealed work. Photographs of plumbing and electrical runs taken before plastering mean that in ten years, when a wall needs opening for a repair, someone can look up exactly what is behind it instead of guessing.' },

      { h2: 'Project management and cost tracking software' },
      { p: 'Digital project tracking replaces the site diary and the builder’s memory with something both parties can see:' },
      { ul: [
        'Milestone schedules that show what should be happening now and what comes next.',
        'Material delivery and consumption records, tied to the stage of work.',
        'Payment stages linked to verified progress rather than to elapsed time.',
        'Photographic updates attached to each milestone.',
        'A written record of variations, so changes to scope and cost are documented as they are agreed.',
      ] },
      { p: 'That last item prevents the most common source of end-of-project disputes. Verbal changes agreed on site are remembered differently by each party months later; written ones are not.' },

      { h2: 'Materials and methods that have genuinely improved' },
      { p: 'Not every advance is digital. Several material and method changes have made a real difference to build quality:' },
      { table: {
        head: ['Development', 'What it improves'],
        rows: [
          ['Ready-mix concrete', 'Consistent, verifiable mix proportions compared with site mixing'],
          ['Modern waterproofing systems', 'Longer-lasting protection at terraces, foundations and wet areas'],
          ['AAC blocks', 'Lighter walls with better thermal performance than solid brick'],
          ['Precast elements', 'Factory-controlled quality and faster on-site assembly'],
          ['Improved formwork systems', 'Better finish and alignment, with less remedial plastering needed'],
        ],
      } },

      { h2: 'What technology cannot do' },
      { p: 'It is worth being clear-eyed about the limits. No software cures concrete faster, and no drone footage compensates for reinforcement placed incorrectly or curing cut short. The fundamentals of a sound building are still material quality, correct execution and competent supervision.' },
      { p: 'Technology’s real contribution is transparency. It makes the work visible and the record permanent, which makes it far harder for corners to be cut quietly. Judge a builder on their execution first — and treat good digital practice as evidence of a well-organised team rather than a substitute for one.' },
    ],
    faqs: [
      { q: 'What is BIM in construction?', a: 'Building Information Modelling (BIM) is a 3D digital model of a project used to design and coordinate structure, plumbing and electrical before construction — catching clashes early and reducing rework.' },
      { q: 'How does technology benefit homeowners?', a: 'It makes timelines and budgets more predictable, reduces errors, improves coordination, and provides clearer, photo-based progress updates.' },
    ],
  },
]

export const getPost = (slug) => POSTS.find((p) => p.slug === slug)
// Related articles: prefer posts sharing the same tag, then fill from the rest.
// Keeps the "you might also like" block genuinely relevant instead of just
// returning whichever posts happen to come first in the array.
export const relatedPosts = (slug, n = 3) => {
  const current = POSTS.find((p) => p.slug === slug)
  const others = POSTS.filter((p) => p.slug !== slug)
  if (!current) return others.slice(0, n)
  const sameTag = others.filter((p) => p.tag === current.tag)
  const rest = others.filter((p) => p.tag !== current.tag)
  return [...sameTag, ...rest].slice(0, n)
}

// Posts that reference a given service slug — powers the "Guides" cross-links on
// service pages. Derived from each post's `services` field so the blog->service
// and service->blog directions stay consistent automatically.
export const postsForService = (slug, n = 3) =>
  POSTS.filter((p) => (p.services || []).includes(slug)).slice(0, n)
