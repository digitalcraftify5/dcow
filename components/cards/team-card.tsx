import * as React from "react";
import Image from "next/image";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Heading4, SmallText } from "@/components/ui/typography";

export interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  socials?: { twitter?: string; linkedin?: string; github?: string };
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  imageUrl,
  bio,
  socials,
}) => {
  return (
    <GlassPanel glow="cyan" className="group text-center space-y-4">
      <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
        <Image src={imageUrl} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div>
        <Heading4 className="text-white group-hover:text-cyan-400 transition-colors">{name}</Heading4>
        <SmallText className="text-cyan-400 font-medium">{role}</SmallText>
      </div>
      {bio && <p className="text-xs text-zinc-400 line-clamp-2">{bio}</p>}
      {socials && (
        <div className="flex justify-center gap-3 text-xs text-zinc-400">
          {socials.twitter && <a href={socials.twitter} className="hover:text-cyan-400 transition-colors">Twitter</a>}
          {socials.linkedin && <a href={socials.linkedin} className="hover:text-cyan-400 transition-colors">LinkedIn</a>}
          {socials.github && <a href={socials.github} className="hover:text-cyan-400 transition-colors">GitHub</a>}
        </div>
      )}
    </GlassPanel>
  );
};
