"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  RefreshCw,
  Code2,
  Smartphone,
  Layout,
  Search,
  TrendingUp,
  Palette,
  Sparkles,
  Zap,
  Server,
  Shield,
  FileCode,
  Headphones,
  Bot,
  CheckCircle2,
  Clock,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export interface ServicesGridSectionProps {
  activeCategory: string;
}

export interface ServiceDetail {
  id: string;
  category: "development" | "design" | "growth" | "cloud" | "ai";
  title: string;
  badge: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  glowColor: string;
  techStack: string[];
  deliverables: string[];
  executionTime: string;
  slaMetric: string;
}

export const ALL_15_SERVICES: ServiceDetail[] = [
  {
    id: "website-design",
    category: "design",
    title: "Website Design",
    badge: "BESPOKE_UI",
    shortDesc: "Bespoke high-converting layouts with 3D WebGL interactions and ultra-modern aesthetics.",
    longDesc: "Custom website design engineered to capture high-value enterprise leads. Built with custom typography, glassmorphism, micro-animations, and conversion rate optimization (CRO).",
    image: "/images/service-website-design.png",
    icon: Layout,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    techStack: ["Figma 3D", "WebGL", "Tailwind CSS", "Framer Motion"],
    deliverables: ["Custom Desktop & Mobile UI", "Interactive Prototype", "Design Tokens", "Design System"],
    executionTime: "1 - 2 Weeks",
    slaMetric: "100% Mobile Responsive",
  },
  {
    id: "website-redesign",
    category: "design",
    title: "Website Redesign",
    badge: "LEGACY_MODERNIZATION",
    shortDesc: "Modernize slow legacy platforms into ultra-fast, high-converting Next.js architectures.",
    longDesc: "Complete architectural overhaul of legacy websites. We eliminate technical debt, upgrade page speed to 95+ Lighthouse scores, and transform outdated UI into futuristic cyber interfaces.",
    image: "/images/services/website_redesign.png",
    icon: RefreshCw,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    techStack: ["Next.js 15", "React 19", "Lighthouse 95+", "Vercel Edge"],
    deliverables: ["Full UX Audit", "Codebase Migration", "SEO Route Preservation", "Page Speed Optimization"],
    executionTime: "2 - 3 Weeks",
    slaMetric: "Sub-1s Page Load Time",
  },
  {
    id: "web-development",
    category: "development",
    title: "Web Development",
    badge: "FULLSTACK_NEXTJS",
    shortDesc: "Scalable Fullstack React & Next.js enterprise web applications with serverless API integrations.",
    longDesc: "Enterprise-grade web application engineering. We craft robust frontend systems powered by Next.js 15 App Router, TypeScript, custom state management, and resilient backend microservices.",
    image: "/images/service-web-dev.png",
    icon: Code2,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    deliverables: ["Fullstack Source Code", "REST & GraphQL APIs", "Admin Dashboard", "Security Hardening"],
    executionTime: "2 - 4 Weeks",
    slaMetric: "99.99% Code Uptime",
  },
  {
    id: "app-development",
    category: "development",
    title: "App Development",
    badge: "FLUTTER_CROSS_PLATFORM",
    shortDesc: "Cross-platform iOS, Android, and Flutter native mobile applications with offline sync.",
    longDesc: "High-performance native mobile apps built with Flutter and Dart. Engineered for smooth 60fps animations, biometric authentication, offline database synchronization, and push notifications.",
    image: "/images/service-app-dev.png",
    icon: Smartphone,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    techStack: ["Flutter", "Dart", "Firebase", "iOS & Android SDK", "SQLite"],
    deliverables: ["iOS App Store Build", "Android APK & Bundle", "Push Notification Engine", "App Store Publishing"],
    executionTime: "3 - 5 Weeks",
    slaMetric: "60 FPS Native Performance",
  },
  {
    id: "ui-ux",
    category: "design",
    title: "UI / UX Research",
    badge: "HUMAN_CENTERED",
    shortDesc: "User-centric research, design systems, interactive wireframes, and prototype testing.",
    longDesc: "Deep user behavior analysis, wireframing, and design system creation. We map out complex user journeys to streamline user onboarding and maximize app retention rates.",
    image: "/images/service-ui-ux.png",
    icon: Layout,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    techStack: ["Figma Enterprise", "UserTesting", "Hotjar Analytics", "Design Tokens"],
    deliverables: ["User Journey Maps", "Wireframes", "Design System UI Kit", "Usability Audit Report"],
    executionTime: "1 - 2 Weeks",
    slaMetric: "Validated Conversion UX",
  },
  {
    id: "seo",
    category: "growth",
    title: "SEO Optimization",
    badge: "ORGANIC_DOMINANCE",
    shortDesc: "Search engine optimization, technical schema markup, and organic search ranking growth.",
    longDesc: "Data-driven search engine optimization. We optimize core web vitals, implement JSON-LD schema metadata, build high-authority backlink strategies, and rank targeted commercial keywords.",
    image: "/images/service-seo.png",
    icon: Search,
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    techStack: ["Ahrefs", "Google Search Console", "JSON-LD Schema", "Sitemap Indexing"],
    deliverables: ["Technical SEO Audit", "On-Page Keyword Optimization", "Structured Data", "Rank Tracking Dashboard"],
    executionTime: "Ongoing / Monthly",
    slaMetric: "Top 3 Ranking Acceleration",
  },
  {
    id: "digital-marketing",
    category: "growth",
    title: "Digital Marketing",
    badge: "PERFORMANCE_ADS",
    shortDesc: "Performance marketing, paid ad campaigns, lead funnel architecture, and growth analytics.",
    longDesc: "Omnichannel performance marketing built to drive qualified sales leads. We design high-converting landing pages, run targeted Google/Meta ad campaigns, and track real-time ROAS.",
    image: "/images/blog-ai-conversion.png",
    icon: TrendingUp,
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    techStack: ["Google Ads", "Meta Business Suite", "Google Analytics 4", "Custom Conversion Pixels"],
    deliverables: ["Ad Copy & Creatives", "Campaign Funnel Build", "ROAS Dashboard", "A/B Conversion Testing"],
    executionTime: "Weekly / Monthly",
    slaMetric: "3x+ Target ROAS Return",
  },
  {
    id: "branding",
    category: "design",
    title: "Corporate Branding",
    badge: "VISUAL_IDENTITY",
    shortDesc: "Visual identity systems, brand guidelines, typography standards, and corporate storytelling.",
    longDesc: "Establish a powerful corporate identity that commands industry authority. We build cohesive brand identity manuals, color tokens, visual guidelines, and digital brand collateral.",
    image: "/images/service-branding.png",
    icon: Palette,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    techStack: ["Adobe Illustrator", "Brand Manual", "Custom Typography", "Color Tokens"],
    deliverables: ["Complete Brand Book", "Logo Suite & Variants", "Brand Typography Kit", "Social Media Templates"],
    executionTime: "1 - 2 Weeks",
    slaMetric: "Vector Scalability 100%",
  },
  {
    id: "graphics-design",
    category: "design",
    title: "Graphics Design & 3D",
    badge: "HIGH_END_COLLATERAL",
    shortDesc: "High-end marketing collateral, 3D product renders, pitch decks, and digital media assets.",
    longDesc: "Visually stunning 3D graphic design, pitch decks, and marketing assets crafted for enterprise presentations, product launches, and high-impact digital advertising.",
    image: "/images/advantage-architecture.png",
    icon: Sparkles,
    color: "text-pink-400",
    borderColor: "hover:border-pink-500/50",
    glowColor: "shadow-[0_0_35px_rgba(236,72,153,0.25)]",
    techStack: ["Blender 3D", "Photoshop", "Illustrator", "Pitch Deck Engine"],
    deliverables: ["3D Product Renders", "Enterprise Pitch Deck", "Social Media Banners", "Print Ready Vector Assets"],
    executionTime: "3 - 7 Days",
    slaMetric: "4K UHD Render Resolution",
  },
  {
    id: "logo-design",
    category: "design",
    title: "Logo Design",
    badge: "ICONIC_SYMBOLS",
    shortDesc: "Iconic vector logo marks, brand monograms, and minimalist corporate symbol design.",
    longDesc: "Bespoke vector logo design crafted for timeless recognition. Every logo mark is precision-engineered on geometric grids to ensure versatility across web, mobile, print, and physical signage.",
    image: "/images/service-branding.png",
    icon: Zap,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    techStack: ["Vector Grid Architecture", "SVG Monograms", "Favicon Formats"],
    deliverables: ["Primary & Secondary Logos", "Monogram & Favicon Suite", "SVG, EPS, PNG, PDF Files", "Brand Color Guidelines"],
    executionTime: "3 - 5 Days",
    slaMetric: "Infinite Vector Scaling",
  },
  {
    id: "hosting",
    category: "cloud",
    title: "Cloud & Edge Hosting",
    badge: "SOVEREIGN_INFRASTRUCTURE",
    shortDesc: "High-speed edge cloud servers, sub-50ms TTFB global CDN distribution, and SSL security.",
    longDesc: "Sovereign cloud hosting powered by Cloudflare Edge CDN, automated SSL certificates, sub-50ms latency distribution, and zero-downtime automated deployments.",
    image: "/images/services/cloud_hosting.png",
    icon: Server,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    techStack: ["Cloudflare Workers", "AWS Serverless", "Vercel Enterprise", "Sub-50ms Edge CDN"],
    deliverables: ["Edge CDN Deployment", "Custom Domain SSL", "Automated Daily Backups", "Global DNS Routing"],
    executionTime: "24 Hours Setup",
    slaMetric: "Sub-50ms Global TTFB",
  },
  {
    id: "maintenance",
    category: "cloud",
    title: "SLA Maintenance & Security",
    badge: "24/7_UPTIME_GUARD",
    shortDesc: "24/7 uptime monitoring, security vulnerability patching, and SLA engineering maintenance.",
    longDesc: "Continuous engineering support and security monitoring. We protect your application from zero-day vulnerabilities, patch dependencies, and provide emergency 2-hour response SLAs.",
    image: "/images/advantage-security.png",
    icon: Shield,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    techStack: ["24/7 Automated Sentinel", "Dependency Patching", "WAF Firewall Rules"],
    deliverables: ["Monthly Security Audit", "Uptime & Performance Reports", "Emergency Hotfix SLA", "Database Backups"],
    executionTime: "Continuous / 24/7 SLA",
    slaMetric: "99.99% Uptime Guarantee",
  },
  {
    id: "wordpress",
    category: "development",
    title: "Headless WordPress",
    badge: "HEADLESS_CMS",
    shortDesc: "Headless & custom WordPress themes, WooCommerce stores, and high-speed plugin engineering.",
    longDesc: "Modernize WordPress with Headless GraphQL APIs and Next.js frontend rendering. Get the content editing ease of WordPress with the blazing sub-second speed of Next.js.",
    image: "/images/service-web-dev.png",
    icon: FileCode,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "shadow-[0_0_35px_rgba(0,240,255,0.25)]",
    techStack: ["Headless WP", "WPGraphQL", "Next.js Frontend", "WooCommerce API"],
    deliverables: ["Custom Headless Theme", "WP GraphQL Integration", "WooCommerce Store Engine", "Security Hardening"],
    executionTime: "1 - 3 Weeks",
    slaMetric: "Sub-Second WP Rendering",
  },
  {
    id: "support",
    category: "cloud",
    title: "Dedicated SLA Support Pods",
    badge: "EXECUTIVE_POD_ACCESS",
    shortDesc: "Dedicated SLA engineering pods, bug fixes, feature extensions, and CI/CD pipelines.",
    longDesc: "Direct developer access for high-growth enterprises requiring ongoing feature updates, API integrations, database optimization, and dedicated DevOps engineering.",
    image: "/images/advantage-scalability.png",
    icon: Headphones,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    techStack: ["Dedicated Developer Pod", "Slack / Teams Channel", "GitOps CI/CD"],
    deliverables: ["Direct Engineer Access", "Bi-weekly Feature Sprints", "Custom API Integrations", "Continuous CI/CD"],
    executionTime: "Monthly SLA Retainer",
    slaMetric: "2-Hour SLA Response Time",
  },
  {
    id: "ai-integration",
    category: "ai",
    title: "AI & LLM Integration",
    badge: "INTELLIGENT_AUTOMATION",
    shortDesc: "Custom LLM AI agents, RAG vector pipelines, and automated intelligent workflow engines.",
    longDesc: "Empower your business with cutting-edge AI capability. We integrate OpenAI, Claude, and open-source Llama models directly into your web/mobile applications with vector RAG search.",
    image: "/images/services/ai_integration.png",
    icon: Bot,
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    techStack: ["OpenAI GPT-4o", "Pinecone Vector DB", "LangChain / LlamaIndex", "Custom RAG Pipelines"],
    deliverables: ["Custom AI Agent Bot", "Vector Knowledgebase RAG", "Automated Lead Qualifier", "API Billing Integration"],
    executionTime: "2 - 3 Weeks",
    slaMetric: "Instant AI Agent Response",
  },
];

