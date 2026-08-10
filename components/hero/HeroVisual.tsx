"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Code2, Cpu, TrendingUp } from "lucide-react";

const SIDE_FEATURES = [
  { label: "Modern Design", icon: Palette, color: "text-cyan-400", borderColor: "border-cyan-500/30" },
  { label: "Clean Code", icon: Code2, color: "text-purple-400", borderColor: "border-purple-500/30" },
  { label: "Performance Optimized", icon: Cpu, color: "text-teal-400", borderColor: "border-teal-500/30" },
  { label: "Results Driven", icon: TrendingUp, color: "text-emerald-400", borderColor: "border-emerald-500/30" },
];

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-center min-h-[400px] lg:min-h-full py-8">
      {/* Ambient Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute top-1/3 left-1/3 h-[380px] w-[380px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Animated Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85%] aspect-square max-h-[550px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-cyan-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20px] rounded-full border border-teal-500/10"
          style={{ transform: "rotateX(60deg)" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-40px] rounded-full border border-purple-500/10"
          style={{ transform: "rotateX(75deg) rotateY(20deg)" }}
        />
      </div>

      {/* Floating Particles / Small Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Eagle Logo — Fills the entire column height */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center w-full h-full"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Digital Craftify — DC Eagle Logo"
            width={700}
            height={700}
            className="h-auto w-auto max-w-full max-h-[75vh] object-contain drop-shadow-[0_0_80px_rgba(0,210,181,0.4)] drop-shadow-[0_0_160px_rgba(0,210,181,0.15)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Feature Cards — Above the Logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:flex flex-row gap-2.5 z-20">
        {SIDE_FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.12, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`glass-card flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg border ${item.borderColor} backdrop-blur-xl cursor-default`}
            >
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-zinc-900/80 ${item.color}`}>
                <Icon size={12} />
              </div>
              <span className="text-[10px] font-semibold text-zinc-200 whitespace-nowrap">{item.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Centerpiece Overlay Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30 shadow-2xl z-20"
      >
        <Image
          src="/logo.png"
          alt="DC Logo"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
        Interactive 3D Eagle Platform
      </motion.div>
    </div>
  );
};
