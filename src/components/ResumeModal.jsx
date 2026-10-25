import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E0E0E]/80 backdrop-blur-md"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-ivory-100 dark:bg-charcoal-900 border border-charcoal-800/15 dark:border-ivory-100/15 p-6 sm:p-12 shadow-2xl z-10 font-sans"
        >
          {/* Action Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10">
            <span className="font-mono text-xs uppercase tracking-micro text-champagne">
              CURRICULUM VITAE // DOSSIER
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrint}
                className="px-4 py-2 font-mono text-xs uppercase tracking-wider bg-charcoal-900 text-ivory-100 dark:bg-ivory-100 dark:text-charcoal-900 hover:bg-champagne hover:text-charcoal-900 transition-colors"
              >
                Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-2 text-charcoal-500 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-ivory-100 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="space-y-8 text-charcoal-800 dark:text-ivory-100">
            {/* Header */}
            <div className="border-b border-charcoal-800/10 dark:border-ivory-100/10 pb-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-light">
                {data.personal.name}
              </h2>
              <p className="font-mono text-xs text-champagne uppercase tracking-micro mt-1">
                {data.personal.role}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-3">
                <span>{data.personal.email}</span>
                <span>·</span>
                <span>{data.personal.phone}</span>
                <span>·</span>
                <span>{data.personal.location}</span>
                <span>·</span>
                <span>CGPA {data.personal.cgpa}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Summary
              </h3>
              <p className="font-sans text-sm text-charcoal-700 dark:text-charcoal-300 font-light leading-relaxed">
                {data.about.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Education
              </h3>
              {data.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-sm">
                  <div>
                    <span className="font-medium text-charcoal-900 dark:text-ivory-100">{edu.degree}</span>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-champagne">
                    <span>{edu.score}</span>
                    <p className="text-charcoal-400 text-[10px]">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Experience
              </h3>
              {data.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-charcoal-900 dark:text-ivory-100">{exp.role}</span>
                    <span className="font-mono text-xs text-champagne">{exp.period}</span>
                  </div>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400">{exp.organization} · {exp.location}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-charcoal-700 dark:text-charcoal-300 font-light pl-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Featured Engineering Projects
              </h3>
              {data.projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-sm pb-3 border-b border-charcoal-800/5 dark:border-ivory-100/5 last:border-none">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-charcoal-900 dark:text-ivory-100">{proj.title}</span>
                    <span className="font-mono text-xs text-champagne">{proj.category}</span>
                  </div>
                  <p className="text-xs text-charcoal-600 dark:text-charcoal-400 font-light">{proj.description}</p>
                  <p className="font-mono text-[11px] text-charcoal-500 dark:text-charcoal-400">
                    Stack: {proj.stack.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Publications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                  Certifications
                </h3>
                <ul className="text-xs text-charcoal-700 dark:text-charcoal-300 space-y-1">
                  {data.certifications.map((c, idx) => (
                    <li key={idx}>• {c.title} ({c.issuer})</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                  Publications
                </h3>
                <ul className="text-xs text-charcoal-700 dark:text-charcoal-300 space-y-1">
                  {data.publications.map((p, idx) => (
                    <li key={idx}>• {p.title} ({p.indexing})</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
