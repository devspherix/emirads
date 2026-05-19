import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, FileCheck, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "safety-compliance-signage";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Emergency exit signs, fire safety boards and regulation-ready signage for offices, malls, factories and public spaces in the UAE.",
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
          icon: <ShieldCheck className="h-5 w-5" />,
          title: "Code Compliant",
          body: "Built to UAE Civil Defence and municipality safety requirements.",
        },
        {
          icon: <AlertTriangle className="h-5 w-5" />,
          title: "Photoluminescent",
          body: "Glow-in-the-dark options that stay visible if the power fails.",
        },
        {
          icon: <FileCheck className="h-5 w-5" />,
          title: "Permit Ready",
          body: "Documentation and drawings packaged for authority approval.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Fast Supply",
          body: "Standard safety signs available off-the-shelf for quick install.",
        },
      ]}
      types={[
        {
          title: "Emergency Exit Signs",
          description:
            "Photoluminescent or LED-lit exit signs that stay readable in emergencies.",
          image: "/images/EMERGENCY EXIT SIGNS 01.webp",
        },
        {
          title: "Fire Safety Signboards",
          description:
            "Fire equipment markers, hose reel signs and assembly point boards.",
          image: "/images/FIRE SAFETY SIGNBOARDS.webp",
        },
        {
          title: "Evacuation Maps",
          description:
            "Custom floor-plan evacuation maps for offices, hotels and factories.",
          image: "/images/EMERGENCY EXIT SIGNS 02.jpg",
        },
        {
          title: "Safety Floor Markings",
          description:
            "Anti-slip floor decals for warehouses, factories and public walkways.",
          image: "/images/EMERGENCY EXIT SIGNS 03.jpg",
        },
        {
          title: "Hazard & Warning Signs",
          description:
            "ISO-standard warning, mandatory and prohibition signage.",
          image: "/images/FIRE SAFETY SIGNBOARDS 02.jpg",
        },
        {
          title: "Construction Site Signage",
          description:
            "PPE notices, site rules and Civil Defence-compliant safety boards.",
          image: "/images/WAYFINDING AND DIRECTIONAL SIGNS 02.jpg",
        },
      ]}
      closingTitle="Need help passing inspection?"
      closingBody="Send us your floor plan and we'll spec a fully compliant signage package."
    />
  );
}
