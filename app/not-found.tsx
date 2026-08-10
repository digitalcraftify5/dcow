"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Layers,
  FileText,
  BookOpen,
  Mail,
  ArrowRight,
  Terminal,
  Radio,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export default function NotFound() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const QUICK_ROUTES = [
    { name: "Sovereign Home", href: "/", icon: Home, color: "text-cyan-400" },
    { name: "Services Catalog", href: "/services", icon: Layers, color: "text-emerald-400" },
    { name: "Resource Hub", href: "/resources", icon: FileText, color: "text-purple-400" },
    { name: "Cyber Blog", href: "/blog", icon: BookOpen, color: "text-amber-400" },
    { name: "Contact Dispatch", href: "/contact", icon: Mail, color: "text-pink-400" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      {/* Background Cyber Canvas */}
      <CyberBackground variant="cyan" density={50} />

      {/* Ambient Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-10">
        {/* Line 1 Cyber Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <CyberBadge text="SIGNAL_LOST // ERROR_404_PAGE_NOT_FOUND" variant="cyan" />
        </motion.div>

        {/* Hero Section Match: LARGE DC Eagle Logo with Orbital Radar Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center my-4 h-80 sm:h-96 lg:h-[420px] w-full"
        >
          {/* Large Orbital Radar Rings */}
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

          {/* Large Center DC Eagle Logo */}
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

        {/* 404 Headline & Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
            404 — <span className="text-gradient-teal-cyan">Route Disconnected</span>.
          </h1>

          {/* Terminal Box */}
          <div className="w-full max-w-2xl mx-auto rounded-2xl glass-card border border-cyan-500/30 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(0,240,255,0.15)] text-left space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                <Terminal size={14} /> {"//"} 404_TELEMETRY_SENTINEL
              </div>
              <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 bg-red-950/80 border border-red-800/50 px-2 py-0.5 rounded font-bold">
                <Radio size={10} /> ROUTE_UNREACHABLE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              The requested cyber URL path does not exist or has been relocated to another sovereign edge route. Select a valid system route below to restore navigation.
            </p>
          </div>
        </motion.div>

        {/* Quick Cyber Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2"
        >
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-4">
            {"//"} AVAILABLE_REAUTHENTICATION_ROUTES
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {QUICK_ROUTES.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.name}
                  href={route.href}
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-zinc-800 hover:border-cyan-500/50 bg-zinc-900/80 hover:bg-zinc-900 text-xs font-mono font-bold text-zinc-200 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-0.5"
                >
                  <div className={`p-1.5 rounded-xl bg-zinc-950 border border-zinc-800 ${route.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={14} />
                  </div>
                  <span>{route.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Action Buttons & Modal Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link href="/">
            <Button
              variant="gradient"
              size="lg"
              leftIcon={<Home size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Return to Home Page
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsTalkModalOpen(true)}
            rightIcon={<ArrowRight size={18} />}
            className="font-bold"
          >
            Dispatch Consultation
          </Button>
        </motion.div>
      </div>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
