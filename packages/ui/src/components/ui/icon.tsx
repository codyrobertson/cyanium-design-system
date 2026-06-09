import * as React from "react";
import { cn } from "../../lib/utils";

export type IconSize = "xs" | "sm" | "md" | "lg";

const sizeClass: Record<IconSize, string> = {
  xs: "size-3.5 text-sm",
  sm: "size-4 text-base",
  md: "size-5 text-xl",
  lg: "size-6 text-2xl",
};

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconSize;
  muted?: boolean;
}

export function Icon({ className, size = "md", muted, children, ...props }: IconProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizeClass[size],
        muted ? "text-icon-soft" : "text-icon-sub",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
