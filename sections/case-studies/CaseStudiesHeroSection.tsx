"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers, Sparkles, Terminal, TrendingUp, ShieldCheck } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";

export const CaseStudiesHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden py-20 lg:py-24">
      {/* 3D Cyber Background Particles */}
      <CyberBackground variant="purple" density={35} />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-cyan-500/12 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Line 1 Cyber Badge Tag */}
          <CyberBadge text="CASE_STUDIES // ENTERPRISE_ROI" variant="purple" />

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Documented <span className="text-gradient-purple-cyan">ROI & Enterprise Architecture Success</span>.
          </h1>

          {/* Cyber Capsule Description */}
          <div className="p-4 rounded-2xl glass-card border border-purple-500/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(168,85,247,0.15)] max-w-2xl text-left">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 font-mono text-xs">
              <span className="text-purple-400 font-bold flex items-center gap-1.5">
                <Terminal size={14} /> {"//"} SYS.ANALYSIS {"//"}
              </span>
              <span className="text-emerald-400 text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                AUDITED_IMPACT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Discover how Digital Craftify's bespoke web architecture, edge CDN networks, Flutter mobile apps, and AI automations drive measurable growth and operational performance for global enterprises.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="gradient" size="lg" rightIcon={<ArrowRight size={16} />}>
                Request Architecture Audit
              </Button>
            </Link>
            <a href="https://www.gladiolus.pro" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" rightIcon={<Globe size={16} />}>
                Visit Gladiolus Pro
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
