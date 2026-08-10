"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layout,
  RefreshCw,
  Code,
  Smartphone,
  Palette,
  Search,
  TrendingUp,
  Award,
  Image as ImageIcon,
  PenTool,
  Server,
  Wrench,
  Globe,
  Headphones,
  BookOpen,
  FileText,
  Newspaper,
  HelpCircle,
  Video,
  Download,
  Sparkles,
} from "lucide-react";

export const SERVICES_LIST = [
  { title: "Website Design", desc: "Bespoke high-converting layouts", icon: Layout, href: "/services/website-design" },
  { title: "Website Redesign", desc: "Modernize legacy platforms", icon: RefreshCw, href: "/services/website-redesign" },
  { title: "Web Development", desc: "Scalable Fullstack React & Next.js", icon: Code, href: "/services/web-development" },
  { title: "App Development", desc: "iOS, Android & Native Apps", icon: Smartphone, href: "/services/app-development" },
  { title: "UI UX", desc: "User-centric interface research", icon: Palette, href: "/services/ui-ux" },
  { title: "SEO", desc: "Top organic search rankings", icon: Search, href: "/services/seo" },
  { title: "Digital Marketing", desc: "Data-driven performance ads", icon: TrendingUp, href: "/services/digital-marketing" },
  { title: "Branding", desc: "Identity & visual storytelling", icon: Award, href: "/services/branding" },
  { title: "Graphics Design", desc: "Marketing & corporate assets", icon: ImageIcon, href: "/services/graphics-design" },
  { title: "Logo Design", desc: "Iconic vector brand logos", icon: PenTool, href: "/services/logo-design" },
  { title: "Hosting", desc: "High-speed edge cloud servers", icon: Server, href: "/services/hosting" },
  { title: "Maintenance", desc: "24/7 uptime & security monitoring", icon: Wrench, href: "/services/maintenance" },
  { title: "WordPress", desc: "Headless & custom WP builds", icon: Globe, href: "/services/wordpress" },
  { title: "Support", desc: "Dedicated engineering assistance", icon: Headphones, href: "/services/support" },
  { title: "AI Integration", desc: "Custom LLMs & automation flows", icon: Sparkles, href: "/services/ai-integration" },
];

export const RESOURCES_LIST = [
  { title: "Knowledge Base", desc: "Comprehensive guides & articles", icon: BookOpen, href: "/resources/knowledge-base" },
  { title: "Documentation", desc: "API specs & dev manuals", icon: FileText, href: "/resources/documentation" },
  { title: "Blog", desc: "Latest engineering & design insights", icon: Newspaper, href: "/resources/blog" },
  { title: "FAQ", desc: "Answers to common questions", icon: HelpCircle, href: "/resources/faq" },
  { title: "Tutorials", desc: "Step-by-step video walkthroughs", icon: Video, href: "/resources/tutorials" },
  { title: "Downloads", desc: "Free brand kits & whitepapers", icon: Download, href: "/resources/downloads" },
];

export const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[880px] rounded-2xl glass-card p-6 shadow-2xl z-50 grid grid-cols-3 gap-3 border border-cyan-500/30 bg-zinc-950/95 backdrop-blur-2xl"
    >
      {SERVICES_LIST.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-cyan-950/40 hover:border-cyan-500/40 border border-transparent"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all border border-cyan-500/20">
              <Icon size={18} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-400 line-clamp-1">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const ResourcesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl glass-card p-6 shadow-2xl z-50 grid grid-cols-2 gap-3 border border-purple-500/30 bg-zinc-950/95 backdrop-blur-2xl"
    >
      {RESOURCES_LIST.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-purple-950/40 hover:border-purple-500/40 border border-transparent"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all border border-purple-500/20">
              <Icon size={20} />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400">{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
};
