"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { accentMap, type ServiceAccent } from "@/content/site";

// ────────────────────────────────────────────────────────────
//  Generic Card shell — equal-size, soft persistent shadow
// ────────────────────────────────────────────────────────────
type CardShellProps = {
  className?: string;
  children: React.ReactNode;
  accent?: ServiceAccent;
  delay?: number;
};

export function CardShell({
  className,
  children,
  accent = "orange",
  delay = 0,
}: CardShellProps) {
  const a = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transform-gpu card-shadow card-shadow-hover",
        className,
      )}
      style={{ borderTopWidth: 4, borderTopColor: a.hex }}
    >
      {children}
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────
//  ServiceCard — image + icon + title + 1-line + Learn more
// ────────────────────────────────────────────────────────────
export type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  accent?: ServiceAccent;
  delay?: number;
};

export function ServiceCard({
  href,
  title,
  description,
  image,
  icon,
  accent = "orange",
  delay = 0,
}: ServiceCardProps) {
  const a = accentMap[accent];
  return (
    <Link href={href} className="block h-full focus:outline-none">
      <CardShell accent={accent} delay={delay} className="h-full">
        {image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[14px] bg-gray-50">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            {icon && (
              <div
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-md"
                style={{ backgroundColor: "rgba(255,255,255,0.9)", color: a.hex }}
              >
                {icon}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {!image && icon && (
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: a.soft, color: a.hex }}
            >
              {icon}
            </div>
          )}
          <h3
            className="mb-2 text-lg font-black text-black sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
            {description}
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-2.5"
            style={{ color: a.hex }}
          >
            Learn More <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </CardShell>
    </Link>
  );
}

// ────────────────────────────────────────────────────────────
//  PortfolioCard — equal-size image + title + tag
// ────────────────────────────────────────────────────────────
export type PortfolioCardProps = {
  title: string;
  category?: string;
  image: string;
  accent?: ServiceAccent;
  onClick?: () => void;
  delay?: number;
  description?: string;
};

export function PortfolioCard({
  title,
  category,
  image,
  accent = "orange",
  onClick,
  delay = 0,
  description,
}: PortfolioCardProps) {
  const a = accentMap[accent];

  const Content = (
    <CardShell
      accent={accent}
      delay={delay}
      className={`h-full ${onClick ? "cursor-pointer text-left" : ""}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[14px] bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
            style={{ backgroundColor: a.hex }}
          >
            {category}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4
          className="text-base font-black text-black"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h4>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{description}</p>
        )}
      </div>
    </CardShell>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="block h-full w-full focus:outline-none">
        {Content}
      </button>
    );
  }
  return Content;
}

// ────────────────────────────────────────────────────────────
//  FeatureCard — icon + title + body (Why-choose-us, etc.)
// ────────────────────────────────────────────────────────────
type FeatureCardProps = MotionProps & {
  icon?: LucideIcon;
  title: string;
  body: string;
  accent?: ServiceAccent;
  delay?: number;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  body,
  accent = "orange",
  delay = 0,
  className,
  ...rest
}: FeatureCardProps) {
  const a = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-6 card-shadow card-shadow-hover",
        className,
      )}
      style={{ borderTopWidth: 4, borderTopColor: a.hex }}
      {...rest}
    >
      {Icon && (
        <div
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: a.soft, color: a.hex }}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3
        className="mb-2 text-base font-black text-black"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500">{body}</p>
    </motion.div>
  );
}
