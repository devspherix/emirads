import type { Metadata } from "next";
import { Building, Map, Layers, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "indoor-signage";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Reception logos, light box panels, directional signs, totems and gypsum hoardings for offices, malls and hotels in Dubai.",
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
          icon: <Building className="h-5 w-5" />,
          title: "Branded Interiors",
          body: "Reception logos, lobby graphics and bespoke brand walls.",
        },
        {
          icon: <Map className="h-5 w-5" />,
          title: "Wayfinding",
          body: "Clean, consistent directional signage from concept to install.",
        },
        {
          icon: <Layers className="h-5 w-5" />,
          title: "All Finishes",
          body: "Brushed gold, chrome, painted RAL, backlit and halo-lit.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Turnkey Install",
          body: "Our team handles drilling, wiring and final hand-over.",
        },
      ]}
      types={[
        {
          title: "Light Box Panel",
          description:
            "Backlit fabric or acrylic light boxes for high-impact reception and retail walls.",
          image: "/images/OUTDOOR LIGHTBOXES 01.jpg",
        },
        {
          title: "Direction Sign with Pole",
          description:
            "Aluminium directional sign mounted on standard pole — durable and easy to read.",
          image: "/images/WAYFINDING AND DIRECTIONAL SIGNS 01.webp",
        },
        {
          title: "Totem Sign",
          description:
            "Freestanding aluminium totem signage — great for entrances and brand walls.",
          image: "/images/PYLON AND TOTEM SIGNS.jpg",
        },
        {
          title: "Indoor Gypsum Hoarding",
          description:
            "Built-in gypsum hoardings with painted finish for shopfits and pop-ups.",
          image: "/images/Wall branding.jpg",
        },
        {
          title: "Reception Logo Walls",
          description:
            "3D acrylic and metal letters that make your brand the first thing visitors see.",
          image: "/images/Reception Logo 01.webp",
        },
        {
          title: "Wayfinding Systems",
          description:
            "Floor directories, door signs and complete wayfinding programs.",
          image: "/images/WAYFINDING AND DIRECTIONAL SIGNS 02.jpg",
        },
      ]}
      pricingSlug={slug}
      whatsIncluded={[
        "Design proofs and material samples",
        "Premium acrylic, aluminium or gypsum",
        "LED illumination where applicable",
        "Installation and final hand-over",
      ]}
      closingTitle="Have a full fit-out project?"
      closingBody="We manage end-to-end interior signage programs from design to install."
    />
  );
}
