function Approach() {
  const steps = [
    {
      title: 'Assess',
      desc: 'Current-state review across tech, security, data, processes, and operating model.'
    },
    {
      title: 'Align',
      desc: 'Map business outcomes to technology initiatives with clear ownership and milestones.'
    },
    {
      title: 'Architect',
      desc: 'Define target architecture, security posture, and delivery approach.'
    },
    {
      title: 'Accelerate',
      desc: 'Execute with global resourcing, modern engineering, and measurable KPIs.'
    }
  ]

  return (
    <section id="approach" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Approach</h2>
          <p className="mt-3 text-gray-700">Pragmatic, outcome-driven, and security-first from day one.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="text-2xl font-bold text-gray-900">{s.title}</div>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
