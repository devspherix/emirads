import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagTone = "yellow" | "magenta" | "cyan" | "orange" | "purple" | "neutral";

const toneMap: Record<TagTone, string> = {
  yellow:  "bg-[#FFE600]/20 border-[#FFE600] text-[#FFE600] [box-shadow:2px_2px_0_#FF6B35]",
  magenta: "bg-[#FF3AF2]/20 border-[#FF3AF2] text-[#FF3AF2] [box-shadow:2px_2px_0_#7B2FFF]",
  cyan:    "bg-[#00F5D4]/20 border-[#00F5D4] text-[#00F5D4] [box-shadow:2px_2px_0_#7B2FFF]",
  orange:  "bg-[#FF6B35]/20 border-[#FF6B35] text-[#FF6B35] [box-shadow:2px_2px_0_#FF3AF2]",
  purple:  "bg-[#7B2FFF]/30 border-[#7B2FFF] text-white [box-shadow:2px_2px_0_#00F5D4]",
  neutral: "bg-white/10 border-white/30 text-white/90",
};

export type TagProps = ComponentProps<"span"> & {
  tone?: TagTone;
};

export function Tag({ className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black uppercase tracking-widest",
        toneMap[tone],
        className,
      )}
      {...props}
    />
  );
}

