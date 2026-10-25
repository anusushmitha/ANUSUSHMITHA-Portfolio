import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ personal }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full selection:bg-champagne/20">
      {/* Top Editorial Bar */}
      <div className="pt-6 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal-800/10 dark:border-ivory-100/10"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
            <span className="font-mono text-xs uppercase tracking-micro text-charcoal-600 dark:text-charcoal-300">
              DATA SCIENTIST · AI ENGINEER
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-charcoal-500 dark:text-charcoal-400">
            <span>B.Tech AI &amp; DS · CGPA {personal.cgpa.split('/')[0].trim()}</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{personal.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Centerpiece Hero Statement */}
      <div className="my-auto py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Main Title & Subtitle */}
          <div className="col-span-12 lg:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-light tracking-tight leading-[0.92] text-charcoal-800 dark:text-ivory-100"
            >
              {personal.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-12 max-w-3xl"
            >
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-charcoal-700 dark:text-charcoal-300 font-light leading-relaxed">
                “{personal.tagline}”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs tracking-wider uppercase text-charcoal-600 dark:text-charcoal-400"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-charcoal-900 dark:text-ivory-100 font-medium hover:text-champagne dark:hover:text-champagne transition-colors"
              >
                <span>Selected Systems</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <span className="text-charcoal-300 dark:text-charcoal-700">|</span>
              <a
                href="#about"
                className="editorial-link hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors"
              >
                Background &amp; Philosophy
              </a>
              <span className="text-charcoal-300 dark:text-charcoal-700">|</span>
              <a
                href="#contact"
                className="editorial-link hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors"
              >
                Inquiries
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Status & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="pt-8 border-t border-charcoal-800/10 dark:border-ivory-100/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs"
      >
        <div className="flex items-center gap-3 text-charcoal-500 dark:text-charcoal-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
          </span>
          <span className="tracking-micro uppercase text-[11px] text-charcoal-700 dark:text-charcoal-300">
            {personal.status}
          </span>
        </div>

        <a
          href="#work"
          className="group inline-flex items-center gap-3 text-charcoal-500 dark:text-charcoal-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors tracking-micro uppercase text-[11px]"
          aria-label="Scroll to selected work"
        >
          <span>SCROLL TO EXPLORE WORK</span>
          <span className="inline-block transform group-hover:translate-y-1 transition-transform duration-300 text-champagne">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
