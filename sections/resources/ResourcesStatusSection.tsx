"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Activity, Server, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";

const SYSTEM_NODES = [
  {
    name: "Global Edge CDN (Cloudflare)",
    status: "OPERATIONAL",
    latency: "14ms",
    uptime: "99.99%",
    region: "Sovereign Multi-Region",
    icon: Globe,
    color: "text-emerald-400",
  },
  {
    name: "Next.js 15 App Router Server",
    status: "OPERATIONAL",
    latency: "22ms",
    uptime: "100.0%",
    region: "US & Asia Pacific",
    icon: Server,
    color: "text-cyan-400",
  },
  {
    name: "Zero-Trust WAF Firewall Shield",
    status: "ACTIVE_PROTECTION",
    latency: "0ms",
    uptime: "100.0%",
    region: "Automated Sentinel",
    icon: ShieldCheck,
    color: "text-purple-400",
  },
  {
    name: "SLA Emergency Dispatch Engine",
    status: "2-HOUR_ACTIVE",
    latency: "Sub-2h",
    uptime: "24/7 SLA",
    region: "Global Engineering Pods",
    icon: Zap,
    color: "text-amber-400",
  },
];

export const ResourcesStatusSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div>
            <CyberBadge text="SYSTEM_TELEMETRY // LIVE_SENTINEL_MONITOR" variant="emerald" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Real-Time <span className="text-gradient-teal-cyan">System Telemetry</span>.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/40 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ALL SYSTEMS OPERATIONAL // 99.99% SLA ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_NODES.map((node) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl glass-card border border-zinc-800 bg-zinc-950/80 space-y-4 shadow-lg hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-zinc-900 border border-zinc-800 ${node.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                    {node.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">{node.name}</h4>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">{node.region}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 block text-[9px]">LATENCY</span>
                    <span className="text-cyan-400 font-bold">{node.latency}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px]">UPTIME</span>
                    <span className="text-emerald-400 font-bold">{node.uptime}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
