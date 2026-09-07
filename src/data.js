// Content model for KN Builders. Imagery uses Unsplash (royalty-free, no attribution).
// Navigation + business NAP now live in src/site.js.
import technologyConstructionImage from './images/technology-modern-construction-bim-drones.jpg'
import successfulConstructionImage from './images/essential-steps-successful-construction-project.jpg'
import sitesafetyConstructionImage from './images/construction-site-safety-tips.jpg'
import CostchennaiConstructionImage from './images/cost-to-build-house-chennai.jpg'
import BalancingVaastuConstructionImage from './images/vaastu-compliant-modern-home-design.jpg'
import RightbuilderConstructionImage from './images/how-to-choose-builder-tambaram.jpg'
import residentialConstructionImage from './images/residential-construction-company-tambaram-chennai.jpg'
import commercialConstructionImage from './images/commercial-construction-company-chennai.jpg'
import renovationRemodelingImage from './images/home-renovation-remodeling-services-chennai.jpg'
import architecturePlanningImage from './images/architecture-design-planning-services-chennai.jpg'
import civilStructuralImage from './images/civil-structural-engineering-works-chennai.jpg'
import interiorFitoutImage from './images/interior-design-fit-out-services-chennai.jpg'
import buildingTrustImage from './images/kn-builders-construction-team-on-site-chennai.jpg'
import businessHubImage from './images/business-hub-commercial-office-project-tambaram.png'
import skyHavenImage from './images/sky-haven-residences-apartment-project-selaiyur.png'
import greenVillaImage from './images/green-villa-estate-independent-villas-medavakkam.jpg'
import girlIconImage from './images/client-avatar-female.png'
import boyIconImage from './images/client-avatar-male.png'
import pallavaramRetailImage from './images/pallavaram-retail-arcade-commercial-project.png'
import lakesideApartmentsImage from './images/lakeside-apartments-residential-project-chromepet.png'
import annaSalaiOfficeImage from './images/anna-salai-office-tower-commercial-project-tambaram.png'
import knbuilderFounderImage from './images/tamil-priya-founder-kn-builders.png'



export const IMAGES = {
  heroTeam: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=80',
  aboutHandshake: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  aboutTeam: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  whyChoose: buildingTrustImage,
  projectBusinessHub: businessHubImage,
  projectSkyHaven: skyHavenImage,
  projectGreenVilla: greenVillaImage,
  projectCtaHouse: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=90',
  projectRetailArcade: pallavaramRetailImage,
  projectLakeside: lakesideApartmentsImage,
  projectOfficeTower: annaSalaiOfficeImage,
  team1: knbuilderFounderImage,
  team2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
  team3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  team4: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?auto=format&fit=crop&w=500&q=80',
  client1: girlIconImage,
  client2: boyIconImage,
  client3: girlIconImage,
  client4: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80',
  blog1: technologyConstructionImage,
  blog2: successfulConstructionImage,
  blog3: sitesafetyConstructionImage,
  blog4: CostchennaiConstructionImage,
  blog5: BalancingVaastuConstructionImage,
  blog6: RightbuilderConstructionImage,
  residentialConstructionImage,
  commercialConstructionImage,
  renovationRemodelingImage,
  architecturePlanningImage,
  civilStructuralImage,
  interiorFitoutImage,
}

export const HERO_SLIDES = [
  {
    eyebrow: 'Premium Quality · Trusted Always',
    title: ['Built to Last.', 'Built by KN.'],
    accentLine: 1,
    desc: 'Custom homes & commercial builds across Tambaram — crafted for over 25 years with honest craftsmanship.',
    cta: 'Explore Our Work',
    ctaHref: '/projects.html',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
  },
  {
    eyebrow: 'Foundation to Finish',
    title: ["We Don't Cut Corners.", 'We Build Them.'],
    accentLine: 1,
    desc: 'Tested materials, qualified engineers and a schedule we hold ourselves to — with weekly updates so you can check.',
    cta: 'View Our Services',
    ctaHref: '/services.html',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
  },
  {
    eyebrow: 'Your Vision · Our Blueprint',
    title: ['From Ground Up', 'to Move-In Day.'],
    accentLine: 0,
    desc: 'One team and one project manager from the first drawing to the day you get the keys.',
    cta: 'Start Your Project',
    ctaHref: '/contact.html',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
  },
]

export const STATS = [
  { value: '640+', label: 'Projects Completed' },
  { value: '25+', label: 'Years of Experience' },
  { value: '450+', label: 'Happy Customers' },
]

