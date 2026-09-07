// Single source of truth for business identity (NAP), navigation and SEO defaults.
// Edit these values once and they propagate across every page + JSON-LD schema.

export const SITE = {
  name: 'KN Builders',
  legalName: 'KN Builders Pvt. Ltd.',
  tagline: 'Construction Excellence in Tambaram',
  url: 'https://www.knbuilders.com', // update to the live domain before launch
  phone: '+91 824 847 4364',
  phoneHref: 'tel:+918248474364',
  whatsapp: 'https://wa.me/918248474364',
  email: 'architects.kn@gmail.com',
  emailHref: 'mailto:architects.kn@gmail.com',
  foundingYear: 2001,
  priceRange: '₹₹',
  address: {
    street: 'No. 1390, Royappa Nagar',
    locality: 'Varadharajapuram',
    region: 'Tamil Nadu',
    city: 'Chennai',
    postalCode: '600048',
    country: 'IN',
  },
  geo: { lat: 12.9255225, lng: 80.0760131 }, // KN Architects & Builders, Mudichur/Tambaram
  // Google Maps: share link for "directions" + embeddable URL for the iframe
  mapLink: 'https://maps.app.goo.gl/2F2G25cJ2s7HWSnh8',
  mapEmbed: 'https://maps.google.com/maps?q=12.9255225,80.0760131&z=16&output=embed',
  // Lead delivery: paste your Web3Forms access key (free, no backend) from
  // https://web3forms.com. Until set, forms fall back to a WhatsApp deep-link.
  formAccessKey: '6aac9097-22f7-4e74-93ac-64f6125d2b52',
  hours: [
    { days: 'Mon – Fri', time: '9:00 – 18:00' },
    { days: 'Saturday', time: '10:00 – 15:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: {
    facebook: 'https://facebook.com/knbuilders',
    twitter: 'https://twitter.com/knbuilders',
    instagram: 'https://instagram.com/knbuilders',
    linkedin: 'https://linkedin.com/company/knbuilders',
    youtube: 'https://youtube.com/@knbuilders',
  },
}

// Localities served — powers the local-SEO / GEO "service area" content + schema.
// Each entry carries a short, factual note on the local building context so the
// service-area section says something useful instead of listing bare names.
//
// SERVICE_AREAS stays the Chennai-corridor list: it is the schema-backed
// areaServed for a business registered at Tambaram, so it must keep matching
// the NAP and geo coordinates in SITE above.
export const SERVICE_AREAS = [
  { name: 'Tambaram', note: 'Our home base. A mix of established independent-house plots and newer redevelopment, largely on firm to clayey soil.' },
  { name: 'Selaiyur', note: 'Predominantly residential layouts with regular plot sizes, well suited to independent houses and vertical extensions.' },
  { name: 'Chromepet', note: 'Dense, older housing stock where renovation, structural repair and additional floors are common requirements.' },
  { name: 'Pallavaram', note: 'Varied terrain including rocky patches, so foundation design differs noticeably from one street to the next.' },
  { name: 'Medavakkam', note: 'Fast-growing residential belt with newer layouts and a high share of first-time home builds.' },
  { name: 'Velachery', note: 'Low-lying in parts, with a high water table — drainage, plinth level and waterproofing need particular attention.' },
  { name: 'Guduvanchery', note: 'Expanding GST-road corridor with larger plots and room for independent villas.' },
  { name: 'Perungalathur', note: 'Well-connected residential area along the suburban rail and GST road, popular for new independent homes.' },
  { name: 'Madipakkam', note: 'Established residential locality where plot-level infill and floor additions are frequent.' },
  { name: 'Sholinganallur', note: 'IT-corridor demand drives both apartments and premium independent homes, alongside office fit-out work.' },
]

// Second delivery region — the Cauvery delta belt, roughly 300km south of the
// Chennai office. Kept separate from SERVICE_AREAS so the local-SEO schema and
// NAP keep pointing at the Chennai corridor where the business is registered,
// while the site can still show the wider footprint honestly.
export const DELTA_AREAS = [
  { name: 'Thanjavur', note: 'Delta headquarters town on deep alluvial soil, where bearing capacity and settlement govern the foundation design.' },
  { name: 'Thiruvarur', note: 'Low-lying and canal-fed, so plinth height, drainage and damp-proofing are decided before anything else.' },
  { name: 'Mannargudi', note: 'Agricultural town with generous plot sizes, suited to single-storey and courtyard-style independent homes.' },
  { name: 'Kumbakonam', note: 'Dense temple-town fabric with narrow access roads, which shapes both material logistics and staging.' },
  { name: 'Pattukkottai', note: 'Firmer ground towards the coastal plain, with steady demand for new independent houses.' },
  { name: 'Papanasam', note: 'Irrigated delta land where a seasonally high water table drives waterproofing and sump detailing.' },
  { name: 'Needamangalam', note: 'Smaller delta settlement where farmhouse and extended-family layouts are the common brief.' },
  { name: 'Orathanadu', note: 'Open agricultural terrain, giving room for wide-frontage plots and outbuildings.' },
  { name: 'Thiruthuraipoondi', note: 'Flat, low-lying land near the coast, so flood levels and site drainage are assessed first.' },
  { name: 'Peravurani', note: 'Coastal-belt town where salt-laden air makes cover, concrete grade and steel protection a priority.' },
]

// Regions shown in the animated service-area switcher. The Chennai corridor
// leads because it is the registered, schema-backed base.
export const SERVICE_REGIONS = [
  {
    key: 'north',
    label: 'North Tamil Nadu',
    blurb: 'Chennai, Kanchipuram, Thiruvallur and Chengalpattu — our home corridor, where ground conditions and plot patterns shift noticeably street to street.',
    areas: SERVICE_AREAS,
  },
  {
    key: 'delta',
    label: 'The Delta Districts',
    blurb: 'Thanjavur, Thiruvarur, Mannargudi and the surrounding delta — alluvial ground and a high water table make foundations and drainage the deciding factors.',
    areas: DELTA_AREAS,
  },
]

// Plain-name list for schema, chat and anywhere a simple string array is needed.
export const SERVICE_AREA_NAMES = SERVICE_AREAS.map((a) => a.name)

export const NAV_LINKS = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Services', href: '/services.html', key: 'services' },
  { label: 'Projects', href: '/projects.html', key: 'projects' },
  { label: 'Blog', href: '/blog.html', key: 'blog' },
  { label: 'About Us', href: '/about.html', key: 'about' },
  { label: 'Contact Us', href: '/contact.html', key: 'contact' },
]

export const fullAddress = () =>
  `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`
