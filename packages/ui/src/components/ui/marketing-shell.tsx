import * as React from "react";
import { cn } from "../../lib/utils";

export interface MarketingShellProps extends React.HTMLAttributes<HTMLDivElement> {
  nav?: React.ReactNode;
}

export function MarketingShell({ nav, children, className, ...props }: MarketingShellProps) {
  return (
    <div className={cn("min-h-screen bg-bg-white", className)} {...props}>
      {nav}
      {children}
    </div>
  );
}
