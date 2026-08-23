import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock data fetching based on slug
  const titleMap: Record<string, string> = {
    'cv-in-murky-water': 'Training CNNs to track fish velocity in low-visibility marine environments.',
    'azure-edge-deployment': 'Why we shifted to Azure IoT Edge for disconnected offshore pen analysis.',
    'quantifying-sea-lice': 'Quantifying sea lice infestation rates using sub-surface camera arrays.'
  };
  
  const title = titleMap[params.slug] || 'B2B Aquaculture Technology Insights';
  
  return (
    <div className="overflow-hidden bg-white">
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl animate-fade-in-up">
          <Link href="/blog" className="inline-flex items-center text-brand-600 font-bold mb-10 hover:text-brand-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2"/> Back to Publications
          </Link>
          <span className="chip mb-6">Technical Whitepaper</span>
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 text-brand-900">{title}</h1>
          <div className="flex items-center gap-4 text-slate-500 font-medium pb-8 border-b border-slate-100">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-700">AQ</div>
            <div>
              <div className="text-brand-900 font-bold">AquaHealth Engineering Team</div>
              <div className="text-sm">Published May 2026 &middot; 8 min read</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl animate-fade-in-up delay-100 prose prose-lg prose-slate prose-headings:text-brand-900 prose-a:text-brand-600">
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            Deploying computer vision in a sterile lab is straightforward. Deploying it into a high-density, bio-fouling, low-light commercial salmon pen is an entirely different engineering challenge.
          </p>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden my-12 shadow-xl">
             <Image src="/img/hero.jpg" alt="Drone over pens" fill className="object-cover" />
          </div>
          <h2 className="text-3xl font-bold mb-6 mt-12 text-brand-900">The Problem with Traditional Models</h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Standard object detection architectures like YOLOv8 are highly optimized for terrestrial edge computing. However, when applied to turbid water with heavy particulate matter, false positive rates skyrocket.
          </p>
          <p className="mb-6 text-slate-700 leading-relaxed">
            In our latest deployment off the coast of Norway, we observed that rapid shifts in current created visual artifacting that naive models interpreted as erratic schooling behavior (a key indicator of stress).
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12 text-brand-900">Integrating Azure IoT Edge</h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            To combat this, we shifted our architecture to utilize Microsoft Azure IoT Edge. By processing the raw tensor arrays directly on the camera node using NVIDIA Jetson hardware, we were able to run a secondary optical flow algorithm to subtract background current artifacts before the CNN processes the frame.
          </p>
          <blockquote className="border-l-4 border-brand-500 pl-6 my-10 italic text-xl text-slate-600 font-medium">
            "By pushing the compute strictly to the edge, we reduced our cellular data transmission costs by 94%, while simultaneously increasing the accuracy of our parasitic sea lice counts by 41%."
          </blockquote>
          <p className="mb-16 text-slate-700 leading-relaxed">
            This capability allows commercial facilities to maintain real-time visibility into their biomass health without relying on perfect underwater visibility or expensive broadband links.
          </p>
        </div>
      </section>
    </div>
  );
}
