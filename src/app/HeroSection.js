'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className={`text-6xl md:text-8xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            RON DERICK<br/>QUILICOT
          </h1>
          <div className={`h-px w-32 mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          }`}></div>
          <p className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Full Stack Developer & Designer
          </p>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            I craft beautiful digital experiences with clean code and creative design.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              VIEW WORK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border-2 font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
