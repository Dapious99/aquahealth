import Image from 'next/image';

export default function About() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-slate-50 border-b border-slate-100 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Bridging Biology and Silicon.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AquaHealth was founded to stop the devastating financial and ecological losses caused by reactive aquaculture management.
          </p>
        </div>
      </section>
      
      
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To create a world where commercial aquaculture operates with zero preventable yield loss, ensuring sustainable and profitable food security for the next century.
            </p>
          </div>
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-3xl font-bold mb-4 text-brand-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To equip B2B aquaculture organizations with intelligent edge-compute hardware and predictive analytics, shifting the industry from reactive panic to proactive, data-driven management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-4xl font-bold mb-6 text-brand-900">The Core Problem</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In commercial aquaculture, by the time a dissolved oxygen crash or a sea lice infestation is visible to a human technician walking the pen walkway, millions of dollars in yield are already lost. Manual water sampling is slow, error-prone, and impossible to scale across hundreds of active pens.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-semibold">
              We knew that if we could put "eyes" in every tank and connect them to enterprise-grade AI, we could shift the entire industry from reactive panic to proactive management.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
             <Image src="/img/expertise.jpg" alt="Founder in facility" fill className="object-cover" />
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
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6"><Image src="/img/tm1.jpg" alt="Dr. Amara Eze" fill className="object-cover"/></div>
              <h3 className="text-2xl font-bold mb-2">Dr. Amara Eze</h3>
              <p className="text-brand-600 font-bold text-sm mb-4">Co-Founder & CEO, Marine Biologist</p>
              <p className="text-slate-600">Former Director of Operations at SeaHarvest Global. Amara holds a PhD in Marine Pathology and spent 12 years managing commercial offshore salmon pens before pivoting to tech.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl animate-fade-in-up delay-200 text-slate-800 shadow-xl">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6"><Image src="/img/tm1.jpg" alt="Chidi Nze" fill className="object-cover"/></div>
              <h3 className="text-2xl font-bold mb-2">Chidi Nze</h3>
              <p className="text-brand-600 font-bold text-sm mb-4">Co-Founder & CTO, ML Architect</p>
              <p className="text-slate-600">Former Staff Engineer at Microsoft Azure. Chidi architected the computer vision pipeline that powers our real-time edge processing and Azure telemetry integrations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
