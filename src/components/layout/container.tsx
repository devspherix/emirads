import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-24",
        className,
      )}
      {...props}
    />
  );
}

