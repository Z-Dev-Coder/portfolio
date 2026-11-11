import { useState, useRef, useCallback, useEffect } from 'react';

export type ToastStatus = 'idle' | 'visible' | 'dismissing';
export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastState {
  status: ToastStatus;
  message: string | null;
  type: ToastType;
  id: number;
}

export function useToastMachine(durationMs: number = 3200) {
  const [toast, setToast] = useState<ToastState>({
    status: 'idle',
    message: null,
    type: 'info',
    id: 0,
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
      dismissTimerRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    clearTimers();
    setToast((prev) => {
      if (prev.status === 'idle') return prev;
      return { ...prev, status: 'dismissing' };
    });

    // Wait for fade-out animation before returning to idle
    dismissTimerRef.current = setTimeout(() => {
      setToast({
        status: 'idle',
        message: null,
        type: 'info',
        id: 0,
      });
    }, 250);
  }, [clearTimers]);

  const show = useCallback(
    (message: string, type: ToastType = 'info') => {
      clearTimers();
      const newId = Date.now();

      // Transition to visible with fresh message
      setToast({
        status: 'visible',
        message,
        type,
        id: newId,
      });

      // Set deterministic auto-dismiss timer
      timerRef.current = setTimeout(() => {
        dismiss();
      }, durationMs);
    },
    [clearTimers, dismiss, durationMs]
  );

  // Clean up timers on unmount
  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  return {
    state: toast,
    show,
    dismiss,
    isVisible: toast.status === 'visible' || toast.status === 'dismissing',
  };
}
