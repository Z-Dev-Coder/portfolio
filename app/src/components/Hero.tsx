import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/zaw_myo_tun.jpg'; // ensure we have the portrait file

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 bg-[#0B0D12] text-[#F5F7FA]">
      <div className="max-w-lg space-y-6">
        <p className="text-sm uppercase tracking-wider text-[#A1A8B5]">SOFTWARE DEVELOPER / APPLIED AI ENGINEERING</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building Software.<br />Exploring Intelligence.
        </h1>
        <p className="text-base text-[#A1A8B5] max-w-md">
          I’m Zaw Myo Tun, a developer focused on Python backend engineering and practical AI applications.
          I build robust APIs, intelligent systems, and tools that solve real problems.
        </p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="inline-flex items-center px-5 py-2 bg-[#8B9CFF] text-[#0B0D12] rounded-md hover:bg-[#6D7CFF] transition-colors">
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a href="/Zaw_Myo_Tun_Portfolio.docx" download className="inline-flex items-center px-5 py-2 border border-[#8B9CFF] text-[#8B9CFF] rounded-md hover:bg-[#8B9CFF]/10 transition-colors">
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img src={profileImg} alt="Zaw Myo Tun portrait" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border border-[#6D7CFF]/30" />
      </div>
    </section>
  );
};

export default Hero;
