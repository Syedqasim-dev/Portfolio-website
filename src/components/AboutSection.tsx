import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FileText, ArrowUpRight, Terminal, Globe, Heart, Briefcase, CheckCircle2, Download } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-b border-neutral-300 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              / 03 · Background & Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 font-display">
              / ABOUT ME & SKILLS
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Artificial Intelligence graduate from NUML Islamabad with proven expertise in deep neural models, multimodal emotion recognition, and FastAPI deployments.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Syed_Qasim_Ali_AI_ML_Engineer_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-medium hover:border-neutral-950 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Interactive CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Left Bio & Academic Background - Right Interactive Skill Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Background & Verified Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bio Card from Resume Summary */}
            <div className="bg-white p-7 rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                // Professional Summary
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                {PERSONAL_INFO.summary}
              </p>

              {/* Core Competencies badges */}
              <div className="pt-2 border-t border-neutral-100">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.coreCompetencies.map((comp, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200/60"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Credentials (NUML & IMCB) */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-neutral-950">
                      National University of Modern Languages (NUML)
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-neutral-700">
                    Bachelor of Science in Artificial Intelligence (BSAI)
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Islamabad, Pakistan · 2022 — 2026
                  </div>
                  <p className="text-xs text-neutral-600 pt-1 leading-relaxed">
                    <span className="font-semibold text-neutral-800">Relevant Coursework: </span>
                    Machine Learning, Deep Learning, Computer Vision, NLP, Database Management, Software Engineering, Professional Practices.
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                  HSSC
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-950">
                    IMCB I-10/4, Islamabad
                  </h4>
                  <div className="text-xs text-neutral-600">
                    Intermediate — Pre-Engineering (2020 — 2022)
                  </div>
                </div>
              </div>
            </div>

            {/* Languages, Interests & Availability */}
            <div className="bg-neutral-950 text-white p-6 rounded-2xl shadow-xs space-y-4">
              {/* Availability */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Availability & Relocation
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {PERSONAL_INFO.availabilityNote}
                </p>
              </div>

              {/* Languages */}
              <div className="pt-2 border-t border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Languages
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-200">
                  {PERSONAL_INFO.languages.map((l, i) => (
                    <span key={i} className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md">
                      {l.language} ({l.proficiency})
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="pt-2 border-t border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  Core Technical Interests
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-neutral-300">
                  {PERSONAL_INFO.interests.map((interest, i) => (
                    <span key={i} className="text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded text-[11px] font-mono">
                      #{interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills Matrix */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-neutral-950">
                  Technical Skills & Tooling
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  Detailed competencies sourced directly from verified resume
                </p>
              </div>

              <span className="text-xs font-mono text-neutral-400">
                {SKILL_CATEGORIES.length} Core Skill Groups
              </span>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100/80 rounded-xl">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSkillCategory(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeSkillCategory === idx
                      ? 'bg-white text-neutral-950 shadow-2xs font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Active Skill Set Details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-neutral-900 uppercase tracking-wider">
                  {SKILL_CATEGORIES[activeSkillCategory].category}
                </span>
                <span className="text-xs text-neutral-500 italic">
                  {SKILL_CATEGORIES[activeSkillCategory].description}
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-neutral-950 flex items-center justify-between">
                      <span>{skill.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 leading-snug">
                      {skill.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Verified Technology Chips */}
            <div className="pt-6 border-t border-neutral-100">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                // Sourced Directly From Resume
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Python", "C++", "SQL", "TensorFlow", "Keras", "Scikit-learn", 
                  "OpenCV", "DeepFace", "Librosa", "RAVDESS", "CREMA-D", "FER2013",
                  "FastAPI", "SQLAlchemy", "SQLite", "PostgreSQL", "MySQL", 
                  "Git", "GitHub", "Jupyter Notebook", "n8n (Workflow Automation)"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
