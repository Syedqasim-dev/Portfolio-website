import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-neutral-900"
    >
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-90' : 'opacity-0'
          }`}
        />

        {/* Fallback container */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-400 font-mono text-xs">
            Loading preview...
          </div>
        )}

        {/* Dark subtle gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Circular Arrow Button on hover */}
        <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 text-neutral-950 flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Top-left Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[11px] tracking-wide">
            {project.category}
          </span>
          {project.projectTypeBadge && (
            <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 font-mono text-[10px] font-bold tracking-wide">
              {project.projectTypeBadge}
            </span>
          )}
        </div>

        {/* Bottom metrics teaser */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
          <span>{project.metrics[0]?.label}: {project.metrics[0]?.value}</span>
          <span className="text-neutral-300">{project.year}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div className="space-y-2">
          {/* Unboxed category metadata with separator */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectTypeBadge}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs font-mono text-neutral-500">
            {project.subtitle}
          </p>

          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 pt-1">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tags and Read More Affordance */}
        <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[11px] font-mono text-neutral-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <span className="text-xs font-semibold text-neutral-900 group-hover:underline inline-flex items-center gap-1 shrink-0">
            View Details
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
