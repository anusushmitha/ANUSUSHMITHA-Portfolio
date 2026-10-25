import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectModal from './ProjectModal';

export default function SelectedWork({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-10 mb-16 sm:mb-24 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              01 / SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Machine Learning &amp; AI Systems
            </h2>
          </div>
          <p className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            THREE PRODUCTION-GRADE ARCHITECTURES
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-32 sm:space-y-40">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Micro Label / Number Header */}
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10 font-mono text-xs text-charcoal-500 dark:text-charcoal-400">
                  <div className="flex items-center gap-3">
                    <span className="text-champagne font-medium">{project.number}</span>
                    <span>·</span>
                    <span className="uppercase tracking-micro">{project.category}</span>
                  </div>
                  <span className="hidden sm:inline italic text-charcoal-600 dark:text-charcoal-400">
                    Core: {project.coreSkill}
                  </span>
                </div>

                {/* Asymmetric 12-Column Grid */}
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                  {/* Text & Specs Column */}
                  <div
                    className={`col-span-12 lg:col-span-6 space-y-8 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Title with hover behavior */}
                    <div>
                      <div className="inline-block relative">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="text-left group/title focus:outline-none"
                        >
                          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-800 dark:text-ivory-100 transition-transform duration-500 group-hover:translate-x-2 flex items-center gap-4">
                            <span>{project.title}</span>
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-champagne text-2xl font-light">
                              →
                            </span>
                          </h3>
                          {/* Accent hairline underline draws left to right on hover */}
                          <div className="h-px w-0 bg-champagne group-hover:w-full transition-all duration-500 ease-out mt-1"></div>
                        </button>
                      </div>

                      <p className="mt-3 text-base sm:text-lg font-serif italic text-charcoal-600 dark:text-charcoal-300 leading-snug">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 pt-4 border-t border-charcoal-800/10 dark:border-ivory-100/10">
                      <span className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                        Capabilities &amp; Features
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300 font-light">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-champagne rounded-full"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Models & Stack Hairline Row */}
                    <div className="space-y-3 pt-4 border-t border-charcoal-800/10 dark:border-ivory-100/10">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="text-charcoal-400 dark:text-charcoal-500 text-[10px] uppercase tracking-micro mr-2">
                          Models:
                        </span>
                        {project.models.map((mod, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-2.5 py-0.5 text-[11px] bg-charcoal-800/5 dark:bg-ivory-100/5 border border-charcoal-800/10 dark:border-ivory-100/10 text-charcoal-700 dark:text-charcoal-300"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 font-mono text-xs text-charcoal-500 dark:text-charcoal-400">
                        <span className="text-charcoal-400 dark:text-charcoal-500 text-[10px] uppercase tracking-micro block mb-1">
                          Technology Stack:
                        </span>
                        <p className="text-charcoal-700 dark:text-charcoal-300">
                          {project.stack.join(" · ")}
                        </p>
                      </div>
                    </div>

                    {/* Actions: View Case Study / GitHub */}
                    <div className="flex items-center gap-6 pt-4 font-mono text-xs">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="editorial-link font-medium text-charcoal-900 dark:text-ivory-100 hover:text-champagne dark:hover:text-champagne transition-colors flex items-center gap-2"
                      >
                        <span>View Case Study</span>
                        <span>→</span>
                      </button>

                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="editorial-link text-charcoal-500 hover:text-charcoal-900 dark:text-charcoal-400 dark:hover:text-ivory-100 transition-colors flex items-center gap-1.5"
                      >
                        <span>GitHub</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Visual & Architecture Column */}
                  <div
                    className={`col-span-12 lg:col-span-6 space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Architecture Blueprint Display */}
                    <ArchitectureDiagram projectId={project.id} />

                    {/* Metrics Callout Strip */}
                    <div className="grid grid-cols-3 gap-3 p-4 bg-charcoal-800/[0.02] dark:bg-ivory-100/[0.02] border border-charcoal-800/10 dark:border-ivory-100/10 font-mono text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-1">
                          <span className="block text-[9.5px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                            {m.label}
                          </span>
                          <span className="block font-serif text-xl sm:text-2xl text-charcoal-900 dark:text-ivory-100 font-light">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Abstract Blueprint / Frame Label */}
                    <div className="flex items-center justify-between px-2 text-[10px] font-mono text-charcoal-400 dark:text-charcoal-500 uppercase tracking-micro">
                      <span>SYSTEM ARCHITECTURE // {project.id}</span>
                      <span>VALIDATED BENCHMARK</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
