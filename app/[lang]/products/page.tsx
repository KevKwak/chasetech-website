import { Cpu, Zap, Layers } from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Zap,
  Layers,
};

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isKo = lang === "ko";

  const categories = [
    {
      slug: "ems",
      icon: Cpu,
      title: isZh ? "EMS代加工" : isKo ? "EMS 위탁 생산" : "EMS Manufacturing",
      subtitle: isZh ? "电子产品制造服务" : isKo ? "전자제품 제조 서비스" : "Electronics Manufacturing Services",
      desc: isZh
        ? "专业PCBA贴片与整机组装服务，覆盖消费电子、工控、通信等全品类产品制造。提供样品小单到大规模量产的柔性产线。"
        : isKo
        ? "전문 PCBA 실장 및 완제품 조립 서비스, 소비전자, 산업용 제어, 통신 등 전品类 생산 제조."
        : "Professional PCBA and complete unit assembly services, covering consumer electronics, industrial control, communications and more.",
      items: isZh
        ? [
            { name: "PCBA类", products: "4G/5G手机、笔记本、台式机主板、POS机、TWS蓝牙耳机" },
            { name: "整机·平板", products: "Lenovo平板、NOKIA平板、Seewo学习平板" },
            { name: "整机·POS机", products: "手持金融POS机（sunmi）" },
            { name: "整机·手机", products: "智能手机" },
            { name: "整机·其他", products: "智能台灯、智能电视棒、5G MiFi / 5G CPE" },
            { name: "智能锁类", products: "一握开智能锁、CNC超薄精雕、3D人脸猫眼智能锁" },
          ]
        : isKo
        ? [
            { name: "PCBA 제품", products: "4G/5G 스마트폰, 노트북,台式机主板, POS 기기, TWS 블루투스 이어폰" },
            { name: "태블릿", products: "Lenovo 태블릿, NOKIA 태블릿, Seewo 학습용 태블릿" },
            { name: "POS 기기", products: "손목형 금융 POS 기기 (sunmi)" },
            { name: "스마트폰", products: "스마트폰" },
            { name: "기타 전자제품", products: "스마트 무등lamp, TV 스틱, 5G MiFi / 5G CPE" },
            { name: "스마트 잠금장치", products: "손잡이형 스마트 잠금, CNC 초박형 정밀 가공, 3D 얼굴 인식 잠금장치" },
          ]
        : [
            { name: "PCBA Products", products: "4G/5G Phones, Laptops, Desktop Motherboards, POS Machines, TWS Earbuds" },
            { name: "Tablets", products: "Lenovo Tablets, NOKIA Tablets, Seewo Learning Tablets" },
            { name: "POS Machines", products: "Handheld Financial POS Machines (sunmi)" },
            { name: "Smartphones", products: "Smart Mobile Phones" },
            { name: "Other Electronics", products: "Smart Lamps, TV Sticks, 5G MiFi / 5G CPE" },
            { name: "Smart Locks", products: "One-Grip Smart Locks, CNC Ultra-Thin, 3D Face Recognition Smart Locks" },
          ],
    },
    {
      slug: "hysic",
      icon: Zap,
      title: isZh ? "Hysic定制电源" : isKo ? "Hysic 맞춤형 전원" : "Hysic Custom Power Supply",
      subtitle: isZh ? "大功率电能转换解决方案" : isKo ? "대용량 전력 변환 솔루션" : "High-Power Energy Conversion Solutions",
      desc: isZh
        ? "深圳海世英半导体能源科技（HYSIC）隶属迪安电工集团旗下电力电子平台，专注大功率电能转换技术，为全球客户提供高可靠性、高能效的电源与储能解决方案。"
        : isKo
        ? "선전 하이시크 반도체 에너지科技有限公司(HYSIC)은 디앤전기 그룹 산하 전력 전자 플랫폼으로, 대용량 전력 변환 기술에 집중하여 전 세계 고객에게 고신뢰성, 고효율의 전원 및 에너지 저장 솔루션을 제공합니다."
        : "Shenzhen HYSIC Semiconductor Energy Technology Co., Ltd. is a power electronics platform under Dean Group, focusing on high-power energy conversion technology to provide reliable and efficient power and energy storage solutions globally.",
      products: [
        {
          series: "HYAP系列",
          name: isZh ? "AI服务器机架电源" : isKo ? "AI 서버 랙마운트 전원" : "AI Server Rack-Mount Power Supply",
          spec: isZh
            ? "3200W / 1U机架 / 80PLUS钛金 / M-CRPS标准 / N+1冗余热插拔"
            : isKo
            ? "3200W / 1U 랙 / 80PLUS 티타늄 / M-CRPS 표준 / N+1 이중화 핫스왑"
            : "3200W / 1U Rack / 80PLUS Titanium / M-CRPS / N+1 Redundant Hot-Swap",
          app: isZh ? "数据中心、AI服务器、网络交换机、边缘计算" : isKo ? "데이터 센터, AI 서버, 네트워크 스위치, 에지 컴퓨팅" : "Data Centers, AI Servers, Network Switches, Edge Computing",
        },
        {
          series: "HYBP系列",
          name: isZh ? "光伏储能双向大功率逆变器" : isKo ? "태양광 에너지 저장 양방향 인버터" : "PV & Energy Storage Bi-directional Inverter",
          spec: isZh
            ? "125kW（最大137.5kW）/ 室内室外柜式可选 / MPPT追踪"
            : isKo
            ? "125kW (최대 137.5kW) / 실내용/실외 캐비닛 / MPPT 추적"
            : "125kW (Max 137.5kW) / Indoor & Outdoor / MPPT Tracking",
          app: isZh ? "工商光伏、储能电站、电网侧变流、微电网" : isKo ? "상업용 태양광, 에너지 저장 발전소, 마이크로그리드" : "Commercial PV, Energy Storage, Grid-side Systems, Microgrids",
        },
        {
          series: "HYCP系列",
          name: isZh ? "可编程直流电源" : isKo ? "프로그래밍 가능 직류 전원" : "Programmable DC Power Supply",
          spec: isZh
            ? "1100W/1600W / 输出32V~150V / CV/CC/CP自适应 / 半2U机架"
            : isKo
            ? "1100W/1600W / 출력 32V~150V / CV/CC/CP 자가적응 / 하프 2U 랙"
            : "1100W/1600W / Output 32V~150V / CV/CC/CP Adaptive / Half-2U Rack",
          app: isZh ? "ATE测试、实验室研发、半导体测试、电力电子" : isKo ? "ATE 테스트, 실험실 R&D, 반도체 테스트" : "ATE Testing, Lab R&D, Semiconductor Testing",
        },
      ],
    },
    {
      slug: "astech",
      icon: Layers,
      title: isZh ? "Astech胶带" : isKo ? "Astech 테이프" : "Astech Adhesive Tape",
      subtitle: isZh ? "快消网格泡棉胶带" : isKo ? "퀵셀 메시 폼 테이프" : "Quick-Release Mesh Foam Adhesive Tape",
      desc: isZh
        ? "Astech品牌快消网格泡棉胶带，以PET基材为载体，经特殊发泡工艺制成，具有优异的粘接性、缓冲性和排气性能。适用于电子屏幕的粘结和缓冲保护用途。"
        : isKo
        ? "Astech 브랜드 퀵셀 메시 폼 접착 테이프, PET 기재를担体로 특수 발포 공정으로 우수한 접착성, 완충성 및 배기 성능을 갖추고 있습니다."
        : "Astech quick-release mesh foam adhesive tape, made with PET substrate through special foaming process, featuring excellent adhesion, cushioning and air-venting performance.",
      spec: isZh
        ? [
            { label: "型号", value: "AS-SBF140AMG-2W" },
            { label: "总厚度", value: "0.140mm ±10%" },
            { label: "粘着力", value: "≥1000 g/25mm" },
            { label: "泡棉密度", value: "0.55 g/cm³" },
            { label: "规格", value: "1000mm × 100m/卷" },
            { label: "存储期", value: "1年（5~30℃，湿度≤70%）" },
          ]
        : isKo
        ? [
            { label: "모델", value: "AS-SBF140AMG-2W" },
            { label: "총 두께", value: "0.140mm ±10%" },
            { label: "접착력", value: "≥1000 g/25mm" },
            { label: "폼 밀도", value: "0.55 g/cm³" },
            { label: "규격", value: "1000mm × 100m/롤" },
            { label: "보관 기간", value: "1년 (5~30℃, 습도≤70%)" },
          ]
        : [
            { label: "Model", value: "AS-SBF140AMG-2W" },
            { label: "Total Thickness", value: "0.140mm ±10%" },
            { label: "Adhesion", value: "≥1000 g/25mm" },
            { label: "Foam Density", value: "0.55 g/cm³" },
            { label: "Specification", value: "1000mm × 100m/roll" },
            { label: "Shelf Life", value: "1 Year (5~30℃, Humidity≤70%)" },
          ],
      app: isZh ? "电子屏幕粘结与缓冲保护" : isKo ? "전자 스크린 접착 및 완충 보호" : "Electronic Screen Bonding & Cushioning Protection",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isZh ? "产品与服务" : isKo ? "제품 및 서비스" : "Products & Services"}
          </h1>
          <p className="text-xl text-brand-200">
            {isZh ? "三大核心业务板块，满足多元化电子产业需求" : isKo ? "다양한 전자 산업 요구를 충족하는 3대 핵심 사업 부문" : "Three core business areas to meet diverse electronics industry needs"}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat) => (
            <div key={cat.slug} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-8 h-8 text-brand-500" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-700">{cat.title}</h2>
                  <p className="text-brand-400 font-medium text-sm mt-1">{cat.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">{cat.desc}</p>

              {/* EMS items */}
              {"items" in cat && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(cat.items as Array<{ name: string; products: string }>).map((item) => (
                    <div key={item.name} className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-brand-600 mb-1">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.products}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Hysic products */}
              {"products" in cat && (
                <div className="space-y-4">
                  {(cat.products as Array<{ series: string; name: string; spec: string; app: string }>).map((p) => (
                    <div key={p.series} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-block bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {p.series}
                        </span>
                        <h4 className="font-semibold text-brand-700">{p.name}</h4>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">
                        <span className="font-medium text-gray-600">Spec: </span>{p.spec}
                      </p>
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium text-gray-600">
                          {isZh ? "应用" : isKo ? "적용" : "App"}: </span>{p.app}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Astech spec table */}
              {"spec" in cat && Array.isArray(cat.spec) && (
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    {(cat.spec as Array<{ label: string; value: string }>).map((s) => (
                      <div key={s.label} className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs text-gray-400 font-medium">{s.label}</p>
                        <p className="text-sm font-semibold text-brand-700 mt-1">{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">
                    <span className="font-medium text-gray-600">
                      {isZh ? "应用场景" : isKo ? "적용 시나리오" : "Application"}: </span>
                    {cat.app}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {isZh ? "感兴趣？" : isKo ? "관심 있으신가요?" : "Interested?"}
          </h2>
          <p className="text-brand-200 mb-8">
            {isZh ? "欢迎联系我们，获取详细产品资料与报价" : isKo ? "저희에 문의하여 상세 제품 자료와 견적을 받아보세요" : "Contact us for detailed product information and quotation"}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            {isZh ? "联系我们" : isKo ? "문의하기" : "Contact Us"} →
          </Link>
        </div>
      </section>
    </div>
  );
}
