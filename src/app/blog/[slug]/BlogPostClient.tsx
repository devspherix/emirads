"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Share2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { BlogPost, ContentBlock } from "@/content/blog";

const ACCENT = "#D50367";
const ACCENT_SOFT = "rgba(213,3,103,0.08)";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderContent(blocks: ContentBlock[]) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-6 text-base leading-[1.85] text-gray-600 sm:text-[17px]"
          >
            {block.text}
          </motion.p>
        );

      case "heading":
        if (block.level === 2) {
          return (
            <motion.h2
              key={index}
              id={`heading-${index}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-4 mt-12 flex items-center gap-4 text-2xl font-black text-black sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span
                className="block h-8 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              {block.text}
            </motion.h2>
          );
        }
        return (
          <motion.h3
            key={index}
            id={`heading-${index}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mb-3 mt-8 text-xl font-black text-black sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {block.text}
          </motion.h3>
        );

      case "list":
        return (
          <motion.ul
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-7 space-y-3"
          >
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-gray-600 sm:text-[17px]">
                <span
                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                {item}
              </li>
            ))}
          </motion.ul>
        );

      case "quote":
        return (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="my-10 rounded-2xl p-8"
            style={{
              borderLeft: `4px solid ${ACCENT}`,
              backgroundColor: ACCENT_SOFT,
            }}
          >
            <span
              className="mb-3 block text-4xl font-black leading-none"
              style={{ color: ACCENT }}
            >
              &ldquo;
            </span>
            <p
              className="text-xl font-medium italic leading-relaxed text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {block.text}
            </p>
            {block.author && (
              <cite className="mt-3 block text-sm not-italic text-gray-400">
                — {block.author}
              </cite>
            )}
          </motion.blockquote>
        );

      case "image":
        return (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="my-10"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-3 text-center text-sm italic text-gray-400">
                {block.caption}
              </figcaption>
            )}
          </motion.figure>
        );

      default:
        return null;
    }
  });
}

type Props = {
  post: BlogPost;
  related: BlogPost[];
};

export function BlogPostClient({ post, related }: Props) {
  const h2Headings = post.content
    .map((block, index) =>
      block.type === "heading" && block.level === 2
        ? { id: `heading-${index}`, text: block.text }
        : null,
    )
    .filter(Boolean) as { id: string; text: string }[];

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO IMAGE ────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-black lg:h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(213,3,103,0.3),transparent_70%)]" />
          <div className="animate-float absolute left-1/3 top-1/2 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(0,187,254,0.2),transparent_70%)]" />
        </div>

        {/* Back button */}
        <div className="absolute left-0 right-0 top-0">
          <Container className="py-6">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to Blog
            </Link>
          </Container>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0">
          <Container className="pb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: ACCENT }}
              >
                {post.category}
              </span>
              <h1
                className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h1>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* ─── META BAR ──────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 py-4"
          >
            {/* Left: meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" style={{ color: ACCENT }} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" style={{ color: ACCENT }} />
                {post.readTime} min read
              </span>
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>

            {/* Right: share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500 transition-all hover:border-[#D50367] hover:text-[#D50367]"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </motion.div>
        </Container>
      </div>

      {/* ─── ARTICLE BODY + SIDEBAR ───────────────────────────── */}
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16 xl:grid-cols-[1fr_320px]">
            {/* Article Content */}
            <article className="min-w-0">
              {/* Excerpt / Lede */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-10 text-xl font-medium leading-relaxed text-black sm:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.excerpt}
              </motion.p>

              <div className="mb-8 h-px w-16 bg-[#D50367]" />

              {/* Body content */}
              <div>{renderContent(post.content)}</div>

              {/* Tags footer */}
              <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-8">
                <Tag className="h-4 w-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA strip */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 overflow-hidden rounded-3xl bg-black p-8 lg:p-10"
                style={{ borderTop: `4px solid ${ACCENT}` }}
              >
                <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-20" />
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-widest"
                  style={{ color: ACCENT }}
                >
                  Ready to get started?
                </p>
                <h3
                  className="mb-4 text-2xl font-black leading-tight text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Turn These Insights into Action
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  Get a free consultation and quote from Emir Ads — Dubai&apos;s
                  trusted signage specialists since 2012.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" href="/quote" size="md">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="whatsapp" href="https://wa.me/971585806956" external size="md">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {h2Headings.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-2xl border border-gray-100 bg-[#f9f9f9] p-6"
                    style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
                  >
                    <p
                      className="mb-4 text-xs font-bold uppercase tracking-widest"
                      style={{ color: ACCENT }}
                    >
                      In This Article
                    </p>
                    <nav className="space-y-1">
                      {h2Headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className="group flex items-start gap-2 rounded-lg px-2 py-2 text-sm text-gray-500 transition-all hover:bg-white hover:text-black"
                        >
                          <ChevronRight
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors"
                            style={{ color: ACCENT }}
                          />
                          <span className="leading-snug">{h.text}</span>
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                )}

                {/* Get a Quote card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="overflow-hidden rounded-2xl bg-black p-6"
                  style={{ borderTop: `4px solid ${ACCENT}` }}
                >
                  <p
                    className="mb-1 text-xs font-bold uppercase tracking-widest"
                    style={{ color: ACCENT }}
                  >
                    Free Consultation
                  </p>
                  <h4
                    className="mb-3 text-xl font-black text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Need a Sign? Let&apos;s Talk.
                  </h4>
                  <p className="mb-5 text-sm leading-relaxed text-white/50">
                    Our design team will turn your brief into a stunning
                    signage proposal — free of charge.
                  </p>
                  <Button variant="primary" href="/quote" size="sm" fullWidth>
                    Get a Free Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </motion.div>

                {/* Share buttons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-2xl border border-gray-100 bg-white p-5 card-shadow"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                    Share This Article
                  </p>
                  <button
                    onClick={handleShare}
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-600 transition-all hover:border-[#D50367] hover:text-[#D50367]"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    Copy Link
                  </button>
                </motion.div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ─── RELATED POSTS ────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f9f9f9] py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#D50367]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#D50367]">
                  Keep Reading
                </p>
              </div>
              <h2
                className="text-3xl font-black text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Related Articles
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relPost, i) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.slug}`}
                  className="group block focus:outline-none"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white card-shadow card-shadow-hover"
                    style={{ borderTopWidth: 4, borderTopColor: ACCENT }}
                  >
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span
                        className="absolute left-3 top-3 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {relPost.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="mb-2 flex items-center gap-3 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relPost.readTime} min
                        </span>
                      </div>
                      <h3
                        className="mb-3 text-lg font-black leading-snug text-black"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {relPost.title}
                      </h3>
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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Button variant="outline" href="/blog" size="md">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Container>
        </section>
      )}
    </main>
  );
}
