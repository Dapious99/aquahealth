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
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-brand-900">Let's audit your facilities.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Speak with our engineering team to map out a pilot deployment for your commercial pens.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          <div className="animate-fade-in-up delay-100 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-brand-900">Request a Deployment Audit</h2>

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
                  <label className="block text-sm font-bold text-slate-700 mb-2">Facility Details (Volume, Type)</label>
                  <textarea required name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow"></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-sm font-semibold text-red-600">
                    Something went wrong sending your request. Please try again, or email us directly at{' '}
                    <a href="mailto:ikechukwu@aquahealth.site" className="underline">ikechukwu@aquahealth.site</a>.
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          <div className="animate-fade-in-up delay-200 pt-8">
            <h2 className="text-3xl font-bold mb-10 text-brand-900">Common Questions</h2>
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">How quickly can you deploy?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">For standard RAS and offshore layouts, our sensor nodes can be deployed, calibrated, and feeding data to Azure within 14 days of contract signing.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Do you integrate with existing hardware?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Yes, our platform is hardware-agnostic. We ingest SCADA data via standard APIs from most major aquaculture sensor manufacturers, augmenting it with our computer vision feeds.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xl mb-3 text-brand-900">Who owns the biological data?</h4>
                <p className="text-slate-600 leading-relaxed font-medium">You do. We process telemetry to provide alerts, but your raw operational data belongs entirely to your organization, secured in SOC2 compliant databases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
