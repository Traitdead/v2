import { useEffect, useRef, useState } from 'react';

export default function VaultContents() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      category: 'Scripting & Systems',
      icon: 'fas fa-code',
      color: 'from-purple-500 to-violet-500',
      items: ['Luau basics to advanced', 'Client/server architecture', 'Remote events & functions', 'DataStores & session locking', 'Game systems library', 'Physics & vehicles', 'Game math & procedural gen'],
    },
    {
      category: 'Security & Performance',
      icon: 'fas fa-shield-alt',
      color: 'from-red-500 to-orange-500',
      items: ['Anti-exploit patterns', 'Debugging deep dives', 'Profiling & optimization', 'Mobile budgets', 'Secure remotes', 'DataStore safety'],
    },
    {
      category: 'Art & Feel',
      icon: 'fas fa-paint-brush',
      color: 'from-pink-500 to-rose-500',
      items: ['UI/UX design', 'Worldbuilding', 'Level design', 'Lighting & atmosphere', 'VFX & particles', 'Audio design', 'Animation & rigs', 'Modelling & Blender', 'Voxel & stylised styles'],
    },
    {
      category: 'Design & Business',
      icon: 'fas fa-chart-line',
      color: 'from-emerald-500 to-teal-500',
      items: ['Genre analysis', 'Economy design', 'Monetization', 'Live ops', 'Marketing & thumbnails', 'Community building', 'Career guidance'],
    },
    {
      category: 'Learn from the Best',
      icon: 'fas fa-trophy',
      color: 'from-amber-500 to-yellow-500',
      items: ['Case studies', '31 studio teardowns', 'Viral hit analysis', 'High-craft studios', 'Trend-game playbook'],
    },
    {
      category: 'Reference',
      icon: 'fas fa-book',
      color: 'from-blue-500 to-indigo-500',
      items: ['32 engine reference cards', 'Limits & defaults cheat sheet', '250+ symptom fixes', 'API atlas', 'Glossary', '2025-2026 changes'],
    },
  ];

  const trustLabels = [
    { label: 'Roblox docs', desc: 'Official documentation', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { label: 'Measured', desc: 'Tested in a real project', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { label: 'Rule of thumb', desc: 'Craft knowledge', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    { label: 'Unverified', desc: 'Awaiting confirmation', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  ];

  return (
    <section id="vault" ref={ref} className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              What the Vault Contains
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            1,300+ original notes across 59 sections, written for people and AI alike. Every note carries trust labels, common mistakes, and checklists.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {sections.map((section, i) => (
            <div
              key={section.category}
              className="p-6 rounded-2xl bg-[#12122a]/60 border border-purple-500/10 hover:border-purple-500/25 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                  <i className={`${section.icon} text-white text-sm`} />
                </div>
                <h3 className="font-semibold text-white">{section.category}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <i className="fas fa-check text-purple-400/60 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust labels */}
        <div className="p-8 rounded-2xl bg-[#12122a]/80 border border-purple-500/10">
          <h3 className="text-xl font-semibold text-white mb-2">Trust Labels</h3>
          <p className="text-gray-400 text-sm mb-6">Every note is tagged with its confidence level:</p>
          <div className="flex flex-wrap gap-3">
            {trustLabels.map((tl) => (
              <div key={tl.label} className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${tl.color}`}>
                  {tl.label}
                </span>
                <span className="text-xs text-gray-500">{tl.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search example */}
        <div className="mt-8 p-6 rounded-2xl bg-[#12122a]/80 border border-purple-500/10">
          <h3 className="text-lg font-semibold text-white mb-4">
            <i className="fas fa-search text-purple-400 mr-2" />
            Search it yourself
          </h3>
          <div className="space-y-3">
            {[
              'python vault.py "my sword floats away from the hand when I attack"',
              'python vault.py --read "DataStore Fundamentals" "UpdateAsync"',
              'python vault.py --api TeleportService.ReserveServerAsync',
            ].map((cmd) => (
              <div key={cmd} className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a1a] border border-purple-500/10 font-mono text-sm">
                <span className="text-purple-400 select-none">$</span>
                <span className="text-gray-300">{cmd}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Python 3 only, no installs needed.</p>
        </div>
      </div>
    </section>
  );
}
