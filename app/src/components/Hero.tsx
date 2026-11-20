import { useState, useEffect } from 'react';
import { ArrowRight, Download, MapPin, Terminal, Cpu, Database } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

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
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Editorial Text Column (52-54% width) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Category / Discipline Label */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#121714] border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#B8F36B] transition-all duration-700 ${
                mounted || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B] animate-pulse" />
              <span>SOFTWARE DEVELOPER / PYTHON &amp; APPLIED AI</span>
            </div>

            {/* Confident Headline */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                mounted || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F4EF] leading-[1.12]">
                I build software that makes complex work simpler.
              </h1>
              <p className="text-base sm:text-lg text-[#A3AAA3] leading-relaxed max-w-2xl font-normal">
                I'm <span className="text-[#F2F4EF] font-medium">Zaw Myo Tun</span>, a software developer focused on Python backend engineering and practical AI applications. I build robust APIs, intelligent workflows, and tools that solve real problems.
              </p>
            </div>

            {/* CTA Actions */}
            <div
              className={`flex flex-wrap items-center gap-3 pt-2 transition-all duration-700 delay-200 ${
                mounted || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B8F36B] text-[#080A0A] font-semibold text-sm hover:bg-[#D2FF91] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#B8F36B]/20"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./Zaw_Myo_Tun_Portfolio.docx"
                download
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#121714] border border-white/10 text-sm font-medium text-[#F2F4EF] hover:border-[#B8F36B]/50 hover:text-[#B8F36B] transition-all"
              >
                <Download className="w-4 h-4 text-[#A3AAA3]" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Z-Dev-Coder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#121714] border border-white/10 text-sm font-medium text-[#A3AAA3] hover:text-[#F2F4EF] hover:border-white/20 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Technical Focus Highlights */}
            <div
              className={`pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${
                mounted || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
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

          {/* Right Column: LARGE DOMINANT HERO PORTRAIT (46-48% width) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#121714] shadow-2xl shadow-black/80 transition-all duration-1000 ease-out ${
                mounted || prefersReducedMotion
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 translate-y-6'
              }`}
            >
              {/* Subtle top-right lime corner glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#B8F36B]/15 rounded-full blur-3xl pointer-events-none" />

              {/* The Genuine Profile Photograph (Centered, natural portrait framing) */}
              <img
                src="./zaw_myo_tun.jpg"
                alt="Zaw Myo Tun — Junior Software Developer"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Bottom Subtle Gradient Overlay with Integrated Credentials */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080A0A] via-[#080A0A]/80 to-transparent pt-12 pb-5 px-5 sm:px-6 space-y-2 text-left">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#F2F4EF] tracking-tight">
                      Zaw Myo Tun
                    </h2>
                    <p className="text-xs font-mono text-[#B8F36B]">
                      Junior Software Developer | Python &amp; Applied AI
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#171C19]/90 border border-white/10 text-[10px] font-mono text-[#B8F36B] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B] animate-pulse" />
                    <span>Open to Roles</span>
                  </span>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A3AAA3]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#737D75]" />
                    <span>Mandalay, Myanmar</span>
                  </span>
                  <span className="font-mono text-[#737D75]">
                    EduCLaaS HDSE (Merit)
                  </span>
                </div>
              </div>

              {/* Subtle architectural corner markers */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-white/30 pointer-events-none">
                [01. DEV_PORTRAIT]
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-[#B8F36B]/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
