"use client";

import { useState } from "react";

const faqs = [
  {
    q: "İlk görüşme nasıl gerçekleşiyor?",
    a: "İlk görüşmemizde sizi tanımaya çalışıyorum. Sağlık geçmişinizi, beslenme alışkanlıklarınızı, günlük rutininizi ve hedeflerinizi konuşuyoruz. Bu görüşme online veya yüz yüze olabilir. Yaklaşık 45-60 dakika sürer ve tamamen kişisel ihtiyaçlarınıza yöneliktir.",
  },
  {
    q: "Online danışmanlık nasıl işliyor?",
    a: "Online danışmanlık; WhatsApp, video görüşme veya mesajlaşma yoluyla yapılır. Programınız kişisel ihtiyaçlarınıza göre hazırlanır ve size dijital olarak iletilir. Haftalık takip görüşmeleri ve anlık sorularınız için her zaman ulaşabilirsiniz.",
  },
  {
    q: "Kaç kilogram verebilirim?",
    a: "Bu kişiden kişiye değişir. Metabolizmanız, yaşam tarzınız ve programa bağlılığınız belirleyici faktörlerdir. Ancak sürdürülebilir bir kilo kaybı için aylık 2-4 kg hedefliyoruz. Önemli olan hızlı kilo vermek değil, verilen kiloların geri gelmemesidir.",
  },
  {
    q: "Diyet sürecinde acıkacak mıyım?",
    a: "Kesinlikle hayır! Programlarımı hazırlarken tok tutacak, besleyici ve lezzetli seçenekler sunmaya özen gösteriyorum. Danışanlarım sıklıkla 'hiç acıkmadım' diyor. Açlık hissettirmeyen bir program hem daha sağlıklı hem de daha sürdürülebilirdir.",
  },
  {
    q: "Sevmediğim yiyecekler olursa ne yapılır?",
    a: "Programınız tamamen sizin tercihlerinize göre kişiselleştirilir. Sevmediğiniz, tüketemediğiniz ya da alerjiniz olan yiyecekler kesinlikle programa dahil edilmez. Alternatiflerle aynı besin değerini sağlayacak çözümler üretiriz.",
  },
  {
    q: "Seyahat ederken diyet programını takip edebilir miyim?",
    a: "Evet! Seyahat planlarınızı bildiğinizde, o süreç için özel tavsiyeler ve esnek alternatifler sunuyorum. Dışarıda yemek, otel kahvaltısı gibi durumlar için pratik çözümler hazırlıyorum.",
  },
  {
    q: "Takip sıklığı ne kadar olmalı?",
    a: "Genellikle haftada bir olmak üzere düzenli kontrol görüşmeleri yapıyoruz. Bu görüşmelerde ilerlemenizi değerlendiriyor, programınızı gerekirse güncelliyor ve sorularınızı yanıtlıyorum. Görüşmeler arası anlık destek de sağlanmaktadır.",
  },
  {
    q: "Gebelik veya emzirme döneminde danışmanlık alabilir miyim?",
    a: "Evet, kesinlikle! Gebelik ve emzirme dönemlerinde beslenme çok kritik önem taşır. Bu dönemlere özel, hem annenin hem bebeğin ihtiyaçlarını karşılayacak, güvenli ve bilimsel programlar hazırlıyorum.",
  },
  {
    q: "Sonuçlar ne zaman görülmeye başlanır?",
    a: "Çoğu danışanım ilk 2 haftada enerji artışı ve hafiflik hisseder. Görsel sonuçlar ise genellikle 3-4 haftada belirginleşmeye başlar. Sabır ve tutarlılık en büyük anahtardır; ben de her adımda yanınızdayım.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-poppins font-semibold text-sage-500 uppercase tracking-widest text-xs mb-3">
            SSS
          </p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-tight mb-4">
            Merak ettikleriniz
          </h2>
          <p className="font-inter text-warm-charcoal/60 text-base">
            Sık sorulan sorulara yanıt bulamadıysanız, WhatsApp&apos;tan bana yazabilirsiniz.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-warm-charcoal/5 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-poppins font-semibold text-warm-charcoal text-sm md:text-base">
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? "bg-sage-500 text-white rotate-45" : "bg-sage-50 text-sage-600"
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-64" : "max-h-0"
              }`}>
                <div className="px-5 pb-5">
                  <div className="h-px bg-warm-charcoal/5 mb-4" />
                  <p className="font-inter text-warm-charcoal/70 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-inter text-warm-charcoal/60 text-sm mb-4">
            Başka sorularınız mı var?
          </p>
          <a
            href="https://wa.me/905422722893?text=Merhaba,%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md font-poppins text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.847L.057 23.885c-.09.365.25.704.614.614l6.04-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.5-5.235-1.374l-.375-.216-3.885.945.964-3.781-.23-.39A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
