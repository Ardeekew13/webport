'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-20 px-6 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          ABOUT
        </h2>
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-16">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
              theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
            }`}></div>
            <Image
              src="/user.png"
              alt="Ron Derick Quilicot"
              fill
              className="object-contain rounded-full p-2"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className={`border p-8 transition-all duration-300 ${
            theme === 'dark'
              ? 'border-white/10 hover:bg-white/5'
              : 'border-black/10 hover:bg-black/5'
          }`}>
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">EDUCATION</h3>
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Information Technology graduate from Holy Name University
            </p>
          </div>
          <div className={`border p-8 transition-all duration-300 ${
            theme === 'dark'
              ? 'border-white/10 hover:bg-white/5'
              : 'border-black/10 hover:bg-black/5'
          }`}>
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">EXPERIENCE</h3>
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              1+ years of freelancing and professional development
            </p>
          </div>
          <div className={`border p-8 transition-all duration-300 ${
            theme === 'dark'
              ? 'border-white/10 hover:bg-white/5'
              : 'border-black/10 hover:bg-black/5'
          }`}>
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">PROJECTS</h3>
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              2+ completed projects with satisfied clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
