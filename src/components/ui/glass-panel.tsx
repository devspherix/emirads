import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type GlassPanelProps = ComponentProps<"div"> & {
  accent?: "pink" | "blue" | "yellow" | "dark" | "neutral" |
    /* legacy */ "magenta" | "cyan" | "orange" | "purple";
};

const accentStyles: Record<string, string> = {
  pink:    "border-t-4 border-t-[#db016e] shadow-[0_4px_24px_rgba(219,1,110,0.08)]",
  blue:    "border-t-4 border-t-[#038CE3] shadow-[0_4px_24px_rgba(3,140,227,0.08)]",
  yellow:  "border-t-4 border-t-[#ffe724] shadow-[0_4px_24px_rgba(255,231,36,0.1)]",
  dark:    "bg-black text-white border-black",
  neutral: "border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)]",
  /* legacy aliases */
  magenta: "border-t-4 border-t-[#db016e] shadow-[0_4px_24px_rgba(219,1,110,0.08)]",
  cyan:    "border-t-4 border-t-[#038CE3] shadow-[0_4px_24px_rgba(3,140,227,0.08)]",
  orange:  "border-t-4 border-t-[#ffe724] shadow-[0_4px_24px_rgba(255,231,36,0.1)]",
  purple:  "border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)]",
};

export function GlassPanel({ className, accent = "neutral", ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl bg-white overflow-hidden",
        accentStyles[accent],
        className,
      )}
      {...props}
    />
  );
}

