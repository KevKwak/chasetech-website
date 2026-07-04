"use client";

import Link from "next/link";

const LANG_CONFIG: Record<string, { label: string; href: string }> = {
  zh: { label: "中文", href: "/zh" },
  en: { label: "EN", href: "/en" },
  ko: { label: "한국어", href: "/ko" },
};

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  return (
    <div className="flex items-center gap-1 bg-brand-50 rounded-lg p-1">
      {Object.values(LANG_CONFIG).map(({ label, href }) => {
        const isActive = currentLang === href.replace("/", "");
        return (
          <Link
            key={href}
            href={href}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-brand-500 text-white"
                : "text-brand-600 hover:bg-brand-100"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
