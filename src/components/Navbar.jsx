import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30">
              <Mail size={16} /> Contact
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg hover:bg-white/5 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md md:hidden">
            <nav className="flex flex-col p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-blue-100/80 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30">
                <Mail size={16} /> Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
