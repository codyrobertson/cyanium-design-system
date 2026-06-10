"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { controlIconLeading, controlIconTrailing, inputSurfaceVariants } from "../../lib/surface";
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

const inputClassName =
  "min-w-0 flex-1 border-none bg-transparent p-0 font-sans text-sm leading-5 text-text-strong outline-none placeholder:text-text-soft disabled:cursor-not-allowed disabled:text-text-disabled";

const InputControl = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize = "medium", leadingIcon, trailingIcon, error, disabled, id, ...props }, ref) => (
    <div className={inputSurfaceVariants({ size: inputSize, error: !!error, disabled: !!disabled })}>
      {leadingIcon ? <span className={controlIconLeading}>{leadingIcon}</span> : null}
      <input
        ref={ref}
        id={id}
        disabled={disabled}
        className={cn(inputClassName, className)}
        {...props}
      />
      {trailingIcon ? <span className={controlIconTrailing}>{trailingIcon}</span> : null}
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
    <Input
      className={className}
      leadingIcon={<Search className="size-5" />}
      placeholder={placeholder}
      trailingIcon={shortcut ? <Kbd>{shortcut}</Kbd> : undefined}
      {...props}
    />
  );
}

/** @deprecated Use Input without label */
export { InputControl };
export { InputControl as InputShell };
