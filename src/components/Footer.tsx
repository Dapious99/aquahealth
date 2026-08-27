import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/brand/aquahealth-logo-horizontal.svg"
                alt="AquaHealth"
                width={220}
                height={49}
                className="h-11 w-auto"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              B2B SaaS health monitoring for commercial aquaculture &mdash; fish farms, shrimp farms, and hatcheries. Upload an inspection photo, get an early flag, no cameras or sensors to install. Currently in early access.
            </p>
                 </div>
          
          <div>
            <h4 className="font-bold text-brand-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-600 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link></li>
              <li><Link href="/technology" className="hover:text-brand-600 transition-colors">Technology</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-900 mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600 transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-900 mb-6 uppercase tracking-wider text-sm">Get in touch</h4>
            <address className="text-sm text-slate-600 not-italic leading-relaxed">
              AquaHealth Technologies Ltd.<br/>
              No 10 Onyeneke<br/>
              Achara Layout, Enugu<br/><br/>
              <a href="mailto:ikechukwu@aquahealth.site" className="hover:text-brand-600 font-semibold transition-colors">ikechukwu@aquahealth.site</a><br/>
              <a href="tel:+2347026763984" className="hover:text-brand-600 font-semibold transition-colors">+234 702 676 3984</a>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} AquaHealth Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-600">Privacy</Link>
            <Link href="#" className="hover:text-brand-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
