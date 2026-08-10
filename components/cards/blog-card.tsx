import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Calendar, Clock } from "lucide-react";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  slug?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
  category,
  slug = "#",
}) => {
  return (
    <Link href={slug} className="block">
      <GlassPanel glow="purple" className="group overflow-hidden p-0 space-y-0">
        <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
          <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute top-4 left-4 rounded-full bg-cyan-500/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
            {category}
          </span>
        </div>
        <div className="p-6 space-y-3">
          {/* Line 1: Cyber Badge */}
          <div>
            <CyberBadge text={category.toUpperCase()} variant="cyan" />
          </div>

          <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
            <span className="flex items-center gap-1"><Calendar size={13} />{date}</span>
            <span className="flex items-center gap-1"><Clock size={13} />{readTime}</span>
          </div>

          {/* Line 2: Title (compact text-base) */}
          <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">{title}</h4>

          {/* Line 3: Excerpt (compact text-xs) */}
          <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2">{excerpt}</p>
        </div>
      </GlassPanel>
    </Link>
  );
};
