"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Code, ShieldCheck, Rocket } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const CaseStudiesProcessSection: React.FC = () => {
  const STEPS = [
    {
      step: "01",
      badge: "PHASE_DISCOVERY",
      title: "Architecture & ROI Blueprint",
      desc: "Deep technical audit of existing bottlenecks, cloud infrastructure scoping, and ROI milestone mapping.",
      icon: Search,
    },
    {
      step: "02",
      badge: "PHASE_DEVELOPMENT",
      title: "High-Speed Edge Engineering",
      desc: "Developing custom React, Next.js 15, or Flutter platforms backed by sub-50ms edge CDN infrastructure.",
      icon: Code,
    },
    {
      step: "03",
      badge: "PHASE_SECURITY",
      title: "Penetration Testing & AI Audit",
      desc: "Rigorous zero-trust security validation, automated regression testing, and AI agent integration.",
      icon: ShieldCheck,
    },
    {
      step: "04",
      badge: "PHASE_LAUNCH",
      title: "Global CDN Launch & SLA Support",
      desc: "Zero-downtime deployment, continuous edge monitoring, and 24/7 SLA engineering support.",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-zinc-950/80">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="METHODOLOGY // ENGINEERING_PROCESS" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Our 4-Step <span className="text-gradient-teal-cyan">Enterprise Engineering Process</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            How we transform complex enterprise challenges into high-performing digital platforms.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-cyan-500/40 transition-all space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <CyberBadge text={step.badge} variant="cyan" />
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
