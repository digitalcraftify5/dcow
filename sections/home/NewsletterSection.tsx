"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/buttons/button";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Mail, Send, CheckCircle2, Terminal } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 bg-zinc-950/90 border-t border-zinc-800/80 overflow-hidden">
      <CyberBackground variant="purple" density={28} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper variant="fadeIn">
          <GlassPanel glow="purple" className="p-8 lg:p-12 text-center space-y-8 border-purple-500/30 shadow-2xl relative">
            {/* Top Cyber Badge Tag */}
            <div className="flex justify-center">
              <CyberBadge text="CYBER_INTELLIGENCE_DISPATCH" variant="purple" />
            </div>

            <div className="space-y-4 max-w-xl mx-auto">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Mail size={28} />
              </div>

              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Join the <span className="text-gradient-teal-cyan">Digital Craftify</span> Insider
              </h3>

              {/* Cyber Capsule Description */}
              <div className="inline-flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-md px-5 py-3 shadow-inner">
                <span className="font-mono text-purple-400 text-xs shrink-0 font-bold">{"//"} DISPATCH.SPEC {"//"}</span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  Receive curated articles on React 19, Three.js 3D shaders, technical SEO, and agency architecture.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 px-6 py-3 text-xs font-semibold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono">
                <CheckCircle2 size={18} /> Subscribed successfully! Welcome to the dispatch network.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 rounded-xl bg-zinc-950/90 px-4 font-mono text-xs text-white border border-zinc-800 outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-zinc-600">SYS.ON</span>
                </div>
                <Button type="submit" variant="gradient" size="md" rightIcon={<Send size={14} />}>
                  Subscribe
                </Button>
              </form>
            )}
          </GlassPanel>
        </AnimatedWrapper>
      </div>
    </section>
  );
};
