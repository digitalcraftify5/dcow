import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: "teal" | "cyan" | "purple" | "none";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, glow = "none", ...props }, ref) => {
    const glowStyles = {
      teal: "hover:shadow-[0_0_30px_rgba(0,210,181,0.25)] hover:border-teal-500/40",
      cyan: "hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:border-cyan-500/40",
      purple: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:border-purple-500/40",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "glass-panel rounded-2xl p-6 transition-all duration-300",
          glowStyles[glow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassPanel.displayName = "GlassPanel";
