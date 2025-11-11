import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        })
      })

      if (res.ok) {
        setStatus('Thanks! We will get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Unable to send right now. Please try later.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s talk</h2>
          <p className="mt-3 text-gray-700">Tell us about your transformation goals. We’ll reach out within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input name="company" placeholder="Company" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" required placeholder="How can we help?" rows="5" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <div className="flex items-center gap-3">
            <button className="inline-flex justify-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Send message</button>
            <div className="text-sm text-gray-600">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
