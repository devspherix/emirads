import type { Metadata } from "next";
import { Shield, Zap, Palette, Car } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "vehicle-branding";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Professional vehicle wraps and fleet branding in Dubai. Full wraps, partial wraps and plotter-cut graphics — premium vinyl, expert install.",
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
          icon: <Shield className="h-5 w-5" />,
          title: "3M Certified",
          body: "Desert-grade films built to handle UAE heat, UV and sand.",
        },
        {
          icon: <Zap className="h-5 w-5" />,
          title: "Fast Turnaround",
          body: "Standard car wraps in 1–2 days. Fleet schedules planned ahead.",
        },
        {
          icon: <Palette className="h-5 w-5" />,
          title: "In-House Design",
          body: "Our designers prepare your artwork — included with full wraps.",
        },
        {
          icon: <Car className="h-5 w-5" />,
          title: "All Vehicle Types",
          body: "Cars, SUVs, vans, trucks, buses, trailers and machinery.",
        },
      ]}
      types={[
        {
          title: "Full Wrap — Cast Vinyl",
          description:
            "Premium cast vinyl wrap with full lamination — the most durable, conformable choice.",
          image: "/images/3D-Signage-25.jpg",
        },
        {
          title: "Full Wrap — Semi Vire",
          description:
            "Mid-grade semi-cast wrap that balances cost and quality for flat and lightly curved panels.",
          image: "/images/BUILDING SIGNBOARDS 01.webp",
        },
        {
          title: "Truck Wrap — Flat Vinyl",
          description:
            "Economy flat-panel vinyl ideal for trucks, trailers and large flat surfaces.",
          image: "/images/HOARDINGS 02.jpg",
        },
        {
          title: "Partial Wrap",
          description:
            "Branded panels and accents that deliver high impact at a smaller budget.",
          image: "/images/SHOP FRONT SIGNS 01.webp",
        },
        {
          title: "Plotter-Cut Graphics",
          description:
            "Crisp die-cut vinyl lettering and logos — clean, sharp and fast to apply.",
          image: "/images/ACRYLIC LETTERING.jpg",
        },
        {
          title: "Fleet Branding",
          description:
            "Multi-vehicle rollouts with consistent design across your entire fleet.",
          image: "/images/BUILDING SIGNBOARDS 02.jpg",
        },
      ]}
      pricingSlug={slug}
      whatsIncluded={[
        "Full vehicle surface prep & cleaning",
        "Premium cast or semi-cast vinyl",
        "Expert panel-by-panel installation",
        "Post-installation heat treatment",
        "Wrap warranty certificate",
      ]}
      closingTitle="Need a custom fleet plan?"
      closingBody="For multi-vehicle rollouts we offer project pricing and scheduled installs."
    />
  );
}
