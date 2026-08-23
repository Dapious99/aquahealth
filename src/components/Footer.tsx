import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-md">AQ</div>
              <span className="text-2xl font-black text-brand-900 tracking-tight">AquaHealth&trade;</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Grow more from every pen. AI aquatic intelligence for aquaculture enterprises — facility-level insight across every farm you operate.
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
              Marine Innovation Hub<br/>
              Harborside Way<br/>
              Seattle, WA 98101<br/><br/>
              <a href="mailto:hello@aquahealth.example.com" className="hover:text-brand-600 font-semibold transition-colors">hello@aquahealth.example.com</a><br/>
              <a href="tel:+15551234567" className="hover:text-brand-600 font-semibold transition-colors">+1 (555) 123-4567</a>
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
