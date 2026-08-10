"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "danger" | "success" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none overflow-hidden active:scale-95";

    const variantStyles = {
      primary:
        "bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] dark:bg-zinc-100 dark:text-zinc-950",
      secondary:
        "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white dark:bg-zinc-800 dark:text-zinc-100",
      outline:
        "border border-zinc-700 bg-transparent text-zinc-100 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]",
      ghost:
        "bg-transparent text-zinc-300 hover:bg-zinc-800/60 hover:text-white",
      gradient:
        "gradient-teal-cyan text-zinc-950 font-bold hover:opacity-90 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]",
      danger:
        "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]",
      success:
        "bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      glass: "glass-button text-white",
    };

    const sizeStyles = {
      sm: "h-9 rounded-md px-3 text-xs gap-1.5",
      md: "h-11 rounded-lg px-5 text-sm gap-2",
      lg: "h-13 rounded-xl px-7 text-base gap-2.5",
      icon: "h-11 w-11 rounded-lg p-0 justify-center",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";
