import { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Efficiency', href: '#efficiency' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Vault', href: '#vault' },
    { label: 'Install', href: '#install' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
              LF
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              LihFolk V2
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/lihfolk-cy/v2-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              <i className="fab fa-github mr-2" />
              GitHub
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-purple-500/20">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-purple-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/lihfolk-cy/v2-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium text-center"
            >
              <i className="fab fa-github mr-2" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
