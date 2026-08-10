"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

interface CaseStudyItem {
  id: string;
  badge: string;
  category: "FinTech & Cloud" | "Mobile Apps (Flutter)" | "E-Commerce Architecture" | "AI & Machine Learning";
  title: string;
  client: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  link?: string;
  linkText?: string;
}

export const CaseStudiesGridSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const CATEGORIES = [
    "All",
    "FinTech & Cloud",
    "Mobile Apps (Flutter)",
    "E-Commerce Architecture",
    "AI & Machine Learning",
  ];

  const CASE_STUDIES: CaseStudyItem[] = [
    {
      id: "gladiolus-pro",
      badge: "FLAGSHIP_CASE_STUDY",
      category: "E-Commerce Architecture",
      title: "Gladiolus Pro: High-Speed Edge Web Architecture",
      client: "Gladiolus Pro Team (Sales Director Yawar Bhat)",
      challenge: "Legacy web load times were bottlenecking high-intent enterprise lead conversions.",
      solution: "Engineered next-gen Next.js 15 App Router architecture with edge CDN caching & custom cyber tokens.",
      image: "/images/service-web-dev.png",
      tags: ["Next.js 15", "Edge CDN", "TypeScript", "TailwindCSS"],
      metrics: [
        { label: "Conversion Lift", value: "+340%" },
        { label: "Edge TTFB", value: "< 45ms" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
      link: "https://www.gladiolus.pro",
      linkText: "www.gladiolus.pro",
    },
    {
      id: "misbah-app",
      badge: "MOBILE_PUBLISHING_SUITE",
      category: "Mobile Apps (Flutter)",
      title: "Misbah: Scaling Next-Gen Mobile Reading Ecosystem",
      client: "Writer & Product Visionary Arshid Hussain Dar",
      challenge: "Required an offline-first, high-performance mobile app for seamless digital book consumption.",
      solution: "Developed a cross-platform Flutter application with custom typography rendering & AI recommendations.",
      image: "/images/service-app-dev.png",
      tags: ["Flutter", "Dart", "Firebase", "AI Recommendations"],
      metrics: [
        { label: "Active Readers", value: "100k+" },
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Page Render", value: "< 100ms" },
      ],
    },
    {
      id: "aura-cloud",
      badge: "ZERO_TRUST_INFRASTRUCTURE",
      category: "FinTech & Cloud",
      title: "Aura Cloud: Multi-Tenant Edge Security Platform",
      client: "Aura Cloud Systems Infrastructure",
      challenge: "High-latency security handshakes and multi-region deployment bottlenecks.",
      solution: "Architected zero-trust microservices gateway with automated SSL provisioning and live threat detection.",
      image: "/images/advantage-architecture.png",
      tags: ["Next.js", "Docker", "Kubernetes", "GraphQL"],
      metrics: [
        { label: "Daily Requests", value: "5M+" },
        { label: "Global Latency", value: "< 30ms" },
        { label: "Security SLA", value: "ISO-27001" },
      ],
    },
    {
      id: "bioscience-lab",
      badge: "RESEARCH_ANALYTICS",
      category: "AI & Machine Learning",
      title: "Bioscience Lab: High-Precision Data Analytics Engine",
      client: "Bioscience Engineer Inna Krasnopolska",
      challenge: "Processing massive genomic sequencing datasets with low latency and HIPAA compliance.",
      solution: "Built a Python & FastAPI backend with WebGL data visualization frontends and cloud encryption pipelines.",
      image: "/images/process-discovery.png",
      tags: ["Python", "FastAPI", "React 19", "WebGL"],
      metrics: [
        { label: "Processing Speed", value: "100x" },
        { label: "Data Integrity", value: "100%" },
        { label: "HIPAA Certified", value: "Verified" },
      ],
    },
    {
      id: "pulse-fitness",
      badge: "BIOMETRIC_AI_ENGINE",
      category: "AI & Machine Learning",
      title: "Pulse Fitness: Real-Time Workout Analytics Engine",
      client: "Pulse Fitness Ecosystem",
      challenge: "Real-time biometric data ingestion for over 250,000 active concurrent fitness enthusiasts.",
      solution: "Designed a real-time WebSocket telemetry pipeline integrated with TensorFlow machine learning models.",
      image: "/images/portfolio-pulse-fitness.png",
      tags: ["React 19", "TensorFlow", "WebSockets", "FastAPI"],
      metrics: [
        { label: "Active Users", value: "250k+" },
        { label: "Telemetry Latency", value: "< 50ms" },
        { label: "User Retention", value: "88%" },
      ],
    },
  ];

  const filteredCaseStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/60 border-t border-b border-zinc-800/80">
      <CyberBackground variant="purple" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] scale-105"
                  : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl glass-card border border-zinc-800/80 hover:border-purple-500/40 transition-all p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group shadow-xl"
              >
                {/* Left Column: Image Banner */}
                <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-full w-full rounded-xl overflow-hidden bg-zinc-900 min-h-[240px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <CyberBadge text={study.badge} variant="purple" />
                  </div>
                </div>

                {/* Right Column: Case Details & Metrics */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                      Client: {study.client}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                      <span className="text-amber-400 font-mono font-bold text-[10px] uppercase">
                        {"//"} THE_CHALLENGE
                      </span>
                      <p className="text-zinc-300">{study.challenge}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                      <span className="text-emerald-400 font-mono font-bold text-[10px] uppercase">
                        {"//"} OUR_SOLUTION
                      </span>
                      <p className="text-zinc-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-center">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="space-y-0.5">
                        <div className="text-base sm:text-lg font-black text-white font-mono">{m.value}</div>
                        <div className="text-[10px] font-mono text-purple-300 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags & External Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-purple-300 bg-purple-950/70 border border-purple-500/30 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {study.link ? (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <span>Visit Live ({study.linkText})</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-purple-400" /> Audited Case Study
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
