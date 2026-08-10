"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Terminal,
  Lock,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Layers,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { SERVICES_LIST } from "@/components/navigation/mega-menu";

export interface LetsTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetsTalkModal: React.FC<LetsTalkModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    budget: "$3,000 - $10,000",
    service: "Web Development",
    requireNda: false,
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Open WhatsApp simultaneously with inquiry details
    const text = encodeURIComponent(
      `*New Strategy Inquiry - Digital Craftify*\n\n` +
      `*Name:* ${formState.name}\n` +
      `*Email:* ${formState.email}\n` +
      `*Phone:* ${formState.phone || "N/A"}\n` +
      `*Service:* ${formState.service}\n` +
      `*Budget:* ${formState.budget}\n` +
      `*Require NDA:* ${formState.requireNda ? "Yes" : "No"}\n` +
      `*Details:* ${formState.details}`
    );
    window.open(`https://wa.me/919149455143?text=${text}`, "_blank");

    try {
      await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          services: formState.service,
          budget: formState.budget,
          require_nda: formState.requireNda ? "Yes" : "No",
          details: formState.details,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const BUDGET_TIERS = [
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $10,000",
    "$10,000+ Enterprise",
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8">
        {/* Glassmorphic Cyber Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/90 backdrop-blur-2xl"
        />

        {/* Expansive Ultra-Wide 2-Column Cyber Modal Container (max-w-5xl) */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lets-talk-modal-title"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/95 shadow-[0_0_80px_rgba(0,240,255,0.3)] text-zinc-100 max-h-[92vh] overflow-y-auto"
        >
          <CyberBackground variant="cyan" density={35} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 rounded-2xl p-2.5 text-zinc-400 hover:bg-zinc-800/80 hover:text-white transition-all border border-zinc-800/80 shadow-lg group"
            aria-label="Close Modal"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* 2-Column Responsive Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* LEFT COLUMN: Executive Founder & VIP Channel Sidebar (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-zinc-950 border-b lg:border-b-0 lg:border-r border-cyan-500/20 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Header Badge */}
                <CyberBadge text="VIP_DISPATCH // EXECUTIVE_CHANNEL" variant="cyan" />

                {/* 3D Brand Emblem & Title */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt="Digital Craftify Logo"
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                  />
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">
                      Digital<span className="text-gradient-teal-cyan">Craftify</span>
                    </h3>
                    <p className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      Architecting Excellence
                    </p>
                  </div>
                </div>

                {/* Founder Profile Spotlight Card */}
                <div className="rounded-2xl glass-card p-4 border border-emerald-500/30 bg-emerald-950/20 space-y-3 shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <Image
                        src="/me.png"
                        alt="Tanveer Hussain"
                        width={52}
                        height={52}
                        className="h-13 w-13 rounded-full object-cover border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                      />
                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                        Tanveer Hussain
                        <ShieldCheck size={15} className="text-emerald-400" />
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-400 font-bold">
                        Founder & CEO
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                    Direct access to lead engineering & solutions architecture. Every strategy dispatch is reviewed directly by Tanveer.
                  </p>
                </div>

                {/* Contact Pills */}
                <div className="space-y-2 text-xs font-mono text-zinc-300">
                  <a
                    href="https://wa.me/919149455143"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 text-emerald-300 transition-colors"
                  >
                    <Phone size={15} className="text-emerald-400 shrink-0" />
                    <span className="font-bold">+91 91494 55143</span>
                    <span className="ml-auto text-[10px] bg-emerald-950 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 rounded font-bold">
                      WhatsApp ⚡
                    </span>
                  </a>

                  <a
                    href="mailto:support@digitalcraftify.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 text-cyan-300 transition-colors"
                  >
                    <Mail size={15} className="text-cyan-400 shrink-0" />
                    <span className="font-bold truncate">support@digitalcraftify.com</span>
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Clock size={13} /> Avg Response SLA:
                  </span>
                  <span className="text-emerald-400 font-bold">&lt; 5 Minutes</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                    <Lock size={13} /> Confidentiality:
                  </span>
                  <span className="text-purple-300 font-bold">Strict NDA Protection</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Project Specification Engine (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 id="lets-talk-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Let&apos;s Build Something <span className="text-gradient-teal-cyan">Extraordinary</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  Configure your primary requirements below to generate an instant strategy dispatch sent directly to our solutions architecture team.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 max-w-md mx-auto my-auto"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
                    <CheckCircle2 size={44} />
                  </div>
                  <div className="space-y-2">
                    <CyberBadge text="DISPATCH_TRANSMITTED // SLA_LIVE" variant="emerald" />
                    <h3 className="text-2xl font-black text-white">Strategy Dispatch Confirmed!</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Thank you, <span className="text-cyan-400 font-bold">{formState.name}</span>. Your specification for <span className="text-emerald-400 font-bold">{formState.service}</span> has been logged via email and WhatsApp.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-emerald-400">
                    {"//"} DISPATCH_ID: DC-849102 // RESPONSE_PENDING
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="w-full justify-center font-mono text-xs"
                  >
                    Close Window
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 pt-2 border-t border-zinc-800/80">
                  {/* Step 1: Service Dropdown */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Layers size={14} /> Select Primary Engineering Service *
                    </span>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/40 px-4 py-3 text-xs text-cyan-300 font-mono font-bold focus:border-cyan-400 focus:outline-none transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] cursor-pointer"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.title} value={srv.title} className="bg-zinc-950 text-white">
                          {srv.title} - {srv.desc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 2: Budget Tiers */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-purple-400 font-bold flex items-center gap-1.5">
                      <Zap size={14} /> Estimated Project Budget *
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_TIERS.map((tier) => {
                        const isSelected = formState.budget === tier;
                        return (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormState({ ...formState, budget: tier })}
                            className={`p-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                              isSelected
                                ? "bg-purple-600 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/40"
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Client Info Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                        <Terminal size={12} /> Full Name *
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Alexander Wright"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                        <Terminal size={12} /> Email Address *
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="alexander@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                        <Terminal size={12} /> Phone / WhatsApp
                      </span>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Step 4: Textarea Overview & NDA */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold flex items-center gap-1">
                        <Terminal size={12} /> Project Specification & Objectives *
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {formState.details.length} / 1000 chars
                      </span>
                    </div>
                    <textarea
                      required
                      maxLength={1000}
                      rows={3}
                      placeholder="Describe your web/app project requirements, features, or timeline..."
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 p-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none font-sans leading-relaxed"
                    />
                  </div>

                  {/* Confidential NDA Checkbox */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/90 border border-purple-500/30">
                    <input
                      type="checkbox"
                      id="modalNdaCheck"
                      checked={formState.requireNda}
                      onChange={(e) => setFormState({ ...formState, requireNda: e.target.checked })}
                      className="h-4 w-4 rounded border-purple-500 bg-zinc-950 text-purple-500 focus:ring-purple-400"
                    />
                    <label htmlFor="modalNdaCheck" className="text-xs font-mono text-zinc-300 cursor-pointer flex items-center gap-1.5 font-bold">
                      <Lock size={13} className="text-purple-400" />
                      <span>Require Confidential Non-Disclosure Agreement (NDA)</span>
                    </label>
                  </div>

                  {/* Dual Action Submit Button */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full justify-center font-black py-3.5 text-xs shadow-[0_0_35px_rgba(0,240,255,0.4)]"
                    rightIcon={<Send size={16} />}
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Transmitting Strategy Request..."
                      : "Transmit Strategy Dispatch + Open WhatsApp Sync ⚡"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
