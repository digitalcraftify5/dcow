"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, User, ArrowUpRight, ChevronRight, BookOpen, Share2, Terminal, CheckCircle2, Hash } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";
import { FeaturedArticle } from "./BlogFeaturedSection";

export interface BlogArticle {
  id: string;
  indexNum: string;
  title: string;
  badge: string;
  category: "architecture" | "ai" | "mobile" | "security" | "growth";
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

export const ARTICLES_CATALOG: BlogArticle[] = [
  {
    id: "nextjs-15-performance-guide",
    indexNum: "01",
    title: "Optimizing Next.js 15 App Router for Sub-Second TTFB",
    badge: "WEB_ARCHITECTURE",
    category: "architecture",
    excerpt: "Learn how we eliminated layout shifts, optimized dynamic React Server Components, and configured Cloudflare Workers edge caching for 99+ Lighthouse scores.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Architect",
      avatar: "/logo.png",
    },
    date: "August 4, 2026",
    readTime: "5 Min Read",
    image: "/images/service-web-dev.png",
    tags: ["Next.js 15", "Performance", "React 19", "Cloudflare CDN"],
    fullContent: [
      "Sub-second page loading speed is no longer optional for high-growth digital platforms. In Next.js 15, the App Router introduces groundbreaking caching granularities and dynamic server component rendering.",
      "At Digital Craftify, we achieved 99+ Google Lighthouse scores across desktop and mobile by adhering to three core engineering rules:",
      "1. Zero-Unused JavaScript Bundling: Using dynamic imports for heavy 3D WebGL modules.",
      "2. Cloudflare Edge HTML Caching: Serving static HTML snapshots from sub-50ms regional edge nodes.",
      "3. Font & Image Optimization: Preloading local Google Fonts and using next/image with AVIF compression.",
    ],
  },
  {
    id: "flutter-cross-platform-mastery",
    indexNum: "02",
    title: "Building 60FPS Native Apps with Flutter 3 & Custom Engines",
    badge: "MOBILE_ENGINEERING",
    category: "mobile",
    excerpt: "An architectural guide on state management, SQLite offline sync, and smooth 60fps animations for iOS and Android cross-platform applications.",
    author: {
      name: "Inna Krasnopolska",
      role: "UX Strategy Lead",
      avatar: "/logo.png",
    },
    date: "July 28, 2026",
    readTime: "6 Min Read",
    image: "/images/service-app-dev.png",
    tags: ["Flutter", "Dart", "iOS & Android", "Offline Sync"],
    fullContent: [
      "Flutter 3 has redefined cross-platform mobile development by compiling Dart directly to ARM native code. To achieve liquid-smooth 60fps performance on low-end devices, UI frame drops must be completely eliminated.",
      "Key Architecture Highlights:",
      "1. BLoC State Management: Isolating business logic from widget render trees.",
      "2. Offline SQLite Sync Engine: Storing transaction queues locally and syncing automatically upon reconnection.",
      "3. Biometric Authentication: Native iOS FaceID and Android Fingerprint hardware API hooks.",
    ],
  },
  {
    id: "iso-27001-zero-trust-security",
    indexNum: "03",
    title: "Zero-Trust Security & ISO-27001 Hardening for Cloud Platforms",
    badge: "CYBERSECURITY",
    category: "security",
    excerpt: "How Digital Craftify enforces end-to-end AES-256 data encryption, WAF firewall rules, and SOC2 compliant access controls across client platforms.",
    author: {
      name: "Arshid Hussain Dar",
      role: "Operations & Publishing Director",
      avatar: "/logo.png",
    },
    date: "July 20, 2026",
    readTime: "8 Min Read",
    image: "/images/advantage-security.png",
    tags: ["Security", "ISO-27001", "Zero-Trust", "WAF Firewall"],
    fullContent: [
      "Cyber threat vectors are increasingly targeting API endpoints and client-side data leaks. Achieving ISO-27001 and SOC2 compliance requires a continuous, zero-trust security architecture.",
      "Security Protocols Implemented:",
      "1. Automated WAF Edge Rules: Blocking SQL injection, cross-site scripting (XSS), and automated bot scraping.",
      "2. Double Encryption: AES-256 encryption at rest and TLS 1.3 in transit across all microservices.",
      "3. Automated Dependency Vulnerability Scanning: Nightly CI/CD security audits and dependency patching.",
    ],
  },
  {
    id: "conversion-rate-optimization-ui-ux",
    indexNum: "04",
    title: "Psychology of Luxury Web Design & 3x Conversion Rates",
    badge: "DIGITAL_GROWTH",
    category: "growth",
    excerpt: "Unpack visual hierarchy, dark mode glassmorphism, custom micro-interactions, and conversion psychology designed to convert high-ticket leads.",
    author: {
      name: "Inna Krasnopolska",
      role: "UX Strategy Lead",
      avatar: "/logo.png",
    },
    date: "July 12, 2026",
    readTime: "4 Min Read",
    image: "/images/service-website-design.png",
    tags: ["UI/UX", "CRO", "Luxury Design", "Conversion"],
    fullContent: [
      "Luxury web design is not just about aesthetic beauty — it is precision psychology engineered to establish instant trust and drive high-ticket conversion.",
      "Key CRO Strategies:",
      "1. Contrast & Micro-Animations: Guiding user attention toward primary call-to-action triggers using glowing cyan borders.",
      "2. Glassmorphic Depth: Creating tactile physical presence with multi-layered dark mode cards.",
      "3. Frictionless Contact Triggers: Interactive modals and 1-click vCard downloads.",
    ],
  },
  {
    id: "headless-wordpress-nextjs-integration",
    indexNum: "05",
    title: "Why Headless WordPress + Next.js is the Ultimate CMS Stack",
    badge: "HEADLESS_CMS",
    category: "architecture",
    excerpt: "Combine the content editing power of WordPress with the lightning speed and security of Next.js frontend static site generation.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Architect",
      avatar: "/logo.png",
    },
    date: "July 05, 2026",
    readTime: "5 Min Read",
    image: "/images/blog-ai-conversion.png",
    tags: ["Headless WP", "GraphQL", "Next.js", "WooCommerce"],
    fullContent: [
      "Traditional WordPress websites often suffer from slow page load times, plugin vulnerability exploits, and bloated database queries. Headless architecture solves these issues completely.",
      "By decoupling the WordPress backend and exposing data via WPGraphQL to a Next.js 15 frontend, we achieve sub-second page loads, instant search indexing, and 100% security isolation from database exploits.",
    ],
  },
  {
    id: "ai-llm-rag-customer-support",
    indexNum: "06",
    title: "Deploying 24/7 AI Customer Support Agents with Zero Hallucination",
    badge: "AI_AUTOMATIONS",
    category: "ai",
    excerpt: "A step-by-step technical guide to fine-tuning custom LLM vector stores for automated customer query resolution and lead booking.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Architect",
      avatar: "/logo.png",
    },
    date: "June 25, 2026",
    readTime: "6 Min Read",
    image: "/images/services/ai_integration.png",
    tags: ["AI Agent", "RAG", "OpenAI", "Automation"],
    fullContent: [
      "Customer support automation fails when LLMs hallucinate inaccurate information. By embedding authoritative company documentation into Pinecone vector databases, RAG systems restrict AI responses strictly to verified facts.",
      "Our AI agents achieve 98.4% resolution accuracy while reducing support ticket response times from hours to milliseconds.",
    ],
  },
  {
    id: "3d-webgl-canvas-performance",
    indexNum: "07",
    title: "Architecting High-Frame-Rate 3D WebGL Canvas Environments",
    badge: "3D_GRAPHICS",
    category: "architecture",
    excerpt: "Master 3D WebGL graphics rendering with Three.js, shaders, and GPU acceleration for ultra-luxurious interactive web interfaces.",
    author: {
      name: "Yawar Bhat",
      role: "Founder & Lead Architect",
      avatar: "/logo.png",
    },
    date: "June 18, 2026",
    readTime: "7 Min Read",
    image: "/images/advantage-architecture.png",
    tags: ["WebGL", "Three.js", "3D Graphics", "GPU Shader"],
    fullContent: [
      "Interactive 3D WebGL experiences captivate users instantly, but improper memory management can freeze browser threads.",
      "In this dispatch, we review vertex shader optimizations, texture compression techniques, and garbage collection management to maintain locked 60fps WebGL rendering across desktop and mobile devices.",
    ],
  },
  {
    id: "seo-search-engine-dominance-2026",
    indexNum: "08",
    title: "Technical SEO & Schema Markup Blueprint for Top Search Rankings",
    badge: "SEO_DOMINANCE",
    category: "growth",
    excerpt: "A tactical guide to JSON-LD structured data, sitemap routing, core web vitals optimization, and topical authority scaling.",
    author: {
      name: "Arshid Hussain Dar",
      role: "Operations & Publishing Director",
      avatar: "/logo.png",
    },
    date: "June 10, 2026",
    readTime: "5 Min Read",
    image: "/images/service-seo.png",
    tags: ["Technical SEO", "JSON-LD", "Core Web Vitals", "Ahrefs"],
    fullContent: [
      "Search engine algorithms in 2026 prioritize technical precision and domain topical authority over legacy backlink farming.",
      "We unpack how Digital Craftify's technical SEO blueprint elevates enterprise clients into top 3 Google organic rankings through structured schema injection, canonical route optimization, and instant sitemap submission.",
    ],
  },
];

