import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../data/portfolioData';
import {
  FileText,
  Github,
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Layers,
  Sparkles,
  Server
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const currentRole = WORK_EXPERIENCE.find(w => w.isCurrent) || WORK_EXPERIENCE[0];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="top" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-white dark:bg-[#0A0E17] transition-colors duration-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Split Hero: Clean Typography + Executive Engineering Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>Flutter Developer</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-700 dark:text-slate-300">Cross-Platform Specialist</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-500 dark:text-slate-400">Android / iOS / Web</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5" style={{ textWrap: 'balance' }}>
              Building cross-platform mobile apps with Flutter, Django & AI.
            </h1>

            {/* Lead Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-500 active:bg-blue-700 transition-all shadow-md shadow-blue-600/25 whitespace-nowrap shrink-0"
              >
                <FileText className="h-4 w-4" />
                <span>View Resume (PDF)</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                <span>Featured Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all whitespace-nowrap shrink-0"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Unboxed Metadata Contact Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-5">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Zaheerabad, Telangana, India</span>
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Engineering Profile & Production Overview */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0E1422] p-6 sm:p-7 shadow-lg shadow-slate-200/50 dark:shadow-black/40">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm shadow-blue-500/20">
                    MA
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Flutter & Full-Stack Developer
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 rounded px-2 py-0.5 font-medium">
                    Active
                  </div>
                </div>
              </div>

              {/* Current Commercial Production Work */}
              <div className="py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Current Production Work</span>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-3.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{currentRole.company}</span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{currentRole.period}</span>
                  </div>
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    {currentRole.projectContext}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-normal">
                    Built the Zivbit partner app in Flutter, resolved critical partner app & admin panel issues, and contributed AI-assisted promotional media workflows.
                  </p>
                </div>
              </div>

              {/* Verified Capabilities Grid */}
              <div className="py-4 space-y-2.5">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Production Competencies</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Mobile Frontend</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Flutter & Dart</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Android, iOS & Web</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Backend API</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Python & Django</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">REST & WebSockets</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Cloud Hosting</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Multi-Cloud</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Firebase · Render · Vercel</div>
                  </div>

                  <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">AI Intelligence</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">Gemini API</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Smart Video & Media</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copied === 'email' ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied === 'email' ? 'Email Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`https://wa.me/917386872991?text=${encodeURIComponent('Hi Mohammed, saw your Flutter developer portfolio!')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                >
                  Chat on WhatsApp →
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Proof row below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/30">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">Target Platforms</div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Android · iOS · Web</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Single Dart codebase</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/30">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">Verified Experience</div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Starforce · Zerlak · Innoit</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Production apps & admin tools</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/30">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">Backend & Protocols</div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Django & WebSockets</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time room signaling & REST</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/70 bg-slate-50/60 dark:bg-slate-900/30">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">Cloud Topology</div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Firebase · Render · Vercel</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Gemini AI integration</div>
          </div>
        </div>

      </div>
    </section>
  );
};
