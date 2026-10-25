import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, Award, GraduationCap, Code2, ArrowUpRight } from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Dark Charcoal Container Panel */}
        <div className="relative rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Subtle subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          {/* Section Header inside Dark Panel */}
          <div className="relative z-10 mb-12 border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                / 04 · Trajectory & Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
                / EXPERIENCE & EDUCATION
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-light">
                Academic training, applied research capstones, and rigorous technical certifications tracing my path in machine intelligence.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1.5 rounded-full">
                NUML · Islamabad
              </span>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative z-10 space-y-8">
            {JOURNEY_TIMELINE.map((item, index) => {
              const getTypeIcon = () => {
                switch (item.type) {
                  case 'Education':
                    return <GraduationCap className="w-4 h-4 text-emerald-400" />;
                  case 'Academic Project':
                    return <Code2 className="w-4 h-4 text-blue-400" />;
                  case 'Certification':
                    return <Award className="w-4 h-4 text-amber-400" />;
                  default:
                    return <Calendar className="w-4 h-4 text-neutral-400" />;
                }
              };

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative pb-8 border-b border-neutral-800/80 last:border-b-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                    {/* Left: Organization & Project Name with Role */}
                    <div className="md:col-span-8 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                          {getTypeIcon()}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                          {item.type}
                        </span>
                        <span className="text-neutral-600">·</span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                        {item.title}
                      </h3>

                      <div className="text-sm font-medium text-neutral-300">
                        {item.role} <span className="text-neutral-500">at</span> {item.organization}
                      </div>

                      <p className="text-sm text-neutral-400 leading-relaxed pt-1">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="pt-2 space-y-1.5">
                        {item.highlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-neutral-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Year / Timeline Period */}
                    <div className="md:col-span-4 md:text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 tracking-wider">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="relative z-10 mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <span>Verified Credentials & Academic Records</span>
            <span>Available for Industry & Research Inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
};
