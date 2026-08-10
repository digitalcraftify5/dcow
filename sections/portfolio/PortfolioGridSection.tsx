"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";

interface ProjectItem {
  id: string;
  badge: string;
  category: "Web Apps" | "Mobile Apps" | "Enterprise SaaS" | "AI Platforms";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  link?: string;
  linkText?: string;
}

export const PortfolioGridSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const CATEGORIES = ["All", "Web Apps", "Mobile Apps", "Enterprise SaaS", "AI Platforms"];

  const PROJECTS: ProjectItem[] = [
    {
      id: "gladiolus-pro",
      badge: "FLAGSHIP_WEB_ARCHITECTURE",
      category: "Web Apps",
      title: "Gladiolus Pro",
      subtitle: "Enterprise Digital Agency & High-Speed Edge Web Architecture",
      description:
        "Engineered bespoke web architecture, edge CDN distribution, custom cyber tokens, and conversion-focused design for Gladiolus Pro.",
      image: "/images/service-web-dev.png",
      tags: ["Next.js 15", "Edge CDN", "TypeScript", "TailwindCSS"],
      metrics: "99.9% Uptime // 3.2x Traffic Conversion",
      link: "https://www.gladiolus.pro",
      linkText: "www.gladiolus.pro",
    },
    {
      id: "misbah-app",
      badge: "MOBILE_SOFTWARE_SUITE",
      category: "Mobile Apps",
      title: "Misbah — Next-Gen Book Reader",
      subtitle: "Bespoke Mobile Reading Platform for Writer Arshid Hussain Dar",
      description:
        "Cross-platform Flutter reading app featuring dynamic typography, offline library sync, author publishing dashboard, and AI book suggestions.",
      image: "/images/service-app-dev.png",
      tags: ["Flutter", "Dart", "Firebase", "AI Recommendations"],
      metrics: "100k+ Active Readers // 4.9 Star Rating",
    },
    {
      id: "pulse-fitness",
      badge: "HEALTH_ANALYTICS",
      category: "AI Platforms",
      title: "Pulse Fitness AI Platform",
      subtitle: "Real-Time Biometric & Workout Analytics Engine",
      description:
        "AI-driven fitness dashboard analyzing wearable biometrics, workout trends, and personalized nutrition recommendations in real time.",
      image: "/images/portfolio-pulse-fitness.png",
      tags: ["React 19", "Python", "FastAPI", "TensorFlow"],
      metrics: "Sub-50ms Processing // 250k+ Workouts Tracked",
    },
    {
      id: "aura-cloud",
      badge: "ENTERPRISE_EDGE_NETWORK",
      category: "Enterprise SaaS",
      title: "Aura Cloud Systems",
      subtitle: "Multi-Tenant Edge CDN & Network Security Dashboard",
      description:
        "Enterprise cloud monitoring platform featuring live threat detection, edge latency heatmaps, and automated SSL cert provisioning.",
      image: "/images/advantage-architecture.png",
      tags: ["Next.js", "Docker", "Kubernetes", "GraphQL"],
      metrics: "< 30ms Global Latency // Zero-Trust Security",
    },
    {
      id: "saqqa-suite",
      badge: "WORKFLOW_AUTOMATION",
      category: "Enterprise SaaS",
      title: "Saqqa Enterprise Suite",
      subtitle: "High-Security Enterprise Data & Workflow Pipeline",
      description:
        "Unified cloud workflow platform streamlining enterprise asset management, team permissions, and real-time data integrations.",
      image: "/images/process-discovery.png",
      tags: ["React", "PostgreSQL", "Node.js", "Redis"],
      metrics: "5M+ Daily Transactions // ISO-27001 Ready",
    },
    {
      id: "nexus-ai",
      badge: "AGENTIC_AI_PLATFORM",
      category: "AI Platforms",
      title: "Nexus AI Studio",
      subtitle: "Autonomous Content Generation & Agentic Workflow Engine",
      description:
        "Next-generation agentic AI workbench enabling automated media generation, code refactoring, and multi-agent workflow orchestration.",
      image: "/images/blog-ai-conversion.png",
      tags: ["Python", "OpenAI API", "LangChain", "VectorDB"],
      metrics: "10x Content Speedup // Autonomous Agents",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/60 border-t border-b border-zinc-800/80">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.6)] scale-105"
                  : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-cyan-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl glass-card border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Project Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    <CyberBadge text={project.badge} variant="cyan" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-bold">{project.subtitle}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Tags & Metrics */}
                  <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30">
                      <span>{"//"} METRICS</span>
                      <span>{project.metrics}</span>
                    </div>
                  </div>

                  {/* Link / CTA */}
                  <div className="pt-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Visit Live Platform ({project.linkText})</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                        <Sparkles size={12} className="text-cyan-400" /> Enterprise Case Study Verified
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
