'use client';

import React from 'react';
import CourtLines from './CourtLines';
import HoopScene from './HoopScene';

const stats = [
  ['2+', 'YRS PRO'],
  ['4', 'PROJECTS'],
  ['15+', 'TOOLS'],
];

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-24 px-6 overflow-hidden">
      <CourtLines className="absolute inset-0 w-full h-full text-black/[0.045] dark:text-white/[0.04] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-[40rem] h-[40rem] rounded-full bg-ball/20 dark:bg-ball/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-ball/40 text-ball text-[11px] font-semibold tracking-[0.25em] mb-6">
            <span className="w-2 h-2 rounded-full bg-ball animate-pulse" />
            JUNIOR SOFTWARE ENGINEER
          </div>

          <h1 className="font-display text-[clamp(4.25rem,13vw,10rem)] leading-[0.85] tracking-wide">
            RON DERICK
            <br />
            <span className="text-ball">QUILICOT</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
            Building secure, scalable web and mobile applications for healthcare and business.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-ball text-black font-bold tracking-wider hover:bg-ball-light transition-colors"
            >
              VIEW WORK
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 border-2 border-current font-bold tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              CONTACT
            </button>
          </div>

          {/* Box score */}
          <div className="mt-10 grid grid-cols-3 max-w-md mx-auto lg:mx-0 border border-black/10 dark:border-white/10 divide-x divide-black/10 dark:divide-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
            {stats.map(([value, label]) => (
              <div key={label} className="py-3 text-center">
                <div className="font-display text-4xl leading-none text-ball">{value}</div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-neutral-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
          <HoopScene className="w-full h-auto text-neutral-900 dark:text-white" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
