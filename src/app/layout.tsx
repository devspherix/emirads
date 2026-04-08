import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Emirads | Premium Signage & Branding Solutions",
  description:
    "Dubai's leading signage company. Front-lit & back-lit signage, vehicle wraps, LED displays, event builds and bespoke fabrication across the UAE.",
  keywords: [
    "signage Dubai",
    "vehicle branding UAE",
    "LED screens Dubai",
    "neon signs",
    "Emirads",
    "outdoor signage",
    "shop signage Dubai",
    "event fabrication UAE",
  ],
  openGraph: {
    title: "Emirads — Premium Signage & Branding Solutions",
    description:
      "From neon to full-vehicle wraps, Emirads delivers illuminated signage, spatial branding, and fabrication with premium craftsmanship.",
    siteName: "Emirads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emirads — Premium Signage & Branding Solutions",
    description:
      "Signages, vehicle wraps, event builds, joinery, interior and neon works crafted in the UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,400&f[]=satoshi@700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
