import React, { useState, useEffect } from 'react';

export default function Footer({ personal }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setTimeStr(`${formatter.format(now)} IST`);
      } catch {
        setTimeStr('Chennai, IN');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-charcoal-800/10 dark:border-ivory-100/10 font-mono text-xs text-charcoal-500 dark:text-charcoal-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
          <span>© {new Date().getFullYear()} {personal.name.toUpperCase()}</span>
          <span className="text-charcoal-300 dark:text-charcoal-700">·</span>
          <span className="hidden md:inline">ALL RIGHTS RESERVED</span>
        </div>

        {/* Center: Live Local Time */}
        <div className="text-[11px] tracking-micro text-charcoal-400 dark:text-charcoal-500 uppercase">
          <span>CHENNAI // {timeStr}</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="editorial-link tracking-micro uppercase text-[11px] text-charcoal-700 dark:text-charcoal-300 hover:text-champagne transition-colors flex items-center gap-2 focus:outline-none"
        >
          <span>BACK TO TOP</span>
          <span className="text-champagne">↑</span>
        </button>
      </div>
    </footer>
  );
}
