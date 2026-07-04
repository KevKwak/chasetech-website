"use client";

import { Cpu, Zap, Layers } from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Zap,
  Layers,
};

export default function Hero({
  hero,
  services,
  about,
  nav,
  lang,
}: {
  hero: Record<string, string>;
  services: { title: string; items: Array<{ icon: string; title: string; description: string }> };
  about: { title: string; description: string; link: string };
  nav: Record<string, string>;
  lang: string;
}) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-200 font-medium mb-4">
              {hero.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              {hero.description}
            </p>
            <Link
              href={`/${lang}/products`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
            >
              {hero.cta}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-600">{services.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.items.map((item) => {
              const Icon = ICON_MAP[item.icon] || Cpu;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-700 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-600 mb-6">{about.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-8">{about.description}</p>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-500 text-brand-500 rounded-lg font-medium hover:bg-brand-50 transition-colors"
            >
              {about.link}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
