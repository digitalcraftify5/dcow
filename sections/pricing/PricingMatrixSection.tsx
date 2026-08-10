"use client";

import * as React from "react";
import { Check, Minus, HelpCircle } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const PricingMatrixSection: React.FC = () => {
  const MATRIX_ROWS = [
    { feature: "Fullstack Next.js 15 Engine", starter: true, pro: true, sovereign: true },
    { feature: "Edge CDN & Global POP Distribution", starter: "Standard", pro: "Sub-50ms TTFB", sovereign: "Sovereign Multi-Region" },
    { feature: "Flutter Cross-Platform Mobile App", starter: false, pro: "Included Option", sovereign: "Full Ecosystem Suite" },
    { feature: "Custom Cyber Security Tokens & Audit", starter: false, pro: true, sovereign: "Zero-Trust ISO-27001" },
    { feature: "AI Automations & Chatbot Agent", starter: "Basic", pro: "Advanced", sovereign: "Custom Fine-Tuned LLM" },
    { feature: "SLA Core Uptime Guarantee", starter: "99.8%", pro: "99.99%", sovereign: "Custom SLA Contract" },
    { feature: "24/7 Priority SLA Engineering", starter: "Standard Email", pro: "24/7 Priority Pod", sovereign: "Dedicated Solutions Architect" },
    { feature: "Source Code & Full IP Ownership", starter: true, pro: true, sovereign: "Complete IP Transfer" },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <CyberBackground variant="purple" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="FEATURE_MATRIX // DETAILED_COMPARISON" variant="purple" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Detailed <span className="text-gradient-purple-cyan">Tier Comparison Matrix</span>
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Compare capabilities, SLA uptime guarantees, and security features across all engineering tiers.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-3xl border border-zinc-800/90 glass-card shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-800/80 bg-zinc-900/80">
                <th className="p-5 text-sm font-mono text-cyan-400 font-bold uppercase">Capability / Feature</th>
                <th className="p-5 text-sm font-mono text-zinc-300 font-bold text-center">Starter Cyber</th>
                <th className="p-5 text-sm font-mono text-emerald-400 font-bold text-center bg-emerald-950/40 border-l border-r border-emerald-500/30">
                  Pro Enterprise ⭐
                </th>
                <th className="p-5 text-sm font-mono text-purple-400 font-bold text-center">Custom Sovereign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-sm">
              {MATRIX_ROWS.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`hover:bg-zinc-900/40 transition-colors ${
                    idx % 2 === 0 ? "bg-zinc-950/40" : "bg-transparent"
                  }`}
                >
                  <td className="p-5 font-semibold text-zinc-200">{row.feature}</td>
                  <td className="p-5 text-center text-zinc-300 font-mono text-xs">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? (
                        <Check size={18} className="text-cyan-400 mx-auto" />
                      ) : (
                        <Minus size={18} className="text-zinc-600 mx-auto" />
                      )
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="p-5 text-center text-emerald-300 font-mono text-xs font-bold bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check size={18} className="text-emerald-400 mx-auto" />
                      ) : (
                        <Minus size={18} className="text-zinc-600 mx-auto" />
                      )
                    ) : (
                      row.pro
                    )}
                  </td>
                  <td className="p-5 text-center text-purple-300 font-mono text-xs font-bold">
                    {typeof row.sovereign === "boolean" ? (
                      row.sovereign ? (
                        <Check size={18} className="text-purple-400 mx-auto" />
                      ) : (
                        <Minus size={18} className="text-zinc-600 mx-auto" />
                      )
                    ) : (
                      row.sovereign
                    )}
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
