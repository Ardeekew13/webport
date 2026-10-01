"use client";

import React from "react";
import { useTheme } from './ThemeContext';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiExpo,
  SiTailwindcss,
  SiAntdesign,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiGooglemaps,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSpringboot,
  SiApachegroovy,
  SiPostgresql
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'FRAMEWORK',
    skills: [
      { name: 'React JS', icon: FaReact, color: '#61DAFB' },
      { name: 'React Native', icon: FaReact, color: '#61DAFB' },
      { name: 'Next JS', icon: SiNextdotjs, color: '#000000' },
      { name: 'Expo', icon: SiExpo, color: '#000020' }
    ]
  },
  {
    title: 'FRONT END',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Ant Design', icon: SiAntdesign, color: '#0170FE' }
    ]
  },
  {
    title: 'BACK END',
    skills: [
      { name: 'Groovy', icon: SiApachegroovy, color: '#4298B8' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Google Maps', icon: SiGooglemaps, color: '#4285F4' }
    ]
  },
  {
    title: 'DESIGN',
    skills: [
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
      { name: 'Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' }
    ]
  }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="04 · TOOLKIT" title="SKILLS" sub="Technologies and tools I work with." />
        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category) => (
            <Reveal key={category.title}>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="font-display text-3xl tracking-wider">{category.title}</h3>
                <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const dark = skill.color === '#000000' || skill.color === '#000020';
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-4 hover:border-ball/60 hover:-translate-y-0.5 transition-all"
                    >
                      <IconComponent
                        className="w-7 h-7 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: theme === 'dark' && dark ? '#FFFFFF' : skill.color }}
                      />
                      <span className="text-sm font-semibold">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
