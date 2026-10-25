import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-ivory-100 text-charcoal-800 dark:bg-charcoal-900 dark:text-ivory-100 selection:bg-champagne/30 selection:text-charcoal-900 dark:selection:text-ivory-100 transition-colors duration-500 ease-out">
      {/* Editorial Grain Overlay */}
      <div className="editorial-grain pointer-events-none fixed inset-0 z-0 opacity-40"></div>

      {/* Custom Delicate Cursor */}
      <CustomCursor />

      {/* Main App Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Header isDark={isDark} setIsDark={setIsDark} />

        {/* 1. Hero Section */}
        <main>
          <Hero personal={portfolioData.personal} />

          {/* 2. Selected Work (The Centerpiece) */}
          <SelectedWork projects={portfolioData.projects} />

          {/* 3. About Section */}
          <About about={portfolioData.about} personal={portfolioData.personal} />

          {/* 4. Expertise Section */}
          <Expertise expertise={portfolioData.expertise} />

          {/* 5. Experience Section */}
          <Experience experience={portfolioData.experience} />

          {/* 6. Education & Certifications Section */}
          <Education
            education={portfolioData.education}
            certifications={portfolioData.certifications}
          />

          {/* 7. Publications & Achievements Section */}
          <Publications publications={portfolioData.publications} />

          {/* 8. Contact Section */}
          <Contact
            personal={portfolioData.personal}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer personal={portfolioData.personal} />

        {/* Resume Modal Dossier */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          data={portfolioData}
        />
      </div>
    </div>
  );
}
