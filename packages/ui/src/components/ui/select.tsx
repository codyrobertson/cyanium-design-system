"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { controlIconLeading, insetBorder, insetBorderError, insetBorderHover, insetFocusError, insetFocusPrimaryDirect, popoverSurface } from "../../lib/surface";
import { Field } from "./field";

export interface SelectOption { value: string; label: string; disabled?: boolean; }

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  hint?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  className?: string;
}

export function Select({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select…",
  label,
  hint,
  error,
  disabled,
  leadingIcon,
  className,
}: SelectProps) {
  const autoId = React.useId();
  const trigger = (
    <SelectPrimitive.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled}>
      <SelectPrimitive.Trigger
        id={autoId}
        className={cn(
          "flex h-10 w-full items-center gap-2 rounded-lg bg-bg-white px-3 text-sm text-text-strong transition-[box-shadow,background] duration-normal focus:outline-none disabled:pointer-events-none disabled:bg-bg-weak disabled:text-text-disabled",
          insetBorder,
          insetBorderHover,
          insetFocusPrimaryDirect,
          error && cn(insetBorderError, insetFocusError),
          className,
        )}
      >
        {leadingIcon ? <span className={controlIconLeading}>{leadingIcon}</span> : null}
        <SelectPrimitive.Value placeholder={placeholder} className="min-w-0 flex-1 truncate text-left leading-5" />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-4 shrink-0 text-icon-soft" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={cn("z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden", popoverSurface)} position="popper" sideOffset={6}>
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className="relative flex h-9 cursor-pointer select-none items-center rounded-lg py-0 pl-2.5 pr-8 text-sm leading-5 text-text-strong outline-none data-[highlighted]:bg-bg-weak data-[disabled]:pointer-events-none data-[disabled]:text-text-disabled"
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-2 inline-flex items-center"><Check className="size-4 text-primary" /></SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
  if (!label && !hint) return trigger;
  return <Field label={label} htmlFor={autoId} hint={hint} error={error}>{trigger}</Field>;
}
