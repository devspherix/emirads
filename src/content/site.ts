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
  name: "Emirads",
  legalName: "Emirads Advertising L.L.C",
  tagline: "Branding | Signage | Vehicle & Event Solutions – Dubai",
  phone: "+971 58 580 6950",
  phoneRaw: "+971585806950",
  whatsapp: "https://wa.me/971585806950",
  email: "abdul@emirads.ae",
  address: "17A Street, Al Quoz Industrial Area 2, Warehouse C-24, Near Jotun Paints, Dubai, UAE",
  mapUrl: "https://www.google.com/maps/search/Al+Quoz+Industrial+Area+2+Dubai",
  instagram: "https://instagram.com/emirads.ae",
  website: "https://www.emirads.ae",
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
//  HOME PAGE COPY — sourced from the Emirads Advertising L.L.C
//  company profile (About Us / Mission / Vision / Quality Policy)
// ─────────────────────────────────────────────────────────────
export const trustBar = [
  { value: "In-House", label: "Design, Print & Fabrication" },
  { value: "Fast", label: "Turnaround, Including Urgent Jobs" },
  { value: "Certified", label: "Quality Materials & Equipment" },
  { value: "Trained", label: "Installation Team" },
  { value: "24/7", label: "Support for Night Jobs" },
  { value: "Dubai", label: "Al Quoz Industrial Area 2" },
];

export const whyChooseUs = [
  "In-house design, printing, fabrication and installation",
  "Fast turnaround — including urgent and night jobs",
  "High-grade, certified materials and modern equipment",
  "Experienced, trained installation team",
  "Transparent pricing with clear, honest communication",
  "End-to-end project ownership from concept to install",
];

export const missionStatement =
  "Our mission is to deliver premium-quality branding and signage solutions that elevate the identity and visibility of every client we serve — combining creativity, technology and craftsmanship into impactful visual communication, with consistency, durability and precision on every project.";

export const visionStatement =
  "Our vision is to become the UAE's most trusted and innovative signage and branding company — known for excellence, creativity and reliability, leading the industry through modern technology and sustainable production while continuously investing in people, machinery and materials.";

export const aboutIntro =
  "Emirads Advertising L.L.C is a Dubai-based advertising and branding company specializing in vehicle branding, event branding and custom signage solutions. We provide end-to-end services — design, printing, fabrication and installation — ensuring high-quality results, timely delivery and competitive pricing.";

export const processSteps = [
  {
    title: "Inquiry",
    detail:
      "Share your brief with us — service, sizes and where it needs to go. No obligation, no pressure.",
  },
  {
    title: "Consult & Survey",
    detail:
      "We confirm scope and, where needed, visit your site to verify sizes — no guesswork, no surprises.",
  },
  {
    title: "Design & Approval",
    detail:
      "Our in-house designers prepare clear visuals for your sign-off. Revise until you're happy.",
  },
  {
    title: "Fabricate & Print",
    detail:
      "Everything is built and printed in-house using certified, high-grade materials and modern equipment.",
  },
  {
    title: "Install",
    detail:
      "Our trained installers fit your signage cleanly and safely, including urgent and night jobs.",
  },
  {
    title: "Hand Over & Warranty",
    detail:
      "We walk you through the final result, backed by our written Quality Policy warranty.",
  },
];

// Quality Policy principles — verbatim from the Emirads Quality Policy Statement
export const qualityPrinciples = [
  {
    title: "Customer Focus",
    body: "We prioritize understanding customer needs and delivering solutions that meet their exact requirements with clear communication, transparency and dependable after-sales support.",
  },
  {
    title: "Compliance & Standards",
    body: "We follow all applicable industry standards, regulations and internal procedures to ensure safe, durable and professional results.",
  },
  {
    title: "Quality Materials & Equipment",
    body: "We use high-grade, certified materials and modern equipment to guarantee durability, accuracy and long-lasting performance in all our products.",
  },
  {
    title: "On-Time Delivery",
    body: "We commit to delivering every project on schedule while maintaining uncompromised quality.",
  },
];

