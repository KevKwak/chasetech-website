import Link from "next/link";

export default function Footer({
  nav,
  footer,
  lang,
}: {
  nav: Record<string, string>;
  footer: { copyright: string; tagline: string };
  lang: string;
}) {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ZK</span>
              </div>
              <div>
                <div className="font-semibold text-white">ChaseTech Power</div>
                <div className="text-xs text-white/60">HK Trading Limited</div>
              </div>
            </div>
            <p className="text-white/60 text-sm">{footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={`/${lang}${href}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white/90">{nav.contact}</h3>
            <p className="text-white/60 text-sm">
              Unit 903A, 9/F., Cameron Commercial Centre
              <br />
              458-468 Hennessy Road, Causeway Bay, Hong Kong
            </p>
            <p className="text-white/60 text-sm mt-2">info@chasetechpower.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-white/40 text-sm text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

const NAV_ITEMS = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
];
