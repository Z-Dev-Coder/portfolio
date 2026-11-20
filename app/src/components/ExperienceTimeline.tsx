import { useState, useEffect } from 'react';
import { Briefcase, BookOpen, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';
import { EDUCATION } from '../data/education';
import RevealOnScroll from './RevealOnScroll';

export default function ExperienceTimeline() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const expElements = EXPERIENCES.map((exp) =>
        document.getElementById(`exp-${exp.id}`)
      );
      const viewportMid = window.innerHeight * 0.5;

      for (let i = 0; i < expElements.length; i++) {
        const el = expElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            setActiveExpIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 border-b border-white/10 bg-[#080A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
            <span>05/ CAREER TRAJECTORY &amp; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4EF]">
            Experience &amp; Academic Milestones.
          </h2>
          <p className="text-sm text-[#A3AAA3] leading-relaxed">
            Prior professional background in engineering oversight and technology operations, paired with structured computer science qualifications.
          </p>
        </div>

        {/* Two-Column Grid: Left Experience, Right Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* PROFESSIONAL EXPERIENCE COLUMN (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-[#F2F4EF] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#B8F36B]" />
                <span>Professional Experience</span>
              </h3>
              <span className="text-xs font-mono text-[#737D75]">Transferable Rigor</span>
            </div>

            {/* Vertical Animated Timeline Wrapper */}
            <div className="relative space-y-6 sm:pl-8">
              {/* Dynamic Vertical Timeline Track */}
              <div className="absolute top-6 bottom-6 left-2 sm:left-3 w-[2px] bg-white/10 hidden sm:block">
                <div
                  className="w-full bg-[#B8F36B] transition-all duration-500 shadow-[0_0_8px_rgba(184,243,107,0.5)]"
                  style={{
                    height: `${((activeExpIndex + 1) / EXPERIENCES.length) * 100}%`,
                  }}
                />
              </div>

              {EXPERIENCES.map((exp, idx) => {
                const isActive = idx === activeExpIndex;
                const isIsp = exp.id === 'isp-operations';
                return (
                  <RevealOnScroll key={exp.id} delay={idx * 100} direction="up">
                    <div
                      id={`exp-${exp.id}`}
                      onMouseEnter={() => setActiveExpIndex(idx)}
                      className={`surface-card rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-300 relative ${
                        isActive
                          ? 'border-[#B8F36B]/60 shadow-lg shadow-[#B8F36B]/5 bg-[#171C19]'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Timeline Node Dot (Desktop) */}
                      <div
                        className={`absolute -left-8 top-7 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center transition-all ${
                          isActive
                            ? 'border-[#B8F36B] bg-[#080A0A] scale-125'
                            : idx < activeExpIndex
                            ? 'border-[#B8F36B]/60 bg-[#B8F36B]'
                            : 'border-white/20 bg-[#121714]'
                        }`}
                      >
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B]" />}
                      </div>

                      {/* Header with verified exact dates */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${
                                isIsp
                                  ? 'bg-[#B8F36B]/20 text-[#B8F36B] border-[#B8F36B]/40'
                                  : 'bg-white/5 text-[#A3AAA3] border-white/10'
                              }`}
                            >
                              {exp.badge}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#B8F36B]">
                              {exp.period}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#F2F4EF] mt-1.5 tracking-tight">
                            {exp.role}
                          </h4>
                          <p className="text-xs text-[#A3AAA3] font-mono">{exp.company}</p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A3AAA3] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Transferable Capabilities */}
                      <div className="space-y-1.5 pt-2 border-t border-white/5">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                          Transferable Capabilities:
                        </p>
                        <ul className="space-y-1.5 text-xs text-[#A3AAA3]">
                          {exp.transferableCapabilities.map((cap, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <CheckCircle2
                                className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                  isActive ? 'text-[#B8F36B]' : 'text-[#737D75]'
                                }`}
                              />
                              <span className={isActive ? 'text-[#F2F4EF]' : 'text-[#A3AAA3]'}>
                                {cap}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* ACADEMIC EDUCATION COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-[#F2F4EF] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#B8F36B]" />
                <span>Education &amp; Qualifications</span>
              </h3>
              <span className="text-xs font-mono text-[#737D75]">Verified Credentials</span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <RevealOnScroll key={edu.id} delay={idx * 120} direction="up">
                  <div className="surface-card rounded-2xl p-6 sm:p-7 space-y-4 hover:border-white/20 transition-all text-left">
                    <div className="flex flex-col gap-1 border-b border-white/5 pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${edu.statusColor}`}>
                          {edu.status}
                        </span>
                        <span className="text-xs font-mono text-[#737D75] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-[#F2F4EF] mt-1.5">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-[#A3AAA3] font-mono">{edu.institution}</p>
                    </div>

                    <p className="text-xs text-[#A3AAA3] leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {edu.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A3AAA3]">
                          <ChevronRight className="w-3.5 h-3.5 text-[#B8F36B] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
