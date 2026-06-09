"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";

const badgeVariants = cva("inline-flex items-center gap-1 whitespace-nowrap rounded-full font-medium font-sans", {
  variants: {
    color: { gray: "", blue: "", orange: "", red: "", green: "", yellow: "", purple: "", sky: "", pink: "", teal: "" },
    variant: { filled: "", light: "", lighter: "", stroke: "bg-transparent" },
    size: { small: "h-5 px-2 text-xs leading-4", medium: "h-6 px-2.5 text-xs leading-4" },
  },
  compoundVariants: [
    { color: "gray", variant: "filled", className: "bg-bg-strong text-text-white" },
    { color: "gray", variant: "light", className: "bg-bg-soft text-text-sub" },
    { color: "gray", variant: "lighter", className: "bg-bg-weak text-text-sub" },
    { color: "gray", variant: "stroke", className: cn("text-text-sub", insetBorder) },
    ...(["blue", "orange", "red", "green", "yellow", "purple", "sky", "pink", "teal"] as const).flatMap((color) => [
      { color, variant: "filled" as const, className: `bg-[var(--${color}-500)] text-white` },
      { color, variant: "light" as const, className: `bg-[var(--${color}-200)] text-[var(--${color}-900)]` },
      { color, variant: "lighter" as const, className: `bg-[var(--${color}-50)] text-[var(--${color}-600)]` },
      { color, variant: "stroke" as const, className: `text-[var(--${color}-600)] shadow-[inset_0_0_0_1px_var(--${color}-200)]` },
    ]),
  ],
  defaultVariants: { color: "gray", variant: "lighter", size: "medium" },
});

export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">, VariantProps<typeof badgeVariants> {
  dot?: boolean;
  icon?: React.ReactNode;
}

export function Badge({ className, color, variant, size, dot, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color, variant, size, className }))} {...props}>
      {dot ? <span className="size-1.5 shrink-0 rounded-full bg-current" /> : null}
      {icon ? <span className="inline-flex size-3.5 shrink-0 items-center justify-center">{icon}</span> : null}
      {children}
    </span>
  );
}
export { badgeVariants };
