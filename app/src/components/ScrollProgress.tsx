import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#B8F36B] to-[#D2FF91] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(184,243,107,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
