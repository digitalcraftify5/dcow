"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Code2,
  TrendingUp,
  Globe2,
  ChevronRight,
  Layers,
  Search,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export default function WebsiteDesignPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const CAPABILITIES = [
    {
      num: "01",
      title: "Sovereign 3D Visual Identity",
      desc: "Custom 3D WebGL visual assets, luxury glassmorphism aesthetics, and bespoke cyber typography that set your brand apart.",
      icon: Palette,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      num: "02",
      title: "Conversion Funnel UX Architecture",
      desc: "Data-backed user journeys engineered to maximize engagement, lower bounce rates, and turn visitors into high-ticket clients.",
      icon: TrendingUp,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "Pixel-Perfect Multi-Device Layouts",
      desc: "Responsive layout fluid math that scales seamlessly from ultra-wide 8K displays down to native mobile smartphones.",
      icon: Globe2,
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      num: "04",
      title: "Dark Mode & Glassmorphic Design Systems",
      desc: "Tailored HSL color palettes, vibrant neon accents, and depth-layered frosted glass panels built on scalable CSS tokens.",
      icon: Layers,
      color: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      num: "05",
      title: "Sub-Second LCP Performance SEO",
      desc: "Clean semantic HTML5, lazy-loaded webp/avif image pipelines, and optimized script bundles for top Google Core Web Vitals.",
      icon: Search,
      color: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      num: "06",
      title: "Interactive Component Libraries",
      desc: "Reusable, modular React & TypeScript UI component libraries crafted for rapid future feature scaling.",
      icon: Code2,
      color: "text-pink-400",
      border: "border-pink-500/30",
    },
  ];

  const PROCESS_STEPS = [
    { step: "01", title: "Discovery & Blueprint", desc: "In-depth brand positioning research, audience mapping, and wireframe architecture." },
    { step: "02", title: "3D Cyber UI Prototyping", desc: "Crafting high-fidelity interactive design mocks with micro-animations and glass styling." },
    { step: "03", title: "Engineering & QA", desc: "Building pixel-perfect Next.js & React components with strict cross-browser validation." },
    { step: "04", title: "Sovereign Deployment", desc: "Edge CDN publishing, SSL security setup, and post-launch performance monitoring." },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Website Design", url: "/services/website-design" },
        ]}
      />
      {/* Background Cyber Canvas */}
      <CyberBackground variant="cyan" density={50} />

      {/* Ambient Glow Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Line 1 Cyber Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CyberBadge text="PREMIUM SERVICE // CUSTOM WEBSITE DESIGN" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Custom Website Design That <br />
              <span className="text-gradient-teal-cyan">Elevates Your Brand</span> & <br />
              Drives Real Conversions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              We create high-converting website designs with stunning visual aesthetics, smooth responsive layouts, and lightning-fast speed that captivate your audience and help you stand out.
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
                Start Website Project
              </Button>

              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="font-bold">
                  View Design Portfolio
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Visual: DC Eagle Logo Matching Hero Scale */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center h-80 sm:h-96 lg:h-[420px] w-full"
            >
              {/* Orbital Radar Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 lg:h-[420px] aspect-square">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-cyan-500/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border border-teal-500/20"
                  style={{ transform: "rotateX(60deg)" }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] rounded-full border border-purple-500/20"
                  style={{ transform: "rotateX(75deg) rotateY(20deg)" }}
                />
              </div>

              {/* Large DC Eagle Logo */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Digital Craftify — DC Eagle Logo"
                  width={500}
                  height={500}
                  className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] object-contain drop-shadow-[0_0_100px_rgba(0,240,255,0.6)] drop-shadow-[0_0_180px_rgba(0,210,181,0.3)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="DESIGN FEATURES // CORE CAPABILITIES" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Crafting Every Detail of Your <span className="text-gradient-teal-cyan">Digital Presence</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Our custom website design methodology combines aesthetic perfection with high-converting user experience.
          </p>
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
                      FEATURE {cap.num}
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
                  <span>QUALITY GUARANTEED</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* DESIGN PROCESS TIMELINE */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="OUR PROCESS // STEP-BY-STEP" variant="purple" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our 4-Stage <span className="text-gradient-teal-cyan">Website Design Process</span>
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
          <CyberBadge text="READY TO ELEVATE YOUR BRAND" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to Build Your <span className="text-gradient-teal-cyan">Custom Website</span>?
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Schedule a consultation with our design team and get a free, custom project quote today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Request Free Proposal
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
