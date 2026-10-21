import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { DynamicSkillsVisualizer } from './components/DynamicSkillsVisualizer';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationLanguages } from './components/EducationLanguages';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <ProjectsShowcase />
        <DynamicSkillsVisualizer />
        <ArchitectureExplorer />
        <ExperienceTimeline />
        <EducationLanguages />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Resume Modal with embedded official PDF */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
