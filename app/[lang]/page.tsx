import Hero from "@/components/Hero";
import zh from "@/content/zh.json";
import en from "@/content/en.json";
import ko from "@/content/ko.json";

const CONTENT = { zh, en, ko };

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }, { lang: "ko" }];
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = CONTENT[lang as keyof typeof CONTENT] || CONTENT.zh;

  return (
    <Hero
      hero={t.home.hero}
      services={t.home.services}
      about={t.home.about}
      nav={t.nav}
      lang={lang}
    />
  );
}
