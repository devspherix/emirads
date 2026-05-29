import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-[#D50367]" />
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#D50367]">
          {eyebrow}
        </p>
        <span className="h-px w-8 bg-[#D50367]" />
      </div>
      <div
        className={cn(
          "text-4xl font-black leading-tight sm:text-5xl lg:text-6xl",
          dark ? "text-white" : "text-black"
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </div>
      {description ? (
        <p className={cn("text-lg leading-relaxed", dark ? "text-white/70" : "text-gray-500")}>{description}</p>
      ) : null}
    </div>
  );
}

