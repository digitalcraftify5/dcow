"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  Layers,
  FileText,
  Code2,
  Sparkles,
  Briefcase,
  Tag,
  Palette,
  Globe,
  Smartphone,
  Cpu,
  User,
  Zap,
  HelpCircle,
  Download,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Pages" | "Portfolio" | "Resources" | "Tech";
  description: string;
  href: string;
  tags: string[];
}

const COMPREHENSIVE_SEARCH_INDEX: SearchItem[] = [
  // Core Services (15 Services)
  {
    id: "srv-website-design",
    title: "Website Design",
    category: "Services",
    description: "Custom high-conversion web design, visual layout & responsive UI systems.",
    href: "/services/website-design",
    tags: ["website", "design", "web", "ui", "ux", "landing page", "custom", "digital craftify"],
  },
  {
    id: "srv-website-redesign",
    title: "Website Redesign",
    category: "Services",
    description: "Modernize outdated sites with cutting-edge cyberpunk aesthetics & Next.js performance.",
    href: "/services/website-redesign",
    tags: ["website", "redesign", "modernize", "revamp", "ui", "speed", "digital craftify"],
  },
  {
    id: "srv-web-dev",
    title: "Web Development",
    category: "Services",
    description: "Enterprise Next.js 15, React 19, Node.js & TypeScript full-stack web applications.",
    href: "/services/web-development",
    tags: ["web", "development", "dev", "next.js", "react", "typescript", "fullstack", "digital craftify"],
  },
  {
    id: "srv-app-dev",
    title: "App Development",
    category: "Services",
    description: "Native iOS, Android & Flutter cross-platform mobile apps built for scale.",
    href: "/services/app-development",
    tags: ["app", "mobile", "flutter", "ios", "android", "development", "digital craftify"],
  },
  {
    id: "srv-ui-ux",
    title: "UI / UX Design",
    category: "Services",
    description: "User research, wireframing, interactive prototyping & luxury design systems.",
    href: "/services/ui-ux",
    tags: ["ui", "ux", "design", "figma", "prototype", "wireframe", "digital craftify"],
  },
  {
    id: "srv-seo",
    title: "Technical SEO",
    category: "Services",
    description: "Core Web Vitals optimization, Schema.org JSON-LD & rank #1 on Google search.",
    href: "/services/seo",
    tags: ["seo", "google", "search", "ranking", "optimization", "keywords", "digital craftify"],
  },
  {
    id: "srv-digital-marketing",
    title: "Digital Marketing",
    category: "Services",
    description: "Performance marketing, conversion rate optimization & growth campaigns.",
    href: "/services/digital-marketing",
    tags: ["digital", "marketing", "growth", "conversion", "campaigns", "ads", "digital craftify"],
  },
  {
    id: "srv-branding",
    title: "Branding & Visual Identity",
    category: "Services",
    description: "Corporate identity, color palettes, typography & brand guideline design.",
    href: "/services/branding",
    tags: ["branding", "brand", "identity", "visual", "corporate", "digital craftify"],
  },
  {
    id: "srv-graphics-design",
    title: "Graphics Design",
    category: "Services",
    description: "Marketing visuals, social assets, 3D emblem renders & vector artwork.",
    href: "/services/graphics-design",
    tags: ["graphics", "design", "graphic", "art", "vectors", "photoshop", "digital craftify"],
  },
  {
    id: "srv-logo-design",
    title: "Logo Design & Emblem Marks",
    category: "Services",
    description: "Bespoke vector logos, 3D metallic emblems & memorable corporate brand marks.",
    href: "/services/logo-design",
    tags: ["logo", "design", "emblem", "brand mark", "vector", "3d logo", "digital craftify"],
  },
  {
    id: "srv-hosting",
    title: "Edge Cloud Hosting",
    category: "Services",
    description: "High-speed global CDN deployment, AWS Cloudflare edge infrastructure & SSL.",
    href: "/services/hosting",
    tags: ["hosting", "cloud", "cdn", "server", "aws", "cloudflare", "digital craftify"],
  },
  {
    id: "srv-maintenance",
    title: "Website Maintenance",
    category: "Services",
    description: "24/7 security updates, uptime monitoring & emergency technical SLA support.",
    href: "/services/maintenance",
    tags: ["maintenance", "support", "security", "updates", "sla", "digital craftify"],
  },
  {
    id: "srv-wordpress",
    title: "Headless WordPress",
    category: "Services",
    description: "Decoupled WordPress backend connected to Next.js high-speed frontend.",
    href: "/services/wordpress",
    tags: ["wordpress", "cms", "headless", "next.js", "blog", "digital craftify"],
  },
  {
    id: "srv-support",
    title: "Dedicated Support SLA",
    category: "Services",
    description: "24/7 helpdesk, developer support, and dedicated solutions engineering.",
    href: "/services/support",
    tags: ["support", "helpdesk", "sla", "engineering", "help", "digital craftify"],
  },
  {
    id: "srv-ai-integration",
    title: "AI Integration & Agents",
    category: "Services",
    description: "Custom AI agents, LLM integrations, OpenAI & PyTorch predictive models.",
    href: "/services/ai-integration",
    tags: ["ai", "machine learning", "llm", "openai", "pytorch", "agents", "digital craftify"],
  },

  // Key Pages
  {
    id: "pg-home",
    title: "Home Page",
    category: "Pages",
    description: "Digital Craftify official landing showcase, features & core solutions.",
    href: "/",
    tags: ["home", "landing", "digital craftify", "overview", "website"],
  },
  {
    id: "pg-about",
    title: "About Digital Craftify",
    category: "Pages",
    description: "Our agency vision, engineering team, global footprint & technology stack.",
    href: "/about",
    tags: ["about", "agency", "team", "vision", "digital craftify"],
  },
  {
    id: "pg-founder",
    title: "Founder Profile — Tanveer Hussain",
    category: "Pages",
    description: "Executive spotlight on Tanveer Hussain (Founder & CEO), PDF Resume & vCard.",
    href: "/founder",
    tags: ["founder", "tanveer", "hussain", "tanveer hussain", "ceo", "resume", "profile", "vcard", "qr"],
  },
  {
    id: "pg-portfolio",
    title: "Portfolio & Case Studies",
    category: "Pages",
    description: "Curated showcase of web applications, mobile platforms & digital solutions.",
    href: "/portfolio",
    tags: ["portfolio", "projects", "work", "case studies", "showcase", "digital craftify"],
  },
  {
    id: "pg-pricing",
    title: "Pricing & Investment Tiers",
    category: "Pages",
    description: "Transparent pricing models, hourly packages & enterprise custom quotes.",
    href: "/pricing",
    tags: ["pricing", "cost", "price", "packages", "rates", "quotes", "digital craftify"],
  },
  {
    id: "pg-contact",
    title: "Contact Us & Strategy Dispatch",
    category: "Pages",
    description: "Submit project specifications or start direct WhatsApp chat with Tanveer.",
    href: "/contact",
    tags: ["contact", "email", "phone", "whatsapp", "location", "srinagar", "kashmir", "address", "digital craftify"],
  },

  // Resources
  {
    id: "res-kb",
    title: "Knowledge Base",
    category: "Resources",
    description: "Technical articles, web architecture guides & deployment tutorials.",
    href: "/resources/knowledge-base",
    tags: ["knowledge base", "guides", "articles", "tech", "resources"],
  },
  {
    id: "res-downloads",
    title: "Downloads & Media Kits",
    category: "Resources",
    description: "Download Founder Resume PDF, Corporate Profile PDF & Brand Mark Vectors.",
    href: "/resources/downloads",
    tags: ["downloads", "pdf", "resume", "brochure", "logo", "vectors", "resources"],
  },
  {
    id: "res-faq",
    title: "Frequently Asked Questions (FAQ)",
    category: "Resources",
    description: "Answers to common questions regarding timelines, pricing & technology.",
    href: "/resources/faq",
    tags: ["faq", "questions", "answers", "help", "pricing faq"],
  },

  // Portfolio Showcase Items
  {
    id: "port-pulse",
    title: "Pulse Fitness Tracker App",
    category: "Portfolio",
    description: "Next-gen biometric fitness mobile application with real-time analytics.",
    href: "/portfolio",
    tags: ["pulse", "fitness", "mobile app", "flutter", "biometrics"],
  },
  {
    id: "port-fintech",
    title: "Nexus Fintech Portal",
    category: "Portfolio",
    description: "High-frequency trading and wealth management enterprise dashboard.",
    href: "/portfolio",
    tags: ["fintech", "nexus", "trading", "dashboard", "finance"],
  },

  // Tech Stack Tags
  {
    id: "tech-nextjs",
    title: "Next.js 15 & React 19",
    category: "Tech",
    description: "Server components, SSG static exports & high-speed React web applications.",
    href: "/services/web-development",
    tags: ["next.js", "react", "typescript", "framework", "frontend"],
  },
  {
    id: "tech-flutter",
    title: "Flutter & Mobile SDK",
    category: "Tech",
    description: "Cross-platform iOS and Android mobile app development.",
    href: "/services/app-development",
    tags: ["flutter", "mobile", "dart", "ios", "android"],
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // SMART FUZZY & TOKENIZED MULTI-WORD SEARCH ENGINE
  const filteredResults = React.useMemo(() => {
    if (!query.trim()) return COMPREHENSIVE_SEARCH_INDEX.slice(0, 8);

    // Clean query: strip quotes, commas, extra symbols
    const cleanedQuery = query.toLowerCase().replace(/["'\\`,]/g, " ").trim();
    const queryTokens = cleanedQuery.split(/\s+/).filter(Boolean);

    if (queryTokens.length === 0) return COMPREHENSIVE_SEARCH_INDEX.slice(0, 8);

    return COMPREHENSIVE_SEARCH_INDEX.filter((item) => {
      const searchTargetText = [
        item.title.toLowerCase(),
        item.description.toLowerCase(),
        item.category.toLowerCase(),
        ...item.tags.map((t) => t.toLowerCase()),
      ].join(" ");

      // Match if ANY of the token words exist in the target text
      return queryTokens.some((token) => searchTargetText.includes(token));
    });
  }, [query]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Services":
        return <Layers size={15} className="text-cyan-400" />;
      case "Pages":
        return <Globe size={15} className="text-purple-400" />;
      case "Portfolio":
        return <Briefcase size={15} className="text-emerald-400" />;
      case "Resources":
        return <FileText size={15} className="text-amber-400" />;
      case "Tech":
        return <Code2 size={15} className="text-blue-400" />;
      default:
        return <Tag size={15} className="text-zinc-400" />;
    }
  };

  const QUICK_TAGS = [
    "Website Design",
    "Logo Design",
    "App Development",
    "Tanveer Hussain",
    "Pricing",
    "AI Integration",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-12 sm:pt-20 px-4 bg-zinc-950/85 backdrop-blur-2xl">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl glass-card rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(0,240,255,0.25)] space-y-5 border border-cyan-500/40 bg-zinc-950/95 text-zinc-100 max-h-[85vh] flex flex-col"
          >
            {/* Input Bar with Glowing Cyber Border */}
            <div className="flex items-center gap-3.5 border-b border-zinc-800 pb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Search size={22} />
              </div>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search website, logo, services, Tanveer, pricing, apps...'
                className="w-full bg-transparent text-base sm:text-lg font-mono text-zinc-100 placeholder:text-zinc-500 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white font-mono text-xs"
                >
                  Clear ✕
                </button>
              )}
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800"
                aria-label="Close search modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                {"// Quick Search:"}
              </span>
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-cyan-300 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Content Results List */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[50vh]">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-cyan-400 uppercase px-1 mb-2">
                <span>{query ? `Search Results (${filteredResults.length})` : "// Recommended Quick Catalog"}</span>
                <span className="text-zinc-500">ESC to exit</span>
              </div>

              {filteredResults.length === 0 ? (
                <div className="py-14 text-center text-zinc-400 text-sm space-y-3">
                  <p className="font-mono">
                    No exact match found for &quot;<span className="text-cyan-400">{query}</span>&quot;
                  </p>
                  <p className="text-xs text-zinc-500">
                    Try searching for <span className="text-emerald-400">Website Design</span>, <span className="text-purple-400">Logo Design</span>, <span className="text-cyan-400">Tanveer</span>, or <span className="text-amber-400">Pricing</span>.
                  </p>
                </div>
              ) : (
                filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl p-4 bg-zinc-900/70 hover:bg-gradient-to-r hover:from-cyan-950/40 hover:via-zinc-900 hover:to-zinc-950 border border-zinc-800/80 hover:border-cyan-500/50 transition-all shadow-md"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 rounded-xl bg-zinc-950 border border-zinc-800 p-2.5 shrink-0 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/60 uppercase">
                            {item.category}
                          </span>
                          <span className="text-sm sm:text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-1 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-3" />
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
