"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CyberBackground } from "@/components/ui/cyber-background";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Terminal } from "lucide-react";

export const LuxuryLoader: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [statusText, setStatusText] = React.useState("INITIALIZING_CORE_ENGINE...");

  React.useEffect(() => {
    // Check if loader has already run in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("dc_loader_shown")) {
      setLoading(false);
      return;
    }

    const statuses = [
      "INITIALIZING_CORE_ENGINE...",
      "LOADING_EDGE_CDN_INFRASTRUCTURE...",
      "VERIFYING_CYBER_SECURITY_PROTOCOLS...",
      "SYNCHRONIZING_3D_EAGLE_PLATFORM...",
      "SYSTEM_ONLINE // READY",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 12;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText("SYSTEM_ONLINE // READY");
          if (typeof window !== "undefined") {
            sessionStorage.setItem("dc_loader_shown", "true");
          }
          setTimeout(() => setLoading(false), 300);
          return 100;
        }

        const idx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[idx]);
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden"
      >
        {/* 3D Cyber Particle Background */}
        <CyberBackground variant="cyan" density={45} />

        {/* Ambient Radial Cyber Glow Orbs */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[160px] animate-pulse" />
        <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-600/12 blur-[150px] translate-x-24 -translate-y-20" />
        <div className="absolute h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[130px] -translate-x-24 translate-y-24" />

        {/* Outer Cyber Grid Overlay Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative flex flex-col items-center space-y-10 z-10 px-4 text-center">
          {/* Top Cyber Badge Capsule */}
          <CyberBadge text="SYS_BOOT // SYSTEM_INITIALIZATION" variant="cyan" />

          {/* Large DC Logo with Rotating Dual Cyber Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer Clockwise Cyber Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px] rounded-full border-2 border-transparent border-t-cyan-400 border-r-emerald-400 shadow-[0_0_60px_rgba(0,240,255,0.4)] opacity-80"
            />
            {/* Inner Counter-Clockwise Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[410px] md:w-[410px] rounded-full border-2 border-transparent border-b-purple-500 border-l-cyan-300 shadow-[0_0_40px_rgba(168,85,247,0.3)] opacity-70"
            />

            {/* Pulsing Backlight Glow */}
            <div className="absolute h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] rounded-full bg-cyan-500/20 blur-[60px] animate-ping opacity-40" />

            {/* Hero Scale LARGE DC Eagle Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/logo.png"
                alt="Digital Craftify DC Logo"
                width={440}
                height={440}
                className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] object-contain drop-shadow-[0_0_60px_rgba(0,240,255,0.7)] hover:scale-105 transition-transform duration-500"
                priority
              />
            </motion.div>
          </div>

          {/* Brand Name & Tagline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Digital<span className="text-gradient-teal-cyan">Craftify</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 font-extrabold uppercase">
              Architecting Digital Excellence
            </p>
          </div>

          {/* Cyber Progress Indicator & Terminal Feed */}
          <div className="w-full max-w-md space-y-3">
            {/* Terminal Live Status Text */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-300 border-b border-zinc-800/80 pb-1.5">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Terminal size={14} className="text-cyan-400 animate-pulse" />
                <span>{"//"} {statusText}</span>
              </span>
              <span className="text-emerald-400 font-bold font-mono">{Math.min(100, progress)}%</span>
            </div>

            {/* Glowing Cyber Progress Bar */}
            <div className="relative h-2 w-full bg-zinc-900/90 rounded-full overflow-hidden border border-zinc-800 p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_20px_rgba(0,240,255,0.9)]"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
