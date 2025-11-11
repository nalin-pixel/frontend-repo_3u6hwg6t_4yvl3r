import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-24 sm:py-28 lg:py-32">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">Technology • Strategy • Execution</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Digital Transformation, Simplified.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700">
              Strategic advisory for CTOs, CIOs, and CISOs. We help Fortune 500s, PE/VC-backed firms, and startups align technology with business outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Talk to an expert</a>
              <a href="#services" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">Explore services</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
