"use client";

import * as React from "react";
import { SITE_CONFIG } from "@/constants/site";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { MessageSquare, Mail, Phone, Clock, Zap, Terminal } from "lucide-react";

export const ContactStripSection: React.FC = () => {
  return (
    <section className="relative border-t border-zinc-800/80 bg-zinc-950 py-12 overflow-hidden">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Cyber Tag */}
        <div className="flex justify-center">
          <CyberBadge text="24/7 GLOBAL CLIENT SUPPORT" variant="cyan" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl glass-panel p-6 lg:p-8 border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.3)] shrink-0">
              <Clock size={24} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-extrabold text-white">24/7 Engineering &amp; Technical Support</h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded flex items-center gap-1">
                  <Zap size={10} /> ACTIVE
                </span>
              </div>
              <p className="text-xs text-zinc-400">Direct access to lead architects whenever you need assistance.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="glass-button flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-4 py-2.5 text-xs font-bold text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-all hover:scale-105 shadow-lg"
            >
              <MessageSquare size={16} /> WhatsApp
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="glass-button flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-4 py-2.5 text-xs font-bold text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all hover:scale-105 shadow-lg"
            >
              <Mail size={16} /> Email Us
            </a>
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="glass-button flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-950/40 px-4 py-2.5 text-xs font-bold text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={16} /> Call Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
