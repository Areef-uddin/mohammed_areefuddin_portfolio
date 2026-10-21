import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Printer,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Github
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-sky-400" />
            <div>
              <h3 className="text-base font-bold text-zinc-100">
                Mohammed Areefuddin — Resume
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Areefuddin_Resume_Updated_0f8c589f.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'pdf' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'text' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Text View
              </button>
            </div>

            {/* Download Button */}
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Mohammed_Areefuddin_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              title="Print Resume"
            >
              <Printer className="h-4 w-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-zinc-950">
          {activeTab === 'pdf' ? (
            <div className="w-full h-full min-h-[500px] flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.resumePdfUrl}#view=FitH`}
                title="Mohammed Areefuddin Resume PDF"
                className="w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-900"
              />
              <div className="mt-3 text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
                <span>If the embedded PDF does not load in your browser,</span>
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>open directly</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span>or switch to text view.</span>
              </div>
            </div>
          ) : (
            /* Structured Text View (Exact OCR from official resume) */
            <div className="max-w-2xl mx-auto bg-zinc-900 rounded-xl border border-zinc-800 p-6 sm:p-8 text-zinc-200 space-y-6">
              {/* Header */}
              <div className="border-b border-zinc-800 pb-5">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
                  {PERSONAL_INFO.name.toUpperCase()}
                </h1>
                <div className="text-sm font-semibold text-sky-400 mt-0.5">
                  {PERSONAL_INFO.title}
                </div>
                <div className="text-xs text-zinc-400 mt-2 space-y-1">
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
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-2 text-xs text-zinc-300">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.category}>
                      <span className="font-semibold text-zinc-200">{cat.category}: </span>
                      <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Experience
                </h2>
                <div className="space-y-4">
                  {WORK_EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="border-t border-zinc-800/80 pt-3">
                      <div className="flex justify-between items-baseline text-xs font-semibold text-zinc-100">
                        <span>{exp.role} — {exp.company}</span>
                        <span className="font-mono text-zinc-400">{exp.period}</span>
                      </div>
                      {exp.projectContext && (
                        <div className="text-[11px] text-sky-400 font-medium mt-0.5">
                          {exp.projectContext}
                        </div>
                      )}
                      <ul className="mt-2 space-y-1 text-xs text-zinc-400">
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
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Projects
                </h2>
                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="border-t border-zinc-800/80 pt-3">
                      <div className="flex justify-between items-baseline text-xs font-semibold text-zinc-100">
                        <span>{proj.title}</span>
                        <span className="font-mono text-zinc-400">{proj.category}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                        {proj.technologies.join(' · ')}
                      </div>
                      <ul className="mt-2 space-y-1 text-xs text-zinc-400">
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
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Education
                </h2>
                <div className="space-y-3 text-xs">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="border-t border-zinc-800/80 pt-2">
                      <div className="font-semibold text-zinc-200">{edu.degree}</div>
                      <div className="text-zinc-400">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-zinc-800 bg-zinc-900 text-xs text-zinc-400">
          <span>Mohammed Areefuddin · Verified Resume</span>
          <button
            onClick={handleCopyLink}
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            {copied ? 'Link Copied!' : 'Copy Direct PDF Link'}
          </button>
        </div>

      </div>
    </div>
  );
};
