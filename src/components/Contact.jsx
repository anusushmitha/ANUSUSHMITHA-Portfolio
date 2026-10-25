import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ personal, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-charcoal-800/10 dark:border-ivory-100/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-charcoal-800/10 dark:border-ivory-100/10">
          <span className="font-mono text-xs uppercase tracking-micro text-champagne block mb-2">
            07 / INQUIRIES &amp; ENGAGEMENT
          </span>
          {/* Large Serif Statement */}
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal-800 dark:text-ivory-100 max-w-4xl leading-[0.95]">
            Let’s build something meaningful.
          </h2>
        </div>

        {/* Two-Column Grid: Contact Details Left, Underlined Form Right */}
        <div className="grid grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Coordinates & Resume */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <p className="font-serif italic text-xl sm:text-2xl text-charcoal-600 dark:text-charcoal-300 font-light leading-relaxed">
              Available for full-time Data Science and AI Engineering roles, research fellowships, and collaborative machine learning initiatives.
            </p>

            <div className="space-y-6 pt-6 border-t border-charcoal-800/10 dark:border-ivory-100/10 font-mono text-xs">
              {/* Email */}
              <div className="space-y-1.5">
                <span className="block text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                  Electronic Mail
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="editorial-link text-base sm:text-lg text-charcoal-900 dark:text-ivory-100 font-sans font-light"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 border border-charcoal-800/15 dark:border-ivory-100/15 hover:border-champagne transition-colors"
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                </div>
              </div>

              {/* Telephone */}
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                  Direct Line
                </span>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="editorial-link text-base sm:text-lg text-charcoal-900 dark:text-ivory-100 font-sans font-light"
                >
                  {personal.phoneDisplay}
                </a>
              </div>

              {/* Professional Networks */}
              <div className="space-y-2 pt-2">
                <span className="block text-[10px] uppercase tracking-micro text-charcoal-400 dark:text-charcoal-500">
                  Professional Networks
                </span>
                <div className="space-y-1.5 text-sm text-charcoal-700 dark:text-charcoal-300">
                  <div>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link hover:text-champagne transition-colors"
                    >
                      {personal.linkedinHandle}
                    </a>
                  </div>
                  <div>
                    <a
                      href={personal.hackerrank}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link hover:text-champagne transition-colors"
                    >
                      {personal.hackerrankHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Resume Text Link */}
              <div className="pt-4">
                <button
                  onClick={onOpenResume}
                  className="editorial-link group font-mono text-xs uppercase tracking-micro text-charcoal-900 dark:text-ivory-100 hover:text-champagne flex items-center gap-2 py-1 focus:outline-none"
                >
                  <span className="font-medium">Download Résumé (PDF / Dossier)</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">↓</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Contact Form (Underlined Inputs Only, No Boxes) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-charcoal-800/[0.015] dark:bg-ivory-100/[0.015] border border-charcoal-800/10 dark:border-ivory-100/10 p-8 sm:p-12">
              <span className="block font-mono text-xs uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400 mb-8">
                Direct Correspondence
              </span>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 mx-auto rounded-full border border-champagne flex items-center justify-center text-champagne">
                    ✓
                  </div>
                  <h3 className="font-serif text-3xl font-light text-charcoal-800 dark:text-ivory-100">
                    Message Dispatched
                  </h3>
                  <p className="font-sans text-sm text-charcoal-600 dark:text-charcoal-300 font-light max-w-md mx-auto">
                    Thank you. Your inquiry has been logged. Anu Sushmitha will respond directly to <span className="font-medium text-charcoal-900 dark:text-ivory-100">{formState.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', organization: '', message: '' });
                    }}
                    className="font-mono text-xs uppercase tracking-micro text-champagne editorial-link pt-4"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="editorial-input font-sans text-charcoal-800 dark:text-ivory-100"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. eleanor@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="editorial-input font-sans text-charcoal-800 dark:text-ivory-100"
                    />
                  </div>

                  {/* Organization Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-org"
                      className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400"
                    >
                      Organization / Purpose
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder="e.g. Research Lab, Data Science Hiring, Technical Advisory"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="editorial-input font-sans text-charcoal-800 dark:text-ivory-100"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[10px] uppercase tracking-micro text-charcoal-500 dark:text-charcoal-400"
                    >
                      Message Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={3}
                      placeholder="Describe the opportunity, research inquiry, or project scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="editorial-input font-sans text-charcoal-800 dark:text-ivory-100 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-charcoal-400 dark:text-charcoal-500">
                      * All communications confidential
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-3.5 bg-charcoal-900 text-ivory-100 dark:bg-ivory-100 dark:text-charcoal-900 font-mono text-xs uppercase tracking-micro hover:bg-champagne hover:text-charcoal-900 dark:hover:bg-champagne dark:hover:text-charcoal-900 transition-colors focus:outline-none"
                    >
                      <span>Transmit Message</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
