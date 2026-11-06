import { Project, BrandContent, Enquiry } from '@/types';

export const INITIAL_BRAND_CONTENT: BrandContent = {
  heroTagline: "Spaces That Shape Tomorrow.",
  heroSubheadline: "Creating deliberate architectural landmarks where contemporary design, environmental consciousness, and quiet luxury converge.",
  brandHeadline: "More Than Spaces. A Better Way to Live.",
  brandPhilosophy: "ESTORA was founded on a singular conviction: that true luxury is not defined by excess, but by intention. Every residence we craft is an enduring response to light, geometry, and the human cadence of life.",
  consultationHeadline: "Find a Place That Feels Like Yours.",
  consultationSubheadline: "Connect with our advisory curators to explore residences, review tailored floorplans, or arrange a private viewing gallery experience."
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "the-grand-arc",
    slug: "the-grand-arc",
    title: "The Grand Arc",
    tagline: "Contemporary urban residences shaped by monolithic limestone and soaring verticality.",
    category: "Urban Residences",
    status: "Under Construction",
    location: "Kensington Enclave, Sector 42",
    city: "Metropolis Central",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
    ],
    priceRange: "₹4.8 Cr – ₹9.5 Cr (Concept Value)",
    completionYear: "Q4 2027",
    architect: "Studio Aurelius & Partners",
    shortDescription: "A landmark silhouette offering 3 and 4 bedroom residences with double-height cantilevered terraces overlooking the civic garden.",
    fullOverview: "The Grand Arc redefines city living through monumental geometric facades crafted from honed Roman limestone and floor-to-ceiling thermal acoustic glass. Designed for those who value privacy alongside vibrant urban connectivity, every home features private elevator access, column-free interior expanses, and acoustic seclusion.",
    highlights: [
      "Double-height sky lounge with panoramic city line vistas",
      "Dedicated high-speed private elevator cores per residence",
      "Integrated smart climate and thermal glass envelope",
      "Private 25-meter ozone indoor swimming pavilion"
    ],
    amenities: [
      "Thermal Hydrotherapy Pool",
      "Private Screening Auditorium",
      "Temperature-Controlled Wine Cellar",
      "Concierge & Valet Butler Service",
      "Equinox-Designed Fitness Pavilion",
      "Subterranean Secure Parking with EV Bays"
    ],
    specifications: [
      { category: "Structure", details: "Seismic Zone V compliant monolithic post-tensioned reinforced slab framework" },
      { category: "Flooring", details: "Imported Botticino Classico Italian Marble in living suites; engineered smoked oak in private quarters" },
      { category: "Joinery & Windows", details: "Schüco triple-glazed slim-profile aluminium fenestration with thermal acoustic break" },
      { category: "Kitchen Systems", details: "Custom Boffi cabinetry with Gaggenau integrated appliances and Caesarstone quartz counters" },
      { category: "Home Automation", details: "KNX-certified smart infrastructure covering lighting scenes, dynamic shades, and dual-zone HVAC" }
    ],
    floorPlans: [
      {
        id: "fp-ga-1",
        name: "Residence Aureum (3 BHK + Study)",
        type: "3 Bedroom + Library Suite",
        area: "3,250 sq.ft.",
        bedrooms: 3,
        bathrooms: 4,
        balconies: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        description: "Expansive open-plan salon leading onto an 18-foot cantilevered sun deck, complete with a discreet chef's pantry and master dressing sanctuary."
      },
      {
        id: "fp-ga-2",
        name: "Penthouse Caelum (4 BHK Duplex)",
        type: "4 Bedroom Sky Duplex",
        area: "5,800 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        balconies: 3,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        description: "Crown jewel duplex with internal glass elevator, 22-foot soaring living gallery, private heated plunge pool, and wraparound terrace."
      }
    ],
    featured: true
  },
  {
    id: "solenne-residences",
    slug: "solenne-residences",
    title: "Solenne Residences",
    tagline: "Calm, nature-inspired living immersed within cascading verdant courts and reflective water bodies.",
    category: "Sanctuary Villas",
    status: "Ready for Possession",
    location: "Meadowlands Reserve, Sector 88",
    city: "New Meridian",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
    ],
    priceRange: "₹6.2 Cr – ₹14.0 Cr (Concept Value)",
    completionYear: "Q1 2026",
    architect: "Kengo Kawa Atelier",
    shortDescription: "A low-density sanctuary of courtyard villas and garden penthouses framed by mature olive groves and whispering bamboo avenues.",
    fullOverview: "Solenne is an homage to biological architecture where interior spatial boundaries dissolve into lush biophilic courtyards. Crafted with hand-chiseled slate, untreated cedar wood, and continuous water runnels, every residence creates an oasis of sensory restoration minutes away from the city's financial heart.",
    highlights: [
      "Low-density community restricted to only 38 boutique residences",
      "Central biophilic courtyard with bio-filtered natural swimming lagoon",
      "Private subterranean zen gardens and personal outdoor rain showers",
      "Zero-carbon structural timber accents with 100% solar rainwater harvesting"
    ],
    amenities: [
      "Natural Bio-Filtered Lagoon",
      "Open-Air Yoga & Meditation Deck",
      "Artisan Bakery & Tea Salon",
      "Herbaceous Kitchen Botanical Garden",
      "Private Library & Resident Reading Room",
      "Tesla Solar-Integrated Microgrid"
    ],
    specifications: [
      { category: "Materials", details: "Sustainably harvested Japanese Cedar, Vals quartzite slate, and exposed architectural fair-faced concrete" },
      { category: "Energy System", details: "Integrated rooftop solar photovoltaics coupled with geothermal earth-cooling loops" },
      { category: "Landscape", details: "Native micro-climate horticulture designed by celebrated botanical architects" },
      { category: "Sanitary Fittings", details: "Custom brushed bronze tapware by Dornbracht and freestanding travertine soaking tubs" },
      { category: "Air Quality", details: "Hospital-grade MERV 16 continuous fresh-air mechanical ventilation with natural cedar infusion" }
    ],
    floorPlans: [
      {
        id: "fp-sr-1",
        name: "Courtyard Villa Serenus",
        type: "4 Bedroom Ground Villa",
        area: "4,600 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        balconies: 2,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
        description: "Four suites arranged symmetrically around an open-air central water courtyard with Japanese maples and outdoor hearth."
      }
    ],
    featured: true
  },
  {
    id: "aurelia-heights",
    slug: "aurelia-heights",
    title: "Aurelia Heights",
    tagline: "Modern premium sky apartments reaching toward unobstructed sunrise horizons.",
    category: "Sky Apartments",
    status: "Upcoming Launch",
    location: "Skyline Corridor, Boulevard West",
    city: "Metropolis Central",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000&auto=format&fit=crop"
    ],
    priceRange: "₹3.9 Cr – ₹7.8 Cr (Concept Value)",
    completionYear: "Q2 2028",
    architect: "Foster & Sterling Studio",
    shortDescription: "Fifty storeys of sculptural bronze-clad architecture overlooking the southern coastline, offering elevated sky residences.",
    fullOverview: "Aurelia Heights rises as a radiant golden needle above the metropolitan skyline. Its aerodynamic curved form minimizes wind resistance while maximizing 270-degree panorama views of the bay and the distant mountains. Each residence benefits from seamless floor transitions, deep shading louvers, and bespoke lighting artistry.",
    highlights: [
      "Iconic 50-storey sculptural facade finished in bespoke champagne bronze",
      "Level 45 Infinity Sky Pool suspended 180 meters above ground level",
      "Astronomical observatory lounge and rooftop telescope deck",
      "Certified IGBC Platinum high-efficiency sustainable tower"
    ],
    amenities: [
      "Level 45 Suspended Sky Pool",
      "Observatory Sky Deck & Lounge",
      "High-Altitude Squash & Padel Court",
      "Private Executive Meeting Suites",
      "Bespoke Dry Clean & Valet Care",
      "Dedicated High-Speed Express Elevators"
    ],
    specifications: [
      { category: "Facade", details: "Double-skin anodized champagne bronze panels with Saint-Gobain triple silver low-E solar glass" },
      { category: "Acoustics", details: "Sound-damped floating subfloor system achieving STC 65 acoustic decoupling" },
      { category: "Electricals", details: "100% DG dual redundancy power backup with automatic harmonic filtration" },
      { category: "Fire Safety", details: "Addressable fire suppression with dual pressurized fire egress towers and refuge decks" }
    ],
    floorPlans: [
      {
        id: "fp-ah-1",
        name: "Horizon Suite (3 BHK)",
        type: "3 Bedroom Sky Suite",
        area: "2,850 sq.ft.",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
        description: "East-facing layout designed to capture golden morning light across the central living hall and master corner suite."
      }
    ],
    featured: true
  },
  {
    id: "elysian-wharf",
    slug: "elysian-wharf",
    title: "Elysian Wharf",
    tagline: "Exclusive deep-water marina residences celebrating maritime tranquility.",
    category: "Waterfront",
    status: "Upcoming Launch",
    location: "Port Marina Promenade",
    city: "Azure Bay",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
    ],
    priceRange: "₹8.5 Cr – ₹18.0 Cr (Concept Value)",
    completionYear: "Q3 2028",
    architect: "Studio Nautica & Zaha Collaborators",
    shortDescription: "Curvilinear waterfront residences with private yacht berths, teak promenade decks, and saltwater wellness baths.",
    fullOverview: "Elysian Wharf occupies an unrepeatable coastal promontory where the open ocean meets sheltered bay waters. Conceived as aerodynamic maritime pavilions, the residences feature teak sun decks, salt-resistant bronze fittings, and uninterrupted vistas of sailing yachts gliding past your private terrace.",
    highlights: [
      "Direct deep-water private marina with dedicated yacht slips for residents",
      "Continuous nautical hardwood wrap-around terraces",
      "Saltwater thermal wellness pool fed directly from micro-filtered bay waters",
      "Private waterfront dining club curated by Michelin-awarded guest chefs"
    ],
    amenities: [
      "Private Yacht Berths & Marina Club",
      "Oceanfront Infinity Saltwater Pool",
      "Seaside Promenade & Boarding Jetty",
      "Sommelier Tasting Lounge",
      "Full Yacht Provisioning Concierge",
      "Subterranean Watercraft Storage"
    ],
    specifications: [
      { category: "Marine Engineering", details: "Marine-grade 316 stainless steel and salt-mist resistant fluoropolymer architectural coatings" },
      { category: "Flooring", details: "Burmese plantation teak decking alongside Pietra di Cardoso Italian sandstone" },
      { category: "Joinery", details: "Custom flush concealed magnetic maritime doors with hidden pivot hinges" },
      { category: "Automation", details: "Integrated tidal climate monitoring and automatic wind-responsive storm louvers" }
    ],
    floorPlans: [
      {
        id: "fp-ew-1",
        name: "Marina Pavilion (4 BHK)",
        type: "4 Bedroom Waterfront Suite",
        area: "4,950 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        balconies: 3,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        description: "Dramatic ocean-facing floorplan with 180-degree unobstructed horizon, private master dip pool, and staff quarter suite."
      }
    ],
    featured: false
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: "enq-101",
    createdAt: "2026-11-04T14:32:00Z",
    name: "Vikramaditya Singhania",
    email: "vikram.singhania@apexcapital.example",
    phone: "+91 98201 00000",
    projectSlug: "the-grand-arc",
    projectName: "The Grand Arc",
    preferredDate: "2026-11-15",
    message: "Interested in the 4 BHK Duplex Penthouse Caelum. Looking for a weekend walkthrough slot for my family and architectural consultant.",
    status: "New",
    notes: "High intent inquiry for Duplex penthouse unit."
  },
  {
    id: "enq-102",
    createdAt: "2026-11-02T10:15:00Z",
    name: "Elena Rostova",
    email: "elena.r@designatelier.example",
    phone: "+91 98112 00000",
    projectSlug: "solenne-residences",
    projectName: "Solenne Residences",
    preferredDate: "2026-11-18",
    message: "Would like to receive the full architectural brochure and landscape specification book for Courtyard Villa Serenus.",
    status: "Contacted",
    notes: "Brochure and virtual walkthrough link shared via secure email."
  },
  {
    id: "enq-103",
    createdAt: "2026-10-29T16:45:00Z",
    name: "Dr. Anirudh Mehta",
    email: "a.mehta@cardiacinst.example",
    phone: "+91 99220 00000",
    projectSlug: "aurelia-heights",
    projectName: "Aurelia Heights",
    preferredDate: "2026-11-20",
    message: "Seeking details on the upcoming launch date and express elevator configurations for the high-zone 3 BHK Horizon Suites.",
    status: "In Review",
    notes: "Awaiting final floor-level schedule from the development office."
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Thoughtful Architecture",
    tagline: "Form sculpted for permanent grace",
    description: "We work exclusively with visionaries who honor honest stone, monumental proportions, and structural purity. Our buildings are crafted not for transient trends, but to stand with quiet dignity for generations.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Considered Living",
    tagline: "Interiors responsive to human rhythm",
    description: "Every floor plan begins with human motion: the arc of morning light across breakfast tables, the seamless isolation between entertaining salons and private chambers, and uncompromised acoustic stillness.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Lasting Quality",
    tagline: "Materials that patinate with beauty",
    description: "We select Roman travertine, untreated cedar, hand-forged bronze, and triple-insulated glazed facades that age with character. True luxury is an heirloom asset built on uncompromising engineering.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
  }
];

export const LIFESTYLE_EDITORIALS = [
  {
    category: "Architecture",
    title: "Monolithic Geometry & Shaded Voids",
    description: "Deep overhangs, floating cantilevers, and raw tactile limestone create residences that converse with weather, light, and shadow throughout the year.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Landscaped Spaces",
    title: "Centuries-Old Flora & Reflective Waters",
    description: "Gardens curated not as mere decoration, but as botanical reserves featuring native groves, limestone cascades, and aromatic herb paths.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Interior Design",
    title: "Quiet Tones & Custom Millwork",
    description: "Interiors designed to lower the pulse: wide-plank oiled oak, honed marble countertops, concealed pocket joinery, and shadow-line ceiling reveals.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    category: "Community Spaces",
    title: "Private Clubs for Conversational Leisure",
    description: "Discreet subterranean screening rooms, sommelier tasting rooms, and hydrotherapy spas reserved exclusively for residents and their guests.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop"
  }
];

