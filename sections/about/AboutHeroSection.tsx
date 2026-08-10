"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe, Terminal, Award, Users, Cpu } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
      {/* 3D Cyber Background Particles */}
      <CyberBackground variant="cyan" density={35} />

      {/* Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-purple-600/12 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Line 1 Cyber Badge Tag */}
          <CyberBadge text="ABOUT DIGITAL CRAFTIFY" variant="cyan" />

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Building <span className="text-gradient-teal-cyan">High-Performing Web & Mobile Solutions</span> That Grow Brands.
          </h1>

          {/* Cyber Capsule Description */}
          <div className="p-4 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(0,240,255,0.15)] max-w-2xl text-left">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 font-mono text-xs">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Terminal size={14} /> OUR MISSION
              </span>
              <span className="text-emerald-400 text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                100% OPERATIONAL
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Digital Craftify is a premier digital agency dedicated to creating high-converting websites, mobile applications, cloud infrastructure, and AI-driven business solutions for innovative companies worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="gradient" size="lg" rightIcon={<ArrowRight size={16} />}>
                Work With Us
              </Button>
            </Link>
            <a href="https://www.gladiolus.pro" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" rightIcon={<Globe size={16} />}>
                Gladiolus Pro Suite
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 pt-6">
          <div className="p-5 rounded-2xl glass-card border border-zinc-800/80 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold">PROJECTS</span>
              <Award size={16} className="text-cyan-400" />
            </div>
            <div className="text-3xl font-black text-white">150+</div>
            <p className="text-xs text-zinc-400">Digital Solutions Delivered</p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-zinc-800/80 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">UPTIME</span>
              <Zap size={16} className="text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white">99.9%</div>
            <p className="text-xs text-zinc-400">Cloud Infrastructure Uptime</p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-zinc-800/80 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 font-bold">TECH STACK</span>
              <Cpu size={16} className="text-purple-400" />
            </div>
            <div className="text-3xl font-black text-white">10+</div>
            <p className="text-xs text-zinc-400">Modern Frameworks & Tools</p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-zinc-800/80 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold">CLIENTS</span>
              <Users size={16} className="text-cyan-400" />
            </div>
            <div className="text-3xl font-black text-white">100%</div>
            <p className="text-xs text-zinc-400">Client Satisfaction Benchmark</p>
          </div>
        </div>
      </div>
    </section>
  );
};
