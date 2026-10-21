import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0A0E17] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Professional History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Track record building production Flutter applications, integrating real-time backends, and translating designs into responsive mobile screens.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1422] p-6 md:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
            >
              {/* Top metadata strip: Title, Company, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  {exp.isCurrent && (
                    <>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-sans font-semibold">Present Role</span>
                    </>
                  )}
                </div>
              </div>

              {/* Project context kicker */}
              {exp.projectContext && (
                <div className="mb-4 text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                  {exp.projectContext}
                </div>
              )}

              {/* Bullet highlights from resume */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="text-slate-400 font-medium">Core Stack:</span>
                {exp.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                    {idx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
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
