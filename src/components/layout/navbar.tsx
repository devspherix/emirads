"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonBase, buttonVariants } from "../ui/button";

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
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-3xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          scrolled
            ? "bg-[#03030a]/90 opacity-100"
            : "bg-[#03030a]/40 opacity-100",
        )}
      />
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-wide transition-colors hover:text-white"
            onClick={close}
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/logo-emirads.svg"
                alt="Emirads"
                width={40}
                height={40}
                className="rounded-2xl border border-white/20 bg-white p-1 shadow-lg transition-shadow hover:shadow-[0_0_20px_rgba(255,229,0,0.3)]"
                priority
              />
            </motion.div>
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Emirads
            </span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {navLinks.map((item, index) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-2 py-1.5 transition-colors duration-200",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-magenta)] to-[var(--brand-yellow)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/auth/login"
              className={cn(
                buttonBase,
                "px-4 py-2 text-sm",
                buttonVariants.ghost,
              )}
            >
              Login
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link
              href="/contact"
              className={cn(
                buttonBase,
                "px-4 py-2 text-sm",
                buttonVariants.primary,
              )}
            >
              Get a quote
            </Link>
          </motion.div>
        </div>

        <motion.button
          className="relative rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all hover:border-white/30 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-[#03030a]/95 backdrop-blur-3xl px-6 pb-6 pt-4 sm:px-8 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <nav className="flex flex-col gap-4 text-base font-semibold text-white">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block py-2 transition-colors",
                      pathname === item.href ||
                        pathname.startsWith(`${item.href}/`)
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                    )}
                    onClick={close}
                  >
                    {item.label}
                    {(pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)) && (
                      <motion.div
                        layoutId="mobile-navbar-indicator"
                        className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-[var(--brand-cyan)] via-[var(--brand-magenta)] to-[var(--brand-yellow)]"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              {[
                { href: "/auth/login", variant: buttonVariants.secondary, label: "Login" },
                {
                  href: "/auth/signup",
                  variant: buttonVariants.primary,
                  label: "Create account",
                },
              ].map((btn, index) => (
                <motion.div
                  key={btn.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <Link
                    href={btn.href}
                    className={cn(
                      buttonBase,
                      btn.variant,
                      "w-full text-center",
                    )}
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

