import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Bilimsel Yaklaşım",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "Kişiye Özel Program",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Motivasyon Desteği",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Sürdürülebilir Sonuçlar",
  },
];

export default function About() {
  return (
    /* overflow-x-hidden prevents the absolute-positioned secondary image
       from creating horizontal scroll on narrow viewports (320–375px). */
    <section id="hakkimda" className="py-20 md:py-28 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images collage */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/gülensurat.jpg"
                  alt="Diyetisyen Gizem Kantar danışanıyla"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-cover"
                />
              </div>
              {/* Secondary image — right-2 on mobile prevents viewport overflow */}
              <div className="absolute -bottom-6 right-2 sm:-right-2 md:-right-8 w-36 h-44 sm:w-44 sm:h-52 rounded-[1.25rem] overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/saglikliyemek.jpg"
                  alt="Sağlıklı beslenme"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover"
                />
              </div>
              {/* Accent badge — right-2 on mobile prevents viewport overflow */}
              <div className="absolute -top-5 right-2 sm:-right-2 md:-right-8 bg-peach-100 rounded-2xl p-4 shadow-lg">
                <div className="font-poppins font-bold text-terracotta-600 text-2xl">5.0</div>
                <div className="font-inter text-warm-charcoal/70 text-xs">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-poppins font-semibold text-sage-500 uppercase tracking-widest text-xs mb-4">
              Hakkımda
            </p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-4xl text-warm-charcoal leading-tight mb-6">
              Beslenmeyi bir{" "}
              <span className="text-sage-500">yaşam tarzı</span>
              {" "}haline getiriyorum
            </h2>
            <p className="font-inter text-warm-charcoal/70 text-base leading-relaxed mb-4">
              Merhaba! Ben Armağan Gizem Kantar. Beslenme ve Diyetetik alanında uzman bir
              diyetisyenim. Afyonkarahisar&apos;da hem yüz yüze hem de online olarak
              danışanlarıma hizmet veriyorum.
            </p>
            <p className="font-inter text-warm-charcoal/70 text-base leading-relaxed mb-8">
              Beslenme danışmanlığını sadece bir diyet listesi vermek olarak görmüyorum.
              Her danışanım için kişiye özel, sürdürülebilir ve bilimsel temelli programlar
              hazırlıyor; bu süreçte güler yüzlü ve motive edici bir yaklaşımla
              yanınızda oluyorum. Çünkü inanıyorum ki; doğru beslenme bir ceza değil,
              kendinize verdiğiniz en güzel hediyedir.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-sage-50 rounded-xl px-4 py-3"
                >
                  <div className="w-9 h-9 bg-sage-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-inter text-warm-charcoal font-medium text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905422722893?text=Merhaba,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-poppins text-sm min-h-[44px]"
              >
                Randevu Al
              </a>
              <a
                href="https://www.instagram.com/dytgizemkantar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sage-50 text-warm-charcoal border-2 border-sage-200 font-semibold py-3.5 px-6 rounded-full transition-all duration-300 font-poppins text-sm min-h-[44px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
