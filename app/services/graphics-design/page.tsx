"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ImageIcon,
  Palette,
  Sparkles,
  ChevronRight,
  Layers,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export default function GraphicsDesignPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const CAPABILITIES = [
    {
      num: "01",
      title: "3D Cyber Marketing Graphics",
      desc: "High-resolution 3D renders, neon aesthetic promotional banners, and visual assets built for ad campaigns.",
      icon: ImageIcon,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      num: "02",
      title: "Social Media Carousel & Banner Kits",
      desc: "Custom Instagram, LinkedIn, YouTube, and X graphic templates crafted for consistent visual branding.",
      icon: Palette,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "High-Converting Ad Creatives",
      desc: "Performance marketing banner suites optimized for high CTR on Meta, Google, and display networks.",
      icon: Sparkles,
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      num: "04",
      title: "Vector Illustration & Infographics",
      desc: "Custom technical infographics, data visualizations, and bespoke vector iconography.",
      icon: Layers,
      color: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      num: "05",
      title: "Print & Packaging Design",
      desc: "High-DPI print-ready CMYK collateral including brochures, merchandise, packaging, and event banners.",
      icon: ArrowRight,
      color: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      num: "06",
      title: "Corporate Pitch Decks & Presentations",
      desc: "Investor pitch decks, sales slide decks, and executive PDF presentations engineered to close enterprise deals.",
      icon: ChevronRight,
      color: "text-pink-400",
      border: "border-pink-500/30",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <CyberBackground variant="cyan" density={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_SERVICE // GRAPHICS_DESIGN" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              High-Impact Cyber <br />
              <span className="text-gradient-teal-cyan">Graphics & Visual Assets</span> <br />
              For Modern Brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              We design 3D marketing graphics, ad creatives, social carousel suites, and corporate pitch decks engineered to captivate audiences and increase brand authority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setIsTalkModalOpen(true)}
                rightIcon={<ArrowRight size={18} />}
                className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                Order Graphic Design Assets
              </Button>
            </motion.div>
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

      {/* CAPABILITIES */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="GRAPHICS_SPECS // CREATIVE_MODULES" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Visual Storytelling Engineered for <span className="text-gradient-teal-cyan">High Engagement</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`glass-card relative p-6 rounded-2xl border ${cap.border} bg-zinc-950/80 hover:bg-zinc-900/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      {"//"} MODULE_{cap.num}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 ${cap.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                  <span>SPECS_VERIFIED</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-cyan-500/40 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6">
          <CyberBadge text="CREATIVE_DESIGN // GRAPHICS" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready for Custom <span className="text-gradient-teal-cyan">Graphics & Ad Creatives</span>?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Request Creative Assets Brief
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
