import React from 'react';
import { motion } from 'framer-motion';

export default function MediaBanner() {
  return (
    <section id="media" className="relative overflow-hidden bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">See the difference</h3>
            <p className="mt-3 text-neutral-300">A quick look at how our network handles real-world peak loads with ease.</p>
            <div className="mt-6 inline-flex rounded-lg bg-white/5 px-4 py-2 text-sm text-neutral-200 ring-1 ring-inset ring-white/10">
              4K streaming • Cloud backups • Multiplayer gaming
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <video
                className="h-full w-full"
                src="https://cdn.coverr.co/videos/coverr-fiber-optic-cables-3875/1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-fuchsia-500/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
