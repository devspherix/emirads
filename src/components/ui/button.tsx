import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition will-change-transform";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_20px_60px_-30px_rgba(255,255,255,0.9)]",
  secondary:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5 border border-transparent",
};

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonBase,
          fullWidth && "w-full",
          buttonVariants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

