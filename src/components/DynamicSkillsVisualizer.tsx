import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Smartphone,
  Server,
  Sparkles,
  Cloud,
  CheckCircle,
  Network,
  Search
} from 'lucide-react';

export const DynamicSkillsVisualizer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'architecture'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter skills by category and search query
  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const isCategoryMatch = activeCategory === 'all' || cat.category === activeCategory;
    if (!isCategoryMatch) return null;

    if (!searchQuery.trim()) {
      return cat;
    }

    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.experienceNote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Languages & Frameworks':
        return <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
      case 'Mobile & UI Development':
        return <Smartphone className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Backend & APIs':
        return <Server className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
      case 'AI & Integrations':
        return <Sparkles className="h-4 w-4 text-amber-500 dark:text-amber-400" />;
      case 'Deployment & Tools':
        return <Cloud className="h-4 w-4 text-sky-600 dark:text-sky-400" />;
      default:
        return <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0A0E17] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Engineering Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Dynamic Skill Visualizations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Cross-platform mobile application development, Django backend infrastructure, real-time protocols, and Gemini AI.
            </p>
          </div>

          {/* View Mode Toggle (Segmented control: Skill Matrix / Architecture Map) */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'cards'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Code2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Skill Matrix</span>
            </button>
            <button
              onClick={() => setViewMode('architecture')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                viewMode === 'architecture'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Network className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Architecture Map</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Cards & Competency Matrix */}
        {viewMode === 'cards' && (
          <div>
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800/60">
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  All Skills
                </button>
                {SKILL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      activeCategory === cat.category
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {getCategoryIcon(cat.category)}
                    <span>{cat.category}</span>
                  </button>
                ))}
              </div>

              {/* Real-time search filter */}
              <div className="relative min-w-[220px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter skills (e.g. Django, Dart)..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

            </div>

            {/* Grid of Categories and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCategories.map((cat) => (
                  <motion.div
                    key={cat.category}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0E1422] p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoryIcon(cat.category)}
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{cat.description}</p>

                      {/* Skill items */}
                      <div className="space-y-3.5">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="border-t border-slate-200 dark:border-slate-800/60 pt-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-slate-800 dark:text-slate-200">
                                {skill.name}
                              </span>
                              {/* Metadata rendered as clean unboxed text */}
                              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                              {skill.experienceNote}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Architecture Map */}
        {viewMode === 'architecture' && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0E1422] p-6 md:p-8">
            <div className="max-w-2xl mb-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Unified Cross-Platform & Backend Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Visualizing how Mohammed coordinates Flutter across client platforms, real-time WebSockets, Django REST backend, and cloud hosting tiers.
              </p>
            </div>

            {/* Architecture Node Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Node 1: Client Tier */}
              <div className="rounded-xl border border-blue-200 dark:border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Tier 01</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Flutter Client Layer</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 flex-1">
                  <div>· Dart Null-Safe Codebase</div>
                  <div>· Android & iOS native targets</div>
                  <div>· Flutter Web for Admin & Previews</div>
                  <div>· Responsive Custom Widgets</div>
                </div>
                <div className="mt-3 pt-2 border-t border-blue-200 dark:border-blue-500/20 text-[11px] text-blue-600 dark:text-blue-300 font-mono">
                  Target: Mobile & Web
                </div>
              </div>

              {/* Node 2: Network & Signaling */}
              <div className="rounded-xl border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Tier 02</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Transport & Real-Time</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 flex-1">
                  <div>· WebSockets for Room Signaling</div>
                  <div>· RESTful Endpoints (JSON)</div>
                  <div>· Firebase SDK Sync</div>
                  <div>· Low-latency Event Streams</div>
                </div>
                <div className="mt-3 pt-2 border-t border-indigo-200 dark:border-indigo-500/20 text-[11px] text-indigo-600 dark:text-indigo-300 font-mono">
                  Protocols: WSS / HTTPS
                </div>
              </div>

              {/* Node 3: Backend & AI */}
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Tier 03</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Django Backend & AI</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 flex-1">
                  <div>· Python Django REST Framework</div>
                  <div>· Room State & Session Control</div>
                  <div>· Gemini API Integration</div>
                  <div>· AI Video Transcripts & Summary</div>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-200 dark:border-emerald-500/20 text-[11px] text-emerald-600 dark:text-emerald-300 font-mono">
                  Engine: Python + Gemini
                </div>
              </div>

              {/* Node 4: Infrastructure */}
              <div className="rounded-xl border border-sky-200 dark:border-sky-500/30 bg-sky-50/50 dark:bg-sky-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">Tier 04</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Cloud & Deployment</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 flex-1">
                  <div>· Firebase Hosting (Frontend)</div>
                  <div>· Render (Django Backend)</div>
                  <div>· Vercel (Admin Operations)</div>
                  <div>· GitHub CI/CD Workflows</div>
                </div>
                <div className="mt-3 pt-2 border-t border-sky-200 dark:border-sky-500/20 text-[11px] text-sky-600 dark:text-sky-300 font-mono">
                  Live Production
                </div>
              </div>
            </div>

            {/* Resume alignment guarantee note */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                Derived from Mohammed&apos;s real production work on Zivbit at Starforce LLC and his AI Video Conferencing deployment.
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
