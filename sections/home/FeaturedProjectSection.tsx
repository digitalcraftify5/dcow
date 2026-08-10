"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Paragraph, SmallText } from "@/components/ui/typography";
import { Button } from "@/components/buttons/button";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";
import { ExternalLink, ArrowRight, Gauge, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 overflow-hidden border-t border-zinc-800/60">
      <CyberBackground variant="purple" density={28} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Flagship Engineering"
            title="Featured Enterprise Platform — Gladiolus Pro"
            description="Explore how we engineered Gladiolus Pro into a luxury, high-throughput digital agency ecosystem with sub-50ms speed and glassmorphic aesthetics."
            variant="purple"
          />
        </AnimatedWrapper>

        <AnimatedWrapper variant="scaleUp">
          <GlassPanel glow="purple" className="p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
                    <Globe size={13} /> Enterprise Web Ecosystem
                  </span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/30">
                    www.gladiolus.pro
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Bespoke Enterprise Web Architecture, High-Speed Edge CDN &amp; Custom Cyber Tokens.
                </h3>

                <Paragraph className="text-sm text-zinc-300 leading-relaxed">
                  Architected from the ground up utilizing Next.js 16 App Router, React 19, and Tailwind CSS v4 to deliver zero FOUC, instant page transitions, custom WebGL nodes, and a high-converting client onboarding portal.
                </Paragraph>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl bg-zinc-900/80 p-3 text-center border border-zinc-800 shadow-inner">
                    <Gauge className="mx-auto h-5 w-5 text-emerald-400 mb-1" />
                    <span className="text-lg font-extrabold text-white">99/100</span>
                    <SmallText className="block text-[11px] text-zinc-400">Lighthouse Score</SmallText>
                  </div>
                  <div className="rounded-xl bg-zinc-900/80 p-3 text-center border border-zinc-800 shadow-inner">
                    <Zap className="mx-auto h-5 w-5 text-cyan-400 mb-1" />
                    <span className="text-lg font-extrabold text-white">&lt;45ms</span>
                    <SmallText className="block text-[11px] text-zinc-400">TTFB Edge Speed</SmallText>
                  </div>
                  <div className="rounded-xl bg-zinc-900/80 p-3 text-center border border-zinc-800 shadow-inner">
                    <ShieldCheck className="mx-auto h-5 w-5 text-purple-400 mb-1" />
                    <span className="text-lg font-extrabold text-white">420%</span>
                    <SmallText className="block text-[11px] text-zinc-400">Lead Conversion</SmallText>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Three.js WebGL", "Cloudflare Edge"].map((tech) => (
                    <span key={tech} className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-300 border border-zinc-800 font-mono">
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons with Workable Live Link */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="https://www.gladiolus.pro" target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient" size="md" rightIcon={<ExternalLink size={16} />}>
                      Live Preview (www.gladiolus.pro)
                    </Button>
                  </a>
                  <a href="/portfolio">
                    <Button variant="outline" size="md" rightIcon={<ArrowRight size={16} />}>
                      Explore Case Study
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Browser Frame Mockup */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative h-[340px] w-full max-w-lg rounded-2xl border-4 border-zinc-800 bg-zinc-950 p-4 shadow-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 border-b border-zinc-800 pb-2.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      https://www.gladiolus.pro
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-purple-950/50 rounded-xl p-6 text-center">
                    <div className="h-14 w-14 rounded-2xl gradient-teal-cyan flex items-center justify-center text-zinc-950 font-black text-2xl shadow-xl border border-white/20">
                      GP
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-white">Gladiolus Pro Platform</h4>
                      <p className="text-xs text-zinc-400 max-w-xs mt-1">Bespoke Enterprise Web Architecture, High-Speed Edge CDN &amp; Custom Cyber Tokens.</p>
                    </div>
                    <a href="https://www.gladiolus.pro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold hover:underline">
                      <Sparkles size={14} /> Open Live Site (www.gladiolus.pro)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </AnimatedWrapper>
      </div>
    </section>
  );
};