// `slug` + `features` power the dedicated Services page; `summary` is the short card line.
export const SERVICES = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    icon: 'home',
    image: 'residentialConstructionImage',
    summary: 'Independent houses, villas and apartments built to last — foundation to finishing.',
    desc: 'We build independent homes, villas and apartment blocks across Tambaram and greater Chennai — managing everything from soil testing and structural design to interiors and handover, using quality-tested materials at every stage.',
    features: ['Independent houses & villas', 'Apartment & multi-unit blocks', 'Vaastu-compliant layouts', 'Turnkey finishing'],
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    icon: 'building',
    image: 'commercialConstructionImage',
    summary: 'Offices, retail and institutional builds delivered on time and to safety standards.',
    desc: 'Offices, retail arcades, showrooms and institutional buildings delivered on time, on budget and to the highest safety standards — engineered for footfall, durability and low running costs.',
    features: ['Office & corporate spaces', 'Retail & showrooms', 'Institutional buildings', 'Warehousing'],
  },
  {
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    icon: 'tools',
    image: 'renovationRemodelingImage',
    summary: 'Modernise and expand existing structures — interiors, additions and full renovations.',
    desc: 'Modernise, repair or expand an existing structure without the stress. We handle additional floors, interior overhauls, façade upgrades and full home renovations with minimal disruption to your routine.',
    features: ['Additional floors', 'Interior overhauls', 'Façade upgrades', 'Structural repairs'],
  },
  {
    slug: 'design-and-planning',
    title: 'Architecture & Planning',
    icon: 'tech',
    image: 'architecturePlanningImage',
    summary: '3D design, approvals and BIM-driven planning before a single brick is laid.',
    desc: 'In-house architects and draftsmen produce 3D designs, working drawings and BIM-driven plans — and we manage CMDA/local approvals so your project starts on solid legal and structural footing.',
    features: ['Architectural & 3D design', 'Working drawings', 'CMDA / approval support', 'BIM planning'],
  },
  {
    slug: 'civil-structural-works',
    title: 'Civil & Structural Works',
    icon: 'award',
    image: 'civilStructuralImage',
    summary: 'Foundations, RCC framework and structural work engineered for the long term.',
    desc: 'Excavation, foundations, RCC framework, waterproofing and structural reinforcement executed by experienced engineers — the unseen work that decides how long a building truly lasts.',
    features: ['Foundations & excavation', 'RCC framework', 'Waterproofing', 'Structural reinforcement'],
  },
  {
    slug: 'interior-fitout',
    title: 'Interior & Fit-out',
    icon: 'team',
    image: 'interiorFitoutImage',
    summary: 'Turnkey interiors — modular kitchens, false ceilings, flooring and finishing.',
    desc: 'Turnkey interior fit-outs for homes and offices: modular kitchens, wardrobes, false ceilings, flooring, painting and lighting — a single team taking your space from bare shell to move-in ready.',
    features: ['Modular kitchens & wardrobes', 'False ceiling & lighting', 'Flooring & painting', 'Office fit-outs'],
  },
]

export const STEPS = [
  { step: 'STEP 1', title: 'Consultation & Planning', desc: 'We understand your vision, site and budget, then map out a clear plan and timeline.' },
  { step: 'STEP 2', title: 'Design & Construction', desc: 'Our engineers and architects design and build with precision, quality and transparency.' },
  { step: 'STEP 3', title: 'Final Inspection & Handover', desc: 'A thorough quality check before we hand over your finished space, ready to move in.' },
]

