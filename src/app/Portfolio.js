'use client';

import React from "react";
import { useTheme } from './ThemeContext';

const Portfolio = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: 'POS System Demo',
      description: 'Point of Sale system with inventory management and sales tracking',
      tech: ['Next.js', 'MongoDB', 'Ant Design'],
      image: '/pos-demo.png',
      link: 'https://pos-portfolio-demo.vercel.app'
    },
    {
      title: 'Crime Monitoring App',
      description: 'Mobile app for crime reporting with GPS tracking and SOS alerts',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      image: '/proj2.png',
      link: 'https://github.com/Ardeekew13/Alertado'
    }
  ];

  return (
    <section id="projects" className={`py-20 px-6 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border transition-all duration-300 cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5'
                  : 'border-black/10 hover:bg-black/5'
              }`}
            >
              <div className={`aspect-video relative overflow-hidden ${
                theme === 'dark' ? 'bg-black' : 'bg-gray-100'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                <p className={`mb-4 text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 border text-xs font-semibold transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'border-white/20 text-gray-300'
                          : 'border-black/20 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
