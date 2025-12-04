import type { Metadata } from "next";
import { Chivo_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const brandSans = Space_Grotesk({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  display: "swap",
});

const brandMono = Chivo_Mono({
  variable: "--font-brand-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
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
        className={`${brandSans.variable} ${brandMono.variable} antialiased bg-[radial-gradient(circle_at_top,_rgba(16,20,50,.8),_#03030a_55%)] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
