import React, { useState, useCallback, useEffect } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutAcademy } from './components/AboutAcademy.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { TuitionSection } from './components/TuitionSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('guitar');
  const [selectedTierId, setSelectedTierId] = useState<string>('standard');
  const [showMobileDock, setShowMobileDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile dock after scrolling past hero (~350px)
      setShowMobileDock(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleProgramInquire = (programId: string) => {
    setSelectedProgramId(programId);
    scrollToSection('contact');
  };

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-amber-200 font-sans pb-16 md:pb-0">
      {/* Fixed Elevated Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      <main>
        {/* 1. Immersive Hero Section */}
        <Hero
          onStartJourney={() => scrollToSection('tuition')}
          onExplorePrograms={() => scrollToSection('programs')}
        />

        {/* 2. The Academy (About Us) - Asymmetrical Split-Screen */}
        <AboutAcademy onExplorePrograms={() => scrollToSection('programs')} />

        {/* 3. Our Programs (Classes - Dynamic Tabs, NO CARDS) */}
        <ProgramsSection onInquireProgram={handleProgramInquire} />

        {/* 4. Investment in Your Talent (Tuition - Minimalist Modern Tiers) */}
        <TuitionSection onSelectTier={handleSelectTier} />

        {/* 5. Connect & Visit (Contact - Underline Form & Embedded Map) */}
        <ContactSection
          selectedProgramId={selectedProgramId}
          selectedTierId={selectedTierId}
        />
      </main>

      {/* Footer Bottom */}
      <Footer onNavigate={scrollToSection} />

      {/* Mobile Floating Quick Action Dock */}
      {showMobileDock && (
        <aside
          aria-label="Quick Actions"
          className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between p-1.5 rounded-full bg-[#0c0c10]/95 backdrop-blur-md border border-amber-400/30 shadow-2xl shadow-black/80 transition-all duration-300"
        >
          <a
            href="tel:9402356190"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>(940) 235-6190</span>
          </a>
          <button
            onClick={() => scrollToSection('tuition')}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#d4af37] text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Start Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </div>
  );
}
