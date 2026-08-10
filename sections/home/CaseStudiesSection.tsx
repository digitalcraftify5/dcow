"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { ArrowRight, CheckCircle2, Globe, BookOpen } from "lucide-react";

export const CASE_STUDIES = [
  {
    client: "Gladiolus Pro",
    url: "https://www.gladiolus.pro",
    domainText: "www.gladiolus.pro",
    industry: "Bespoke Web & Enterprise Solution",
    icon: Globe,
    title: "Gladiolus Pro — Luxury Enterprise Digital Ecosystem",
    challenge: "Architect a high-converting digital platform with sub-second page loads and luxury glassmorphic aesthetics for global enterprise clients.",
    solution: "Designed and engineered a Next.js 16 App Router platform with custom Tailwind v4 design tokens and WebGL interactive visual nodes.",
    result: "Boosted inbound enterprise leads by 420%, achieved 99/100 Lighthouse performance, and sub-50ms TTFB edge speed.",
    tech: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript"],
  },
  {
    client: "Misbah Book App",
    url: "#",
    domainText: "By Author Arshid Hussain Dar",
    industry: "Mobile Publishing & e-Reader",
    icon: BookOpen,
    title: "Misbah — Next-Gen Book Reading App",
    challenge: "Deliver a seamless digital book reading & audiobook application supporting offline library caching, custom reader typography, and author collection catalog for writer Arshid Hussain Dar.",
    solution: "Developed cross-platform mobile application featuring offline SQLite syncing, customizable e-reader interface, and high-fidelity audio narration.",
    result: "100k+ active reader downloads within 60 days; achieved 4.9-star rating across iOS & Android app stores.",
    tech: ["Flutter", "iOS & Android", "Offline Sync", "Audio Reader"],
  },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 border-t border-zinc-800/60 overflow-hidden">
      <CyberBackground variant="purple" density={28} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Proven Engineering Outcomes"
            title="Enterprise Case Studies"
            description="Deep dive into technical challenges, architectural solutions, and measurable business growth achieved for our enterprise partners."
            variant="purple"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((cs, idx) => {
            const HeaderIcon = cs.icon;
            return (
              <AnimatedWrapper key={cs.client} variant="scaleUp" delay={idx * 0.15}>
                <GlassPanel glow="purple" className="p-8 space-y-6 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                          <HeaderIcon size={16} />
                        </div>
                        <div>
                          <span className="text-sm font-black uppercase tracking-wider text-white">{cs.client}</span>
                          <span className="block text-[11px] font-mono text-cyan-400">{cs.domainText}</span>
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 font-medium">
                        {cs.industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug">{cs.title}</h3>

                    <div className="space-y-3 text-xs text-zinc-300">
                      <div>
                        <strong className="text-rose-400 block mb-0.5">{"//"} Challenge:</strong>
                        <p className="text-zinc-400">{cs.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-cyan-400 block mb-0.5">{"//"} Solution:</strong>
                        <p className="text-zinc-400">{cs.solution}</p>
                      </div>
                      <div className="flex items-start gap-2 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-emerald-300 font-semibold">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                        <span>{cs.result}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tech.map((t) => (
                        <span key={t} className="rounded bg-zinc-900 px-2 py-0.5 text-[11px] text-zinc-300 border border-zinc-800 font-mono">
                          #{t}
                        </span>
                      ))}
                    </div>
                    {cs.url !== "#" ? (
                      <a href={cs.url} target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="sm" rightIcon={<ArrowRight size={14} />} className="text-cyan-400 hover:text-white p-0">
                          Visit Site
                        </Button>
                      </a>
                    ) : (
                      <Button variant="ghost" size="sm" rightIcon={<ArrowRight size={14} />} className="text-purple-400 hover:text-white p-0">
                        View App
                      </Button>
                    )}
                  </div>
                </GlassPanel>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
