export default function Contact() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Let's audit your facilities.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Speak with our engineering team to map out a pilot deployment for your commercial pens.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          <div className="animate-fade-in-up delay-100 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-900">Request a Deployment Audit</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company / Organization</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Corporate Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Facility Details (Volume, Type)</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow"></textarea>
              </div>
              <button type="button" className="btn-primary w-full">Submit Request</button>
            </form>
          </div>
          
          <div className="animate-fade-in-up delay-200 pt-8">
            <h2 className="text-3xl font-bold mb-10 text-brand-900">Common Questions</h2>
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">How quickly can you deploy?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">For standard RAS and offshore layouts, our sensor nodes can be deployed, calibrated, and feeding data to Azure within 14 days of contract signing.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Do you integrate with existing hardware?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Yes, our platform is hardware-agnostic. We ingest SCADA data via standard APIs from most major aquaculture sensor manufacturers, augmenting it with our computer vision feeds.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Who owns the biological data?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">You do. We process telemetry to provide alerts, but your raw operational data belongs entirely to your organization, secured in SOC2 compliant databases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
