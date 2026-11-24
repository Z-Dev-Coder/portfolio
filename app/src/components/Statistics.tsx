import { STATISTICS } from '../data/statistics';
import CountUp from './CountUp';
import RevealOnScroll from './RevealOnScroll';
import { Layers, Bot, Radio, Award } from 'lucide-react';

export default function Statistics() {
  const iconMap: Record<string, typeof Layers> = {
    'projects-count': Layers,
    'ai-projects': Bot,
    'isp-tenure': Radio,
    'hnd-merit': Award,
  };

  return (
    <section className="py-16 border-b border-white/10 bg-[#080A0A] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS.map((stat, idx) => {
            const Icon = iconMap[stat.id] || Layers;
            return (
              <RevealOnScroll
                key={stat.id}
                delay={idx * 100}
                direction="up"
                className="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-[#B8F36B]/40 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#171C19] border border-white/10 flex items-center justify-center text-[#B8F36B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#737D75] uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#F2F4EF] flex items-baseline gap-1 tabular-nums">
                    {stat.isDateRange ? (
                      <span className="text-xl sm:text-2xl text-[#B8F36B]">{stat.dateRangeText}</span>
                    ) : (
                      <>
                        <CountUp end={stat.value} duration={1400} />
                        {stat.suffix && <span className="text-[#B8F36B]">{stat.suffix}</span>}
                      </>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[#F2F4EF] mt-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-[#A3AAA3] mt-0.5 leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
