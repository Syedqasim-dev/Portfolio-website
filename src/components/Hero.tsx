import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Terminal, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenContact,
  onOpenResume,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 sm:pb-16 flex items-center justify-center px-3 sm:px-6 lg:px-8">
      {/* Centered Large White Panel with fine border and light rounded corners */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl bg-white/95 rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden relative"
      >
        {/* Subtle grid pattern background inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #111111 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        {/* Panel Top Strip: Availability status & Role indicator */}
        <div className="relative z-10 px-6 sm:px-10 pt-8 sm:pt-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 pb-5">
          {/* Availability pill badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200 text-xs font-medium text-neutral-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-tight">{PERSONAL_INFO.availabilityStatus}</span>
            <span className="hidden md:inline text-neutral-400">·</span>
            <span className="hidden md:inline text-neutral-600 text-[11px]">Islamabad / Rawalpindi</span>
          </div>

          {/* Education & Specialization Tag */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-600">
            <Terminal className="w-3.5 h-3.5 text-neutral-900" />
            <span>{PERSONAL_INFO.educationBadge}</span>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-900 transition-colors text-neutral-800 hover:text-neutral-950 cursor-pointer shadow-2xs"
            >
              <FileDown className="w-3 h-3 text-neutral-700" />
              <span>Resume & CV</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 px-6 sm:px-10 pt-8 sm:pt-12 pb-8 sm:pb-12">
          {/* Main Oversized Headline: "SYED QASIM ALI" */}
          <div className="text-center select-none overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-bold tracking-tighter uppercase leading-none font-display"
            >
              <span className="stroke-heading tracking-tight inline-block mr-2 sm:mr-4">
                {PERSONAL_INFO.displayFirstName}
              </span>
              <span className="text-neutral-950 inline-block">
                {PERSONAL_INFO.displayLastName}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 text-xs sm:text-sm tracking-widest uppercase font-mono text-neutral-600"
            >
              {PERSONAL_INFO.role} · Multimodal AI, Computer Vision & Deep Learning
            </motion.p>
          </div>

          {/* Central Showcase Grid: Left Bio - Center Portrait - Right Socials & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
            {/* Lower-Left: Short Professional Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-4 text-left order-2 lg:order-1"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  // Professional Profile
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Core Strengths from Resume */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                <div>
                  <div className="text-base sm:text-lg font-bold font-mono text-neutral-950">Multimodal AI</div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider">Vision + Audio SER</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold font-mono text-neutral-950">FastAPI & Python</div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider">End-to-End Deployments</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-medium shadow-md hover:bg-neutral-800 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Let's Collaborate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-900 text-xs sm:text-sm font-medium hover:bg-neutral-50 hover:border-neutral-950 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Central Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex justify-center order-1 lg:order-2"
            >
              <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
                {/* Frame border & soft background */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-lg">
                  {/* Portrait Image */}
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Syed Qasim Ali - AI/ML Engineer"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Fallback container if loading */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 text-white p-6 text-center">
                      <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center font-bold text-lg mb-2">
                        SQ
                      </div>
                      <span className="text-xs font-mono text-neutral-400">Syed Qasim Ali</span>
                    </div>
                  )}

                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-2xl" />
                  
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                    <div className="text-xs font-semibold tracking-wide">Syed Qasim Ali</div>
                    <div className="text-[11px] text-neutral-300 font-mono">Islamabad, PK · BSAI (NUML)</div>
                  </div>
                </div>

                {/* Floating focus tag */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border border-neutral-200 rounded-full shadow-xs text-[10px] font-mono uppercase tracking-wider text-neutral-800 whitespace-nowrap">
                  Computer Vision & Emotion Recognition
                </div>
              </div>
            </motion.div>

            {/* Lower-Right: Verified Contact Links & Focus Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-4 text-left lg:text-right order-3"
            >
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                  // Core Focus & Tech
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  DeepFace, OpenCV, Librosa, TensorFlow, Keras, CNNs, LSTMs, and full-stack AI deployment with FastAPI and SQLite.
                </p>
              </div>

              {/* Verified Contact Pills */}
              <div className="pt-2 flex flex-wrap lg:justify-end gap-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-neutral-900 hover:text-neutral-950 transition-all text-xs font-medium text-neutral-700 shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Syedqasim-dev</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-neutral-900 hover:text-neutral-950 transition-all text-xs font-medium text-neutral-700 shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-neutral-900 hover:text-neutral-950 transition-all text-xs font-medium text-neutral-700 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:border-neutral-900 hover:text-neutral-950 transition-all text-xs font-medium text-neutral-700 shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] font-mono text-neutral-500">
                <span>BSAI · NUML Islamabad (2022 — 2026)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
