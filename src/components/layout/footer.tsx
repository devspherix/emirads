import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SITE, navLinks, servicesCatalog } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-black text-white">
      {/* Orange CTA strip on top */}
      <div className="border-b border-white/10 bg-[#FF6A1A]">
        <Container className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p
              className="text-2xl font-black text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to make your brand visible?
            </p>
            <p className="mt-1 text-sm text-white/85">
              Get a free, no-obligation quote in under 60 seconds.
            </p>
          </div>
          <Button
            href="/quote"
            variant="dark"
            size="lg"
            className="!bg-black hover:!bg-white hover:!text-[#FF6A1A]"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-tr from-[#FF6A1A] via-[#db016e] to-[#ffe724]">
                <span className="text-xl font-black text-white">E</span>
              </div>
              <span
                className="text-xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {SITE.name}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              We Print. We Brand. We Make You Visible. Premium printing and
              branding solutions for businesses across the UAE.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#FF6A1A] hover:text-[#FF6A1A]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 text-xs font-bold uppercase tracking-wider text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF6A1A]">
              Explore
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF6A1A]">
              Services
            </p>
            <ul className="space-y-2.5">
              {servicesCatalog.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#FF6A1A]">
              Get in Touch
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="group flex items-start gap-3 text-sm text-white/80 hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A1A]" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-3 text-sm text-white/80 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A1A]" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/80 hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A1A]" />
                  <span>{SITE.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
