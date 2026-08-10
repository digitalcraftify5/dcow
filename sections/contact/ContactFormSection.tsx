"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Terminal,
  ChevronDown,
  Sparkles,
  Paperclip,
  Clock,
  MessageSquare,
  Lock,
  Calculator,
  Layers,
  Check,
} from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { SERVICES_LIST } from "@/components/navigation/mega-menu";

export const ContactFormSection: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
    budget: "$3,000 - $10,000",
    timeline: "Standard (1 Month)",
    commChannel: "Corporate Email",
    requireNda: false,
    fileName: "",
  });

  const [selectedServices, setSelectedServices] = React.useState<string[]>([
    "Web Development",
    "Website Design",
  ]);

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const TECH_STACK_OPTIONS = [
    "Next.js 15",
    "React 19",
    "Flutter / Dart",
    "Node.js & TypeScript",
    "Python & PyTorch",
    "Cloudflare Edge",
    "AWS Serverless",
    "PostgreSQL & Redis",
  ];

  const [selectedTech, setSelectedTech] = React.useState<string[]>([
    "Next.js 15",
    "React 19",
  ]);

  const BUDGET_TIERS = [
    "$500 - $1,000",
    "$1,000 - $3,000",
    "$3,000 - $10,000",
    "$10,000+ Enterprise",
  ];

  const TIMELINE_TIERS = [
    "Immediate (1-2 Weeks)",
    "Standard (1 Month)",
    "Strategic (2-3 Months)",
    "Enterprise Multi-Phase",
  ];

  const COMM_CHANNELS = [
    "Corporate Email",
    "WhatsApp Dispatch",
    "Google Meet / Zoom",
    "Direct Phone Call",
  ];

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormState((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Simultaneously trigger WhatsApp dispatch with all client details
    sendDirectWhatsApp();

    try {
      // 2. Simultaneously send email to support@digitalcraftify.com via Hostinger contact.php
      await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          services: selectedServices.join(", "),
          tech_stack: selectedTech.join(", "),
          budget: formState.budget,
          timeline: formState.timeline,
          channel: formState.commChannel,
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

  const sendDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry - Digital Craftify*\n\n` +
      `*Name:* ${formState.name}\n` +
      `*Email:* ${formState.email}\n` +
      `*Phone:* ${formState.phone || "N/A"}\n` +
      `*Services:* ${selectedServices.join(", ")}\n` +
      `*Budget:* ${formState.budget}\n` +
      `*Timeline:* ${formState.timeline}\n` +
      `*Details:* ${formState.details}`
    );
    window.open(`https://wa.me/919149455143?text=${text}`, "_blank");
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/60 border-t border-b border-zinc-800/80">
      <CyberBackground variant="cyan" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Line 1 Cyber Badge Effect */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="EXPANDED_DISPATCH // CYBER_FORM_ENGINE" variant="cyan" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Architecture <span className="text-gradient-teal-cyan">Consultation & Services Dispatch</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            Select your desired services from our complete suite, configure tech specs, timeline, and confidentiality NDA parameters below.
          </p>
        </div>

        {/* EXPANDED RICH FORM CONTAINER (max-w-7xl) */}
        <div className="w-full mx-auto rounded-3xl p-6 sm:p-10 lg:p-12 glass-card border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] space-y-10 bg-zinc-950/95">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-8 max-w-2xl mx-auto"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
                <CheckCircle2 size={44} />
              </div>
              <div className="space-y-3">
                <CyberBadge text="DISPATCH_SUCCESS // TRANSMITTED" variant="emerald" />
                <h3 className="text-3xl font-extrabold text-white">Strategy Dispatch Confirmed!</h3>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-bold">{formState.name}</span>. Your technical request for <span className="text-emerald-400 font-bold">{selectedServices.length} Services</span> has been logged. Our lead solutions architect will contact you via <span className="text-purple-400 font-bold">{formState.commChannel}</span> within 2 hours.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-emerald-400 space-y-1 max-w-md mx-auto">
                <p>{"//"} DISPATCH_ID: DC-948201 // SLA_ACTIVE</p>
                {formState.requireNda && <p className="text-purple-400 font-bold">{"[x]"} NDA_EXECUTED // CONFIDENTIALITY_LOCKED</p>}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  variant="gradient"
                  size="md"
                  onClick={sendDirectWhatsApp}
                  className="w-full sm:w-auto"
                >
                  Send via Direct WhatsApp ⚡
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      details: "",
                      budget: "$3,000 - $10,000",
                      timeline: "Standard (1 Month)",
                      commChannel: "Corporate Email",
                      requireNda: false,
                      fileName: "",
                    });
                  }}
                  className="w-full sm:w-auto"
                >
                  Configure Another Spec
                </Button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* SECTION 1: ALL SERVICES INTERACTIVE CYBER DROPDOWN */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-2">
                    <CyberBadge text="STEP_01 // SERVICES_SELECTION" variant="cyan" />
                    <span className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider hidden sm:inline">
                      {"//"} Select Digital Craftify Services
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
                    {selectedServices.length} Selected Services
                  </span>
                </div>

                {/* Cyber Dropdown Selector Control */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/40 px-5 py-4 text-left flex items-center justify-between gap-4 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.1)] group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                        <Layers size={20} />
                      </div>
                      <div className="flex flex-wrap gap-2 overflow-hidden">
                        {selectedServices.length > 0 ? (
                          selectedServices.map((srv) => (
                            <span
                              key={srv}
                              className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center gap-1.5"
                            >
                              <Check size={12} className="text-cyan-400" />
                              <span>{srv}</span>
                            </span>
                          ))
                        ) : (
                          <span className="text-sm font-mono text-zinc-500">
                            Click to open complete services catalog...
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isServicesDropdownOpen ? "rotate-180 text-emerald-400" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Panel (15 Services Catalog) */}
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-3 rounded-2xl glass-card p-5 border border-cyan-500/40 bg-zinc-950/98 shadow-2xl z-50 space-y-3 max-h-[380px] overflow-y-auto"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                          <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                            {"//"} COMPLETE SERVICES CATALOG (15 SERVICES AVAILABLE)
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800"
                          >
                            Close Menu ✕
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {SERVICES_LIST.map((srv) => {
                            const isChecked = selectedServices.includes(srv.title);
                            const Icon = srv.icon;
                            return (
                              <button
                                type="button"
                                key={srv.title}
                                onClick={() => toggleService(srv.title)}
                                className={`p-3 rounded-xl text-xs font-mono text-left transition-all duration-200 flex items-start gap-3 border ${
                                  isChecked
                                    ? "bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                                    : "bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-cyan-500/40 hover:text-white"
                                }`}
                              >
                                <div
                                  className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                    isChecked ? "bg-cyan-400 text-zinc-950" : "bg-zinc-800 text-zinc-400"
                                  }`}
                                >
                                  <Icon size={14} />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="font-bold">{srv.title}</p>
                                  <p className="text-[10px] text-zinc-400 line-clamp-1">{srv.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* SECTION 2: TECH STACK PREFERENCES */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-2">
                    <CyberBadge text="STEP_02 // TECH_PREFERENCES" variant="purple" />
                    <span className="text-sm font-mono text-purple-400 font-bold uppercase tracking-wider hidden sm:inline">
                      {"//"} Preferred Architecture & Tech Stack
                    </span>
                  </div>
                  <span className="text-xs font-mono text-purple-300">
                    {selectedTech.length} Tech Selected
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {TECH_STACK_OPTIONS.map((tech) => {
                    const isSelected = selectedTech.includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                          isSelected
                            ? "bg-purple-600 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                            : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/40"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: BUDGET & TIMELINE GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Budget Selection */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CyberBadge text="STEP_03 // BUDGET_TIER" variant="emerald" />
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      {"//"} Estimated Budget Tier
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = formState.budget === tier;
                      return (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormState({ ...formState, budget: tier })}
                          className={`p-3.5 rounded-xl text-xs font-mono font-bold text-center transition-all ${
                            isSelected
                              ? "bg-emerald-500 text-zinc-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                              : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-emerald-500/30"
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CyberBadge text="STEP_04 // DELIVERY_TIMELINE" variant="purple" />
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                      {"//"} Target Delivery Timeline
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {TIMELINE_TIERS.map((time) => {
                      const isSelected = formState.timeline === time;
                      return (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setFormState({ ...formState, timeline: time })}
                          className={`p-3.5 rounded-xl text-xs font-mono font-bold text-center transition-all ${
                            isSelected
                              ? "bg-purple-600 text-white font-black shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                              : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/30"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION 4: CLIENT CONTACT INPUTS WITH LINE 1 CYBER BADGE STYLING */}
              <div className="space-y-6 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <CyberBadge text="STEP_05 // CLIENT_CREDENTIALS" variant="cyan" />
                  <span className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    {"//"} Executive Contact Details
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Terminal size={13} /> Full Name *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Terminal size={13} /> Corporate Email *
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="alexander@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Terminal size={13} /> Phone / WhatsApp
                    </span>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Terminal size={13} /> Company / Org
                    </span>
                    <input
                      type="text"
                      placeholder="Aura Cloud Enterprise"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Preferred Channel & NDA Options */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider block flex items-center gap-1.5">
                      <MessageSquare size={14} /> Preferred Response Channel:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {COMM_CHANNELS.map((channel) => (
                        <button
                          type="button"
                          key={channel}
                          onClick={() => setFormState({ ...formState, commChannel: channel })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                            formState.commChannel === channel
                              ? "bg-purple-600 text-white border border-purple-400 shadow-md"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                          }`}
                        >
                          {channel}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* NDA Checkbox */}
                  <div className="lg:col-span-4 flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-purple-500/30">
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      checked={formState.requireNda}
                      onChange={(e) => setFormState({ ...formState, requireNda: e.target.checked })}
                      className="h-4 w-4 rounded border-purple-500 bg-zinc-950 text-purple-500 focus:ring-purple-400"
                    />
                    <label htmlFor="ndaCheck" className="text-xs font-mono text-zinc-300 cursor-pointer flex items-center gap-1.5 font-bold">
                      <Lock size={14} className="text-purple-400" />
                      <span>Require Confidential NDA Execution</span>
                    </label>
                  </div>
                </div>

                {/* Project Details Textarea & Spec File Attachment Dropzone */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Terminal size={13} /> Project Specifications & Objectives *
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {formState.details.length} / 1000 chars
                    </span>
                  </div>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Describe your architecture requirements, target user base, API integrations, and SLA expectations..."
                    value={formState.details}
                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                    className="w-full rounded-2xl bg-zinc-900/90 border border-cyan-500/30 p-4 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] focus:outline-none transition-all resize-none leading-relaxed font-sans"
                  />

                  {/* Specification File Upload Dropzone Simulation */}
                  <div className="relative flex items-center justify-between p-4 rounded-2xl bg-zinc-900/60 border border-dashed border-cyan-500/40 hover:border-cyan-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <Paperclip size={18} className="text-cyan-400" />
                      <div className="text-xs">
                        <p className="font-mono text-zinc-200 font-bold">
                          {formState.fileName ? formState.fileName : "Attach Specification PDF / Wireframe (Optional)"}
                        </p>
                        <p className="text-[10px] text-zinc-500">Max size 25MB (.pdf, .fig, .zip, .docx)</p>
                      </div>
                    </div>
                    <label className="cursor-pointer px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-500/40 hover:bg-cyan-900 text-xs font-mono text-cyan-300 font-bold transition-colors">
                      Browse File
                      <input type="file" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Dispatch Button */}
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full justify-center text-base font-black py-4 shadow-[0_0_35px_rgba(0,240,255,0.4)]"
                rightIcon={<Send size={18} />}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting Architecture Dispatch..." : "Submit Enterprise Strategy Dispatch"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
