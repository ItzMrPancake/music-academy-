import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { TUITION_TIERS, calculateTuition } from '../utils/academy.ts';

interface TuitionSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TuitionSection: React.FC<TuitionSectionProps> = ({ onSelectTier }) => {
  const [isMilitary, setIsMilitary] = useState(false);
  const [studentCount, setStudentCount] = useState(1);
  const [activeTierId, setActiveTierId] = useState<string>('standard');

  const selectedCalc = calculateTuition(activeTierId, isMilitary, studentCount);

  return (
    <section id="tuition" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90 mb-2 sm:mb-3">
            03. Transparent Investment
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Investment in Your Talent
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-zinc-300 font-light leading-relaxed">
            Predictable, transparent monthly tuition designed around your personal musical aspirations. All private instruction includes dedicated one-on-one mentorship.
          </p>

          {/* Interactive Calculator Controls: Military Family Fee Waiver & Family Size */}
          <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {/* Military toggle */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isMilitary}
                onChange={(e) => setIsMilitary(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 bg-zinc-800 border-zinc-700"
              />
              <span className="text-zinc-200 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Active / Reserve Military Family
              </span>
            </label>

            <span className="hidden sm:inline text-zinc-600">|</span>

            {/* Student count */}
            <div className="flex items-center gap-3">
              <span className="text-zinc-400">Students in Family:</span>
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setStudentCount(num)}
                    className={`min-w-[32px] py-1 px-2.5 rounded text-xs font-semibold transition-colors cursor-pointer ${
                      studentCount === num
                        ? 'bg-amber-400 text-black shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-zinc-500 mb-3 px-1">
          <span>Swipe to compare plans</span>
          <span>4 tiers available →</span>
        </div>

        {/* Modern Minimalist Pricing Grid (Mobile Snap Carousel, Desktop Grid) */}
        <div className="flex overflow-x-auto pb-6 pt-3 -mx-5 px-5 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-0 md:px-0 gap-5 sm:gap-6 items-stretch">
          {TUITION_TIERS.map((tier) => {
            const isSelected = tier.id === activeTierId;
            const isSignature = tier.isPopular;
            return (
              <div
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer w-[84vw] sm:w-[320px] md:w-auto shrink-0 snap-center ${
                  isSignature
                    ? 'bg-gradient-to-b from-amber-500/10 via-zinc-900/90 to-zinc-950 border-2 border-amber-400/60 shadow-xl shadow-amber-950/20'
                    : 'bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular label if signature */}
                {isSignature && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e5b869] text-zinc-950 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold text-white tracking-wide">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Monthly Rate */}
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                      ${tier.rate}
                    </span>
                    <span className="text-zinc-400 text-sm font-light">
                      / {tier.cadence}
                    </span>
                  </div>

                  {/* Duration kicker */}
                  <div className="mt-1 text-xs font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                    {tier.duration}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Hairline Divider */}
                  <div className="my-6 h-[1px] w-full bg-white/10" />

                  {/* Features List */}
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 font-light">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTier(tier.id);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isSignature
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#e5b869] text-black hover:brightness-110 shadow-md'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>Enroll In {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tier Summary Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-amber-400/10 text-amber-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-medium">
                Current Selection: <span className="text-amber-300 font-semibold">{selectedCalc.tier.name}</span> ({studentCount} student{studentCount > 1 ? 's' : ''})
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Monthly tuition: <span className="text-zinc-200 tabular-nums">${selectedCalc.monthlyTuition}/mo</span>
                {' · '}
                Registration fee:{' '}
                {selectedCalc.registrationFeeWaived ? (
                  <span className="text-emerald-400 font-medium">Waived (Military Family)</span>
                ) : (
                  <span className="text-zinc-200 tabular-nums">${selectedCalc.registrationFee} one-time</span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectTier(activeTierId)}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            Apply This Tier to Inquiry
          </button>
        </div>

        {/* Footnote (Clean, muted text as specified) */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A one-time registration fee of $40 per student (maximum $60 per family)
            applies. We proudly waive this fee for active and reserve military families.
          </p>
        </div>
      </div>
    </section>
  );
};
