import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredentialStrip from './components/CredentialStrip';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Expertise from './components/Expertise';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MascotCompanion } from './components/MascotCompanion';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for clean navigation indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'expertise', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080A0A] text-[#F2F4EF] selection:bg-[#B8F36B] selection:text-[#080A0A]">
      {/* Top minimal sticky navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main content flow */}
      <main>
        <Hero />
        <CredentialStrip />
        <About />
        <FeaturedProjects />
        <Expertise />
        <ExperienceTimeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Redesigned minimal AI Guide */}
      <MascotCompanion />
    </div>
  );
}
