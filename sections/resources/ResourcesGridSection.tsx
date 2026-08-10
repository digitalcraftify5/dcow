"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Shield,
  FileText,
  Download,
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Lock,
  Share2,
  ChevronRight,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";

export interface ResourcesGridSectionProps {
  activeCategory: string;
  searchQuery: string;
}

export interface ResourceItem {
  id: string;
  category: "dev" | "security" | "guides" | "brand" | "sla";
  title: string;
  badge: string;
  type: string;
  size: string;
  description: string;
  image: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  glowColor: string;
  downloadUrl: string;
  isExternal?: boolean;
}

export const ALL_RESOURCES: ResourceItem[] = [
  {
    id: "nextjs-cyber-starter",
    category: "dev",
    title: "Next.js 15 Cyber Boilerplate SDK",
    badge: "OPEN_SOURCE_SDK",
    type: "GitHub Repo / ZIP",
    size: "4.2 MB",
    description: "Production-ready Next.js 15 App Router boilerplate with Tailwind v4, glassmorphism design tokens, and CyberBadges.",
    image: "/images/service-web-dev.png",
    icon: Code,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    downloadUrl: "https://github.com/digitalcraftify",
    isExternal: true,
  },
  {
    id: "iso27001-compliance-report",
    category: "security",
    title: "ISO-27001 & SOC2 Compliance Whitepaper",
    badge: "SECURITY_WHITEPAPER",
    type: "PDF Audit Report",
    size: "2.8 MB",
    description: "Comprehensive security architecture overview detailing zero-trust data encryption, WAF firewall policies, and DDoS mitigation.",
    image: "/images/advantage-security.png",
    icon: Shield,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "sovereign-architecture-guide",
    category: "guides",
    title: "Sovereign Cloud CDN Architecture Guide",
    badge: "ARCHITECTURE_GUIDE",
    type: "PDF Technical Spec",
    size: "5.1 MB",
    description: "In-depth guide on deploying sub-50ms TTFB edge CDN architectures using Cloudflare Workers, Next.js, and serverless databases.",
    image: "/images/advantage-architecture.png",
    icon: FileText,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "digital-craftify-brand-kit",
    category: "brand",
    title: "Digital Craftify Brand Identity & Vector Kit",
    badge: "BRAND_MEDIA_KIT",
    type: "ZIP (SVG, PNG, EPS)",
    size: "18.5 MB",
    description: "Official high-resolution vector logos, monograms, color palettes, typography tokens, and media press kits.",
    image: "/images/service-branding.png",
    icon: Sparkles,
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "flutter-mobile-design-system",
    category: "dev",
    title: "Flutter 3D Mobile Design System",
    badge: "MOBILE_DESIGN_SYSTEM",
    type: "Figma & Dart Package",
    size: "12.1 MB",
    description: "Bespoke Flutter widget library featuring 60fps glassmorphic cards, custom radar animations, and dark mode themes.",
    image: "/images/service-app-dev.png",
    icon: Cpu,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "sla-incident-response-framework",
    category: "sla",
    title: "24/7 SLA Engineering Incident Framework",
    badge: "SLA_PLAYBOOK",
    type: "PDF Playbook",
    size: "1.9 MB",
    description: "Emergency SLA response protocol outlining our 2-hour resolution guarantee, incident escalation paths, and uptime SLAs.",
    image: "/images/advantage-scalability.png",
    icon: Zap,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "ai-rag-pipeline-blueprint",
    category: "guides",
    title: "Enterprise AI & RAG Vector Pipeline Spec",
    badge: "AI_BLUEPRINT",
    type: "PDF & Code Snippets",
    size: "3.4 MB",
    description: "Technical blueprint for integrating OpenAI GPT-4o with Pinecone Vector DB for enterprise knowledgebase question answering.",
    image: "/images/services/ai_integration.png",
    icon: Layers,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    downloadUrl: "#",
  },
  {
    id: "seo-schema-structured-data",
    category: "dev",
    title: "JSON-LD Schema & Structured Data Library",
    badge: "SEO_SCHEMA_LIBRARY",
    type: "JSON / Code Snippets",
    size: "0.8 MB",
    description: "Pre-built JSON-LD schema templates for Organization, Services, Products, FAQ, and Article Google Rich Snippets.",
    image: "/images/service-seo.png",
    icon: BookOpen,
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    downloadUrl: "#",
  },
];

export const ResourcesGridSection: React.FC<ResourcesGridSectionProps> = ({
  activeCategory,
  searchQuery,
}) => {
  const [selectedResource, setSelectedResource] = React.useState<ResourceItem | null>(null);

  const filteredResources = React.useMemo(() => {
    return ALL_RESOURCES.filter((res) => {
      const matchCat = activeCategory === "all" || res.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div>
            <CyberBadge text="CATALOG_REPOSITORY // DOWNLOADS_&_SPECS" variant="cyan" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Explore Our <span className="text-gradient-teal-cyan">Resource Library</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            Download enterprise technical whitepapers, open-source SDKs, brand assets, and SLA engineering playbooks.
          </p>
        </div>

        {/* Resources Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredResources.map((res) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-3xl glass-card border border-zinc-800 ${res.borderColor} transition-all duration-300 hover:${res.glowColor} flex flex-col justify-between space-y-6 bg-zinc-950/80`}
                >
                  {/* Top Image Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                    <Image
                      src={res.image}
                      alt={res.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <CyberBadge text={res.badge} variant="cyan" />
                    </div>

                    <div className={`absolute bottom-4 left-4 z-10 p-2.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl ${res.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {res.description}
                    </p>
                  </div>

                  {/* Attribute Bar */}
                  <div className="px-6 border-t border-zinc-800/80 pt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Format: <strong className="text-white">{res.type}</strong></span>
                    <span>Size: <strong className="text-cyan-400">{res.size}</strong></span>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedResource(res)}
                      className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-1 border border-zinc-800 hover:border-cyan-500/40"
                    >
                      <span>Read Overview</span>
                      <ChevronRight size={14} />
                    </button>

                    <a
                      href={res.downloadUrl}
                      target={res.isExternal ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      <Button
                        variant="gradient"
                        size="sm"
                        rightIcon={res.isExternal ? <ExternalLink size={14} /> : <Download size={14} />}
                        className="px-3"
                      >
                        {res.isExternal ? "GitHub" : "Download"}
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* RESOURCE DETAILS MODAL */}
      <AnimatePresence>
        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResource(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.3)] text-zinc-100 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Banner */}
              <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <Image
                  src={selectedResource.image}
                  alt={selectedResource.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 ${selectedResource.color}`}>
                    <selectedResource.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedResource.title}</h3>
                    <p className="text-xs font-mono text-cyan-400 font-bold">{selectedResource.badge}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedResource(null)}
                  className="absolute top-4 right-4 z-10 rounded-xl p-2 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all border border-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">{selectedResource.description}</p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">FILE FORMAT</span>
                    <span className="text-cyan-400 font-bold">{selectedResource.type}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">FILE SIZE</span>
                    <span className="text-emerald-400 font-bold">{selectedResource.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-zinc-800 pt-4">
                <Button variant="outline" size="sm" onClick={() => setSelectedResource(null)}>
                  Close
                </Button>
                <a href={selectedResource.downloadUrl} target={selectedResource.isExternal ? "_blank" : "_self"}>
                  <Button
                    variant="gradient"
                    size="sm"
                    rightIcon={selectedResource.isExternal ? <ExternalLink size={14} /> : <Download size={14} />}
                  >
                    {selectedResource.isExternal ? "Open Repository" : "Download Resource"}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
