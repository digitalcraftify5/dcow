"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Zap,
  Search,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Bot,
} from "lucide-react";

export const FEATURE_ITEMS = [
  { label: "Modern Design", icon: Palette, color: "text-cyan-400" },
  { label: "Clean Code", icon: Code2, color: "text-purple-400" },
  { label: "Lightning Fast", icon: Zap, color: "text-amber-400" },
  { label: "SEO Optimized", icon: Search, color: "text-teal-400" },
  { label: "Responsive", icon: Smartphone, color: "text-blue-400" },
  { label: "Results Driven", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Secure", icon: ShieldCheck, color: "text-rose-400" },
  { label: "AI Ready", icon: Bot, color: "text-cyan-400" },
];

export const HeroFeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-6">
      {FEATURE_ITEMS.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass-card flex items-center gap-2.5 rounded-xl p-3 shadow-lg transition-all border-zinc-800/80 hover:border-cyan-500/40"
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 ${item.color}`}>
              <Icon size={16} />
            </div>
            <span className="text-xs font-semibold text-zinc-200">{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};
