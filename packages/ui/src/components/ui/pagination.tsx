"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  total?: number;
  page?: number;
  onChange?: (page: number) => void;
  siblings?: number;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function Pagination({ total = 1, page = 1, onChange, siblings = 1, className, ...props }: PaginationProps) {
  const current = Math.min(Math.max(1, page), total);
  const left = Math.max(1, current - siblings);
  const right = Math.min(total, current + siblings);
  const pages = range(left, right);

  return (
    <nav aria-label="Pagination" className={cn("inline-flex items-center gap-1 font-sans", className)} {...props}>
      <Button variant="stroke" intent="neutral" size="small" iconOnly disabled={current <= 1} onClick={() => onChange?.(current - 1)} aria-label="Previous page"><ChevronLeft className="size-4" /></Button>
      {left > 1 ? (<><PageButton page={1} current={current} onChange={onChange} />{left > 2 ? <span className="inline-flex size-9 items-center justify-center text-icon-soft"><MoreHorizontal className="size-4" /></span> : null}</>) : null}
      {pages.map((p) => <PageButton key={p} page={p} current={current} onChange={onChange} />)}
      {right < total ? (<>{right < total - 1 ? <span className="inline-flex size-9 items-center justify-center text-icon-soft"><MoreHorizontal className="size-4" /></span> : null}<PageButton page={total} current={current} onChange={onChange} /></>) : null}
      <Button variant="stroke" intent="neutral" size="small" iconOnly disabled={current >= total} onClick={() => onChange?.(current + 1)} aria-label="Next page"><ChevronRight className="size-4" /></Button>
    </nav>
  );
}

function PageButton({ page, current, onChange }: { page: number; current: number; onChange?: (page: number) => void }) {
  const active = page === current;
  return (
    <button type="button" aria-current={active ? "page" : undefined} onClick={() => onChange?.(page)} className={cn("inline-flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-colors duration-normal", active ? "bg-bg-strong text-text-white" : "text-text-sub hover:bg-bg-weak hover:text-text-strong")}>
      {page}
    </button>
  );
}
