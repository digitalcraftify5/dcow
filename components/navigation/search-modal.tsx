"use client";

import * as React from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Layers, FileText, Code2, Sparkles, Briefcase, Tag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Pages" | "Portfolio" | "Blog" | "Tech";
  description: string;
  href: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Services
  { id: "s1", title: "Enterprise AI & Machine Learning Solutions", category: "Services", description: "Custom LLMs, Predictive models, computer vision", href: "/services/ai-ml" },
  { id: "s2", title: "Cloud Architecture & DevOps", category: "Services", description: "AWS, Azure, GCP, Kubernetes, CI/CD pipelines", href: "/services/cloud" },
  { id: "s3", title: "Full-Stack Web Engineering", category: "Services", description: "Next.js, React, Node.js, GraphQL, scalable APIs", href: "/services/web" },
  { id: "s4", title: "Native & Cross-Platform Mobile Apps", category: "Services", description: "iOS, Android, React Native, Flutter, Swift", href: "/services/mobile" },
  { id: "s5", title: "Cybersecurity & Zero Trust Architecture", category: "Services", description: "Security audits, compliance, threat detection", href: "/services/security" },
  { id: "s6", title: "UI/UX & Product Design System", category: "Services", description: "Photoshop, Figma, interactive prototypes, design tokens", href: "/services/design" },

  // Pages
  { id: "p1", title: "Home Page", category: "Pages", description: "Digital Craftify main overview and featured solutions", href: "/" },
  { id: "p2", title: "About Digital Craftify", category: "Pages", description: "Our engineering methodology, team, and global footprint", href: "/about" },
  { id: "p3", title: "Client Portfolio", category: "Pages", description: "Case studies and successful tech implementations", href: "/portfolio" },
  { id: "p4", title: "Transparent Pricing Plans", category: "Pages", description: "Investment tiers, hourly models, enterprise quotes", href: "/pricing" },
  { id: "p5", title: "Blog & Thought Leadership", category: "Pages", description: "Articles on AI conversion, microservices, cloud security", href: "/blog" },
  { id: "p6", title: "Contact Us", category: "Pages", description: "Start a project or schedule an architectural audit", href: "/contact" },

  // Portfolio
  { id: "po1", title: "Pulse Fitness Tracker", category: "Portfolio", description: "Next-gen biometric fitness mobile app", href: "/portfolio" },
  { id: "po2", title: "Nexus Fintech Portal", category: "Portfolio", description: "High-frequency trading and wealth management dashboard", href: "/portfolio" },
  { id: "po3", title: "Aura Logistics Cloud", category: "Portfolio", description: "Real-time AI fleet routing and IoT tracking system", href: "/portfolio" },

  // Blog
  { id: "b1", title: "AI Conversion Rate Optimization", category: "Blog", description: "How machine learning personalization drives 300% growth", href: "/blog" },
  { id: "b2", title: "Modern Microservices Architecture", category: "Blog", description: "Scaling from monolith to resilient micro-frontends", href: "/blog" },
  { id: "b3", title: "Zero Trust Cloud Infrastructure", category: "Blog", description: "Safeguard enterprise data across multi-cloud clusters", href: "/blog" },

  // Tech
  { id: "t1", title: "Next.js & React 19", category: "Tech", description: "Server components and optimized web performance", href: "/#tech" },
  { id: "t2", title: "Adobe Photoshop & Creative Cloud", category: "Tech", description: "Futuristic visual asset generation and brand design", href: "/#tech" },
  { id: "t3", title: "Python & PyTorch AI", category: "Tech", description: "Deep learning model training and neural networks", href: "/#tech" },
  { id: "t4", title: "Docker & Kubernetes", category: "Tech", description: "Containerized deployment and microservices orchestration", href: "/#tech" },
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

  const filteredResults = React.useMemo(() => {
    if (!query.trim()) return SEARCH_ITEMS.slice(0, 6);
    const q = query.toLowerCase();
    return SEARCH_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Services": return <Layers size={14} className="text-cyan-400" />;
      case "Pages": return <FileText size={14} className="text-purple-400" />;
      case "Portfolio": return <Briefcase size={14} className="text-emerald-400" />;
      case "Blog": return <Sparkles size={14} className="text-amber-400" />;
      case "Tech": return <Code2 size={14} className="text-blue-400" />;
      default: return <Tag size={14} className="text-zinc-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-zinc-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl glass-card rounded-2xl p-5 shadow-2xl space-y-4 border border-zinc-700/50"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
              <Search size={20} className="text-cyan-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, portfolio, blog, technologies..."
                className="w-full bg-transparent text-base text-zinc-100 placeholder:text-zinc-500 outline-none"
              />
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                aria-label="Close search modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content List */}
            <div className="max-h-[60vh] overflow-y-auto space-y-2 pr-1">
              <div className="flex items-center justify-between text-[11px] font-bold tracking-wider text-zinc-400 uppercase px-2 mb-2">
                <span>{query ? `Results (${filteredResults.length})` : "Recommended Quick Search"}</span>
                <span>Press ESC to close</span>
              </div>

              {filteredResults.length === 0 ? (
                <div className="py-12 text-center text-zinc-400 text-sm">
                  No matching results found for &quot;<span className="text-cyan-400">{query}</span>&quot;
                </div>
              ) : (
                filteredResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-xl p-3 bg-zinc-900/50 hover:bg-gradient-to-r hover:from-cyan-950/40 hover:to-zinc-900 border border-zinc-800/60 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-zinc-800/80 p-2 shrink-0 group-hover:scale-105 transition-transform">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                            {item.category}
                          </span>
                          <span className="text-sm font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
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
