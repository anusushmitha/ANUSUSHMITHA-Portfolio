import React from 'react';
import { motion } from 'framer-motion';

export default function About({ about, personal }) {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
              02 / ABOUT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100">
              Discipline &amp; Perspective
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 mt-4 sm:mt-0 tracking-wider">
            PROFILE · BATCH OF 2026
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Column 1: Placeholder Portrait Frame (Monochrome, Thin Border, Camera Registration Marks) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 space-y-4"
          >
            {/* The Editorial Frame */}
            <div className="relative aspect-[4/5] w-full bg-[#181818]/5 dark:bg-[#121212] border border-charcoal-800/20 dark:border-ivory-100/20 p-6 flex flex-col justify-between overflow-hidden">
              {/* Corner Registration Marks (Editorial Camera Frame) */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-champagne/60"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-champagne/60"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-champagne/60"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-champagne/60"></div>

              {/* Frame Header */}
              <div className="flex justify-between items-center font-mono text-[9.5px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                <span>PORTRAIT FRAME // 01</span>
                <span>35MM MONOCHROME</span>
              </div>

              {/* Minimalist Graphic Representation / Monogram Silhouette */}
              <div className="my-auto text-center py-10 space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full border border-charcoal-800/20 dark:border-ivory-100/20 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full border border-champagne/40 flex items-center justify-center">
                    <span className="font-serif text-3xl font-light text-charcoal-800 dark:text-ivory-100">
                      AS
                    </span>
                  </div>
                  {/* Subtle orbital ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-charcoal-400/20 animate-spin" style={{ animationDuration: '40s' }}></div>
                </div>

                <div className="space-y-1">
                  <p className="font-serif text-2xl font-light text-charcoal-800 dark:text-ivory-100">
                    {personal.name}
                  </p>
                  <p className="font-mono text-[10px] tracking-micro uppercase text-charcoal-500 dark:text-charcoal-400">
                    B.Tech AI &amp; Data Science · Panimalar
                  </p>
                </div>
              </div>

              {/* Frame Footer */}
              <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500 pt-4 border-t border-charcoal-800/10 dark:border-ivory-100/10">
                <span>LAT 13.0827° N · CHENNAI</span>
                <span>CGPA 8.9 / 10</span>
              </div>
            </div>

            {/* Frame Caption */}
            <p className="font-mono text-[10.5px] text-charcoal-500 dark:text-charcoal-400 tracking-wide text-center">
              Candidate Dossier // Specialization in Predictive Modeling &amp; Agentic Systems
            </p>
          </motion.div>

          {/* Column 2: Bio, Soft Skills & Editorial Statements */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-7 space-y-8"
          >
            {/* Primary Bio Statement */}
            <div className="space-y-6">
              <p className="font-serif text-2xl sm:text-3xl text-charcoal-800 dark:text-ivory-100 font-light leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Editorial Perspective Notes */}
            <div className="space-y-4 pt-6 border-t border-charcoal-800/10 dark:border-ivory-100/10">
              {about.editorialNotes?.map((note, idx) => (
                <p key={idx} className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 font-light leading-relaxed">
                  {note}
                </p>
              ))}
            </div>

            {/* Quiet Soft Skills Line */}
            <div className="pt-6 border-t border-charcoal-800/10 dark:border-ivory-100/10 space-y-2">
              <span className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                Core Interpersonal Attributes
              </span>
              <p className="font-mono text-sm tracking-widest uppercase text-charcoal-800 dark:text-ivory-100">
                Leadership <span className="text-champagne mx-2">·</span> Communication <span className="text-champagne mx-2">·</span> Public Speaking
              </p>
            </div>

            {/* Key Editorial Numbers Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-charcoal-800/10 dark:border-ivory-100/10">
              {about.highlights?.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-serif text-3xl sm:text-4xl font-light text-charcoal-900 dark:text-ivory-100">
                    {item.metric}
                  </span>
                  <span className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400">
                    {item.label}
                  </span>
                  <span className="block font-sans text-[11px] text-charcoal-400 dark:text-charcoal-500 font-light">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
