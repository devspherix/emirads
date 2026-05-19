import type { Metadata } from "next";
import { Clock, Layers, Ruler, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "banner-printing";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Large-format banner printing in Dubai. PVC flex, fabric, mesh and roller banner stands — fast turnaround on premium media.",
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
          icon: <Clock className="h-5 w-5" />,
          title: "Same-day Rush",
          body: "Express printing for urgent orders — ask about rush turnaround.",
        },
        {
          icon: <Layers className="h-5 w-5" />,
          title: "All Media Types",
          body: "PVC flex, fabric, mesh and vinyl — the right media for every use.",
        },
        {
          icon: <Ruler className="h-5 w-5" />,
          title: "Any Size",
          body: "From small roller banners to 50+ sq m hoardings.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Sharp Finishing",
          body: "Eyelets, hemming and pole pockets to match any installation type.",
        },
      ]}
      types={[
        {
          title: "PVC Flex — Outdoor",
          description:
            "UV-resistant outdoor flex for hoardings, facades and outdoor events.",
          image: "/images/HOARDINGS 01.jpg",
        },
        {
          title: "PVC Flex — Indoor",
          description:
            "Backlit and frontlit indoor flex for malls, pop-ups and exhibitions.",
          image: "/images/MENU BOARDS 02.webp",
        },
        {
          title: "Fabric — Dye Sublimation",
          description:
            "Premium tension-fabric prints for stages, frames and trade shows.",
          image: "/images/OUTDOOR LIGHTBOXES 01.jpg",
        },
        {
          title: "Mesh Banner",
          description:
            "Wind-through mesh for scaffolding, building wraps and high-rise.",
          image: "/images/HOARDINGS 02.jpg",
        },
        {
          title: "Roller Banner Stand",
          description:
            "Complete reusable stand + print — perfect for receptions and events.",
          image: "/images/DIRECTORY BOARDS 01.webp",
        },
        {
          title: "Hoardings",
          description:
            "Large-format hoarding prints for construction sites and developments.",
          image: "/images/BILLBOARDS 01.jpg",
        },
      ]}
      pricingSlug={slug}
      whatsIncluded={[
        "High-resolution print on premium media",
        "Colour-matched proofs before production",
        "Standard finishing (cut to size)",
        "Eyelets, hem or pole pocket on request",
      ]}
      closingTitle="Need it printed today?"
      closingBody="Same-day rush printing is available — call or WhatsApp us with your file."
    />
  );
}
