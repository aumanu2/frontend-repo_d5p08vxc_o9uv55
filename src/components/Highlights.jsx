import React from 'react';
import { ShieldCheck, Rocket, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    desc: 'ISO, CE, RoHS compliant manufacturing with rigorous QA at every stage.',
  },
  { icon: Rocket, title: 'High Performance', desc: 'Ultra‑low attenuation fibers designed for 5G, FTTx, and data center loads.' },
  { icon: Globe, title: 'Global Supply', desc: 'Reliable fulfillment across 60+ countries with on‑time delivery.' },
  { icon: Award, title: 'Proven Reliability', desc: 'Thousands of kilometers deployed in harsh conditions worldwide.' },
];

const Highlights = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-['Manrope'] text-2xl font-bold text-neutral-900 sm:text-3xl">Built for mission‑critical networks</h2>
          <p className="mt-2 text-neutral-600">Everything we make is engineered to perform, endure, and scale with demand.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                {React.createElement(f.icon, { className: 'h-5 w-5' })}
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
