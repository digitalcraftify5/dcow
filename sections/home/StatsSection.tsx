"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

const STATS_DATA: StatItem[] = [
  { value: 150, suffix: "+", label: "Projects Delivered", desc: "Across web, app & cloud" },
  { value: 50, suffix: "+", label: "Happy Clients", desc: "Global startups & enterprises" },
  { value: 12, suffix: "+", label: "Countries Served", desc: "International client presence" },
  { value: 8, suffix: "+", label: "Years Experience", desc: "Engineering excellence" },
  { value: 100, suffix: "%", label: "Satisfaction Rate", desc: "Client approval rating" },
  { value: 24, suffix: "/7", label: "Dedicated Support", desc: "Always-on assistance" },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Proven Track Record"
            title="Impact by the Numbers"
            description="Delivering measurable growth, high performance, and outstanding digital experiences across the globe."
            variant="cyan"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {STATS_DATA.map((stat, index) => (
            <AnimatedWrapper key={stat.label} variant="scaleUp" delay={index * 0.08}>
              <GlassPanel glow="teal" className="p-4 text-center space-y-1">
                <span className="text-3xl font-extrabold text-gradient-teal-cyan sm:text-4xl">
                  {stat.value}{stat.suffix}
                </span>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{stat.label}</h4>
                <p className="text-[10px] text-zinc-400 line-clamp-1">{stat.desc}</p>
              </GlassPanel>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
