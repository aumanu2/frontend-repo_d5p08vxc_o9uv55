import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Interactive Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient edges to improve contrast; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-medium text-red-600 ring-1 ring-red-100">
          Fiber Connect
          <span className="h-1 w-1 rounded-full bg-red-400" />
          Next‑gen Fiber Optic Systems
        </span>
        <h1 className="font-['Manrope'] text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Connecting the world with
          <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent"> ultra‑reliable fiber</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg">
          Premium fiber optic cables and connectivity solutions engineered for speed, scale, and durability. Clean design, proven performance.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#products"
            className="group inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
          >
            Browse Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-neutral-50"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
