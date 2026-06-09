"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { surfaceVariants } from "../../lib/surface";
import { Button } from "./button";
import { Skeleton } from "./skeleton";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  onAction?: () => void;
  actionLabel?: string;
}

export function EmptyState({ icon, title, description, action, onAction, actionLabel = "Try again", className, ...props }: EmptyStateProps) {
  return (
    <div className={cn(surfaceVariants({ border: "inset", padding: "lg" }), "flex flex-col items-center justify-center py-12 text-center", className)} {...props}>
      {icon ? <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-bg-weak text-icon-sub">{icon}</div> : null}
      <h3 className="font-display text-lg font-medium text-text-strong">{title}</h3>
      {description ? <p className="mt-2 max-w-sm text-sm text-text-sub">{description}</p> : null}
      {action ?? (onAction ? <Button className="mt-4" variant="stroke" intent="neutral" onClick={onAction}>{actionLabel}</Button> : null)}
    </div>
  );
}

export function LoadingState({ rows = 3, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn(surfaceVariants({ border: "inset", padding: "md" }), "space-y-3", className)}>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}
