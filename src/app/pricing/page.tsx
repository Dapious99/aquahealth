import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="chip mb-6">Early access pricing</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Simple SaaS pricing, no hardware line item.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            You're paying for photo screening and review tooling — nothing to lease, install, or maintain. We're still in early access, so pricing below is a starting point, not a final rate card.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

          <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-sm animate-fade-in-up delay-100 flex flex-col">
            <h3 className="text-3xl font-bold mb-2 text-brand-900">Pilot Partner</h3>
            <p className="text-slate-500 mb-8 font-medium">For single-site hatcheries and RAS facilities joining early access.</p>
            <div className="text-4xl font-black text-brand-900 mb-8">Free during pilot<span className="block text-base text-slate-500 font-medium mt-1">in exchange for feedback</span></div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="font-semibold">✓ Photo upload &amp; screening dashboard</li>
              <li className="font-semibold">✓ Unlimited team seats for review</li>
              <li className="font-semibold">✓ Direct line to the founders</li>
              <li className="font-semibold">✓ Your feedback shapes the roadmap</li>
            </ul>
            <Link href="/contact" className="btn-secondary w-full">Apply for a pilot seat</Link>
          </div>

          <div className="bg-brand-900 text-white p-10 rounded-3xl shadow-2xl animate-fade-in-up delay-200 transform md:-translate-y-4 relative flex flex-col">
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-accent-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-widest">MULTI-SITE</div>
            <h3 className="text-3xl font-bold mb-2 text-white">Growth</h3>
            <p className="text-brand-200 mb-8 font-medium">For operators running several sites who want in ahead of general availability.</p>
            <div className="text-3xl font-black mb-8 text-white">Talk to us<span className="block text-base text-brand-200 font-medium mt-1">priced per facility, once we're out of pilot</span></div>
            <ul className="space-y-4 mb-10 text-brand-50 flex-grow">
              <li className="font-semibold">✓ Everything in Pilot Partner</li>
              <li className="font-semibold">✓ Multi-site rollout support</li>
              <li className="font-semibold">✓ CSV / email digest export</li>
              <li className="font-semibold">✓ Priority support during onboarding</li>
            </ul>
            <Link href="/contact" className="btn-on-dark w-full">Talk to us</Link>
          </div>

        </div>
      </section>
    </div>
  );
}
