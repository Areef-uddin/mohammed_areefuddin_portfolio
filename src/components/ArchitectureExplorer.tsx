import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Cpu,
  Database,
  Globe,
  Radio,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ArchitectureTier {
  id: string;
  name: string;
  badge: string;
  role: string;
  technologies: string[];
  principles: string[];
  resumeProof: string;
}

export const ArchitectureExplorer: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('flutter-client');

  const tiers: ArchitectureTier[] = [
    {
      id: 'flutter-client',
      name: 'Cross-Platform Client Tier',
      badge: 'Flutter & Dart',
      role: 'Unified rendering across Android, iOS, and Web',
      technologies: ['Flutter SDK', 'Dart 3 Null-Safety', 'Custom Widgets', 'Figma-to-Code'],
      principles: [
        'Single codebase compiling natively to Android (APK/AAB), iOS (IPA), and Web',
        'Stateful/Stateless widget tree hierarchy engineered to eliminate unnecessary repaints',
        'Responsive layout scaling using LayoutBuilder, constraints, and adaptive safe-area boundaries',
        'Figma design translation directly to pixel-perfect Flutter widget compositions'
      ],
      resumeProof: 'Built Zivbit partner app at Starforce LLC and UI screens at Zerlak & Innoit Labs'
    },
    {
      id: 'backend-services',
      name: 'Backend & Real-Time Tier',
      badge: 'Django & WebSockets',
      role: 'Room signaling, authentication, and RESTful pipelines',
      technologies: ['Python', 'Django', 'Django REST Framework', 'WebSockets'],
      principles: [
        'Full-duplex WebSocket channels enabling instant peer-to-peer room state synchronization',
        'Structured REST APIs with serialization and clean HTTP status code contracts',
        'Multi-session management for meeting coordination and partner service operations',
        'Decoupled architecture allowing independent client and backend deployments'
      ],
      resumeProof: 'Engineered Django backend for AI Video Conferencing project with Render deployment'
    },
    {
      id: 'cloud-devops',
      name: 'Distributed Cloud Hosting',
      badge: 'Firebase · Render · Vercel',
      role: 'Multi-cloud strategy matching workloads to optimal platforms',
      technologies: ['Firebase Hosting', 'Render', 'Vercel', 'Git & GitHub'],
      principles: [
        'Firebase Hosting for edge delivery of frontend assets and fast initial load',
        'Render cloud platform running containerized Python/Django backend processes',
        'Vercel hosting high-availability administrative and monitoring interfaces',
        'Version control branching discipline via Git and GitHub for team collaboration'
      ],
      resumeProof: 'Official deployment topology on Mohammed Areefuddin resume: Render, Firebase, Vercel'
    },
    {
      id: 'ai-integration',
      name: 'AI Intelligence Tier',
      badge: 'Gemini API',
      role: 'Generative intelligence and workflow automation',
      technologies: ['Gemini API', 'AI Video Conferencing', 'AI Content Generation'],
      principles: [
        'Direct Gemini API integration for automated meeting transcript insights & summaries',
        'AI-assisted workflows for social media and promotional video generation for Zivbit platform',
        'Context-aware prompt structuring for consistent structured data outputs'
      ],
      resumeProof: 'Supported AI-assisted marketing media for Zivbit and AI-based video conferencing app'
    }
  ];

  const activeTier = tiers.find((t) => t.id === selectedTierId) || tiers[0];

  return (
    <section id="architecture" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            System Design & Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Full-Stack Flutter Architecture
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            A production-proven, modular architecture connecting cross-platform mobile clients with Django services, real-time protocols, and Gemini AI.
          </p>
        </div>

        {/* Tier Selector & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Tier Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {tiers.map((tier, index) => {
              const isSelected = tier.id === selectedTierId;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'border-sky-500/80 bg-sky-950/20 text-zinc-100 shadow-sm shadow-sky-500/10'
                      : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 mb-0.5">
                      0{index + 1}. {tier.badge}
                    </div>
                    <div className="text-sm font-bold text-zinc-100 group-hover:text-sky-300 transition-colors">
                      {tier.name}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {tier.role}
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Architecture Breakdown Panel */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4 mb-6">
                  <div>
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                      {activeTier.badge}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">
                      {activeTier.name}
                    </h3>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Production Validated
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {activeTier.role}
                </p>

                {/* Engineering Principles */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Key Architectural Principles
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {activeTier.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List (Unboxed tags) */}
                <div className="mb-6 pt-4 border-t border-zinc-800/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Technologies & Protocols
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-300">
                    {activeTier.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-zinc-200">{tech}</span>
                        {i < activeTier.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-zinc-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Resume proof badge */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-3.5 flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-300">
                    <span className="font-semibold text-zinc-100">Resume Proof: </span>
                    {activeTier.resumeProof}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
