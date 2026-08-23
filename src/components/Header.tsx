import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group" aria-label="AquaHealth home">
          <Image
            src="/brand/aquahealth-logo-horizontal.svg"
            alt="AquaHealth"
            width={240}
            height={54}
            priority
            className="h-11 w-auto transition-transform group-hover:scale-105"
          />
        </Link>
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">About</Link>
          <Link href="/services" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">Services</Link>
          <Link href="/technology" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">Technology</Link>
          <Link href="/blog" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">Blog</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">
              More <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full right-0 mt-4 w-48 bg-white shadow-xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/pricing" className="px-4 py-3 text-sm font-medium hover:bg-slate-50 text-slate-700 hover:text-brand-600">Pricing</Link>
              <Link href="/contact" className="px-4 py-3 text-sm font-medium hover:bg-slate-50 text-slate-700 hover:text-brand-600">Contact</Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-primary hidden lg:inline-flex group">
            Contact us 
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <button className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-600"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
    </header>
  );
}
