"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import {
  insetBorderError,
  insetBorderErrorLight,
  insetBorderPrimary,
  insetBorderTransparent,
  insetHighlightPrimary,
  insetPrimaryFocusVisible,
  insetPrimaryHover,
  insetErrorHover,
  disabledInsetBorder,
} from "../../lib/surface";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5 font-medium whitespace-nowrap",
    "font-sans cursor-pointer border-none outline-none select-none",
    "transition-[background,color,box-shadow] duration-normal ease-default",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-100",
    "focus-visible:outline-none",
  ].join(" "),
  {
    variants: {
      variant: { filled: "", stroke: "", lighter: "", ghost: "bg-transparent" },
      intent: { primary: "", neutral: "", error: "" },
      size: {
        xsmall: "h-8 px-2.5 text-sm rounded-md [&_.cn-btn-icon]:size-5",
        small: "h-9 px-3 text-sm rounded-md [&_.cn-btn-icon]:size-5",
        medium: "h-10 px-3.5 text-sm rounded-lg [&_.cn-btn-icon]:size-5",
        large: "h-12 px-[18px] text-base rounded-lg [&_.cn-btn-icon]:size-5",
      },
      iconOnly: { true: "p-0", false: "" },
    },
    compoundVariants: [
      { intent: "primary", variant: "filled", className: cn("bg-primary text-primary-foreground", insetHighlightPrimary, "hover:bg-primary-dark focus-visible:shadow-focus-primary disabled:bg-bg-weak disabled:text-text-disabled disabled:shadow-none") },
      { intent: "primary", variant: "stroke", className: cn("bg-bg-white text-primary", insetBorderPrimary, "hover:bg-primary-lighter", insetPrimaryFocusVisible) },
      { intent: "primary", variant: "lighter", className: cn("bg-primary-lighter text-primary hover:bg-bg-white", insetPrimaryHover) },
      { intent: "primary", variant: "ghost", className: "text-primary hover:bg-primary-lighter" },
      { intent: "neutral", variant: "filled", className: "bg-bg-strong text-text-white hover:bg-bg-surface focus-visible:shadow-focus-neutral disabled:bg-bg-weak disabled:text-text-disabled" },
      { intent: "neutral", variant: "stroke", className: cn("bg-bg-white text-text-sub shadow-button hover:bg-bg-weak hover:text-text-strong focus-visible:shadow-[var(--shadow-button),var(--shadow-focus-neutral)] disabled:text-text-disabled", disabledInsetBorder) },
      { intent: "neutral", variant: "lighter", className: cn("bg-bg-weak text-text-sub", insetBorderTransparent, "hover:bg-bg-white hover:text-text-strong hover:shadow-button") },
      { intent: "neutral", variant: "ghost", className: "text-text-sub hover:bg-bg-weak hover:text-text-strong" },
      { intent: "error", variant: "filled", className: "bg-destructive text-primary-foreground hover:bg-[var(--red-700)] focus-visible:shadow-focus-error" },
      { intent: "error", variant: "stroke", className: cn("bg-bg-white text-destructive", insetBorderErrorLight, "hover:bg-error-lighter") },
      { intent: "error", variant: "lighter", className: cn("bg-error-lighter text-destructive hover:bg-bg-white", insetErrorHover) },
      { intent: "error", variant: "ghost", className: "text-destructive hover:bg-error-lighter" },
      { iconOnly: true, size: "xsmall", className: "w-8" },
      { iconOnly: true, size: "small", className: "w-9" },
      { iconOnly: true, size: "medium", className: "w-10" },
      { iconOnly: true, size: "large", className: "w-12" },
    ],
    defaultVariants: { variant: "filled", intent: "primary", size: "medium", iconOnly: false },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, intent, size, iconOnly = false, asChild = false, leadingIcon, trailingIcon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, intent, size, iconOnly, className }))} disabled={disabled} aria-disabled={disabled || undefined} {...props}>
        {leadingIcon ? <span className="cn-btn-icon inline-flex shrink-0 items-center justify-center">{leadingIcon}</span> : null}
        {iconOnly ? <span className="cn-btn-icon inline-flex shrink-0 items-center justify-center">{children}</span> : children}
        {trailingIcon ? <span className="cn-btn-icon inline-flex shrink-0 items-center justify-center">{trailingIcon}</span> : null}
      </Comp>
    );
  },
);
Button.displayName = "Button";
export { buttonVariants };
