import { useState, useRef, useCallback, useEffect } from 'react';

export type MascotMode = 'active' | 'minimized';
export type MascotMood = 'attentive' | 'waving' | 'explaining' | 'celebrating';
export type MascotEyeState = 'normal' | 'wink' | 'happy';

export const MASCOT_QUOTES = [
  "Hi! I'm Byte, Zaw's portfolio guide. How can I help you navigate? 👋",
  "Explore Recap Studio — Zaw's desktop AI suite featuring Resource Hub discovery, Faster-Whisper, and FFmpeg!",
  "JumpStart integrates LangGraph state graphs with PostgreSQL pgvector RAG for retail support.",
  "English Coach AI provides CEFR diagnostic learning using self-hosted Ollama LLMs with $0 cloud API cost.",
  "Zaw is currently completing a BSc in Computing and is open to Junior Software & AI roles! 🚀",
  "Check the Case Studies in each project card for architecture breakdowns and design trade-offs.",
];

export interface MascotState {
  mode: MascotMode;
  mood: MascotMood;
  quoteIndex: number;
}

export function useMascotMachine(autoRotateIntervalMs: number = 14000) {
  // Master Prompt V3: Minimized by default, no intrusive welcome popup
  const [state, setState] = useState<MascotState>({
    mode: 'minimized',
    mood: 'attentive',
    quoteIndex: 0,
  });

  const moodTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearMoodTimer = useCallback(() => {
    if (moodTimerRef.current) {
      clearTimeout(moodTimerRef.current);
      moodTimerRef.current = null;
    }
  }, []);

  const triggerTemporaryMood = useCallback(
    (targetMood: MascotMood, durationMs: number) => {
      clearMoodTimer();
      setState((prev) => ({ ...prev, mood: targetMood }));

      moodTimerRef.current = setTimeout(() => {
        setState((prev) => (prev.mood === targetMood ? { ...prev, mood: 'attentive' } : prev));
      }, durationMs);
    },
    [clearMoodTimer]
  );

  // Periodic tip rotation when active
  useEffect(() => {
    if (state.mode === 'minimized') return;

    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        quoteIndex: (prev.quoteIndex + 1) % MASCOT_QUOTES.length,
      }));
      triggerTemporaryMood('explaining', 900);
    }, autoRotateIntervalMs);

    return () => clearInterval(interval);
  }, [state.mode, autoRotateIntervalMs, triggerTemporaryMood]);

  const handleMascotClick = useCallback(() => {
    if (state.mode === 'minimized') {
      setState((prev) => ({ ...prev, mode: 'active' }));
      triggerTemporaryMood('waving', 1800);
    } else {
      setState((prev) => ({
        ...prev,
        quoteIndex: (prev.quoteIndex + 1) % MASCOT_QUOTES.length,
      }));
      triggerTemporaryMood('celebrating', 1600);
    }
  }, [state.mode, triggerTemporaryMood]);

  const nextQuote = useCallback(() => {
    setState((prev) => ({
      ...prev,
      quoteIndex: (prev.quoteIndex + 1) % MASCOT_QUOTES.length,
    }));
    triggerTemporaryMood('explaining', 800);
  }, [triggerTemporaryMood]);

  const minimize = useCallback(() => {
    clearMoodTimer();
    setState((prev) => ({ ...prev, mode: 'minimized', mood: 'attentive' }));
  }, [clearMoodTimer]);

  const expand = useCallback(() => {
    setState((prev) => ({ ...prev, mode: 'active' }));
    triggerTemporaryMood('waving', 1400);
  }, [triggerTemporaryMood]);

  // Derived eye expression
  const eyeState: MascotEyeState =
    state.mood === 'celebrating' ? 'happy' : state.mood === 'explaining' ? 'wink' : 'normal';

  return {
    mode: state.mode,
    mood: state.mood,
    quoteIndex: state.quoteIndex,
    quote: MASCOT_QUOTES[state.quoteIndex],
    eyeState,
    isMinimized: state.mode === 'minimized',
    handleClick: handleMascotClick,
    nextQuote,
    minimize,
    expand,
  };
}
