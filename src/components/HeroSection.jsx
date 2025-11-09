import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-300 ring-1 ring-inset ring-pink-500/30"
            >
              Fiber Connect
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Internet that moves at the speed of your ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-xl text-base text-neutral-300 md:text-lg"
            >
              Ultra-fast, reliable fiber for homes and business. No throttling. No limits. Just pure performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#media"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300/40"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </a>
            </motion.div>
          </motion.div>

          <div className="relative h-[420px] md:h-[560px]">
            <div className="absolute inset-0 right-0 md:left-1/2">
              <Spline
                scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
