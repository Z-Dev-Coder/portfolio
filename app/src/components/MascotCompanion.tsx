import { useEffect } from 'react';
import { MessageSquare, X, ChevronRight } from 'lucide-react';
import { useMascotMachine } from '../machines/useMascotMachine';

export function MascotCompanion() {
  const mascot = useMascotMachine();

  // Accessibility: press Escape to minimize speech bubble
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !mascot.isMinimized) {
        mascot.minimize();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mascot]);

  return (
    <aside
      aria-label="Interactive AI Assistant Mascot"
      data-testid="mascot-companion"
      data-mascot-mode={mascot.mode}
      data-mascot-mood={mascot.mood}
      data-mascot-quote-index={mascot.quoteIndex}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none"
    >
      {/* Speech Bubble */}
      {!mascot.isMinimized && (
        <div
          data-testid="mascot-speech-bubble"
          role="status"
          aria-live="polite"
          className="mb-2 max-w-xs p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-left animate-fade-in relative group"
        >
          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-slate-800">
            <span className="text-[11px] font-mono font-bold text-sky-400 flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  mascot.mood === 'celebrating'
                    ? 'bg-purple-400 animate-ping'
                    : mascot.mood === 'waving'
                    ? 'bg-sky-400 animate-pulse'
                    : 'bg-emerald-400 animate-pulse'
                }`}
              />
              Byte · AI Companion
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={mascot.nextQuote}
                className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-[10px] flex items-center transition-colors"
                title="Next message"
                aria-label="Next tip"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
              <button
                onClick={mascot.minimize}
                className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-[10px] transition-colors"
                title="Minimize assistant"
                aria-label="Minimize Byte assistant"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {mascot.quote}
          </p>

          {/* Speech bubble pointer arrow */}
          <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-slate-900 border-r border-b border-slate-700/80 transform rotate-45" />
        </div>
      )}

      {/* Mascot Robot Figure */}
      <div className="flex items-center gap-2">
        {mascot.isMinimized && (
          <button
            onClick={mascot.expand}
            data-testid="mascot-expand-button"
            className="px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-medium text-sky-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 hover:bg-slate-800 hover:scale-105 transition-all animate-fade-in"
            aria-label="Expand Byte AI assistant"
          >
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            Talk to Byte
          </button>
        )}

        <div
          onClick={mascot.handleClick}
          data-testid="mascot-avatar"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              mascot.handleClick();
            }
          }}
          className="relative cursor-pointer group hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full"
          title="Click to interact with Byte!"
          aria-label="Interactive robot mascot Byte. Click to interact."
        >
          {/* Subtle ambient halo glow */}
          <div
            className={`absolute -inset-2 bg-gradient-to-tr ${
              mascot.mood === 'celebrating'
                ? 'from-purple-500/50 to-pink-500/50'
                : 'from-sky-500/30 to-indigo-500/30'
            } rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity`}
          />

          {/* SVG Robot Character */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 p-1">
            <svg
              viewBox="0 0 100 100"
              className={`w-full h-full drop-shadow-xl ${
                mascot.mood === 'celebrating' ? 'scale-110 transition-transform' : 'animate-mascot-float'
              }`}
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

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Antenna */}
              <line x1="50" y1="20" x2="50" y2="8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
              <circle
                cx="50"
                cy="7"
                r="4.5"
                fill={mascot.mood === 'celebrating' ? '#c084fc' : '#38bdf8'}
                filter="url(#glow)"
              >
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
              {mascot.eyeState === 'normal' && (
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

              {mascot.eyeState === 'wink' && (
                <g>
                  {/* Left Eye Winking Arch */}
                  <path d="M 35 38 Q 40 33 45 38" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                  {/* Right Eye Open */}
                  <circle cx="60.5" cy="38" r="4.5" fill="#38bdf8" filter="url(#glow)" />
                </g>
              )}

              {mascot.eyeState === 'happy' && (
                <g>
                  {/* Happy Inverted Arches */}
                  <path d="M 34 39 Q 39.5 31 45 39" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                  <path d="M 55 39 Q 60.5 31 66 39" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
                </g>
              )}

              {/* Cute Cheek Blushes */}
              <circle cx="33" cy="46" r="3" fill="#ec4899" opacity="0.45" />
              <circle cx="67" cy="46" r="3" fill="#ec4899" opacity="0.45" />

              {/* Body */}
              <path
                d="M 34 62 L 66 62 Q 70 78 50 82 Q 30 78 34 62 Z"
                fill="url(#bodyGrad)"
                stroke="#94a3b8"
                strokeWidth="2"
              />

              {/* Core Arc Reactor Light */}
              <circle cx="50" cy="71" r="5" fill={mascot.mood === 'celebrating' ? '#c084fc' : '#38bdf8'} filter="url(#glow)">
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
                d={mascot.isWaving ? "M 72 65 Q 86 52 82 40" : "M 72 65 Q 82 70 80 78"}
                fill="none"
                stroke="#94a3b8"
                strokeWidth="4"
                strokeLinecap="round"
                className={mascot.isWaving ? "animate-arm-wave origin-[72px_65px]" : ""}
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MascotCompanion;
