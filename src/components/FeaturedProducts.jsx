import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Home 300',
    speed: '300 Mbps',
    price: '$39/mo',
    badge: 'Best value',
    color: 'from-pink-500 to-fuchsia-500'
  },
  {
    name: 'Home Gig',
    speed: '1 Gbps',
    price: '$69/mo',
    badge: 'Most popular',
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    name: 'Pro Fiber',
    speed: '2 Gbps',
    price: '$129/mo',
    badge: 'For creators',
    color: 'from-emerald-500 to-lime-500'
  }
];

export default function FeaturedProducts() {
  return (
    <section id="plans" className="relative bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Plans made simple</h2>
          <p className="mt-3 text-neutral-600">Pick a speed. Change anytime. No contracts or hidden fees.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-black/0 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">{p.badge}</span>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{p.name}</h3>
              <p className="mt-1 text-neutral-600">Up to {p.speed}</p>
              <div className={`mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r ${p.color}`} />
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold text-neutral-900">{p.price}</div>
                  <div className="text-xs text-neutral-500">All taxes included</div>
                </div>
                <button className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50">
                  Choose plan
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
