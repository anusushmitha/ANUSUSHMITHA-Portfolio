import React from 'react';
import { motion } from 'framer-motion';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              04 / EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Professional Practice
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            INDUSTRY ENGAGEMENT
          </span>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-charcoal-800/15 dark:border-ivory-100/15 space-y-16">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-3 h-3 rounded-full bg-ivory-100 dark:bg-charcoal-900 border-2 border-champagne"></div>

              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-6 border-b border-charcoal-800/10 dark:border-ivory-100/10">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal-800 dark:text-ivory-100">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">
                    <span className="text-charcoal-800 dark:text-ivory-100 font-medium">{item.organization}</span>
                    <span>·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <span className="font-mono text-xs tracking-micro uppercase text-champagne">
                  {item.period}
                </span>
              </div>

              {/* Responsibilities List */}
              <div className="max-w-3xl space-y-4">
                <ul className="space-y-3 font-sans text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 font-light leading-relaxed">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Applied Strip */}
                {item.skillsUsed && (
                  <div className="pt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500 mr-2">
                      Tools &amp; Paradigms:
                    </span>
                    {item.skillsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] bg-charcoal-800/5 dark:bg-ivory-100/5 border border-charcoal-800/10 dark:border-ivory-100/10 text-charcoal-700 dark:text-charcoal-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
