import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagTone = "yellow" | "pink" | "blue" | "dark" | "neutral" |
  /* legacy aliases */ "magenta" | "cyan" | "orange" | "purple";

const toneMap: Record<TagTone, string> = {
  yellow:  "bg-[#ffe724]/25 border-[#ffe724] text-[#7a6400]",
  pink:    "bg-[#db016e]/10 border-[#db016e] text-[#db016e]",
  blue:    "bg-[#038CE3]/10 border-[#038CE3] text-[#038CE3]",
  dark:    "bg-black text-white border-black",
  neutral: "bg-gray-100 border-gray-200 text-gray-600",
  /* legacy aliases mapped to new tones */
  magenta: "bg-[#db016e]/10 border-[#db016e] text-[#db016e]",
  cyan:    "bg-[#038CE3]/10 border-[#038CE3] text-[#038CE3]",
  orange:  "bg-[#ffe724]/25 border-[#ffe724] text-[#7a6400]",
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

