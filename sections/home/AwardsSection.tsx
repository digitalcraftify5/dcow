"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { Award, Trophy, ShieldCheck, CheckCircle, Star } from "lucide-react";

export const AWARDS_LIST = [
  { title: "Awwwards Site of the Day", year: "2025", desc: "Recognized for design innovation & WebGL integration", icon: Trophy },
  { title: "FWA of the Day", year: "2025", desc: "Awarded for cutting-edge digital user experience", icon: Star },
  { title: "CSS Design Special Kudos", year: "2024", desc: "UI UX & Frontend Code Quality Excellence", icon: Award },
  { title: "ISO 27001 Security Certified", year: "2024", desc: "Certified enterprise data protection standards", icon: ShieldCheck },
  { title: "AWS Select Tier Partner", year: "2025", desc: "Verified cloud server architecture competence", icon: CheckCircle },
];

export const AwardsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 border-t border-zinc-800/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Industry Recognition"
            title="Awards & Accreditations"
            description="Honored by international design juries and certified by cloud security institutions worldwide."
            variant="purple"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {AWARDS_LIST.map((award, idx) => {
            const Icon = award.icon;
            return (
              <AnimatedWrapper key={award.title} variant="scaleUp" delay={idx * 0.08}>
                <GlassPanel glow="purple" className="p-6 text-center space-y-3 hover:scale-105 transition-transform">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Icon size={22} />
                  </div>
                  <span className="inline-block rounded-full bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-bold text-purple-300">
                    {award.year}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight">{award.title}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">{award.desc}</p>
                </GlassPanel>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
