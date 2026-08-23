import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Activity, Droplets, ShieldCheck, Cpu, Database, Eye, Shield, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-white pt-24 pb-32">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="z-10 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-brand-900 tracking-tight">
              Safeguarding aquatic yield with precision intelligence.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              AquaHealth empowers commercial hatcheries, cooperative farms, and marine NGOs to shift from reactive treatments to proactive, tank-by-tank management.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary group">
                Deploy with us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
              <Image src="/img/hero.jpg" alt="Marine biologist inspecting aquaculture" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-3xl shadow-xl w-64 md:w-80 animate-fade-in-up delay-400">
              <div className="relative h-40 w-full rounded-2xl overflow-hidden group cursor-pointer">
                <Image src="/img/expertise.jpg" alt="Drone over offshore pens" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-fade-in-up">
            <span className="chip mb-6">Our Mission</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-brand-900">Stop guessing. Start knowing.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Global aquaculture loses billions annually to late-detected parasitic outbreaks and sudden dissolved oxygen crashes. We deploy edge-computing cameras and sensor arrays directly into your commercial pens, processing behavioral data in real-time to alert your operations team days before manual sampling would find a problem.
            </p>
            <Link href="/about" className="btn-secondary group">
              Our origin story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-xl animate-fade-in-up delay-200">
            <Image src="/img/expertise.jpg" alt="AI engineer examining water quality data" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <span className="chip-dark mb-6">Enterprise Capabilities</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-6 text-white">The complete surveillance stack for modern B2B aquaculture.</h2>
            <p className="text-xl text-brand-100 max-w-2xl">Hardware, telemetry, and machine learning combined to bring absolute visibility to your entire portfolio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Link href="/services" className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group shadow-lg block animate-fade-in-up delay-100">
              <Image src="/img/expertise.jpg" alt="Computer Vision Models" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">Behavioral & Lesion Analytics</h3>
                <p className="text-brand-50 mb-6 max-w-2xl text-lg">Our proprietary neural networks track fish velocity, schooling density, and surface lesions to flag pathogenic stress.</p>
                <span className="text-white font-bold flex items-center group-hover:translate-x-2 transition-transform">Explore Analytics <ArrowRight className="ml-2 h-5 w-5"/></span>
              </div>
            </Link>
            
            <Link href="/services" className="relative h-[400px] rounded-3xl overflow-hidden group shadow-lg block animate-fade-in-up delay-200">
              <Image src="/img/hero.jpg" alt="Edge Hardware Deployment" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">IP68 Edge Hardware</h3>
                <p className="text-brand-50 mb-6">Ruggedized underwater camera arrays and multi-parameter sensor probes built for corrosive marine environments.</p>
                <span className="text-white font-bold flex items-center group-hover:translate-x-2 transition-transform">Hardware Specs <ArrowRight className="ml-2 h-5 w-5"/></span>
              </div>
            </Link>
            
            <Link href="/services" className="relative h-[400px] rounded-3xl overflow-hidden group shadow-lg block animate-fade-in-up delay-300">
              <Image src="/img/expertise.jpg" alt="Cloud Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Portfolio Command Center</h3>
                <p className="text-brand-50 mb-6">Aggregate telemetry across dozens of sites to route veterinary resources exactly where needed.</p>
                <span className="text-white font-bold flex items-center group-hover:translate-x-2 transition-transform">View Dashboard <ArrowRight className="ml-2 h-5 w-5"/></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center flex flex-col items-center animate-fade-in-up">
            <span className="chip mb-6">Operational Impact</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-3xl text-brand-900">Transforming how executives manage biological risk.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-fade-in-up delay-100">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-md">
                <Image src="/img/expertise.jpg" alt="Continuous Monitoring" fill className="object-cover" />
              </div>
              <div className="flex gap-4">
                <span className="text-3xl font-black text-brand-300">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-900">Deploy Seamlessly</h3>
                  <p className="text-slate-600 leading-relaxed">Our technicians install solar-powered edge nodes directly onto your pen walkways without disrupting ongoing farm operations.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-md">
                <Image src="/img/hero.jpg" alt="Predictive Alerts" fill className="object-cover" />
              </div>
              <div className="flex gap-4">
                <span className="text-3xl font-black text-brand-300">02</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-900">Monitor Continuously</h3>
                  <p className="text-slate-600 leading-relaxed">Data streams directly into our Azure cloud infrastructure, constantly analyzing feed conversion ratios and stress markers.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-300">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-md">
                <Image src="/img/expertise.jpg" alt="Targeted Action" fill className="object-cover" />
              </div>
              <div className="flex gap-4">
                <span className="text-3xl font-black text-brand-300">03</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-900">Act Decisively</h3>
                  <p className="text-slate-600 leading-relaxed">Receive SMS and dashboard alerts predicting oxygen crashes or sea lice blooms up to 48 hours in advance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band (Azure updated) */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Enterprise-Grade Infrastructure</p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            <span className="flex items-center gap-2 text-slate-700 font-bold px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm"><Database className="h-5 w-5 text-brand-600"/> Hosted on Azure DB</span>
            <span className="flex items-center gap-2 text-slate-700 font-bold px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm"><Cpu className="h-5 w-5 text-brand-600"/> Azure Cognitive Services</span>
            <span className="flex items-center gap-2 text-slate-700 font-bold px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm"><Shield className="h-5 w-5 text-brand-600"/> SOC2 Compliant Data</span>
          </div>
        </div>
      </section>

      
      {/* MVP Traction Metrics */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="animate-fade-in-up">
              <div className="text-4xl lg:text-5xl font-black text-brand-900 mb-2">4</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Pilot Sites</div>
            </div>
            <div className="animate-fade-in-up delay-100">
              <div className="text-4xl lg:text-5xl font-black text-brand-900 mb-2">50k+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Fish Monitored</div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-4xl lg:text-5xl font-black text-brand-900 mb-2">1.2M</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Telemetry Points/Day</div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-4xl lg:text-5xl font-black text-brand-900 mb-2">94%</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Early Detection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement band (white text on dark bg) */}
      <section className="py-32 relative bg-brand-900 text-white overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0">
          <Image src="/img/expertise.jpg" alt="Aerial view of offshore pens" fill className="object-cover opacity-25 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2">
          <div>
            <span className="chip-dark mb-6">The Bottom Line</span>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight text-white">
              Because a 2% drop in mortality saves <span className="text-brand-300 underline decoration-brand-500">millions</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonials (Unique content) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <span className="chip mb-6">Industry Validation</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-brand-900">Trusted by commercial operators globally.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-100">
              <div className="text-6xl font-serif text-brand-300 leading-none mb-4">&ldquo;</div>
              <blockquote className="text-lg text-slate-700 mb-8 font-medium">
                "We operate 14 distinct offshore sites. AquaHealth's Azure dashboard gave our executive team portfolio-wide visibility for the first time. We reduced our emergency veterinary dispatch costs by 42% in Q1 alone."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full bg-brand-900 text-white flex items-center justify-center font-bold text-xl">SJ</div>
                <div>
                  <div className="font-bold text-brand-900">Sarah Jenkins</div>
                  <div className="text-sm text-slate-500">VP of Operations, Oceanic Farms Ltd.</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-200">
              <div className="text-6xl font-serif text-brand-300 leading-none mb-4">&ldquo;</div>
              <blockquote className="text-lg text-slate-700 mb-8 font-medium">
                "The neural net identified a sudden shift in schooling behavior long before our dissolved oxygen sensors tripped an alarm. The early warning allowed us to deploy aerators and completely avert a mass mortality event."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full bg-brand-900 text-white flex items-center justify-center font-bold text-xl">AO</div>
                <div>
                  <div className="font-bold text-brand-900">Dr. Marcus Cole</div>
                  <div className="text-sm text-slate-500">Chief Marine Biologist, Apex Aqua</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in-up delay-300">
              <div className="text-6xl font-serif text-brand-300 leading-none mb-4">&ldquo;</div>
              <blockquote className="text-lg text-slate-700 mb-8 font-medium">
                "We rely on precise feeding windows to maintain margin. The hardware integration was seamless, and the telemetry lets us optimize feed distribution tank-by-tank, drastically reducing waste."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full overflow-hidden relative"><Image src="/img/tm1.jpg" alt="Reviewer" fill className="object-cover"/></div>
                <div>
                  <div className="font-bold text-brand-900">Amara Okafor</div>
                  <div className="text-sm text-slate-500">Director of Hatcheries, Delta Co-op</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Team Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <span className="chip mb-6">Our Team</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-brand-900">A small, technical team building AquaHealth.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Marine biology and machine learning under one roof — close to the organizations that serve commercial growers, close to the models.
            </p>
            <Link href="/about" className="btn-secondary group">
              Read our full story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 animate-fade-in-up delay-100">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                 <Image src="/img/tm1.jpg" alt="Dr. Amara Eze" fill className="object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-brand-900">Dr. Amara Eze</h3>
              <div className="text-brand-600 font-bold text-sm mb-4">Co-founder & CEO</div>
              <p className="text-sm text-slate-600 font-medium">Marine biology and operations background. Works directly with cooperatives and B2B facilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 animate-fade-in-up delay-200">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                 <Image src="/img/tm3.jpg" alt="Chidi Nze" fill className="object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-brand-900">Chidi Nze</h3>
              <div className="text-brand-600 font-bold text-sm mb-4">Co-founder & CTO</div>
              <p className="text-sm text-slate-600 font-medium">Machine-learning engineer. Leads the detection models and Azure/AWS sensor pipeline platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center flex flex-col items-center animate-fade-in-up">
            <span className="chip mb-6">Technical Publications</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-brand-900">Deep dives into aquaculture tech.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {tag: 'Computer Vision', slug: 'cv-in-murky-water', title: 'Training CNNs to track fish velocity in low-visibility marine environments.', img: '/img/expertise.jpg'},
              {tag: 'Infrastructure', slug: 'azure-edge-deployment', title: 'Why we shifted to Azure IoT Edge for disconnected offshore pen analysis.', img: '/img/expertise.jpg'},
              {tag: 'Biology', slug: 'quantifying-sea-lice', title: 'Quantifying sea lice infestation rates using sub-surface camera arrays.', img: '/img/hero.jpg'}
            ].map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-in-up delay-${(i+1)*100}`}>
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                </div>
                <div className="p-8">
                  <span className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3 block">{post.tag}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-600 transition-colors text-brand-900">{post.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-semibold mt-6">
                    Read Whitepaper <ArrowRight className="h-4 w-4 text-brand-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up delay-400">
            <Link href="/blog" className="btn-primary shadow-lg">View all publications</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 relative bg-brand-900 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image src="/img/expertise.jpg" alt="Aerial farm view" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center animate-fade-in-up">
          <h2 className="text-5xl lg:text-7xl font-black leading-tight max-w-4xl mb-10 text-white">Bring absolute clarity to your facility.</h2>
          <Link href="/contact" className="btn-on-dark text-lg px-12 py-5 h-auto group shadow-2xl">
            Start a pilot deployment <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
          </Link>
        </div>
      </section>
    </div>
  );
}
