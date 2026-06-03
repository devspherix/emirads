"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Mail,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/content/blog";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const ACCENT = "#D50367";
const ACCENT_SOFT = "rgba(213,3,103,0.08)";
const ACCENT_SHADOW = "0 4px 16px rgba(213,3,103,0.35)";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured)!;
  const regularPosts = blogPosts.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return regularPosts;
    return regularPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, regularPosts]);

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-30" />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(213,3,103,0.28),transparent_70%)]" />
          <div className="animate-float absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,187,254,0.22),transparent_70%)]" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,215,5,0.07),transparent_70%)]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/60 backdrop-blur-sm"
            >
              <Sparkles className="h-3 w-3 text-[#D50367]" />
              EmirAds Blog
            </motion.span>

            <h1
              className="mb-5 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Insights from the{" "}
              <span className="gradient-text-main">World of Signage</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base leading-relaxed text-white/55 sm:text-lg"
            >
              Expert guides, design tips, industry trends, and real-world case
              studies from Dubai&apos;s leading signage specialists.
            </motion.p>

            {/* Animated scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mx-auto mt-12 flex w-6 flex-col items-center gap-1"
            >
              <div className="h-10 w-px bg-gradient-to-b from-transparent to-white/20" />
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-[#D50367]"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ─── FEATURED POST ────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <motion.div {...fadeUp} className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D50367]" />
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#D50367]">
              Featured Article
            </p>
            <span className="h-px w-8 bg-[#D50367]" />
          </motion.div>

          <Link href={`/blog/${featured.slug}`} className="group block focus:outline-none">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid overflow-hidden rounded-3xl border border-gray-100 card-shadow card-shadow-hover lg:grid-cols-[1.3fr_1fr]"
              style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 lg:aspect-auto lg:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-black/10 lg:to-transparent" />

                {/* Category badge */}
                <span
                  className="absolute left-5 top-5 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
                  style={{ backgroundColor: ACCENT }}
                >
                  {featured.category}
                </span>

                {/* Bottom gradient text visible on mobile only */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                  <h2
                    className="text-2xl font-black leading-tight text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {featured.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center bg-white p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime} min read
                  </span>
                </div>

                <h2
                  className="mb-4 hidden text-3xl font-black leading-tight text-black lg:block lg:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h2>

                <p className="mb-6 text-base leading-relaxed text-gray-500">
                  {featured.excerpt}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {featured.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
                      style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 group-hover:gap-3.5"
                  style={{ color: ACCENT }}
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          </Link>
        </Container>
      </section>

      {/* ─── BLOG GRID ────────────────────────────────────────── */}
      <section className="bg-[#f9f9f9] py-16 lg:py-24">
        <Container>
          {/* Section header */}
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.5em] text-[#D50367]">
              All Articles
            </p>
            <h2
              className="text-3xl font-black text-black sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse Our Knowledge Base
            </h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 flex flex-wrap justify-center gap-2.5"
          >
            {blogCategories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: active ? ACCENT : "white",
                    color: active ? "white" : "#6b7280",
                    border: `2px solid ${active ? ACCENT : "#e5e7eb"}`,
                    boxShadow: active ? ACCENT_SHADOW : "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block h-full focus:outline-none"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white card-shadow card-shadow-hover"
                    style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span
                        className="absolute left-3 top-3 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {post.category}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-4 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>

                      <h3
                        className="mb-2.5 text-lg font-black leading-snug text-black sm:text-xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {post.title}
                      </h3>

                      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                            style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:gap-2.5"
                        style={{ color: ACCENT }}
                      >
                        Read Article
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <p className="text-lg font-medium text-gray-400">
                No articles in this category yet.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-3 text-sm font-bold underline underline-offset-2"
                style={{ color: ACCENT }}
              >
                View all articles
              </button>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ─── NEWSLETTER CTA ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-25" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(213,3,103,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(0,187,254,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,215,5,0.06),transparent_70%)]" />

        <Container className="relative">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/55 backdrop-blur-sm">
              <Mail className="h-3 w-3 text-[#D50367]" />
              Stay Updated
            </span>

            <h2
              className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Signage Insights{" "}
              <span className="gradient-text-brand">Delivered to You</span>
            </h2>

            <p className="mb-8 text-base text-white/50">
              Join hundreds of business owners and brand managers who receive
              our monthly guide on signage, brand visibility, and UAE
              regulations.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm text-white placeholder-white/30 backdrop-blur-sm transition-colors focus:border-[#D50367] focus:outline-none sm:w-72"
              />
              <Button variant="primary" size="md">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/25">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
