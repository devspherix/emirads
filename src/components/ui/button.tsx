import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 will-change-transform active:scale-95 cursor-pointer";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "relative bg-black text-white overflow-hidden hover:scale-105 [&>span]:relative [&>span]:z-10",
  secondary:
    "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
  ghost:
    "text-gray-700 hover:text-[#db016e] hover:bg-[#db016e]/5",
  outline:
    "bg-transparent text-[#db016e] border-2 border-[#db016e] hover:bg-[#db016e] hover:text-white",
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

