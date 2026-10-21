import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-zinc-100 hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a
            href="#experience"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#architecture"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-sky-400 active:bg-sky-600 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-sky-500/20"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-zinc-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean single-line links, non-intrusive) */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-zinc-300">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400"
            >
              Skills
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400"
            >
              Architecture
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-sky-400"
            >
              Contact
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 py-1 text-sky-400 hover:underline"
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
