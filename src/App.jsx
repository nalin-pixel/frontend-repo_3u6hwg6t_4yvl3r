import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} rAmify Global. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#approach" className="hover:text-gray-900">Approach</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
