import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-canvas)] transition-colors duration-250">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-2">
            Professional History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-color)]">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2">
            Track record building production Flutter applications, integrating real-time backends, and translating designs into responsive mobile screens.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 md:p-8 hover:border-[var(--border-strong)] transition-colors shadow-xs"
            >
              {/* Top metadata strip: Title, Company, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-[var(--accent-text)] shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-color)]">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-color)]">
                    {exp.company}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--text-color)]">
                    <Calendar className="h-3.5 w-3.5 text-[var(--accent-text)]" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  {exp.isCurrent && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[var(--accent-text)] font-sans font-semibold">Present Role</span>
                    </>
                  )}
                </div>
              </div>

              {/* Project context kicker */}
              {exp.projectContext && (
                <div className="mb-4 text-xs font-semibold text-[var(--accent-text)] tracking-wide">
                  {exp.projectContext}
                </div>
              )}

              {/* Bullet highlights from resume */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[var(--text-color)]">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[var(--text-muted)]">
                <span className="text-[var(--text-muted)] font-medium">Core Stack:</span>
                {exp.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-[var(--text-color)]">{tech}</span>
                    {idx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
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
