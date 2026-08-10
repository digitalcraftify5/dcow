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
  ShieldCheck,
  Layout,
  Search,
  Zap,
  Smartphone,
  Maximize2,
  Lock,
  Bot,
  Headphones,
} from "lucide-react";

export const WHY_CHOOSE_POINTS = [
  { title: "Enterprise Quality", desc: "Rigorous software testing, clean architecture, and strict TypeScript types.", icon: ShieldCheck, image: "/images/advantage-architecture.png" },
  { title: "Modern UI Aesthetics", desc: "Awwwards-grade glassmorphism, fluid micro-interactions, and dark mode design.", icon: Layout, image: "/images/service-ui-ux.png" },
  { title: "SEO Optimized", desc: "Semantic HTML5, automated sitemaps, structured schema, and high search rankings.", icon: Search, image: "/images/service-seo.png" },
  { title: "Fast Edge Loading", desc: "Edge CDN deployment, asset optimization, and sub-second initial page loads.", icon: Zap, image: "/images/advantage-performance.png" },
  { title: "Mobile First Design", desc: "Flawlessly responsive across laptops, tablets, smartphones, and foldables.", icon: Smartphone, image: "/images/service-app-dev.png" },
  { title: "Hyper Scalable", desc: "Modular microservice architecture built to support millions of concurrent hits.", icon: Maximize2, image: "/images/advantage-scalability.png" },
  { title: "SOC2 Cyber Security", desc: "SOC2-compliant development standards, strict SSL/TLS, and data encryption.", icon: Lock, image: "/images/advantage-security.png" },
  { title: "AI Intelligence", desc: "Native integrations for LLMs, vector search databases, and automated workflows.", icon: Bot, image: "/images/blog-ai-conversion.png" },
  { title: "24/7 Global Support", desc: "Dedicated maintenance, 24/7 server monitoring, and ongoing engineering help.", icon: Headphones, image: "/images/service-web-dev.png" },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950/80 border-t border-zinc-800/60 overflow-hidden">
      <CyberBackground variant="teal" density={28} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Our Advantage"
            title="Why Leading Brands Choose Digital Craftify"
            description="We don't just build websites; we build scalable digital assets designed to convert visitors into loyal clients."
            variant="teal"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHY_CHOOSE_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <AnimatedWrapper key={point.title} variant="scaleUp" delay={index * 0.08}>
                <GlassPanel glow="cyan" className="group space-y-4 p-0 overflow-hidden border-zinc-800/80 hover:border-cyan-500/40">
                  <div className="relative h-40 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="px-6 pb-6 space-y-2.5">
                    {/* Line 1: Cyber Badge */}
                    <div>
                      <CyberBadge text="WHY CHOOSE US" variant="teal" />
                    </div>
                    {/* Line 2: Title (compact text-base) */}
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors pt-0.5">{point.title}</h3>
                    {/* Line 3: Description (compact text-xs) */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">{point.desc}</p>
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
