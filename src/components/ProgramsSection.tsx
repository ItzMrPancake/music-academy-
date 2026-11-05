import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROGRAMS, ProgramItem } from '../utils/academy.ts';

interface ProgramsSectionProps {
  onInquireProgram: (programId: string) => void;
}

// Minimalist custom SVG instrument icons
const InstrumentIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'guitar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="17" r="4" />
          <path d="M12 13V3" />
          <path d="M9 3h6" />
          <path d="M10 6h4" />
          <path d="M10 9h4" />
        </svg>
      );
    case 'piano':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 5v8" />
          <path d="M11 5v8" />
          <path d="M15 5v8" />
          <path d="M7 19v-6" />
          <path d="M11 19v-6" />
          <path d="M15 19v-6" />
        </svg>
      );
    case 'voice':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      );
    case 'drums':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <ellipse cx="12" cy="7" rx="8" ry="3" />
          <path d="M4 7v8c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
          <path d="m5 10 7 4" />
          <path d="m19 10-7 4" />
        </svg>
      );
    case 'violin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 3v18" />
          <path d="M8 8a4 4 0 0 0 8 0" />
          <path d="M8 16a4 4 0 0 0 8 0" />
          <path d="M9 12h6" />
        </svg>
      );
    default:
      return null;
  }
};

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onInquireProgram }) => {
  const [selectedId, setSelectedId] = useState<string>('guitar');

  const activeProgram = PROGRAMS.find((p) => p.id === selectedId) || PROGRAMS[0];

  return (
    <section id="programs" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#0c0c10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-white/10">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90 mb-2 sm:mb-3">
              02. Dedicated Instruction
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Our Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-md font-light leading-relaxed">
            Select an instrument to explore specialized private and studio instruction tailored to your current skill level.
          </p>
        </div>

        {/* Interactive Master Tab Bar (Horizontal, Momentum-Scroll on Mobile) */}
        <div className="mt-8 sm:mt-10 relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-none">
            {PROGRAMS.map((program, idx) => {
              const isActive = program.id === selectedId;
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedId(program.id)}
                  className={`group min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-300 border border-amber-400/50 shadow-lg shadow-amber-950/40'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className={`text-[11px] sm:text-xs font-mono tabular-nums ${isActive ? 'text-amber-400' : 'text-zinc-600'}`}>
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-sm sm:text-base tracking-wide">{program.name}</span>
                  <InstrumentIcon
                    type={program.id}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${isActive ? 'text-amber-300' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                  />
                </button>
              );
            })}
          </div>
          {/* Subtle mobile scroll hint text */}
          <div className="sm:hidden text-[10px] uppercase tracking-wider text-zinc-500 mt-1 text-right pr-1">
            Swipe for all instruments →
          </div>
        </div>

        {/* Dynamic Exhibition Showcase Area (NO standard cards layout) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side: Dynamic Details & Polished Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0">
                <InstrumentIcon type={activeProgram.id} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                  {activeProgram.subtitle}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {activeProgram.scheduleNote}
                </span>
              </div>
            </div>

            {/* Instrument Title */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium">
              {activeProgram.name} Instruction
            </h3>

            {/* Primary Polished Copy (User Provided) */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-light leading-relaxed border-l-2 border-amber-500/50 pl-4 sm:pl-5">
              "{activeProgram.description}"
            </p>

            {/* Extended Overview */}
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-light leading-relaxed">
              {activeProgram.extendedOverview}
            </p>

            {/* Curriculum Highlights */}
            <div className="pt-2 sm:pt-4 space-y-2.5">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium block mb-2">
                Program Highlights & Focus Areas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {activeProgram.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action: Subtle "Inquire About Availability" text link under each active tab */}
            <div className="pt-4 sm:pt-6">
              <button
                onClick={() => onInquireProgram(activeProgram.id)}
                className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2.5 py-3 px-5 sm:p-0 rounded-full sm:rounded-none bg-amber-400/10 sm:bg-transparent border border-amber-400/30 sm:border-none text-xs sm:text-sm font-semibold sm:font-medium text-amber-300 hover:text-amber-200 transition-all cursor-pointer underline-offset-4 sm:hover:underline focus-visible:outline-none min-h-[44px]"
              >
                <span>Inquire About Availability</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: High-Impact Visual Stage */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-950 aspect-[16/10] sm:aspect-[4/3] group">
              <img
                src={activeProgram.imageUrl}
                alt={`${activeProgram.name} study at Wichita Falls Music Academy`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-mono uppercase tracking-widest text-amber-300 text-[11px] sm:text-xs">
                  Focus: {activeProgram.instructorFocus}
                </span>
                <span className="text-zinc-400 text-[11px] sm:text-xs">All Skill Levels</span>
              </div>
            </div>

            {/* Subtle decorative gold badge accent */}
            <div className="mt-3 flex items-center justify-between px-1 text-[11px] sm:text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400/70" />
                Individualized lesson plan tailored to student goals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
