import { useState } from 'react';
import { Mail, Copy, Check, Download, MapPin, ExternalLink, Phone } from 'lucide-react';

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

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zawmyotun.kl@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 bg-[#080A0A] relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
            <span>06/ GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F4EF] leading-tight">
            Have a project in mind?<br />
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#A3AAA3] leading-relaxed">
            I am actively open to junior software developer and applied AI roles. Whether you have an engineering opportunity, a project collaboration, or technical feedback, feel free to connect.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Card with 1-click copy */}
          <div className="surface-card rounded-2xl p-6 sm:p-7 flex items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#171C19] border border-white/10 flex items-center justify-center text-[#B8F36B] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                  Direct Email Address
                </p>
                <a
                  href="mailto:zawmyotun.kl@gmail.com"
                  className="text-sm sm:text-base font-semibold text-[#F2F4EF] hover:text-[#B8F36B] transition-colors truncate block"
                >
                  zawmyotun.kl@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
              className="p-2.5 rounded-xl bg-[#171C19] hover:bg-white/10 text-[#A3AAA3] hover:text-[#F2F4EF] border border-white/10 transition-all shrink-0 active:scale-95"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-[#B8F36B]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Direct Phone Card (Non-clickable, static text per user preference) */}
          <div className="surface-card rounded-2xl p-6 sm:p-7 flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#171C19] border border-white/10 flex items-center justify-center text-[#B8F36B] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#737D75]">
                Direct Phone / Call
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#F2F4EF] select-all font-mono mt-0.5">
                09-943773771 / 09-793443483
              </p>
            </div>
          </div>
        </div>

        {/* Quick Credentials & Links Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="space-y-1">
            <p className="text-xs text-[#737D75] font-mono uppercase">GitHub Profile</p>
            <a
              href="https://github.com/Z-Dev-Coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#B8F36B] hover:underline inline-flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Z-Dev-Coder</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#737D75] font-mono uppercase">Current Status</p>
            <p className="text-sm font-semibold text-[#B8F36B] inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse" />
              <span>Open to Work</span>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#737D75] font-mono uppercase">Location</p>
            <p className="text-sm font-semibold text-[#F2F4EF] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#737D75]" />
              <span>Mandalay, Myanmar</span>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-[#737D75] font-mono uppercase">Curriculum Vitae</p>
            <a
              href="./Zaw_Myo_Tun_Portfolio.docx"
              download
              className="text-sm font-semibold text-[#F2F4EF] hover:text-[#B8F36B] transition-colors inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download DOCX</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
