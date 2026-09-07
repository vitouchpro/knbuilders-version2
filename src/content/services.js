// Long-form content for individual service pages, keyed by the slug in data.js.
// Merged with the base SERVICES entry (title, icon, features) by getService().
import { SERVICES } from '../data.js'

const CONTENT = {
  'residential-construction': {
    img: 'residentialConstructionImage',
    metaTitle: 'Residential Construction in Chennai | KN Builders',
    metaDescription: 'Independent houses, villas and apartments built across Tambaram and Chennai — from soil testing to turnkey finishing, with transparent pricing.',
    intro: 'We have built independent houses and small apartment blocks across Tambaram, Chromepet and Selaiyur for over [25] years. One site engineer stays with your project from the first day of excavation to the day we hand you the keys — you re not bounced between three different "in-charge" people depending on who is free.',
    body: [
      { h2: 'A home built right, from the ground up' },
      { p: 'A house is the biggest investment most families make. We treat it that way — combining sound structural engineering, quality-tested materials and honest, itemised pricing so you know exactly what you are paying for at every milestone.' },
      { p: 'Building in Chennai is not the same as building anywhere else in India. The soil varies street by street, the monsoon tests every joint and seal, and the approval process has its own rules. The sections below explain how we handle each of those, so you can judge any builder — including us — on specifics rather than promises.' },

      { h2: 'Built for How Chennai Weather Actually Behaves' },
      { p: 'Chennai gives you two real problems: brutal heat most of the year, and heavy monsoon water for a few weeks that can undo a badly waterproofed terrace fast. We design for both — cross-ventilated room orientation so you are not fully AC-dependent April through June, and terrace/bathroom waterproofing done as a proper stage, not an afterthought. Rainwater harvesting goes in wherever setback allows, partly because it is genuinely useful here and partly because CMDA increasingly expects it anyway.' },
      { h3: 'Soil varies enormously across south Chennai' },
      { p: 'Foundation design is decided by what is under your plot, not by a standard template. Much of the Tambaram–Chromepet–Pallavaram belt sits on clayey soil that swells when wet and shrinks when dry, while areas closer to the coast and the Pallikaranai basin carry sandy or made-up soil with a high water table. Both need different answers.' },
      { ul: [
        'Firm red or gravelly soil — a conventional isolated footing is usually sufficient and most economical.',
        'Expansive clay — footings must sit below the active zone, or the design moves to a raft to spread the load.',
        'Loose sandy or filled-up soil — often needs a raft, or piles where the bearing strata sit deep.',
        'High water table — demands dewatering during excavation and proper below-ground waterproofing.',
      ] },
      { p: 'This is why we insist on a soil test before quoting a foundation. A builder who quotes a foundation before testing is guessing with the most expensive part of your house — and that guess is corrected at your cost, not theirs.' },

      { h3: 'Designing for monsoon and heat' },
      { p: 'Chennai receives the bulk of its rain in a few intense north-east monsoon weeks, and spends much of the year above 30°C. Both belong in the design, not in the repair bill:' },
      { ul: [
        'Roof slopes and outlets sized for heavy short-burst rain rather than average rainfall.',
        'Box-type or chemical waterproofing at the foundation, plus full treatment of terraces, balconies and wet areas.',
        'Rainwater harvesting — mandatory for buildings in Tamil Nadu, and genuinely useful for recharging your own borewell.',
        'Cross-ventilation and shaded openings on the west and south-west to cut heat gain before it enters the house.',
        'External wall and terrace treatments that reduce indoor temperature and lower running cost year after year.',
      ] },

      { h2: 'Approvals and compliance in Chennai' },
      { p: 'Most residential plots in the Tambaram and greater Chennai area fall under CMDA jurisdiction, with the local corporation or municipality handling building permission. Which rules apply depends on your plot size, road width and the number of floors you intend to build — and they materially affect what you are allowed to build.' },
      { p: 'Getting this wrong is expensive and slow to undo. Unapproved or deviated construction can invite penalties, obstruct water and electricity connections, and become a serious problem when you later try to sell or mortgage the property. We prepare the drawings and documentation and manage the approval process so your home is legal from the first day.' },
      { tip: 'Before buying a plot, check the approved layout, the patta and the road width. A plot on a narrow road may legally cap the number of floors you can build — better to know before you buy than after.' },

      { h2: 'What You are Actually Paying For, Stage by Stage' },
      { p: 'A house is not one job, it is a sequence of dependent jobs. Knowing the sequence tells you what should be happening on your site at any point:' },
      { ol: [
        'Soil testing & survey - Bearing capacity, water table depth, boundary check. Decides whether you need isolated footing (most Tambaram plots) or something deeper.',
        'Structural design & approvals - RCC design sized to your soil report — footings, columns, beams, slab — plus CMDA/DTCP approval coordination.',
        'Foundation - Excavation, PCC bed, footing and plinth beam in M20/M25 concrete with Fe500/Fe550 TMT bars from [Tata Tiscon / your brand].',
        'RCC frame - Column-beam-slab structure floor by floor. Every slab pour gets checked before we start the next floor. We have had contractors before us pour over a green slab to save two days — we do not do that, and it is worth saying out loud.',
        'Brickwork - [AAC blocks / red clay bricks — state which and why]. AAC in particular helps with Chennai is heat if that is what you use — worth mentioning if true.',
        'Electrical & plumbing rough-in -  Concealed ISI-marked conduit wiring, CPVC/UPVC plumbing before plastering starts.',
        'Plastering, waterproofing, flooring - Terrace and bathroom waterproofing (Dr. Fixit or equivalent) done before tiling — not patched after a leak shows up in year two. Flooring per your package: vitrified, granite, or marble.',
        'Painting & finishing - Putty, primer, [brand] emulsion, doors, windows, fittings.',
        'Handover - Joint walkthrough against a punch list. Nothing is "done" until you have signed off.'
      ] },
      { p: 'For a typical independent house this runs 9–14 months. Curing time is the one thing that cannot be compressed: concrete needs its full cure regardless of how urgent the schedule is, and a builder promising to skip it is offering you a weaker house.' },

      { h2: 'What drives the cost of a home' },
      { p: 'Two houses of identical size can differ by 40% in cost. Almost all of that difference sits in a handful of decisions:' },
      { table: {
        head: ['Cost driver', 'Effect on budget', 'Why'],
        rows: [
          ['Finishes and fittings', 'High', 'Flooring, kitchen, bathrooms and joinery are where budgets swing most'],
          ['Soil and foundation type', 'High', 'A raft or piled foundation costs considerably more than isolated footings'],
          ['Number of floors', 'Medium to high', 'Extra floors increase steel, foundation loading and structural depth'],
          ['Structural design complexity', 'Medium', 'Long spans, cantilevers and curved forms need more steel and formwork'],
          ['Material rates', 'Medium', 'Cement, steel and sand prices move with the market during the build'],
          ['Built-up area', 'Direct', 'The base multiplier on the per-square-foot rate'],
        ],
      }, caption: 'Indicative drivers — your actual estimate follows a site assessment and agreed specification.' },
      { p: 'The protection against surprises is not a low headline rate, it is a written specification. A rate of so-many rupees per square foot means nothing until it says which brand and grade of cement and steel, which flooring, and what is excluded. Compound walls, sumps, overhead tanks and premium fittings are commonly quoted separately — always ask.' },

      { h2: 'How to judge quality while it is being built' },
      { p: 'Most defects that shorten the life of a building are invisible by handover. These are the checks worth making while work is in progress:' },
      { ul: [
        'Concrete cube tests for each major pour, with results shared rather than described.',
        'Steel of the specified grade and diameter, with spacing and cover matching the structural drawing.',
        'Curing carried out for the full period — the single most common corner cut on Chennai sites.',
        'Waterproofing applied and ponding-tested on terraces and wet areas before flooring covers it.',
        'Concealed plumbing and electrical photographed before plastering, so future repairs are not guesswork.',
      ] },
      { p: 'We document these stages as we go and share them with you. It is your house — you are entitled to see the evidence, not just the finished surface.' },
    ],
    faqs: [
      { q: 'How long does it take to build an independent house?', a: '9 to 14 months from foundation to handover for a typical 1,200–2,000 sq.ft house, depending on floors and finish level. We share a stage-wise schedule before starting and review it with you weekly.' },
      { q: 'Do you build Vaastu-compliant homes?', a: 'Yes, though we push back gently when strict Vaastu would kill natural light or airflow in a room — we did rather have that conversation with you upfront than build something you are unhappy living in.' },
      { q: 'Can you build on my existing plot?', a: 'Absolutely. We start with a free site assessment, then provide a transparent estimate based on your plot, requirements and budget.' },
    ],
  },
  'commercial-construction': {
    img: 'commercialConstructionImage',
    metaTitle: 'Commercial Construction in Chennai | KN Builders',
    metaDescription: 'Offices, retail arcades, showrooms and institutional buildings delivered on time, on budget and to the highest safety standards across Chennai.',
    intro: 'From offices and retail arcades to showrooms and institutional buildings, we deliver commercial spaces engineered for footfall, durability and low running costs — on time and on budget.',
    body: [
      { h2: 'Commercial spaces that work as hard as you do' },
      { p: 'A commercial build has to balance cost, speed and compliance. We manage all three with disciplined project management, column-free planning where possible, and finishes chosen for heavy daily use.' },
      { p: 'The economics are different from a home. Every week of delay is a week of rent or revenue you do not earn, and every cheap finish becomes a maintenance cost you pay for years. Commercial decisions are best judged over the life of the building, not at the quotation stage.' },

      { h2: 'Designing for footfall and flexibility' },
      { p: 'Commercial tenants change, and a building that cannot adapt loses value. Long spans and column-free floor plates cost more in structural steel up front, but they let a space be re-partitioned for a new tenant without touching the structure.' },
      { ul: [
        'Column-free plates where the span justifies the extra structural cost.',
        'Floor loading specified for actual use — storage and server rooms carry far more than office floors.',
        'Service routing through accessible ceilings and risers, so maintenance does not mean demolition.',
        'Power and data capacity planned with headroom for future load, not just present-day need.',
        'Entrances, staircases and lifts sized for peak-hour movement rather than average footfall.',
      ] },
      { p: 'Finishes take the heaviest beating in commercial buildings. Flooring in a retail entrance sees more traffic in a month than a home floor sees in years, so we specify materials by expected footfall rather than appearance alone.' },

      { h2: 'Compliance and safety, handled' },
      { p: 'We manage approvals, fire and safety norms and accessibility requirements so your building opens without compliance surprises — and stands up to years of intensive use.' },
      { p: 'Commercial approvals are more demanding than residential ones, and the requirements scale with the height and occupancy of the building. Depending on your project this can include:' },
      { ul: [
        'CMDA or local planning approval appropriate to the building class and occupancy.',
        'Fire service clearance — escape routes, staircase widths, extinguishing systems and detection.',
        'Accessibility provisions including ramps, accessible sanitation and lift access.',
        'Structural stability certification from a qualified engineer.',
        'Electrical safety and lift inspection clearances before occupation.',
      ] },
      { tip: 'Fire and accessibility requirements shape the floor plan itself — staircase width and escape distances are not decoration. Build them into the design from day one; retrofitting them after the structure is up is disruptive and expensive.' },

      { h2: 'Delivering to an opening date' },
      { p: 'Commercial projects are usually tied to a lease, a launch or a fit-out window, so the schedule is a commercial commitment rather than an estimate. We work to a milestone programme and manage the two things that most often derail it: long-lead materials and dependencies between trades.' },
      { ol: [
        'Requirement and site study — use, occupancy, load and statutory constraints.',
        'Design and structural drawings — spans, services and compliance resolved together.',
        'Approvals and clearances — planning, fire and allied permissions.',
        'Foundation and structure — the phase where weather risk is highest, so it is scheduled around monsoon where possible.',
        'Envelope and services — façade, electrical, plumbing, HVAC and fire systems.',
        'Fit-out and finishes — partitions, flooring, ceilings, joinery and signage.',
        'Testing, certification and handover — systems commissioned and documented.',
      ] },
      { p: 'Long-lead items — lifts, switchgear, HVAC equipment and imported façade materials — are ordered early, because they are the most common cause of a delayed opening.' },

      { h2: 'Cost over the life of the building' },
      { p: 'A cheaper build often costs more to own. These are the trade-offs worth taking deliberately rather than by default:' },
      { table: {
        head: ['Decision', 'Cheaper option', 'Longer-term consideration'],
        rows: [
          ['Flooring', 'Standard tiling', 'Heavy-traffic-rated flooring lasts far longer in entrances and corridors'],
          ['Waterproofing', 'Basic treatment', 'Terrace and wet-area failures damage tenant fit-out, not just the slab'],
          ['Electrical capacity', 'Sized for current load', 'Headroom avoids a full rewire when occupancy or equipment grows'],
          ['Façade', 'Plaster and paint', 'Cladding or treated finishes reduce repainting cycles and heat gain'],
          ['HVAC', 'Lowest capital cost', 'Efficiency shows up in every electricity bill for the life of the system'],
        ],
      }, caption: 'Indicative trade-offs — the right answer depends on your use, tenure and budget.' },
      { p: 'We put these choices in front of you with the cost difference attached, so the decision is yours and made with the numbers visible.' },
    ],
    faqs: [
      { q: 'Do you handle approvals for commercial projects?', a: 'Yes. We manage CMDA/local approvals, fire and safety compliance, and the documentation a commercial building needs before it opens.' },
      { q: 'Can you deliver to a fixed timeline?', a: 'We work to an agreed milestone schedule and disciplined project management to hit your opening date — many of our commercial projects are delivered ahead of schedule.' },
    ],
  },
  'renovation-remodeling': {
    img: 'renovationRemodelingImage',
    metaTitle: 'Home Renovation & Remodeling in Chennai | KN Builders',
    metaDescription: 'Modernise, repair or expand your existing home or building in Chennai — additional floors, interior overhauls, façade upgrades and structural repairs.',
    intro: 'Modernise, repair or expand an existing structure without the stress. We handle additional floors, interior overhauls, façade upgrades and full renovations with minimal disruption to your routine.',
    body: [
      { h2: 'A fresh start for your existing space' },
      { p: 'Renovation is often more complex than new construction — it has to respect what is already there. We begin with a thorough structural assessment, then plan the work to keep your home liveable and your timeline realistic.' },
      { p: 'The difference is that a new build starts from a known quantity. A renovation starts from a building whose history you inherit: undocumented alterations, concealed services, and materials that have aged differently. Honest renovation work begins by finding out what is actually there.' },

      { h2: 'The structural assessment comes first' },
      { p: 'Before any renovation scope is priced, the existing structure has to be assessed. This is the step that determines whether your plan is possible at all, and it is the step most often skipped by builders who quote quickly to win the job.' },
      { ul: [
        'Foundation and column capacity — decisive if you intend to add a floor.',
        'Condition of the RCC frame, including corrosion of reinforcement in older buildings.',
        'Age and specification of the original construction, where drawings or records exist.',
        'Existing plumbing and wiring — often the real reason an old house feels tired.',
        'Prior alterations, particularly walls removed without structural replacement.',
      ] },
      { p: 'In coastal and humid parts of Chennai, corrosion of reinforcement is the most common structural problem in older buildings. Rust expands, cracks the concrete cover and weakens the member — and a cosmetic renovation over an untreated column simply hides a problem that keeps growing.' },
      { tip: 'Cracks that reappear after being filled, rust stains on concrete, or a slab that sounds hollow when tapped are all worth investigating before you spend on finishes. Treating the cause is cheaper than repainting the symptom every year.' },

      { h2: 'Adding a floor to an existing house' },
      { p: 'Vertical extension is one of the most common requests we get from growing families in Tambaram and the surrounding areas — and one where the honest answer is sometimes no.' },
      { p: 'An additional floor adds load that the original foundation and columns may not have been designed to carry. If the original build anticipated a future floor, the columns and footings were sized for it and the extension is straightforward. If it did not, the options are strengthening the existing structure, using a lighter construction system for the new floor, or reconsidering the plan.' },
      { ol: [
        'Structural assessment of the existing foundation, columns and slab.',
        'Verification of what the original design allowed for, from drawings where available.',
        'Approval for the additional floor — extensions need permission just as new builds do.',
        'Strengthening works, if the assessment calls for them.',
        'Construction of the new floor, sequenced to keep the ground floor usable.',
        'Waterproofing and finishing of the new terrace and connections.',
      ] },
      { p: 'We give you the assessment result before you commit to the project, including when it says the extension is not advisable. A structurally unsound floor is not a saving.' },

      { h2: 'From small upgrades to full transformations' },
      { p: 'Whether you need an extra floor for a growing family, a modern kitchen and bathrooms, or a complete façade refresh, we scope the work clearly and price it transparently before we start.' },
      { h3: 'Living in the house during the work' },
      { p: 'For many renovations you can stay, provided the work is phased. Wet work, demolition and dust are the disruptive elements, so we sequence them to keep a usable core of the house available:' },
      { ul: [
        'Phase the work room by room, or floor by floor, rather than opening everything at once.',
        'Keep at least one bathroom and a functioning kitchen area in service where possible.',
        'Seal off active work zones to control dust, particularly for households with children or elderly members.',
        'Schedule the noisiest work into agreed hours, especially in apartments with shared walls.',
        'Isolate water and power to work areas only, so the rest of the house keeps running.',
      ] },
      { p: 'Where a renovation involves the full structure or every bathroom simultaneously, moving out for a defined period is usually faster and cheaper than working around occupation. We will tell you which situation you are in before work starts.' },

      { h2: 'Why renovation quotes vary so much' },
      { p: 'Renovation estimates differ more between builders than new-build estimates, almost always because of what is left out:' },
      { table: {
        head: ['Item', 'Often excluded from cheap quotes', 'Why it matters'],
        rows: [
          ['Structural repair', 'Priced only after work starts', 'Corrosion and cracks found on opening up change the scope'],
          ['Concealed plumbing', 'Assumed reusable', 'Old pipework often fails soon after new tiling covers it'],
          ['Rewiring', 'Partial replacement only', 'Old wiring may not carry modern appliance loads safely'],
          ['Debris removal', 'Not itemised', 'Demolition waste disposal is a real, chargeable cost'],
          ['Making good', 'Assumed minor', 'Adjacent surfaces almost always need repair after removal work'],
        ],
      }, caption: 'The gap between renovation quotes is usually scope, not rate.' },
      { p: 'We open up and inspect where we can before quoting, and state clearly which items are provisional pending what we find. A quote that hides uncertainty is not cheaper — it just moves the cost to a later conversation.' },
    ],
    faqs: [
      { q: 'Can you add a floor to my existing house?', a: 'Often yes — but only after a structural assessment confirms the existing foundation and columns can carry the extra load. We check this first and advise honestly.' },
      { q: 'Can I live in the house during renovation?', a: 'For many renovations, yes. We plan the work in phases to keep parts of the home usable and minimise disruption.' },
    ],
  },
  'design-and-planning': {
    img: 'architecturePlanningImage',
    metaTitle: 'Architecture, 3D Design & Planning in Chennai | KN Builders',
    metaDescription: 'In-house architects deliver 3D designs, working drawings, BIM planning and CMDA approval support so your Chennai project starts on solid footing.',
    intro: 'In-house architects and draftsmen produce 3D designs, working drawings and BIM-driven plans — and we manage CMDA and local approvals so your project starts on solid legal and structural footing.',
    body: [
      { h2: 'Get the design right before you build' },
      { p: 'Every rupee spent at the design stage saves many during construction. Our architects translate your needs into 3D designs and detailed working drawings, resolving clashes and inefficiencies before they reach the site.' },
      { p: 'Changes get more expensive the later they happen. Moving a wall on a drawing costs an hour of drafting; moving it after the slab is cast costs demolition, rebuilding and delay. The design stage is where your money has the most leverage.' },

      { h2: 'What a complete drawing set contains' },
      { p: 'A 3D render shows you how a house will look. It does not tell a mason where to build. Those are different documents, and a build supervised from renders alone is a build full of on-site improvisation:' },
      { ul: [
        'Floor plans — room dimensions, wall thicknesses, door and window positions.',
        'Elevations and sections — heights, levels and how the building is put together vertically.',
        'Structural drawings — footing sizes, column and beam schedules, slab reinforcement details.',
        'Electrical layout — every point, switchboard and circuit, planned around how you use each room.',
        'Plumbing layout — supply and drainage lines, slopes, traps and access points.',
        'Joinery and finishing details — kitchen, wardrobes, staircase and railing specifics.',
        'Door and window schedule — sizes, materials and specification, item by item.',
      ] },
      { p: 'We resolve the clashes between these before construction. A beam running through a window opening or a drain line crossing a footing is trivial to fix on a drawing and disruptive to fix on site.' },
      { tip: 'Plan your electrical layout around your furniture, not the empty room. Walk each room mentally — where the bed sits, which side you read on, where the television and router go. Sockets are cheap now and expensive after plastering.' },

      { h2: 'Approvals, managed for you' },
      { p: 'Navigating CMDA and local approvals can be daunting. We prepare the drawings and documentation and shepherd them through the process, so your project is legally sound from day one.' },
      { p: 'Planning rules directly constrain what can be designed, so we check them before drawing rather than after. The parameters that shape your design include:' },
      { ul: [
        'Permissible coverage and floor space index for your plot and zone.',
        'Setbacks required on each side, which vary with plot size and building height.',
        'Road width, which can limit the height and number of floors permitted.',
        'Parking provision required for the building type and size.',
        'Rainwater harvesting provisions, mandatory across Tamil Nadu.',
      ] },
      { p: 'Designing first and checking rules afterwards is how projects lose months. We work the other way round — the constraints are inputs to the first sketch.' },

      { h2: 'Vaastu as a design input' },
      { p: 'Many families in Chennai want a Vaastu-compliant home, and most Vaastu principles have a practical basis — placement relative to sun path, prevailing breeze and daily movement through the house.' },
      { p: 'We treat Vaastu as one input among several and resolve it alongside daylight, ventilation and practical layout. Where a strict interpretation would produce a genuinely poor room — a dark kitchen or an unusable bedroom — we say so and offer alternatives, rather than silently compromising the house or silently ignoring your brief.' },

      { h2: 'How the design stage runs' },
      { ol: [
        'Requirement discussion — how many rooms, how you live, budget range and priorities.',
        'Site and plot study — dimensions, orientation, road access, soil and statutory constraints.',
        'Concept plan — initial layout options for discussion and revision.',
        'Design development — the chosen layout refined, with 3D views to confirm the look.',
        'Working and structural drawings — the full set a site team can build from.',
        'Approval drawings and submission — documentation prepared and filed.',
        'Costing — a specification-linked estimate built from the finished drawings.',
      ] },
      { p: 'Estimating from a completed drawing set is what makes a quote meaningful. A price given before the design exists is a guess, and guesses are revised upward once the details appear.' },
    ],
    faqs: [
      { q: 'Do you provide 3D designs before construction?', a: 'Yes. Our architects produce 3D visualisations and working drawings so you can see and refine your home before a single brick is laid.' },
      { q: 'Do you help with CMDA approvals?', a: 'Yes. We prepare the required drawings and documentation and manage the approval process on your behalf.' },
    ],
  },
  'civil-structural-works': {
    img: 'civilStructuralImage',
    metaTitle: 'Civil & Structural Works in Chennai | KN Builders',
    metaDescription: 'Excavation, foundations, RCC framework, waterproofing and structural reinforcement by experienced engineers — the work that decides how long a building lasts.',
    intro: 'Excavation, foundations, RCC framework, waterproofing and structural reinforcement, executed by experienced engineers — the unseen work that decides how long a building truly lasts.',
    body: [
      { h2: 'The strength behind every great building' },
      { p: 'The parts of a building you never see are the parts that matter most. We engineer foundations and structural frameworks to suit your soil and loads, using tested materials and rigorous quality checks at every pour.' },
      { p: 'Structural work is also the least forgiving. A wrong tile can be replaced next year; a badly cast column is embedded in the building for its entire life. This is the stage where supervision and material testing pay for themselves many times over.' },

      { h2: 'Foundations are chosen, not assumed' },
      { p: 'The foundation carries every load in the building down into the ground, so its design follows the soil beneath your specific plot. Soil testing tells us the bearing capacity and water table, and the foundation type follows from that:' },
      { table: {
        head: ['Foundation type', 'Suited to', 'Typical use'],
        rows: [
          ['Isolated footing', 'Firm soil with good bearing capacity', 'Most independent houses on stable ground'],
          ['Combined / strip footing', 'Closely spaced columns or moderate soil', 'Boundary columns and closely placed loads'],
          ['Raft foundation', 'Weak, filled or expansive soil', 'Spreads the whole building load over a single slab'],
          ['Pile foundation', 'Poor surface soil with deep bearing strata', 'Taller buildings and difficult or waterlogged ground'],
        ],
      }, caption: 'Foundation selection follows the soil report, plot conditions and building loads.' },
      { p: 'Over-building a foundation wastes money; under-building one risks settlement and cracking that is extremely expensive to correct. A soil test costs a small fraction of the foundation itself and prevents both errors.' },

      { h2: 'Concrete and steel: where quality is decided' },
      { p: 'The strength of an RCC frame depends on a small number of things being done correctly and consistently:' },
      { ul: [
        'Concrete grade appropriate to the structural element, with the mix proportioned rather than eyeballed.',
        'Cube testing of each major pour, tested at the standard intervals and the results recorded.',
        'Reinforcement of the specified grade and diameter, with correct spacing, laps and anchorage.',
        'Adequate concrete cover to protect reinforcement from moisture and corrosion.',
        'Formwork that is properly aligned, supported and not struck too early.',
        'Full curing for the specified period after every pour.',
      ] },
      { h3: 'Why curing matters more than it seems' },
      { p: 'Concrete does not dry — it hydrates, gaining strength chemically over days and weeks. Cut curing short and the concrete never reaches its design strength, no matter how good the mix was. In Chennai heat, water evaporates from a fresh surface quickly, which makes disciplined curing more important here than in cooler climates, and makes it the corner most commonly cut on rushed sites.' },
      { h3: 'Concrete cover and corrosion' },
      { p: 'Reinforcement bars need a specified thickness of concrete over them. Where cover is insufficient, moisture and airborne salt reach the steel and it corrodes — and corroding steel expands, cracking the concrete from the inside. This is the mechanism behind most premature structural deterioration in coastal Chennai buildings, and it is entirely preventable at the time of casting with correct cover blocks.' },

      { h2: 'Waterproofing that lasts' },
      { p: 'In the Chennai climate, waterproofing is not optional. We treat foundations, roofs and wet areas properly the first time, protecting your structure from the damp and damage that shorten the life of a building.' },
      { p: 'Water damage is rarely dramatic and almost always progressive: a damp patch becomes peeling plaster, then corroding reinforcement, then structural repair. The critical locations are consistent:' },
      { ul: [
        'Foundation and plinth — below-ground protection against rising damp and a high water table.',
        'Terrace and roof — the largest exposed surface, and the one that takes the full monsoon.',
        'Bathrooms and utility areas — treated and ponding-tested before flooring goes down.',
        'Overhead tanks and sumps — leaks here saturate structure continuously, not seasonally.',
        'Balconies, parapets and external wall junctions — where slopes and joints decide where water goes.',
      ] },
      { tip: 'Insist on a ponding test on terraces and wet areas — the area is flooded and held for a period to prove there is no leak. It is far easier to find a failure before tiling than after.' },

      { h2: 'Structural repair and strengthening' },
      { p: 'Not all structural work is new construction. Older buildings across Chennai need assessment and repair — corroded reinforcement exposed and treated, cracks investigated for cause rather than filled cosmetically, and members strengthened where loading has changed or deterioration has advanced.' },
      { p: 'The important part is diagnosis. A crack is a symptom, and filling it without establishing whether it comes from settlement, thermal movement, corrosion or overloading simply hides the problem until it returns. We identify the cause first and then repair it, and we tell you plainly when a building needs more than cosmetic attention.' },
    ],
    faqs: [
      { q: 'Why are foundations so important?', a: 'The foundation carries the entire load of the building. A foundation matched to your soil and structure prevents settlement, cracks and long-term damage.' },
      { q: 'Do you test soil before designing the foundation?', a: 'Yes. Soil testing informs the foundation design, ensuring it is neither under-built (risky) nor over-built (wasteful).' },
    ],
  },
  'interior-fitout': {
    img: 'interiorFitoutImage',
    metaTitle: 'Interior Design & Fit-out in Chennai | KN Builders',
    metaDescription: 'Turnkey interiors for homes and offices in Chennai — modular kitchens, wardrobes, false ceilings, flooring, painting and lighting, all under one team.',
    intro: 'Turnkey interior fit-outs for homes and offices: modular kitchens, wardrobes, false ceilings, flooring, painting and lighting — a single team taking your space from bare shell to move-in ready.',
    body: [
      { h2: 'From bare shell to move-in ready' },
      { p: 'A beautiful interior is about coordination — joinery, electrical, lighting and finishes all working together. With one team handling everything, you avoid the gaps and finger-pointing that come from juggling multiple contractors.' },
      { p: 'Most interior problems are sequencing problems rather than taste problems. The carpenter arrives before the electrical points are moved, or the false ceiling goes up before the air-conditioning is routed. Interiors run smoothly when the trades are ordered correctly and each one knows what the next needs.' },

      { h2: 'The sequence that keeps a fit-out on track' },
      { ol: [
        'Design and measurement — layouts, elevations and a specification for every item.',
        'Electrical and plumbing changes — points relocated before anything covers the walls.',
        'False ceiling and air-conditioning routing — services above the ceiling settled first.',
        'Flooring — laid and protected before joinery arrives.',
        'Joinery installation — kitchen, wardrobes and units fitted to measured openings.',
        'Painting and finishing — after joinery, so touch-ups are done once.',
        'Lighting, fixtures and hardware — installed and tested.',
        'Deep clean and snag list — every item checked and corrected before handover.',
      ] },
      { p: 'Getting this order wrong is what causes the familiar complaints — a socket hidden behind a wardrobe, a ceiling opened up again for a duct, or fresh paint damaged by joinery fitted afterwards.' },

      { h2: 'Designed around how you live and work' },
      { p: 'We design interiors around your routines and budget, balancing aesthetics with durability and storage. The result is a space that looks great and works beautifully every day.' },
      { h3: 'Materials suited to Chennai humidity' },
      { p: 'Humidity is the deciding factor for interior materials here, particularly in kitchens and bathrooms. Material choice matters more than finish colour for how an interior looks in five years:' },
      { table: {
        head: ['Application', 'Common choice', 'What to weigh'],
        rows: [
          ['Kitchen base units', 'Marine plywood', 'Handles moisture far better than MDF near wet zones'],
          ['Wardrobe carcass', 'Commercial or marine ply', 'Ply holds screws and load better over time than particle board'],
          ['Bathroom vanity', 'WPC or marine ply', 'Moisture-resistant substrates avoid swelling and delamination'],
          ['Countertop', 'Granite or quartz', 'Granite is hard-wearing; quartz is more uniform and non-porous'],
          ['Shutter finish', 'Laminate or acrylic', 'Laminate is durable and economical; acrylic gives a higher gloss'],
        ],
      }, caption: 'Substrate matters more than surface finish for how long an interior lasts.' },
      { p: 'Hardware deserves the same attention. Hinges and drawer channels are operated thousands of times, and they are the components that most often fail first in a cheaply specified kitchen. We specify them explicitly rather than leaving them as an unnamed line item.' },

      { h2: 'Lighting and electrical planning' },
      { p: 'Lighting changes how a finished space feels more than almost any other decision, and it has to be planned before the ceiling closes:' },
      { ul: [
        'Layered lighting — ambient, task and accent, rather than a single central fitting per room.',
        'Task lighting under kitchen wall units, where a downlight alone leaves you working in your own shadow.',
        'Colour temperature chosen per room — warmer for living and bedrooms, cooler for kitchens and workspaces.',
        'Switch positions planned around movement, including two-way switching for bedrooms and stairs.',
        'Sufficient socket provision for how the room is actually used, including charging points.',
      ] },
      { tip: 'Mark furniture positions on the floor in tape before finalising electrical points. It takes an afternoon and prevents the most common regret in a finished interior — sockets and switches stranded behind furniture.' },

      { h2: 'Office and commercial fit-outs' },
      { p: 'Yes, we deliver office interiors — and they run to different priorities than homes. Acoustics, cable management, meeting-room provision and durability under daily use matter more than décor, and the work is often scheduled around an occupied building or a lease start date.' },
      { p: 'Where a workplace is occupied during the fit-out, we phase the work and schedule disruptive activity outside working hours so your team can keep operating.' },

      { h2: 'What a turnkey quote should tell you' },
      { p: 'Interior quotes are notoriously hard to compare, because two quotes for "a modular kitchen" can describe very different products. A quote worth trusting states, item by item:' },
      { ul: [
        'The substrate material and grade for each unit, not just the visible finish.',
        'The hardware brand and type for hinges, channels and handles.',
        'Countertop material, thickness and edge profile.',
        'Whether appliances, chimney and sink are included or excluded.',
        'Painting scope — number of coats, surface preparation and product.',
        'What is specifically excluded, so nothing appears as an extra later.',
      ] },
      { p: 'We quote in that format as standard. It makes our pricing easy to check against anyone else, which is the point.' },
    ],
    faqs: [
      { q: 'Do you offer turnkey interiors?', a: 'Yes. We handle the complete fit-out — modular kitchens, wardrobes, false ceilings, flooring, painting and lighting — so you move into a finished space.' },
      { q: 'Can you do office fit-outs?', a: 'Yes. We deliver office interiors designed for productivity, durability and your brand, on an agreed timeline.' },
    ],
  },
}

export const getService = (slug) => {
  const base = SERVICES.find((s) => s.slug === slug)
  return base ? { ...base, ...CONTENT[slug] } : null
}

export const relatedServices = (slug, n = 3) => SERVICES.filter((s) => s.slug !== slug).slice(0, n)
