import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 md:w-[600px] md:h-[600px] bg-sage-100 rounded-full opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 md:w-96 md:h-96 bg-peach-100 rounded-full opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage-50 rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 font-poppins tracking-wide uppercase">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
              Online & Yüz Yüze Danışmanlık
            </div>

            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-warm-charcoal leading-tight mb-4">
              Sağlıklı yaşamı{" "}
              <span className="text-sage-500">sürdürülebilir</span>{" "}
              hale getirin.
            </h1>

            <p className="font-inter text-base md:text-lg text-warm-charcoal/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Bilimsel temelli, kişiye özel beslenme programlarıyla hayalinizdeki
              sağlığa ulaşın. Güler yüzlü ve motive edici bir süreçle yanınızdayım.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="https://wa.me/905422722893?text=Merhaba,%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-poppins text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.847L.057 23.885c-.09.365.25.704.614.614l6.04-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.5-5.235-1.374l-.375-.216-3.885.945.964-3.781-.23-.39A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href="tel:05422722893"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sage-50 text-sage-600 border-2 border-sage-300 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 font-poppins text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                Ara: 0542 272 28 93
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-poppins font-bold text-warm-charcoal text-sm">5.0</span>
                <span className="font-inter text-warm-charcoal/70 text-xs">Google</span>
              </div>
              <div className="w-px h-6 bg-warm-charcoal/20" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-inter text-warm-charcoal/70 text-xs">Uzman Diyetisyen</span>
              </div>
              <div className="w-px h-6 bg-warm-charcoal/20" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-inter text-warm-charcoal/70 text-xs">Online & Yüz Yüze</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] lg:w-[420px] lg:h-[520px]">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-peach-200 rounded-[2rem] rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-tl from-sage-100 to-peach-100 rounded-[2rem] -rotate-1" />
              {/* Main image */}
              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/uzman1.jpg"
                  alt="Diyetisyen Armağan Gizem Kantar"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating badge top */}
              <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2">
                <div className="w-9 h-9 bg-sage-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-poppins font-bold text-warm-charcoal text-sm">100+</div>
                  <div className="font-inter text-warm-charcoal/70 text-xs">Mutlu Danışan</div>
                </div>
              </div>
              {/* Floating badge bottom */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-poppins font-bold text-warm-charcoal text-xs">Google 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
