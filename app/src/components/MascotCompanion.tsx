import { useEffect } from 'react';
import { Bot, X, ChevronRight } from 'lucide-react';
import { useMascotMachine } from '../machines/useMascotMachine';

export function MascotCompanion() {
  const mascot = useMascotMachine();

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
      aria-label="Interactive Portfolio Guide"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none font-sans"
    >
      {/* Speech Bubble */}
      {!mascot.isMinimized && (
        <div
          role="status"
          aria-live="polite"
          className="mb-3 max-w-xs sm:max-w-sm p-4 rounded-2xl bg-[#121714] border border-white/15 shadow-2xl shadow-black text-left relative animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10">
            <span className="text-[11px] font-mono font-bold text-[#B8F36B] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse" />
              Byte · AI Assistant
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={mascot.nextQuote}
                className="p-1 rounded-md text-[#A3AAA3] hover:text-[#F2F4EF] hover:bg-white/10 text-[10px] transition-colors"
                title="Next tip"
                aria-label="Next tip"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={mascot.minimize}
                className="p-1 rounded-md text-[#A3AAA3] hover:text-[#F2F4EF] hover:bg-white/10 text-[10px] transition-colors"
                title="Minimize assistant"
                aria-label="Minimize Byte assistant"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-xs text-[#F2F4EF] leading-relaxed">
            {mascot.quote}
          </p>

          <div className="pt-2.5 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#737D75] font-mono">
            <span>Tip {mascot.quoteIndex + 1} of 6</span>
            <button
              onClick={mascot.nextQuote}
              className="text-[#B8F36B] hover:underline"
            >
              Cycle tip →
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="flex items-center gap-2">
        {mascot.isMinimized ? (
          <button
            onClick={mascot.expand}
            className="px-3.5 py-2 rounded-full bg-[#121714] border border-white/15 text-xs font-medium text-[#F2F4EF] hover:text-[#B8F36B] hover:border-[#B8F36B]/40 shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            aria-label="Open Byte AI assistant"
          >
            <Bot className="w-4 h-4 text-[#B8F36B]" />
            <span className="font-mono text-[11px]">Ask Byte</span>
          </button>
        ) : (
          <button
            onClick={mascot.handleClick}
            className="w-11 h-11 rounded-full bg-[#B8F36B] text-[#080A0A] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            aria-label="Interact with Byte"
            title="Click for greeting"
          >
            <Bot className="w-5 h-5" />
          </button>
        )}
      </div>
    </aside>
  );
}
