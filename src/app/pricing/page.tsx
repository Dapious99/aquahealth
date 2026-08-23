import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">B2B SaaS Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparent OpEx pricing models that scale with your production volume. Hardware is leased, meaning zero maintenance overhead for your team.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          
          <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-sm animate-fade-in-up delay-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-2 text-brand-900">Facility Pilot</h3>
            <p className="text-slate-500 mb-8 font-medium">For single-site hatcheries and RAS facilities.</p>
            <div className="text-5xl font-black text-brand-900 mb-8">TBD<span className="text-xl text-slate-500 font-medium">/pilot</span></div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="font-semibold">✓ Up to 10 Edge Camera Nodes included</li>
              <li className="font-semibold">✓ 24/7 Pathogen Alerting Dashboard</li>
              <li className="font-semibold">✓ Weekly Biomass Reports</li>
              <li className="font-semibold">✓ Standard 9-5 Support</li>
            </ul>
            <Link href="/contact" className="btn-secondary w-full">Request Quote</Link>
          </div>
          
          <div className="bg-brand-900 text-white p-10 rounded-3xl shadow-2xl animate-fade-in-up delay-200 transform md:-translate-y-4 relative flex flex-col">
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-accent-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest">PORTFOLIO SCALE</div>
            <h3 className="text-3xl font-bold mb-2 text-white">Enterprise Network</h3>
            <p className="text-brand-200 mb-8 font-medium">For multi-site offshore and corporate aquaculture groups.</p>
            <div className="text-4xl font-black mb-8 text-white">Custom Volume<span className="text-xl text-brand-200 font-medium">/tiered</span></div>
            <ul className="space-y-4 mb-10 text-brand-50 flex-grow">
              <li className="font-semibold">✓ Unlimited Edge Camera Nodes</li>
              <li className="font-semibold">✓ Automated Dosing System Integration (API)</li>
              <li className="font-semibold">✓ Custom Azure Data Lakes</li>
              <li className="font-semibold">✓ Single Sign-On (SSO)</li>
              <li className="font-semibold">✓ Dedicated Marine Biologist Account Manager</li>
            </ul>
            <Link href="/contact" className="btn-on-dark w-full">Contact Enterprise Sales</Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
