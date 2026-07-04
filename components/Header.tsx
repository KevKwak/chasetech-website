"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
];

export default function Header({
  nav,
  lang,
}: {
  nav: Record<string, string>;
  lang: string;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ZK</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-brand-600 leading-tight">
                ChaseTech Power
              </div>
              <div className="text-xs text-gray-400 leading-tight">
                HK Trading Limited
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${lang}${href}`}
                className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
              >
                {nav[key]}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
