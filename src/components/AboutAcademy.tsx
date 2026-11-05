import React from 'react';
import { Clock, Music, Award, Users } from 'lucide-react';

interface AboutAcademyProps {
  onExplorePrograms: () => void;
}

export const AboutAcademy: React.FC<AboutAcademyProps> = ({ onExplorePrograms }) => {
  return (
    <section id="academy" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Asymmetrical Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (7 cols): Large Bold Text & Polished Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimalist Editorial Index */}
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90 mb-3">
              01. The Conservatory Philosophy
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] text-balance">
              Cultivating a Lifelong Love for Music.
            </h2>

            {/* Polished Copy */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                At Wichita Falls Music Academy, we believe music is for everyone.
                Our seasoned instructors provide personalized, top-tier training
                designed to push your boundaries and refine your natural talent.
              </p>
              <p>
                Whether you are picking up an instrument for the first time or
                preparing for advanced performance, we guarantee a transformative
                environment focused on your personal growth.
              </p>
            </div>

            {/* Academy Hallmarks */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Individual Focus
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-normal">
                    Custom curriculum adapted to your pacing and musical taste.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    Seasoned Faculty
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-normal">
                    Professional educators passionate about foundational mastery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    All Ages Welcome
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-normal">
                    From curious youth to dedicated adult lifelong learners.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Banner (Clean inline text) */}
            <div
              id="hours"
              className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm flex items-start sm:items-center gap-3.5 sm:gap-4"
            >
              <div className="p-2 sm:p-2.5 rounded-full bg-amber-400/10 text-amber-400 shrink-0 mt-0.5 sm:mt-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-amber-300 block sm:inline mr-2">
                  Academy Hours:
                </span>
                <span className="text-zinc-200 leading-relaxed">
                  Instruction available Monday – Friday, 3:30 PM to 8:00 PM. Exclusive
                  Saturday sessions available for Percussion and Guitar.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Clean Modern Aesthetic Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-900">
              <img
                src="./assets/images/academy_studio_aesthetic_1793912522983.jpg"
                alt="Wichita Falls Music Academy interior studio"
                className="w-full h-64 sm:h-80 lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Studio caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Private Studio Environment
                </div>
                <div className="text-sm text-zinc-300 font-light">
                  Acoustically tuned rehearsal rooms equipped with concert-grade instruments.
                </div>
              </div>
            </div>

            {/* Subtle decorative accent frame in the background */}
            <div className="absolute -inset-2 rounded-3xl border border-amber-500/20 -z-10 translate-x-3 translate-y-3 hidden sm:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
