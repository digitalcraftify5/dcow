import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Globe2 } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { HeroButtons } from "./HeroButtons";
import { HeroFeatureCards } from "./HeroFeatureCards";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-6 lg:py-6">
      {/* Line 1: Cyber Badge Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CyberBadge text="WELCOME TO DIGITAL CRAFTIFY" variant="cyan" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]"
      >
        Craft <span className="text-gradient-teal-cyan">Digital Web & App</span> Solutions. Deliver <span className="text-gradient-blue-purple">Excellence.</span>
      </motion.h1>

      {/* Line 3: Cyber Capsule Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-md px-4 py-3 shadow-inner max-w-2xl"
      >
        <span className="font-mono text-cyan-400 text-xs shrink-0 font-bold">DIGITAL AGENCY</span>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
          Digital Craftify is a premier agency creating high-performing websites, mobile applications, custom software, and futuristic digital experiences that drive real business growth.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <HeroButtons />
      </motion.div>

      {/* Floating Feature Cards */}
      <HeroFeatureCards />

      {/* Trust Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="pt-6 border-t border-zinc-800/80 space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Trusted by Innovative Businesses Worldwide
        </p>
        <div className="flex flex-wrap items-center gap-6 text-zinc-500">
          <div className="flex items-center gap-1.5 font-bold text-sm hover:text-cyan-400 transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Globe2 size={16} /> AURA CLOUD
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm hover:text-cyan-400 transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Cpu size={16} /> NEXUS AI
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm hover:text-cyan-400 transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Zap size={16} /> VELOCITY
          </div>
          <div className="flex items-center gap-1.5 font-bold text-sm hover:text-cyan-400 transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Shield size={16} /> FORTRESS
          </div>
        </div>
      </motion.div>
    </div>
  );
};
