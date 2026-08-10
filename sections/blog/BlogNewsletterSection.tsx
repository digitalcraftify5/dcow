"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Send, ShieldCheck, Zap, Mail } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";

export const BlogNewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950 p-8 sm:p-12 shadow-[0_0_60px_rgba(0,240,255,0.2)] text-center space-y-6">
          <CyberBadge text="EXECUTIVE_DISPATCH // VIP_NEWSLETTER" variant="cyan" />

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Subscribe to <span className="text-gradient-teal-cyan">Digital Craftify Dispatches</span>.
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto font-sans leading-relaxed">
            Get bi-weekly technical deep-dives on Next.js 15 App Router optimizations, sovereign AI agent architecture, and mobile engineering benchmarks delivered directly to your inbox.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-bold max-w-md mx-auto flex items-center justify-center gap-2">
              <ShieldCheck size={18} />
              <span>SUBSCRIPTION CONFIRMED // YOU ARE ON THE EXECUTIVE DISPATCH LIST!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800 px-4 text-xs font-mono text-white placeholder-zinc-500 outline-none focus:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all"
              />
              <Button type="submit" variant="gradient" size="md" rightIcon={<Send size={16} />} className="font-bold">
                Subscribe
              </Button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 text-[11px] font-mono text-zinc-500 pt-4">
            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-emerald-400" /> Zero Spam Guarantee</span>
            <span>|</span>
            <span className="flex items-center gap-1"><Zap size={12} className="text-cyan-400" /> Bi-Weekly Executive Briefings</span>
          </div>
        </div>
      </div>
    </section>
  );
};
