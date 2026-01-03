"use client";

import { useState } from "react";
import CustomNav from "./CustomNav";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import { ThemeProvider, useTheme } from "./ThemeContext";

function HomeContent() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <CustomNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'border-white/10' : 'border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
            CONTACT
          </h2>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Let&apos;s work together on your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                EMAIL
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border-2 font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border-2 font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'border-white/10' : 'border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2026 RON DERICK QUILICOT
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
