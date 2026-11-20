import { ArrowRight, Download, MapPin, Terminal, Cpu, Database } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Category / Discipline Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#121714] border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#B8F36B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B]" />
              <span>SOFTWARE DEVELOPER / PYTHON &amp; APPLIED AI</span>
            </div>

            {/* Confident Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F4EF] leading-[1.12]">
                I build software that makes complex work simpler.
              </h1>
              <p className="text-base sm:text-lg text-[#A3AAA3] leading-relaxed max-w-2xl font-normal">
                I'm <span className="text-[#F2F4EF] font-medium">Zaw Myo Tun</span>, a software developer focused on Python backend engineering and practical AI applications. I enjoy building useful software, designing backend systems, and integrating AI technologies to solve real-world problems.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B8F36B] text-[#080A0A] font-semibold text-sm hover:bg-[#D2FF91] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-[#B8F36B]/20"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./Zaw_Myo_Tun_Portfolio.docx"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121714] border border-white/10 text-sm font-medium text-[#F2F4EF] hover:border-[#B8F36B]/50 hover:text-[#B8F36B] transition-all"
              >
                <Download className="w-4 h-4 text-[#A3AAA3]" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Z-Dev-Coder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121714] border border-white/10 text-sm font-medium text-[#A3AAA3] hover:text-[#F2F4EF] hover:border-white/20 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Technical Focus Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <Terminal className="w-4 h-4 text-[#B8F36B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-semibold text-[#F2F4EF]">Backend Core</p>
                  <p className="text-[11px] text-[#A3AAA3]">Python, Django, FastAPI</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-[#B8F36B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-semibold text-[#F2F4EF]">Applied AI</p>
                  <p className="text-[11px] text-[#A3AAA3]">LangGraph, RAG, Ollama</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Database className="w-4 h-4 text-[#B8F36B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-semibold text-[#F2F4EF]">Data &amp; Vectors</p>
                  <p className="text-[11px] text-[#A3AAA3]">PostgreSQL, pgvector, SQLite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Grounding Panel */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md surface-card rounded-2xl p-6 space-y-6 relative overflow-hidden">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8F36B]/60" />

              {/* Profile Image & Identification */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src="./zaw_myo_tun.jpg"
                    alt="Zaw Myo Tun portrait photograph"
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#B8F36B] border-2 border-[#080A0A]" title="Open to work" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#F2F4EF] tracking-tight">Zaw Myo Tun</h2>
                  <p className="text-xs font-mono text-[#B8F36B]">Junior Software Developer</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#A3AAA3] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#737D75]" />
                    <span>Mandalay, Myanmar</span>
                  </div>
                </div>
              </div>

              {/* Quick Verified Status Info */}
              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-[#737D75] font-mono">DEGREE</span>
                  <span className="text-[#F2F4EF] font-medium text-right">BSc (Hons) Computing (Studying)</span>
                </div>
                <div className="flex justify-between py-1 border-t border-white/5">
                  <span className="text-[#737D75] font-mono">DIPLOMA</span>
                  <span className="text-[#B8F36B] font-medium text-right">HND Software Engineering (Merit)</span>
                </div>
                <div className="flex justify-between py-1 border-t border-white/5">
                  <span className="text-[#737D75] font-mono">DIRECTION</span>
                  <span className="text-[#F2F4EF] font-medium text-right">Python Backend &amp; Applied AI</span>
                </div>
                <div className="flex justify-between py-1 border-t border-white/5">
                  <span className="text-[#737D75] font-mono">AVAILABILITY</span>
                  <span className="text-[#B8F36B] font-medium text-right">Open to Local &amp; Remote Roles</span>
                </div>
              </div>

              {/* Code/Architecture Inspiration quote */}
              <div className="p-3.5 rounded-xl bg-[#080A0A]/70 border border-white/5 font-mono text-[11px] text-[#A3AAA3] leading-relaxed">
                <span className="text-[#737D75]">// Core engineering philosophy:</span>
                <p className="text-[#F2F4EF] mt-1">
                  "Understand the root problem, structure clean data contracts, and integrate AI to assist real humans."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
