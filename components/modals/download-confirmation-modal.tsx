"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Download,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/buttons/button";

export interface DownloadItemInfo {
  title: string;
  filename: string;
  downloadUrl: string;
  fileSize: string;
  fileType: "PDF Document" | "vCard Contact" | "Portfolio Archive";
  description: string;
}

interface DownloadConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadItem: DownloadItemInfo | null;
  onConfirm: () => void;
}

export const DownloadConfirmationModal: React.FC<DownloadConfirmationModalProps> = ({
  isOpen,
  onClose,
  downloadItem,
  onConfirm,
}) => {
  if (!isOpen || !downloadItem) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Dialog Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/95 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.3)] text-white space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>

          {/* Header Icon & Title */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <Download size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Confirm Download</h3>
              <p className="text-xs font-mono text-cyan-400 font-bold">
                Official Digital Craftify Document
              </p>
            </div>
          </div>

          {/* Download File Card Preview */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText size={28} className="text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {downloadItem.title}
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {downloadItem.filename}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/50 text-[10px] font-mono font-bold text-cyan-300">
                {downloadItem.fileType}
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-2.5">
              {downloadItem.description}
            </p>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
              <span>File Size: <strong className="text-white">{downloadItem.fileSize}</strong></span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 size={12} /> Virus Scan Passed
              </span>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-cyan-400 shrink-0" />
            <span>Verified Official Executive Profile of Tanveer Hussain (Founder &amp; CEO).</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <Button
              variant="glass"
              size="md"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              size="md"
              onClick={handleConfirm}
              rightIcon={<Download size={16} className="text-zinc-950" />}
              className="w-full sm:w-auto"
            >
              Confirm &amp; Download Now ➔
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
