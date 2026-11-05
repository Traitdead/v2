import { useEffect, useRef, useState } from 'react';

export default function Features() {
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

  const features = [
    {
      icon: 'fas fa-route',
      title: 'Knowledge Router',
      desc: 'Finds the right notes for each task and applies their mistakes and checklists. Checks every API name it cites.',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: 'fas fa-cubes',
      title: 'Systems Library',
      desc: '19 drop-in typed Luau modules: validated remotes, session-locked data, idempotent purchases, shop, eggs, codes, daily rewards, rebirth, quests, leaderboards.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Combat & Ability VFX',
      desc: 'Projectiles, auras, AoE warnings, shields, beam lasers, heals, teleports, level-up bursts, camera shake and hit-stop with budgets and server-validated replication.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: 'fas fa-volume-up',
      title: 'Sound Effects',
      desc: 'Layered, pooled combat and UI sounds synced to animation markers, sourced only from properly licensed audio.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: 'fas fa-palette',
      title: 'UI & Figma',
      desc: 'Cartoon/simulator kit, responsive UI for phone, PC and console, and Figma frames to Roblox ScreenGuis conversion.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: 'fas fa-globe',
      title: 'Worldbuilding',
      desc: 'Maps, towns, dungeons and lobbies with five build passes, composition, lighting, budgets, placement and audit tools.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: 'fas fa-cube',
      title: '3D Modelling',
      desc: 'Blender modelling with automatic quality gate, correct export, stylised-creature builder, and model import pipeline.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Game Design',
      desc: 'Tutorials and onboarding that keep new players, plus the trend-game playbook for building viral hits.',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Performance',
      desc: 'Secure remotes, DataStore safety, anti-exploit review, monetization compliance, performance audits and debugging.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: 'fas fa-check-double',
      title: 'Quality Control',
      desc: 'Hook checks every Luau file for 17 common mistakes. Generated work must score 8.5/10. Blind multi-agent council for verdicts.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: 'fas fa-box-open',
      title: 'Asset Pack Finder',
      desc: 'Searches the asset pack catalogues and provides import steps for models, materials, skies, animations and VFX.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learn from the Best',
      desc: 'Case studies and 31 teardowns of viral hits and high-craft studios. Every note has trust labels and checklists.',
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              What the Plugin Does
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            22 skills covering every aspect of Roblox game development — from scripting to art, security to monetization.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-[#12122a]/60 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-white text-lg`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
