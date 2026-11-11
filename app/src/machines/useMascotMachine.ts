import { useState, useRef, useCallback, useEffect } from 'react';

export type MascotMode = 'active' | 'minimized';
export type MascotMood = 'attentive' | 'waving' | 'explaining' | 'celebrating';
export type MascotEyeState = 'normal' | 'wink' | 'happy';

export const MASCOT_QUOTES = [
  "Hi! I'm Byte, Zaw's AI companion. Welcome to the portfolio! 👋",
  "Check out Recap Studio! Zaw's flagship AI video suite with Whisper STT & voice cloning! 🎬",
  "Did you know? Zaw engineered JumpStart using LangGraph & pgvector RAG!",
  "Zaw is currently seeking Junior Software Developer & AI roles! 🚀",
  "Try the category filters to explore full-stack, AI, and mobile projects!",
  "100% Scrum sprint delivery track record in a 5-member Agile team! 🏆",
  "Zaw loves AI-assisted engineering (VibeCoding) for 5x delivery speed! ⚡",
];

export interface MascotState {
  mode: MascotMode;
  mood: MascotMood;
  quoteIndex: number;
}

export function useMascotMachine(autoRotateIntervalMs: number = 12000) {
  const [state, setState] = useState<MascotState>({
    mode: 'active',
    mood: 'waving',
    quoteIndex: 0,
  });

  const moodTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearMoodTimer = useCallback(() => {
    if (moodTimerRef.current) {
      clearTimeout(moodTimerRef.current);
      moodTimerRef.current = null;
    }
  }, []);

  // Transition to a temporary mood, then revert to 'attentive'
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

  // Initial greeting ends after 2.5s
  useEffect(() => {
    moodTimerRef.current = setTimeout(() => {
      setState((prev) => (prev.mood === 'waving' ? { ...prev, mood: 'attentive' } : prev));
    }, 2800);
    return () => clearMoodTimer();
  }, [clearMoodTimer]);

  // Periodic tip rotation
  useEffect(() => {
    if (state.mode === 'minimized') return;

    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        quoteIndex: (prev.quoteIndex + 1) % MASCOT_QUOTES.length,
      }));
      // Brief wink on tip change
      triggerTemporaryMood('explaining', 900);
    }, autoRotateIntervalMs);

    return () => clearInterval(interval);
  }, [state.mode, autoRotateIntervalMs, triggerTemporaryMood]);

  // Event Handlers
  const handleMascotClick = useCallback(() => {
    if (state.mode === 'minimized') {
      setState((prev) => ({ ...prev, mode: 'active' }));
      triggerTemporaryMood('waving', 1800);
    } else {
      // User tapped active mascot: celebrate!
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
    triggerTemporaryMood('waving', 1800);
  }, [triggerTemporaryMood]);

  // Derived eye and arm properties based on mood
  const isWaving = state.mood === 'waving' || state.mood === 'celebrating';
  const eyeState: MascotEyeState =
    state.mood === 'celebrating' ? 'happy' : state.mood === 'explaining' ? 'wink' : 'normal';

  return {
    state,
    mode: state.mode,
    mood: state.mood,
    quote: MASCOT_QUOTES[state.quoteIndex],
    quoteIndex: state.quoteIndex,
    isWaving,
    eyeState,
    isMinimized: state.mode === 'minimized',
    handleClick: handleMascotClick,
    nextQuote,
    minimize,
    expand,
  };
}
