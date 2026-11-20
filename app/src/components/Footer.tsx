import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080A0A] py-8 text-xs text-[#A3AAA3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#F2F4EF]">ZMT</span>
          <span className="text-[#737D75]">·</span>
          <span>Zaw Myo Tun</span>
          <span className="text-[#737D75]">·</span>
          <span className="font-mono text-[#737D75]">© 2026 All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-4 text-[#737D75]">
          <span>React 19 · TypeScript · Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="p-1.5 rounded-lg bg-[#121714] hover:bg-[#171C19] text-[#A3AAA3] hover:text-[#B8F36B] border border-white/10 transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
