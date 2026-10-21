import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0E17] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600/20 selection:text-blue-600 dark:selection:bg-blue-600/30 dark:selection:text-blue-200 transition-colors duration-200">
        {/* Top Bar with Brand, Nav Links & Dark/Light Switcher */}
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
    </ThemeProvider>
  );
}
