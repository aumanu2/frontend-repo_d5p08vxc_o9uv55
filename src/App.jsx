import React from 'react';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import FeaturedProducts from './components/FeaturedProducts';
import MediaBanner from './components/MediaBanner';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-neutral-900">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold">Fiber Connect</span>
            </a>

            <nav className="hidden gap-8 text-sm font-medium text-neutral-700 md:flex">
              <a href="#plans" className="hover:text-neutral-900">Plans</a>
              <a href="#media" className="hover:text-neutral-900">Media</a>
              <a href="#contact" className="hover:text-neutral-900">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 md:inline-flex">
                Sign in
              </button>
              <button className="inline-flex items-center rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110">
                Get fiber
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <Highlights />
        <FeaturedProducts />
        <MediaBanner />

        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Talk to our team</h3>
                <p className="mt-3 text-neutral-600">We’ll help you pick the right plan and set up everything in minutes.</p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                  <li>• Same-day activation in supported areas</li>
                  <li>• Free router with all plans</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>

              <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-neutral-700">First name</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-pink-500" placeholder="Alex" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-700">Last name</label>
                    <input className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-pink-500" placeholder="Morgan" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-pink-500" placeholder="you@example.com" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-pink-500" placeholder="Tell us what you need…" />
                </div>
                <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-10 text-sm text-neutral-600">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Fiber Connect. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-900">Privacy</a>
              <a href="#" className="hover:text-neutral-900">Terms</a>
              <a href="#" className="hover:text-neutral-900">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
