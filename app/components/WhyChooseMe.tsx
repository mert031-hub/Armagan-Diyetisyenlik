import Image from "next/image";

const reasons = [
  {
    title: "Sürdürülebilir Beslenme",
    desc: "Geçici diyetler değil; kalıcı, sürdürülebilir ve keyifli beslenme alışkanlıkları kazandırıyorum.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Kişisel İlgi",
    desc: "Her danışanıma özel zaman ve enerji ayırıyorum. Sizi gerçekten tanımak önceliğimdir.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Motivasyon Desteği",
    desc: "Zor anlarda bile yanınızdayım. Mesajlarım ve düzenli kontrollerle motivasyonunuzu canlı tutuyorum.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Gerçekçi Planlar",
    desc: "Yaşamınıza uyan, uygulanabilir programlar. Açlık hissi duymadan sonuç almak mümkün!",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Bilimsel Yaklaşım",
    desc: "Tüm programlarım güncel bilimsel araştırmalara ve kanıta dayalı beslenme ilkelerine dayanır.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Güler Yüzlü İletişim",
    desc: "Yargılamadan, sabırla dinleyen ve daima pozitif enerji yayan biriyle bu yolculuğa çıkın.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-poppins font-semibold text-sage-500 uppercase tracking-widest text-xs mb-4">
              Neden Ben?
            </p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-4xl text-warm-charcoal leading-tight mb-6">
              Fark yaratan bir{" "}
              <span className="text-sage-500">beslenme deneyimi</span>
            </h2>
            <p className="font-inter text-warm-charcoal/70 text-base leading-relaxed mb-8">
              Danışanlarım beni &ldquo;bir arkadaş gibi&rdquo; olarak tanımlar. Çünkü bu
              yolculukta sadece bir uzman değil; güvenilir, motive edici ve her an
              yanınızda olan biri oluyorum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl hover:bg-sage-50 transition-colors duration-200"
                >
                  <div className="w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-warm-charcoal text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="font-inter text-warm-charcoal/60 text-xs leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Top large image */}
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/diyetkadin.jpg"
                  alt="Sağlıklı beslenme danışmanlığı"
                  fill
                  sizes="(max-width: 1024px) 384px, 384px"
                  className="object-cover"
                />
              </div>
              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative h-36 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/dograma.jpg"
                    alt="Sağlıklı yemek hazırlama"
                    fill
                    sizes="(max-width: 768px) 50vw, 176px"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/su.jpg"
                    alt="Su içmek sağlıklı yaşam"
                    fill
                    sizes="(max-width: 768px) 50vw, 176px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 text-center">
                <div className="font-poppins font-bold text-2xl text-sage-500">100%</div>
                <div className="font-inter text-warm-charcoal/60 text-xs">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
