"use client";

import { useEffect, useState } from "react";
import CustomNav from "./CustomNav";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import CourtLines from "./CourtLines";
import Reveal from "./Reveal";
import { ThemeProvider } from "./ThemeContext";

const SECTIONS = ["home", "about", "services", "experience", "skills", "projects", "contact"];

const TICKER = [
  "REACT", "NEXT.JS", "REACT NATIVE", "TAILWIND", "ANT DESIGN", "MONGODB",
  "GROOVY", "SPRING BOOT", "POSTGRESQL", "MYSQL", "GRAPHQL", "FIREBASE", "FIGMA", "EXPO",
];

function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-y border-black/10 dark:border-white/10 py-4">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-xl tracking-[0.2em] whitespace-nowrap text-neutral-500">
            {t}
            <span className="w-1.5 h-1.5 rounded-full bg-ball" />
          </span>
        ))}
      </div>
    </div>
  );
}

function HomeContent() {
  const [activeSection, setActiveSection] = useState("home");

  // Highlight the nav item for whichever section is in view.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-court-light text-neutral-900 dark:bg-court-dark dark:text-white transition-colors duration-300">
      <CustomNav activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <Ticker />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Portfolio />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-black/10 dark:border-white/10">
        <Reveal className="relative max-w-5xl mx-auto overflow-hidden border border-ball/40 bg-ball/[0.06] px-6 py-16 md:py-24 text-center">
          <CourtLines className="absolute inset-0 w-full h-full text-ball/10 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-3 text-ball font-semibold tracking-[0.3em] text-xs mb-4">
              <span className="h-px w-8 bg-ball" />
              06 · GET IN TOUCH
              <span className="h-px w-8 bg-ball" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-wide">
              LET&apos;S BUILD
              <br />
              <span className="text-ball">SOMETHING</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Let&apos;s work together on your next project.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-xs md:max-w-none mx-auto">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-3.5 bg-ball text-black font-bold tracking-wider hover:bg-ball-light transition-colors"
              >
                EMAIL
              </a>
              <a
                href="https://github.com/Ardeekew13"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-current font-bold tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-current font-bold tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <p>© 2026 RON DERICK QUILICOT</p>
          <p className="font-display text-lg tracking-widest">
BUILT WITH NEXT.JS
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
