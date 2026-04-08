import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type GlassPanelProps = ComponentProps<"div"> & {
  accent?: "magenta" | "cyan" | "yellow" | "orange" | "purple";
};

const accentStyles = {
  magenta: "border-[#FF3AF2] [box-shadow:8px_8px_0_#FFE600,16px_16px_0_#FF3AF2,0_0_40px_rgba(255,58,242,0.25)]",
  cyan:    "border-[#00F5D4] [box-shadow:8px_8px_0_#7B2FFF,16px_16px_0_#00F5D4,0_0_40px_rgba(0,245,212,0.25)]",
  yellow:  "border-[#FFE600] [box-shadow:8px_8px_0_#FF6B35,16px_16px_0_#FFE600,0_0_40px_rgba(255,230,0,0.25)]",
  orange:  "border-[#FF6B35] [box-shadow:8px_8px_0_#FF3AF2,16px_16px_0_#FF6B35,0_0_40px_rgba(255,107,53,0.25)]",
  purple:  "border-[#7B2FFF] [box-shadow:8px_8px_0_#00F5D4,16px_16px_0_#7B2FFF,0_0_40px_rgba(123,47,255,0.25)]",
};

export function GlassPanel({ className, accent = "magenta", ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border-4 bg-[#2D1B4E]/80 backdrop-blur-xl overflow-hidden",
        accentStyles[accent],
        className,
      )}
      {...props}
    />
  );
}

