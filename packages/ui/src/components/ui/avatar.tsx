"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, initials } from "../../lib/utils";

const avatarVariants = cva("relative inline-flex shrink-0 select-none items-center justify-center overflow-visible rounded-full font-medium font-sans", {
  variants: {
    color: {
      gray: "bg-bg-soft text-text-sub",
      blue: "bg-[var(--blue-200)] text-[var(--blue-700)]",
      purple: "bg-[var(--purple-200)] text-[var(--purple-700)]",
      green: "bg-[var(--green-200)] text-[var(--green-700)]",
      orange: "bg-[var(--orange-200)] text-[var(--orange-700)]",
      yellow: "bg-[var(--yellow-200)] text-[var(--yellow-700)]",
    },
  },
  defaultVariants: { color: "gray" },
});

const AVATAR_SIZES = { 20: 20, 24: 24, 32: 32, 40: 40, 48: 48, 56: 56, 64: 64, 72: 72, 80: 80 } as const;
export type AvatarSize = keyof typeof AVATAR_SIZES;

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: "online" | "away" | "busy" | "offline";
}

export function Avatar({ src, alt, name, size = 40, color, status, className, ...props }: AvatarProps) {
  const px = AVATAR_SIZES[size] ?? 40;
  const fontSize = Math.max(10, Math.round(px * 0.4));
  const dot = Math.max(6, Math.round(px * 0.26));
  return (
    <span className={cn(avatarVariants({ color, className }))} style={{ width: px, height: px, fontSize }} {...props}>
      {src ? <img src={src} alt={alt ?? name ?? ""} className="size-full rounded-full object-cover" /> : initials(name)}
      {status ? (
        <span className={cn("absolute bottom-0 right-0 rounded-full shadow-[0_0_0_2px_var(--bg-white-0)]", status === "online" && "bg-success", status === "away" && "bg-[var(--state-away-base)]", status === "busy" && "bg-destructive", status === "offline" && "bg-bg-soft shadow-[0_0_0_2px_var(--bg-white-0),inset_0_0_0_1.5px_var(--text-soft-400)]")} style={{ width: dot, height: dot }} />
      ) : null}
    </span>
  );
}
export { avatarVariants };
