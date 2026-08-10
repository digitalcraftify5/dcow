"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Layers, Rocket } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture Audit",
    badge: "PHASE_01 // DISCOVERY",
    desc: "We analyze your business objectives, perform technical UX audits, map data pipelines, and design target cloud architectures.",
    icon: Compass,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
  },
  {
    step: "02",
    title: "Sovereign Blueprint & System Specs",
    badge: "PHASE_02 // BLUEPRINT",
    desc: "Our senior solutions architects design high-fidelity WebGL 3D wireframes, component design tokens, and API schemas.",
    icon: Cpu,
    color: "text-purple-400",
    borderColor: "border-purple-500/40",
  },
  {
    step: "03",
    title: "Agile Engineering & Sprint Delivery",
    badge: "PHASE_03 // EXECUTION",
    desc: "Dedicated developer pods execute clean TypeScript code, Next.js 15 App Router components, and Flutter mobile builds in bi-weekly sprints.",
    icon: Layers,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
  },
  {
    step: "04",
    title: "SLA Edge Deployment & 24/7 Monitoring",
    badge: "PHASE_04 // DEPLOYMENT",
    desc: "Automated CI/CD pipelines push code to Cloudflare/Vercel edge CDN. Automated DDoS defense and 24/7 SLA monitoring activated.",
    icon: Rocket,
    color: "text-amber-400",
    borderColor: "border-amber-500/40",
  },
];

export const ServicesProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <CyberBadge text="ENGINEERING_PIPELINE // 4_STAGES" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our <span className="text-gradient-teal-cyan">Execution Methodology</span>.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            How we transition your product from initial architectural vision to 99.99% SLA edge production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((ps, idx) => {
            const Icon = ps.icon;
            return (
              <motion.div
                key={ps.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl glass-card border ${ps.borderColor} p-6 sm:p-8 bg-zinc-950/80 space-y-6 group hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-mono text-zinc-800 group-hover:text-cyan-400 transition-colors">
                    {ps.step}
                  </span>
                  <div className={`p-3 rounded-2xl bg-zinc-900 border border-zinc-800 ${ps.color}`}>
                    <Icon size={22} />
                  </div>
                </div>

                <div className="space-y-2">
                  <CyberBadge text={ps.badge} variant="cyan" />
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors pt-1">
                    {ps.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{ps.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