export const warrantyHighlights = [
  "1 year warranty on standard signages and LED frontlit/backlit signages",
  "6 months–1 year on vinyl prints, depending on material grade",
  "Covers manufacturing, fabrication and installation defects",
  "Extended warranty available on specific projects by agreement",
];

export const certifications = [
  {
    title: "Licensed Advertising Company",
    body: "Emirads Advertising L.L.C operates under a registered UAE trade licence from our Al Quoz, Dubai workshop.",
  },
  {
    title: "Quality Policy & Warranty",
    body: "Every project follows our documented Quality Policy, backed by a written warranty covering materials, fabrication and installation.",
  },
  {
    title: "In-House Production",
    body: "Design, printing, fabrication and installation are all handled in-house — no third-party handoffs, no lost accountability.",
  },
  {
    title: "Urgent & Night Job Support",
    body: "Our team is equipped to support tight deadlines, including urgent turnarounds and out-of-hours installation.",
  },
];

// ─────────────────────────────────────────────────────────────
//  ABOUT PAGE — Team, described by function/department (per the
//  company's organisation chart, not by invented individual names)
// ─────────────────────────────────────────────────────────────
export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  bio: string[];
  initials: string;
  accent: ServiceAccent;
};

export const team: TeamMember[] = [
  {
    name: "Sales",
    role: "Sales Manager & Executives",
    summary:
      "Your first point of contact — understanding the brief and turning it into a clear quotation.",
    bio: [
      "Our Sales Manager and Sales Executives take your brief, confirm requirements and prepare a tailored quotation.",
      "They stay involved through approval and production, so you always have one point of contact for your project.",
    ],
    initials: "SL",
    accent: "pink",
  },
  {
    name: "Production",
    role: "Design, Graphics & Fabrication",
    summary:
      "Design, graphics pasting and fabrication — turning approved visuals into finished signage.",
    bio: [
      "Our Production department covers Design, Graphics Pasters, Machine Operators and Fabrication — everything between an approved mock-up and a finished product.",
      "Working in-house end-to-end keeps quality consistent and turnaround fast, including urgent jobs.",
    ],
    initials: "PR",
    accent: "blue",
  },
  {
    name: "Sign Installation Team",
    role: "On-Site Fitting",
    summary:
      "Our trained install crew — fast, safe and finished to a high standard.",
    bio: [
      "Our Sign Installation Team, under Production, handles on-site fitting for vehicle wraps, signage and large-format branding, including urgent and night jobs.",
      "From shopfront fascias to fleet branding, they make sure every install is delivered safely and looks right on day one.",
    ],
    initials: "IN",
    accent: "yellow",
  },
  {
    name: "Administration & Accounts",
    role: "Quality, Logistics & Accounts",
    summary:
      "Quality inspection, logistics coordination and accounts — keeping every project accountable.",
    bio: [
      "Our Administration team runs Quality Inspection and Logistics Coordination, while Accounts manages invoicing and payments.",
      "Together they keep communication transparent and every project accountable, in line with our Quality Policy.",
    ],
    initials: "AD",
    accent: "orange",
  },
];

// ─────────────────────────────────────────────────────────────
//  FEATURED PROJECTS (homepage teaser)
// ─────────────────────────────────────────────────────────────
export const featuredProjects = [
  {
    name: "Illuminated Frontlit Signage",
    scope: "Indoor Signage",
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    stats: ["In-house fabrication", "Certified materials", "Clean installation"],
  },
  {
    name: "Full Vehicle Wrap",
    scope: "Vehicle Branding",
    image: "/images/3D-Signage-25.jpg",
    stats: ["Weatherproof vinyl", "Full-colour print", "In-house installation"],
  },
  {
    name: "Pylon & Totem Signage",
    scope: "Outdoor Signage",
    image: "/images/PYLON AND TOTEM SIGNS.jpg",
    stats: ["Weather-resistant build", "High visibility", "On-site installation"],
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
    href: `mailto:${SITE.email}?subject=Project%20Brief%20-%20Emirads`,
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
