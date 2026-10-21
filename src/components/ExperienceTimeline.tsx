import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Professional History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Hands-on track record building production Flutter applications, integrating real-time backends, and translating designs into responsive mobile screens.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-6 md:p-8 hover:border-zinc-700 transition-colors"
            >
              {/* Top metadata strip: Title, Company, Period, Location (Unboxed text with typographic separators) */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-sky-400 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm sm:text-base font-medium text-zinc-300">
                    {exp.company}
                  </div>
                </div>

                {/* Date & Location (Clean unboxed text, no pills) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  {exp.isCurrent && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-sans font-medium">Present Role</span>
                    </>
                  )}
                </div>
              </div>

              {/* Project context kicker if available */}
              {exp.projectContext && (
                <div className="mb-4 text-xs font-semibold text-sky-400 tracking-wide">
                  {exp.projectContext}
                </div>
              )}

              {/* Bullet highlights from resume */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used (Unboxed text with dots) */}
              <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-400">
                <span className="text-zinc-500 font-medium">Core Stack:</span>
                {exp.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-zinc-300">{tech}</span>
                    {idx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
