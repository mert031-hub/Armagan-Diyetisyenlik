import Image from "next/image";

const services = [
  {
    title: "Kilo Verme Programı",
    desc: "Bilimsel ve sürdürülebilir yöntemlerle, açlık hissi duymadan ideal kilonuza ulaşın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: "/images/mezuralikadin.jpg",
    color: "sage",
  },
  {
    title: "Kilo Alma Programı",
    desc: "Sağlıklı ve dengeli bir şekilde kilo almanıza yardımcı olacak özel programlar.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "/images/saglikliyemek.jpg",
    color: "peach",
  },
  {
    title: "Online Danışmanlık",
    desc: "Nerede olursanız olun, video görüşmesi ve mesajlaşma ile kesintisiz destek alın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: "/images/masa1.jpg",
    color: "terracotta",
  },
  {
    title: "Yüz Yüze Danışmanlık",
    desc: "Afyonkarahisar ofisimizde detaylı muayene ve kişisel analiz ile başlangıç yapın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: "/images/diyetphoto.jpg",
    color: "sage",
  },
  {
    title: "Gebelikte Beslenme",
    desc: "Hem anne hem bebek için en sağlıklı beslenme alışkanlıklarını birlikte oluşturalım.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: "/images/healthymeal.jpg",
    color: "peach",
  },
  {
    title: "Emzirme Dönemi",
    desc: "Emzirme sürecinde hem sizi hem bebeğinizi besleyecek özel beslenme programları.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/healthymeal2.jpg",
    color: "terracotta",
  },
  {
    title: "Sağlıklı Yaşam",
    desc: "Diyet ötesinde; uyku, stres, aktivite ve beslenme dengesiyle tam bir yaşam kalitesi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "/images/spor.jpg",
    color: "sage",
  },
  {
    title: "Kişiye Özel Program",
    desc: "Yaşam tarzınızı, tercihlerinizi ve hedeflerinizi göz önünde bulundurarak özel program.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    image: "/images/tabak.jpg",
    color: "peach",
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string }> = {
  sage: {
    bg: "bg-sage-50",
    iconBg: "bg-sage-500",
    iconText: "text-white",
  },
  peach: {
    bg: "bg-peach-50",
    iconBg: "bg-peach-400",
    iconText: "text-white",
  },
  terracotta: {
    bg: "bg-terracotta-50",
    iconBg: "bg-terracotta-500",
    iconText: "text-white",
  },
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-poppins font-semibold text-sage-500 uppercase tracking-widest text-xs mb-3">
            Hizmetler
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-tight mb-4">
            Size özel{" "}
            <span className="text-sage-500">beslenme çözümleri</span>
          </h2>
          <p className="font-inter text-warm-charcoal/60 text-base max-w-xl mx-auto">
            Her bireyin ihtiyacı farklıdır. Hedeflerinize ve yaşam tarzınıza uygun
            kişiselleştirilmiş programlarla yanınızdayım.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-warm-charcoal/5"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className={`w-10 h-10 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText} mb-3 -mt-8 relative z-10 shadow-md`}>
                    {service.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-warm-charcoal text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-warm-charcoal/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/905422722893?text=Merhaba,%20hizmetler%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-poppins text-sm"
          >
            Ücretsiz Bilgi Al
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