export const PROJECTS = [
  {
    name: 'The Business Hub', category: 'Commercial',
    desc: 'G+4 office block with 26 suites, two lift cores and covered parking for 60 cars. Handed over one month ahead of schedule.',
    location: 'Tambaram, Chennai', area: '18,000 sq ft', duration: '1Y 3M', tag: 'Commercial Construction',
    year: '2023–2024', img: 'projectBusinessHub', featured: true,
  },
  {
    name: 'Sky Haven Residences', category: 'Residential',
    desc: 'Eighteen 2BHK and 3BHK flats across G+3, planned so every unit gets cross-ventilation and a covered balcony.',
    location: 'Selaiyur, Chennai', area: '4,200 sq ft', duration: '1Y 3M', tag: 'Residential Construction',
    year: '2024–2025', img: 'projectSkyHaven', featured: true,
  },
  {
    name: 'Green Villa Estate', category: 'Residential',
    desc: 'Six independent villas with rainwater harvesting, solar-ready roofs and landscaped courtyards. Built through two monsoon seasons without a schedule slip.',
    location: 'Medavakkam, Chennai', area: '2,800 sq ft', duration: '11M', tag: 'Residential Construction',
    year: '2023', img: 'projectGreenVilla', featured: false,
  },
  {
    name: 'Pallavaram Retail Arcade', category: 'Commercial',
    desc: 'A double-height retail arcade with 22 units, basement parking and a glass-fronted façade. Phased so the front shops opened while the rear was still finishing.',
    location: 'Pallavaram, Chennai', area: '6,500 sq ft', duration: '1Y', tag: 'Commercial Construction',
    year: '2022–2023', img: 'projectRetailArcade', featured: false,
  },
  {
    name: 'Lakeside Apartments', category: 'Residential',
    desc: 'A 32-unit apartment block with amenity deck, designed for cross-ventilation and lake views. Piled foundation to suit the soft soil near the water.',
    location: 'Chromepet, Chennai', area: '9,100 sq ft', duration: '1Y 6M', tag: 'Residential Construction',
    year: '2021–2022', img: 'projectLakeside', featured: false,
  },
  {
    name: 'Anna Salai Office Tower', category: 'Commercial',
    desc: 'A 7-storey corporate tower with column-free floor plates and a double-glazed curtain wall. Built on a tight roadside plot with night-time material deliveries.',
    location: 'Tambaram, Chennai', area: '14,300 sq ft', duration: '2Y', tag: 'Commercial Construction',
    year: '2020–2022', img: 'projectOfficeTower', featured: false,
  },
]

export const WHY_CHOOSE = [
  { title: 'Planned Before We Dig', desc: 'Drawings, approvals and a BIM model are settled before the first load of sand arrives — fewer surprises once work starts.', icon: 'tech' },
  { title: 'The Same Faces On Site', desc: 'Our engineers and masons are on our payroll, not hired per job. You deal with people who know your build.', icon: 'team' },
  { title: 'Dates You Can Plan Around', desc: 'You get a milestone schedule at the start and a photo update every week — if something slips, you hear it from us first.', icon: 'clock' },
  { title: '25 Years In Tambaram', desc: 'Most of our work comes from neighbours of people we have already built for. That only happens if the last job went well.', icon: 'award' },
]

export const VALUES = [
  { title: 'Transparency', desc: 'Itemised quotes and regular updates — you always know where your money and project stand.', icon: 'check' },
  { title: 'Quality First', desc: 'Tested materials and multi-stage quality checks on every build, with no shortcuts.', icon: 'award' },
  { title: 'Accountability', desc: 'One dedicated project manager owns your build from first drawing to final handover.', icon: 'team' },
  { title: 'On-Time Delivery', desc: 'Realistic timelines and disciplined scheduling keep your project moving.', icon: 'clock' },
]

export const TEAM = [
  { name: 'Tamil Priya', role: 'Founder & CEO', img: 'team1' },
  { name: 'Arjun Mehta', role: 'Lead Civil Engineer', img: 'team2' },
  { name: 'Ravi Shankar', role: 'Structural Engineer', img: 'team3' },
  { name: 'Priya Venkat', role: 'Principal Architect', img: 'team4' },
]

// Testimonials live on the home page only. About and Projects used to render
// this same list, so a visitor moving between them met the identical quotes
// three times — thin for the reader, and duplicated content across three
// indexed URLs. Keep new quotes here; add a page only if it needs its own set.
export const TESTIMONIALS = [
  { rating: '5.0', title: 'Beyond Expectations!', text: 'KN Builders transformed our plot into a beautiful home in Tambaram. Transparent pricing, great communication and outstanding quality throughout.', name: 'Lakshmi Anand', role: 'Homeowner, Tambaram', img: 'client1' },
  { rating: '5.0', title: 'Top-Notch Service!', text: 'Our commercial space was delivered ahead of schedule. The team was professional, detail-oriented and genuinely cared about the result.', name: 'Suresh Kumar', role: 'Business Owner, Pallavaram', img: 'client2' },
  { rating: '5.0', title: 'Truly Stress-Free', text: 'Weekly photo updates and a dedicated manager meant I never had to chase anyone. The villa was handed over exactly as promised.', name: 'Deepa Raman', role: 'Homeowner, Medavakkam', img: 'client3' },
  { rating: '5.0', title: 'Quality You Can See', text: 'From the foundation to the finishing, the workmanship is excellent. Five years on, not a single complaint. Highly recommended.', name: 'Mohan Raj', role: 'Homeowner, Selaiyur', img: 'client4' },
]

