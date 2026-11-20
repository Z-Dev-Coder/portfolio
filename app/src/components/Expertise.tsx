import { Server, Bot, Layout, GitBranch, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export default function Expertise() {
  const iconMap = {
    server: Server,
    bot: Bot,
    layout: Layout,
    gitBranch: GitBranch,
  };

  return (
    <section id="expertise" className="py-24 border-b border-white/10 bg-[#080A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
            <span>04/ TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4EF]">
            How I Engineer Software.
          </h2>
          <p className="text-sm text-[#A3AAA3] leading-relaxed">
            Practical skills verified through delivered applications, coursework, and systems architecture — grounded in clean engineering principles rather than arbitrary percentages.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.iconName];
            return (
              <div
                key={cat.id}
                className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#171C19] border border-white/10 flex items-center justify-center text-[#B8F36B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#737D75] uppercase tracking-wider">
                      Core Discipline
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#F2F4EF] tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#A3AAA3] mt-1">{cat.tagline}</p>
                  </div>

                  {/* Skills Cloud */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-[#171C19] text-[#F2F4EF] border border-white/10 hover:border-[#B8F36B]/40 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical Engineering Principles */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                    Engineering Principles in Practice:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#A3AAA3]">
                    {cat.principles.map((pr, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F36B] shrink-0 mt-0.5" />
                        <span>{pr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
