import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, ScanLine, ClipboardCheck, ShieldCheck, Smartphone, Users, Fish, Waves, Warehouse, Building2 } from 'lucide-react';
import SampleAnalysis from '@/components/SampleAnalysis';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-24">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 animate-fade-in-up">
            <span className="badge-status mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" /> Aquaculture health software &middot; Early access
            </span>
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-brand-900 tracking-tight">
              AI health monitoring for fish farms, hatcheries &amp; shrimp ponds.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
              AquaHealth is B2B SaaS for commercial aquaculture operators, starting with fish and shrimp farms in Nigeria. Upload the inspection photos your team already takes — from tanks, ponds, cages, or raceways — and our vision model flags early signs of disease, stress, and abnormal behavior before they show up in your mortality numbers.
            </p>
            <p className="text-sm font-bold text-brand-700 mb-8 uppercase tracking-wide">No cameras to install. No sensors to wire up. One subscription covers every site you run.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary group">
                Book a walkthrough
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </Link>
              <Link href="#sample-analysis" className="btn-secondary group">
                See a sample analysis
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative h-[420px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
              <Image src="/img/hero.jpg" alt="Farm operator reviewing a facility photo on a tablet" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-6 bg-white p-5 rounded-2xl shadow-xl w-64 animate-fade-in-up delay-400 border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-9 w-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0"><ScanLine className="h-4 w-4"/></span>
                <span className="text-sm font-bold text-brand-900">Flagged for review</span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Fin erosion pattern detected &middot; 82% confidence &middot; Tank 4B</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest framing strip */}
      <section className="py-10 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-sm md:text-base font-semibold text-brand-800 max-w-3xl mx-auto">
            We're early. AquaHealth is a working product in active pilots, not a finished platform — every flag is meant to be reviewed by your team, and we're upfront about what the model does and doesn't cover yet.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="chip mb-6">The problem</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-brand-900">Visual inspection doesn't scale past a handful of sites.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Most disease and stress indicators show up visually first — before water chemistry moves, before mortality spikes. The catch is that spotting them depends on a trained eye walking every tank, pond, or cage, every day, and remembering what changed since yesterday.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-semibold">
              Once a fish or shrimp operation grows past a couple of sites, that just isn't consistent. Photos already get taken on rounds — we built AquaHealth, a B2B SaaS platform, to make sure they get a second, tireless set of eyes.
            </p>
          </div>
          <div className="relative h-[420px] lg:h-[520px] w-full rounded-3xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
            <Image src="/img/facility.jpg" alt="Operator on a walkthrough at a fish farm" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="industries" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-14 animate-fade-in-up">
            <span className="chip mb-6">Built for aquaculture</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-6 text-brand-900">One platform for every kind of fishery operation.</h2>
            <p className="text-lg text-slate-600 max-w-2xl">AquaHealth is purpose-built for commercial aquaculture — not general animal health or consumer wellness. If your team walks tanks, ponds, cages, or raceways for a living, this is for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-100">
              <Fish className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Finfish farms</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Salmon, tilapia, catfish, and other finfish operations running net pens, cages, or ponds.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-200">
              <Waves className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Shrimp &amp; crustacean farms</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Pond-based and intensive shrimp producers screening for stress and disease across grow-out cycles.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-300">
              <Building2 className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Hatcheries &amp; nurseries</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Early-stage rearing operations where catching a problem a day sooner protects an entire cohort.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-400">
              <Warehouse className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">RAS &amp; land-based systems</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Recirculating and indoor operations that need consistent monitoring across many small tanks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <span className="chip-dark mb-6">How it works</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-6 text-white">Three steps, no new hardware.</h2>
            <p className="text-xl text-brand-100 max-w-2xl">A cloud dashboard your whole team logs into — subscribe once, and it covers every tank, pond, or cage across every site. Nothing to bolt on and nothing to wire up before your first flag.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="animate-fade-in-up delay-100 bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6"><Smartphone className="h-6 w-6"/></div>
              <h3 className="text-2xl font-bold mb-3 text-white">1. Upload from any phone</h3>
              <p className="text-brand-100 leading-relaxed">Your team takes the same rounds they already do and uploads photos through our web dashboard — no proprietary camera, no install visit.</p>
            </div>
            <div className="animate-fade-in-up delay-200 bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6"><ScanLine className="h-6 w-6"/></div>
              <h3 className="text-2xl font-bold mb-3 text-white">2. The model screens each photo</h3>
              <p className="text-brand-100 leading-relaxed">A vision model trained on labeled aquaculture inspection images checks for known lesion, parasite, and stress-behavior patterns and scores its confidence.</p>
            </div>
            <div className="animate-fade-in-up delay-300 bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6"><ClipboardCheck className="h-6 w-6"/></div>
              <h3 className="text-2xl font-bold mb-3 text-white">3. Your team reviews and confirms</h3>
              <p className="text-brand-100 leading-relaxed">Flags land in a shared queue, not an autopilot alarm. Confirming or correcting a flag is also how the model gets sharper for your site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive sample analysis */}
      <section id="sample-analysis" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-14 text-center flex flex-col items-center animate-fade-in-up">
            <span className="chip mb-6">Try it</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl text-brand-900">See what a flagged photo looks like.</h2>
            <p className="text-lg text-slate-600 max-w-xl mt-4">A scripted walkthrough of the review experience using illustrated example scenarios — not a live upload yet. Book a call and we'll run it on your real photos.</p>
          </div>
          <div className="animate-fade-in-up delay-100">
            <SampleAnalysis />
          </div>
        </div>
      </section>

      {/* Where we are today (honest MVP framing) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-14 animate-fade-in-up">
            <span className="chip mb-6">Where we are today</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl text-brand-900">Built and running — still early, and we say so.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-100">
              <ShieldCheck className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Working product</h3>
              <p className="text-slate-600 leading-relaxed text-sm">The upload-and-screen pipeline runs today. Model coverage is growing condition by condition, and we tell you where confidence is low.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-200">
              <Users className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Onboarding pilot farms</h3>
              <p className="text-slate-600 leading-relaxed text-sm">We're taking on a small number of design-partner operators to shape the product with real inspection photos, not just our own test set.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-300">
              <Camera className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-brand-900">Human in the loop, on purpose</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Every flag is a suggestion for your team to confirm, not an automated verdict. That's deliberate while the model is still young.</p>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up delay-400">
            <Link href="/contact" className="btn-primary group">
              Book a walkthrough <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <span className="chip mb-6">Our team</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-brand-900">A small, technical team building AquaHealth.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Two co-founders, one product: getting a useful vision model in front of the people who walk the tanks every day.
            </p>
            <Link href="/about" className="btn-secondary group">
              Read our full story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 animate-fade-in-up delay-100">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                 <Image src="/img/expertise.jpg" alt="Onyedika Onuorah Ikechukwu" fill className="object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-brand-900">Onyedika Onuorah Ikechukwu</h3>
              <div className="text-brand-600 font-bold text-sm mb-4">Co-founder & CEO</div>
              <p className="text-sm text-slate-600 font-medium">Leads product and the early pilots — spends most weeks talking to the operators actually using the tool.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 animate-fade-in-up delay-200">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                 <Image src="/img/tm1.jpg" alt="Peace Oyaleke" fill className="object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-brand-900">Peace Oyaleke</h3>
              <div className="text-brand-600 font-bold text-sm mb-4">Co-founder & CTO</div>
              <p className="text-sm text-slate-600 font-medium">Machine-learning engineer. Builds and trains the vision models behind every flagged photo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center flex flex-col items-center animate-fade-in-up">
            <span className="chip mb-6">Field notes</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-brand-900">What we're learning as we build.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {tag: 'Computer Vision', slug: 'cv-in-murky-water', title: 'What a vision model actually looks for in a stressed school of fish.', img: '/img/aquatic.jpg'},
              {tag: 'Product', slug: 'photo-first-approach', title: 'Why we started with photo uploads instead of a hardware install.', img: '/img/facility.jpg'},
              {tag: 'Biology', slug: 'quantifying-sea-lice', title: 'What sea lice look like across a hundred inspection photos.', img: '/img/hero.jpg'}
            ].map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-in-up delay-${(i+1)*100}`}>
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                </div>
                <div className="p-8">
                  <span className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3 block">{post.tag}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-600 transition-colors text-brand-900">{post.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-semibold mt-6">
                    Read more <ArrowRight className="h-4 w-4 text-brand-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center animate-fade-in-up delay-400">
            <Link href="/blog" className="btn-primary shadow-lg">View all posts</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 relative bg-brand-900 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image src="/img/facility.jpg" alt="Aerial farm view" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center animate-fade-in-up">
          <span className="chip-dark mb-6">Early access &middot; limited pilot seats</span>
          <h2 className="text-5xl lg:text-6xl font-black leading-tight max-w-4xl mb-10 text-white">Bring your next inspection photo. We'll show you what it flags.</h2>
          <Link href="/contact" className="btn-on-dark text-lg px-12 py-5 h-auto group shadow-2xl">
            Book a walkthrough <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
          </Link>
        </div>
      </section>
    </div>
  );
}
