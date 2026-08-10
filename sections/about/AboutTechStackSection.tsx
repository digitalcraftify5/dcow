"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Smartphone, Cloud, Shield, Zap, Sparkles, Layers, Terminal } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const AboutTechStackSection: React.FC = () => {
  const TECH_SUITE = [
    { name: "Next.js 15", category: "Fullstack Framework", desc: "React Server Components & App Router", icon: Code2, color: "text-cyan-400" },
    { name: "Flutter", category: "Cross-Platform Mobile", desc: "iOS, Android & Desktop Native Apps", icon: Smartphone, color: "text-sky-400" },
    { name: "React 19", category: "Frontend Engine", desc: "High-performance UI & Micro-animations", icon: Layers, color: "text-cyan-300" },
    { name: "Python & FastAPI", category: "AI & Backend Microservices", desc: "Machine Learning & LLM Pipelines", icon: Terminal, color: "text-amber-400" },
    { name: "Cloud Edge CDN", category: "Infrastructure", desc: "Sub-50ms Global Latency Distribution", icon: Cloud, color: "text-emerald-400" },
    { name: "Custom Cyber Tokens", category: "Web3 & Security", desc: "Cryptographic Authentication & Security", icon: Shield, color: "text-purple-400" },
    { name: "AI Automations", category: "Intelligence", desc: "Autonomous AI Agents & Workflows", icon: Sparkles, color: "text-purple-300" },
    { name: "TypeScript", category: "Type Safety", desc: "100% Type-Safe Enterprise Codebases", icon: Cpu, color: "text-blue-400" },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/80 border-t border-zinc-800/80">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="MODERN_ARCHITECTURE // TECH_MATRIX" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Modern <span className="text-gradient-teal-cyan">Architecture & Software Suite</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            Engineered using cutting-edge frameworks including Flutter, Next.js, Python, and AI Automations.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_SUITE.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-2xl glass-card border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/40 transition-colors">
                    <Icon size={20} className={tech.color} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">{tech.category}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">{tech.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
