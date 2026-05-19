import type { Metadata } from "next";
import { Sun, Shield, Building2, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "outdoor-signage";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Shopfront fascias, pylon and totem signs, outdoor LED boxes, hoardings and aluminium light boxes built for the UAE climate.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      name={svc.name}
      tagline={svc.tagline}
      description={svc.description}
      heroImage={svc.heroImage}
      accent={svc.accent}
      features={[
        {
          icon: <Sun className="h-5 w-5" />,
          title: "Desert-rated",
          body: "All materials are UV-stabilised and heat-tested for the UAE.",
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "Structural Engineering",
          body: "Every pylon and totem comes with stamped structural drawings.",
        },
        {
          icon: <Building2 className="h-5 w-5" />,
          title: "Permit Handling",
          body: "We manage municipality and landlord NOC approvals for you.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Full Illumination",
          body: "Frontlit, backlit and halo-lit options to match your brand.",
        },
      ]}
      types={[
        {
          title: "Hoarding",
          description:
            "Large-format outdoor hoardings for facades, sites and developments.",
          image: "/images/HOARDINGS 01.jpg",
        },
        {
          title: "Outdoor LED Box",
          description:
            "Weatherproof backlit LED box — bright shopfront fascia option.",
          image: "/images/OUTDOOR LIGHTBOXES 01.jpg",
        },
        {
          title: "Pylon / Totem Sign",
          description:
            "Freestanding aluminium pylon signs — priced per meter of height.",
          image: "/images/PYLON AND TOTEM SIGNS.jpg",
        },
        {
          title: "Aluminium Light Box",
          description:
            "Aluminium-framed backlit light box — clean, premium and durable.",
          image: "/images/OUTDOOR LIGHTBOXES 02.jpeg",
        },
        {
          title: "Building Signboards",
          description:
            "Branded fascia boards for retail, hospitality and corporate buildings.",
          image: "/images/BUILDING SIGNBOARDS 01.webp",
        },
        {
          title: "Shop Front Signs",
          description:
            "Shopfront fascias built to mall and authority specifications.",
          image: "/images/SHOP FRONT SIGNS 01.webp",
        },
      ]}
      pricingSlug={slug}
      whatsIncluded={[
        "Site survey and structural assessment",
        "Design proofs and approvals",
        "Premium aluminium / composite materials",
        "Weatherproof LED illumination",
        "Safe on-site installation",
      ]}
      closingTitle="Large site or compound branding?"
      closingBody="We offer project rates for multi-sign rollouts and development hoardings."
    />
  );
}
