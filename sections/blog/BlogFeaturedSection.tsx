"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowUpRight, Terminal, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";

export interface FeaturedArticle {
  id: string;
  spotlightNum: string;
  title: string;
  badge: string;
  category: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  fullContent: string[];
}

export const FEATURED_ARTICLES_LIST: FeaturedArticle[] = [
  {
    id: "sovereign-ai-agent-architecture",
    spotlightNum: "LARGE SPOTLIGHT // 01",
    title: "Building Sovereign Enterprise AI Agents with Next.js 15 & Vector RAG",
    badge: "SPOTLIGHT_01 // ARCHITECTURE",
    category: "ai",
    excerpt:
      "Discover how Digital Craftify engineers custom LLM AI agent pipelines using Next.js 15 Server Actions, Pinecone vector embeddings, and sub-second streaming inference for high-growth enterprises.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Cyber Architect",
      avatar: "/logo.png",
    },
    date: "August 6, 2026",
    readTime: "7 Min Read",
    image: "/images/services/ai_integration.png",
    tags: ["Next.js 15", "AI LLM", "Pinecone RAG", "TypeScript", "Vercel AI SDK"],
    fullContent: [
      "Enterprise AI adoption has evolved from standalone chatbots into deeply integrated autonomous agent pipelines. Modern digital platforms require sub-second streaming inference, context-aware RAG vector search, and strict data privacy safeguards.",
      "In this deep dive, we explore how Digital Craftify architects sovereign AI agent systems. By pairing Next.js 15 Server Actions with Pinecone vector embeddings and Cloudflare Workers, we eliminate latency bottlenecks and ensure zero data leakage.",
      "Key Architectural Pillars:",
      "1. Vector Embedding Ingestion Pipeline: Real-time synchronization of enterprise knowledge bases into Pinecone high-dimensional vector spaces.",
      "2. Streaming Function Calling: Instant UI hydration using Vercel AI SDK with zero-delay token streaming.",
      "3. Zero-Trust Access Control: ISO-27001 compliant permission guards preventing unauthorized prompt injection and data breaches.",
    ],
  },
  {
    id: "sovereign-edge-cloud-cdn-routing",
    spotlightNum: "LARGE SPOTLIGHT // 02",
    title: "Sovereign Edge Infrastructure & Sub-50ms Global Cloud CDN Routing",
    badge: "SPOTLIGHT_02 // INFRASTRUCTURE",
    category: "architecture",
    excerpt:
      "An executive whitepaper on deploying distributed edge nodes, Cloudflare Workers, and multi-region database failover to guarantee sub-50ms TTFB globally.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Cyber Architect",
      avatar: "/logo.png",
    },
    date: "August 2, 2026",
    readTime: "9 Min Read",
    image: "/images/services/cloud_hosting.png",
    tags: ["Cloudflare Edge", "Sub-50ms TTFB", "Sovereign Cloud", "DevOps"],
    fullContent: [
      "Global latency is the silent conversion killer. When page load times exceed 1 second, user bounce rates spike by over 40%.",
      "Digital Craftify's Sovereign Cloud CDN architecture distributes serverless Next.js edge functions across 300+ global data centers, serving static HTML and dynamic data snapshots directly from the user's nearest physical location.",
      "Key Technical Highlights:",
      "1. Edge HTML Caching: Instant page hydration without origin server roundtrips.",
      "2. Multi-Region Database Read Replicas: Sub-20ms database queries using Prisma and serverless PostgreSQL.",
      "3. Automated SSL & WAF Security Shield: Zero-day DDoS protection at the network edge.",
    ],
  },
];

export interface BlogFeaturedSectionProps {
  onReadArticle: (article: FeaturedArticle) => void;
}

export const BlogFeaturedSection: React.FC<BlogFeaturedSectionProps> = ({ onReadArticle }) => {
  const [activeSpotlightIndex, setActiveSpotlightIndex] = React.useState(0);
  const currentArticle = FEATURED_ARTICLES_LIST[activeSpotlightIndex];

  return (
    <section className="relative py-12 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Spotlight Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
              FEATURED_EXECUTIVE_SPOTLIGHTS // 02_AVAILABLE
            </span>
          </div>

          <div className="flex items-center gap-2">
            {FEATURED_ARTICLES_LIST.map((art, idx) => (
              <button
                key={art.id}
                onClick={() => setActiveSpotlightIndex(idx)}
                className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeSpotlightIndex === idx
                    ? "bg-cyan-500 text-zinc-950 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                Spotlight 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Large Featured Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentArticle.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/90 p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(0,240,255,0.2)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 3D Image Banner */}
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 group">
                <Image
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <CyberBadge text={currentArticle.badge} variant="cyan" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-zinc-300 backdrop-blur-md bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{currentArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-emerald-400" />
                    <span className="font-bold text-emerald-400">{currentArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal size={14} />
                  <span className="uppercase tracking-wider font-bold">{currentArticle.spotlightNum}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight hover:text-cyan-300 transition-colors">
                  {currentArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {currentArticle.excerpt}
                </p>

                {/* Author & Tags Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b border-zinc-800/80 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-cyan-500/50 bg-zinc-900">
                      <Image
                        src={currentArticle.author.avatar}
                        alt={currentArticle.author.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{currentArticle.author.name}</h4>
                      <p className="text-[10px] font-mono text-zinc-400">{currentArticle.author.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {currentArticle.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="gradient"
                    size="md"
                    onClick={() => onReadArticle(currentArticle)}
                    rightIcon={<ArrowUpRight size={16} />}
                    className="font-bold shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                  >
                    Read Large Spotlight Dispatch
                  </Button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveSpotlightIndex((prev) => (prev === 0 ? FEATURED_ARTICLES_LIST.length - 1 : prev - 1))}
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
                      aria-label="Previous Spotlight"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveSpotlightIndex((prev) => (prev === FEATURED_ARTICLES_LIST.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
                      aria-label="Next Spotlight"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
