"use client";

import * as React from "react";
import { Mail, Phone, Globe, ShieldCheck, MessageSquare, Clock, Zap } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";

export const ContactChannelsSection: React.FC = () => {
  const CHANNELS = [
    {
      badge: "EXECUTIVE_DISPATCH",
      title: "Solutions & Architecture Inquiry",
      contact: "contact@digitalcraftify.com",
      desc: "Direct channel for new enterprise web architecture, Flutter mobile app inquiries, and custom project scopes.",
      icon: Mail,
      actionText: "Send Architecture Dispatch",
      actionHref: "mailto:contact@digitalcraftify.com",
      color: "text-cyan-400",
    },
    {
      badge: "FOUNDER_CONSULTATION",
      title: "Gladiolus Pro Executive Suite",
      contact: "www.gladiolus.pro",
      desc: "Schedule a direct consultation with Digital Craftify executive leadership and Gladiolus Pro team.",
      icon: Globe,
      actionText: "Visit Gladiolus Pro Suite",
      actionHref: "https://www.gladiolus.pro",
      color: "text-purple-400",
    },
    {
      badge: "24/7_SLA_INCIDENT",
      title: "Dedicated Technical SLA Hotline",
      contact: "sla-support@digitalcraftify.com",
      desc: "For existing enterprise clients requiring urgent SLA incident response or edge CDN configuration updates.",
      icon: Zap,
      actionText: "Trigger SLA Support Ticket",
      actionHref: "mailto:sla-support@digitalcraftify.com",
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="EXECUTIVE_CHANNELS // DIRECT_REACH" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Direct Executive <span className="text-gradient-teal-cyan">Contact Channels</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Reach our specialized engineering pods across technical, sales, and emergency SLA channels.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <CyberBadge text={channel.badge} variant="cyan" />

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/40 transition-colors">
                      <Icon size={20} className={channel.color} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {channel.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 font-bold">{channel.contact}</p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">{channel.desc}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={channel.actionHref}
                    target={channel.actionHref.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{channel.actionText} &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
