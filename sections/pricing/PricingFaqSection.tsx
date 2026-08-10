"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Terminal } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const PricingFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const FAQS = [
    {
      q: "What is included in the 24/7 SLA Engineering Support?",
      a: "Our Pro Enterprise and Custom Sovereign tiers include round-the-clock priority monitoring, dedicated engineering response teams within 15 minutes, sub-50ms Edge CDN uptime monitoring, and proactive security patching.",
    },
    {
      q: "Do I retain 100% full source code & IP ownership?",
      a: "Yes, absolutely. Upon completion and final deployment, 100% of all custom repository source code, Flutter mobile app builds, design tokens, and intellectual property rights are fully transferred to your company.",
    },
    {
      q: "Can I switch or upgrade my tier as my traffic grows?",
      a: "Yes. You can seamlessly upgrade from Starter Cyber to Pro Enterprise or Custom Sovereign at any time. Our edge architecture supports zero-downtime scaling.",
    },
    {
      q: "What payment methods and contract terms do you accept?",
      a: "We accept all major credit cards, wire transfers, ACH payments, and crypto/cyber token transactions. Annual plans receive an immediate 20% discount.",
    },
    {
      q: "How does Digital Craftify handle migration from legacy platforms?",
      a: "Our engineering pod handles complete end-to-end data, SEO, and database migrations with zero downtime guarantees.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-zinc-950/80 border-t border-zinc-800/80">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <CyberBadge text="FREQUENTLY_ASKED_QUESTIONS // FAQ" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Pricing & Contract <span className="text-gradient-teal-cyan">Knowledge Base</span>
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Everything you need to know about our enterprise web architecture plans and contracts.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.q}
                className="rounded-2xl glass-card border border-zinc-800/90 hover:border-cyan-500/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold shrink-0">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
