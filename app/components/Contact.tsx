export default function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-poppins font-semibold text-sage-500 uppercase tracking-widest text-xs mb-3">
            İletişim
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-tight mb-4">
            Hadi başlayalım!
          </h2>
          <p className="font-inter text-warm-charcoal/60 text-base max-w-lg mx-auto">
            Sağlıklı yaşama giden ilk adımı atmak için bugün bana ulaşın.
            Cevaplamaktan mutluluk duyarım!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {/* WhatsApp card */}
            <a
              href="https://wa.me/905422722893?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-green-50 hover:bg-green-100 border border-green-100 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.847L.057 23.885c-.09.365.25.704.614.614l6.04-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.5-5.235-1.374l-.375-.216-3.885.945.964-3.781-.23-.39A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <div className="font-poppins font-bold text-warm-charcoal text-base">WhatsApp</div>
                <div className="font-inter text-warm-charcoal/60 text-sm">0542 272 28 93</div>
                <div className="font-inter text-green-600 text-xs font-medium mt-0.5">Hemen yaz →</div>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:05422722893"
              className="group flex items-center gap-5 bg-sage-50 hover:bg-sage-100 border border-sage-100 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-sage-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
              </div>
              <div>
                <div className="font-poppins font-bold text-warm-charcoal text-base">Telefon</div>
                <div className="font-inter text-warm-charcoal/60 text-sm">0542 272 28 93</div>
                <div className="font-inter text-sage-600 text-xs font-medium mt-0.5">Hemen ara →</div>
              </div>
            </a>

            {/* Instagram card */}
            <a
              href="https://www.instagram.com/dytgizemkantar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-pink-50 hover:bg-pink-100 border border-pink-100 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <div className="font-poppins font-bold text-warm-charcoal text-base">Instagram</div>
                <div className="font-inter text-warm-charcoal/60 text-sm">@dytgizemkantar</div>
                <div className="font-inter text-pink-600 text-xs font-medium mt-0.5">Takip et →</div>
              </div>
            </a>

            {/* Address card */}
            <div className="flex items-start gap-5 bg-warm-white border border-warm-charcoal/5 rounded-2xl p-5">
              <div className="w-14 h-14 bg-terracotta-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-poppins font-bold text-warm-charcoal text-base mb-1">Adres</div>
                <div className="font-inter text-warm-charcoal/60 text-sm leading-relaxed">
                  Selçuklu Mah. 1455. Sok. No:2/1<br />
                  Suit Ophelia B Blok D:3<br />
                  Afyonkarahisar
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-warm-charcoal/5 min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.0!2d30.5383!3d38.7565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c6d0b0b0b0b0b0%3A0x0!2sSel%C3%A7uklu%2C%20Fatma%20Zehra%20Cd.%20No%3A1455%20no%3A2%2F1%2C%2003218%20Afyonkarahisar%20Merkez%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diyetisyen Armağan Gizem Kantar - Konum"
            />
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-sage-500 to-sage-600 rounded-3xl p-8 md:p-10 text-center text-white">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-3">
            Sağlıklı yaşama ilk adımı bugün atın
          </h3>
          <p className="font-inter text-white/80 text-sm md:text-base mb-6 max-w-md mx-auto">
            Ücretsiz ilk görüşme için hemen randevu alın. Sizi bekliyorum!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/905422722893?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-sage-600 hover:bg-sage-50 font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg font-poppins text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.847L.057 23.885c-.09.365.25.704.614.614l6.04-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.5-5.235-1.374l-.375-.216-3.885.945.964-3.781-.23-.39A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp&apos;tan Randevu Al
            </a>
            <a
              href="tel:05422722893"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold py-3.5 px-6 rounded-full transition-all duration-300 font-poppins text-sm"
            >
              Ara: 0542 272 28 93
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
