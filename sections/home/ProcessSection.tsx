"use client";

import * as React from "react";
import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Paragraph } from "@/components/ui/typography";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import {
  Compass,
  FileSearch,
  MapPin,
  LayoutGrid,
  Paintbrush,
  Code,
  CheckCircle2,
  Rocket,
  Wrench,
} from "lucide-react";

export const PROCESS_STAGES = [
  { step: "01", title: "Discovery", desc: "Goal alignment & business analysis", icon: Compass, image: "/images/process-discovery.png" },
  { step: "02", title: "Research", desc: "Audience & competitor insights", icon: FileSearch, image: "/images/service-seo.png" },
  { step: "03", title: "Planning", desc: "Architecture & roadmap definition", icon: MapPin, image: "/images/advantage-architecture.png" },
  { step: "04", title: "Wireframe", desc: "UX flows & layout blueprinting", icon: LayoutGrid, image: "/images/service-ui-ux.png" },
  { step: "05", title: "UI Design", desc: "Luxury glassmorphic prototyping", icon: Paintbrush, image: "/images/service-website-design.png" },
  { step: "06", title: "Development", desc: "Fullstack Next.js & API coding", icon: Code, image: "/images/service-web-dev.png" },
  { step: "07", title: "Testing", desc: "QA, performance & security audit", icon: CheckCircle2, image: "/images/advantage-security.png" },
  { step: "08", title: "Deployment", desc: "Edge CDN cloud launch", icon: Rocket, image: "/images/advantage-performance.png" },
  { step: "09", title: "Maintenance", desc: "24/7 monitoring & SLA support", icon: Wrench, image: "/images/advantage-scalability.png" },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 border-t border-zinc-800/60 overflow-hidden">
      <CyberBackground variant="purple" density={30} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Systematic Engineering"
            title="Our 9-Step Development Process"
            description="A transparent, predictable workflow engineered to move projects from initial concept to high-speed cloud production seamlessly."
            variant="purple"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROCESS_STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <AnimatedWrapper key={stage.step} variant="scaleUp" delay={index * 0.08}>
                <GlassPanel glow="purple" className="relative group p-0 space-y-4 overflow-hidden border-zinc-800/80 hover:border-purple-500/40">
                  <div className="relative h-36 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <span className="absolute top-3 right-4 font-mono text-3xl font-black text-purple-400/50 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                      {stage.step}
                    </span>
                    <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950/80 backdrop-blur-md border border-purple-500/40 text-purple-400">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="px-6 pb-6 space-y-3">
                    {/* Line 1: Cyber Badge */}
                    <div>
                      <CyberBadge text={`STEP ${stage.step}`} variant="purple" />
                    </div>
                    {/* Line 2: Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors pt-1">{stage.title}</h3>
                    {/* Line 3: Description */}
                    <Paragraph className="text-sm text-zinc-300 leading-relaxed">{stage.desc}</Paragraph>
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
