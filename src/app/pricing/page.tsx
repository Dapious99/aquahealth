import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="chip mb-6">Early access pricing &middot; Nigeria</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Per-site SaaS subscriptions, priced in naira.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AquaHealth is priced like software, not a service contract: a recurring subscription per site, billed monthly in naira, with nothing to lease, install, or maintain. We're launching with Nigerian fish and shrimp farms first, then expanding across Africa. We're still in early access, so the numbers below are a starting point, not a final rate card.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-50 border-b border-brand-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-sm md:text-base font-semibold text-brand-800 max-w-3xl mx-auto">
            Early access: the first cohort of pilot partners gets full platform access free for 90 days on the plan that fits their site count, in exchange for feedback. Everyone converts to standard subscription pricing after that.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

          <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-sm animate-fade-in-up delay-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-2 text-brand-900">Starter</h3>
            <p className="text-slate-500 mb-8 font-medium">For a single hatchery, RAS facility, or pond joining early access.</p>
            <div className="text-4xl font-black text-brand-900 mb-1">&#8358;75,000<span className="text-lg font-bold text-slate-500">/site/mo</span></div>
            <div className="text-sm font-semibold text-brand-700 mb-8">Free for your first 90 days as a pilot partner</div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="font-semibold">✓ Photo upload &amp; screening dashboard</li>
              <li className="font-semibold">✓ Unlimited team seats for review</li>
              <li className="font-semibold">✓ Standard disease &amp; stress model coverage</li>
              <li className="font-semibold">✓ Email alerts on flagged findings</li>
            </ul>
            <Link href="/contact" className="btn-secondary w-full">Apply for a pilot seat</Link>
          </div>

          <div className="bg-brand-900 text-white p-10 rounded-3xl shadow-2xl animate-fade-in-up delay-200 transform md:-translate-y-4 relative flex flex-col">
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-accent-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest">MOST POPULAR</div>
            <h3 className="text-3xl font-bold mb-2 text-white">Growth</h3>
            <p className="text-brand-200 mb-8 font-medium">For fish and shrimp operators running several sites.</p>
            <div className="text-4xl font-black mb-1 text-white">&#8358;180,000<span className="text-lg font-bold text-brand-200">/site/mo</span></div>
            <div className="text-sm font-semibold text-brand-100 mb-8">Volume discounts kick in past 5 sites</div>
            <ul className="space-y-4 mb-10 text-brand-50 flex-grow">
              <li className="font-semibold">✓ Everything in Starter</li>
              <li className="font-semibold">✓ Multi-site rollout &amp; centralized reporting</li>
              <li className="font-semibold">✓ CSV / email digest export</li>
              <li className="font-semibold">✓ Priority support during onboarding</li>
            </ul>
            <Link href="/contact" className="btn-on-dark w-full">Talk to sales</Link>
          </div>

          <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-sm animate-fade-in-up delay-300 flex flex-col">
            <h3 className="text-3xl font-bold mb-2 text-brand-900">Enterprise</h3>
            <p className="text-slate-500 mb-8 font-medium">For large or integrated aquaculture groups with custom needs.</p>
            <div className="text-4xl font-black text-brand-900 mb-8">Custom<span className="block text-base text-slate-500 font-medium mt-1">priced per facility portfolio</span></div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="font-semibold">✓ Everything in Growth</li>
              <li className="font-semibold">✓ API access for your own systems</li>
              <li className="font-semibold">✓ Custom model tuning per species</li>
              <li className="font-semibold">✓ Dedicated success manager</li>
            </ul>
            <Link href="/contact" className="btn-secondary w-full">Talk to us</Link>
          </div>

        </div>
      </section>
    </div>
  );
}
