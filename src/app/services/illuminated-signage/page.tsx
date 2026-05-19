import type { Metadata } from "next";
import { Lightbulb, Sun, Sparkles, CheckCircle } from "lucide-react";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/content/site";

const slug = "illuminated-signage";
const svc = getServiceBySlug(slug)!;

export const metadata: Metadata = {
  title: `${svc.name} | Emir Ads — Dubai`,
  description:
    "Frontlit and backlit 3D letters, push-through acrylic, cutout letters and LED neon signs — illuminated signage built in Dubai.",
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
          icon: <Lightbulb className="h-5 w-5" />,
          title: "Bright & Even",
          body: "Premium LED modules for consistent glow across every letter.",
        },
        {
          icon: <Sun className="h-5 w-5" />,
          title: "Day & Night Visibility",
          body: "Reads sharp during the day, glows beautifully after dark.",
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          title: "Custom Finishes",
          body: "Brushed, painted, chrome and acrylic faces in any RAL.",
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Long Lasting",
          body: "Sealed housings and quality LEDs built to last for years.",
        },
      ]}
      types={[
        {
          title: "Frontlit 3D Letters",
          description:
            "Aluminium letter casings with internal LEDs — bright, classic shopfront look.",
          image: "/images/FRONTLIT 3D LETTERS 01.jpg",
        },
        {
          title: "Backlit 3D Letters",
          description:
            "Reverse-mounted halo-lit letters that cast a glow behind them — premium feel.",
          image: "/images/BACKLIT 3D LETTERS 02.webp",
        },
        {
          title: "Push-Through Acrylic",
          description:
            "Acrylic letters pushed through a metal face — crisp lit edges, clean finish.",
          image: "/images/PUSH-THROUGH ACRYLIC SIGNS 01.webp",
        },
        {
          title: "2D / 3D Cutout Letters",
          description:
            "Precision-cut letters in acrylic, metal or composite — illuminated or not.",
          image: "/images/CUTOUT LETTERS.webp",
        },
        {
          title: "LED Neon Signs",
          description:
            "Flexible LED neon for indoor brand walls, restaurants and reception areas.",
          image: "/images/LED NEON INDOOR SIGNS.webp",
        },
        {
          title: "Hybrid Light Boxes",
          description:
            "Acrylic + LED combinations for high-impact illuminated brand walls.",
          image: "/images/OUTDOOR LIGHTBOXES 02.jpeg",
        },
      ]}
      closingTitle="Want to see samples first?"
      closingBody="We can share material swatches and sample LED modules before you commit."
    />
  );
}
