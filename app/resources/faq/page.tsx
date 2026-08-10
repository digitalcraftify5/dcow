"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export default function FaqPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const FAQS = [
    {
      q: "How does Digital Craftify deploy websites on Hostinger file manager?",
      a: "We export clean, static HTML5 bundles using Next.js static export (`output: 'export'`). You simply upload the generated `out` folder contents directly into Hostinger's `public_html` via File Manager or FTP. Our built-in guarded `.htaccess` file handles extensionless URLs (`/services`, `/blog`, `/contact`) with 0 server errors.",
    },
    {
      q: "Does Digital Craftify support Node.js server deployment on Hostinger?",
      a: "Yes! For Hostinger plans supporting Node.js (Web Application Manager or VPS), we configure Next.js in `standalone` mode (`output: 'standalone'`) along with a custom `server.js` startup file for full server-side rendering, streaming APIs, and background Node.js processes.",
    },
    {
      q: "What technologies are used in your cyber web applications?",
      a: "We build with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion for 60 FPS micro-animations, and Canvas 2D/WebGL for interactive 3D particle backdrops.",
    },
    {
      q: "How long does a custom bespoke website design project take?",
      a: "Standard custom websites take 2 to 4 weeks depending on feature scope. Enterprise platforms with 15+ custom service modules or AI integrations take 4 to 6 weeks from architecture blueprint to live deployment.",
    },
    {
      q: "How do you ensure sub-second page loads and 95+ Google PageSpeed scores?",
      a: "We use automated WebP/AVIF image pipelines, aggressive CSS/JS bundle splitting, static prerendering, and edge CDN distribution to guarantee sub-second LCP times and 95+ Core Web Vitals performance.",
    },
    {
      q: "Do you offer ongoing 24/7 maintenance and security SLAs?",
      a: "Yes, our dedicated maintenance plans include 24/7 synthetic uptime ping telemetry, zero-day security patching, daily off-site backups, and guaranteed 15-minute emergency response SLAs.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "FAQ", url: "/resources/faq" },
        ]}
      />
      <CyberBackground variant="cyan" density={50} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px] pointer-events-none" />

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
              <span className="text-gradient-teal-cyan">Engineering Questions</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              Get immediate answers to common technical questions regarding deployment, Hostinger compatibility, performance optimization, and project timelines.
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
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px] rounded-full border border-purple-500/20" style={{ transform: "rotateX(75deg) rotateY(20deg)" }} />
              </div>

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Digital Craftify — DC Eagle Logo" width={500} height={500} className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] object-contain drop-shadow-[0_0_100px_rgba(0,240,255,0.6)] drop-shadow-[0_0_180px_rgba(0,210,181,0.3)]" priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="TELEMETRY_ANSWERS // ACCORDION" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Answers to Common <span className="text-gradient-teal-cyan">Inquiries</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="glass-card rounded-2xl border border-zinc-800 bg-zinc-950/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle size={18} className="text-cyan-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans border-t border-zinc-800/60">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-cyan-500/40 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6">
          <CyberBadge text="STILL_HAVE_QUESTIONS // ASK_ENGINEERS" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Have a Specific <span className="text-gradient-teal-cyan">Technical Question</span>?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Ask an Architect Directly
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
