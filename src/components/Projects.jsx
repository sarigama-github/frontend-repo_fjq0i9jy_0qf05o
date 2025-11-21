export default function Projects() {
  const projects = [
    {
      title: 'Realtime Collaboration Tool',
      description: 'WebSocket-powered collaborative editor with presence and CRDTs.',
      tags: ['React', 'WebSockets', 'CRDT'],
      link: '#',
    },
    {
      title: '3D Product Configurator',
      description: 'Interactive 3D experience with Spline, allowing live customization.',
      tags: ['Spline', 'Three.js', 'UX'],
      link: '#',
    },
    {
      title: 'AI Prompt Engine',
      description: 'Composable prompt building UI with history, templates, and analytics.',
      tags: ['TypeScript', 'AI', 'Design'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(400px_200px_at_20%_80%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-blue-200/80">A selection of things I loved building recently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 hover:border-cyan-300/30 hover:bg-slate-900/80 transition-colors">
              <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(200px_100px_at_30%_30%,rgba(56,189,248,0.15),transparent),radial-gradient(200px_100px_at_70%_70%,rgba(59,130,246,0.15),transparent)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 text-blue-200 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
