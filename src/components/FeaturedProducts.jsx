import React from 'react';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'FTTH Drop Cable',
    desc: 'Ruggedized last‑mile fiber for indoor/outdoor deployments.',
    tags: ['FTTH', '1-2 Core'],
    img: 'https://images.unsplash.com/photo-1559333086-31ab67588b52?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'ADSS Aerial Cable',
    desc: 'Self‑supporting aerial cable for long‑span utility networks.',
    tags: ['ADSS', '24-96 Core'],
    img: 'https://images.unsplash.com/photo-1520975922284-9d8a523b57f4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Armored Duct Cable',
    desc: 'Anti‑rodent armored design for harsh underground routes.',
    tags: ['GYTA', 'Armored'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-['Manrope'] text-2xl font-bold text-neutral-900 sm:text-3xl">Featured products</h2>
            <p className="mt-2 text-neutral-600">A snapshot of our most requested fiber cable families.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 sm:flex">
            Explore all
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-red-50 px-2.5 py-1 text-xs text-red-600 ring-1 ring-red-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
