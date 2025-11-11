import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-purple-600" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">rAmify Global</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#approach" className="hover:text-gray-900">Approach</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Contact</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-gray-700">
              <a href="#services" className="rounded-md px-3 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>Services</a>
              <a href="#approach" className="rounded-md px-3 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>Approach</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" className="rounded-md px-3 py-2 bg-gray-900 text-white" onClick={() => setOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
