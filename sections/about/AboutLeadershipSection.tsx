"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, MessageSquareQuote, Star, User, Mail, Phone, MapPin, Globe } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { SITE_CONFIG } from "@/constants/site";

export const AboutLeadershipSection: React.FC = () => {
  const CLIENT_ENDORSEMENTS = [
    {
      badge: "VALUED_CLIENT",
      name: "Yawar Bhat",
      role: "Valued Enterprise Client",
      org: "Gladiolus Pro Client Partner",
      quote:
        "Digital Craftify provided us with exceptional web architecture that drastically accelerated our digital growth. Their performance and execution are unmatched.",
      tags: ["Enterprise Client", "Digital Growth", "Web Architecture"],
    },
    {
      badge: "VALUED_CLIENT",
      name: "Arshid Hussain Dar",
      role: "Valued Client & Author",
      org: "Misbah — Book Reading Platform",
      quote:
        "Misbah has transformed how readers experience literature. The sleek design, instant page loads, and intuitive UX created by Digital Craftify exceeded all my expectations.",
      tags: ["Valued Client", "Content Publishing", "Digital App"],
    },
    {
      badge: "VALUED_CLIENT",
      name: "Inna Krasnopolska",
      role: "Valued Client & Bioscience Specialist",
      org: "Bioscience Research Platform",
      quote:
        "Their team delivered high-precision data visualization and cloud security for our research project. Highly reliable and technically superb engineering.",
      tags: ["Valued Client", "Data Security", "Cloud Analytics"],
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <CyberBackground variant="cyan" density={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* FOUNDER & CEO SPOTLIGHT CARD */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <CyberBadge text="FOUNDER & CEO // LEADERSHIP" variant="cyan" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Meet Our Founder & <span className="text-gradient-teal-cyan">Chief Executive</span>
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-card border-2 border-cyan-500/40 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,240,255,0.2)] space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Founder Avatar Frame */}
              <div className="relative shrink-0">
                <div className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/40 animate-[spin_12s_linear_infinite]" />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl bg-zinc-900 border-2 border-cyan-400 shadow-[0_0_35px_rgba(0,240,255,0.4)] overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Tanveer Hussain — Founder & CEO"
                    width={110}
                    height={110}
                    className="h-28 w-28 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                  />
                </div>
              </div>

              {/* Founder Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="text-3xl font-black text-white">Tanveer Hussain</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                      <ShieldCheck size={14} /> FOUNDER & CEO
                    </span>
                  </div>
                  <p className="text-sm font-mono text-cyan-400 font-bold mt-1">
                    Founder & Chief Executive Officer — Digital Craftify
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  Tanveer Hussain is the Founder & CEO of Digital Craftify. Under his leadership, Digital Craftify builds high-performing web platforms, mobile applications, custom software solutions, and digital growth strategies for clients globally.
                </p>

                {/* Direct Founder Contact Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <Phone size={16} className="text-emerald-400 shrink-0" />
                    <span>Phone: <strong className="text-white">{SITE_CONFIG.contact.phone}</strong></span>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <Mail size={16} className="text-cyan-400 shrink-0" />
                    <span>Email: <strong className="text-white">{SITE_CONFIG.contact.email}</strong></span>
                  </a>

                  <a
                    href="https://www.digitalcraftify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <Globe size={16} className="text-purple-400 shrink-0" />
                    <span>Website: <strong className="text-white">www.digitalcraftify.com</strong></span>
                  </a>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                    <MapPin size={16} className="text-amber-400 shrink-0" />
                    <span className="truncate">Address: <strong className="text-white">Al Mehdi Colony, Srinagar, J&K, 190005</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT ENDORSEMENTS SECTION */}
        <div className="space-y-8 max-w-7xl mx-auto pt-8 border-t border-zinc-800/80">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <CyberBadge text="CLIENT ENDORSEMENTS // VOUCHING CLIENTS" variant="teal" />
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Vouched by Our <span className="text-gradient-teal-cyan">Valued Clients</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Feedback from esteemed business partners and clients who trust Digital Craftify for their digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_ENDORSEMENTS.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <CyberBadge text={member.badge} variant="teal" />

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <MessageSquareQuote size={28} className="text-cyan-500/20 absolute -top-2 -left-2" />
                    <p className="text-xs text-zinc-300 leading-relaxed italic pl-4 border-l-2 border-cyan-500/40">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{member.name}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      <ShieldCheck size={12} /> VALUED CLIENT
                    </span>
                  </div>
                  <p className="text-xs font-mono text-cyan-400 font-bold">{member.role}</p>
                  <p className="text-[11px] text-zinc-500">{member.org}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
