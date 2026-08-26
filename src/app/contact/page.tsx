'use client';

import { useState, FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ikechukwu@aquahealth.site';
const SUBMIT_TIMEOUT_MS = 10000;

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return (
    <div className="overflow-hidden">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="chip mb-6">Early access &middot; limited pilot seats</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Book a walkthrough.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We'll show you the product live and, if you'd like, run it on a few of your own inspection photos on the call.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          <div className="animate-fade-in-up delay-100 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-900">Book a walkthrough</h2>

            {status === 'success' ? (
              <div className="rounded-lg bg-green-50 border border-green-200 text-green-800 px-6 py-8 text-center font-semibold">
                Thank you — your request has been sent. Our team will be in touch shortly.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input required name="first_name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input required name="last_name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company / Organization</label>
                  <input required name="company" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Corporate Email</label>
                  <input required name="email" type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Facility details (tanks/ponds, species, how inspections happen today)</label>
                  <textarea required name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow"></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-sm font-semibold text-red-600">
                    Something went wrong sending your request. Please try again, or email us directly at{' '}
                    <a href="mailto:ikechukwu@aquahealth.site" className="underline">ikechukwu@aquahealth.site</a>.
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : 'Book a walkthrough'}
                </button>
              </form>
            )}
          </div>

          <div className="animate-fade-in-up delay-200 pt-8">
            <h2 className="text-3xl font-bold mb-10 text-brand-900">Common Questions</h2>
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Do we need special cameras or sensors?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">No. AquaHealth works with photos from any phone or existing facility camera. There's nothing to install and no site visit required to get started.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">What happens after I book a walkthrough?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">We'll walk you through the product live and, if you're up for it, run a few of your own inspection photos through it on the call so you can see real findings, not a canned demo.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Who owns the photos and data?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">You do. Photos and findings are stored for your account only, and we'll always tell you plainly what we do and don't do with them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
