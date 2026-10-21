import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FileText, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0A0E17]/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm shadow-blue-500/30">
            MA
          </div>
          <span>{PERSONAL_INFO.name.toUpperCase()}</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#experience"
            className="hover:text-blue-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#architecture"
            className="hover:text-blue-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Theme Switcher */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>

          {/* Primary Action: Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 active:bg-blue-700 transition-all shadow-sm shadow-blue-600/20 whitespace-nowrap shrink-0"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1422] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Architecture
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 py-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
