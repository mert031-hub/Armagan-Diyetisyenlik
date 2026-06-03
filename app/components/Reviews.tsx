"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Ahmet ULUPINAR",
    time: "Bir ay önce",
    text: "İlgi, bilgi, etkili sonuç — daha ne olsun! Gizem hanımla çalışmak gerçekten harika bir deneyim. Kendisine olan güvenim her geçen gün artıyor.",
    rating: 5,
    initials: "AU",
  },
  {
    name: "Gokce Nur Yeşilay",
    time: "Bir ay önce",
    text: "Diyet sürecini sancılı bir süreç olmaktan çıkaran, diyette hissinden uzak 'sağlıklı beslenme'yi öğreten, bu konuda insanı motive ve disipline eden bunu disiplini güler yüzle sağlayabilen nadide bir insan.",
    rating: 5,
    initials: "GY",
  },
  {
    name: "Furkan Urhan",
    time: "Bir ay önce",
    text: "Gizem hanım hoş sohbeti, güler yüzü, neşesiyle bir diyetisyen değil bir arkadaş gibi harika bir insan. İmkanı olan herkes Gizem hanımın danışanı olmayı tecrübe etmeli. Her hafta randevu gününü iple çekiyorum.",
    rating: 5,
    initials: "FU",
  },
  {
    name: "Kübra Nur Yılmaz",
    time: "Bir ay önce",
    text: "Diyetisyene başlarken açıkçası biraz endişelerim vardı ama daha ilk görüşmeden itibaren ne kadar doğru bir karar verdiğimi anladım. Sadece bir diyet listesi vermekle kalmayıp, sağlıklı beslenmeyi gerçekten öğretti.",
    rating: 5,
    initials: "KY",
  },
  {
    name: "Esra Keleş",
    time: "2 ay önce",
    text: "Kendisi güler yüzlü, tatlı ve mükemmel bir diyetisyen. Programı uygulamak hiç zor gelmedi, hatta keyifli bile oldu!",
    rating: 5,
    initials: "EK",
  },
  {
    name: "Asiye Karol",
    time: "2 ay önce",
    text: "Seninle tanışmak benim için gerçekten büyük bir şanstı. En zor anlarda bile beni sabırla dinleyip motive ettiğin için sana minnettarım. Sayende hem bedenim hem ruhum çok daha iyi bir yerde. İyi ki hayatıma dokundun!",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Busra Cengelci",
    time: "2 ay önce",
    text: "Kendisi bir diyetisyenden daha fazlası. Attığı mesajlarla modunuzun düşmesi imkansız. Her gün motive edici bir enerji ile sürecinizi destekliyor.",
    rating: 5,
    initials: "BC",
  },
  {
    name: "Keziban BOSTAN",
    time: "2 ay önce",
    text: "Canım Gizem hocamla kilolardan kurtulmaya devam. Kendisi işinde çok başarılı ve bir o kadar da sevecen yaklaşımlarıyla insanı motive ediyor.",
    rating: 5,
    initials: "KB",
  },
  {
    name: "Esin Doğan",
    time: "2 ay önce",
    text: "Muhteşem enerjisi, uygulanabilir listeleri ve harika sonuçlarıyla deneyimlediklerinize inanamadığınız ve her görüşmenizde bambaşka bir versiyonunuzla tanıştığınız bir ofis.",
    rating: 5,
    initials: "ED",
  },
  {
    name: "Doğa Durak",
    time: "2 ay önce",
    text: "Gizem Hanım işini gerçekten çok severek yapıyor. Danışanlarına olan güler yüzlü yaklaşımı, kişiye özel ilgisi işindeki profesyonelliğini gösteriyor. Hiç sıkılmadan ve acıkmadan diyet yapabilmek benim için çok önemliydi.",
    rating: 5,
    initials: "DD",
  },
];

const avatarGradients = [
  "from-coral-300 to-terracotta-500",
  "from-coral-200 to-coral-400",
  "from-terracotta-400 to-terracotta-600",
  "from-coral-300 to-terracotta-400",
  "from-coral-400 to-terracotta-500",
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="yorumlar" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-coral-200" />
            <p className="font-poppins font-semibold text-terracotta-600 uppercase tracking-widest text-xs">
              Yorumlar
            </p>
            <div className="h-px w-8 bg-coral-200" />
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-tight mb-4">
            Danışanlarım ne diyor?
          </h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-sm px-6 py-4 border border-warm-charcoal/5">
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl text-warm-charcoal">5.0</div>
              <div className="flex justify-center mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="font-inter text-warm-charcoal/60 text-xs mt-1">Google</div>
            </div>
            <div className="w-px h-12 bg-warm-charcoal/10" />
            <div className="text-left">
              <div className="font-poppins font-bold text-warm-charcoal text-sm">Mükemmel</div>
              <div className="font-inter text-warm-charcoal/70 text-xs">10+ Değerlendirme</div>
              <div className="font-inter text-warm-charcoal/70 text-xs">Doğrulanmış Yorumlar</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-warm-charcoal/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Review text with decorative quote */}
              <div className="relative flex-1">
                <span className="absolute -top-1 -left-0.5 text-3xl text-coral-200 font-serif leading-none select-none" aria-hidden="true">❝</span>
                <p className="font-inter text-warm-charcoal/75 text-sm leading-relaxed pt-3 pl-4">
                  {review.text}
                </p>
              </div>
              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-warm-charcoal/5">
                <div className={`w-10 h-10 bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} text-white rounded-full flex items-center justify-center font-poppins font-bold text-xs`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-warm-charcoal text-sm">
                    {review.name}
                  </div>
                  <div className="font-inter text-warm-charcoal/50 text-xs">
                    {review.time}
                  </div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && reviews.length > 6 && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-coral-50 text-terracotta-600 border-2 border-coral-200 font-semibold py-3 px-6 rounded-full transition-all duration-300 font-poppins text-sm min-h-[44px]"
            >
              Tüm Yorumları Gör
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
