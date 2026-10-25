import React from 'react';
import { motion } from 'framer-motion';

export default function Expertise({ expertise }) {
  return (
    <section id="expertise" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              03 / EXPERTISE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Technical Capabilities
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            TAXONOMY OF CORE PRACTICES
          </span>
        </div>

        {/* 4 Columns Separated by Thin Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          {expertise.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t border-charcoal-800/10 dark:border-ivory-100/10 ${
                idx !== 0 ? 'lg:border-l border-charcoal-800/10 dark:border-ivory-100/10' : ''
              } ${idx % 2 === 1 ? 'md:border-l lg:border-l' : ''}`}
            >
              <div>
                {/* Column Index & Category */}
                <div className="pb-6 mb-8 border-b border-charcoal-800/10 dark:border-ivory-100/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-champagne">
                    [ 0{idx + 1} ]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal-300 dark:bg-charcoal-700"></span>
                </div>

                <h3 className="font-serif text-2xl font-light text-charcoal-800 dark:text-ivory-100 mb-8 min-h-[56px] leading-tight">
                  {group.category}
                </h3>

                {/* Skills Typographic List (No bars, no percentages) */}
                <ul className="space-y-4 font-sans text-sm text-charcoal-700 dark:text-charcoal-300 font-light">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="group/item flex items-center justify-between py-1 border-b border-charcoal-800/5 dark:border-ivory-100/5 hover:border-champagne/40 transition-colors"
                    >
                      <span className="group-hover/item:text-champagne transition-colors">
                        {skill}
                      </span>
                      <span className="font-mono text-[9px] text-charcoal-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        •
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column Footnote */}
              <div className="pt-10 mt-10 border-t border-charcoal-800/5 dark:border-ivory-100/5 font-mono text-[10px] text-charcoal-400 dark:text-charcoal-500 uppercase tracking-micro">
                <span>Domain Focus // {String(idx + 1).padStart(2, '0')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
