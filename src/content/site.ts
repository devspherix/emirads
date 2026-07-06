import {
  Building2,
  Car,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Printer,
  ShieldCheck,
  Square,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
//  CONTACT — single source of truth
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Emir Ads",
  legalName: "Emir Ads",
  phone: "+971 58 580 6956",
  phoneRaw: "+971585806956",
  whatsapp: "https://wa.me/971585806956",
  email: "info@emirads.ae",
  address: "Dubai Production City, UAE",
  mapUrl: "https://www.google.com/maps/search/Dubai+Production+City",
  instagram: "https://instagram.com/",
  foundedYear: 2012,
};

// ─────────────────────────────────────────────────────────────
//  TOP-LEVEL NAV — 5 pages
// ─────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// ─────────────────────────────────────────────────────────────
//  SERVICES CATALOG — 6 categories (sourced from the client's word-file
//  catalog; full per-service pages live under /services/[category]/[slug],
//  defined in src/content/services.ts)
// ─────────────────────────────────────────────────────────────
export type ServiceAccent = "orange" | "pink" | "blue" | "yellow";

export type ServiceCatalogItem = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  heroImage: string;
  accent: ServiceAccent;
  hasQuote: boolean; // shown in QuoteBuilder?
};

export const servicesCatalog: ServiceCatalogItem[] = [
  {
    slug: "vehicle-branding",
    name: "Vehicle Branding",
    shortName: "Vehicle Branding",
    tagline: "Turn your fleet into a moving billboard",
    description:
      "Full wraps, partial wraps, vinyl lettering and specialist branding for cars, vans, trucks, boats and containers.",
    icon: Car,
    heroImage: "/images/services/vehicle-branding/boat-yachts-branding/img1.jpeg",
    accent: "orange",
    hasQuote: true,
  },
  {
    slug: "banners-printing",
    name: "Banner Printing",
    shortName: "Banner Printing",
    tagline: "High-impact banners for every space",
    description:
      "PVC flex, fabric, mesh, blockout and roll-up banners — printed sharp and ready when you need them.",
    icon: Printer,
    heroImage: "/images/services/banners-printing/backlit-banner-printing/img1.jpeg",
    accent: "pink",
    hasQuote: true,
  },
  {
    slug: "custom-signage",
    name: "Custom Signage",
    shortName: "Custom Signage",
    tagline: "3D letters, LED and illuminated signage that gets noticed",
    description:
      "Acrylic, stainless steel, backlit and frontlit 3D letters, LED screens, directory boards and wayfinding signage.",
    icon: Lightbulb,
    heroImage: "/images/services/custom-signage/3d-acrylic-signage/img1.jpeg",
    accent: "blue",
    hasQuote: true,
  },
  {
    slug: "backdrop-and-display",
    name: "Backdrop & Display",
    shortName: "Backdrop & Display",
    tagline: "Indoor backdrops, outdoor displays and portable stands",
    description:
      "Fabric and MDF backdrops, pop-up displays, A-frames and exhibition counters for events of every size.",
    icon: Square,
    heroImage: "/images/services/backdrop-and-display/backlit-exhibition-backdrops/img1.jpeg",
    accent: "yellow",
    hasQuote: true,
  },
  {
    slug: "exhibition-and-stands",
    name: "Exhibition & Stands",
    shortName: "Exhibition & Stands",
    tagline: "Stands, booths and full event branding",
    description:
      "Custom exhibition stands, modular booths, wedding arches and complete event branding builds.",
    icon: Building2,
    heroImage: "/images/services/exhibition-and-stands/custom-exhibition-stands/img1.jpeg",
    accent: "orange",
    hasQuote: true,
  },
  {
    slug: "custom-flags",
    name: "Custom Flags",
    shortName: "Custom Flags",
    tagline: "Flags that move with the wind and the crowd",
    description:
      "Teardrop, blade, hoisting, boat and body flags — vivid full-colour printing on durable outdoor fabric.",
    icon: ShieldCheck,
    heroImage: "/images/services/custom-flags/blade-flags/img1.jpeg",
    accent: "pink",
    hasQuote: true,
  },
];

// ─────────────────────────────────────────────────────────────
//  Accent → tailwind / hex helper
// ─────────────────────────────────────────────────────────────
export const accentMap: Record<
  ServiceAccent,
  { hex: string; soft: string; ring: string; text: string }
