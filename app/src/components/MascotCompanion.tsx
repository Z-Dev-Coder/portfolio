import { useState, useEffect } from 'react';
import { MessageSquare, X, ChevronRight } from 'lucide-react';

const MASCOT_QUOTES = [
  "Hi! I'm Byte, Zaw's AI companion. Welcome to the portfolio! 👋",
  "Check out Recap Studio! Zaw's flagship AI video suite with Whisper STT & voice cloning! 🎬",
  "Did you know? Zaw engineered JumpStart using LangGraph & pgvector RAG!",
  "Zaw is currently seeking Junior Software Developer & AI roles! 🚀",
  "Try the category filters to explore full-stack, AI, and mobile projects!",
  "100% Scrum sprint delivery track record in a 5-member Agile team! 🏆",
  "Zaw loves AI-assisted engineering (VibeCoding) for 5x delivery speed! ⚡",
];

export function MascotCompanion() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [eyeState, setEyeState] = useState<'normal' | 'wink' | 'happy'>('normal');

  // Rotate quotes periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
      // Trigger a happy wink every minute
      setEyeState('wink');
      setTimeout(() => setEyeState('normal'), 800);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleMascotClick = () => {
    setIsWaving(true);
    setEyeState('happy');
    setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length);
    setTimeout(() => {
      setEyeState('normal');
      setIsWaving(false);
    }, 1200);
  };

  return (
    <aside aria-label="Interactive AI Assistant Mascot" className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none">
      {/* Speech Bubble */}
      {!isMinimized && (
        <div className="mb-2 max-w-xs p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-left animate-fade-in relative group">
          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-slate-800">
            <span className="text-[11px] font-mono font-bold text-sky-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Byte · AI Companion
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setQuoteIndex((prev) => (prev + 1) % MASCOT_QUOTES.length)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-[10px] flex items-center"
                title="Next message"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-[10px]"
                title="Minimize assistant"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {MASCOT_QUOTES[quoteIndex]}
          </p>

          {/* Speech bubble pointer arrow */}
          <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-slate-900 border-r border-b border-slate-700/80 transform rotate-45" />
        </div>
      )}

      {/* Mascot Robot Figure */}
      <div className="flex items-center gap-2">
        {isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            className="px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-medium text-sky-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 hover:bg-slate-800 transition-all animate-bounce"
          >
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            Talk to Byte
          </button>
        )}

        <div
          onClick={handleMascotClick}
          className="relative cursor-pointer group hover:scale-105 active:scale-95 transition-all duration-300"
          title="Click to interact with Byte!"
        >
          {/* Subtle ambient halo glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/30 to-indigo-500/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

          {/* SVG Robot Character */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 p-1">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-xl animate-mascot-float"
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>

                <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Antenna */}
              <line x1="50" y1="20" x2="50" y2="8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="7" r="4.5" fill="#38bdf8" filter="url(#glow)">
                <animate
                  attributeName="r"
                  values="4;5.5;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Ears / Headset */}
              <rect x="18" y="32" width="7" height="16" rx="3.5" fill="#64748b" />
              <rect x="75" y="32" width="7" height="16" rx="3.5" fill="#64748b" />
              <circle cx="21" cy="40" r="2" fill="#38bdf8" />
              <circle cx="79" cy="40" r="2" fill="#38bdf8" />

              {/* Head Shell */}
              <rect
                x="23"
                y="18"
                width="54"
                height="44"
                rx="18"
                fill="url(#bodyGrad)"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              {/* Visor Screen */}
              <rect
                x="28"
                y="24"
                width="44"
                height="30"
                rx="12"
                fill="url(#visorGrad)"
                stroke="#1e293b"
                strokeWidth="1.5"
              />

              {/* Eyes Expression */}
              {eyeState === 'normal' && (
                <g>
                  {/* Left Eye */}
                  <rect x="36" y="33" width="7" height="11" rx="3.5" fill="#38bdf8" filter="url(#glow)">
                    <animate attributeName="height" values="11;1;11" keyTimes="0;0.05;0.1" dur="4s" repeatCount="indefinite" />
                  </rect>
                  {/* Right Eye */}
                  <rect x="57" y="33" width="7" height="11" rx="3.5" fill="#38bdf8" filter="url(#glow)">
                    <animate attributeName="height" values="11;1;11" keyTimes="0;0.05;0.1" dur="4s" repeatCount="indefinite" />
                  </rect>
                </g>
              )}

              {eyeState === 'wink' && (
                <g>
                  {/* Left Eye Winking Arch */}
                  <path d="M 35 38 Q 40 33 45 38" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                  {/* Right Eye Open */}
                  <circle cx="60.5" cy="38" r="4.5" fill="#38bdf8" filter="url(#glow)" />
                </g>
              )}

              {eyeState === 'happy' && (
                <g>
                  {/* Happy Inverted Arches */}
                  <path d="M 34 39 Q 39.5 31 45 39" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                  <path d="M 55 39 Q 60.5 31 66 39" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                </g>
              )}

              {/* Cute Cheek Blushes */}
              <circle cx="33" cy="46" r="3" fill="#ec4899" opacity="0.4" />
              <circle cx="67" cy="46" r="3" fill="#ec4899" opacity="0.4" />

              {/* Body */}
              <path
                d="M 34 62 L 66 62 Q 70 78 50 82 Q 30 78 34 62 Z"
                fill="url(#bodyGrad)"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              {/* Core Arc Reactor Light */}
              <circle cx="50" cy="71" r="5" fill="#38bdf8" filter="url(#glow)">
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Floating Jet Thruster Flame */}
              <ellipse cx="50" cy="85" rx="7" ry="3.5" fill="#38bdf8" opacity="0.75" filter="url(#glow)">
                <animate
                  attributeName="ry"
                  values="3.5;6;3.5"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </ellipse>

              {/* Left Arm */}
              <path
                d="M 28 65 Q 18 70 20 78"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Right Arm (Waving!) */}
              <path
                d={isWaving ? "M 72 65 Q 86 52 82 40" : "M 72 65 Q 82 70 80 78"}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="4"
                strokeLinecap="round"
                className={isWaving ? "animate-arm-wave origin-[72px_65px]" : ""}
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MascotCompanion;
