import { forwardRef } from "react";
import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all duration-200 will-change-transform active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  // 🟠 Primary = bright brand orange ("Get a Free Quote")
  primary:
    "bg-[#FF6A1A] text-white shadow-[0_8px_20px_rgba(255,106,26,0.35)] hover:shadow-[0_12px_28px_rgba(255,106,26,0.45)] hover:-translate-y-0.5 hover:bg-[#E25410]",
  secondary:
    "bg-white text-black border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white",
  outline:
    "bg-transparent text-[#FF6A1A] border-2 border-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white",
  ghost: "bg-transparent text-gray-700 hover:text-[#FF6A1A] hover:bg-[#FFE9DC]",
  dark: "bg-black text-white hover:bg-[#FF6A1A] hover:-translate-y-0.5",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1FAE54] hover:-translate-y-0.5",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type AsButton = CommonProps & Omit<ComponentProps<"button">, "ref"> & { href?: undefined };
type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

export type ButtonProps = AsButton | AsLink;

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(props, ref) {
  const { variant = "primary", size = "md", fullWidth, className } = props as CommonProps;
  const cls = cn(base, sizes[size], variants[variant], fullWidth && "w-full", className);

  if ("href" in props && props.href) {
    const { href, external, children, onClick, ...rest } = props as AsLink;
    const isExternal = external || /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cls}
          onClick={onClick}
          aria-label={rest["aria-label"]}
        >
          {children}
        </a>
      );
    }
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cls} onClick={onClick} aria-label={rest["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as AsButton;
  return <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...rest} />;
});

