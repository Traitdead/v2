import { useEffect, useRef, useState } from 'react';

export default function Benchmarks() {
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

  const results = [
    { set: 'C', withPlugin: 91.3, without: 88.3 },
    { set: 'D', withPlugin: 93.7, without: 87.4 },
    { set: 'E', withPlugin: 91.9, without: 84.3 },
    { set: 'F', withPlugin: 92.3, without: 79.2 },
  ];

  return (
    <section id="benchmarks" ref={ref} className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Checked, Not Just Claimed
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fresh, blind-graded test sets. Every answer key checked against Roblox's documentation. Up to 13 points above the same AI without the plugin.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.map((r) => (
              <div key={r.set} className="p-6 rounded-2xl bg-[#12122a]/80 border border-emerald-500/10 text-center">
                <div className="text-sm text-gray-500 mb-2">Test Set {r.set}</div>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">{r.withPlugin}%</div>
                    <div className="text-xs text-gray-500 mt-1">With plugin</div>
                  </div>
                  <div className="text-gray-600">vs</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-500">{r.without}%</div>
                    <div className="text-xs text-gray-500 mt-1">Without</div>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                  +{(r.withPlugin - r.without).toFixed(1)} pts
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart visualization */}
          <div className="p-8 rounded-2xl bg-[#12122a]/80 border border-emerald-500/10">
            <h3 className="text-lg font-semibold text-white mb-6">Accuracy Comparison</h3>
            <div className="space-y-4">
              {results.map((r) => (
                <div key={r.set} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Set {r.set}</span>
                    <span className="text-gray-500">+{(r.withPlugin - r.without).toFixed(1)} pts</span>
                  </div>
                  <div className="relative h-8 bg-gray-800/50 rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg flex items-center justify-end pr-3 transition-all duration-1000"
                      style={{ width: visible ? `${r.without}%` : '0%' }}
                    >
                      <span className="text-xs text-gray-300 font-medium">{r.without}%</span>
                    </div>
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-end pr-3 transition-all duration-1000 delay-300"
                      style={{ width: visible ? `${r.withPlugin}%` : '0%' }}
                    >
                      <span className="text-xs text-white font-medium">{r.withPlugin}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-emerald-600 to-teal-500" />
                <span className="text-gray-400">With LihFolk V2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-gray-600 to-gray-500" />
                <span className="text-gray-400">Same AI without</span>
              </div>
            </div>
          </div>

          {/* Verification badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'fas fa-file-alt', text: 'No made-up APIs — every name checked against real Roblox API' },
              { icon: 'fas fa-code', text: 'All 1,800+ Luau code blocks compile with official compiler' },
              { icon: 'fas fa-balance-scale', text: '39 key limits cross-checked across every note' },
              { icon: 'fas fa-bullseye', text: 'Right note in top 3 for 93% of held-out tasks' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-[#12122a]/40 border border-emerald-500/5">
                <i className={`${item.icon} text-emerald-400 mt-0.5`} />
                <span className="text-sm text-gray-400">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
