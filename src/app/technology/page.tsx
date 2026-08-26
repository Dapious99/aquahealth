import Image from 'next/image';

export default function Technology() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-brand-900 text-white text-center animate-fade-in-up relative">
        <div className="absolute inset-0 opacity-20"><Image src="/img/hero.jpg" alt="Tech bg" fill className="object-cover mix-blend-luminosity" /></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <span className="chip-dark mb-6">The model</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-white">A vision model, not a camera network.</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Cloud-hosted computer vision that screens ordinary inspection photos — built to run on what you already carry, not on hardware we'd have to ship you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl animate-fade-in-up delay-100">

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-900">Photos in, structured findings out</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              AquaHealth doesn't require underwater cameras, edge boxes, or sensor arrays. Your team uploads a still photo — taken with a phone or an existing facility camera — and our models run in the cloud against it. That's the entire hardware requirement: a camera you already own.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We use object detection and classification techniques trained on labeled aquaculture inspection imagery to flag visual indicators — lesions, fin damage, parasite clustering, and abnormal surface behavior — and return a bounding region with a confidence score, not just a yes/no verdict.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-16 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-900">The cloud stack behind it</h3>
            <p className="text-slate-600 mb-6">None of this lives on your site — it's the cloud infrastructure our software runs on, not equipment we ship you.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">NVIDIA GPUs, cloud-hosted</h4>
                  <p className="text-sm text-slate-600">Model training and inference run on NVIDIA GPU instances in the cloud — this powers how the model learns and scores photos, not a device installed at your facility.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Microsoft Azure Cosmos DB</h4>
                  <p className="text-sm text-slate-600">Findings, confidence scores, and review status are stored in Cosmos DB, giving your team low-latency access to results as soon as a photo is screened.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">AWS S3</h4>
                  <p className="text-sm text-slate-600">Uploaded photos are stored and backed up in S3, so your inspection history stays available and durable independent of any single facility's own systems.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-16 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-900">Where the model stands today</h3>
            <p className="text-slate-600 mb-6">We'd rather tell you the current limits than oversell them. This is an early-stage model that improves as pilot operators confirm and correct its flags.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Trained on labeled inspection photos</h4>
                  <p className="text-sm text-slate-600">Coverage focuses on visual indicators we can validate against real examples, and it grows condition by condition rather than all at once.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Confidence scored, not binary</h4>
                  <p className="text-sm text-slate-600">Every finding carries a confidence percentage so your team can judge how much weight to give it, instead of treating every flag the same.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Human review by default</h4>
                  <p className="text-sm text-slate-600">Nothing dispatches treatment or automated action on its own. Findings go to a review queue for your team to confirm or dismiss.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Your photos, your data</h4>
                  <p className="text-sm text-slate-600">Photos and findings are stored for your account only. With your consent, confirmed and corrected flags help improve detection for your site over time.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
