import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl font-black mb-8 text-brand-900">Privacy Policy</h1>
          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <p>Last updated: August 2026</p>
            <p>At AquaHealth, we take the privacy and security of your facility and operational data seriously. This policy outlines how we collect, process, and protect your information.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">1. Data Collection</h2>
            <p>We collect the inspection photos you upload through our dashboard, along with basic account and facility details you provide. We do not collect data from any hardware, since AquaHealth doesn't require any hardware to install.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">2. Data Storage</h2>
            <p>Uploaded photos and findings are stored for your account only and encrypted in transit. We are an early-stage product and have not yet completed a formal compliance certification (e.g. SOC2) — we'll say so plainly if that changes. We do not sell your data to third parties.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">3. Contact Us</h2>
            <p>For data removal requests or compliance audits, contact our security team at ikechukwu@aquahealth.site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
