"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Mail,
  Sparkles,
  Globe,
  Phone,
  MapPin,
  QrCode,
  Download,
  Share2,
  Award,
  Copy,
  Rocket,
  Folder,
  Smile,
  Headphones,
  Code2,
  Palette,
  ShoppingCart,
  TrendingUp,
  ShieldCheck,
  Facebook,
  Instagram,
  Github,
  MessageSquare,
  Linkedin,
  ExternalLink,
  Laptop,
  CheckCircle,
  MessageSquareQuote,
  Navigation,
  BookOpen,
  Brain,
  Layers,
  Check,
  Send,
  FileText,
} from "lucide-react";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { SITE_CONFIG } from "@/constants/site";
import { DownloadConfirmationModal, DownloadItemInfo } from "@/components/modals/download-confirmation-modal";

// Interactive 60FPS Animated Particle Canvas Component around Profile Photo
const PhotoParticles: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 320);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const numParticles = 45;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.85,
      vy: (Math.random() - 0.5) * 0.85,
      radius: Math.random() * 2.2 + 1,
      color: Math.random() > 0.5 ? "rgba(0, 240, 255, " : "rgba(16, 185, 129, ",
      alpha: Math.random() * 0.7 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connection lines
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.35 * (1 - dist / 65)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 240, 255, 0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
    />
  );
};

