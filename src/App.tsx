import React, { useState, useCallback } from 'react';
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
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-amber-200 font-sans">
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
    </div>
  );
}
