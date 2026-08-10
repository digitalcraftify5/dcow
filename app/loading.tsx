import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950">
      {/* Ambient Glow Behind Logo */}
      <div className="absolute h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute h-[300px] w-[300px] rounded-full bg-teal-500/10 blur-[100px] translate-x-10 -translate-y-10" />

      {/* Large Logo */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <Image
          src="/logo.png"
          alt="Digital Craftify"
          width={280}
          height={280}
          className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] object-contain drop-shadow-[0_0_60px_rgba(0,210,181,0.4)] animate-pulse"
          priority
        />

        {/* Brand Name */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Digital<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Craftify</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 tracking-widest uppercase font-medium">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Loading Indicator */}
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0ms]" />
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]" />
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
