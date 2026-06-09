"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { inputSurfaceVariants } from "../../lib/surface";
import { Kbd } from "./kbd";
import { Field } from "./field";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  hint?: React.ReactNode;
  error?: boolean;
  inputSize?: "small" | "medium" | "large";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const InputControl = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize = "medium", leadingIcon, trailingIcon, error, disabled, id, ...props }, ref) => (
    <div className={inputSurfaceVariants({ size: inputSize, error: !!error, disabled: !!disabled })}>
      {leadingIcon ? <span className="inline-flex size-5 shrink-0 items-center justify-center text-icon-soft">{leadingIcon}</span> : null}
      <input
        ref={ref}
        id={id}
        disabled={disabled}
        className={cn(
          "min-w-0 flex-1 border-none bg-transparent font-sans text-sm leading-5 text-text-strong outline-none placeholder:text-text-soft",
          disabled && "text-text-disabled",
          className,
        )}
        {...props}
      />
      {trailingIcon ? <span className="inline-flex size-5 shrink-0 items-center justify-center text-icon-soft">{trailingIcon}</span> : null}
    </div>
  ),
);
InputControl.displayName = "InputControl";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, hint, error, inputSize, leadingIcon, trailingIcon, id, disabled, className, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const control = (
      <InputControl
        ref={ref}
        id={inputId}
        inputSize={inputSize}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        error={error}
        disabled={disabled}
        className={className}
        {...props}
      />
    );
    if (!label && !hint) return control;
    return (
      <Field label={label} htmlFor={inputId} required={required} hint={hint} error={error}>
        {control}
      </Field>
    );
  },
);
Input.displayName = "Input";

export interface SearchFieldProps extends Omit<InputProps, "leadingIcon"> {
  shortcut?: string;
}

export function SearchField({ shortcut = "⌘K", placeholder = "Search…", className, ...props }: SearchFieldProps) {
  return (
    <div className={cn("relative", className)}>
      <Input leadingIcon={<Search className="size-5" />} placeholder={placeholder} trailingIcon={shortcut ? <Kbd>{shortcut}</Kbd> : undefined} {...props} />
    </div>
  );
}

/** @deprecated Use Input without label */
export { InputControl };
export { InputControl as InputShell };
