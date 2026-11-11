import { useState, useRef, useCallback, useEffect } from 'react';

export type ClipboardStatus = 'idle' | 'copying' | 'copied' | 'error';

export interface ClipboardState {
  status: ClipboardStatus;
  error?: string;
}

export function useClipboardMachine(resetDelayMs: number = 2400) {
  const [state, setState] = useState<ClipboardState>({ status: 'idle' });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      clearTimer();
      setState({ status: 'copying' });

      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older environments or strict security sandboxes
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          const successful = document.execCommand('copy');
          document.body.removeChild(textarea);
          if (!successful) throw new Error('execCommand copy failed');
        }

        setState({ status: 'copied' });

        timerRef.current = setTimeout(() => {
          setState({ status: 'idle' });
        }, resetDelayMs);

        return true;
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to copy';
        setState({ status: 'error', error: errorMsg });

        timerRef.current = setTimeout(() => {
          setState({ status: 'idle' });
        }, resetDelayMs);

        return false;
      }
    },
    [clearTimer, resetDelayMs]
  );

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return {
    status: state.status,
    isCopied: state.status === 'copied',
    isCopying: state.status === 'copying',
    isError: state.status === 'error',
    copy,
  };
}
