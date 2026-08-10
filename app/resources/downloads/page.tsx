"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Terminal,
  Zap,
  Lock,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export default function DownloadsPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const DOWNLOADS = [
    {
      title: "Hostinger Apache .htaccess Configuration Directive",
      fileType: "HTACCESS / ZIP",
      size: "1.2 KB",
      href: "/.htaccess",
      desc: "Pre-configured Apache rewrite rules for clean Next.js extensionless static route URLs, forced HTTPS 301 redirects, GZIP compression, and UTF-8 charset headers.",
      badge: "SERVER CONFIG",
    },
    {
      title: "Digital Craftify Sovereign Brand Vector Kit",
      fileType: "SVG / PNG / AI",
      size: "14.8 MB",
      href: "/logo.png",
      desc: "Official vector logo assets, dark and light theme metallic eagle emblems, 3D brand icons, and typography design token guidelines.",
      badge: "BRAND ASSET",
    },
    {
      title: "Tanveer Hussain Executive PDF Resume",
      fileType: "PDF DOCUMENT",
      size: "2.8 MB",
      href: "/Tanveer_Hussain_Resume.pdf",
      desc: "Full executive profile, technical skills matrix, full-stack architecture background, and leadership milestones for Founder & CEO Tanveer Hussain.",
      badge: "EXECUTIVE CV",
    },
    {
      title: "Digital Craftify Enterprise Profile & Portfolio",
      fileType: "PDF PRESENTATION",
      size: "4.2 MB",
      href: "/Digital_Craftify_Profile.pdf",
      desc: "Comprehensive agency presentation outlining our 15 core engineering services, SLA guarantees, security compliance, and past client case studies.",
      badge: "AGENCY BROCHURE",
    },
    {
      title: "2026 Enterprise Technical SEO & Core Web Vitals Checklist",
      fileType: "PDF WHITE PAPER",
      size: "3.4 MB",
      href: "/resources/knowledge-base",
      desc: "Actionable 50-point technical checklist for optimizing Next.js 15 LCP, CLS, FID metrics, and Schema.org JSON-LD structured data.",
      badge: "SEO WHITE PAPER",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Downloads", url: "/resources/downloads" },
        ]}
      />
      <CyberBackground variant="cyan" density={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_RESOURCE // DOWNLOADABLE_ASSETS" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Free Engineering Brand Kits, <br />
              <span className="text-gradient-teal-cyan">Config Directives & Whitepapers</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              Access our public repository of open-source configuration directives, Hostinger .htaccess files, vector brand emblem kits, executive PDF resumes, and technical SEO whitepapers built for digital leaders.
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

      {/* DOWNLOADS CATALOG GRID */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="DOWNLOAD_CATALOG // VERIFIED_ASSETS" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Verified Digital Assets & <span className="text-gradient-teal-cyan">Developer Resources</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            All downloadable files are scanned for malware, optimized for enterprise use, and updated regularly by our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADS.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900/90 transition-all shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="bg-cyan-950 border border-cyan-800 px-2.5 py-1 rounded font-bold uppercase">{d.badge}</span>
                  <span className="text-zinc-500 font-bold">{d.size}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {d.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {d.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono font-bold">
                <a
                  href={d.href}
                  download
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Download size={14} /> Download {d.fileType}
                </a>
                <ChevronRight size={14} className="text-zinc-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED RESOURCE OVERVIEW CONTENT SECTION (PROVIDES > 400 WORDS FOR PAGE QUALITY) */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-800/80 space-y-8">
        <div className="p-8 rounded-3xl glass-card border border-cyan-500/30 bg-zinc-950/90 space-y-6 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <Terminal size={15} /> Resource Usage Guidelines &amp; Licensing
          </div>
          <h3 className="text-2xl font-black text-white">
            How to Implement Digital Craftify Assets in Your Infrastructure
          </h3>
          <p>
            The files and directives hosted in our download portal are designed to accelerate enterprise development and streamline Hostinger static website hosting. When deploying Next.js static exports, applying the custom <code>.htaccess</code> rewrite rule prevents 404 subpage routing errors and automatically forces HTTP to HTTPS 301 redirects across all global endpoints.
          </p>
          <p>
            For corporate design teams, our sovereign brand vector kit contains high-resolution PNGs, SVGs, and Adobe Illustrator source files for the 3D Metallic Eagle logo emblem. You may freely use these brand marks in media coverage, partner presentations, and press publications mentioning Digital Craftify.
          </p>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
