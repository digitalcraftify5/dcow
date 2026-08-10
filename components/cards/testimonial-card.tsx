import * as React from "react";
import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Star, Building2 } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
  image?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  rating = 5,
  image,
}) => {
  return (
    <GlassPanel glow="teal" className="flex flex-col justify-between space-y-6 overflow-hidden p-0">
      {/* Futuristic Card Header Image */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
          <Image
            src={image}
            alt={company}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-cyan-500/40 px-3 py-1 text-xs font-bold text-cyan-400">
            <Building2 size={14} />
            {company}
          </div>
        </div>
      )}

      <div className="px-6 space-y-3 pt-4">
        {/* Line 1: Cyber Badge */}
        <div>
          <CyberBadge text="VERIFIED_ENDORSEMENT" variant="teal" />
        </div>

        {/* Line 2: Rating Stars */}
        <div className="flex gap-1 text-amber-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        {/* Line 3: Quote Description (compact text-xs) */}
        <p className="italic text-xs text-zinc-300 leading-relaxed font-normal">&ldquo;{quote}&rdquo;</p>
      </div>

      <div className="flex items-center gap-3 px-6 pb-6 pt-3 border-t border-zinc-800/60">
        {avatarUrl ? (
          <Image src={avatarUrl} alt={author} width={36} height={36} className="rounded-full object-cover border border-cyan-500/40" />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/40">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-xs font-bold text-white">{author}</h4>
          <span className="text-[11px] text-zinc-400 block">
            {role} at <span className="text-cyan-400 font-semibold">{company}</span>
          </span>
        </div>
      </div>
    </GlassPanel>
  );
};
