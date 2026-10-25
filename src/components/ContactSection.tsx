import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Multimodal AI & Empathy Systems',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Multimodal AI & Empathy Systems',
    'Speech Emotion Recognition (SER)',
    'Facial Emotion Detection & Computer Vision',
    'Deep Learning (CNN, LSTM, RNN)',
    'FastAPI & Full-Stack AI Integration',
    'Full-Time AI/ML Engineering Role',
    'AI/ML Internship Opportunity',
    'Other Inquiries'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Construct mailto link with encoded subject and body for real delivery
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );
      
      // Open mail client for user
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Multimodal AI & Empathy Systems',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Unable to process message. Please email directly via qasim.numledu@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Centered Translucent White Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-3xl border border-neutral-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-6 sm:p-10 lg:p-14 relative overflow-hidden"
        >
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availabilityStatus}</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-600">Islamabad / Rawalpindi</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 font-display uppercase">
              HAVE AN AI PROJECT IN MIND?
            </h2>

            {/* Supporting Copy from Resume */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Seeking roles in AI/ML engineering, data science, or software development to contribute technical expertise to impactful, real-world projects.
            </p>
          </div>

          {/* Quick Direct Link Pills with Verified Resume Data */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-6 pb-10 border-b border-neutral-100">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-medium hover:border-neutral-950 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              <Phone className="w-4 h-4" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-medium hover:border-neutral-950 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub / Syedqasim-dev</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-medium hover:border-neutral-950 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Syed_Qasim_Ali_AI_ML_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
          </div>

          {/* Contact Form Container */}
          <div className="relative z-10 mt-10 max-w-xl mx-auto">
            <h3 className="text-center text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
              // Direct Inquiry Dispatch
            </h3>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Inquiry prepared for dispatch!</div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Your default mail application has opened with the inquiry details directed to {PERSONAL_INFO.email}.
                  </div>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-neutral-700">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Team Lead"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-neutral-700">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-1.5">
                <label htmlFor="projectType" className="text-xs font-mono font-medium text-neutral-700">
                  Opportunity or Domain Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all cursor-pointer"
                >
                  {projectTypes.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-medium text-neutral-700">
                  Message / Role Description *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your team, project requirements, or role specifics..."
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 rounded-full bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing Dispatch...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
