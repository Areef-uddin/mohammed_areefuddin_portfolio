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
  Terminal,
  Network
} from 'lucide-react';

export const DynamicSkillsVisualizer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'architecture' | 'code'>('cards');

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === activeCategory);

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Languages & Frameworks':
        return <Code2 className="h-4 w-4 text-sky-400" />;
      case 'Mobile & UI Development':
        return <Smartphone className="h-4 w-4 text-emerald-400" />;
      case 'Backend & APIs':
        return <Server className="h-4 w-4 text-indigo-400" />;
      case 'AI & Integrations':
        return <Sparkles className="h-4 w-4 text-amber-400" />;
      case 'Deployment & Tools':
        return <Cloud className="h-4 w-4 text-cyan-400" />;
      default:
        return <Code2 className="h-4 w-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Dynamic Skill Visualizations
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Cross-platform mobile development, backend services, real-time protocols, and AI API integrations.
            </p>
          </div>

          {/* View Mode Toggle (Segmented control) */}
          <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                viewMode === 'cards'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Skill Matrix</span>
            </button>
            <button
              onClick={() => setViewMode('architecture')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                viewMode === 'architecture'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Network className="h-3.5 w-3.5" />
              <span>Architecture Map</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                viewMode === 'code'
                  ? 'bg-zinc-800 text-zinc-100 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Flutter Snippets</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Cards & Competency Matrix */}
        {viewMode === 'cards' && (
          <div>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-zinc-800/60">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-sky-500 text-zinc-950 font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                All Skills
              </button>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    activeCategory === cat.category
                      ? 'bg-sky-500 text-zinc-950 font-semibold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {getCategoryIcon(cat.category)}
                  <span>{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Grid of Categories and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCategories.map((cat) => (
                  <motion.div
                    key={cat.category}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoryIcon(cat.category)}
                        <h3 className="text-sm font-bold text-zinc-100">{cat.category}</h3>
                      </div>
                      <p className="text-xs text-zinc-400 mb-4">{cat.description}</p>

                      {/* Skill items */}
                      <div className="space-y-3.5">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="border-t border-zinc-800/60 pt-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-zinc-200 flex items-center gap-1.5">
                                {skill.name}
                              </span>
                              {/* Metadata rendered as clean unboxed text (anti-slop rule) */}
                              <span className="text-[11px] font-mono text-zinc-400">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-normal">
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
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8">
            <div className="max-w-2xl mb-8">
              <h3 className="text-lg font-bold text-zinc-100 mb-2">
                Unified Cross-Platform & Backend Architecture
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Visualizing how Mohammed coordinates Flutter across client platforms, real-time WebSockets, Django REST backend, and cloud hosting tiers.
              </p>
            </div>

            {/* Architecture Node Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Node 1: Client Tier */}
              <div className="rounded-lg border border-sky-500/30 bg-sky-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">Layer 01</div>
                <div className="text-sm font-bold text-zinc-100 mb-2">Flutter Client Layer</div>
                <div className="text-xs text-zinc-300 space-y-1.5 flex-1">
                  <div>· Dart Null-Safe Codebase</div>
                  <div>· Android & iOS native targets</div>
                  <div>· Flutter Web for Admin & Previews</div>
                  <div>· Responsive Custom Widgets</div>
                </div>
                <div className="mt-3 pt-2 border-t border-sky-500/20 text-[11px] text-sky-300 font-mono">
                  Target: Mobile & Web
                </div>
              </div>

              {/* Node 2: Network & Signaling */}
              <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">Layer 02</div>
                <div className="text-sm font-bold text-zinc-100 mb-2">Transport & Real-Time</div>
                <div className="text-xs text-zinc-300 space-y-1.5 flex-1">
                  <div>· WebSockets for Room Signaling</div>
                  <div>· RESTful Endpoints (JSON)</div>
                  <div>· Firebase SDK Sync</div>
                  <div>· Low-latency Event Streams</div>
                </div>
                <div className="mt-3 pt-2 border-t border-indigo-500/20 text-[11px] text-indigo-300 font-mono">
                  Protocols: WSS / HTTPS
                </div>
              </div>

              {/* Node 3: Backend & AI */}
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Layer 03</div>
                <div className="text-sm font-bold text-zinc-100 mb-2">Django Backend & AI</div>
                <div className="text-xs text-zinc-300 space-y-1.5 flex-1">
                  <div>· Python Django REST Framework</div>
                  <div>· Room State & Session Control</div>
                  <div>· Gemini API Integration</div>
                  <div>· AI Video Transcripts & Summary</div>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-500/20 text-[11px] text-emerald-300 font-mono">
                  Engine: Python + Gemini
                </div>
              </div>

              {/* Node 4: Infrastructure */}
              <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Layer 04</div>
                <div className="text-sm font-bold text-zinc-100 mb-2">Cloud & Deployment</div>
                <div className="text-xs text-zinc-300 space-y-1.5 flex-1">
                  <div>· Firebase Hosting (Frontend)</div>
                  <div>· Render (Django Backend)</div>
                  <div>· Vercel (Admin Operations)</div>
                  <div>· GitHub CI/CD Workflows</div>
                </div>
                <div className="mt-3 pt-2 border-t border-cyan-500/20 text-[11px] text-cyan-300 font-mono">
                  Live Production
                </div>
              </div>
            </div>

            {/* Resume alignment guarantee note */}
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                Derived from Mohammed&apos;s real production work on Zivbit at Starforce LLC and his AI Video Conferencing deployment.
              </span>
            </div>
          </div>
        )}

        {/* View Mode 3: Flutter Idiomatic Code Inspector */}
        {viewMode === 'code' && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden font-mono text-xs">
            {/* Code Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-zinc-400 ml-2 font-sans text-xs">
                  lib/widgets/video_conference_controller.dart
                </span>
              </div>
              <span className="text-zinc-400 font-sans text-xs">Flutter · Dart 3</span>
            </div>

            {/* Code Content */}
            <pre className="p-6 text-zinc-300 overflow-x-auto leading-relaxed">
{`import 'package:flutter/material.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:google_generative_ai/google_generative_ai.dart';

/// Architecture pattern developed by Mohammed Areefuddin
/// Connecting Flutter client to Django Render backend & Gemini AI
class AIConferenceController extends ChangeNotifier {
  late final WebSocketChannel _channel;
  bool _isMeetingActive = true;
  String _geminiLiveSummary = '';

  AIConferenceController({required String roomId}) {
    // Connect to Django WebSocket signaling server hosted on Render
    _channel = WebSocketChannel.connect(
      Uri.parse('wss://ai-meet-backend.onrender.com/ws/room/$roomId/'),
    );
    _listenToSignaling();
  }

  void _listenToSignaling() {
    _channel.stream.listen((message) {
      // Parse real-time participant events & stream state
      notifyListeners();
    });
  }

  Future<void> requestGeminiMeetingSummary(String transcript) async {
    final model = GenerativeModel(
      model: 'gemini-1.5-flash',
      apiKey: const String.fromEnvironment('GEMINI_KEY'),
    );
    final response = await model.generateContent([
      Content.text('Summarize this video meeting with actionable items: $transcript')
    ]);
    _geminiLiveSummary = response.text ?? '';
    notifyListeners();
  }
}`}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
