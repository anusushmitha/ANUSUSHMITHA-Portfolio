import React from 'react';
import { motion } from 'framer-motion';

export default function Publications({ publications }) {
  return (
    <section id="publications" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              06 / RESEARCH &amp; SCHOLARSHIP
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Publications &amp; Papers
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            PEER-REVIEWED CITATIONS &amp; INDEXING
          </span>
        </div>

        {/* Elegant Numbered Academic Citation List */}
        <div className="divide-y divide-charcoal-800/10 dark:divide-ivory-100/10">
          {publications.map((paper, idx) => (
            <motion.article
              key={paper.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 group"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Index / Number */}
                <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-champagne block">
                    [ 0{idx + 1} ]
                  </span>
                </div>

                {/* Main Citation & Title */}
                <div className="col-span-12 sm:col-span-10 lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
                    <span className="px-2.5 py-0.5 border border-champagne/40 text-champagne uppercase tracking-micro">
                      {paper.indexing}
                    </span>
                    <span className="text-charcoal-400 dark:text-charcoal-500">·</span>
                    <span className="text-charcoal-500 dark:text-charcoal-400 uppercase tracking-wider">
                      {paper.domain}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal-800 dark:text-ivory-100 leading-snug group-hover:text-champagne transition-colors">
                    {paper.title}
                  </h3>

                  <p className="font-sans text-sm text-charcoal-600 dark:text-charcoal-400 font-light leading-relaxed max-w-3xl">
                    {paper.summary}
                  </p>

                  <div className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 pt-1">
                    <span>Citation: Sushmitha S, Anu et al. ({paper.year}).</span>
                  </div>
                </div>

                {/* Status / Year Side Badge */}
                <div className="col-span-12 lg:col-span-3 lg:text-right font-mono text-xs text-charcoal-400 dark:text-charcoal-500">
                  <span className="hidden lg:block uppercase tracking-micro text-[10px]">
                    Scholarly Record
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-charcoal-700 dark:text-charcoal-300 font-light">
                    {paper.year}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
