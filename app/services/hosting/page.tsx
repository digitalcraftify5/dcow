"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Zap,
  ShieldCheck,
  Globe,
  ChevronRight,
  Lock,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";

export default function HostingPage() {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);

  const CAPABILITIES = [
    {
      num: "01",
      title: "Global Edge CDN Network",
      desc: "Ultra-low latency static and dynamic content delivery over 200+ global edge server locations.",
      icon: Server,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      num: "02",
      title: "99.99% Guaranteed Uptime SLA",
      desc: "Redundant server clusters with automated failover handling to ensure your site is never offline.",
      icon: Zap,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "Free SSL & Enterprise DDoS Protection",
      desc: "Automatic SSL cert renewal, Cloudflare Enterprise DDoS mitigation, and Web Application Firewall (WAF).",
      icon: ShieldCheck,
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      num: "04",
      title: "NVMe SSD High-Speed Storage",
      desc: "Enterprise NVMe SSD storage arrays delivering 10x faster database query execution than standard SSDs.",
      icon: Lock,
      color: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      num: "05",
      title: "Automated Daily Cloud Backups",
      desc: "1-click restoration points and off-site snapshot backups kept for 30 days.",
      icon: Globe,
      color: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      num: "06",
      title: "Dedicated Node.js & PHP Runtime Support",
      desc: "Pre-configured Node.js 20+, Next.js standalone server, and HTTP/3 protocol support.",
      icon: ChevronRight,
      color: "text-pink-400",
      border: "border-pink-500/30",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500 selection:text-zinc-950">
      <CyberBackground variant="cyan" density={50} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[180px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CyberBadge text="SOVEREIGN_SERVICE // EDGE_CLOUD_HOSTING" variant="cyan" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
            >
              High-Speed, <br />
              <span className="text-gradient-teal-cyan">Ultra-Secure Edge Cloud</span> <br />
              Hosting Infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
            >
              We provide high-speed enterprise hosting, global CDN distribution, DDoS protection, and 99.99% uptime guarantees for mission-critical web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => setIsTalkModalOpen(true)}
                rightIcon={<ArrowRight size={18} />}
                className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                Migrate to Edge Hosting
              </Button>
            </motion.div>
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
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px] rounded-full border border-purple-500/20" style={{ transform: "rotateX(75deg) rotateY(20deg)" }} />
              </div>

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Digital Craftify — DC Eagle Logo" width={500} height={500} className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[340px] lg:w-[340px] object-contain drop-shadow-[0_0_100px_rgba(0,240,255,0.6)] drop-shadow-[0_0_180px_rgba(0,210,181,0.3)]" priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="text-center space-y-4 mb-16">
          <CyberBadge text="HOSTING_SPECS // EDGE_ARCHITECTURE" variant="teal" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            High-Performance Cloud Built for <span className="text-gradient-teal-cyan">Zero Bottlenecks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`glass-card relative p-6 rounded-2xl border ${cap.border} bg-zinc-950/80 hover:bg-zinc-900/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      {"//"} MODULE_{cap.num}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 ${cap.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                  <span>SPECS_VERIFIED</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-cyan-500/40 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6">
          <CyberBadge text="UPGRADE_HOSTING // EDGE_SERVER" variant="cyan" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to Upgrade Your <span className="text-gradient-teal-cyan">Server Infrastructure</span>?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Get Free Hosting Migration Consultation
            </Button>
          </div>
        </div>
      </section>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </main>
  );
}