export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({ activeCategory }) => {
  const [selectedService, setSelectedService] = React.useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const filteredServices = React.useMemo(() => {
    if (activeCategory === "all") return ALL_15_SERVICES;
    return ALL_15_SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div>
            <CyberBadge text="SPECIALIZATION_PODS // 15_AVAILABLE" variant="cyan" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Explore Our <span className="text-gradient-teal-cyan">Services Catalog</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            Every service is backed by our sovereign engineering standards, dedicated developer pods, and 24/7 SLA uptime guarantees.
          </p>
        </div>

        {/* 15 Services Grid with 3D Preview Banners */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-3xl glass-card border border-zinc-800 ${service.borderColor} transition-all duration-300 hover:${service.glowColor} flex flex-col justify-between space-y-6 bg-zinc-950/80`}
                >
                  {/* Top 3D Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <CyberBadge text={service.badge} variant="cyan" />
                    </div>

                    <div className={`absolute bottom-4 left-4 z-10 p-2.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl ${service.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="px-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Tech Stack Pills & Metrics */}
                  <div className="px-6 space-y-3 border-t border-zinc-800/80 pt-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-cyan-400" /> {service.executionTime}
                      </span>
                      <span className="text-emerald-400 font-bold">{service.slaMetric}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-1 border border-zinc-800 hover:border-cyan-500/40"
                    >
                      <span>Inspect Specs</span>
                      <ChevronRight size={14} />
                    </button>

                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => setIsModalOpen(true)}
                      rightIcon={<ArrowUpRight size={14} />}
                      className="px-3"
                    >
                      Quote
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* SERVICE DETAILS MODAL SPEC INSPECTOR */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
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
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 ${selectedService.color}`}>
                    <selectedService.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-xs font-mono text-cyan-400 font-bold">{selectedService.badge}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 rounded-xl p-2 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all border border-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">{selectedService.longDesc}</p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase">
                    {"//"} GUARANTEED DELIVERABLES & OUTCOMES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedService.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-zinc-200">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Execution Timeline & SLA */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">ESTIMATED TIMELINE</span>
                    <span className="text-cyan-400 font-bold">{selectedService.executionTime}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">SLA GUARANTEE</span>
                    <span className="text-emerald-400 font-bold">{selectedService.slaMetric}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-zinc-800 pt-4">
                <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                  Close Specs
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={() => {
                    setSelectedService(null);
                    setIsModalOpen(true);
                  }}
                  rightIcon={<ArrowUpRight size={14} />}
                >
                  Book Service Now
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <LetsTalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
