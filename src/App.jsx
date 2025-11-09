import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Highlights from './components/Highlights';
import MediaBanner from './components/MediaBanner';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600" />
            <span className="font-['Manrope'] text-lg font-bold">Fiber Connect</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#products" className="hover:text-neutral-900">Products</a>
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#media" className="hover:text-neutral-900">Media</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-black"
          >
            <Phone className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <Highlights />
        <FeaturedProducts />
        <div id="media">
          <MediaBanner />
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-red-500 to-rose-600" />
              <span className="font-['Manrope'] text-base font-semibold">Fiber Connect</span>
            </div>
            <p className="text-sm text-neutral-600">Premium fiber optic cables and connectivity solutions engineered for reliability.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#about" className="hover:text-neutral-900">About us</a></li>
              <li><a href="#media" className="hover:text-neutral-900">Media center</a></li>
              <li><a href="#products" className="hover:text-neutral-900">Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Email: sales@fiberconnect.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 100 Gigabit Ave, Silicon City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Fiber Connect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