export const BLOGS = [
  { slug: 'technology-modern-construction', tag: 'Construction Trends', date: 'June 2, 2026', readTime: '5 min', title: 'How Technology Is Revolutionizing Modern Construction', img: 'blog1', excerpt: 'From BIM to drones and on-site IoT, here is how digital tools are making builds faster, safer and more predictable.' },
  { slug: 'successful-construction-project-steps', tag: 'Project Management', date: 'June 8, 2026', readTime: '6 min', title: '8 Essential Steps for a Successful Construction Project', img: 'blog2', excerpt: 'A clear, step-by-step framework that takes a project from first consultation all the way to a smooth handover.' },
  { slug: 'site-safety-tips', tag: 'Project Management', date: 'June 11, 2026', readTime: '4 min', title: 'Site Safety Tips: Ensuring a Smooth Construction', img: 'blog3', excerpt: 'Practical safety practices that protect your workers, your timeline and your budget on every site.' },
  { slug: 'cost-to-build-house-chennai', tag: 'Cost Guide', date: 'May 28, 2026', readTime: '7 min', title: 'What Does It Cost to Build a House in Chennai in 2026?', img: 'blog4', excerpt: 'A transparent breakdown of per-square-foot costs, materials and the factors that move your budget up or down.' },
  { slug: 'vaastu-modern-homes', tag: 'Design', date: 'May 20, 2026', readTime: '5 min', title: 'Balancing Vaastu With Modern Home Design', img: 'blog5', excerpt: 'How to honour Vaastu principles without compromising on light, space and contemporary aesthetics.' },
  { slug: 'choosing-a-builder-tambaram', tag: 'Buyer Guide', date: 'May 12, 2026', readTime: '6 min', title: 'How to Choose the Right Builder in Tambaram', img: 'blog6', excerpt: 'The questions to ask, the documents to check and the red flags to avoid before you sign a construction contract.' },
]

// Every question carries the pages it belongs on. Home and Services used to
// render the same FAQS.slice(0, 5), so a visitor moving between them met an
// identical block twice — and duplicated Q&A across two indexed URLs is worth
// avoiding for search as well. Tagging by page keeps each list purposeful and
// survives reordering, which a numeric slice did not.
//
//   home     — broad "is this firm right for me" questions
//   services — scope, cost and timeline, asked while comparing services
//   contact  — everything, since this is the page people land on to ask
export const FAQS = [
  { on: ['home', 'contact'], q: 'What services does KN Builders provide?', a: 'We offer residential and commercial construction, architecture & planning, civil and structural works, renovation & remodeling, and turnkey interior fit-outs — a complete end-to-end building service across Chennai.' },
  { on: ['home', 'contact'], q: 'Which areas around Chennai do you serve?', a: 'We build across the southern Chennai corridor including Tambaram, Selaiyur, Chromepet, Pallavaram, Medavakkam, Velachery, Guduvanchery, Perungalathur and surrounding localities.' },
  { on: ['services', 'contact'], q: 'Are there any hidden costs?', a: 'No. We provide a detailed, itemised quotation upfront and keep you informed at every stage, so there are no surprises.' },
  { on: ['services', 'contact'], q: 'How is the project cost determined?', a: 'Cost depends on the built-up area, materials, finishes and site conditions. We assess your requirements and provide a transparent per-square-foot estimate before work begins.' },
  { on: ['services', 'contact'], q: 'How long does it take to build a home?', a: 'A typical independent house takes 9–14 months from foundation to handover, depending on size and finishes. We share a milestone schedule at the start and track against it weekly.' },
  { on: ['services', 'contact'], q: 'How can I track the progress of my project?', a: 'You get regular updates with photos and a dedicated project manager you can reach anytime during construction.' },
  { on: ['home', 'contact'], q: 'Do you provide free consultations or quotes?', a: 'Yes — your first consultation and quote are completely free. Just reach out via the contact form or phone.' },
  { on: ['home'], q: 'Do you handle CMDA and building approvals?', a: 'Yes. Our in-house team prepares the drawings and manages CMDA and local body approvals as part of the project, so you are not left chasing paperwork between departments.' },
  { on: ['services'], q: 'Can you take over a project another builder started?', a: 'Often, yes. We survey what has been built, check the structure against the approved drawings and give you a written assessment before quoting for the remaining work.' },
]

// Questions for one page, in the order they are declared above.
export const faqsFor = (page) => FAQS.filter((f) => f.on.includes(page))
