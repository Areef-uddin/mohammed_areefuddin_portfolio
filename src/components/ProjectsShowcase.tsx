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
    <section id="projects" className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-canvas)] transition-colors duration-250">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)] mb-2">
            Production & Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-color)]">
            Featured Projects & Platforms
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2">
            Cross-platform engineering spanning full-lifecycle mobile apps, Django backend signaling, and distributed cloud hosting.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-xs group"
            >
              <div>
                {/* Unboxed Metadata Kicker */}
                <div className="flex items-center gap-2 text-xs text-[var(--accent-text)] font-semibold mb-2">
                  <span>{project.category}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-text)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-5">
                  {project.subtitle}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-color)] mb-6">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Cloud & Deployment Grid */}
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] p-4 mb-6">
                  <div className="text-xs font-semibold text-[var(--text-color)] mb-2.5 flex items-center gap-2">
                    <Cloud className="h-3.5 w-3.5 text-[var(--accent-text)]" />
                    <span>Deployment Topology</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    {project.deployment.frontend && (
                      <div className="border border-[var(--border-color)] rounded p-2.5 bg-[var(--bg-surface)]">
                        <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Frontend</div>
                        <div className="text-[var(--text-color)] font-medium mt-0.5">{project.deployment.frontend}</div>
                      </div>
                    )}
                    {project.deployment.backend && (
                      <div className="border border-[var(--border-color)] rounded p-2.5 bg-[var(--bg-surface)]">
                        <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Backend</div>
                        <div className="text-[var(--text-color)] font-medium mt-0.5">{project.deployment.backend}</div>
                      </div>
                    )}
                    {project.deployment.adminPanel && (
                      <div className="border border-[var(--border-color)] rounded p-2.5 bg-[var(--bg-surface)]">
                        <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Admin Panel</div>
                        <div className="text-[var(--text-color)] font-medium mt-0.5">{project.deployment.adminPanel}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies & Trigger */}
              <div>
                <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--text-muted)] mb-4">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-[var(--text-color)]">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-text)] hover:underline transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-color)] hover:bg-[var(--bg-surface-subtle)] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="text-xs font-semibold text-[var(--accent-text)] uppercase tracking-wider mb-2">
                {selectedProject.category}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-[var(--text-color)] leading-relaxed bg-[var(--bg-surface-subtle)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-color)]">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--accent-text)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Details */}
              <div className="border-t border-[var(--border-color)] pt-4 flex items-center justify-between">
                <div className="text-xs text-[var(--text-muted)]">
                  Built by Mohammed Areefuddin
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors"
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
