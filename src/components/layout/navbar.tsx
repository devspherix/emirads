"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonBase, buttonVariants } from "../ui/button";

const accentColors = ["#FF3AF2", "#00F5D4", "#FFE600", "#FF6B35", "#7B2FFF"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b-4 border-[#FF3AF2]"
      style={{ boxShadow: "0 4px 0 #FFE600, 0 8px 0 #7B2FFF" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-300",
          scrolled
            ? "bg-[#0D0D1A]/97 backdrop-blur-3xl"
            : "bg-[#0D0D1A]/85 backdrop-blur-xl",
        )}
      />
      {/* Ticker strip */}
      <div className="relative overflow-hidden bg-[#FF3AF2] py-1">
        <div className="animate-ticker flex w-max gap-0">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-6 px-6 text-[10px] font-black uppercase tracking-widest text-[#0D0D1A]">
              {["⚡ SIGNAGE STUDIO", "🚗 VEHICLE WRAPS", "✨ NEON WORKS", "🏗️ FABRICATION LAB", "🎪 EVENT BUILDS", "📍 DUBAI UAE"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 transition-all"
            onClick={close}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#FF3AF2] blur-md opacity-60 animate-pulse-glow" />
              <Image
                src="/logo-emirads.svg"
                alt="Emirads"
                width={44}
                height={44}
                className="relative rounded-2xl border-4 border-[#FFE600] bg-white p-1 shadow-lg"
                style={{ boxShadow: "4px 4px 0 #FF3AF2" }}
                priority
              />
            </motion.div>
            <div>
              <span
                className="block text-xl font-black uppercase tracking-widest text-white"
                style={{ textShadow: "2px 2px 0px #FF3AF2, 4px 4px 0px #7B2FFF" }}
              >
                Emirads
              </span>
              <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-[#00F5D4]">
                Signage · Branding
              </span>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const color = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-black uppercase tracking-widest transition-all duration-200 rounded-full",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-full border-2"
                      style={{ borderColor: color, backgroundColor: `${color}20` }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-1 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/auth/login"
              className={cn(buttonBase, "px-4 py-2 text-xs", buttonVariants.ghost)}
            >
              Login
            </Link>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link
              href="/quote"
              className={cn(buttonBase, "px-5 py-2.5 text-xs", buttonVariants.primary)}
            >
              <Zap className="h-3.5 w-3.5" />
              Get Instant Price
            </Link>
          </motion.div>
        </div>

        <motion.button
          className="relative rounded-full border-4 border-[#FF3AF2] bg-[#FF3AF2]/10 p-2 text-white transition-all hover:bg-[#FF3AF2]/20 lg:hidden"
          style={{ boxShadow: "3px 3px 0 #FFE600" }}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t-4 border-[#FF3AF2] bg-[#0D0D1A]/98 backdrop-blur-3xl px-6 pb-8 pt-4 sm:px-8 lg:hidden"
            style={{ boxShadow: "inset 0 2px 0 #FFE600" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const color = accentColors[index % accentColors.length];
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-base font-black uppercase tracking-widest transition-all",
                        isActive
                          ? "text-white"
                          : "border-white/10 text-white/70 hover:border-white/30 hover:text-white",
                      )}
                      style={isActive ? { borderColor: color, backgroundColor: `${color}15`, boxShadow: `3px 3px 0 ${color}` } : {}}
                      onClick={close}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { href: "/quote", variant: buttonVariants.primary, label: "⚡ Get Instant Price" },
              ].map((btn, index) => (
                <motion.div
                  key={btn.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={btn.href}
                    className={cn(buttonBase, btn.variant, "w-full text-center")}
                    onClick={close}
                  >
                    {btn.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
