"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";

const COMPARISON_FEATURES = [
  {
    feature: "Core Technology Stack",
    traditional: "Generic WordPress / PHP / Monolithic",
    craftify: "Next.js 15, React 19, Flutter & Serverless Edge",
  },
  {
    feature: "Performance & Page Load Speed",
    traditional: "Slow 3-6s TTFB (Lighthouse 50-70)",
    craftify: "Sub-50ms Global Edge TTFB (Lighthouse 95+)",
  },
  {
    feature: "Design & User Experience",
    traditional: "Generic Templates & Basic Outlines",
    craftify: "Bespoke 3D WebGL, Glassmorphic Cyber UI",
  },
  {
    feature: "Security & DDoS Defense",
    traditional: "Basic SSL & Plugin Vulnerabilities",
    craftify: "Automated Cloudflare WAF & Zero-Trust Shields",
  },
  {
    feature: "SLA Response Guarantee",
    traditional: "Best Effort / 48-72 Hours",
    craftify: "Guaranteed 2-Hour SLA Incident Response",
  },
  {
    feature: "Mobile App Capabilities",
    traditional: "Outsourced Third-Party Plugins",
    craftify: "Native Cross-Platform Flutter Pods",
  },
  {
    feature: "AI & LLM Integration",
    traditional: "Not Supported",
    craftify: "Native OpenAI, Claude & RAG Vector Engines",
  },
];

export const ServicesComparisonSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <CyberBadge text="ENGINEERING_BENCHMARK // ARCHITECTURE_COMPARISON" variant="purple" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Traditional Agency vs <span className="text-gradient-teal-cyan">Digital Craftify</span>.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            Why high-growth global enterprises choose Digital Craftify for mission-critical digital architecture.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl glass-card border border-zinc-800 bg-zinc-950/90 shadow-[0_0_50px_rgba(0,240,255,0.15)]">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/80">
                <th className="p-5 font-mono text-xs text-zinc-400 font-bold uppercase">
                  {"//"} ARCHITECTURE FEATURE
                </th>
                <th className="p-5 font-mono text-xs text-zinc-500 font-bold uppercase">
                  TRADITIONAL AGENCIES
                </th>
                <th className="p-5 font-mono text-xs text-cyan-400 font-bold uppercase bg-cyan-950/40 border-l border-cyan-500/30">
                  DIGITAL CRAFTIFY SOVEREIGN PODS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 text-xs font-mono">
              {COMPARISON_FEATURES.map((row, idx) => (
                <tr key={row.feature} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-bold text-white font-sans text-sm">{row.feature}</td>
                  <td className="p-5 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <X size={14} className="text-red-400 shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-5 text-white font-bold bg-cyan-950/20 border-l border-cyan-500/30">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      <span>{row.craftify}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
