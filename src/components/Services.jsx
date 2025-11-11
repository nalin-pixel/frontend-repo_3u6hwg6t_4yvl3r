function Services() {
  const items = [
    {
      title: 'Technology Assessment & Strategy',
      desc: 'Deep-dive on architecture, processes, and teams to build a pragmatic roadmap aligned to outcomes.'
    },
    {
      title: 'Cloud Strategy (AWS • Azure • GCP)',
      desc: 'Native, multi-cloud, or hybrid approaches for resiliency, cost, performance, and migrations.'
    },
    {
      title: 'Rationalization & Modernization',
      desc: 'Retire, consolidate, or re-platform legacy systems to streamline processes and reduce cost.'
    },
    {
      title: 'Legacy System Refactoring',
      desc: 'Refactor monoliths into maintainable, secure, integration-ready services.'
    },
    {
      title: 'CRM / ERP / HRIS Rollouts',
      desc: 'Global deployments across Salesforce, Oracle, NetSuite, SAP, Workday, and more.'
    },
    {
      title: 'Cost Optimization & Global Resourcing',
      desc: 'Lower software, cloud, and vendor spend; build high-performance global delivery models.'
    }
  ]

  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Services</h2>
          <p className="mt-3 text-gray-700">A holistic approach that aligns technology and infrastructure with your business goals.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
