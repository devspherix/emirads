import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Emirads | Premium Printing & Branding Solutions in the UAE",
  description:
    "We Print. We Brand. We Make You Visible. Vehicle wraps, signage, LED screens, banners and indoor/outdoor branding across Dubai and the UAE.",
  keywords: [
    "signage Dubai",
    "vehicle branding UAE",
    "LED screens Dubai",
    "banner printing",
    "Emirads",
    "outdoor signage",
    "indoor signage Dubai",
  ],
  openGraph: {
    title: "Emirads — Premium Printing & Branding Solutions",
    description:
      "From vehicle wraps to LED screens and signage — Emirads makes your brand visible across the UAE.",
    siteName: "Emirads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emirads — Premium Printing & Branding Solutions",
    description:
      "Vehicle wraps, signage, LED screens, banners and full branding across the UAE.",
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
        <Footer />
      </body>
    </html>
  );
}
