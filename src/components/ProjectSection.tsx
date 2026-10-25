import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Deep Learning',
    'Computer Vision',
    'Machine Learning',
    'NLP'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-300 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                / 01 · Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 font-display">
              / SELECTED WORK
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Applied machine learning algorithms, deep neural networks, and multimodal vision systems engineered for production accuracy.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="hidden md:flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500">
              Showing {filteredProjects.length} of {PROJECTS_DATA.length} Projects
            </span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-950'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${PROJECTS_DATA.length})`}
              </button>
            );
          })}
        </div>

        {/* Responsive Two-Column Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
              Need custom AI/ML model architecture or evaluation?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Open to exploratory research projects, pipeline prototyping, and full-time technical roles.
            </p>
          </div>
          <a
            href="https://github.com/qasimali-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors shrink-0 shadow-xs"
          >
            <span>Explore All GitHub Repos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
