import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CredentialStrip from './components/CredentialStrip';
import ProjectsShowcase from './components/ProjectsShowcase';
import EngineeringSection from './components/EngineeringSection';
import ContactSection from './components/ContactSection';
import MascotCompanion from './components/MascotCompanion';
import { ScrollProgressBar } from './components/ScrollReveal';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CredentialStrip />
      <ProjectsShowcase />
      <EngineeringSection />
      <ContactSection />
      <MascotCompanion />
      <ScrollProgressBar />
    </>
  );
}

export default App;
