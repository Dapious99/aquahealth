import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-slate-50 border-b border-slate-100 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="chip mb-6">B2B SaaS &middot; Early access</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Bridging biology and vision models.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AquaHealth started because visual inspection — the thing that actually catches most problems early in fish and shrimp farming — doesn't scale past a handful of sites. We're building the software layer that gives it a second set of eyes.
          </p>
        </div>
      </section>


      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              A world where no commercial fishery — finfish, shrimp, or hatchery — loses yield to a problem that was visible in a photo days before it became a crisis.
            </p>
          </div>
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To give B2B aquaculture operators — starting in Nigeria, then across Africa — a subscription AI copilot that reads the inspection photos they already take and turns them into early, reviewable flags — no hardware to buy or install.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 text-brand-900">The Core Problem</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In commercial aquaculture, by the time a stress event or a parasite outbreak is obvious to everyone on the team, days of preventable yield are already lost. Manual visual inspection works, but it depends entirely on a trained eye covering every tank, every day, and remembering what looked different yesterday. Past a few sites, that's not consistent — it's just hope.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-semibold">
              We started AquaHealth on a simple bet: your team is already taking inspection photos. If a model can read those photos as well as a second technician, you don't need new hardware — you need a second opinion that never gets tired.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
             <Image src="/img/facility.jpg" alt="Aquaculture facility" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Founding Team</h2>
            <p className="text-xl text-brand-100 max-w-2xl mx-auto">Deep expertise across commercial hatchery operations and hyper-scale cloud AI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl animate-fade-in-up delay-100 text-slate-800 shadow-xl">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6"><Image src="/img/expertise.jpg" alt="Onyedika Onuorah Ikechukwu" fill className="object-cover"/></div>
              <h3 className="text-2xl font-bold mb-2">Onyedika Onuorah Ikechukwu</h3>
              <p className="text-brand-600 font-bold text-sm mb-4">Co-Founder &amp; CEO</p>
              <p className="text-slate-600 mb-5">Co-founder of AquaHealth. Leads product and spends most weeks talking directly to the early pilot operators using the tool.</p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/onyedika-onuorah-26b46a384"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-slate-400 hover:text-brand-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/share/19Pg4WcNwq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook profile"
                  className="text-slate-400 hover:text-brand-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </Link>
                <Link
                  href="https://x.com/ikechukwu_z"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) profile"
                  className="text-slate-400 hover:text-brand-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl animate-fade-in-up delay-200 text-slate-800 shadow-xl">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6"><Image src="/img/tm1.jpg" alt="Chidi Nze" fill className="object-cover"/></div>
              <h3 className="text-2xl font-bold mb-2">Peace Oyaleke</h3>
              <p className="text-brand-600 font-bold text-sm mb-4">Co-Founder & CTO, ML Architect</p>
              <p className="text-slate-600">Peace builds and trains the computer vision models behind every flagged photo, and the pipeline that turns an upload into a reviewable finding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
