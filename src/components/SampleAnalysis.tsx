'use client';

import { useState } from 'react';
import { Loader2, ScanLine, TriangleAlert, CircleCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Finding = {
  label: string;
  confidence: number;
  severity: 'flag' | 'monitor' | 'clear';
  box: { x: number; y: number; w: number; h: number };
};

type Sample = {
  id: string;
  name: string;
  water: string;
  findings: Finding[];
  summary: string;
};

const SAMPLES: Sample[] = [
  {
    id: 'routine',
    name: 'Routine pond check',
    water: '#0c4a6e',
    findings: [
      { label: 'No visible lesions', confidence: 91, severity: 'clear', box: { x: 22, y: 34, w: 20, h: 16 } },
      { label: 'Slight surface clustering — monitor', confidence: 64, severity: 'monitor', box: { x: 55, y: 48, w: 26, h: 20 } },
    ],
    summary: 'Nothing urgent. One low-confidence pattern worth a second look on the next pass.',
  },
  {
    id: 'lesion',
    name: 'Possible fin damage',
    water: '#075985',
    findings: [
      { label: 'Fin erosion pattern — flag for review', confidence: 82, severity: 'flag', box: { x: 40, y: 30, w: 24, h: 22 } },
      { label: 'Surrounding stock — no visible signs', confidence: 88, severity: 'clear', box: { x: 12, y: 55, w: 18, h: 14 } },
    ],
    summary: 'One region flagged above your review threshold. Everything else in frame reads clear.',
  },
  {
    id: 'clustering',
    name: 'Dense surface clustering',
    water: '#0369a1',
    findings: [
      { label: 'Abnormal surface clustering — flag for review', confidence: 76, severity: 'flag', box: { x: 30, y: 20, w: 40, h: 30 } },
      { label: 'Lower tank — normal distribution', confidence: 85, severity: 'clear', box: { x: 15, y: 62, w: 20, h: 16 } },
    ],
    summary: 'Clustering near the surface can precede an oxygen or stress event — flagged for same-day review.',
  },
];

const severityStyle: Record<Finding['severity'], { stroke: string; badge: string; icon: React.ReactNode }> = {
  flag: { stroke: '#f97316', badge: 'bg-orange-100 text-orange-700', icon: <TriangleAlert className="h-4 w-4" /> },
  monitor: { stroke: '#eab308', badge: 'bg-yellow-100 text-yellow-700', icon: <ScanLine className="h-4 w-4" /> },
  clear: { stroke: '#22c55e', badge: 'bg-green-100 text-green-700', icon: <CircleCheck className="h-4 w-4" /> },
};

function TankIllustration({ sample }: { sample: Sample }) {
  return (
    <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`water-${sample.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={sample.water} stopOpacity="0.55" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="100" height="75" fill={`url(#water-${sample.id})`} />
      {Array.from({ length: 26 }).map((_, i) => {
        const seed = (i * 37 + sample.id.length * 13) % 100;
        const x = (seed * 0.9 + i * 3) % 96;
        const y = (i * 11 + seed) % 68;
        const rot = (seed * 7) % 40 - 20;
        return (
          <ellipse
            key={i}
            cx={x + 2}
            cy={y + 2}
            rx="2.6"
            ry="1.1"
            fill="#e2e8f0"
            fillOpacity="0.85"
            transform={`rotate(${rot} ${x + 2} ${y + 2})`}
          />
        );
      })}
    </svg>
  );
}

export default function SampleAnalysis() {
  const [activeId, setActiveId] = useState(SAMPLES[0].id);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const active = SAMPLES.find((s) => s.id === activeId) ?? SAMPLES[0];

  function runAnalysis(id: string) {
    setActiveId(id);
    setStatus('scanning');
    window.setTimeout(() => setStatus('done'), 1100);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-3">
        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-900/10 bg-slate-900">
          <TankIllustration sample={active} />

          {status === 'scanning' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-[1px]">
              <Loader2 className="h-8 w-8 text-white animate-spin mb-3" />
              <span className="text-white font-semibold text-sm tracking-wide">Screening photo…</span>
            </div>
          )}

          {status === 'done' &&
            active.findings.map((f, i) => {
              const style = severityStyle[f.severity];
              return (
                <div
                  key={i}
                  className="absolute animate-fade-in border-2 rounded-md"
                  style={{
                    left: `${f.box.x}%`,
                    top: `${f.box.y}%`,
                    width: `${f.box.w}%`,
                    height: `${f.box.h}%`,
                    borderColor: style.stroke,
                    boxShadow: `0 0 0 3px ${style.stroke}22`,
                  }}
                >
                  <span
                    className="absolute -top-3 left-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white shadow"
                    style={{ backgroundColor: style.stroke }}
                  >
                    {f.confidence}%
                  </span>
                </div>
              );
            })}

          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 text-white text-[11px] font-semibold px-3 py-1.5 backdrop-blur-sm">
            Illustrated sample — not a live customer photo
          </span>
        </div>

        <div className="flex gap-3 mt-5 flex-wrap">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => runAnalysis(s.id)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors ${
                activeId === s.id
                  ? 'border-brand-900 bg-brand-900 text-white'
                  : 'border-slate-200 text-slate-600 hover:border-brand-300'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 h-full flex flex-col">
          <span className="chip mb-4 w-fit">Sample findings</span>
          {status !== 'done' ? (
            <p className="text-slate-500 font-medium">
              Pick a scenario on the left, or hit &ldquo;{active.name}&rdquo; again to run it — this is a scripted walkthrough of what your review dashboard looks like, not live inference.
            </p>
          ) : (
            <>
              <ul className="space-y-4 mb-6">
                {active.findings.map((f, i) => {
                  const style = severityStyle[f.severity];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center ${style.badge}`}>
                        {style.icon}
                      </span>
                      <div>
                        <div className="font-bold text-brand-900 text-sm leading-snug">{f.label}</div>
                        <div className="text-xs text-slate-500 font-medium">{f.confidence}% confidence</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{active.summary}</p>
            </>
          )}
          <div className="mt-auto pt-6 border-t border-slate-200">
            <Link href="/contact" className="btn-primary w-full group">
              Run this on your own photos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-slate-500 mt-3 text-center">Book a walkthrough and we'll screen a few of your real inspection photos live.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
