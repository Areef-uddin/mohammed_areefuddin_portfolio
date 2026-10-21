import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme, THEME_OPTIONS, ColorPalette } from '../context/ThemeContext';
import { FileText, Menu, X, Sun, Moon, Palette, Check, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [palettePickerOpen, setPalettePickerOpen] = useState(false);
  const { isDark, toggleMode, colorPalette, setColorPalette } = useTheme();
  const paletteRef = useRef<HTMLDivElement>(null);

  // Close palette dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPalettePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-canvas)]/90 backdrop-blur-md transition-colors duration-250">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight text-[var(--text-color)] hover:text-[var(--accent-text)] transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-7 h-7 rounded-lg bg-[var(--accent-color)] text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm shadow-[var(--accent-color)]/25">
            MA
          </div>
          <span>{PERSONAL_INFO.name.toUpperCase()}</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
          <a
            href="#experience"
            className="hover:text-[var(--text-color)] transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--text-color)] transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-[var(--text-color)] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#architecture"
            className="hover:text-[var(--text-color)] transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--text-color)] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Color Palette Picker + Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Color Palette Switcher Dropdown */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setPalettePickerOpen(!palettePickerOpen)}
              className="flex items-center gap-1.5 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-color)] hover:border-[var(--border-strong)] transition-all text-xs font-medium"
              title="Change Color Palette"
              aria-label="Color Themes"
            >
              <Palette className="h-4 w-4 text-[var(--accent-text)]" />
              <span className="hidden sm:inline">Theme</span>
            </button>

            {palettePickerOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1.5 text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-color)] mb-1">
                  Choose Color Palette
                </div>
                <div className="space-y-1">
                  {THEME_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setColorPalette(opt.id);
                        setPalettePickerOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                        colorPalette === opt.id
                          ? 'bg-[var(--accent-subtle)] text-[var(--text-color)] font-semibold'
                          : 'text-[var(--text-muted)] hover:bg-[var(--bg-surface-subtle)] hover:text-[var(--text-color)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                          style={{ backgroundColor: opt.dotColor }}
                        />
                        <span>{opt.name}</span>
                      </div>
                      {colorPalette === opt.id && (
                        <Check className="h-3.5 w-3.5 text-[var(--accent-text)]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleMode}
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-color)] hover:border-[var(--border-strong)] transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark/light mode"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>

          {/* Primary Action: Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 text-xs font-semibold transition-all shadow-sm shadow-[var(--accent-color)]/20 whitespace-nowrap shrink-0"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-color)] md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[var(--text-color)]">
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Skills
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Architecture
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Contact
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 py-1 text-[var(--accent-text)] hover:underline"
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
