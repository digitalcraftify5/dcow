"use client";

import * as React from "react";
import { CyberBadge } from "./cyber-badge";

export interface CyberHeaderProps {
  badgeText: string;
  title: string;
  highlightText?: string;
  description: string;
  variant?: "cyan" | "purple" | "teal" | "emerald";
  className?: string;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  variant = "cyan",
  className = "",
}) => {
  const getGradient = () => {
    switch (variant) {
      case "purple":
        return "from-purple-400 via-pink-400 to-cyan-300";
      case "teal":
        return "from-teal-300 via-cyan-400 to-blue-400";
      case "emerald":
        return "from-emerald-400 via-teal-300 to-cyan-400";
      default:
        return "from-cyan-300 via-teal-300 to-blue-400";
    }
  };

  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 relative ${className}`}>
      {/* Background Cyber Ambient Glow */}
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-48 h-12 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />

      {/* 1st Line: Cyber Badge Header */}
      <div className="flex justify-center">
        <CyberBadge text={badgeText} variant={variant} />
      </div>

      {/* 2nd Line: Futuristic Title with Holographic Glow */}
      <div className="relative inline-block">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          <span className={`bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]`}>
            {title}
          </span>
          {highlightText && (
            <span className="block text-cyan-400 font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-wider mt-1 drop-shadow-[0_0_12px_rgba(0,210,181,0.5)]">
              {highlightText}
            </span>
          )}
        </h2>

        {/* Decorative Futuristic Corner Brackets */}
        <div className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 text-cyan-500/40 font-mono text-sm">
          [&lt;]
        </div>
        <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 text-cyan-500/40 font-mono text-sm">
          [&gt;]
        </div>
      </div>

      {/* 3rd Line: Cyber Decorative Paragraph Subtitle */}
      <div className="relative max-w-2xl mx-auto pt-2">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-5 py-3 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:border-cyan-500/40 transition-colors">
          <span className="font-mono text-cyan-400 text-xs shrink-0 font-bold">{"//"} SYS.DESC {"//"}</span>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
            {description}
          </p>
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
        </div>
      </div>
    </div>
  );
};
