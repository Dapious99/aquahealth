import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Field Notes</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Notes from building an AI photo-screening product for fish farm operators, in the open, while it's still early.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {tag: 'Aquaculture', title: 'Why catching pathogen outbreaks early changes the whole season'},
            {tag: 'Product', title: 'Why we started with photo uploads instead of a hardware install'},
            {tag: 'Technology', title: 'What a vision model actually looks for in a stressed school of fish'}
          ].map((post, i) => (
            <Link href="#" key={i} className={`bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group animate-fade-in-up delay-${(i+1)*100}`}>
              <div className="relative h-56 bg-slate-200 overflow-hidden">
                <Image src="/img/hero.jpg" alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
              <div className="p-8">
                <span className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3 block">{post.tag} &middot; Draft</span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 mb-6 line-clamp-3">Most yield loss to disease is decided in the first days after onset. Here's why photo-level detection your team can review beats waiting for the next full walkthrough.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
