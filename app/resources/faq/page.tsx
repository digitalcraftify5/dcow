"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";

export default function FAQResourcePage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const FAQS = [
    {
      q: "What is the typical timeline for custom website design and engineering?",
      a: "Our typical custom website projects range from 1 to 3 weeks depending on scope, custom 3D WebGL features, and dynamic integrations. Small business websites average 7-10 days, while enterprise Next.js applications average 2-3 weeks.",
    },
    {
      q: "How does Digital Craftify guarantee hostinger static export compatibility?",
      a: "We pre-configure all build output for Next.js static export ('output: export') with custom .htaccess directives for clean extensionless URLs, 301 HTTPS redirects, and guards against 500 internal server errors.",
    },
    {
      q: "Do you offer post-launch 24/7 website maintenance and SLA support?",
      a: "Yes! Every project includes 30 days of post-launch technical support. We also offer dedicated monthly SLA maintenance packages covering security updates, uptime monitoring, content updates, and sub-second performance audits.",
    },
    {
      q: "How do simultaneous email and WhatsApp client inquiry dispatches work?",
      a: "When a potential client submits a project inquiry on our contact forms or 'Let's Talk' modal, our system simultaneously dispatches a formatted HTML email to support@digitalcraftify.com AND opens a pre-formatted WhatsApp chat directly to Founder Tanveer Hussain (+91 91494 55143).",
    },
    {
      q: "Can you assist with domain configuration and Hostinger cPanel DNS setup?",
      a: "Absolutely. Our edge cloud hosting team handles complete DNS setup, MX email records for support@digitalcraftify.com, SSL certificate provisioning, and Hostinger file manager directory publishing.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "FAQ", url: "/resources/faq" },
        ]}
      />
      <FaqJsonLd faqs={FAQS} />
      <CyberBackground variant="cyan" density={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_RESOURCE // FREQUENTLY_ASKED_QUESTIONS" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Frequently Asked <br />
              <span className="text-gradient-teal-cyan">Questions &amp; Technical Answers</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              Everything you need to know about working with Digital Craftify, project timelines, pricing models, Hostinger deployment, and post-launch SLA maintenance.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center h-80 sm:h-96 lg:h-[420px] w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 lg:h-[420px] aspect-square">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-cyan-500/30" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-[-20px] rounded-full border border-teal-500/20" style={{ transform: "rotateX(60deg)" }} />
              </div>

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Digital Craftify Logo" width={500} height={500} className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] object-contain drop-shadow-[0_0_100px_rgba(0,240,255,0.6)]" priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION CATALOG GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-800/80 space-y-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <CyberBadge text="KNOWLEDGE_BASE // GENERAL_FAQ" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Answers to Common <span className="text-gradient-teal-cyan">Engineering Inquiries</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-zinc-800 bg-zinc-950/80 overflow-hidden transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed border-t border-zinc-900 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILED FAQ SUMMARY OVERVIEW (PROVIDES > 400 WORDS ON PAGE) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-800/80 space-y-8">
        <div className="p-8 rounded-3xl glass-card border border-cyan-500/30 bg-zinc-950/90 space-y-6 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <Terminal size={15} /> Still Have Questions? Speak with Our Founder
          </div>
          <h3 className="text-2xl font-black text-white">
            Direct Access to Founder &amp; CEO Tanveer Hussain
          </h3>
          <p>
            If you have specific technical questions regarding custom software architecture, mobile app builds, or enterprise project scope, you can reach out directly to Founder &amp; CEO Tanveer Hussain via WhatsApp at <code>+91 91494 55143</code> or by sending an email to <code>support@digitalcraftify.com</code>.
          </p>
          <div className="pt-2">
            <Button
              variant="gradient"
              size="md"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={16} />}
              className="font-bold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
