import Link from 'next/link';

export default function Terms() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl font-black mb-8 text-brand-900">Terms of Service</h1>
          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <p>Last updated: August 2026</p>
            <p>These terms govern your use of the AquaHealth platform and hardware.</p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">1. Hardware Leases</h2>
            <p>Edge nodes deployed at your facility remain the property of AquaHealth. You are responsible for protecting the hardware from physical damage beyond normal marine wear and tear.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">2. Service Level Agreement (SLA)</h2>
            <p>Enterprise tiers guarantee 99.9% uptime for the Azure cloud dashboard. Standard pilots operate on a best-effort basis.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">3. Liability</h2>
            <p>AquaHealth provides predictive analytics. We are not liable for mass mortality events or yield losses. Operational interventions remain the responsibility of your facility's management.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
