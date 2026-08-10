import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        <label htmlFor={checkboxId} className="inline-flex items-center gap-2.5 cursor-pointer select-none">
          <input
            id={checkboxId}
            type="checkbox"
            ref={ref}
            className={cn(
              "h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500 focus:ring-cyan-500/20 focus:ring-2 cursor-pointer transition-colors",
              className
            )}
            {...props}
          />
          <span className="text-sm font-medium text-zinc-300">{label}</span>
        </label>
        {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
