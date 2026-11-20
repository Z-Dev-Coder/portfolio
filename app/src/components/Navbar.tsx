import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ScrollProgress from './ScrollProgress';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'hero' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#expertise', label: 'Expertise', id: 'expertise' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const isLinkActive = (id: string) => {
    if (id === 'about') return activeSection === 'about' || activeSection === 'workflow';
    return activeSection === id;
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080A0A]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-tight text-[#F2F4EF] hover:text-[#B8F36B] transition-colors"
          >
            <span>ZMT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121714]/80 border border-white/10 rounded-full px-3.5 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.id);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#B8F36B] bg-white/5 font-semibold'
                      : 'text-[#A3AAA3] hover:text-[#F2F4EF] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Availability Status & Resume */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#A3AAA3] bg-[#121714] border border-white/10 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8F36B]" />
              </span>
              <span>Available for Roles</span>
            </div>

            <a
              href="./Zaw_Myo_Tun_Portfolio.docx"
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#B8F36B] text-[#080A0A] hover:bg-[#D2FF91] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-[#B8F36B]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="./Zaw_Myo_Tun_Portfolio.docx"
              download
              aria-label="Download Resume"
              className="p-2 rounded-lg bg-[#121714] border border-white/10 text-[#B8F36B]"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 rounded-lg bg-[#121714] border border-white/10 text-[#F2F4EF] hover:text-[#B8F36B] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#080A0A]/98 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A3AAA3] pb-2 border-b border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8F36B]" />
              </span>
              <span>Open to Junior Software &amp; AI Roles</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.id);
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#B8F36B] bg-white/5 font-semibold'
                        : 'text-[#A3AAA3] hover:text-[#F2F4EF] hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-2">
              <a
                href="./Zaw_Myo_Tun_Portfolio.docx"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#B8F36B] text-[#080A0A]"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume (DOCX)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
