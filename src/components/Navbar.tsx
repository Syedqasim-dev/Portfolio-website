import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['hero', 'work', 'expertise', 'about', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Work', target: 'work' },
    { label: 'Expertise', target: 'expertise' },
    { label: 'About', target: 'about' },
    { label: 'Journey', target: 'journey' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-50 origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#ededf0]/85 backdrop-blur-md border-b border-neutral-300/60 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-8" aria-label="Main Navigation">
            {/* Zone 1: Single Brand element */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="group flex items-center gap-2 text-neutral-950 font-semibold tracking-tight text-base sm:text-lg whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-neutral-900"
            >
              <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-neutral-900 text-white tracking-widest font-bold">
                SQ
              </span>
              <span className="tracking-tight hover:opacity-80 transition-opacity">
                {PERSONAL_INFO.name}
              </span>
            </a>

            {/* Zone 2: 4-5 Nav links */}
            <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-neutral-950 cursor-pointer ${
                    activeSection === link.target
                      ? 'text-neutral-950 font-semibold'
                      : 'text-neutral-600'
                  }`}
                >
                  {link.label}
                  {activeSection === link.target && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-neutral-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Zone 3: Primary action button & Mobile toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-medium shadow-sm hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:translate-y-0"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-800 hover:bg-neutral-200/60 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-5 mt-3 shadow-lg">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left py-2 text-base font-medium text-neutral-800 hover:text-neutral-950 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-neutral-600">{PERSONAL_INFO.availabilityStatus}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
