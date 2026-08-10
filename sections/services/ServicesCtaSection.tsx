"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Mail, Phone, ExternalLink } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/buttons/button";
import { LetsTalkModal } from "@/components/modals/lets-talk-modal";
import { FounderModal } from "@/components/modals/founder-modal";
import { SITE_CONFIG } from "@/constants/site";

export const ServicesCtaSection: React.FC = () => {
  const [isTalkModalOpen, setIsTalkModalOpen] = React.useState(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = React.useState(false);

  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-card border border-cyan-500/50 bg-zinc-950 p-8 sm:p-14 shadow-[0_0_80px_rgba(0,240,255,0.2)] text-center space-y-8 overflow-hidden">
          <CyberBadge text="DISPATCH_ENGAGEMENT // READY_TO_BUILD" variant="cyan" />

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Ready to Deploy Your <span className="text-gradient-teal-cyan">Enterprise Architecture</span>?
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Connect directly with Digital Craftify solutions architects. Receive bespoke quote estimates, technical architecture blueprints, and 24/7 SLA maintenance within 2 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setIsTalkModalOpen(true)}
              rightIcon={<ArrowRight size={18} />}
              className="font-bold shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            >
              Initiate Strategy Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsFounderModalOpen(true)}
              rightIcon={<Zap size={18} />}
              className="font-bold"
            >
              Inspect Founder Digital vCard
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
            <div className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-cyan-400" />
              <span>Direct Phone: <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-white font-bold">{SITE_CONFIG.contact.phone}</a></span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={14} className="text-purple-400" />
              <span>Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white font-bold">{SITE_CONFIG.contact.email}</a></span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ExternalLink size={14} className="text-emerald-400" />
              <span>Suite: <a href="https://www.digitalcraftify.com" target="_blank" rel="noreferrer" className="text-white font-bold">www.digitalcraftify.com</a></span>
            </div>
          </div>
        </div>
      </div>

      <LetsTalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
      <FounderModal isOpen={isFounderModalOpen} onClose={() => setIsFounderModalOpen(false)} />
    </section>
  );
};
