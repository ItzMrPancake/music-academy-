import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070709] border-t border-white/10 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">
              Wichita Falls Music Academy
            </h3>
            <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
              Bringing premier, personalized music instruction to Texoma. Fostering discipline, artistic confidence, and a lifelong devotion to sound.
            </p>
            <div className="text-xs text-zinc-500 font-light">
              2949 Southwest Pkwy Ste A, Wichita Falls, TX 76308
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('academy')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  The Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tuition')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Tuition & Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hours')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Hours & Scheduling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Connect & Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links & Direct Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-2">
              Social Community
            </h4>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors py-1 inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors py-1 inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
              </a>
            </div>

            <div className="pt-2 text-xs space-y-1 text-zinc-400 font-light">
              <p>Direct: <a href="tel:9402356190" className="hover:text-white transition-colors">(940) 235-6190</a></p>
              <p>Email: <a href="mailto:wfmusicacademy@gmail.com" className="hover:text-white transition-colors">wfmusicacademy@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Muted Scripture Text & Scroll to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          {/* Explicitly requested copy: "Psalm 98:1-7 | Wichita Falls Music Academy" */}
          <div className="italic tracking-wide text-zinc-400 text-center sm:text-left">
            Psalm 98:1-7 | Wichita Falls Music Academy
          </div>

          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Wichita Falls Music Academy. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
