function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why rAmify Global</h2>
        <p className="mt-4 text-lg text-gray-700">Seasoned operators with board-level and C-suite experience. We bring clarity, speed, and execution excellence to your most critical transformation initiatives.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
          <div className="rounded-xl border border-gray-200 p-5">
            <div className="text-sm font-semibold text-gray-900">Executive Alignment</div>
            <p className="mt-1 text-sm text-gray-700">Stakeholder alignment with measurable outcomes and governance.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <div className="text-sm font-semibold text-gray-900">Security-first</div>
            <p className="mt-1 text-sm text-gray-700">Built-in security and compliance for highly regulated environments.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <div className="text-sm font-semibold text-gray-900">Operator DNA</div>
            <p className="mt-1 text-sm text-gray-700">Hands-on leaders who deliver—not slideware consultants.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
