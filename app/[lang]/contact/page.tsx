import { MapPin, Mail, Phone, FileText } from "lucide-react";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isKo = lang === "ko";

  const t = {
    title: isZh ? "联系我们" : isKo ? "문의하기" : "Contact Us",
    subtitle: isZh ? "期待与您建立合作关系" : isKo ? "저희와 비즈니스 관계를 구축하시기를 기대합니다" : "We look forward to building a business relationship with you",
    addressLabel: isZh ? "公司地址" : isKo ? "회사 주소" : "Company Address",
    emailLabel: isZh ? "企业邮箱" : isKo ? "기업 이메일" : "Email",
    phoneLabel: isZh ? "电话" : isKo ? "전화" : "Phone",
    faxLabel: isZh ? "传真" : isKo ? "팩스" : "Fax",
    pending: isZh ? "待申请" : isKo ? "신청 대기 중" : "Pending",
    address: "Unit 903A, 9/F., Cameron Commercial Centre, 458-468 Hennessy Road, Causeway Bay, Hong Kong",
    addressZh: "香港铜锣湾轩尼诗道458-468号金玛商业中心9楼903A室",
    email: "info@chasetechpower.com",
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-brand-200">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="font-semibold text-brand-700 text-lg mb-2">{t.addressLabel}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.address}</p>
              <p className="text-gray-400 text-sm mt-1">{t.addressZh}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="font-semibold text-brand-700 text-lg mb-2">{t.emailLabel}</h3>
              <a
                href={`mailto:${t.email}`}
                className="text-brand-500 hover:text-brand-600 text-sm font-medium transition-colors"
              >
                {t.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="font-semibold text-brand-700 text-lg mb-2">{t.phoneLabel}</h3>
              <p className="text-gray-400 text-sm">{t.pending}</p>
            </div>

            {/* Fax */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <FileText className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="font-semibold text-brand-700 text-lg mb-2">{t.faxLabel}</h3>
              <p className="text-gray-400 text-sm">{t.pending}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
