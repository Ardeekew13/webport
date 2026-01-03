"use client";

import React from "react";
import { useTheme } from './ThemeContext';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
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
  SiAdobeillustrator
} from 'react-icons/si';

const Skills = () => {
  const { theme } = useTheme();
  
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
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
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

  return (
    <section id="skills" className={`py-20 px-6 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          SKILLS
        </h2>
        <div className={`max-w-5xl mx-auto border p-8 md:p-12 transition-colors duration-300 ${
          theme === 'dark' ? 'border-white/10' : 'border-black/10'
        }`}>
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className={`text-sm font-bold mb-4 tracking-widest transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className={`group border p-4 transition-all duration-300 cursor-pointer ${
                          theme === 'dark'
                            ? 'border-white/10 hover:bg-white/5'
                            : 'border-black/10 hover:bg-black/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent 
                            className="w-8 h-8 flex-shrink-0 transition-all duration-300"
                            style={{ 
                              color: theme === 'dark' 
                                ? (skill.color === '#000000' || skill.color === '#000020' ? '#FFFFFF' : skill.color)
                                : skill.color 
                            }}
                          />
                          <span className="text-sm font-semibold">{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
