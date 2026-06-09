"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface BreadcrumbItem { label: React.ReactNode; href?: string; onClick?: () => void; }

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export function Breadcrumb({ items = [], separator, className, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("font-sans", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1">
              {item.href && !isLast ? <a href={item.href} onClick={item.onClick} className="text-text-sub transition-colors hover:text-text-strong">{item.label}</a> : <span className={cn(isLast ? "font-medium text-text-strong" : "text-text-sub")}>{item.label}</span>}
              {!isLast ? <span className="inline-flex text-icon-soft" aria-hidden>{separator ?? <ChevronRight className="size-4" />}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
