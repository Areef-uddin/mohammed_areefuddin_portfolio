import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import {
  Video,
  ExternalLink,
  Layers,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2,
  X
} from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Selected Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Featured Projects & Platforms
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Real cross-platform engineering spanning full-lifecycle client apps, Django backend signaling, and distributed cloud hosting.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group"
            >
              <div>
                {/* Unboxed Metadata Kicker (Anti-slop rule) */}
                <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold mb-2">
                  <span>{project.category}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-300 mb-5">
                  {project.subtitle}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Cloud & Deployment Grid (Specific to Mohammed's verified resume) */}
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 mb-6">
                  <div className="text-xs font-semibold text-zinc-300 mb-2.5 flex items-center gap-2">
                    <Cloud className="h-3.5 w-3.5 text-sky-400" />
                    <span>Deployment Topology</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    {project.deployment.frontend && (
                      <div className="border border-zinc-800 rounded p-2 bg-zinc-900/50">
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">Frontend</div>
                        <div className="text-zinc-200 font-medium mt-0.5">{project.deployment.frontend}</div>
                      </div>
                    )}
                    {project.deployment.backend && (
                      <div className="border border-zinc-800 rounded p-2 bg-zinc-900/50">
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">Backend</div>
                        <div className="text-zinc-200 font-medium mt-0.5">{project.deployment.backend}</div>
                      </div>
                    )}
                    {project.deployment.adminPanel && (
                      <div className="border border-zinc-800 rounded p-2 bg-zinc-900/50">
                        <div className="text-[10px] text-zinc-400 uppercase font-mono">Admin Panel</div>
                        <div className="text-zinc-200 font-medium mt-0.5">{project.deployment.adminPanel}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies & Trigger (Unboxed tags) */}
              <div>
                <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-zinc-300">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-800">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Details */}
              <div className="border-t border-zinc-800 pt-4 flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  Built by Mohammed Areefuddin
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors"
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