> = {
  orange: {
    hex: "#D50367",
    soft: "rgba(213,3,103,0.10)",
    ring: "rgba(213,3,103,0.35)",
    text: "#A80250",
  },
  pink: {
    hex: "#D50367",
    soft: "rgba(213,3,103,0.08)",
    ring: "rgba(213,3,103,0.35)",
    text: "#D50367",
  },
  blue: {
    hex: "#00BBFE",
    soft: "rgba(0,187,254,0.08)",
    ring: "rgba(0,187,254,0.35)",
    text: "#00BBFE",
  },
  yellow: {
    hex: "#FFD705",
    soft: "rgba(255,215,5,0.18)",
    ring: "rgba(255,215,5,0.55)",
    text: "#7a6400",
  },
};

// ─────────────────────────────────────────────────────────────
//  HOME PAGE COPY
// ─────────────────────────────────────────────────────────────
export const trustBar = [
  { value: "100+", label: "Successful Projects" },
  { value: "Premium", label: "Quality Materials" },
  { value: "Fast", label: "Reliable Delivery" },
  { value: "Creative", label: "Professional Team" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "Startups → Enterprise", label: "Trusted Across the UAE" },
];

export const whyChooseUs = [
  "High-quality printing materials",
  "Creative branding solutions",
  "Fast delivery & installation",
  "Friendly, professional team",
  "Transparent, fair pricing",
  "Permit & approval handling",
];

export const heroStats = [
  { label: "Projects delivered", value: "100+" },
  { label: "Vehicles wrapped", value: "180+" },
  { label: "Client satisfaction", value: "95%" },
  { label: "Years in business", value: "12" },
];

export const processSteps = [
  {
    title: "Consult & Survey",
    detail:
      "We listen to your brief, visit your site and confirm sizes — no guesswork, no surprises.",
  },
  {
    title: "Design & Approval",
    detail:
      "Our in-house designers prepare clear visuals for your sign-off. Revise until you're happy.",
  },
  {
    title: "Fabricate & Print",
    detail:
      "Everything is built and printed in our Dubai workshop using premium, weather-tested materials.",
  },
  {
    title: "Install & Hand Over",
    detail:
      "Our installers fit your signage cleanly, then walk you through the final result and warranty.",
  },
];

export const certifications = [
  {
    title: "3M Certified Installer",
    body: "Authorised by 3M to install and warranty their premium vinyl and film products.",
  },
  {
    title: "Dubai Economy Licensed",
    body: "Fully licensed trade licence holder operating across the UAE.",
  },
  {
    title: "RTA Compliant",
    body: "All vehicle wraps comply with RTA regulations for commercial fleet branding.",
  },
  {
    title: "Municipality Approved",
    body: "Registered for outdoor signage NOC permits across Dubai and Sharjah.",
  },
];

// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE — Owner + Team
//  Names are placeholders. Replace with real team info.
// ─────────────────────────────────────────────────────────────
export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  bio: string[];
  initials: string;
  accent: ServiceAccent;
};

export const founder: TeamMember = {
  name: "Mr. Hashim",
  role: "Founder & Managing Director",
  summary:
    "Building Emir Ads from a single workshop into one of the UAE's most trusted signage and branding partners.",
  bio: [
    "Mr. Hashim founded Emir Ads with a simple belief: every brand deserves to be seen — clearly, beautifully and without hassle.",
    "With over 12 years of hands-on experience in printing, signage and large-format branding across the Gulf, he leads every project with a craftsman's eye for quality and an entrepreneur's drive for results.",
    "Under his leadership, Emir Ads has grown from a small print shop into a full-service branding partner trusted by startups, retailers and enterprise clients across Dubai, Sharjah and Abu Dhabi.",
  ],
  initials: "H",
  accent: "orange",
};

