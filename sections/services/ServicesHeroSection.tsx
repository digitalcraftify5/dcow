"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export interface ServicesHeroSectionProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

const SERVICE_CATEGORIES = [
  { id: "all", label: "All 15 Services" },
  { id: "development", label: "Web & Mobile Engineering" },
  { id: "design", label: "UI/UX & Brand Systems" },
  { id: "growth", label: "SEO & Digital Growth" },
  { id: "cloud", label: "Edge Infrastructure & SLA" },
  { id: "ai", label: "AI & Automations" },
];

export const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  activeCategory,
  onSelectCategory,
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
            <CyberBadge text="ENGINEERING_CATALOG // 15_SPECIALIZATION_PODS" variant="cyan" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
          >
            Architecting <span className="text-gradient-teal-cyan">Sovereign</span> Digital Solutions.
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
                <Terminal size={14} /> {"//"} SERVICES_ARCHITECTURE_SPEC
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> 100% SLA COMPLIANT
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              From bespoke 3D WebGL Web Applications and Native Flutter Mobile Apps to Sovereign Cloud CDN and AI LLM Automations. Explore our 15 specialized engineering pods engineered for high-growth enterprises.
            </p>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Request Custom Strategy Quote
            </Button>
          </motion.div>

          {/* Category Filter Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full pt-6"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap p-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl">
              {SERVICE_CATEGORIES.map((cat) => (
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

      {/* "Let's Talk" Consultation Popup Modal */}
      <LetsTalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
