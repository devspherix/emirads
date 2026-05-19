import type { Metadata } from "next";
import { Sun, Wifi, Monitor, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "led-screens";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Indoor and outdoor LED video walls in Dubai. P1.8, P1.85, P2.5 and P4 fine-pitch options with supply, install and CMS.",
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
          title: "High Brightness",
          body: "Outdoor displays bright enough to be read in direct UAE sunlight.",
        },
        {
          icon: <Wifi className="h-5 w-5" />,
          title: "Remote Content Control",
          body: "Cloud-based CMS — update your screen from your phone or laptop.",
        },
        {
          icon: <Monitor className="h-5 w-5" />,
          title: "Pixel-Perfect Pitch",
          body: "From P1.8 fine-pitch for boardrooms to P4 for malls and events.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Full Warranty",
          body: "Parts and labour warranty with on-site support SLA.",
        },
      ]}
      types={[
        {
          title: "Indoor LED — P1.8",
          description:
            "Ultra fine-pitch for close-up viewing — boardrooms, broadcast and showrooms.",
          image: "/images/LED NEON INDOOR SIGNS.webp",
        },
        {
          title: "Indoor LED — P1.85",
          description:
            "Premium fine-pitch panel for high-end retail and corporate spaces.",
          image: "/images/LED NEON INDOOR SIGNS.jpeg",
        },
        {
          title: "Indoor LED — P2.5",
          description:
            "Standard fine-pitch for shopping malls, lobbies and exhibitions.",
          image: "/images/BACKLIT 3D LETTERS 02.webp",
        },
        {
          title: "Outdoor LED — P2.5",
          description:
            "Weather-sealed fine-pitch for outdoor billboards visible up close.",
          image: "/images/BACKLIT 3D LETTERS 01.webp",
        },
        {
          title: "Indoor LED — P4",
          description:
            "Cost-effective indoor LED for malls, events and large-area displays.",
          image: "/images/PUSH-THROUGH ACRYLIC SIGNS 01.webp",
        },
        {
          title: "Custom Video Walls",
          description:
            "Curved, edge-to-edge or freestanding — built to your exact layout.",
          image: "/images/FRONTLIT 3D LETTERS 01.jpg",
        },
      ]}
      pricingSlug={slug}
      whatsIncluded={[
        "Display panels with full warranty",
        "Power, control & data cabling",
        "Mounting frame & structural fixings",
        "Cloud CMS setup & training",
        "Commissioning & content test",
      ]}
      closingTitle="Want a site survey first?"
      closingBody="Our engineers will visit your space and recommend the right pitch and size."
    />
  );
}
