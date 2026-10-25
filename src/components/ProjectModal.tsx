import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Github, ExternalLink, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200 z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header image & close button */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category badge & title over banner */}
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                <span>{project.category}</span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded-sm bg-white/20 text-white font-sans font-semibold text-[11px]">
                  {project.projectTypeBadge}
                </span>
                <span>·</span>
                <span>{project.year}</span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-300 mt-1 max-w-2xl line-clamp-2">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Action Bar & Metrics strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              {/* Metrics */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                {project.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-950">
                      {metric.value}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-medium hover:border-neutral-900 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo Link</span>
                  </a>
                )}
              </div>
            </div>

            {/* Description & Overview */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                // Executive Overview
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem & Solution Two-Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Problem Statement
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Technical Solution
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architectural Pipeline */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-neutral-600" />
                <span>Architecture & Pipeline Breakdown</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white border border-neutral-200 rounded-xl"
                  >
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-neutral-100 text-neutral-800">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-700 leading-snug">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                // Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 mr-2">Technologies:</span>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
