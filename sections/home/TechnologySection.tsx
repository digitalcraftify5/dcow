"use client";

import * as React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AnimatedWrapper } from "@/components/animations/animated-wrapper";
import { CyberHeader } from "@/components/ui/cyber-header";
import { CyberBackground } from "@/components/ui/cyber-background";
import {
  Code,
  Layers,
  FileCode,
  Palette,
  Server,
  Terminal,
  Smartphone,
  Globe,
  Cloud,
  Cpu,
  Box,
  GitBranch,
  Boxes,
  Sparkles,
  Zap,
  Image as ImageIcon,
  PenTool,
  Video,
  Figma as FigmaIcon,
  Monitor,
  Component,
  BrainCircuit,
  ShieldCheck,
  Database,
  Workflow,
  Wrench,
  Film,
  Play,
  Share2,
} from "lucide-react";

export const TECH_STACK = [
  // Coding & Mobile Engineering
  { name: "Flutter Pro", desc: "Cross-Platform iOS & Android", icon: Smartphone, color: "text-cyan-300" },
  { name: "VS Code", desc: "Primary IDE & Extensions", icon: Monitor, color: "text-blue-400" },
  { name: "Next.js 16", desc: "App Router & SSR Engine", icon: Code, color: "text-white" },
  { name: "React 19", desc: "Modern UI Library", icon: Layers, color: "text-cyan-400" },
  { name: "TypeScript", desc: "Strict Type Safety", icon: FileCode, color: "text-blue-400" },
  { name: "Python & PyTorch", desc: "AI Models & Neural Nets", icon: BrainCircuit, color: "text-amber-400" },
  { name: "Node.js", desc: "Backend Microservices", icon: Server, color: "text-emerald-400" },
  { name: "Laravel", desc: "Robust API Framework", icon: Terminal, color: "text-rose-400" },
  { name: "GraphQL & Apollo", desc: "Unified Data Query API", icon: Share2, color: "text-pink-400" },
  { name: "WebAssembly (WASM)", desc: "High-Speed Browser C++", icon: Cpu, color: "text-purple-400" },
  
  // Design & Creative Software Suite
  { name: "Adobe Photoshop", desc: "Pro Raster & Digital Art", icon: ImageIcon, color: "text-sky-400" },
  { name: "Adobe Illustrator", desc: "Vector Logos & Branding", icon: PenTool, color: "text-orange-400" },
  { name: "Adobe After Effects", desc: "UI Motion & VFX Graphics", icon: Video, color: "text-purple-400" },
  { name: "Adobe Premiere Pro", desc: "4K Motion & Video Editing", icon: Film, color: "text-indigo-400" },
  { name: "Figma Pro", desc: "Design Systems & Wireframes", icon: FigmaIcon, color: "text-pink-400" },
  { name: "Blender 3D", desc: "3D Renders & Animations", icon: Component, color: "text-amber-500" },
  { name: "Spline 3D", desc: "Interactive Web 3D Canvas", icon: Sparkles, color: "text-cyan-300" },

  // Databases & Cloud Infrastructure
  { name: "Supabase & Postgres", desc: "Real-time DB & Auth", icon: Database, color: "text-emerald-300" },
  { name: "Redis In-Memory", desc: "Sub-ms Caching & Queues", icon: Zap, color: "text-red-400" },
  { name: "Tailwind CSS v4", desc: "Modern Utility Styling", icon: Palette, color: "text-cyan-400" },
  { name: "Docker", desc: "Container Workloads", icon: Box, color: "text-sky-400" },
  { name: "Kubernetes", desc: "Cluster Orchestration", icon: ShieldCheck, color: "text-blue-500" },
  { name: "Cloudflare", desc: "Edge CDN & DDoS Security", icon: Cloud, color: "text-amber-400" },
  { name: "AWS Cloud", desc: "Scalable Infrastructure", icon: Cpu, color: "text-orange-400" },
  { name: "GitHub Enterprise", desc: "CI/CD & Code Control", icon: GitBranch, color: "text-purple-400" },
  { name: "Three.js", desc: "WebGL 3D Web Engine", icon: Boxes, color: "text-cyan-400" },
  { name: "Postman & Insomnia", desc: "Automated API Testing", icon: Wrench, color: "text-orange-400" },
  { name: "Framer Motion", desc: "Interactive Micro-Animations", icon: Zap, color: "text-purple-300" },
];

export const TechnologySection: React.FC = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      <CyberBackground variant="purple" density={25} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedWrapper variant="fadeIn">
          <CyberHeader
            badgeText="Modern Architecture"
            title="Full Engineering & Creative Software Suite"
            description="From high-level coding frameworks to Photoshop design suites, we leverage world-class software to build stunning digital experiences."
            variant="purple"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {TECH_STACK.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <AnimatedWrapper key={tech.name} variant="scaleUp" delay={index * 0.03}>
                <GlassPanel glow="teal" className="group p-4 text-center space-y-2 hover:scale-105 transition-all">
                  <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 ${tech.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">{tech.name}</h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-1">{tech.desc}</p>
                </GlassPanel>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
