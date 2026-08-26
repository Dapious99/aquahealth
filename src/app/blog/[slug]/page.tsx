import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock data fetching based on slug
  const titleMap: Record<string, string> = {
    'cv-in-murky-water': 'What a vision model actually looks for in a stressed school of fish.',
    'photo-first-approach': 'Why we started with photo uploads instead of a hardware install.',
    'quantifying-sea-lice': 'What sea lice look like across a hundred inspection photos.'
  };

  const title = titleMap[params.slug] || 'AquaHealth Field Notes';

  return (
    <div className="overflow-hidden bg-white">
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl animate-fade-in-up">
          <Link href="/blog" className="inline-flex items-center text-brand-600 font-bold mb-10 hover:text-brand-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2"/> Back to field notes
          </Link>
          <span className="chip mb-6">Draft &middot; Field notes</span>
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 text-brand-900">{title}</h1>
          <div className="flex items-center gap-4 text-slate-500 font-medium pb-8 border-b border-slate-100">
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-700">AQ</div>
            <div>
              <div className="text-brand-900 font-bold">AquaHealth Team</div>
              <div className="text-sm">Early access &middot; 6 min read</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl animate-fade-in-up delay-100 prose prose-lg prose-slate prose-headings:text-brand-900 prose-a:text-brand-600">
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            Every operator we've talked to already takes inspection photos. Almost none of them do anything with the ones that don't get flagged in the moment — they just sit in a camera roll. That gap is the whole product.
          </p>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden my-12 shadow-xl">
             <Image src="/img/hero.jpg" alt="Operator reviewing an inspection photo" fill className="object-cover" />
          </div>
          <h2 className="text-3xl font-bold mb-6 mt-12 text-brand-900">Why we didn't build a camera</h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            It would have been easy to pitch a proprietary underwater camera and call it "AI aquaculture." It's a familiar story for investors and it looks impressive on a spec sheet. It's also a slower, more expensive way to get to the same outcome: a photo the model can read.
          </p>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Almost every operator we spoke to during early customer discovery already carries a phone on rounds, and most facilities already have some kind of camera somewhere. The bottleneck was never image capture — it was that nobody was doing anything with those photos beyond a quick glance.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-brand-900">What the model is actually trained to catch</h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Our model is trained on labeled aquaculture inspection imagery to recognize visual patterns — lesions, fin damage, parasite clustering, abnormal surface behavior — the same things an experienced technician learns to notice over years on the job. It doesn't replace that judgment; it applies it consistently to every photo, every time, instead of only the ones someone happened to look at closely.
          </p>
          <blockquote className="border-l-4 border-brand-500 pl-6 my-10 italic text-xl text-slate-600 font-medium">
            "We didn't want to ship a hardware promise we couldn't keep in an MVP. We wanted the smallest thing that could actually be useful on day one."
          </blockquote>
          <p className="mb-16 text-slate-700 leading-relaxed">
            That's still where we are: a working photo-screening pipeline, a small number of pilot farms putting real photos through it, and a model that gets better every time someone on a pilot team confirms or corrects a flag.
          </p>
        </div>
      </section>
    </div>
  );
}
