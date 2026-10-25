/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cloudy-bg min-h-screen text-neutral-900 selection:bg-neutral-950 selection:text-white flex flex-col relative">
      {/* Top Fixed Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      <main className="flex-1">
        {/* Section A: Hero / Landing */}
        <Hero
          onExploreWork={scrollToWork}
          onOpenContact={scrollToContact}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section B: Selected Work / Projects */}
        <ProjectSection />

        {/* Section C: Services / Expertise */}
        <ServicesSection />

        {/* Section D: About Me / Technical Skills */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section E: Experience / Journey */}
        <JourneySection />

        {/* Section F: Contact / Call to Action */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
