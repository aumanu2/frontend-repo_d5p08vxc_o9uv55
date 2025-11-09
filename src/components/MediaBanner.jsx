import React from 'react';

const MediaBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-red-400">Inside Fiber Connect</p>
          <h3 className="font-['Manrope'] text-2xl font-bold text-white sm:text-3xl">Watch our manufacturing in motion</h3>
          <p className="mt-2 text-neutral-300">Step behind the scenes to see how precision engineering meets scalable production for world‑class fiber.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100">All videos</a>
            <a href="#" className="rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-900">Photo gallery</a>
          </div>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <video
            className="h-full w-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-fiber-optic-cable-connection-9985/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default MediaBanner;
