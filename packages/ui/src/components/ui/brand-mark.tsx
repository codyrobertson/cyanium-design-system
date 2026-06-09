import * as React from "react";
import { cn } from "../../lib/utils";

export interface BrandMarkProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function BrandMark({ size = 40, className, ...props }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--brand-orange)] text-white shadow-[0_0_0_2px_var(--brand-orange-ring),0_6px_12px_-4px_rgba(115,31,8,0.4)]",
        className,
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg viewBox="0 0 64 52" className="size-[55%]" aria-hidden fill="currentColor">
        <path d="M11.122 2.438v6.5c0 1.347-1.067 2.437-2.383 2.437H2.383C1.067 11.375 0 12.466 0 13.813V39c0 7.18 5.69 13 12.711 13h26.353c.421 0 .826-.171 1.124-.475l9.3-9.513c.501-.512 1.357-.15 1.357.575v7.788c0 .898.711 1.625 1.589 1.625h9.533c.878 0 1.589-.727 1.589-1.625V13c-.002-7.178-5.692-13-12.713-13H13.505c-1.317 0-2.383 1.091-2.383 2.438zm36.543 36.562H15.888c-1.755 0-3.177-1.454-3.177-3.25v-19.5c0-1.796 1.422-3.25 3.177-3.25h31.777c1.756 0 3.178 1.454 3.178 3.25v19.5c0 1.796-1.422 3.25-3.178 3.25z" />
      </svg>
    </div>
  );
}
