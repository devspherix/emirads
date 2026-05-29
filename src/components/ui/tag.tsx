import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagTone = "yellow" | "pink" | "blue" | "dark" | "neutral" |
  /* legacy aliases */ "magenta" | "cyan" | "orange" | "purple";

const toneMap: Record<TagTone, string> = {
  yellow:  "bg-[#FFD705]/25 border-[#FFD705] text-[#7a6400]",
  pink:    "bg-[#D50367]/10 border-[#D50367] text-[#D50367]",
  blue:    "bg-[#00BBFE]/10 border-[#00BBFE] text-[#00BBFE]",
  dark:    "bg-black text-white border-black",
  neutral: "bg-gray-100 border-gray-200 text-gray-600",
  /* legacy aliases mapped to new tones */
  magenta: "bg-[#D50367]/10 border-[#D50367] text-[#D50367]",
  cyan:    "bg-[#00BBFE]/10 border-[#00BBFE] text-[#00BBFE]",
  orange:  "bg-[#FFD705]/25 border-[#FFD705] text-[#7a6400]",
  purple:  "bg-gray-100 border-gray-200 text-gray-600",
};

export type TagProps = ComponentProps<"span"> & {
  tone?: TagTone;
};

export function Tag({ className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider",
        toneMap[tone],
        className,
      )}
      {...props}
    />
  );
}

