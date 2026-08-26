import Link from 'next/link';

export default function Terms() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl font-black mb-8 text-brand-900">Terms of Service</h1>
          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <p>Last updated: August 2026</p>
            <p>These terms govern your use of the AquaHealth photo-screening platform. AquaHealth is a software product — we do not sell, lease, or install any hardware.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">1. Early access status</h2>
            <p>AquaHealth is an early-access product under active development. Model coverage and accuracy are improving over time and are not guaranteed to be complete or error-free. Findings are advisory and require review by your team before any operational decision is made.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">2. Service availability</h2>
            <p>We do not currently offer a formal uptime SLA. As an early-access product, the service operates on a best-effort basis, and we'll be upfront with pilot partners about any outages or degraded performance.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">3. Liability</h2>
            <p>AquaHealth provides screening suggestions based on uploaded photos, not diagnoses or guarantees. We are not liable for mass mortality events or yield losses. Operational decisions remain the responsibility of your facility's management.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
