import React from 'react';
import { ArrowDownRight, Phone } from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExplorePrograms }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b] pt-24 pb-16"
    >
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/images/hero_instruments_cinematic_1793912521668.jpg"
          alt="Master musical instruments at Wichita Falls Music Academy"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000 motion-safe:ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered Obsidian Scrims for Rich Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#09090b]/60 to-[#09090b]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Editorial Sub-kicker */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 sm:w-12 bg-amber-400/40" />
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-amber-300/90">
            Wichita Falls, Texas · Est. Texoma
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-amber-400/40" />
        </div>

        {/* Large, Elegant Typography Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] text-balance max-w-4xl">
          Master Your Craft.{' '}
          <span className="italic block mt-1 sm:mt-2 text-[#e5b869]">
            Elevate Your Sound.
          </span>
        </h1>

        {/* Subheadline with ample breathing space */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed text-balance">
          Bringing premier music instruction to the Texoma area. For all ages,
          all abilities, and all passions.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Primary CTA (Sleek pill-shaped button) */}
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#d4af37] text-zinc-950 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-98 cursor-pointer text-center whitespace-nowrap"
          >
            Start Your Journey
          </button>

          {/* Secondary CTA (Outline button) */}
          <a
            href="tel:9402356190"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-amber-400/60 text-zinc-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm text-sm tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2.5 text-center whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call (940) 235-6190</span>
          </a>
        </div>

        {/* Scroll cue link */}
        <div className="mt-16 sm:mt-20 flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-amber-300 transition-colors cursor-pointer">
          <button
            onClick={onExplorePrograms}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none"
          >
            <span>Explore Academy Programs</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
