"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { surfaceVariants } from "../../lib/surface";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  raised?: boolean;
  padding?: "none" | "md" | "lg";
}

export function Card({ raised = false, padding = "md", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        surfaceVariants({
          border: "inset",
          shadow: raised ? "sm" : "none",
          padding: padding === "none" ? "none" : padding === "lg" ? "lg" : "md",
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-display text-lg font-medium tracking-tight text-text-strong", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-text-sub", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3", className)} {...props} />;
}

export interface PanelProps extends Omit<CardProps, "title"> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function Panel({ title, icon, action, children, className, padding = "lg", ...props }: PanelProps) {
  return (
    <Card padding={padding} className={className} {...props}>
      {title ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-display text-base font-medium text-text-strong">
            {icon ? <span className="inline-flex size-5 items-center justify-center text-icon-sub">{icon}</span> : null}
            {title}
          </div>
          {action}
        </div>
      ) : null}
      {children}
    </Card>
  );
}
