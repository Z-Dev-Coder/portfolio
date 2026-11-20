import { CheckCircle2, Compass } from 'lucide-react';

export default function About() {
  const principles = [
    {
      title: 'Problem First, Architecture Second',
      desc: 'Clarifying the actual user friction and data contracts before writing code prevents brittle, over-engineered software.',
    },
    {
      title: 'Grounded AI, Not Guesswork',
      desc: 'Grounding LLMs with RAG (pgvector) and deterministic state machines (LangGraph) ensures reliable, verifiable outputs.',
    },
    {
      title: 'Transferable Engineering Rigor',
      desc: 'Prior experience in site engineering and tech operations instilled systematic logging, QA diligence, and strict milestone adherence.',
    },
    {
      title: 'Continuous Practical Learning',
      desc: 'Advancing computational depth through active BSc Computing coursework while proving concepts through working software builds.',
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#080A0A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Background */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <span>02/ ABOUT THE DEVELOPER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F4EF] leading-tight">
              From engineering discipline to intelligent software systems.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A3AAA3] leading-relaxed">
              <p>
                I'm a software developer with an educational foundation in software engineering and previous professional experience in engineering oversight and technology operations.
              </p>
              <p>
                After transitioning into software engineering, I focused my technical curiosity on <strong className="text-[#F2F4EF]">Python backend development</strong> and <strong className="text-[#F2F4EF]">applied AI</strong>. I enjoy taking real operational problems, designing maintainable database and API architectures, and embedding modern AI capabilities where they genuinely streamline workflows.
              </p>
              <p>
                Currently, I am completing my BSc in Computing while building full-stack and AI-driven applications, ranging from autonomous support agents with LangGraph to local multimedia automation suites.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#121714] border border-white/5">
                <p className="text-2xl font-bold font-mono text-[#B8F36B]">7+</p>
                <p className="text-xs text-[#A3AAA3] mt-1">Delivered Software Projects</p>
              </div>
              <div className="p-4 rounded-xl bg-[#121714] border border-white/5">
                <p className="text-2xl font-bold font-mono text-[#F2F4EF]">Merit</p>
                <p className="text-xs text-[#A3AAA3] mt-1">HND Software Engineering</p>
              </div>
            </div>
          </div>

          {/* Right Column: How I Approach Engineering */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101413] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-[#F2F4EF] tracking-tight flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#B8F36B]" />
                <span>Engineering Values &amp; Approach</span>
              </h3>

              <div className="space-y-5">
                {principles.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B8F36B] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#F2F4EF]">{p.title}</h4>
                      <p className="text-xs text-[#A3AAA3] mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-[#737D75] flex items-center justify-between">
                <span>Disciplined SDLC · Clean Code · Pragmatic AI</span>
                <span className="font-mono text-[#B8F36B]">Zaw Myo Tun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
