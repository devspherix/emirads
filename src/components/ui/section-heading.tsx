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
        "space-y-4",
        align === "center" && "text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-[#FF3AF2]" />
        <p className="text-xs font-black uppercase tracking-[0.5em] text-[#FF3AF2]">
          {eyebrow}
        </p>
        <span className="h-px w-8 bg-[#FF3AF2]" />
      </div>
      <div
        className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        style={{ textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #FF3AF2" }}
      >
        {title}
      </div>
      {description ? (
        <p className="text-lg text-white/80 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

