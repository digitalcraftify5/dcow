"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Zap,
  ShieldCheck,
  Cpu,
  Globe,
  ChevronRight,
  Layers,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export default function AppDevelopmentPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const CAPABILITIES = [
    {
      num: "01",
      title: "Cross-Platform iOS & Android Engineering",
      desc: "Single codebase, native-level performance built with React Native and Flutter for double the speed to market.",
      icon: Smartphone,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      num: "02",
      title: "60 FPS Fluid Animation & Touch UX",
      desc: "Hardware-accelerated micro-interactions, gesture-based controls, and native haptic feedback systems.",
      icon: Zap,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "Offline-First Sync Architecture",
      desc: "Robust local SQLite and WatermelonDB databases ensuring 100% app functionality even in offline environments.",
      icon: Layers,
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      num: "04",
      title: "Biometric Auth & Military Encryption",
      desc: "FaceID, TouchID, and AES-256 encrypted local keychains keeping user credentials 100% secure.",
      icon: ShieldCheck,
      color: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      num: "05",
      title: "Push Notifications & Real-Time Socket",
      desc: "Firebase Cloud Messaging and WebSocket connections for instant live alerts and interactive messaging.",
      icon: Globe,
      color: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      num: "06",
      title: "Apple App Store & Google Play Publishing",
      desc: "Complete hands-off App Store submission management, beta TestFlight distribution, and compliance review.",
      icon: Cpu,
      color: "text-pink-400",
      border: "border-pink-500/30",
    },
  ];

  const PROCESS_STEPS = [
    { step: "01", title: "App Architecture & UX Mocks", desc: "User story mapping, wireframing, and native navigation pattern design." },
    { step: "02", title: "Native Mobile Engineering", desc: "Building native modules, state management, and cloud API endpoints." },
    { step: "03", title: "Cross-Device QA & TestFlight", desc: "Rigorous testing on physical iPhones, iPads, and Android flagship devices." },
    { step: "04", title: "App Store Deployment", desc: "Submitting to Apple App Store & Google Play with 100% approval guarantee." },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <CyberBackground variant="cyan" density={50} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_SERVICE // APP_DEVELOPMENT" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Architecting High-Performance <br />
              <span className="text-gradient-teal-cyan">iOS & Android Native</span> <br />
              Mobile Applications.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              We craft native iOS and Android mobile apps with 60 FPS fluid gesture animations, offline storage, biometric security, and seamless cloud connectivity.
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
                Start Mobile App Project
              </Button>

              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="font-bold">
                  View App Showcases
                </Button>
              </Link>
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

      {/* CORE CAPABILITIES GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="MOBILE_SPECS // NATIVE_ENGINEERING" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Engineering Mobile Experiences for <span className="text-gradient-teal-cyan">Millions of Users</span>
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

      {/* PROCESS TIMELINE */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="METHODOLOGY // MOBILE_TIMELINE" variant="purple" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            App Development <span className="text-gradient-teal-cyan">Lifecycle</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((p, idx) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 space-y-4 relative"
            >
              <div className="text-3xl font-black font-mono text-cyan-400/40">{p.step}</div>
              <h4 className="text-lg font-bold text-white">{p.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-cyan-500/40 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6">
          <CyberBadge text="LAUNCH_MOBILE_APP // SOVEREIGN" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to Launch Your <span className="text-gradient-teal-cyan">Mobile App</span>?
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Schedule a strategy call with our mobile app lead engineers and bring your app vision to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Schedule Mobile App Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
