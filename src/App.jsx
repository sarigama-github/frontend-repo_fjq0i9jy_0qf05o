import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_300px_at_100%_10%,rgba(59,130,246,0.08),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-12 text-center text-blue-200/70">
          © {new Date().getFullYear()} • Built with love and good vibes
        </footer>
      </main>
    </div>
  )
}

export default App
