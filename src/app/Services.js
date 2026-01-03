'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

const Services = () => {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies like React, Next.js, and Tailwind CSS.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native and Expo for iOS and Android platforms.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with tools like Figma, Photoshop, and Illustrator.",
      icon: "🎨"
    },
    {
      title: "Backend Development",
      description: "Developing robust backend systems with PHP, MySQL, and Firebase for scalable applications.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className={`py-20 px-6 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`border p-8 transition-all duration-300 group ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5'
                  : 'border-black/10 hover:bg-black/5'
              }`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
