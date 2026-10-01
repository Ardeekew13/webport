'use client';

import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const cards = [
  { icon: FaGraduationCap, title: 'EDUCATION', text: 'Information Technology graduate from Holy Name University' },
  { icon: FaBriefcase, title: 'EXPERIENCE', text: '2+ years of freelancing and professional development' },
  { icon: FaRocket, title: 'PROJECTS', text: 'Live products shipped, from POS systems to SaaS tools' },
];

const About = () => {
  const [onCourt, setOnCourt] = useState(false);

  return (
    <section id="about" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="01 · WHO I AM" title="ABOUT" />

        <div className="grid lg:grid-cols-[auto_1fr] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Profile */}
          <Reveal className="relative w-64 md:w-80 mx-auto">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-ball/60" />
            {/* Hover (or tap on mobile) to blend from the studio shot to the on-court shot */}
            <button
              type="button"
              onClick={() => setOnCourt((v) => !v)}
              aria-pressed={onCourt}
              aria-label="Switch photo"
              className="group relative block w-full aspect-[2/3] overflow-hidden bg-neutral-200 dark:bg-neutral-800 cursor-pointer"
            >
              <img
                src="/webport/profile.jpg"
                alt="Ron Derick Quilicot"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105 ${
                  onCourt ? 'opacity-0 scale-105' : ''
                }`}
              />
              <img
                src="/webport/profile-court.jpg"
                alt="Ron Derick Quilicot playing basketball for Holy Name University"
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 ${
                  onCourt ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              />
              <span
                className={`absolute left-3 bottom-3 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] bg-black/60 text-white backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 ${
                  onCourt ? 'opacity-100' : 'opacity-0'
                }`}
              >
                OFF THE KEYBOARD
              </span>
            </button>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                I&apos;m a <span className="text-ball font-medium">Junior Software Engineer</span> at HISD3, where I build and
                maintain hospital information systems that support day-to-day hospital operations. I work across the
                entire stack, from responsive interfaces to reliable APIs and databases, with a focus on clean,
                maintainable code and a thoughtful user experience.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {cards.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  key={title}
                  delay={i * 100}
                  className="group border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-6 hover:border-ball/60 transition-colors"
                >
                  <Icon className="w-7 h-7 text-ball mb-4 transition-transform group-hover:-translate-y-1" />
                  <h3 className="font-display text-2xl tracking-wider mb-1">{title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
