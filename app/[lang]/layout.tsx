import Header from "@/components/Header";
import Footer from "@/components/Footer";
import zh from "@/content/zh.json";
import en from "@/content/en.json";
import ko from "@/content/ko.json";

const CONTENT = { zh, en, ko };

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }, { lang: "ko" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = CONTENT[lang as keyof typeof CONTENT] || CONTENT.zh;

  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={t.nav} lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer nav={t.nav} footer={t.footer} lang={lang} />
    </div>
  );
}
