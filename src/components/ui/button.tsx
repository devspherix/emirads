import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-widest transition-all duration-200 will-change-transform active:scale-95";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4] text-white border-4 border-[#FFE600] hover:scale-105 hover:brightness-110 [box-shadow:6px_6px_0_#FFE600,12px_12px_0_#FF3AF2,0_0_30px_rgba(255,58,242,0.5)] hover:[box-shadow:8px_8px_0_#FFE600,16px_16px_0_#FF3AF2,0_0_50px_rgba(255,58,242,0.8)]",
  secondary:
    "bg-transparent text-white border-4 border-[#00F5D4] hover:scale-105 hover:bg-[#00F5D4]/10 [box-shadow:4px_4px_0_#7B2FFF] hover:[box-shadow:6px_6px_0_#7B2FFF,0_0_20px_rgba(0,245,212,0.4)]",
  ghost:
    "text-white/90 border-4 border-dashed border-white/30 hover:border-[#FF3AF2] hover:text-[#FF3AF2] hover:bg-[#FF3AF2]/5",
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

