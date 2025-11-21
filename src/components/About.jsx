export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About me</h2>
            <p className="mt-4 text-blue-100 leading-relaxed">
              I’m a front-end developer focused on building immersive, performant interfaces. I love combining motion, 3D, and clean design to craft playful yet purposeful experiences.
            </p>
            <p className="mt-3 text-blue-100/80">
              My toolbox includes React, Tailwind, Framer Motion, and Spline. I enjoy rapid prototyping, detail-oriented polish, and thoughtful UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Framer Motion', 'Spline', 'TypeScript', 'Vite'].map((s) => (
                <span key={s} className="text-xs rounded-full bg-white/5 border border-white/10 text-blue-200 px-2 py-1">{s}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold">Highlights</h3>
              <ul className="mt-4 space-y-3 text-blue-200/90 text-sm">
                <li>• 5+ years building web apps</li>
                <li>• Focus on motion and micro-interactions</li>
                <li>• Comfortable across the stack</li>
                <li>• Open-source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(700px_300px_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(600px_300px_at_100%_60%,rgba(34,211,238,0.12),transparent)]" />
    </section>
  )
}
