"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe2, Cpu, Zap, Shield, Sparkles, Layers, Box, Cloud, Flower2, Flame, Droplets } from "lucide-react";

export const CLIENT_LOGOS = [
  { name: "GLADIOLUS", icon: Flower2 },
  { name: "MISBAH", icon: Flame },
  { name: "SAQQA", icon: Droplets },
  { name: "AURA CLOUD", icon: Globe2 },
  { name: "NEXUS AI", icon: Cpu },
  { name: "VELOCITY", icon: Zap },
  { name: "FORTRESS", icon: Shield },
  { name: "QUANTUM", icon: Sparkles },
  { name: "SYNAPSE", icon: Layers },
  { name: "HYPERION", icon: Box },
  { name: "CYBERCLOUD", icon: Cloud },
];

export const TrustedSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 border-y border-zinc-800/60 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
            // TRUSTED_NETWORK //
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-black uppercase tracking-widest text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
          Trusted by <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">30+ Innovative Enterprises</span> & Growth Brands
        </h3>
        <p className="text-xs font-mono text-zinc-400">
          [ DEPLOYED_AGROSS_GLOBAL_DATA_NODES ]
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex shrink-0 items-center gap-12 py-2 hover:[animation-play-state:paused]"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-2.5 rounded-xl glass-button px-5 py-2.5 text-zinc-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <Icon size={18} className="text-zinc-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-colors" />
                <span className="text-xs font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
