import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will be in touch shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-2 text-blue-200/80">Tell me about your project or just say hi.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <input name="name" required placeholder="Name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" />
          <input type="email" name="email" required placeholder="Email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" />
          <textarea name="message" required placeholder="Message" rows="5" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" />
          <button className="mt-2 inline-flex justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-600/30">Send message</button>
          {status && <p className="text-sm text-blue-100">{status}</p>}
        </form>
      </div>
    </section>
  )
}
