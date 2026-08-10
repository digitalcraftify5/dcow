"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HeroParticles } from "./HeroParticles";

export const HeroBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
      {/* Aurora Glow Mesh */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-teal-500/10 blur-[130px] opacity-70" />
      <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-teal-500/15 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />

      {/* Mouse Reactive Radial Spot Lighting */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-[100px]"
      />

      {/* Digital Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Moving Light Rays / Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]"
      />

      {/* Floating Particles */}
      <HeroParticles />
    </div>
  );
};
