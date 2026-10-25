import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-neutral-300/80 bg-white/70 backdrop-blur-xs py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Title */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-neutral-900 text-white font-bold">
                SQ
              </span>
              <span className="text-base font-bold text-neutral-950 font-display">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              {PERSONAL_INFO.role} · Applied Deep Learning & Computer Vision
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-600">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 transition-colors inline-flex items-center gap-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Resume CV
            </button>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
            <span>© {currentYear} Syed Qasim Ali</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-neutral-950 transition-colors cursor-pointer font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-neutral-200/60 text-center text-[11px] text-neutral-400 font-mono">
          Designed & Developed with care · Minimalist Monochrome Aesthetic · Built for AI/ML Engineering
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-neutral-950 text-white shadow-lg hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};