export interface BlogGridSectionProps {
  activeCategory: string;
  searchQuery: string;
  selectedArticle: BlogArticle | FeaturedArticle | null;
  onSelectArticle: (article: BlogArticle | FeaturedArticle | null) => void;
}

export const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  activeCategory,
  searchQuery,
  selectedArticle,
  onSelectArticle,
}) => {
  const filteredArticles = React.useMemo(() => {
    return ARTICLES_CATALOG.filter((art) => {
      const matchCat = activeCategory === "all" || art.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div>
            <CyberBadge text="NUMBERED_DISPATCHES // KNOWLEDGEBASE_CATALOG" variant="cyan" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Numbered <span className="text-gradient-teal-cyan">Article Catalog</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            Numbered dispatches featuring 3D preview image banners, author metadata, and interactive reader modals.
          </p>
        </div>

        {/* Numbered Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArticles.map((art) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl glass-card border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] flex flex-col justify-between space-y-6 bg-zinc-950/80"
              >
                {/* Top Image Banner with Numbering Badge */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Top Left Cyber Badge & Numbering Capsule */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-cyan-500 text-zinc-950 text-xs font-mono font-black shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                      #{art.indexNum}
                    </span>
                    <CyberBadge text={art.badge} variant="cyan" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-zinc-300 backdrop-blur-md bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800">
                    <span>{art.date}</span>
                    <span className="text-emerald-400 font-bold">{art.readTime}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="px-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Author & Tags */}
                <div className="px-6 space-y-3 border-t border-zinc-800/80 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative h-7 w-7 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900">
                        <Image src={art.author.avatar} alt={art.author.name} fill className="object-contain p-0.5" />
                      </div>
                      <span className="text-xs font-bold text-zinc-200">{art.author.name}</span>
                    </div>

                    <div className="flex gap-1">
                      {art.tags.slice(0, 2).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cyber Numbered Telemetry Footer & Action Bar */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 px-1 border-t border-zinc-900 pt-2">
                    <span>DISPATCH INDEX</span>
                    <span className="text-cyan-400 font-bold">{"//"} DISPATCH #{art.indexNum}</span>
                  </div>

                  <button
                    onClick={() => onSelectArticle(art)}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-1 border border-zinc-800 hover:border-cyan-500/40"
                  >
                    <span>Read Dispatch #{art.indexNum}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FULL ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onSelectArticle(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950 p-6 sm:p-8 shadow-[0_0_70px_rgba(0,240,255,0.3)] text-zinc-100 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Banner */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <CyberBadge text={selectedArticle.badge} variant="cyan" />
                </div>

                <button
                  onClick={() => onSelectArticle(null)}
                  className="absolute top-4 right-4 z-10 rounded-xl p-2 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all border border-zinc-800"
                >
                  ✕
                </button>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-zinc-300 backdrop-blur-md bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-emerald-400" />
                    <span className="font-bold text-emerald-400">{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Title & Author */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden border border-cyan-500/50 bg-zinc-900">
                    <Image src={selectedArticle.author.avatar} alt={selectedArticle.author.name} fill className="object-contain p-0.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{selectedArticle.author.name}</h4>
                    <p className="text-[10px] font-mono text-cyan-400">{selectedArticle.author.role}</p>
                  </div>
                </div>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {selectedArticle.fullContent.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedArticle.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" onClick={() => onSelectArticle(null)}>
                  Close Article
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
