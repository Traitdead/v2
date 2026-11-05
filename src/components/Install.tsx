import { useEffect, useRef, useState } from 'react';

export default function Install() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const installSteps = [
    {
      title: 'Claude Code Plugin',
      icon: 'fas fa-robot',
      color: 'from-purple-500 to-indigo-500',
      commands: [
        { cmd: '/plugin marketplace add lihfolk-cy/v2-vault', id: 'add' },
        { cmd: '/plugin install lihfolk@lihfolk', id: 'install' },
      ],
      note: 'Already installed? Run /plugin marketplace update lihfolk',
    },
    {
      title: 'Obsidian Vault',
      icon: 'fas fa-book-open',
      color: 'from-indigo-500 to-blue-500',
      steps: [
        'Download this repo (Code → Download ZIP) or from Releases',
        'In Obsidian: Open folder as vault → pick "LihFolk Vault V2" folder',
        'Start at 000 Home — the Celestial theme loads automatically',
      ],
    },
    {
      title: 'Other AI Tools',
      icon: 'fas fa-terminal',
      color: 'from-emerald-500 to-teal-500',
      note: 'Works with OpenCode, Codex, Cursor and others. Add to your AGENTS.md:',
      commands: [
        { cmd: 'For Roblox work, follow <path>/AGENTS.md and search the vault before answering.', id: 'agents' },
      ],
    },
  ];

  return (
    <section id="install" ref={ref} className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Install as a Claude Code plugin, open the vault in Obsidian, or use it with any AI tool.
          </p>
        </div>

        <div className={`space-y-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {installSteps.map((step, i) => (
            <div
              key={step.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#12122a]/80 border border-purple-500/10"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <i className={`${step.icon} text-white text-sm`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>

              {step.steps && (
                <ol className="space-y-3 mb-4">
                  {step.steps.map((s, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center mt-0.5">
                        {j + 1}
                      </span>
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              )}

              {step.note && (
                <p className="text-sm text-gray-500 mb-4">{step.note}</p>
              )}

              {step.commands && (
                <div className="space-y-2">
                  {step.commands.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a1a] border border-purple-500/10 group"
                    >
                      <code className="text-sm text-gray-300 font-mono overflow-x-auto">{c.cmd}</code>
                      <button
                        onClick={() => copy(c.cmd, c.id)}
                        className="flex-shrink-0 ml-3 px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-colors"
                      >
                        {copied === c.id ? (
                          <><i className="fas fa-check mr-1" /> Copied</>
                        ) : (
                          <><i className="fas fa-copy mr-1" /> Copy</>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Size comparison */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12122a]/60 border border-purple-500/10">
          <h3 className="text-lg font-semibold text-white mb-4">
            <i className="fas fa-compress-alt text-purple-400 mr-2" />
            Coming from V1?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
              <div className="text-sm text-gray-500 mb-1">V1</div>
              <div className="text-2xl font-bold text-red-400">39 GB</div>
              <div className="text-xs text-gray-500 mt-1">Full download size</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="text-sm text-gray-500 mb-1">V2 (complete with assets)</div>
              <div className="text-2xl font-bold text-emerald-400">1.3 GB</div>
              <div className="text-xs text-gray-500 mt-1">Vault + plugin alone: 41 MB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
