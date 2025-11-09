import React from 'react';
import { ShieldCheck, Rocket, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Rock-solid reliability',
    desc: '99.99% uptime backed by redundant backbone and proactive monitoring.'
  },
  { icon: Rocket, title: 'Blazing speeds', desc: 'Gigabit plans that keep up with your busiest days and nights.' },
  { icon: Globe, title: 'Everywhere coverage', desc: 'Expanding city by city with local support that actually cares.' },
  { icon: Award, title: 'Fair & transparent', desc: 'No hidden fees. No throttling. Cancel anytime with no hassle.' }
];

export default function Highlights() {
  return (
    <section className="relative bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why switch to Fiber Connect?</h2>
          <p className="mt-3 text-neutral-600">Simple plans, better experience, and support that feels human.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
              <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
