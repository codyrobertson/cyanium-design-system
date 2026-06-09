"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { textareaSurfaceVariants } from "../../lib/surface";
import { Field } from "./field";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: React.ReactNode;
  error?: boolean;
  maxLength?: number;
  showCounter?: boolean;
}

const TextareaControl = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, disabled, ...props }, ref) => (
    <textarea
      ref={ref}
      disabled={disabled}
      className={cn(textareaSurfaceVariants({ error: !!error, disabled: !!disabled }), "min-h-[120px]", className)}
      {...props}
    />
  ),
);
TextareaControl.displayName = "TextareaControl";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, maxLength, showCounter = false, value, defaultValue, onChange, id, disabled, className, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const [length, setLength] = React.useState(String(value ?? defaultValue ?? "").length);
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setLength(event.target.value.length);
      onChange?.(event);
    };
    const area = (
      <div className="relative">
        <TextareaControl
          ref={ref}
          id={inputId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          error={error}
          className={className}
          {...props}
        />
        {showCounter && maxLength ? <span className="absolute bottom-2 right-3 text-xs text-text-soft">{length}/{maxLength}</span> : null}
      </div>
    );
    if (!label && !hint) return area;
    return (
      <Field label={label} htmlFor={inputId} hint={hint} error={error}>
        {area}
      </Field>
    );
  },
);
Textarea.displayName = "Textarea";

export { TextareaControl, TextareaControl as TextareaShell };
