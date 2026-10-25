import React from 'react';
import { motion } from 'framer-motion';

export default function Education({ education, certifications }) {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              05 / FORMATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Education &amp; Credentials
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            ACADEMIC RIGOR &amp; ACCREDITATION
          </span>
        </div>

        {/* Two-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Academic Degrees */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 pb-4 border-b border-charcoal-800/10 dark:border-ivory-100/10">
              Academic Degrees &amp; Schooling
            </h3>

            <div className="space-y-8">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="pb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10 space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl font-light text-charcoal-800 dark:text-ivory-100">
                      {item.degree}
                    </h4>
                    <span className="font-mono text-xs text-champagne shrink-0">
                      {item.score}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-charcoal-500 dark:text-charcoal-400">
                    <span className="text-charcoal-700 dark:text-charcoal-300 font-medium">{item.institution}</span>
                    <span>·</span>
                    <span>{item.location}</span>
                    <span>·</span>
                    <span>{item.period}</span>
                  </div>

                  {item.notes && (
                    <p className="font-sans text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-400 font-light pt-1">
                      {item.notes}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 pb-4 border-b border-charcoal-800/10 dark:border-ivory-100/10">
              Industry Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 bg-charcoal-800/[0.02] dark:bg-ivory-100/[0.02] border border-charcoal-800/10 dark:border-ivory-100/10 space-y-2"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-charcoal-400 dark:text-charcoal-500 uppercase tracking-micro">
                    <span>{cert.issuer}</span>
                    <span className="text-champagne font-medium">{cert.badge}</span>
                  </div>

                  <h4 className="font-serif text-lg font-light text-charcoal-800 dark:text-ivory-100 leading-snug">
                    {cert.title}
                  </h4>

                  <div className="flex justify-between items-center font-mono text-[11px] text-charcoal-500 dark:text-charcoal-400 pt-2 border-t border-charcoal-800/5 dark:border-ivory-100/5">
                    <span>Verification Record</span>
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
