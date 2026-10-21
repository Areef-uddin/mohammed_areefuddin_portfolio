import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Printer
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + PERSONAL_INFO.resumePdfUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-color)] text-[var(--accent-text)]">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-color)]">
                Mohammed Areefuddin — Resume
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                Areefuddin_Resume_Updated_0f8c589f.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  activeTab === 'pdf'
                    ? 'bg-[var(--accent-color)] text-white font-medium shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  activeTab === 'text'
                    ? 'bg-[var(--accent-color)] text-white font-medium shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
                }`}
              >
                Text View
              </button>
            </div>

            {/* Download Button */}
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Mohammed_Areefuddin_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white text-xs font-semibold transition-all shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--bg-surface)] transition-colors"
              title="Print Resume"
            >
              <Printer className="h-4 w-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--bg-surface)] transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[var(--bg-canvas)]">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full min-h-[500px] flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.resumePdfUrl}#view=FitH`}
                title="Mohammed Areefuddin Resume PDF"
                className="w-full flex-1 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]"
              />
              <div className="mt-3 text-center text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
                <span>If the embedded PDF does not load in your browser,</span>
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent-text)] hover:underline flex items-center gap-1"
                >
                  <span>open directly</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span>or switch to text view.</span>
              </div>
            </div>
          ) : (
            /* Structured Text View (Exact OCR from official resume) */
            <div className="max-w-2xl mx-auto bg-[var(--bg-surface)] rounded-xl border border-[var(--border-color)] p-6 sm:p-8 text-[var(--text-color)] space-y-6 shadow-sm">
              {/* Header */}
              <div className="border-b border-[var(--border-color)] pb-5">
                <h1 className="text-2xl font-bold tracking-tight text-[var(--text-color)]">
                  {PERSONAL_INFO.name.toUpperCase()}
                </h1>
                <div className="text-sm font-semibold text-[var(--accent-text)] mt-0.5">
                  {PERSONAL_INFO.title}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-2 space-y-1">
                  <div>{PERSONAL_INFO.location}</div>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono">
                    <span>{PERSONAL_INFO.phone}</span>
                    <span>·</span>
                    <span>{PERSONAL_INFO.email}</span>
                    <span>·</span>
                    <span>{PERSONAL_INFO.githubHandle}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-2 text-xs text-[var(--text-color)]">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.category}>
                      <span className="font-semibold text-[var(--text-color)]">{cat.category}: </span>
                      <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] mb-3">
                  Experience
                </h2>
                <div className="space-y-4">
                  {WORK_EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="border-t border-[var(--border-color)] pt-3">
                      <div className="flex justify-between items-baseline text-xs font-semibold text-[var(--text-color)]">
                        <span>{exp.role} — {exp.company}</span>
                        <span className="font-mono text-[var(--text-muted)]">{exp.period}</span>
                      </div>
                      {exp.projectContext && (
                        <div className="text-[11px] text-[var(--accent-text)] font-medium mt-0.5">
                          {exp.projectContext}
                        </div>
                      )}
                      <ul className="mt-2 space-y-1 text-xs text-[var(--text-muted)]">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] mb-3">
                  Projects
                </h2>
                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="border-t border-[var(--border-color)] pt-3">
                      <div className="flex justify-between items-baseline text-xs font-semibold text-[var(--text-color)]">
                        <span>{proj.title}</span>
                        <span className="font-mono text-[var(--text-muted)]">{proj.category}</span>
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                        {proj.technologies.join(' · ')}
                      </div>
                      <ul className="mt-2 space-y-1 text-xs text-[var(--text-muted)]">
                        {proj.highlights.map((h, i) => (
                          <li key={i}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)] mb-3">
                  Education
                </h2>
                <div className="space-y-3 text-xs">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="border-t border-[var(--border-color)] pt-2">
                      <div className="font-semibold text-[var(--text-color)]">{edu.degree}</div>
                      <div className="text-[var(--text-muted)]">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--border-color)] bg-[var(--bg-surface-subtle)] text-xs text-[var(--text-muted)]">
          <span>Mohammed Areefuddin · Official Verified Resume</span>
          <button
            onClick={handleCopyLink}
            className="text-[var(--accent-text)] hover:underline transition-colors"
          >
            {copied ? 'Link Copied!' : 'Copy Direct PDF Link'}
          </button>
        </div>

      </div>
    </div>
  );
};
