"use client";

import * as React from "react";
import { Clock, Calendar } from "lucide-react";

export const CyberClock: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [timeStr, setTimeStr] = React.useState<string>("00:00:00 AM");
  const [dateStr, setDateStr] = React.useState<string>("00/00/0000");

  React.useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      
      // Date in dd/mm/yyyy format
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setDateStr(`${day}/${month}/${year}`);

      // Time with seconds: HH:MM:SS AM/PM
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setTimeStr(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-3 px-3 py-1 rounded-xl bg-zinc-950/90 border border-cyan-500/40 text-zinc-200 font-mono text-[11px] shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:border-cyan-400 transition-all">
      {/* Live System Indicator */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>

      {/* Date Capsule dd/mm/yyyy */}
      <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
        <Calendar size={12} className="text-cyan-400" />
        <span>{mounted ? dateStr : "--/--/----"}</span>
      </div>

      <span className="text-zinc-700 font-bold">|</span>

      {/* Clock Capsule with seconds */}
      <div className="flex items-center gap-1.5 text-emerald-300 font-bold tracking-wider">
        <Clock size={12} className="text-emerald-400 animate-pulse" />
        <span>{mounted ? timeStr : "--:--:-- --"}</span>
      </div>
    </div>
  );
};
