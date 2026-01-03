'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  
  const experiences = [
    {
      year: '2023',
      title: 'OJT Intern',
      company: 'Pedicab',
      description: 'Gained practical experience in software development'
    },
    {
      year: '2024',
      title: 'Graduated',
      company: 'Holy Name University',
      description: 'Bachelor of Science in Information Technology'
    },
    {
      year: '2024',
      title: 'Front-End Developer',
      company: 'SMCT Group of Companies',
      description: '6 months of professional web development'
    },
    {
      year: '2024 - Present',
      title: 'Junior Software Engineer',
      company: 'HISD3 Inc.',
      description: 'Full-stack development and software engineering'
    }
  ];

  return (
    <section id="experience" className={`py-20 px-6 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          EXPERIENCE
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px transition-colors duration-300 ${
              theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
            }`}></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full -ml-2 border-4 z-10 transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white border-black' 
                      : 'bg-black border-white'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pl-0'
                  }`}>
                    <div className={`p-6 border transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-white/90 border-white/10 hover:bg-white text-black' 
                        : 'bg-white border-black/10 hover:bg-gray-50 shadow-sm'
                    }`}>
                      <div className={`text-sm mb-2 font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-600'
                      }`}>{exp.year}</div>
                      <h3 className={`text-xl font-bold mb-1 ${
                        theme === 'dark' ? 'text-black' : 'text-black'
                      }`}>{exp.title}</h3>
                      <div className={`font-semibold mb-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-700' : 'text-gray-700'
                      }`}>{exp.company}</div>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-600'
                      }`}>{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
