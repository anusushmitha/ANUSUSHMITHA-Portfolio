import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E0E0E]/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-ivory-100 dark:bg-charcoal-900 border border-charcoal-800/15 dark:border-ivory-100/15 p-6 sm:p-10 shadow-2xl z-10 font-sans"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs uppercase tracking-micro text-champagne">
                  {project.number}
                </span>
                <span className="text-charcoal-400 dark:text-charcoal-500">·</span>
                <span className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400">
                  {project.category}
                </span>
              </div>
              <h2 id="case-study-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
                {project.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 max-w-2xl font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-ivory-100 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10">
            {project.metrics?.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block font-mono text-[10px] sm:text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400">
                  {m.label}
                </span>
                <span className="block font-serif text-2xl sm:text-3xl text-charcoal-900 dark:text-ivory-100 font-light">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Visual */}
          <div className="mb-10">
            <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 mb-4">
              Pipeline Topology & Flow
            </h3>
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* Detailed Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm leading-relaxed text-charcoal-700 dark:text-charcoal-300">
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-micro text-champagne">
                The Engineering Challenge
              </h4>
              <p className="font-light">
                {project.deepDive?.problem || project.description}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-micro text-champagne">
                Architectural Solution
              </h4>
              <p className="font-light">
                {project.deepDive?.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 mb-4">
                Core Capabilities
              </h4>
              <ul className="space-y-2 text-sm text-charcoal-700 dark:text-charcoal-300 font-light">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-champagne rounded-full"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 mb-4">
                Models & Evaluators
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.models.map((mod, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-charcoal-800/5 dark:bg-ivory-100/5 border border-charcoal-800/15 dark:border-ivory-100/15 text-charcoal-800 dark:text-ivory-100"
                  >
                    {mod}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <span className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500 mb-1">
                  Core Competency Highlight
                </span>
                <span className="text-xs italic text-charcoal-700 dark:text-charcoal-300">
                  {project.coreSkill}
                </span>
              </div>
            </div>
          </div>

          {/* Tech Stack Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Full Production Stack
              </span>
              <p className="font-mono text-xs text-charcoal-700 dark:text-charcoal-300">
                {project.stack.join(" · ")}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-wider uppercase bg-charcoal-900 text-ivory-100 dark:bg-ivory-100 dark:text-charcoal-900 hover:bg-champagne hover:text-charcoal-900 dark:hover:bg-champagne dark:hover:text-charcoal-900 transition-colors"
              >
                <span>GitHub Source</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-mono tracking-wider uppercase border border-charcoal-800/20 dark:border-ivory-100/20 hover:border-charcoal-800 dark:hover:border-ivory-100 text-charcoal-700 dark:text-charcoal-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
