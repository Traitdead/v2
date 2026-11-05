import { useEffect, useRef, useState } from 'react';

export default function TokenEfficiency() {
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

  const rows = [
    { label: 'All skills loaded, per session', before: '~1,720 tokens (19 skills)', after: '~1,150 tokens (22 skills)', saving: '33% fewer' },
    { label: 'Knowledge router, on tasks', before: '~1,610 tokens', after: '~940 tokens', saving: '42% fewer' },
    { label: 'One vault search', before: '~745 tokens', after: '~575 tokens, 1 call', saving: '23% fewer' },
    { label: 'Grep + read notes', before: '~1,600 tokens, 3-5 calls', after: '~575 tokens, 1 call', saving: '64% fewer' },
    { label: 'Main-model tokens per run', before: '67k', after: '49k', saving: '27% fewer' },
  ];

  return (
    <section id="efficiency" ref={ref} className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Token-Light by Design
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every skill costs one description line until a task calls for it. A small model does the reading. Lookups run in one call.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl bg-[#12122a]/80 border border-indigo-500/20 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-indigo-500/10 border-b border-indigo-500/20 text-sm font-semibold">
              <div className="col-span-4 text-gray-300">What your AI pays for</div>
              <div className="col-span-3 text-gray-300">Before</div>
              <div className="col-span-3 text-purple-300">Now</div>
              <div className="col-span-2 text-emerald-300">Saving</div>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-12 gap-4 px-6 py-4 text-sm border-b border-purple-500/5 last:border-0 ${i % 2 === 0 ? 'bg-transparent' : 'bg-purple-500/3'}`}
              >
                <div className="col-span-4 text-gray-300 font-medium">{row.label}</div>
                <div className="col-span-3 text-gray-500">{row.before}</div>
                <div className="col-span-3 text-purple-300 font-medium">{row.after}</div>
                <div className="col-span-2">
                  <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    {row.saving}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: 'fas fa-feather', title: 'Loads Only When Needed', desc: 'Each skill costs one description line until a task calls for it' },
              { icon: 'fas fa-microchip', title: 'Small Model Reads', desc: 'Vault lookups run on a fast, cheap model returning only facts' },
              { icon: 'fas fa-bolt', title: 'One-Call Search', desc: 'vault.py ranks 1,300+ notes and prints the best three as summaries' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-[#12122a]/60 border border-indigo-500/10">
                <i className={`${item.icon} text-indigo-400 text-xl mb-3`} />
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
