import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'store', label: 'Store' },
  { id: 'premium', label: 'Premium Info' },
  { id: 'games', label: 'Supported Games' },
  { id: 'executors', label: 'Supported Executors' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-red-600/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#ff2424] shadow-[0_0_20px_4px_rgba(255,36,36,0.7)]" />
            <button
              onClick={() => scrollTo('home')}
              className="text-white font-semibold tracking-wide text-lg hover:text-[#ff2424] transition-colors"
            >
              CPS Network
            </button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-neutral-300 hover:text-white relative group"
              >
                <span>{s.label}</span>
                <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#ff2424] shadow-[0_0_10px_2px_rgba(255,36,36,0.5)]" />
              </button>
            ))}
          </div>
          <button
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 grid gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  scrollTo(s.id);
                  setOpen(false);
                }}
                className="text-left w-full px-2 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
