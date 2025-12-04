import { Car, Mail, MapPin, Phone, Sparkles, Wrench } from "lucide-react";

export const navLinks = [
  { label: "Work", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

export const heroStats = [
  { label: "Installations delivered", value: "950+" },
  { label: "Fleet vehicles wrapped", value: "180+" },
  { label: "Events & pop-ups yearly", value: "40+" },
  { label: "Years crafting signage", value: "12" },
];

export const servicesList = [
  {
    title: "Signage Studio",
    tag: "Signages",
    description:
      "Front lit, backlit, neon, push-through and precision 2D signage programs for retail, hospitality and destination facades.",
    icon: Sparkles,
    items: [
      "Front lit signage engineering",
      "Backlit & halo-lit fascias",
      "Hand-blown neon + LED neon",
      "Push-through acrylic letters",
      "2D CNC-routed brand marks",
    ],
  },
  {
    title: "Vehicle Branding",
    tag: "Fleet",
    description:
      "Turn an entire fleet into rolling media. We manage design, material selection, print, lamination and on-site wrapping.",
    icon: Car,
    items: [
      "Full vehicle wraps",
      "Partial wraps & gradients",
      "Plotter cut graphics",
      "Protective over-lamination",
      "Fleet rollout scheduling",
    ],
  },
  {
    title: "Event & Experience",
    tag: "Events",
    description:
      "Immersive pop-ups, stages, kiosks and exhibition booths with integrated lighting, AV and brand storytelling.",
    icon: Sparkles,
    items: [
      "Pop-up retail & kiosks",
      "Stage + truss dressing",
      "Wayfinding & zoning",
      "Rapid deployment teams",
      "On-site technical support",
    ],
  },
  {
    title: "Fabrication Lab",
    tag: "Fabrication",
    description:
      "Joinery, aluminum, acrylic, glass and metal craft under one roof so we can prototype fast and deliver faster.",
    icon: Wrench,
    items: [
      "Joinery & bespoke carpentry",
      "Aluminum & mild steel works",
      "Glass bending & lamination",
      "Acrylic thermoforming",
      "In-house paint booth",
    ],
  },
];

export const featuredProjects = [
  {
    name: "Glow District Retail",
    scope: "Neon signage + interior wayfinding",
    stats: ["2 week turnaround", "IP65 lighting system", "12m custom fascia"],
  },
  {
    name: "Velocity Motorsports",
    scope: "Full fleet wrap program",
    stats: ["18 vehicles", "Weatherproof vinyl", "Carbon accents"],
  },
  {
    name: "Expo Pavilion Pop-up",
    scope: "Event build + experiential zones",
    stats: ["600 sqm build", "Modular joinery", "AV integration"],
  },
];

export const processSteps = [
  {
    title: "Discover & audit",
    detail:
      "Site survey, structural checks, material study and compliance with mall / municipality regulations.",
  },
  {
    title: "Design & prototype",
    detail:
      "3D visualization, lighting calculations and sample panels so stakeholders can sign off fast.",
  },
  {
    title: "Fabricate & wrap",
    detail:
      "In-house joinery, metal, paint, print and electrical teams ensure tighter tolerances and QC.",
  },
  {
    title: "Install & maintain",
    detail:
      "Night installs, access equipment, safety plans and post-install maintenance programs.",
  },
];

export const craftingMaterials = [
  "Acrylic + Polycarbonate",
  "Aluminum composite",
  "Solid surface",
  "Edge-lit glass",
  "Powder-coated metals",
  "Programmable LED",
  "Sustainable plywood",
  "Canvas & textile",
];

export const contactMethods = [
  {
    label: "Call the workshop",
    value: "+971 52 555 0123",
    href: "tel:+971525550123",
    icon: Phone,
  },
  {
    label: "Email a brief",
    value: "hello@emirads.com",
    href: "mailto:hello@emirads.com?subject=Project%20Brief%20-%20Emirads",
    icon: Mail,
  },
  {
    label: "Visit the yard",
    value: "Dubai Production City, UAE",
    href: "https://maps.app.goo.gl/dummy",
    icon: MapPin,
  },
];

export const faqs = [
  {
    question: "How fast can you deliver illuminated storefront signage?",
    answer:
      "Standard lead time is 12-18 days including approvals. Fast-track installs can be executed in under 8 days depending on authority requirements.",
  },
  {
    question: "Do you manage permits for malls and municipalities?",
    answer:
      "Yes, we prepare shop drawings, structural calculations, and handle submissions with mall management and municipal authorities.",
  },
  {
    question: "What vehicle wrap materials do you use?",
    answer:
      "We prefer 3M IJ180, Avery Dennison Supreme, and Arlon SLX media paired with cast laminates to withstand desert conditions.",
  },
  {
    question: "Can you support events outside the UAE?",
    answer:
      "Our rapid response teams regularly activate in Riyadh, Doha and across the GCC with mobile fabrication pods and trusted freight partners.",
  },
];

export const authBenefits = [
  "Save and track multiple signage or wrap briefs.",
  "Request instant maintenance and service visits.",
  "Collaborate with our project leads in one portal.",
];

