import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../data/portfolioData';
import {
  FileText,
  Github,
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  Copy,
  Check,
  Building2,
  Layers
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const currentRole = WORK_EXPERIENCE.find((w) => w.isCurrent) || WORK_EXPERIENCE[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="top" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[var(--border-color)] overflow-hidden bg-[var(--bg-canvas)] transition-colors duration-250">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--accent-color)]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-[var(--accent-color)]/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Split Hero: Clean Typography + Executive Production Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--accent-text)] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]" />
              <span>Flutter Developer</span>
              <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
              <span className="text-[var(--text-color)]">Cross-Platform Specialist</span>
              <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
              <span className="text-[var(--text-muted)]">Android / iOS / Web</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-color)] leading-[1.15] mb-5" style={{ textWrap: 'balance' }}>
              Building cross-platform mobile apps with Flutter, Django & AI.
            </h1>

            {/* Lead Summary */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[var(--accent-color)]/25 whitespace-nowrap shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>View Resume (PDF)</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-5 py-2.5 text-xs sm:text-sm font-medium text-[var(--text-color)] hover:border-[var(--border-strong)] transition-all whitespace-nowrap shrink-0"
              >
                <span>Featured Projects</span>
                <ArrowRight className="h-4 w-4 text-[var(--accent-text)]" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--text-color)] hover:border-[var(--border-strong)] transition-all whitespace-nowrap shrink-0"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Unboxed Metadata Contact Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-5">
              <span className="flex items-center gap-1.5 text-[var(--text-color)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent-text)] shrink-0" />
                <span>Zaheerabad, Telangana, India</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent-text)] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent-text)] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Production Overview */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-xl shadow-black/10">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center font-bold text-base shadow-sm shadow-[var(--accent-color)]/25">
                    MA
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[var(--text-color)]">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-[var(--accent-text)] font-semibold">
                      Flutter & Full-Stack Developer
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-[var(--accent-text)] bg-[var(--accent-subtle)] border border-[var(--border-color)] rounded px-2.5 py-0.5 font-semibold">
                    Production Ready
                  </div>
                </div>
              </div>

              {/* Current Commercial Production Work */}
              <div className="py-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-color)] mb-2">
                  <Building2 className="h-4 w-4 text-[var(--accent-text)]" />
                  <span>Current Production Work</span>
                </div>
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] p-3.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[var(--text-color)]">{currentRole.company}</span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">{currentRole.period}</span>
                  </div>
                  <div className="text-[11px] text-[var(--accent-text)] font-semibold mt-0.5">
                    {currentRole.projectContext}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2 leading-normal">
                    Built the Zivbit partner app in Flutter, resolved critical partner app & admin panel issues, and contributed AI-assisted promotional media workflows.
                  </p>
                </div>
              </div>

              {/* Verified Capabilities Grid */}
              <div className="py-4 space-y-2.5">
                <div className="text-xs font-semibold text-[var(--text-color)] mb-2 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[var(--accent-text)]" />
                  <span>Production Competencies</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Mobile Frontend</div>
                    <div className="font-semibold text-[var(--text-color)] mt-0.5">Flutter & Dart</div>
                    <div className="text-[10px] text-[var(--text-muted)]">Android, iOS & Web</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Backend API</div>
                    <div className="font-semibold text-[var(--text-color)] mt-0.5">Python & Django</div>
                    <div className="text-[10px] text-[var(--text-muted)]">REST & WebSockets</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">Cloud Hosting</div>
                    <div className="font-semibold text-[var(--text-color)] mt-0.5">Multi-Cloud</div>
                    <div className="text-[10px] text-[var(--text-muted)]">Firebase · Render · Vercel</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)]">
                    <div className="text-[10px] text-[var(--text-muted)] uppercase font-mono">AI Intelligence</div>
                    <div className="font-semibold text-[var(--text-color)] mt-0.5">Gemini API</div>
                    <div className="text-[10px] text-[var(--text-muted)]">Smart Video & Media</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                >
                  {copied === 'email' ? <Check className="h-3.5 w-3.5 text-[var(--accent-text)]" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied === 'email' ? 'Email Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`https://wa.me/917386872991?text=${encodeURIComponent('Hi Mohammed, saw your Flutter developer portfolio!')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent-text)] hover:underline font-semibold"
                >
                  Chat on WhatsApp →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Proof row below hero split */}
        <div className="mt-14 pt-8 border-t border-[var(--border-color)] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] mb-1">Target Platforms</div>
            <div className="text-base sm:text-lg font-bold text-[var(--text-color)]">Android · iOS · Web</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Single Dart codebase</div>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] mb-1">Verified Experience</div>
            <div className="text-base sm:text-lg font-bold text-[var(--text-color)]">Starforce · Zerlak · Innoit</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Production apps & admin tools</div>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] mb-1">Backend & Protocols</div>
            <div className="text-base sm:text-lg font-bold text-[var(--text-color)]">Django & WebSockets</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Real-time room signaling & REST</div>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] mb-1">Cloud Topology</div>
            <div className="text-base sm:text-lg font-bold text-[var(--text-color)]">Firebase · Render · Vercel</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">Gemini AI integration</div>
          </div>
        </div>

      </div>
    </section>
  );
};
