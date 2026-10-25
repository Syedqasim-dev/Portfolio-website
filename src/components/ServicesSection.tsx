import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, CheckCircle2, Cpu, Sparkles, Workflow } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  // Default open the first service to show visual richness
  const [expandedId, setExpandedId] = useState<string | null>('ml-predictive-ai');

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="expertise" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-b border-neutral-300 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              / 02 · Capabilities & Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 font-display">
              / WHAT I DO
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              End-to-end artificial intelligence engineering, from mathematical model training to low-latency microservice deployment.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-500">
            Interactive Accordion · Click to Expand
          </div>
        </div>

        {/* Expandable Accordion Rows */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-neutral-950 text-white border-neutral-800 shadow-xl'
                    : 'bg-white text-neutral-950 border-neutral-200/90 hover:border-neutral-400 shadow-2xs'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    {/* Index Number */}
                    <span
                      className={`font-mono text-lg sm:text-xl font-bold ${
                        isExpanded ? 'text-neutral-400' : 'text-neutral-400'
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Title & Category */}
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
                          isExpanded ? 'text-white' : 'text-neutral-950'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 font-mono ${
                          isExpanded ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        {service.category}
                      </p>
                    </div>
                  </div>

                  {/* Circular expand button */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isExpanded
                        ? 'bg-neutral-800 text-white rotate-180'
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Details Pane */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-neutral-800">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                          {/* Left Column: Description & Deliverables */}
                          <div className="lg:col-span-7 space-y-6">
                            <div>
                              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                                // Engineering Scope
                              </span>
                              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                                {service.detailedDescription}
                              </p>
                            </div>

                            {/* Key Deliverables */}
                            <div className="space-y-3">
                              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                                Core Deliverables
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {service.deliverables.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Skills Chips & Architectural Metrics */}
                          <div className="lg:col-span-5 bg-neutral-900/90 rounded-xl p-5 border border-neutral-800 space-y-5">
                            <div>
                              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                                Technologies & Tools
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {service.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-200 text-xs font-mono border border-neutral-700/60"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                              <span>Production Grade</span>
                              <span className="text-emerald-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available for Contract
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
