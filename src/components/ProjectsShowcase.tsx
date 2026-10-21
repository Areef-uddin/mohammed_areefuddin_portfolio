import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import {
  ExternalLink,
  Cloud,
  CheckCircle2,
  X
} from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0A0E17] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Production & Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects & Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Cross-platform engineering spanning full-lifecycle mobile apps, Django backend signaling, and distributed cloud hosting.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1422] p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs group"
            >
              <div>
                {/* Unboxed Metadata Kicker */}
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  <span>{project.category}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
                  {project.subtitle}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Cloud & Deployment Grid */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/70 p-4 mb-6">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-2">
                    <Cloud className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Deployment Topology</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    {project.deployment.frontend && (
                      <div className="border border-slate-200 dark:border-slate-800/80 rounded p-2.5 bg-white dark:bg-slate-900/60">
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Frontend</div>
                        <div className="text-slate-800 dark:text-slate-200 font-medium mt-0.5">{project.deployment.frontend}</div>
                      </div>
                    )}
                    {project.deployment.backend && (
                      <div className="border border-slate-200 dark:border-slate-800/80 rounded p-2.5 bg-white dark:bg-slate-900/60">
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Backend</div>
                        <div className="text-slate-800 dark:text-slate-200 font-medium mt-0.5">{project.deployment.backend}</div>
                      </div>
                    )}
                    {project.deployment.adminPanel && (
                      <div className="border border-slate-200 dark:border-slate-800/80 rounded p-2.5 bg-white dark:bg-slate-900/60">
                        <div className="text-[10px] text-slate-500 uppercase font-mono">Admin Panel</div>
                        <div className="text-slate-800 dark:text-slate-200 font-medium mt-0.5">{project.deployment.adminPanel}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies & Trigger */}
              <div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Explore Architecture & Details</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1524] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#080C14] p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Details */}
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Built by Mohammed Areefuddin
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
