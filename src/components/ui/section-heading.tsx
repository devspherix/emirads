import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
        {eyebrow}
      </p>
      <div className="text-3xl font-semibold text-white sm:text-4xl">{title}</div>
      {description ? (
        <p className="text-base text-white/70">{description}</p>
      ) : null}
    </div>
  );
}

