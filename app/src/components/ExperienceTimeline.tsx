import { Briefcase, BookOpen, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';
import { EDUCATION } from '../data/education';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-b border-white/10 bg-[#080A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
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
          {/* PROFESSIONAL EXPERIENCE COLUMN */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-[#F2F4EF] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#B8F36B]" />
                <span>Professional Experience</span>
              </h3>
              <span className="text-xs font-mono text-[#737D75]">Transferable Rigor</span>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="surface-card rounded-2xl p-6 sm:p-7 space-y-4 hover:border-[#B8F36B]/40 transition-all text-left"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#B8F36B]/15 text-[#B8F36B] border border-[#B8F36B]/30 font-semibold">
                          {exp.badge}
                        </span>
                        <span className="text-xs font-mono text-[#737D75]">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#F2F4EF] mt-1.5">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-[#B8F36B] font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3AAA3] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Transferable Capabilities */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                      Transferable Capabilities:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#A3AAA3]">
                      {exp.transferableCapabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F36B] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACADEMIC EDUCATION COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-[#F2F4EF] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#B8F36B]" />
                <span>Education &amp; Qualifications</span>
              </h3>
              <span className="text-xs font-mono text-[#737D75]">Verified Credentials</span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="surface-card rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all text-left"
                >
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
                    <p className="text-xs text-[#A3AAA3]">{edu.institution}</p>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
