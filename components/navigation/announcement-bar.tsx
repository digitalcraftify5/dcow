"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, UserCheck } from "lucide-react";
import Link from "next/link";
import { CyberClock } from "@/components/ui/cyber-clock";
import { FounderModal } from "@/components/modals/founder-modal";

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isFounderOpen, setIsFounderOpen] = React.useState(false);

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 border-b border-cyan-500/20 bg-zinc-950/95 backdrop-blur-md py-1.5"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs font-medium sm:px-6 lg:px-8">
            {/* Left: Cyber Real-Time Clock & Calendar (dd/mm/yyyy + HH:MM:SS) */}
            <div className="flex items-center gap-3">
              <CyberClock />
            </div>

            {/* Center: Announcement Highlight */}
            <div className="flex items-center gap-2 text-center text-zinc-300">
              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30">
                <Sparkles size={10} /> New
              </span>
              <span className="hidden md:inline">
                Digital Craftify AI & Cloud Engineering Services are now live!
              </span>
              <span className="md:hidden text-[11px]">AI & Cloud Engineering Live!</span>
              <Link
                href="/services"
                className="font-semibold text-cyan-400 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-300 transition-colors text-[11px]"
              >
                Explore Solutions &rarr;
              </Link>
            </div>

            {/* Right: Founder Profile Button (Top Menu Bar) & Close */}
            <div className="flex items-center gap-2">
              <Link
                href="/founder"
                className="glass-button flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 border border-cyan-400/60 hover:border-cyan-300 hover:text-white transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-gradient-to-r from-cyan-950 via-zinc-900 to-zinc-950"
                title="Founder Profile Page"
              >
                <UserCheck size={13} className="text-cyan-400" />
                <span className="font-extrabold tracking-wider uppercase text-[10px]">FOUNDER PROFILE</span>
              </Link>

              <button
                onClick={() => setIsVisible(false)}
                className="rounded-md p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close Announcement Bar"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Founder Profile Modal */}
      <FounderModal isOpen={isFounderOpen} onClose={() => setIsFounderOpen(false)} />
    </>
  );
};
