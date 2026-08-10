"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Terminal,
  Sparkles,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export default function BlogResourcePage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const POSTS = [
    {
      title: "How to Fix Hostinger Next.js 500 Server Errors & Hydration Exceptions",
      date: "August 7, 2026",
      readTime: "5 min read",
      category: "HOSTINGER_DEPS",
      excerpt: "Step-by-step technical guide for configuring guarded .htaccess rules and static export hydration tokens for Hostinger static file manager hosting.",
    },
    {
      title: "Architecting 60 FPS Cyber Glassmorphic UI Systems in React 19",
      date: "August 5, 2026",
      readTime: "8 min read",
      category: "UI_UX_DESIGN",
      excerpt: "Building high-performance Canvas particle backdrops and Framer Motion micro-interactions without causing DOM re-render lag.",
    },
    {
      title: "The 2026 Technical SEO Blueprint for Top Google Search Rankings",
      date: "August 2, 2026",
      readTime: "6 min read",
      category: "SEO_ENGINEERING",
      excerpt: "Optimizing Core Web Vitals, JSON-LD structured schema markup, and LCP metrics for competitive buyer-intent search queries.",
    },
    {
      title: "Building Resilient Full-Stack Microservices with Next.js 15 & Node",
      date: "July 28, 2026",
      readTime: "7 min read",
      category: "FULLSTACK_DEV",
      excerpt: "Decoupling monolithic web applications into high-speed API edge routes with Redis caching and PostgreSQL database pooling.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Blog", url: "/resources/blog" },
        ]}
      />
      <CyberBackground variant="cyan" density={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_RESOURCE // CYBER_ENGINEERING_BLOG" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Engineering Insights & <br />
              <span className="text-gradient-teal-cyan">Technical Web Architecture Articles</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              Explore our technical engineering publication featuring in-depth tutorials on Next.js 15, Hostinger static export deployment, glassmorphism UI design, and Core Web Vitals SEO optimization.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center h-80 sm:h-96 lg:h-[420px] w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 lg:h-[420px] aspect-square">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-cyan-500/30" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-[-20px] rounded-full border border-teal-500/20" style={{ transform: "rotateX(60deg)" }} />
              </div>

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Digital Craftify Logo" width={500} height={500} className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] object-contain drop-shadow-[0_0_100px_rgba(0,240,255,0.6)]" priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOG POSTS CATALOG GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="PUBLICATION_CATALOG // RECENT_ARTICLES" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Published Engineering & <span className="text-gradient-teal-cyan">Design Deep-Dives</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            Written by lead engineers and solutions architects at Digital Craftify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {POSTS.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900/90 transition-all shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="bg-cyan-950 border border-cyan-800 px-2.5 py-1 rounded font-bold">{"//"} {post.category}</span>
                  <span className="flex items-center gap-1 text-zinc-500 font-bold"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> Published {post.date}</span>
                <span className="flex items-center gap-1 text-emerald-400 group-hover:text-emerald-300">
                  Read Article <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RICH EDITORIAL SECTION (ENSURES > 400 WORDS ON PAGE) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-800/80 space-y-8">
        <div className="p-8 rounded-3xl glass-card border border-cyan-500/30 bg-zinc-950/90 space-y-6 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <Terminal size={15} /> Editorial Standards &amp; Peer Review
          </div>
          <h3 className="text-2xl font-black text-white">
            Engineering Rigor in Every Technical Article
          </h3>
          <p>
            At Digital Craftify, our engineering publication is dedicated to solving real-world production challenges. From optimizing Next.js static exports for Hostinger server deployments to building zero-lag 60 FPS glassmorphic user interfaces in React 19, every article undergoes rigorous testing in our production environment.
          </p>
          <p>
            We cover key modern technologies including Next.js 15 App Router, TypeScript 5, Tailwind CSS, Framer Motion animations, edge CDN hosting, and technical SEO schema architectures. Check back weekly for new technical breakdowns and architecture guides.
          </p>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
