import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type GlassPanelProps = ComponentProps<"div">;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-3xl",
        className,
      )}
      {...props}
    />
  );
}

