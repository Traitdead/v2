import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: 'fas fa-book', value: '1,300+', label: 'Original Notes', color: 'from-purple-500 to-violet-500' },
    { icon: 'fas fa-puzzle-piece', value: '22', label: 'AI Skills', color: 'from-indigo-500 to-blue-500' },
    { icon: 'fas fa-layer-group', value: '59', label: 'Vault Sections', color: 'from-violet-500 to-purple-500' },
    { icon: 'fas fa-code', value: '1,800+', label: 'Luau Code Blocks', color: 'from-blue-500 to-cyan-500' },
    { icon: 'fas fa-shield-alt', value: '17', label: 'Code Checks', color: 'from-emerald-500 to-teal-500' },
    { icon: 'fas fa-search', value: '250+', label: 'Symptom Fixes', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-[#12122a]/80 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`${stat.icon} text-white text-lg`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
