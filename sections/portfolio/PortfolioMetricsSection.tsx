"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu, Award } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const PortfolioMetricsSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <CyberBackground variant="purple" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="PERFORMANCE_BENCHMARKS // SLA_METRICS" variant="purple" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Proven <span className="text-gradient-purple-cyan">Production Performance</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            Every platform in our portfolio is engineered for sub-50ms latency, 99.9% uptime, and zero-trust security.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all space-y-3">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 w-fit">
              <Zap size={22} className="text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">&lt; 45ms</div>
            <h3 className="text-sm font-bold text-white">Average Edge TTFB</h3>
            <p className="text-xs text-zinc-400">Global server-side response speed across edge nodes.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all space-y-3">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 w-fit">
              <ShieldCheck size={22} className="text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">99.9%</div>
            <h3 className="text-sm font-bold text-white">SLA Core Uptime</h3>
            <p className="text-xs text-zinc-400">Guaranteed high availability & failover redundancy.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all space-y-3">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 w-fit">
              <Globe size={22} className="text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">100+</div>
            <h3 className="text-sm font-bold text-white">Global Edge POPs</h3>
            <p className="text-xs text-zinc-400">Distributed content delivery network nodes worldwide.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all space-y-3">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 w-fit">
              <Award size={22} className="text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">100%</div>
            <h3 className="text-sm font-bold text-white">Zero Vulnerability SLA</h3>
            <p className="text-xs text-zinc-400">Rigorous penetration testing & SSL security compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
