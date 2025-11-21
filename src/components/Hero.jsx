import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300/80 bg-cyan-400/10 border border-cyan-300/30 rounded-full px-3 py-1 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> Available for work
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            Interactive developer portfolio
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-xl">
            I craft delightful web experiences with React, animations, and 3D. Dive into my featured projects and get in touch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex justify-center rounded-lg bg-white/90 hover:bg-white text-slate-900 px-5 py-3 font-semibold shadow-sm">
              View Projects
            </a>
            <a href="#contact" className="inline-flex justify-center rounded-lg bg-transparent border border-white/40 hover:border-white/70 text-white px-5 py-3 font-semibold">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
