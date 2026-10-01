'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

const ITEMS = ['home', 'about', 'services', 'experience', 'skills', 'projects', 'contact'];

const CustomNav = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 50);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || open
          ? 'bg-court-light/90 dark:bg-court-dark/90 backdrop-blur-md border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center" aria-label="Back to top">
            <span className="font-display text-3xl tracking-wider leading-none pt-1">
              ARDEE<span className="text-ball">.</span>
            </span>
          </button>

          <div className="hidden md:flex gap-7 items-center">
            {ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className={`relative capitalize text-sm font-medium transition-colors py-1 ${
                  activeSection === item
                    ? 'text-ball'
                    : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-ball transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setOpen((o) => !o)}
              className="p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current my-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pt-4 pb-2 grid gap-1">
            {ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className={`text-left font-display text-3xl tracking-wider py-1 ${
                  activeSection === item ? 'text-ball' : ''
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scroll progress */}
      <div className="absolute left-0 right-0 bottom-0 h-0.5 pointer-events-none overflow-x-clip">
        <div className="h-full bg-ball" style={{ width: `${progress * 100}%` }} />
      </div>
    </nav>
  );
};

function ThemeButton({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default CustomNav;
