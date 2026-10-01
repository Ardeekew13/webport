'use client';

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const BASE = '/webport';

const projects = [
  {
    title: 'NextQ',
    tag: 'LIVE',
    description:
      'Pickleball open-play organizer: fair random matchmaking, instant court queuing and live standings. Players join by scanning a QR, no app needed.',
    tech: ['Next.js', 'Ant Design'],
    image: `${BASE}/nextqueue.jpg`,
    fit: 'cover',
    link: 'https://nextqueue.online',
    url: 'nextqueue.online',
  },
  {
    title: 'Amotify',
    tag: 'LIVE',
    description:
      'Smart expense tracking and splitting for groups, with QR code payments and real-time shared expense management.',
    tech: ['Next.js', 'Ant Design'],
    image: `${BASE}/amotify.jpg`,
    fit: 'cover',
    link: 'https://amotify.online',
    url: 'amotify.online',
  },
  {
    title: 'POS System Demo',
    tag: 'DEMO',
    description: 'Point of Sale system with inventory management and sales tracking.',
    tech: ['Next.js', 'MongoDB', 'Ant Design'],
    image: `${BASE}/pos-demo.png`,
    fit: 'contain',
    link: 'https://pos-portfolio-demo.vercel.app',
    url: 'pos-portfolio-demo.vercel.app',
  },
  {
    title: 'Crime Monitoring App',
    tag: 'MOBILE',
    description: 'Mobile app for crime reporting with GPS tracking and SOS alerts.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    image: `${BASE}/proj2.png`,
    fit: 'contain',
    link: 'https://github.com/Ardeekew13/Alertado',
    url: 'github.com/Ardeekew13/Alertado',
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="05 · SELECTED WORK" title="PROJECTS" sub="A few things I have built. Click any card to visit it." />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 120}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] hover:border-ball/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(242,106,27,0.45)]"
              >
                {/* Browser frame thumbnail */}
                <div className="border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-black/[0.03] dark:bg-white/[0.04]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 flex-1 truncate text-[11px] font-mono text-neutral-500 bg-black/5 dark:bg-white/5 px-3 py-0.5 rounded">
                      {project.url}
                    </span>
                  </div>
                  <div
                    className={`relative aspect-[16/10] overflow-hidden ${
                      project.fit === 'cover' ? 'bg-white' : 'bg-neutral-100 dark:bg-black'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                        project.fit === 'cover' ? 'object-cover object-top' : 'object-contain'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] px-2 py-1 bg-ball text-black">
                      {project.tag === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />}
                      {project.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 px-4 py-2 bg-ball text-black text-xs font-bold tracking-wider translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      VISIT <FiArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-4xl tracking-wide leading-none">{project.title}</h3>
                    <FiArrowUpRight className="w-6 h-6 flex-shrink-0 text-neutral-400 group-hover:text-ball group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="mt-3 mb-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-black/15 dark:border-white/15 text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
