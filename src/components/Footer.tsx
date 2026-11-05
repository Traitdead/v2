export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-purple-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/20">
                LF
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                LihFolk V2
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Turn your AI into a Roblox game studio. 1,300+ expert notes, 22 skills, token-light by design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub Repository', href: 'https://github.com/lihfolk-cy/v2-vault' },
                { label: 'Releases', href: 'https://github.com/lihfolk-cy/v2-vault/releases' },
                { label: 'CHANGELOG', href: 'https://github.com/lihfolk-cy/v2-vault/blob/main/CHANGELOG.md' },
                { label: 'AGENTS.md', href: 'https://github.com/lihfolk-cy/v2-vault/blob/main/AGENTS.md' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Documentation</h4>
            <ul className="space-y-2">
              {[
                { label: 'REVIEWERS.md', href: 'https://github.com/lihfolk-cy/v2-vault/blob/main/REVIEWERS.md' },
                { label: 'Benchmark Results', href: 'https://github.com/lihfolk-cy/v2-vault/tree/main/benchmark' },
                { label: 'Skills', href: 'https://github.com/lihfolk-cy/v2-vault/tree/main/skills' },
                { label: 'License', href: 'https://github.com/lihfolk-cy/v2-vault/blob/main/LICENSE.md' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Install</h4>
            <div className="p-3 rounded-lg bg-[#12122a] border border-purple-500/10 font-mono text-xs text-gray-400 mb-3">
              /plugin marketplace add<br />
              &nbsp;&nbsp;lihfolk-cy/v2-vault
            </div>
            <a
              href="https://github.com/lihfolk-cy/v2-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/20"
            >
              <i className="fab fa-github" />
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 LihFolk. Not affiliated with or endorsed by Roblox Corporation.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lihfolk-cy/v2-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-300 transition-colors"
            >
              <i className="fab fa-github text-lg" />
            </a>
            <span className="text-xs text-gray-600">
              Vault + Plugin: 41 MB · Complete with assets: 1.3 GB
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
