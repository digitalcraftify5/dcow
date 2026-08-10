"use client";

import * as React from "react";
import { Terminal } from "lucide-react";

export interface CyberBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "cyan" | "purple" | "teal" | "emerald";
}

export const CyberBadge: React.FC<CyberBadgeProps> = ({
  text,
  icon = <Terminal size={12} />,
  variant = "cyan",
}) => {
  const getColors = () => {
    switch (variant) {
      case "purple":
        return "bg-purple-950/60 border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]";
      case "teal":
        return "bg-teal-950/60 border-teal-500/40 text-teal-300 shadow-[0_0_15px_rgba(0,210,181,0.25)]";
      case "emerald":
        return "bg-emerald-950/60 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]";
      default:
        return "bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]";
    }
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md transition-all duration-300 hover:scale-105">
      <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${getColors()}`}>
        {icon}
      </div>
      <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-200 flex items-center gap-1.5">
        <span className="text-cyan-400 font-mono">{"//"}</span>
        {text}
        <span className="text-cyan-400 font-mono">{"//"}</span>
      </span>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
      </span>
    </div>
  );
};
