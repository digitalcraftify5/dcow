"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Terminal,
  Lock,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const BUDGET_TIERS = [
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $10,000",
    "$10,000+ Enterprise",
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Glassmorphic Cyber Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/85 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lets-talk-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/95 p-6 sm:p-8 lg:p-10 shadow-[0_0_60px_rgba(0,240,255,0.25)] text-zinc-100 max-h-[90vh] overflow-y-auto"
        >
          <CyberBackground variant="cyan" density={30} />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 rounded-xl p-2 text-zinc-400 hover:bg-zinc-800/80 hover:text-white transition-colors border border-zinc-800"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Header Line 1 Cyber Badge */}
            <div className="space-y-2">
              <CyberBadge text="DISPATCH // LETS_TALK_CONSULTATION" variant="cyan" />
              <h2 id="lets-talk-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Let&apos;s Talk <span className="text-gradient-teal-cyan">Architecture & Strategy</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300">
                Connect with Digital Craftify senior solutions architects. Get quick quote estimates & strategy dispatches within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Strategy Dispatch Confirmed!</h3>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Thank you, <span className="text-cyan-400 font-bold">{formState.name}</span>. Our lead architect team has logged your dispatch for <span className="text-emerald-400 font-bold">{formState.service}</span>.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-emerald-400 max-w-sm mx-auto">
                  {"//"} DISPATCH_ID: DC-739102 // SLA_ACTIVE
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                >
                  Close Window
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-2 border-t border-zinc-800/80">
                {/* Service Selector Dropdown / Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <Terminal size={13} /> Select Desired Primary Service:
                  </span>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 px-4 py-3 text-xs text-cyan-300 font-mono font-bold focus:border-cyan-400 focus:outline-none transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.title} value={srv.title} className="bg-zinc-950 text-white">
                        {srv.title} - {srv.desc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-purple-400 font-bold flex items-center gap-1.5">
                    <Terminal size={13} /> Estimated Project Budget:
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
                              ? "bg-purple-600 text-white border border-purple-400 shadow-md"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name, Email, Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">Full Name *</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">Corporate Email *</span>
                    <input
                      type="email"
                      required
                      placeholder="alexander@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">Phone / WhatsApp</span>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Project Specs Textarea */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold">Project Overview & Goals *</span>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe your application goals, target user base, or key features..."
                    value={formState.details}
                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                    className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 p-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none font-sans"
                  />
                </div>

                {/* NDA Execution Checkbox */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <input
                    type="checkbox"
                    id="modalNdaCheck"
                    checked={formState.requireNda}
                    onChange={(e) => setFormState({ ...formState, requireNda: e.target.checked })}
                    className="h-4 w-4 rounded border-purple-500 bg-zinc-950 text-purple-500 focus:ring-purple-400"
                  />
                  <label htmlFor="modalNdaCheck" className="text-xs font-mono text-zinc-300 cursor-pointer flex items-center gap-1.5 font-bold">
                    <Lock size={13} className="text-purple-400" />
                    <span>Require Confidential NDA Execution Prior to Discussion</span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="md"
                  className="w-full justify-center font-black py-3 text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)]"
                  rightIcon={<Send size={15} />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Transmitting Strategy Request..." : "Submit Quick Strategy Dispatch"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
