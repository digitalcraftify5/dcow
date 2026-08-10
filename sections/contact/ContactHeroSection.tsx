"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Mail, Phone, MapPin, Terminal, ShieldCheck, Zap } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 lg:py-24">
      {/* 3D Cyber Background Particles */}
      <CyberBackground variant="cyan" density={35} />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-purple-600/12 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Line 1 Cyber Badge Tag */}
          <CyberBadge text="CONTACT_ENGINEERING // GLOBAL_HUB" variant="cyan" />

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Initiate Your <span className="text-gradient-teal-cyan">Enterprise Architecture Strategy</span>.
          </h1>

          {/* Cyber Capsule Description */}
          <div className="p-4 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(0,240,255,0.15)] max-w-2xl text-left">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 font-mono text-xs">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Terminal size={14} /> {"//"} SYS.DISPATCH {"//"}
              </span>
              <span className="text-emerald-400 text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                24/7 SLA ACTIVE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Connect directly with Digital Craftify solutions architects and executive leadership. Whether you require bespoke web architecture, Flutter mobile app development, or sovereign cloud CDN deployment, we respond within 2 hours.
            </p>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:contact@digitalcraftify.com"
              className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-cyan-400 hover:border-cyan-400 transition-colors flex items-center gap-2"
            >
              <Mail size={14} />
              <span>contact@digitalcraftify.com</span>
            </a>
            <a
              href="https://www.gladiolus.pro"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-purple-400 hover:border-purple-400 transition-colors flex items-center gap-2"
            >
              <Globe size={14} />
              <span>www.gladiolus.pro</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
