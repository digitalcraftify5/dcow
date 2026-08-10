"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Video,
  Play,
  ArrowRight,
  ChevronRight,
  Clock,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export default function TutorialsPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const TUTORIALS = [
    {
      title: "Hostinger Static Build & File Manager Upload Walkthrough",
      duration: "12 mins",
      level: "Beginner",
      desc: "Step-by-step video guide on extracting out_hostinger.zip into public_html and setting up clean rewrite routes.",
    },
    {
      title: "Building Glassmorphic UI Components with Tailwind & Framer Motion",
      duration: "25 mins",
      level: "Intermediate",
      desc: "Creating 60 FPS neon glow cards, HSL color tokens, and interactive backdrop blur modals.",
    },
    {
      title: "Next.js 15 Standalone Server Deployment on Hostinger Node.js",
      duration: "18 mins",
      level: "Advanced",
      desc: "Deploying server.js entry point, setting NODE_ENV, and configuring Node.js Web App Manager.",
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
              <CyberBadge text="SOVEREIGN_RESOURCE // VIDEO_TUTORIALS" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Step-by-Step Interactive <br />
              <span className="text-gradient-teal-cyan">Video Tutorials</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              Watch video walkthroughs demonstrating Hostinger deployment, Next.js architecture, glassmorphism styling, and technical SEO setups.
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

      {/* TUTORIALS GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TUTORIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900/90 transition-all shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="relative aspect-video rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                    <Play size={20} className="ml-1" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {t.duration}</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px]">{t.level}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {t.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {t.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                <span>WATCH_TUTORIAL</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
