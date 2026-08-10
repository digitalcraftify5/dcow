"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Search, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export interface BlogHeroSectionProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const BLOG_CATEGORIES = [
  { id: "all", label: "All Articles" },
  { id: "architecture", label: "Web Architecture" },
  { id: "ai", label: "AI & LLM Automations" },
  { id: "mobile", label: "Mobile Engineering" },
  { id: "security", label: "Cybersecurity & SLA" },
  { id: "growth", label: "Digital Growth & CRO" },
];

export const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-zinc-950 text-white">
      <CyberBackground variant="cyan" density={40} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Line 1 Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CyberBadge text="EXECUTIVE_DISPATCH // CYBER_INSIGHTS_JOURNAL" variant="cyan" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
          >
            Insights on <span className="text-gradient-teal-cyan">Sovereign Web</span> & AI Architecture.
          </motion.h1>

          {/* Terminal Container Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-2xl glass-card border border-cyan-500/30 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(0,240,255,0.15)] text-left"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <Terminal size={14} /> {"//"} INSIGHTS_SENTINEL // WEEKLY_BRIEFING
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> PEER-REVIEWED ARCHITECTURE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Deep-dive technical analyses, architectural whitepapers, and engineering dispatches from Digital Craftify solutions architects. Explore Next.js 15 App Router optimizations, Flutter mobile sync, sub-50ms edge CDNs, and enterprise RAG AI pipelines.
            </p>
          </motion.div>

          {/* Search Bar Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl relative"
          >
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-4 text-cyan-400" />
              <input
                type="text"
                placeholder="Search articles by topic, Next.js, Flutter, AI, security..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800 pl-11 pr-4 text-xs font-mono text-white placeholder-zinc-500 outline-none focus:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all"
              />
            </div>
          </motion.div>

          {/* Category Filter Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full pt-4"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap p-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-cyan-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <LetsTalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
