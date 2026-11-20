import { Award, BookOpen, Server, Bot } from 'lucide-react';

export default function CredentialStrip() {
  const credentials = [
    {
      icon: Award,
      title: 'HND Software Engineering',
      meta: 'Merit Awarded · EduCLaaS',
    },
    {
      icon: BookOpen,
      title: 'BSc (Hons) Computing',
      meta: 'Candidate · Active Studies',
    },
    {
      icon: Server,
      title: 'Python Backend Engineering',
      meta: 'Django, DRF & FastAPI',
    },
    {
      icon: Bot,
      title: 'Applied AI & Agents',
      meta: 'LangGraph, RAG & Ollama',
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#101413]/70 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#171C19] border border-white/10 flex items-center justify-center text-[#B8F36B] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-[#F2F4EF] truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] font-mono text-[#A3AAA3] truncate">
                    {item.meta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
