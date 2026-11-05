import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#09090b]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white group-hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 block">
            Wichita Falls Music Academy
          </span>
        </button>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <button
            onClick={() => handleLinkClick('academy')}
            className="hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none"
          >
            The Academy
          </button>
          <button
            onClick={() => handleLinkClick('programs')}
            className="hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none"
          >
            Programs
          </button>
          <button
            onClick={() => handleLinkClick('tuition')}
            className="hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none"
          >
            Tuition
          </button>
          <button
            onClick={() => handleLinkClick('hours')}
            className="hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none"
          >
            Schedule & Hours
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:9402356190"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white px-3 py-2 transition-colors whitespace-nowrap"
            title="Call Wichita Falls Music Academy"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden lg:inline">(940) 235-6190</span>
          </a>
          <button
            onClick={() => handleLinkClick('tuition')}
            className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f3de98] to-[#d4af37] hover:brightness-110 active:scale-98 transition-all rounded-full shadow-lg shadow-amber-900/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Your Journey
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c10]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <button
            onClick={() => handleLinkClick('academy')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-300 border-b border-white/5 cursor-pointer"
          >
            The Academy
          </button>
          <button
            onClick={() => handleLinkClick('programs')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-300 border-b border-white/5 cursor-pointer"
          >
            Our Programs
          </button>
          <button
            onClick={() => handleLinkClick('tuition')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-300 border-b border-white/5 cursor-pointer"
          >
            Tuition & Rates
          </button>
          <button
            onClick={() => handleLinkClick('hours')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-300 border-b border-white/5 cursor-pointer"
          >
            Schedule & Hours
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-300 border-b border-white/5 cursor-pointer"
          >
            Contact & Directions
          </button>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:9402356190"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-amber-200 hover:text-white"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call (940) 235-6190
            </a>
            <button
              onClick={() => handleLinkClick('tuition')}
              className="w-full py-3 rounded-full text-center text-xs uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f3de98] to-[#d4af37] cursor-pointer"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
