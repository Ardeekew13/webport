'use client';

import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaServer } from 'react-icons/fa';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies like React, Next.js, and Tailwind CSS.',
    icon: FaLaptopCode,
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native and Expo for iOS and Android platforms.',
    icon: FaMobileAlt,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces with tools like Figma, Photoshop, and Illustrator.',
    icon: FaPencilRuler,
  },
  {
    title: 'Backend Development',
    description: 'Developing robust backend systems with Spring Boot (Groovy), PostgreSQL, MySQL, MongoDB, GraphQL and Firebase for scalable applications.',
    icon: FaServer,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="02 · WHAT I DO" title="SERVICES" sub="How I can help with your next product." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              key={title}
              delay={index * 90}
              className="group relative overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-8 hover:border-ball/60 transition-colors"
            >
              <span className="absolute -top-3 right-3 font-display text-8xl leading-none text-outline text-black/10 dark:text-white/10 group-hover:text-ball/40 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <Icon className="relative w-9 h-9 text-ball mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              <h3 className="relative font-display text-3xl tracking-wide mb-3">{title}</h3>
              <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-ball group-hover:w-full transition-all duration-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
