"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";
import { popoverSurface } from "../../lib/surface";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export interface DropdownItem {
  type?: "item" | "separator";
  label?: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  danger?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items?: DropdownItem[];
  align?: "start" | "end";
  label?: React.ReactNode;
  className?: string;
}

export function Dropdown({ trigger, items = [], align = "start", label, className }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content align={align} sideOffset={6} className={cn("z-50 min-w-[200px] font-sans shadow-md", popoverSurface, className)}>
          {label ? <div className="px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-wide text-text-soft">{label}</div> : null}
          {items.map((item, index) =>
            item.type === "separator" ? <DropdownMenuPrimitive.Separator key={`sep-${index}`} className="my-1.5 h-px bg-stroke-soft" /> : (
              <DropdownMenuPrimitive.Item key={index} onSelect={() => item.onClick?.()} className={cn("flex h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 text-sm text-text-strong outline-none data-[highlighted]:bg-bg-weak", item.danger && "text-destructive data-[highlighted]:bg-error-lighter")}>
                {item.icon ? <span className={cn("inline-flex size-5 items-center justify-center text-icon-sub", item.danger && "text-destructive")}>{item.icon}</span> : null}
                {item.label}
                {item.shortcut ? <span className="ml-auto font-mono text-[11px] text-text-soft">{item.shortcut}</span> : null}
              </DropdownMenuPrimitive.Item>
            ),
          )}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenu>
  );
}
