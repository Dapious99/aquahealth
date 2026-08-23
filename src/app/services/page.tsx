import Image from 'next/image';
import { ShieldCheck, Activity, Cpu } from 'lucide-react';

export default function Services() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">End-to-End Enterprise Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We don't just sell software. We provide the complete hardware and analytics stack required to monitor commercial facilities at scale.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 space-y-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="/img/hero.jpg" alt="Edge Hardware Deployment" fill className="object-cover" />
            </div>
            <div className="animate-fade-in-up delay-100">
              <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-6"><Cpu className="h-6 w-6"/></div>
              <h2 className="text-4xl font-bold mb-4 text-brand-900">1. Edge Hardware Deployment</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our operations team visits your facility to deploy our proprietary IP68 underwater camera nodes and multi-parameter sensor arrays. These units are solar-powered, completely wireless, and run neural networks locally on the edge to save bandwidth.
              </p>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Zero disruption to active feeding lines.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Bio-fouling resistant lens coatings.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Cellular/LoRaWAN backhaul for remote offshore pens.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-1 lg:order-2 relative h-[450px] rounded-3xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="/img/expertise.jpg" alt="Cloud Analytics" fill className="object-cover" />
            </div>
            <div className="order-2 lg:order-1 animate-fade-in-up delay-100">
              <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-6"><Activity className="h-6 w-6"/></div>
              <h2 className="text-4xl font-bold mb-4 text-brand-900">2. Continuous ML Analytics</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Once deployed, the nodes continuously stream behavioral telemetry and water quality metadata (DO, pH, Temp, Salinity) to our Azure-hosted cloud environment. Our deep learning models correlate this data to track feed conversion ratios and predict mortality events.
              </p>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Behavioral stress signature identification.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Parasite (Sea Lice) counting and severity mapping.</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-600 h-5 w-5"/> Real-time biomass estimation.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
