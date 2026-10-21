import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import {
  FileText,
  Github,
  Mail,
  Phone,
  ArrowRight,
  Video,
  Layers,
  Sparkles,
  Wifi,
  Battery,
  CheckCircle2,
  MapPin
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [deviceTab, setDeviceTab] = useState<'zivbit' | 'video' | 'widgets'>('zivbit');
  const [micActive, setMicActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);
  const [jobStatus, setJobStatus] = useState<'pending' | 'in-progress' | 'completed'>('in-progress');

  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-800/60 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-4">
              <span>Flutter Developer</span>
              <span aria-hidden="true">·</span>
              <span>Android</span>
              <span aria-hidden="true">·</span>
              <span>iOS</span>
              <span aria-hidden="true">·</span>
              <span>Web</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight mb-5" style={{ textWrap: 'balance' }}>
              Building high-performance cross-platform apps with Dart, Django & AI.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-400 active:bg-sky-600 transition-all shadow-md shadow-sky-500/20 whitespace-nowrap shrink-0"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="h-4 w-4 text-sky-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Metadata Contact Bar (Clean unboxed text, no pills) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400 border-t border-zinc-800/80 pt-5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                <span>Zaheerabad, Telangana, India</span>
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Flutter Device Simulator */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="w-full max-w-sm">
              {/* Device Mode Selector (Segmented control) */}
              <div className="flex items-center justify-between p-1 mb-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
                <button
                  onClick={() => setDeviceTab('zivbit')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center whitespace-nowrap ${
                    deviceTab === 'zivbit'
                      ? 'bg-sky-500 text-zinc-950 font-semibold shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Zivbit Partner
                </button>
                <button
                  onClick={() => setDeviceTab('video')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center whitespace-nowrap ${
                    deviceTab === 'video'
                      ? 'bg-sky-500 text-zinc-950 font-semibold shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  AI Video Meet
                </button>
                <button
                  onClick={() => setDeviceTab('widgets')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center whitespace-nowrap ${
                    deviceTab === 'widgets'
                      ? 'bg-sky-500 text-zinc-950 font-semibold shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Widget Tree
                </button>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="relative rounded-3xl border-4 border-zinc-800 bg-zinc-950 p-2 shadow-2xl shadow-sky-950/20">
                {/* Phone Notch & Speaker */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-900 rounded-full flex items-center justify-center gap-2 z-20">
                  <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>

                {/* Device Screen Content */}
                <div className="rounded-2xl bg-zinc-900 border border-zinc-800/80 p-4 pt-6 min-h-[460px] flex flex-col justify-between overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 px-1">
                    <span className="font-mono">09:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="h-3 w-3" />
                      <Battery className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Tab 1: Zivbit Partner App Screen */}
                  {deviceTab === 'zivbit' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <div>
                          <div className="text-xs font-bold text-zinc-100">Zivbit Partner Mobile</div>
                          <div className="text-[10px] text-zinc-400">Starforce Facilities Services</div>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded px-1.5 py-0.5">
                          Active Partner
                        </div>
                      </div>

                      {/* Active Assignment Card */}
                      <div className="rounded-lg border border-zinc-700/80 bg-zinc-800/50 p-3">
                        <div className="text-[10px] uppercase font-semibold text-sky-400 tracking-wide mb-1">
                          Assigned Work Order
                        </div>
                        <div className="text-xs font-bold text-zinc-100">Facility HVAC & Maintenance</div>
                        <div className="text-[11px] text-zinc-400 mt-1">Client: Prestige Towers, Unit 4B</div>
                        
                        {/* Status switcher */}
                        <div className="mt-3 pt-2 border-t border-zinc-700/50 flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400">Status:</span>
                          <div className="flex gap-1 text-[10px]">
                            <button
                              onClick={() => setJobStatus('in-progress')}
                              className={`px-2 py-0.5 rounded ${
                                jobStatus === 'in-progress'
                                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                                  : 'text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              In Progress
                            </button>
                            <button
                              onClick={() => setJobStatus('completed')}
                              className={`px-2 py-0.5 rounded ${
                                jobStatus === 'completed'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              Completed
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Features Highlight */}
                      <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-2.5 text-[11px] text-zinc-300 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                          <span>Built with Flutter cross-platform architecture</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                          <span>Admin panel bi-directional syncing</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                          <span>AI-assisted promotional content integration</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: AI Video Meet Screen */}
                  {deviceTab === 'video' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <div>
                          <div className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                            <Video className="h-3.5 w-3.5 text-sky-400" />
                            <span>AI Meet Room #104</span>
                          </div>
                          <div className="text-[10px] text-zinc-400">Flutter · Django · WebSockets</div>
                        </div>
                        <div className="text-[10px] font-mono text-sky-400">24ms ping</div>
                      </div>

                      {/* Video Stage simulation */}
                      <div className="relative rounded-lg bg-zinc-950 border border-zinc-800 h-28 flex items-center justify-center overflow-hidden">
                        <div className="text-center p-3">
                          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 mx-auto flex items-center justify-center text-xs font-bold text-zinc-200 mb-1">
                            MA
                          </div>
                          <div className="text-[10px] text-zinc-400">Mohammed Areefuddin (Host)</div>
                        </div>

                        {/* Floating AI transcript prompt */}
                        <div className="absolute bottom-2 left-2 right-2 rounded bg-zinc-900/90 border border-zinc-700/80 px-2 py-1 text-[10px] flex items-center gap-1.5 text-zinc-200">
                          <Sparkles className="h-3 w-3 text-amber-400 shrink-0" />
                          <span className="truncate">Gemini: Generating live meeting highlights...</span>
                        </div>
                      </div>

                      {/* Call Controls */}
                      <div className="flex items-center justify-center gap-2 py-1">
                        <button
                          onClick={() => setMicActive(!micActive)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                            micActive ? 'bg-zinc-800 text-zinc-200' : 'bg-red-500/20 text-red-300 border border-red-500/30'
                          }`}
                        >
                          {micActive ? 'Mute' : 'Unmuted'}
                        </button>
                        <button
                          onClick={() => setCameraActive(!cameraActive)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                            cameraActive ? 'bg-zinc-800 text-zinc-200' : 'bg-red-500/20 text-red-300 border border-red-500/30'
                          }`}
                        >
                          {cameraActive ? 'Video On' : 'Video Off'}
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-red-600 text-[11px] font-medium text-white hover:bg-red-500">
                          Leave
                        </button>
                      </div>

                      <div className="text-[10px] text-zinc-400 text-center font-mono">
                        Backend on Render · Frontend on Firebase
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 3: Widget Tree Inspector */}
                  {deviceTab === 'widgets' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col font-mono text-[10px]"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 font-sans">
                        <span className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-sky-400" />
                          <span>Flutter Widget Hierarchy</span>
                        </span>
                        <span className="text-[10px] text-zinc-400">Dart SDK</span>
                      </div>

                      <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80 text-zinc-300 space-y-1 overflow-x-auto">
                        <div className="text-sky-400">▾ MaterialApp</div>
                        <div className="pl-2 text-zinc-400">▾ Scaffold</div>
                        <div className="pl-4 text-emerald-400">▾ AppBar(title: &apos;Zivbit Partner&apos;)</div>
                        <div className="pl-4 text-purple-400">▾ StreamBuilder&lt;JobState&gt;</div>
                        <div className="pl-6 text-zinc-300">▾ CustomScrollView</div>
                        <div className="pl-8 text-sky-300">▾ SliverList</div>
                        <div className="pl-10 text-amber-300">▪ PartnerJobCard()</div>
                        <div className="pl-10 text-amber-300">▪ GeminiSummaryWidget()</div>
                        <div className="pl-4 text-zinc-400">▾ BottomNavigationBar</div>
                      </div>

                      <div className="mt-2 text-[10px] text-zinc-400 font-sans text-center">
                        Zero layout shifts · 60fps responsive rendering
                      </div>
                    </motion.div>
                  )}

                  {/* Bottom Home Indicator */}
                  <div className="w-24 h-1 bg-zinc-700 mx-auto rounded-full mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Proof row below hero split (Section 2/7 of design constitution) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs uppercase font-medium text-zinc-400 mb-1">Cross-Platform UI</div>
            <div className="text-lg font-bold text-zinc-100">Android · iOS · Web</div>
            <div className="text-xs text-zinc-400 mt-0.5">Flutter & Dart widget architecture</div>
          </div>

          <div>
            <div className="text-xs uppercase font-medium text-zinc-400 mb-1">Production Experience</div>
            <div className="text-lg font-bold text-zinc-100">Starforce · Zerlak · Innoit</div>
            <div className="text-xs text-zinc-400 mt-0.5">Partner apps & admin panels</div>
          </div>

          <div>
            <div className="text-xs uppercase font-medium text-zinc-400 mb-1">Backend & Real-Time</div>
            <div className="text-lg font-bold text-zinc-100">Django & WebSockets</div>
            <div className="text-xs text-zinc-400 mt-0.5">REST APIs & live signaling</div>
          </div>

          <div>
            <div className="text-xs uppercase font-medium text-zinc-400 mb-1">Cloud Deployment</div>
            <div className="text-lg font-bold text-zinc-100">Firebase · Render · Vercel</div>
            <div className="text-xs text-zinc-400 mt-0.5">Gemini AI API integrated</div>
          </div>
        </div>

      </div>
    </section>
  );
};
