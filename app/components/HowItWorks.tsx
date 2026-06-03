const steps = [
  {
    number: "01",
    title: "Tanışma",
    desc: "İlk görüşmemizde sizi tanıyorum. Yaşam tarzınızı, tercihlerinizi ve beklentilerinizi dinliyorum.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-terracotta-600",
    lightColor: "bg-coral-50",
    textColor: "text-terracotta-600",
  },
  {
    number: "02",
    title: "Analiz",
    desc: "Sağlık geçmişinizi, beslenme alışkanlıklarınızı ve vücut ölçümlerinizi detaylı olarak değerlendiriyorum.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "bg-coral-400",
    lightColor: "bg-coral-50",
    textColor: "text-terracotta-600",
  },
  {
    number: "03",
    title: "Hedef Belirleme",
    desc: "Gerçekçi ve ulaşılabilir hedefler belirliyoruz. Her adımı birlikte planlıyoruz.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-terracotta-500",
    lightColor: "bg-coral-50",
    textColor: "text-terracotta-600",
  },
  {
    number: "04",
    title: "Kişisel Program",
    desc: "Sizin için özel olarak tasarlanan beslenme programınız hazırlanır. Uygulanabilir ve lezzetli!",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: "bg-terracotta-600",
    lightColor: "bg-coral-50",
    textColor: "text-terracotta-600",
  },
  {
    number: "05",
    title: "Takip & Motivasyon",
    desc: "Haftalık kontroller ve sürekli mesajlaşma desteğiyle her adımınızda yanınızdayım.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-coral-400",
    lightColor: "bg-coral-50",
    textColor: "text-terracotta-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-coral-200" />
            <p className="font-poppins font-semibold text-terracotta-600 uppercase tracking-widest text-xs">
              Süreç
            </p>
            <div className="h-px w-8 bg-coral-200" />
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-tight mb-4">
            Nasıl{" "}
            <span className="bg-gradient-to-r from-coral-500 to-terracotta-600 bg-clip-text text-transparent">
              çalışıyoruz?
            </span>
          </h2>
          <p className="font-inter text-warm-charcoal/70 text-base max-w-lg mx-auto">
            5 adımda sağlıklı yaşama giden yolculuğunuza başlayın.
            Her adım basit, açık ve destekleyicidir.
          </p>
        </div>

        {/* Steps — Mobile: vertical, Desktop: horizontal */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-coral-200 via-coral-300 to-coral-200 z-0" style={{ top: "4.5rem" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Number badge */}
                <div className={`relative w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:-translate-y-1 transition-transform duration-300`}>
                  {step.icon}
                  <span className={`absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-current rounded-full flex items-center justify-center font-poppins font-bold text-xs ${step.textColor}`}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-warm-charcoal text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-warm-charcoal/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-coral-50 rounded-2xl p-6 border border-coral-100">
            <div className="text-left">
              <div className="font-poppins font-bold text-warm-charcoal text-lg">
                Başlamaya hazır mısınız?
              </div>
              <div className="font-inter text-warm-charcoal/70 text-sm">
                İlk görüşme tamamen ücretsiz ve bağlayıcı değil.
              </div>
            </div>
            <a
              href="https://wa.me/905422722893?text=Merhaba,%20ücretsiz%20ilk%20görüşme%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md font-poppins text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.847L.057 23.885c-.09.365.25.704.614.614l6.04-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.5-5.235-1.374l-.375-.216-3.885.945.964-3.781-.23-.39A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Ücretsiz Görüşme Başlat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
