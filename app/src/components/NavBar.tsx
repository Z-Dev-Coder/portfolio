import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B0D12] backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="text-xl font-semibold text-[#8B9CFF]">ZAW.</a>
        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-[#A1A8B5]">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#6D7CFF] transition-colors" aria-label={l.label}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="/Zaw_Myo_Tun_Portfolio.docx" download className="flex items-center space-x-1 text-[#A7F36B] hover:text-[#8B9CFF] transition-colors" aria-label="Download Resume">
              <ArrowRight className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-[#A1A8B5] hover:text-[#6D7CFF] focus:outline-none" aria-label="Toggle navigation">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#0B0D12]">
          <ul className="flex flex-col space-y-2 px-4 py-3 text-[#A1A8B5]">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="block py-1 hover:text-[#6D7CFF] transition-colors" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="/Zaw_Myo_Tun_Portfolio.docx" download className="flex items-center space-x-1 py-1 text-[#A7F36B] hover:text-[#8B9CFF] transition-colors" onClick={() => setOpen(false)}>
                <ArrowRight className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
