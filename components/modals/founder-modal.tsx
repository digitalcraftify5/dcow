"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Zap,
  Mail,
  Sparkles,
  Globe,
  CheckCircle2,
  Phone,
  MapPin,
  QrCode,
  Download,
  Check,
  Share2,
  Award,
  FileText,
  MessageSquareQuote,
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
} from "lucide-react";
import { CyberBackground } from "@/components/ui/cyber-background";
import { Button } from "@/components/buttons/button";
import { SITE_CONFIG } from "@/constants/site";

export interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Interactive Animated Canvas Particles Component around the Profile Photo
const PhotoParticles: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 280);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const numParticles = 35;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1,
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
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.25 * (1 - dist / 55)})`;
            ctx.lineWidth = 0.5;
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
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
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
      className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
    />
  );
};

export const FounderModal: React.FC<FounderModalProps> = ({ isOpen, onClose }) => {
  const [copiedPhone, setCopiedPhone] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedWeb, setCopiedWeb] = React.useState(false);
  const [copiedAddress, setCopiedAddress] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  if (!isOpen) return null;

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
        url: "https://www.digitalcraftify.com",
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText("https://www.digitalcraftify.com");
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const downloadVCard = () => {
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
    document.body.removeChild(link);
  };

  const downloadResume = () => {
    window.open("https://www.digitalcraftify.com", "_blank");
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
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "DevOps", level: 80, icon: "☁" },
  ];

  const TOOLS_LIST = [
    { name: "VS Code", icon: "/logo.png" },
    { name: "Figma", icon: "/logo.png" },
    { name: "Git & GitHub", icon: "/logo.png" },
    { name: "Postman", icon: "/logo.png" },
    { name: "Vercel", icon: "/logo.png" },
    { name: "Docker", icon: "/logo.png" },
    { name: "Canva", icon: "/logo.png" },
    { name: "ChatGPT", icon: "/logo.png" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
        {/* Glassmorphic Cyber Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/95 backdrop-blur-3xl"
        />

        {/* Ultra-Expanded Luxury Founder Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-7xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-cyan-500/40 bg-zinc-950/95 text-white shadow-[0_0_80px_rgba(0,240,255,0.25)] custom-scrollbar"
        >
          <CyberBackground variant="cyan" density={35} />

          {/* TOP MODAL HEADER BAR */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-800/90 bg-zinc-950/90 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Digital Craftify Emblem"
                width={36}
                height={36}
                className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]"
              />
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white leading-tight">
                  DIGITAL <span className="text-gradient-teal-cyan">CRAFTIFY</span>
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  Crafting Digital Excellence
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                <Button variant="gradient" size="sm" leftIcon={<Phone size={13} className="text-zinc-950" />}>
                  Direct Call
                </Button>
              </a>

              <button
                onClick={onClose}
                className="rounded-full p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-cyan-500 hover:text-white transition-all hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MODAL MAIN CONTENT SCROLL AREA */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-12">
            
            {/* 1. HERO SPOTLIGHT WITH ANIMATED PARTICLES AROUND PHOTO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-card p-6 sm:p-8 border border-cyan-500/30 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,240,255,0.12)] relative overflow-hidden">
              
              {/* Left Side: Photo Frame with Animated Particle Canvas */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-4">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-emerald-400 to-amber-400 shadow-[0_0_40px_rgba(0,240,255,0.4)] group overflow-hidden">
                  
                  {/* Realtime Particle Canvas Background inside photo frame */}
                  <PhotoParticles />

                  <div className="relative z-10 w-full h-full rounded-[22px] overflow-hidden bg-zinc-950 border border-zinc-800">
                    <Image
                      src="/founder-photo.jpg"
                      alt="Tanveer Hussain - Founder & CEO"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Glowing Status Badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-cyan-400/80 text-[10px] font-mono font-bold text-cyan-300 shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>🟢 Active Founder &amp; CEO</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Executive Information Header */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-xs font-mono font-bold text-cyan-300">
                  <Sparkles size={14} className="text-cyan-400" />
                  <span>Hello! I&apos;m 👋</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                    Tanveer <span className="text-gradient-teal-cyan">Hussain</span>
                  </h2>
                  <p className="text-base sm:text-lg font-mono font-bold text-cyan-400 flex items-center gap-2">
                    Founder &amp; CEO | Digital Craftify <span className="text-zinc-500">&gt;</span>
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400">
                    Web Developer | Designer | Entrepreneur | Problem Solver
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
                  I help businesses and individuals build a powerful digital presence with modern, premium, and results-driven web solutions. My mission is to deliver high-quality digital services that are not only visually stunning but also functional, user-friendly, and growth-oriented.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                    <Button variant="gradient" size="md" rightIcon={<Rocket size={16} className="text-zinc-950" />}>
                      Hire Me ➔
                    </Button>
                  </a>
                  <Button variant="glass" size="md" onClick={downloadResume} leftIcon={<Download size={16} />}>
                    Download Resume
                  </Button>
                  <Button variant="outline" size="md" onClick={downloadVCard} leftIcon={<QrCode size={16} />}>
                    Add to Contacts
                  </Button>
                </div>
              </div>
            </div>

            {/* 2. METRICS BAR (4 CARDS) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
                <div className="mx-auto h-10 w-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Rocket size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">5+</div>
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase">Years Experience</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
                <div className="mx-auto h-10 w-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Folder size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">250+</div>
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase">Projects Completed</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
                <div className="mx-auto h-10 w-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Smile size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">100+</div>
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase">Happy Clients</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl glass-card border border-cyan-500/30 bg-zinc-900/70 text-center space-y-2 shadow-lg group hover:border-cyan-400 transition-all">
                <div className="mx-auto h-10 w-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Headphones size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase">Client Support</div>
              </div>
            </div>

            {/* 3. ROW: ABOUT ME | GET IN TOUCH | NFC DIGITAL CARD */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* About Me Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-card border border-zinc-800 bg-zinc-900/70 space-y-6 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Laptop size={20} className="text-cyan-400" />
                    <span>About Me</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    I&apos;m Tanveer Hussain, the Founder &amp; CEO of Digital Craftify. My mission is to deliver high-quality digital services that are not only visually stunning but also functional, user-friendly, and growth-oriented. I believe in creativity, clean code, and long-term client success.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <Sparkles size={14} className="text-cyan-400" /> Creative
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-emerald-300 flex items-center gap-2">
                    <Zap size={14} className="text-emerald-400" /> Innovative
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-amber-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-amber-400" /> Professional
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-bold text-purple-300 flex items-center gap-2">
                    <TrendingUp size={14} className="text-purple-400" /> Result Driven
                  </div>
                </div>
              </div>

              {/* Get In Touch Card */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl glass-card border border-zinc-800 bg-zinc-900/70 space-y-6 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Phone size={20} className="text-cyan-400" />
                    <span>Get In Touch</span>
                  </h3>
                  <p className="text-xs text-zinc-400">Let&apos;s create something amazing together.</p>

                  <div className="space-y-3 pt-1 text-xs font-mono">
                    <div
                      onClick={() => copyText(SITE_CONFIG.contact.phone, "phone")}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-300">
                        <Phone size={14} className="text-cyan-400" />
                        <span>{SITE_CONFIG.contact.phone}</span>
                      </div>
                      <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400" />
                    </div>
                    {copiedPhone && <span className="text-[10px] text-emerald-400 block font-bold">Copied phone number!</span>}

                    <div
                      onClick={() => copyText(SITE_CONFIG.contact.email, "email")}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-300 truncate">
                        <Mail size={14} className="text-cyan-400 shrink-0" />
                        <span className="truncate">{SITE_CONFIG.contact.email}</span>
                      </div>
                      <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400 shrink-0" />
                    </div>
                    {copiedEmail && <span className="text-[10px] text-emerald-400 block font-bold">Copied email address!</span>}

                    <div
                      onClick={() => copyText("www.digitalcraftify.com", "web")}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-300">
                        <Globe size={14} className="text-cyan-400" />
                        <span>www.digitalcraftify.com</span>
                      </div>
                      <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400" />
                    </div>
                    {copiedWeb && <span className="text-[10px] text-emerald-400 block font-bold">Copied website URL!</span>}

                    <div
                      onClick={() => copyText(SITE_CONFIG.contact.address.formatted, "address")}
                      className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-300 truncate">
                        <MapPin size={14} className="text-cyan-400 shrink-0" />
                        <span className="truncate">Al Mehdi Colony Yayil Rawalpora Srinagar J&amp;K 190005, IN</span>
                      </div>
                      <Copy size={13} className="text-zinc-500 group-hover:text-cyan-400 shrink-0" />
                    </div>
                    {copiedAddress && <span className="text-[10px] text-emerald-400 block font-bold">Copied full address!</span>}
                  </div>
                </div>

                {/* Social Strip inside Get in Touch */}
                <div className="pt-2 border-t border-zinc-800/80">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-2 font-bold uppercase">Share Profile:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-emerald-500 text-emerald-400 transition-colors"
                      title="WhatsApp"
                    >
                      <MessageSquareQuote size={15} />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-cyan-500 text-cyan-400 transition-colors"
                      title="Facebook"
                    >
                      <Facebook size={15} />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-pink-500 text-pink-400 transition-colors"
                      title="Instagram"
                    >
                      <Instagram size={15} />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.discord}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-indigo-500 text-indigo-400 transition-colors"
                      title="Discord"
                    >
                      <MessageSquare size={15} />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-500 text-white transition-colors"
                      title="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* NFC Digital Card */}
              <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl glass-card border border-cyan-500/40 bg-zinc-950/90 space-y-6 flex flex-col justify-between text-center shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                    <span>NFC Digital Card</span>
                    <span className="text-lg leading-none animate-pulse">)))</span>
                  </div>

                  <div className="w-full p-6 rounded-2xl bg-gradient-to-tr from-zinc-900 via-zinc-950 to-zinc-900 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.2)] space-y-4 flex flex-col items-center">
                    <Image
                      src="/logo.png"
                      alt="Digital Craftify Emblem"
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                    />
                    <span className="text-xs font-mono text-cyan-300 font-bold tracking-widest block">TAP TO CONNECT</span>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-400">Instantly save my contact to your phone</p>
                </div>

                <Button variant="gradient" size="sm" onClick={downloadVCard} leftIcon={<Download size={14} className="text-zinc-950" />}>
                  Add to Contacts
                </Button>
              </div>
            </div>

            {/* 4. SKILLS & TECHNOLOGIES GRID WITH PERCENTAGE BARS */}
            <div className="space-y-6 rounded-3xl glass-card p-6 sm:p-8 border border-zinc-800 bg-zinc-900/60 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Code2 size={20} className="text-cyan-400" />
                  <span>Skills &amp; Technologies</span>
                </h3>
                <span className="text-xs font-mono text-cyan-400 font-bold">100% Expert Level</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SKILLS_LIST.map((skill) => (
                  <div key={skill.name} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-2 group hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <span className="text-white flex items-center gap-2">
                        <span className="h-6 w-6 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 flex items-center justify-center text-[10px]">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>

                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. SERVICES I PROVIDE GRID (6 CARDS) */}
            <div className="space-y-6 rounded-3xl glass-card p-6 sm:p-8 border border-zinc-800 bg-zinc-900/60 shadow-xl">
              <div className="space-y-1 border-b border-zinc-800 pb-4">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Zap size={20} className="text-cyan-400" />
                  <span>Services I Provide</span>
                </h3>
                <p className="text-xs text-zinc-400">Modern, scalable and result-driven solutions for your business.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <Code2 size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">Web Development</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Modern, responsive &amp; high-performance websites and web applications built with Next.js &amp; React.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <Palette size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">UI/UX Design</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Clean, creative &amp; user-friendly designs and design systems that convert visitors into clients.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <ShoppingCart size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">E-Commerce Solutions</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Complete online stores with high speed, custom checkout &amp; secure global payment gateway integrations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <TrendingUp size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">SEO &amp; Digital Marketing</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Rank higher, get found more &amp; grow your online business through technical SEO and growth campaigns.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <Award size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">Brand Identity</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Logo, brand style, typography, colors and complete visual identity that represent your business.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <ShieldCheck size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-base font-bold text-white">Maintenance &amp; Support</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Ongoing SLA support, speed optimizations, security updates &amp; maintenance for complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. FEATURED WORK & QR CODE SCANNER BOX */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Featured Work Grid */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-6 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Folder size={20} className="text-cyan-400" />
                    <span>Featured Work</span>
                  </h3>
                  <a href="/portfolio" className="text-xs font-mono text-cyan-400 hover:underline font-bold flex items-center gap-1">
                    View Portfolio <ExternalLink size={12} />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 group hover:border-cyan-500/40 transition-all">
                    <div className="h-32 rounded-xl bg-gradient-to-tr from-cyan-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                      💻 Business Website
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white">Corporate Portal</span>
                      <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px]">Web Dev</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 group hover:border-cyan-500/40 transition-all">
                    <div className="h-32 rounded-xl bg-gradient-to-tr from-emerald-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                      🛒 E-Commerce Store
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white">Global Online Store</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px]">E-Commerce</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 group hover:border-cyan-500/40 transition-all">
                    <div className="h-32 rounded-xl bg-gradient-to-tr from-purple-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center text-purple-400 font-mono text-xs font-bold">
                      ❖ Company Corporate
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white">Custom Brand Site</span>
                      <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px]">UI/UX Design</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 group hover:border-cyan-500/40 transition-all">
                    <div className="h-32 rounded-xl bg-gradient-to-tr from-amber-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
                      ⚡ Dashboard &amp; SaaS
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white">Cloud SaaS Web App</span>
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px]">Web Application</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Scanner Box */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/40 bg-zinc-950/90 space-y-6 flex flex-col justify-between text-center shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[10px] font-mono text-cyan-300 font-bold uppercase">
                    <QrCode size={13} /> Scan to View My Profile
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900 border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.3)] relative">
                    <QrCode size={130} className="text-cyan-400 mx-auto" />
                    <span className="block text-[9px] font-mono text-cyan-300 font-bold mt-3">HIGH PROFILE QR CODE</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="gradient" size="sm" onClick={shareLink} leftIcon={<Share2 size={14} className="text-zinc-950" />}>
                    {shared ? "Copied!" : "Share My Profile"}
                  </Button>
                  <Button variant="glass" size="sm" onClick={downloadVCard} leftIcon={<Download size={14} />}>
                    Save to Contacts
                  </Button>
                </div>
              </div>
            </div>

            {/* 7. RESOURCES & TOOLS + WHY CHOOSE ME SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Resources & Tools I Use */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-zinc-800 bg-zinc-900/60 space-y-6 flex flex-col justify-between shadow-xl">
                <div className="space-y-1 border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Laptop size={20} className="text-cyan-400" />
                    <span>Resources &amp; Tools I Use</span>
                  </h3>
                  <p className="text-xs text-zinc-400">Industry standard software &amp; development toolchain.</p>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                  {TOOLS_LIST.map((tool) => (
                    <div key={tool.name} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-1 hover:border-cyan-500/40 transition-all group">
                      <div className="h-7 w-7 mx-auto rounded-lg bg-zinc-900 flex items-center justify-center text-cyan-400 font-bold text-xs group-hover:scale-110 transition-transform">
                        {tool.name[0]}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-300 font-bold block truncate">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Me? Card with Glowing 3D Shield */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/40 bg-zinc-900/70 space-y-6 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <ShieldCheck size={22} className="text-cyan-400" />
                      <span>Why Choose Me?</span>
                    </h3>
                    <div className="h-10 w-10 rounded-full bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                      <CheckCircle size={20} />
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm font-mono text-zinc-200">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                      <span>Quality &amp; On-Time Delivery</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>Clean &amp; Scalable Architecture</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                      <span>Client Satisfaction First</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                      <span>Long-Term Support &amp; SLA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. BOTTOM CTA BANNER & MODAL FOOTER */}
            <div className="rounded-3xl glass-card p-8 border border-cyan-500/40 bg-gradient-to-r from-zinc-950 via-cyan-950/40 to-zinc-950 text-center space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.2)]">
              <div className="space-y-2 max-w-2xl mx-auto">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Ready to start your next project?</span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Your vision, my creativity — together we create success.
                </p>
              </div>

              <div className="flex justify-center">
                <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                  <Button variant="gradient" size="lg" rightIcon={<Rocket size={18} className="text-zinc-950" />}>
                    Get in Touch ➔
                  </Button>
                </a>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="Digital Craftify Logo" width={24} height={24} className="h-6 w-6 object-contain" />
                  <span>© 2026 Tanveer Hussain. All Rights Reserved.</span>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                  <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </a>
                  <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
                    Instagram
                  </a>
                  <a href={SITE_CONFIG.socials.discord} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                    Discord
                  </a>
                  <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                    Facebook
                  </a>
                  <a href={SITE_CONFIG.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
