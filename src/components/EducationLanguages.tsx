import React from 'react';
import { EDUCATION, SPOKEN_LANGUAGES } from '../data/portfolioData';
import { GraduationCap, Languages, Check } from 'lucide-react';

export const EducationLanguages: React.FC = () => {
  return (
    <section className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-canvas)] transition-colors duration-250">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-2">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-color)] mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 hover:border-[var(--border-strong)] transition-colors shadow-xs"
                >
                  <div className="text-xs font-mono text-[var(--accent-text)] mb-1">
                    {edu.type}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-color)]">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[var(--text-color)] mt-1">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-2">
              <Languages className="h-4 w-4" />
              <span>Communication</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-color)] mb-8">
              Languages
            </h2>

            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-5 shadow-xs">
              <p className="text-xs text-[var(--text-muted)]">
                Effective multilingual communication across regional teams, international clients, and collaborative development environments.
              </p>

              <div className="space-y-4 pt-2">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between border-t border-[var(--border-color)] pt-3.5"
                  >
                    <div>
                      <div className="text-sm font-bold text-[var(--text-color)]">
                        {lang.language}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">
                        {lang.proficiency}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--accent-text)] font-semibold">
                      <Check className="h-3.5 w-3.5" />
                      <span>Fluent</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
