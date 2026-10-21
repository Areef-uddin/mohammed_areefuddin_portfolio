import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div>
          <div className="text-sm font-bold text-zinc-100">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs text-zinc-400 mt-1">
            Flutter Developer · Cross-Platform Android, iOS & Web
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Email</span>
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>

      </div>
    </footer>
  );
};
