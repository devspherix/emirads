"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { navLinks, SITE } from "@/content/site";
import { categories, getFullCategoryColumns, type CategoryMeta } from "@/content/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoryBar } from "@/components/layout/category-bar";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={close}
          aria-label={SITE.name}
        >
          <Image
            src="/E_logo_banner.png"
            alt={`${SITE.name} logo`}
            width={1200}
            height={300}
            priority
            className="h-9 w-auto object-contain sm:h-10 lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  isActive
                    ? "text-[#D50367]"
                    : "text-gray-700 hover:text-[#D50367]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#FCE3EE]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/quote" variant="primary" size="md">
            Get a Free Quote <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-black transition-all hover:border-[#D50367] hover:text-[#D50367] lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Category bar — separate services menu (desktop) */}
      <CategoryBar />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-gray-100 bg-white px-6 pb-8 pt-4 sm:px-8 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                const isServices = item.href === "/services";

                if (isServices) {
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                          isActive || mobileServicesOpen
                            ? "bg-[#FCE3EE] text-[#D50367]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#D50367]",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4"
                          >
                            <ul className="flex flex-col gap-0.5 border-l border-gray-100 py-1 pl-3">
                              {categories.map((cat) => (
                                <MobileCategoryItem key={cat.slug} cat={cat} onNavigate={close} />
                              ))}
                              <li>
                                <Link
                                  href="/services"
                                  onClick={close}
                                  className="block rounded-lg px-3 py-2 text-sm font-bold text-[#D50367]"
                                >
                                  View All Services
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all",
                        isActive
                          ? "bg-[#FCE3EE] text-[#D50367]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#D50367]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/quote" variant="primary" fullWidth onClick={close}>
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={SITE.whatsapp} variant="whatsapp" external fullWidth onClick={close}>
                💬 WhatsApp Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─────────────────────────────────────────────────────────────
//  Mobile "Services" accordion — one nested collapsible per
//  category, expanding into that category's full subcategory /
//  service list (same data as the desktop CategoryBar dropdown).
// ─────────────────────────────────────────────────────────────
function MobileCategoryItem({
  cat,
  onNavigate,
}: {
  cat: CategoryMeta;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const groups = getFullCategoryColumns(cat.slug);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
          open ? "text-[#D50367]" : "text-gray-600 hover:bg-gray-50 hover:text-[#D50367]",
        )}
      >
        {cat.name}
        <ChevronDown
          className={cn("h-3.5 w-3.5 shrink-0 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-3"
          >
            <div className="flex flex-col gap-3 border-l border-gray-100 py-2 pl-3">
              {groups.map((group) => (
                <div key={group.heading ?? "flat"}>
                  {group.heading && (
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                      {group.heading}
                    </p>
                  )}
                  <ul className="flex flex-col gap-0.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="block rounded-md px-2 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-[#D50367]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href={`/services/${cat.slug}`}
                onClick={onNavigate}
                className="text-xs font-bold uppercase tracking-wider text-[#D50367]"
              >
                View Full Category
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
