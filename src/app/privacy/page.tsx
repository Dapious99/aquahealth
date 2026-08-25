import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl font-black mb-8 text-brand-900">Privacy Policy</h1>
          <div className="prose prose-lg prose-slate max-w-none text-slate-700">
            <p>Last updated: August 2026</p>
            <p>At AquaHealth, we take the privacy and security of your biological and operational data seriously. This policy outlines how we collect, process, and protect your information.</p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">1. Data Collection</h2>
            <p>We collect telemetry data from hardware deployed at your facility, including but not limited to dissolved oxygen, pH, salinity, and optical video feeds (processed locally at the edge).</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">2. Azure Data Storage</h2>
            <p>All transmitted data is encrypted in transit and at rest within SOC2 compliant Microsoft Azure databases. We do not sell your operational metrics to third parties.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-900">3. Contact Us</h2>
            <p>For data removal requests or compliance audits, contact our security team at ikechukwu@aquahealth.site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
