"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<CounterProps> = ({ end, suffix = "", label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <span className="text-3xl sm:text-4xl font-extrabold text-gradient-teal-cyan">
        {count}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium text-zinc-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

export const HeroStats: React.FC = () => {
  return (
    <div className="relative mt-12 w-full space-y-8">
      {/* Statistics Counter Bar */}
      <div className="grid grid-cols-2 gap-4 rounded-2xl glass-panel p-4 shadow-2xl sm:grid-cols-4 border-zinc-800/80">
        <StatCounter end={50} suffix="+" label="Projects Delivered" />
        <StatCounter end={30} suffix="+" label="Happy Clients" />
        <StatCounter end={100} suffix="%" label="Client Satisfaction" />
        <StatCounter end={24} suffix="/7" label="Support" />
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="flex flex-col items-center justify-center space-y-2 pt-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="glass-button flex h-10 w-6 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          <div className="h-2 w-1 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>
        <span className="flex items-center gap-1 text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
          Scroll To Discover <ArrowDown size={12} className="text-cyan-400" />
        </span>
      </div>
    </div>
  );
};
