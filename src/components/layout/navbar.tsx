"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Main nav row */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-tr from-[#038CE3] via-[#db016e] to-[#ffe724]">
            <span className="relative z-10 text-xl font-black text-white">E</span>
            <div className="absolute -right-1 top-1 h-2 w-2 bg-white opacity-30" />
          </div>
          <span
            className="text-xl font-black uppercase tracking-tighter text-black"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Emirads
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item, index) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-[#db016e] font-bold"
                    : "text-gray-700 hover:text-[#db016e]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#db016e]/8"
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
          <Link
            href="/quote"
            className="group relative overflow-hidden rounded-full bg-black px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5" />
              Request a Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#db016e] to-[#C00062] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-black transition-all hover:border-gray-400 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait">
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
              {navLinks.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all",
                        isActive
                          ? "bg-[#db016e]/8 font-bold text-[#db016e]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black",
                      )}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/quote"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
                onClick={close}
              >
                <Zap className="h-4 w-4" />
                Request a Quote
              </Link>
              <a
                href="https://wa.me/971585806956"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/10 px-6 py-3 text-sm font-bold text-[#25D366]"
                onClick={close}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

