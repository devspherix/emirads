import type { Metadata } from "next";
import { Outfit, DM_Sans, Bangers } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const accentFont = Bangers({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emirads | Signage & Experiential Branding",
  description:
    "Emirads creates high-impact signages, vehicle wraps, event environments, and bespoke fabrication across the UAE.",
  keywords: [
    "signage",
    "vehicle branding",
    "event fabrication",
    "neon signs",
    "Emirads",
    "Dubai sign company",
    "joinery",
    "interior fitout",
  ],
  openGraph: {
    title: "Emirads — Bold Signage & Branded Experiences",
    description:
      "From neon to full-vehicle wraps, Emirads delivers illuminated signage, spatial branding, and fabrication with premium craftsmanship.",
    siteName: "Emirads",
    images: [
      {
        url: "/logo-emirads.svg",
        width: 512,
        height: 512,
        alt: "Emirads emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emirads — Bold Signage & Branded Experiences",
    description:
      "Signages, vehicle wraps, event builds, joinery, interior and neon works crafted in the UAE.",
    creator: "@emirads",
    images: ["/logo-emirads.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
