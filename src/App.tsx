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
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-color)] flex flex-col font-sans selection:bg-[var(--accent-color)]/25 selection:text-[var(--accent-text)] transition-colors duration-250">
        {/* Top Bar with Brand, Nav Links, Theme Palette Picker & Light/Dark Switcher */}
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
