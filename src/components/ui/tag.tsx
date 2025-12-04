import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagTone = "yellow" | "magenta" | "cyan" | "neutral";

const toneMap: Record<TagTone, string> = {
  yellow: "text-[var(--brand-yellow)]",
  magenta: "text-[var(--brand-magenta)]",
  cyan: "text-[var(--brand-cyan)]",
  neutral: "text-white/80",
};

export type TagProps = ComponentProps<"span"> & {
  tone?: TagTone;
};

export function Tag({ className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]",
        toneMap[tone],
        className,
      )}
      {...props}
    />
  );
}

