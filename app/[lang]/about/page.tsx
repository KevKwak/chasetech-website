import { Globe, Award, Settings, Headphones } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Award,
  Settings,
  Headphones,
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isKo = lang === "ko";

  const highlights = [
    {
      icon: Globe,
      title: isZh ? "国际视野" : isKo ? "글로벌 비전" : "Global Vision",
      desc: isZh
        ? "立足香港，服务全球，深耕电子产品国际贸易多年，积累了丰富的行业资源和供应链优势。"
        : isKo
        ? "홍콩에 기반하여 전 세계에 서비스 제공. 국제 전자제품 무역에 다년간 깊이 빠져 있으며 풍부한 업계 자원과 공급망 우위를 축적했습니다."
        : "Based in Hong Kong, serving worldwide. Years of deep expertise in international electronics trade with rich industry resources and supply chain advantages.",
    },
    {
      icon: Award,
      title: isZh ? "品质保障" : isKo ? "품질 보증" : "Quality Assurance",
      desc: isZh
        ? "严格筛选供应商与合作厂商，确保所提供的产品与服务符合国际质量标准与客户要求。"
        : isKo
        ? "공급업체와 협력厂商을 엄격히 선정하여 제공하는 제품과 서비스가 국제 품질 표준과 고객 요구사항을 충족하도록 보장합니다."
        : "Strictly selecting suppliers and partners to ensure all products and services meet international quality standards and customer requirements.",
    },
    {
      icon: Settings,
      title: isZh ? "灵活定制" : isKo ? "유연한 맞춤" : "Flexible Customization",
      desc: isZh
        ? "提供从样品小单到大规模量产的柔性制造服务，支持 OEM/ODM 多种合作模式。"
        : isKo
        ? "시안 소량 주문에서 대량 생산까지 유연한 제조 서비스를 제공하며, OEM/ODM 등 다양한 협력 모델을 지원합니다."
        : "Flexible manufacturing services from prototype small orders to mass production, supporting OEM/ODM cooperation models.",
    },
    {
      icon: Headphones,
      title: isZh ? "专业服务" : isKo ? "전문 서비스" : "Professional Service",
      desc: isZh
        ? "配备专业团队，提供从产品选型、技术咨询到售后支持的全程服务。"
        : isKo
        ? "전문 팀을 갖추고 제품 선정, 기술 컨설팅부터 애터세일 지원까지 전 과정에서 서비스를 제공합니다."
        : "Equipped with professional teams providing full-cycle service from product selection, technical consultation to after-sales support.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isZh ? "关于我们" : isKo ? "회사 소개" : "About Us"}
          </h1>
          <p className="text-xl text-brand-200">
            {isZh ? "深耕国际贸易，连接全球科技产业" : isKo ? "국제 무역에 깊이扎根하고, 글로벌 테크 산업에 연결하다" : "Rooted in International Trade, Connecting Global Technology"}
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            {isZh
              ? "香港追科動力貿易有限公司（HK ChaseTech Power Trading Limited）成立于香港特别行政区，是一家专注于国际电子产品贸易进出口及相关业务的专业企业。我们致力于为全球客户提供高品质的电子元器件、零部件、原材料供应，以及专业的委托加工、品牌代理和技术咨询服务。"
              : isKo
              ? "홍콩 추스테크 파워 트레이딩 리미티드(HK ChaseTech Power Trading Limited)는 홍콩특별행정구에 설립되어 국제 전자제품 무역 수출입 및 관련 업무를 전문으로 하는 기업입니다. 전 세계 고객에게高品质 전자 부품, 원자재 공급, 전문 위탁 생산, 브랜드 라이선스 및 기술 컨설팅 서비스를 제공합니다."
              : "HK ChaseTech Power Trading Limited is a professional enterprise established in Hong Kong SAR, specializing in international trade, import and export of electronic products and related businesses. We are committed to providing global customers with high-quality electronic components, raw materials, professional manufacturing services, brand agency and technical consulting."}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-700 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
