import * as React from "react";
import { cn } from "../../lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headingClass: Record<HeadingLevel, string> = {
  h1: "text-title-h1 font-display font-medium tracking-tight text-text-strong",
  h2: "text-title-h2 font-display font-medium tracking-tight text-text-strong",
  h3: "text-title-h3 font-display font-medium tracking-tight text-text-strong",
  h4: "text-title-h4 font-display font-medium tracking-tight text-text-strong",
  h5: "text-title-h5 font-display font-medium text-text-strong",
  h6: "text-title-h6 font-display font-medium text-text-strong",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export function Heading({ level = "h2", className, ...props }: HeadingProps) {
  const Comp = level;
  return <Comp className={cn(headingClass[level], className)} {...props} />;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "lg" | "md" | "sm" | "xs";
  weight?: "regular" | "medium";
  muted?: boolean;
}

export function Text({
  size = "sm",
  weight = "regular",
  muted,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "font-sans text-text-strong",
        size === "lg" && "text-paragraph-lg leading-6",
        size === "md" && "text-paragraph-md leading-6",
        size === "sm" && "text-paragraph-sm leading-5",
        size === "xs" && "text-paragraph-xs leading-4",
        weight === "medium" && "font-medium",
        muted && "text-text-sub",
        className,
      )}
      {...props}
    />
  );
}

export interface SubheadingProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "xs" | "2xs";
}

export function Subheading({ size = "xs", className, ...props }: SubheadingProps) {
  return (
    <span
      className={cn(
        "font-sans font-medium uppercase text-text-soft",
        size === "sm" && "text-subheading-sm",
        size === "xs" && "text-subheading-xs",
        size === "2xs" && "text-subheading-2xs",
        className,
      )}
      {...props}
    />
  );
}