export default function FounderClientPage() {
  const [activeTab, setActiveTab] = React.useState<"all" | "about" | "skills" | "services" | "work">("all");
  const [copiedPhone, setCopiedPhone] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedWeb, setCopiedWeb] = React.useState(false);
  const [copiedAddress, setCopiedAddress] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  // Download Confirmation Modal State
  const [confirmModalOpen, setConfirmModalOpen] = React.useState(false);
  const [selectedDownload, setSelectedDownload] = React.useState<DownloadItemInfo | null>(null);

  const copyText = (text: string, type: "phone" | "email" | "web" | "address") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === "web") {
      setCopiedWeb(true);
      setTimeout(() => setCopiedWeb(false), 2000);
    } else if (type === "address") {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Tanveer Hussain — Founder & CEO, Digital Craftify",
        url: "https://www.digitalcraftify.com/founder",
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText("https://www.digitalcraftify.com/founder");
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  // Triggers Confirmation Dialog for Resume PDF
  const triggerResumeDownload = () => {
    setSelectedDownload({
      title: "Tanveer Hussain — Official Resume PDF",
      filename: "Tanveer_Hussain_Resume.pdf",
      downloadUrl: "/downloads/Tanveer_Hussain_Resume.pdf",
      fileSize: "7.3 KB (Ultra-Modern PDF)",
      fileType: "PDF Document",
      description: "Official executive resume & full technical credentials of Tanveer Hussain (Founder & CEO, Digital Craftify).",
    });
    setConfirmModalOpen(true);
  };

  // Triggers Confirmation Dialog for Profile PDF
  const triggerProfilePdfDownload = () => {
    setSelectedDownload({
      title: "Digital Craftify — Founder & Company Profile PDF",
      filename: "Digital_Craftify_Profile.pdf",
      downloadUrl: "/downloads/Digital_Craftify_Profile.pdf",
      fileSize: "7.3 KB (Ultra-Modern PDF)",
      fileType: "PDF Document",
      description: "Official Digital Craftify corporate presentation and Founder portfolio PDF document.",
    });
    setConfirmModalOpen(true);
  };

  // Triggers Confirmation Dialog for VCard
  const triggerVCardDownload = () => {
    setSelectedDownload({
      title: "Tanveer Hussain — Executive vCard Contact",
      filename: "Tanveer_Hussain_Founder_CEO.vcf",
      downloadUrl: "vcard",
      fileSize: "1.2 KB (vCard 3.0)",
      fileType: "vCard Contact",
      description: "Official mobile contact card for Tanveer Hussain (Founder & CEO) for instant phone address book import.",
    });
    setConfirmModalOpen(true);
  };

  // Executes the real download after user confirmation
  const executeActualDownload = async () => {
    if (!selectedDownload) return;

    if (selectedDownload.downloadUrl === "vcard") {
      const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Tanveer Hussain
ORG:Digital Craftify Ltd.
TITLE:Founder & Chief Executive Officer
TEL;TYPE=WORK,VOICE:${SITE_CONFIG.contact.phone}
EMAIL;TYPE=WORK,INTERNET:${SITE_CONFIG.contact.email}
ADR;TYPE=WORK:;;${SITE_CONFIG.contact.address.street};${SITE_CONFIG.contact.address.city};${SITE_CONFIG.contact.address.region};${SITE_CONFIG.contact.address.postalCode};${SITE_CONFIG.contact.address.country}
URL;TYPE=WORK:https://www.digitalcraftify.com
END:VCARD`;

      const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Tanveer_Hussain_Founder_CEO.vcf");
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
    } else {
      try {
        // Force no-cache fetch with timestamp parameter to bypass browser cache completely
        const cacheBustUrl = `${selectedDownload.downloadUrl}?v=${Date.now()}`;
        const response = await fetch(cacheBustUrl, { cache: "no-store", headers: { "Cache-Control": "no-cache" } });
        if (!response.ok) {
          // Fallback to direct root path if /downloads/ folder is missing on server
          const fallbackUrl = `${selectedDownload.downloadUrl.replace("/downloads/", "/")}?v=${Date.now()}`;
          const fallbackRes = await fetch(fallbackUrl, { cache: "no-store" });
          if (!fallbackRes.ok) {
            window.open(fallbackUrl, "_blank");
            return;
          }
          const blob = await fallbackRes.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = selectedDownload.filename;
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }, 100);
          return;
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = selectedDownload.filename;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, 100);
      } catch (err) {
        // Ultimate fallback
        window.open(`${selectedDownload.downloadUrl}?v=${Date.now()}`, "_blank");
      }
    }
  };

  const SKILLS_LIST = [
    { name: "Next.js", level: 95, icon: "N" },
    { name: "React.js", level: 95, icon: "⚛" },
    { name: "Node.js", level: 90, icon: "⬢" },
    { name: "TypeScript", level: 90, icon: "TS" },
    { name: "Tailwind CSS", level: 95, icon: "≈" },
    { name: "UI/UX Design", level: 95, icon: "❖" },
    { name: "Figma", level: 90, icon: "F" },
    { name: "WordPress", level: 85, icon: "W" },
    { name: "SEO", level: 90, icon: "⚡" },
    { name: "API Development", level: 85, icon: "</>" },
    { name: "Database (PostgreSQL)", level: 85, icon: "🐘" },
    { name: "DevOps & Deployment", level: 80, icon: "☁" },
    { name: "AI Integration", level: 80, icon: "🤖" },
    { name: "Performance", level: 90, icon: "⚡" },
    { name: "Version Control (Git)", level: 85, icon: "⎇" },
  ];

  const TOOLS_LIST = [
    { name: "VS Code", tag: "IDE" },
    { name: "Figma", tag: "Design" },
    { name: "Git & GitHub", tag: "Code" },
    { name: "PostgreSQL", tag: "DB" },
    { name: "Vercel", tag: "Cloud" },
    { name: "Docker", tag: "DevOps" },
    { name: "Firebase", tag: "Backend" },
    { name: "Cloudinary", tag: "Media" },
    { name: "Postman", tag: "API" },
    { name: "Slack", tag: "Team" },
    { name: "Canva", tag: "Graphics" },
    { name: "ChatGPT", tag: "AI" },
  ];

  return (
    <div className="relative min-h-screen pt-12 pb-24 text-white overflow-hidden">
      <CyberBackground variant="cyan" density={45} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. TOP EXECUTIVE HERO SPOTLIGHT (HIGH-TECH CYBER PORTRAIT + PARTICLES) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-card p-6 sm:p-10 border border-cyan-500/40 bg-zinc-950/85 shadow-[0_0_70px_rgba(0,240,255,0.25)] relative overflow-hidden">
          
          {/* Left Column: Official Portrait Photo with 60FPS Particles */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-4">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-emerald-400 to-amber-400 shadow-[0_0_50px_rgba(0,240,255,0.5)] group overflow-hidden">
              
              {/* 60FPS Particle Canvas Engine */}
              <PhotoParticles />

              <div className="relative z-10 w-full h-full rounded-[22px] overflow-hidden bg-zinc-950 border border-zinc-800">
                <Image
                  src="/founder-photo.jpg"
                  alt="Tanveer Hussain - Founder & CEO"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-50" />
              </div>

              {/* Glowing Live Status Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-cyan-400 text-xs font-mono font-bold text-cyan-300 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>🟢 Active Founder &amp; CEO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Details & Executive Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/60 text-xs font-mono font-bold text-cyan-300">
                <Sparkles size={14} className="text-cyan-400" />
                <span>Hello! I&apos;m 👋</span>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Digital Craftify Emblem"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                />
                <div className="flex flex-col text-right">
                  <span className="text-xs font-extrabold text-white">DIGITAL CRAFTIFY</span>
                  <span className="text-[9px] font-mono text-cyan-400">Crafting Digital Excellence</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Tanveer <span className="text-gradient-teal-cyan">Hussain</span>
              </h1>
              <p className="text-lg sm:text-xl font-mono font-bold text-cyan-400 flex items-center gap-2">
                Founder &amp; CEO | Digital Craftify <span className="text-zinc-500">&gt;</span>
              </p>
              <p className="text-xs sm:text-sm font-mono text-zinc-300 tracking-wide">
                Web Developer | Designer | Entrepreneur | Problem Solver | Tech Enthusiast
              </p>
            </div>

            <p className="text-xs sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              I help businesses and individuals build a powerful digital presence with modern, premium, and results-driven web solutions. My mission is to deliver high-quality digital services that are not only visually stunning but also functional, user-friendly, and growth-oriented.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                <Button variant="gradient" size="md" rightIcon={<Rocket size={16} className="text-zinc-950" />}>
                  Hire Me ➔
                </Button>
              </a>
              <Button variant="glass" size="md" onClick={triggerResumeDownload} leftIcon={<Download size={16} />}>
                Download Resume (PDF)
              </Button>
              <Button variant="outline" size="md" onClick={triggerVCardDownload} leftIcon={<QrCode size={16} />}>
                Save Contact (.vcf)
              </Button>
              <Button variant="glass" size="md" onClick={triggerProfilePdfDownload} leftIcon={<FileText size={16} />}>
                Download Profile (PDF)
              </Button>
            </div>

            {/* Quote Ribbon */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-200 italic flex items-center gap-3">
              <MessageSquareQuote size={20} className="text-cyan-400 shrink-0" />
              <span>&ldquo;We don&apos;t just build websites, we build digital experiences that grow businesses.&rdquo;</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. METRICS BAR (4 STATS CARDS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Rocket size={24} />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">5+</div>
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase">Years Experience</div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Folder size={24} />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">250+</div>
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase">Projects Completed</div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Smile size={24} />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">100+</div>
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase">Happy Clients</div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Headphones size={24} />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">24/7</div>
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase">Support Available</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE CATEGORY TAB FILTER BAR FOR HIGH-TECH EXPLORATION */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Sparkles size={14} /> ALL OVERVIEW
          </button>

          <button
            onClick={() => setActiveTab("about")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "about"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Laptop size={14} /> WHO I AM
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "skills"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Code2 size={14} /> SKILLS &amp; EXPERTISE
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "services"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Zap size={14} /> SERVICES &amp; TOOLS
          </button>

          <button
            onClick={() => setActiveTab("work")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "work"
                ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            <Folder size={14} /> PORTFOLIO &amp; QR
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 4. 2-COLUMN MAIN CONTENT (EXECUTIVE SIDEBAR + COMPREHENSIVE SECTIONS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: EXECUTIVE VCARD CARD & ALL SOCIAL MEDIA LOGINS (FULL LINE EACH) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Profile Contact Sidebar Box */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/90 space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.15)]">
              
              {/* Cyber Portrait Frame */}
              <div className="text-center space-y-3">
                <div className="relative mx-auto w-36 h-44 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-teal-400 to-amber-400 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-zinc-900">
                    <Image
                      src="/founder-photo.jpg"
                      alt="Tanveer Hussain"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-white">TANVEER HUSSAIN</h2>
                  <span className="inline-block px-3 py-1 mt-1 rounded-full bg-cyan-950 border border-cyan-500/60 text-[10px] font-mono font-bold text-cyan-300 uppercase">
                    FOUNDER &amp; CEO
                  </span>
                  <p className="text-xs font-mono text-cyan-400 font-bold mt-1">DIGITAL CRAFTIFY</p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Web Developer | Designer | Entrepreneur | Problem Solver | Tech Enthusiast
                  </p>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3 pt-2 border-t border-zinc-800/80 text-xs font-mono">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  CONTACT DETAILS
                </div>

                <div
                  onClick={() => copyText(SITE_CONFIG.contact.phone, "phone")}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <Phone size={14} className="text-cyan-400" />
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </div>
                  <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400" />
                </div>
                {copiedPhone && <span className="text-[10px] text-emerald-400 block font-bold">Copied phone!</span>}

                <div
                  onClick={() => copyText(SITE_CONFIG.contact.email, "email")}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-300 truncate">
                    <Mail size={14} className="text-cyan-400 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.contact.email}</span>
                  </div>
                  <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400 shrink-0" />
                </div>
                {copiedEmail && <span className="text-[10px] text-emerald-400 block font-bold">Copied email!</span>}

                <div
                  onClick={() => copyText("www.digitalcraftify.com", "web")}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <Globe size={14} className="text-cyan-400" />
                    <span>www.digitalcraftify.com</span>
                  </div>
                  <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400" />
                </div>
                {copiedWeb && <span className="text-[10px] text-emerald-400 block font-bold">Copied website!</span>}

                <div
                  onClick={() => copyText(SITE_CONFIG.contact.address.formatted, "address")}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5 text-zinc-300 truncate">
                    <MapPin size={14} className="text-cyan-400 shrink-0" />
                    <span className="truncate">Al Mehdi Colony Yayil Rawalpora Srinagar J&amp;K 190005, IN</span>
                  </div>
                  <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400 shrink-0" />
                </div>
                {copiedAddress && <span className="text-[10px] text-emerald-400 block font-bold">Copied address!</span>}
              </div>

              {/* SOCIAL MEDIA & INSTANT MESSAGING CONNECT (EACH SOCIAL IN ONE FULL LINE SECTION) */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-800/80 text-xs font-mono">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  SOCIAL &amp; MESSAGING CONNECT
                </div>

                <div className="space-y-2">
                  {/* WhatsApp Direct - Full Line */}
                  <a
                    href="https://wa.me/919149455143"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageSquare size={15} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                      WhatsApp Direct Chat
                    </span>
                    <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* BOTIM Direct - Full Line */}
                  <a
                    href="tel:+919149455143"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                      BOTIM Instant Call &amp; Chat
                    </span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* GitHub - Full Line */}
                  <a
                    href="https://github.com/digitalcraftify5"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github size={15} className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-transform" />
                      GitHub Developer Profile
                    </span>
                    <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* Discord - Full Line */}
                  <a
                    href="https://discord.gg/digitalcraftify5"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageSquareQuote size={15} className="text-purple-400 group-hover:scale-110 transition-transform" />
                      Discord Community Server
                    </span>
                    <span className="text-purple-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* Facebook - Full Line */}
                  <a
                    href="https://facebook.com/digitalcraftify5"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Facebook size={15} className="text-blue-400 group-hover:scale-110 transition-transform" />
                      Facebook Official Page
                    </span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* Instagram - Full Line */}
                  <a
                    href="https://instagram.com/digitalcraftify5"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-pink-950/80 border border-pink-500/50 hover:border-pink-400 text-pink-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Instagram size={15} className="text-pink-400 group-hover:scale-110 transition-transform" />
                      Instagram Official Handle
                    </span>
                    <span className="text-pink-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>

                  {/* LinkedIn - Full Line */}
                  <a
                    href="https://linkedin.com/company/digitalcraftify5"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-2.5 rounded-xl bg-sky-950/80 border border-sky-500/50 hover:border-sky-400 text-sky-300 hover:text-white transition-all flex items-center justify-between font-bold group shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin size={15} className="text-sky-400 group-hover:scale-110 transition-transform" />
                      LinkedIn Company Page
                    </span>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions List */}
              <div className="space-y-2 pt-2 border-t border-zinc-800/80 text-xs font-mono">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  QUICK ACTIONS
                </div>

                <button onClick={triggerVCardDownload} className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between font-bold">
                  <span className="flex items-center gap-2"><QrCode size={14} className="text-cyan-400" /> Save Contact (.vcf)</span>
                  <span>➔</span>
                </button>

                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between font-bold">
                  <span className="flex items-center gap-2"><Phone size={14} className="text-cyan-400" /> Call Now</span>
                  <span>➔</span>
                </a>

                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between font-bold">
                  <span className="flex items-center gap-2"><Mail size={14} className="text-cyan-400" /> Email Me</span>
                  <span>➔</span>
                </a>

                <a href="https://maps.google.com/?q=Al+Mehdi+Colony+Yayil+Rawalpora+Srinagar+Jammu+Kashmir+190005" target="_blank" rel="noreferrer" className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white transition-all flex items-center justify-between font-bold">
                  <span className="flex items-center gap-2"><Navigation size={14} className="text-pink-400" /> Get Direction</span>
                  <span>➔</span>
                </a>
              </div>

              {/* NFC Digital Card Capsule */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-cyan-500/40 text-center space-y-3 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
                  <span>NFC DIGITAL CARD</span>
                  <span className="animate-pulse">)))</span>
                </div>
                <Image
                  src="/logo.png"
                  alt="Digital Craftify Emblem"
                  width={44}
                  height={44}
                  className="h-11 w-11 mx-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]"
                />
                <span className="text-[10px] font-mono text-cyan-300 font-bold block">TAP TO CONNECT</span>
                <p className="text-[10px] font-mono text-zinc-400">Share Instantly. Connect Effortlessly.</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: FULL FEATURED SECTIONS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. WHO I AM SECTION (WITH ELEGANT CALLIGRAPHY SIGNATURE) */}
            {(activeTab === "all" || activeTab === "about") && (
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Laptop size={20} className="text-cyan-400" />
                    <span>WHO I AM</span>
                  </h3>
                  <span className="text-cyan-400 font-mono text-xs font-bold">•••</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <p>
                    I&apos;m Tanveer Hussain, the Founder &amp; CEO of Digital Craftify. I help businesses and individuals build a powerful online presence with modern, premium, and results-driven digital solutions.
                  </p>
                  <p>
                    My mission is to deliver high-quality digital services that are not only visually stunning but also functional, user-friendly, and growth-oriented.
                  </p>

                  {/* Elegant Calligraphy Signature */}
                  <div className="pt-4 pb-2 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest block mb-1">OFFICIAL CALLIGRAPHY SIGNATURE</span>
                      <span
                        className="text-4xl sm:text-5xl font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        style={{ fontFamily: "'Great Vibes', 'Dancing Script', cursive" }}
                      >
                        Tanveer Hussain
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      VERIFIED CEO
                    </span>
                  </div>
                </div>

                {/* 6 Core Philosophy Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <Brain size={15} className="text-cyan-400" /> Problem Solver
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-emerald-300 flex items-center gap-2">
                    <Sparkles size={15} className="text-emerald-400" /> Creative Thinker
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-amber-300 flex items-center gap-2">
                    <ShieldCheck size={15} className="text-amber-400" /> Quality Focused
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-purple-300 flex items-center gap-2">
                    <Smile size={15} className="text-purple-400" /> Client First Approach
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-pink-300 flex items-center gap-2">
                    <BookOpen size={15} className="text-pink-400" /> Always Learning
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <TrendingUp size={15} className="text-cyan-400" /> Growth Mindset
                  </div>
                </div>
              </div>
            )}

            {/* 2. SKILLS & EXPERTISE SECTION (WITH PERCENTAGE BARS) */}
            {(activeTab === "all" || activeTab === "skills") && (
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Code2 size={20} className="text-cyan-400" />
                    <span>SKILLS &amp; EXPERTISE</span>
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-bold">Full-Stack Proficiency</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILLS_LIST.map((skill) => (
                    <div key={skill.name} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-2 group hover:border-cyan-500/40 transition-all">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="text-white flex items-center gap-2">
                          <span className="h-5 w-5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 flex items-center justify-center text-[10px]">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>

                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. SERVICES I PROVIDE GRID (6 CARDS) */}
            {(activeTab === "all" || activeTab === "services") && (
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-6 shadow-xl">
                <div className="space-y-1 border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Zap size={20} className="text-cyan-400" />
                    <span>SERVICES I PROVIDE</span>
                  </h3>
                  <p className="text-xs text-zinc-400">Modern, scalable and result-driven solutions for your business.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <Code2 size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">Web Development</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Modern, responsive &amp; high-performance websites and web applications.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <Palette size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">UI/UX Design</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Clean, creative &amp; user-friendly designs that convert.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <ShoppingCart size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">E-Commerce Solutions</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Complete online stores with secure payment integration.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <TrendingUp size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">SEO &amp; Digital Marketing</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Rank higher, get found more &amp; grow your online business.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <Award size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">Brand Identity</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Logo, brand style, colors, and identity that represent your business.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-2.5 group">
                    <Headphones size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-white">Maintenance &amp; Support</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Ongoing support, updates &amp; maintenance for peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. RESOURCES & TOOLS + SCAN QR SECTION */}
            {(activeTab === "all" || activeTab === "services" || activeTab === "work") && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Resources & Tools */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-4 shadow-xl">
                  <div className="space-y-1 border-b border-zinc-800 pb-3">
                    <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                      <Layers size={18} className="text-cyan-400" />
                      <span>RESOURCES &amp; TOOLS</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {TOOLS_LIST.map((tool) => (
                      <div key={tool.name} className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-1 hover:border-cyan-500/40 transition-all">
                        <span className="text-xs font-bold text-white block truncate">{tool.name}</span>
                        <span className="text-[9px] font-mono text-cyan-400 block">{tool.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scan QR Code Box */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/90 space-y-4 text-center shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between">
                  <div className="space-y-3 flex flex-col items-center">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">SCAN TO VIEW MY DIGITAL PROFILE</span>
                    <div className="p-3 rounded-2xl bg-white border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex flex-col items-center">
                      <Image
                        src="/founder-qr.png"
                        alt="Tanveer Hussain Founder Profile Scannable QR Code"
                        width={140}
                        height={140}
                        className="h-36 w-36 object-contain rounded-lg"
                      />
                      <span className="block text-[9px] font-mono text-zinc-950 font-extrabold mt-1 tracking-wider">REAL SCANNABLE QR CODE</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="gradient" size="sm" onClick={shareLink} leftIcon={<Share2 size={14} className="text-zinc-950" />}>
                      {shared ? "Copied!" : "Share My Profile"}
                    </Button>
                    <Button variant="glass" size="sm" onClick={triggerProfilePdfDownload} leftIcon={<Download size={14} />}>
                      Download Profile PDF
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* 5. LET'S BUILD SOMETHING AMAZING TOGETHER CTA BANNER */}
            <div className="rounded-3xl glass-card p-8 sm:p-10 border border-cyan-500/40 bg-gradient-to-r from-zinc-950 via-cyan-950/40 to-zinc-950 text-center space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
              <div className="space-y-2 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  LET&apos;S BUILD SOMETHING AMAZING TOGETHER
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Have a project in mind or want to collaborate? I&apos;m always open to discussing new ideas.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                  <Button variant="gradient" size="lg" rightIcon={<Rocket size={18} className="text-zinc-950" />}>
                    Start a Project ➔
                  </Button>
                </a>
                <Button variant="glass" size="lg" onClick={triggerResumeDownload} leftIcon={<Download size={18} />}>
                  Download Resume PDF
                </Button>
              </div>

              {/* 5 Guarantee Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-zinc-800/80 text-[10px] sm:text-xs font-mono font-bold">
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-cyan-500/40 text-cyan-300 flex items-center gap-1.5">
                  <Sparkles size={12} /> HIGH QUALITY
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                  <Zap size={12} /> ON TIME DELIVERY
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-300 flex items-center gap-1.5">
                  <CheckCircle size={12} /> 100% SATISFACTION
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-purple-500/40 text-purple-300 flex items-center gap-1.5">
                  <Headphones size={12} /> 24/7 SUPPORT
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-cyan-500/40 text-cyan-300 flex items-center gap-1.5">
                  <ShieldCheck size={12} /> CLEAN SOLUTIONS
                </span>
              </div>

              {/* Calligraphy Signature in CTA footer */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <span className="text-xs font-mono text-zinc-400 italic">Signature:</span>
                <span
                  className="text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                  style={{ fontFamily: "'Great Vibes', 'Dancing Script', cursive" }}
                >
                  Tanveer Hussain
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Download Confirmation Modal */}
      <DownloadConfirmationModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        downloadItem={selectedDownload}
        onConfirm={executeActualDownload}
      />
    </div>
  );
}
