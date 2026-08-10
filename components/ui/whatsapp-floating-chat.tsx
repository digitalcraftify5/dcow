"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ShieldCheck } from "lucide-react";

export const WhatsAppFloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleStartChat = (customMsg?: string) => {
    const textToSend = customMsg || message || "Hello Digital Craftify team! I would like to inquire about your engineering services.";
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/919149455143?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  const QUICK_QUESTIONS = [
    "Hi Tanveer! I need a custom website quote.",
    "I want to redesign my existing web app.",
    "I need mobile app development (Flutter/iOS).",
    "Inquiring about 24/7 website maintenance & support.",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end pointer-events-none">
      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto mb-4 w-[340px] sm:w-[380px] rounded-3xl glass-card border border-emerald-500/40 bg-zinc-950/95 p-5 shadow-[0_0_40px_rgba(16,185,129,0.3)] overflow-hidden space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/me.png"
                    alt="Tanveer Hussain"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                    Tanveer Hussain
                    <ShieldCheck size={14} className="text-emerald-400" />
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online | Founder & CEO
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Welcome Greeting Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 via-zinc-900 to-zinc-950 p-3.5 border border-emerald-500/30 text-xs text-zinc-200 space-y-1">
              <p className="font-bold text-emerald-300 flex items-center gap-1.5">
                <Sparkles size={14} className="text-emerald-400" /> Direct WhatsApp Dispatch
              </p>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                Connect directly with Founder Tanveer Hussain. We typically reply within 5 minutes!
              </p>
            </div>

            {/* Quick Action Pills */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                {"// Quick Start Inquiries:"}
              </p>
              <div className="flex flex-col gap-1.5">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStartChat(q)}
                    className="text-left px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-950/40 text-[11px] text-zinc-300 font-mono transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{q}</span>
                    <Send size={12} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Message Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleStartChat();
              }}
              className="space-y-2 pt-1"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl bg-zinc-900 border border-emerald-500/40 pl-4 pr-10 py-3 text-xs text-white placeholder-zinc-500 focus:border-emerald-400 focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.7)] border-2 border-emerald-300/60 transition-all group"
        aria-label="Open WhatsApp Chat"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-zinc-950" />
        </span>
        {isOpen ? (
          <X size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};
