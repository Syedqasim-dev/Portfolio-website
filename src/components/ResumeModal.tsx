import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'pdf'>('document');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Resume Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-300 z-10 flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          {/* Top Control Bar */}
          <div className="bg-neutral-950 text-white px-5 sm:px-7 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Curriculum Vitae
              </span>
              <span className="hidden sm:inline-block text-[11px] bg-neutral-800 text-neutral-300 font-mono px-2 py-0.5 rounded-full">
                NUML · BSAI Graduate
              </span>
            </div>

            {/* View switcher & Actions */}
            <div className="flex items-center gap-2">
              {/* Tab Switcher */}
              <div className="flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-xs">
                <button
                  onClick={() => setViewMode('document')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    viewMode === 'document' ? 'bg-white text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Formatted CV
                </button>
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    viewMode === 'pdf' ? 'bg-white text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Original PDF
                </button>
              </div>

              {/* Direct PDF Download Button */}
              <a
                href={PERSONAL_INFO.resumePdfPath}
                download="Syed_Qasim_Ali_AI_ML_Engineer_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors"
                title="Download verified resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer ml-1"
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto">
            {viewMode === 'pdf' ? (
              <div className="w-full h-[75vh] bg-neutral-100 flex flex-col">
                <iframe
                  src={`${PERSONAL_INFO.resumePdfPath}#toolbar=1`}
                  title="Syed Qasim Ali Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              <div className="p-6 sm:p-10 lg:p-12 text-neutral-900 bg-white font-sans max-w-3xl mx-auto w-full">
                {/* Header */}
                <div className="border-b-2 border-neutral-950 pb-5 mb-6 text-center sm:text-left">
                  <h1 id="resume-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 uppercase font-display">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-neutral-600 mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                    <span>{PERSONAL_INFO.location}</span>
                    <span>|</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                    <span>|</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                  </p>
                  <p className="text-xs font-mono text-neutral-600 mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                    <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      linkedin.com/in/syed-qasim-ali-a8b95a314
                    </a>
                    <span>|</span>
                    <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      github.com/Syedqasim-dev/Projects
                    </a>
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-950 border-b border-neutral-300 pb-1 mb-3">
                    Technical Skills
                  </h2>
                  <div className="space-y-1.5 text-xs text-neutral-800">
                    <div>
                      <span className="font-bold text-neutral-950">• Programming Languages: </span>
                      <span>Python, C++, SQL</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Machine Learning & Deep Learning: </span>
                      <span>ANN, CNN, RNN, LSTM, TensorFlow, Keras, Scikit-learn</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Computer Vision & Audio: </span>
                      <span>OpenCV, DeepFace, Librosa, RAVDESS, CREMA-D</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Backend & APIs: </span>
                      <span>FastAPI, SQLAlchemy, SQLite, RESTful API Design</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Databases: </span>
                      <span>MySQL, PostgreSQL, SQLite</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Tools & Platforms: </span>
                      <span>Git, GitHub, MS Office (Word, Excel, PowerPoint), Jupyter Notebook, n8n (Workflow Automation)</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">• Core Competencies: </span>
                      <span>Data Preprocessing, Model Training & Evaluation, Multimodal AI, Emotion Recognition</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-950 border-b border-neutral-300 pb-1 mb-3">
                    Projects
                  </h2>
                  <div className="space-y-4">
                    {/* Project 1 */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-xs sm:text-sm text-neutral-950">
                          Healthcare Empathy AI – Multimodal Empathy Training System for Doctors
                        </span>
                        <span className="text-xs font-mono text-neutral-500 shrink-0">2025 — 2026</span>
                      </div>
                      <div className="text-xs italic text-neutral-600 mb-1.5">
                        Final Year Project
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                        <li>Designed and developed a full-stack AI system to train and evaluate doctors on empathetic patient communication using real-time multimodal analysis.</li>
                        <li>Built a Speech Emotion Recognition (SER) module using CNN and LSTM architectures trained on RAVDESS and CREMA-D datasets for audio-based emotion detection.</li>
                        <li>Integrated DeepFace and OpenCV for real-time facial expression analysis to score non-verbal empathy indicators during simulated consultations.</li>
                        <li>Developed RESTful backend with FastAPI and SQLAlchemy over SQLite, providing detailed session-based performance feedback and improvement suggestions.</li>
                        <li><span className="font-semibold text-neutral-900">Technologies:</span> Python, TensorFlow, Keras, Librosa, DeepFace, OpenCV, FastAPI, SQLAlchemy, SQLite, Bootstrap, Chart.js.</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-xs sm:text-sm text-neutral-950">
                          Facial Emotion Detection System
                        </span>
                        <span className="text-xs font-mono text-neutral-500 shrink-0">2024</span>
                      </div>
                      <div className="text-xs italic text-neutral-600 mb-1.5">
                        Personal Project
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                        <li>Built a real-time facial emotion detection application using DeepFace and OpenCV capable of detecting 7 distinct emotional states via webcam or static image input.</li>
                        <li>Implemented an optional custom CNN training pipeline using the FER2013 dataset from Kaggle for domain-specific model fine-tuning.</li>
                        <li><span className="font-semibold text-neutral-900">Technologies:</span> Python, DeepFace, OpenCV, Keras, FER2013 Dataset.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-950 border-b border-neutral-300 pb-1 mb-3">
                    Education
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-xs sm:text-sm text-neutral-950">
                          National University of Modern Languages (NUML), Islamabad
                        </span>
                        <span className="text-xs font-mono text-neutral-500 shrink-0">2022 — 2026</span>
                      </div>
                      <div className="text-xs italic text-neutral-700">
                        Bachelor of Science in Artificial Intelligence (BSAI)
                      </div>
                      <div className="text-xs text-neutral-600 mt-1">
                        <span className="font-semibold text-neutral-800">Relevant Coursework: </span>
                        Machine Learning, Deep Learning, Computer Vision, NLP, Database Management, Software Engineering, Professional Practices.
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-xs sm:text-sm text-neutral-950">
                          IMCB I-10/4, Islamabad
                        </span>
                        <span className="text-xs font-mono text-neutral-500 shrink-0">2020 — 2022</span>
                      </div>
                      <div className="text-xs italic text-neutral-700">
                        Intermediate — Pre-Engineering
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-950 border-b border-neutral-300 pb-1 mb-3">
                    Additional Information
                  </h2>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700">
                    <li><span className="font-semibold text-neutral-900">Languages:</span> Urdu (Native), English (Professional Proficiency).</li>
                    <li><span className="font-semibold text-neutral-900">Interests:</span> Applied AI Research, Healthcare AI, Computer Vision, Competitive Programming.</li>
                    <li><span className="font-semibold text-neutral-900">Availability:</span> Available for full-time roles, internships, and remote/on-site opportunities in Islamabad/Rawalpindi.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
