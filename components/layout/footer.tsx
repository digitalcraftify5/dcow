"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { Button } from "@/components/buttons/button";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { SERVICES_LIST, RESOURCES_LIST } from "@/components/navigation/mega-menu";
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  MessageSquare,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const QUICK_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Founder Profile", href: "/founder" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="glass-footer relative mt-24 text-zinc-300 overflow-hidden border-t border-zinc-800/80">
      <CyberBackground variant="cyan" density={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* Top Cyber Badge Capsule */}
        <div className="flex justify-center">
          <CyberBadge text="GLOBAL_CYBER_INFRASTRUCTURE" variant="cyan" />
        </div>

        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="group flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Digital Craftify Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Digital<span className="text-gradient-teal-cyan">Craftify</span>
                </span>
                <span className="text-[10px] font-mono font-extrabold tracking-widest text-cyan-400 uppercase -mt-0.5">
                  Architecting Digital Excellence
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            {/* Cyber Contact details capsule */}
            <div className="space-y-2.5 text-xs text-zinc-300 rounded-2xl glass-card p-4 border border-zinc-800/80 max-w-md">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-cyan-400 shrink-0" />
                <span>{SITE_CONFIG.contact.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-cyan-300 transition-colors font-mono">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-cyan-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-cyan-300 transition-colors font-mono">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Icons (Facebook, Instagram, GitHub, Discord, LinkedIn — Twitter Removed) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-lg"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110 shadow-lg"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:border-zinc-500/40 transition-all hover:scale-110 shadow-lg"
                aria-label="GitHub"
                title="GitHub Repository"
              >
                <Github size={16} />
              </a>
              <a
                href={SITE_CONFIG.socials.discord}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110 shadow-lg"
                aria-label="Discord"
                title="Discord Community"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Cyber Newsletter Box */}
          <div className="lg:col-span-6 space-y-4 rounded-2xl glass-card p-8 border border-zinc-800/80 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-mono text-xs text-cyan-400 font-bold flex items-center gap-1.5">
                <Terminal size={14} /> {"//"} NEWSLETTER_HUB {"//"}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded flex items-center gap-1">
                <Zap size={10} /> EDGE_LIVE
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white">Subscribe to Digital Insights</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get bi-weekly updates on web architecture, artificial intelligence, and digital agency growth strategies.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 font-mono">
                <ShieldCheck size={16} />
                <span>Thank you for subscribing to Digital Craftify dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-cyan-500 transition-colors font-mono"
                />
                <Button type="submit" variant="gradient" size="sm" rightIcon={<Send size={14} />}>
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Links Grid with Active Route Cyber Indicators */}
        <div className="grid grid-cols-2 gap-8 border-t border-zinc-800/80 pt-12 md:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-zinc-800/80 pb-2">
              <span className="font-mono text-cyan-400 text-xs font-bold">{"//"}</span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Quick Links</h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {QUICK_LINKS.map((item) => {
                const active = isRouteActive(item.href);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`transition-colors flex items-center gap-1.5 ${
                        active
                          ? "text-emerald-300 font-semibold bg-emerald-950/80 border border-emerald-400 px-2.5 py-1 rounded-lg w-fit shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "text-zinc-300 hover:text-cyan-400"
                      }`}
                    >
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <span className="text-zinc-600">›</span>
                      )}
                      {item.name}
                      {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-zinc-800/80 pb-2">
              <span className="font-mono text-cyan-400 text-xs font-bold">{"//"}</span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Core Services</h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_LIST.slice(0, 7).map((s) => {
                const active = isRouteActive(s.href);
                return (
                  <li key={s.title}>
                    <Link
                      href={s.href}
                      className={`transition-colors flex items-center gap-1.5 ${
                        active
                          ? "text-emerald-300 font-semibold bg-emerald-950/80 border border-emerald-400 px-2.5 py-1 rounded-lg w-fit shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "text-zinc-300 hover:text-cyan-400"
                      }`}
                    >
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <span className="text-zinc-600">›</span>
                      )}
                      {s.title}
                      {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Col 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-zinc-800/80 pb-2">
              <span className="font-mono text-cyan-400 text-xs font-bold">{"//"}</span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Specializations</h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_LIST.slice(7, 14).map((s) => {
                const active = isRouteActive(s.href);
                return (
                  <li key={s.title}>
                    <Link
                      href={s.href}
                      className={`transition-colors flex items-center gap-1.5 ${
                        active
                          ? "text-emerald-300 font-semibold bg-emerald-950/80 border border-emerald-400 px-2.5 py-1 rounded-lg w-fit shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "text-zinc-300 hover:text-cyan-400"
                      }`}
                    >
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <span className="text-zinc-600">›</span>
                      )}
                      {s.title}
                      {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 border-b border-zinc-800/80 pb-2">
              <span className="font-mono text-purple-400 text-xs font-bold">{"//"}</span>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Resources</h4>
            </div>
            <ul className="space-y-2.5 text-xs">
              {RESOURCES_LIST.map((r) => {
                const active = isRouteActive(r.href);
                return (
                  <li key={r.title}>
                    <Link
                      href={r.href}
                      className={`transition-colors flex items-center gap-1.5 ${
                        active
                          ? "text-emerald-300 font-semibold bg-emerald-950/80 border border-emerald-400 px-2.5 py-1 rounded-lg w-fit shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "text-zinc-300 hover:text-purple-400"
                      }`}
                    >
                      {active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <span className="text-zinc-600">›</span>
                      )}
                      {r.title}
                      {active && <span className="text-[9px] text-emerald-400 font-bold font-mono">{"//"} ON</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Cyber Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span>© 2026 {SITE_CONFIG.legalName}</span>
            <span className="text-zinc-700">|</span>
            <span className="text-[11px] text-cyan-400/80">{"//"} SYS.VER v2026.8.6</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-200 transition-colors">Terms of Service</Link>
            <button onClick={scrollToTop} className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
              Back to top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
