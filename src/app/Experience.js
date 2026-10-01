'use client';

import React from 'react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    year: '2023',
    title: 'OJT Intern',
    company: 'Pedicab',
    description: 'Gained practical experience in software development',
  },
  {
    year: '2024',
    title: 'Graduated',
    company: 'Holy Name University',
    description: 'Bachelor of Science in Information Technology',
  },
  {
    year: '2024',
    title: 'Front-End Developer',
    company: 'SMCT Group of Companies',
    description: '6 months of professional web development',
  },
  {
    year: '2024 - Present',
    title: 'Junior Software Engineer',
    company: 'HISD3 Inc.',
    description: 'Full-stack development and software engineering',
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="03 · MY JOURNEY" title="EXPERIENCE" sub="Where I have studied and worked." />
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ball via-ball/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const left = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <span className="absolute left-6 md:left-1/2 w-3.5 h-3.5 -ml-[7px] z-10 rounded-full bg-ball ring-4 ring-court-light dark:ring-court-dark" />

                  <Reveal
                    delay={80}
                    className={`w-full md:w-1/2 pl-16 ${left ? 'md:pl-0 md:pr-14' : 'md:pl-14'}`}
                  >
                    <div className="group relative border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-6 hover:border-ball/60 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-3xl leading-none text-ball">{exp.year}</span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] px-2 py-0.5 bg-ball text-black">
                            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            CURRENT
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-3xl tracking-wide leading-tight">{exp.title}</h3>
                      <div className="font-semibold mb-2 text-neutral-700 dark:text-neutral-300">{exp.company}</div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.description}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