export const team: TeamMember[] = [
  {
    name: "Operations Manager",
    role: "Operations Manager",
    summary:
      "Keeps every project moving on schedule — from quote to final install.",
    bio: [
      "Our Operations Manager oversees the day-to-day running of the workshop, schedules installation crews and acts as your single point of contact from kickoff to handover.",
      "With deep experience in logistics, permits and on-site coordination, they make sure every project lands on time and on spec.",
    ],
    initials: "OM",
    accent: "pink",
  },
  {
    name: "Lead Designer",
    role: "Lead Designer",
    summary:
      "Turns your brand brief into print-ready visuals that look great in real life.",
    bio: [
      "Our Lead Designer handles everything visual — from logo placement on vehicle wraps to colour matching for illuminated signage.",
      "With a strong eye for proportion and detail, they ensure your brand reads cleanly at any size and any distance.",
    ],
    initials: "LD",
    accent: "blue",
  },
  {
    name: "Head of Installation",
    role: "Head of Installation",
    summary:
      "Leads our certified install team — fast, safe and finished to a high standard.",
    bio: [
      "Our Head of Installation runs our on-site crews and is personally 3M-certified for vehicle wraps and large-format installations.",
      "From overnight mall fascias to compound pylons, they make sure every install is delivered safely and looks perfect on day one.",
    ],
    initials: "HI",
    accent: "yellow",
  },
  {
    name: "Project Manager",
    role: "Project Manager",
    summary:
      "Your dedicated contact, keeping every brief on track and every client in the loop.",
    bio: [
      "Our Project Manager owns the client experience — from the first quote response through to post-installation support.",
      "They keep updates clear, timelines transparent and surprises off the table.",
    ],
    initials: "PM",
    accent: "orange",
  },
];

// ─────────────────────────────────────────────────────────────
//  FEATURED PROJECTS (homepage teaser)
// ─────────────────────────────────────────────────────────────
export const featuredProjects = [
  {
    name: "Glow District Retail",
    scope: "Indoor Signage",
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    stats: ["2 week turnaround", "IP65 lighting", "12m custom fascia"],
  },
  {
    name: "Velocity Motorsports",
    scope: "Vehicle Branding",
    image: "/images/3D-Signage-25.jpg",
    stats: ["18 vehicles", "Weatherproof vinyl", "Carbon accents"],
  },
  {
    name: "Expo Pavilion Pop-up",
    scope: "Outdoor Signage",
    image: "/images/PYLON AND TOTEM SIGNS.jpg",
    stats: ["600 sqm build", "Modular joinery", "AV integration"],
  },
];

// ─────────────────────────────────────────────────────────────
//  CONTACT METHODS (for use in cards)
// ─────────────────────────────────────────────────────────────
export const contactMethods = [
  {
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
    icon: Phone,
  },
  {
    label: "Email us",
    value: SITE.email,
    href: `mailto:${SITE.email}?subject=Project%20Brief%20-%20Emir%20Ads`,
    icon: Mail,
  },
  {
    label: "Visit us",
    value: SITE.address,
    href: SITE.mapUrl,
    icon: MapPin,
  },
];

// ─────────────────────────────────────────────────────────────
//  FAQ
// ─────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "How long does a typical sign take to deliver?",
    answer:
      "Most shopfront and indoor signs are ready in 12–18 days, including approvals. Smaller jobs and banners can be done in 2–5 days. We'll always confirm a clear timeline before you commit.",
  },
  {
    question: "Do you handle permits and municipality approvals?",
    answer:
      "Yes. We prepare the shop drawings, structural calculations and handle submissions with mall management and municipal authorities on your behalf.",
  },
  {
    question: "Are your prices fixed or does each project get a custom quote?",
    answer:
      "Our standard rates (shown on every service page) are a great starting point. For custom sizes, special finishes or large projects we'll send a tailored quote within 24 hours.",
  },
  {
    question: "Do you install outside Dubai?",
    answer:
      "Yes — we regularly install across Abu Dhabi, Sharjah and the wider UAE, and travel into the GCC for larger projects with trusted freight partners.",
  },
  {
    question: "Can I see samples before approving production?",
    answer:
      "Absolutely. For 3D letters, lightboxes and printed media we provide visual proofs, material swatches and (where useful) physical samples before going into production.",
  },
];

// ─────────────────────────────────────────────────────────────
//  Legacy compat (used by older sections — kept for safety)
// ─────────────────────────────────────────────────────────────
export const servicesList = servicesCatalog.slice(0, 5).map((s) => ({
  title: s.name,
  tag: s.shortName,
  description: s.description,
  icon: s.icon,
  items: [s.tagline],
}));

export const craftingMaterials = [
  "Acrylic + Polycarbonate",
  "Aluminum composite",
  "Solid surface",
  "Edge-lit glass",
  "Powder-coated metals",
  "Programmable LED",
  "Cast vinyl (3M / Avery)",
  "Dye-sub fabric",
];

export const authBenefits = [
  "Save and track multiple signage or wrap briefs.",
  "Request instant maintenance and service visits.",
  "Collaborate with our project leads in one portal.",
];
