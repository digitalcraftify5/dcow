import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <label htmlFor={radioId} className="inline-flex items-center gap-2.5 cursor-pointer select-none">
        <input
          id={radioId}
          type="radio"
          ref={ref}
          className={cn(
            "h-4 w-4 border-zinc-700 bg-zinc-900 text-cyan-500 focus:ring-cyan-500/20 focus:ring-2 cursor-pointer transition-colors",
            className
          )}
          {...props}
        />
        <span className="text-sm font-medium text-zinc-300">{label}</span>
      </label>
    );
  }
);
Radio.displayName = "Radio";
