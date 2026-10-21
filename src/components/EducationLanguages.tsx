import React from 'react';
import { EDUCATION, SPOKEN_LANGUAGES } from '../data/portfolioData';
import { GraduationCap, Languages, Check } from 'lucide-react';

export const EducationLanguages: React.FC = () => {
  return (
    <section className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition-colors"
                >
                  <div className="text-xs font-mono text-sky-400 mb-1">
                    {edu.type}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-zinc-300 mt-1">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <Languages className="h-4 w-4" />
              <span>Communication</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8">
              Languages
            </h2>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-5">
              <p className="text-xs text-zinc-400">
                Effective multilingual communication across regional teams, international clients, and collaborative development environments.
              </p>

              <div className="space-y-4 pt-2">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between border-t border-zinc-800/80 pt-3.5"
                  >
                    <div>
                      <div className="text-sm font-bold text-zinc-100">
                        {lang.language}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {lang.proficiency}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
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
