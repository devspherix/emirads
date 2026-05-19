import type { Metadata } from "next";
import { Square, Layers, Sparkles, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "non-illuminated-signage";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Directory boards, joinery work, acrylic lettering and elegant non-illuminated signage for offices, hotels and retail.",
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
          icon: <Square className="h-5 w-5" />,
          title: "Crisp & Clean",
          body: "Precision-cut acrylic, metal and composite for a premium feel.",
        },
        {
          icon: <Layers className="h-5 w-5" />,
          title: "Real Materials",
          body: "Brushed stainless, painted aluminium, solid wood and acrylic.",
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          title: "Detail-First",
          body: "Tight tolerances, clean fixings and invisible stand-offs.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Easy to Update",
          body: "Modular directory boards make staff and tenant updates simple.",
        },
      ]}
      types={[
        {
          title: "Directory Boards",
          description:
            "Tenant and staff directories with modular inserts and clean typography.",
          image: "/images/DIRECTORY BOARDS 01.webp",
        },
        {
          title: "Acrylic Lettering",
          description:
            "3D acrylic letters mounted on stand-offs — sharp and elegant.",
          image: "/images/ACRYLIC LETTERING.jpg",
        },
        {
          title: "Joinery Work",
          description:
            "Custom carpentry — reception desks, brand walls and feature joinery.",
          image: "/images/JOINER WORK 01.jpg",
        },
        {
          title: "Wall Graphics",
          description:
            "Cut vinyl and printed graphics applied directly to interior walls.",
          image: "/images/Wall branding.jpg",
        },
        {
          title: "Door & Room ID Signs",
          description:
            "Crisp room identification plates in acrylic, metal or composite.",
          image: "/images/DOOR AND ROOM IDENTIFICATION SIGNS.jpg",
        },
        {
          title: "Brand Walls",
          description:
            "Statement walls that announce your brand the moment guests arrive.",
          image: "/images/wall-graphic-main.jpg",
        },
      ]}
      closingTitle="Designing a new space?"
      closingBody="We work alongside architects, designers and fit-out contractors."
    />
  );
}
