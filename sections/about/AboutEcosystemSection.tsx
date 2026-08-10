"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";

export const AboutEcosystemSection: React.FC = () => {
  const ECOSYSTEM_CARDS = [
    {
      badge: "FLAGSHIP_ENGINEERING",
      title: "Gladiolus Pro",
      subtitle: "Bespoke Digital Agency & Enterprise Web Architecture",
      link: "https://www.gladiolus.pro",
      linkText: "www.gladiolus.pro",
      desc: "Comprehensive enterprise web development, cloud edge hosting, custom brand identities, and high-converting marketing frameworks.",
      features: [
        "High-Speed Edge CDN Infrastructure",
        "Custom React & Next.js Architecture",
        "24/7 SLA Engineering Support",
      ],
      livePreview: true,
    },
    {
      badge: "MODERN_SOFTWARE_SUITE",
      title: "Misbah — Next-Gen Book Reading App",
      subtitle: "Next-Gen Book Reading App for Writer Arshid Hussain Dar",
      desc: "Immersive digital reading ecosystem created for acclaimed writer Arshid Hussain Dar, featuring dynamic typography, offline reading, and AI book recommendations.",
      features: [
        "Cross-Platform Flutter & Native Mobile App",
        "Bespoke Author Publishing Suite",
        "Fluid Micro-Animations & Dark Mode",
      ],
      livePreview: false,
    },
    {
      badge: "ENTERPRISE_PLATFORM",
      title: "Saqqa Enterprise Suite",
      subtitle: "Cloud Infrastructure & Digital Workflow Management",
      desc: "High-security digital workflow platform engineered for streamlined enterprise operations and real-time cloud data pipelines.",
      features: [
        "Zero-Trust Cloud Security Architecture",
        "Real-Time Data Analytics Pipelines",
        "API Gateway & Microservices Infrastructure",
      ],
      livePreview: false,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/60 border-t border-b border-zinc-800/80">
      <CyberBackground variant="purple" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="ECOSYSTEM_PLATFORMS // FLAGSHIP_SUITE" variant="purple" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Our Flagship <span className="text-gradient-purple-cyan">Ecosystem & Software Suite</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            Powering industry leaders and specialized digital platforms with custom-built enterprise architecture.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECOSYSTEM_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Line 1 Cyber Badge Tag */}
                <CyberBadge text={card.badge} variant="purple" />

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 font-bold">{card.subtitle}</p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  {card.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-zinc-800/80">
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-purple-400" /> Proprietary Digital Platform
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
