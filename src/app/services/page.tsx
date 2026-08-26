import Image from 'next/image';
import { ShieldCheck, Smartphone, ScanLine } from 'lucide-react';

export default function Services() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="chip mb-6">How it works</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">A software layer, not a hardware install.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We don't sell cameras, sensors, or edge boxes. AquaHealth reads the inspection photos your team already takes and puts findings in front of the right person.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 space-y-32">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="/img/hero.jpg" alt="Operator uploading an inspection photo from a tablet" fill className="object-cover" />
            </div>
            <div className="animate-fade-in-up delay-100">
              <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-6"><Smartphone className="h-6 w-6"/></div>
              <h2 className="text-4xl font-bold mb-4 text-brand-900">1. Upload photos from what you already have</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Your team takes photos on their regular rounds — phone, tablet, or an existing facility camera — and uploads them through the AquaHealth dashboard. There's no site visit, no install, and nothing to bolt onto a tank.
              </p>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> Works with any phone or camera you already carry.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> No proprietary hardware, contracts, or maintenance visits.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> Fits into rounds your team is already doing.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-1 lg:order-2 relative h-[450px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="/img/facility.jpg" alt="Dashboard review of flagged inspection photos" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 animate-fade-in-up delay-100">
              <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-6"><ScanLine className="h-6 w-6"/></div>
              <h2 className="text-4xl font-bold mb-4 text-brand-900">2. The model screens every photo, your team decides</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Each upload is screened by a vision model trained on labeled aquaculture inspection images. Findings land in a shared queue with a confidence score — your team confirms, dismisses, or escalates. Nothing acts on its own.
              </p>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> Screens for common lesion, parasite, and stress-behavior patterns.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> Every flag ships with a confidence score, not a bare alarm.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5 flex-shrink-0"/> Confirmed and corrected flags feed back into the model for your site.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
