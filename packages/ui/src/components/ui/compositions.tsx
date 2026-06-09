"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { insetBorder } from "../../lib/surface";
import { Icon } from "./icon";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-subheading-xs text-text-sub", className)} {...props}>
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export interface SectionHeadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}

export function SectionHead({ eyebrow, title, subtitle, align = "center", className, ...props }: SectionHeadProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)} {...props}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-title-h2 font-display font-medium tracking-tight text-text-strong">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-paragraph-lg text-text-sub">{subtitle}</p> : null}
    </div>
  );
}

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export function FeatureCard({ icon, title, description, link, className, ...props }: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-2xl p-5", insetBorder, className)} {...props}>
      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-lighter text-primary">{icon}</span>
      <h3 className="text-title-h6 font-display font-medium text-text-strong">{title}</h3>
      <p className="text-paragraph-md text-text-sub">{description}</p>
      {link ? <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary">{link}</a> : null}
    </div>
  );
}
