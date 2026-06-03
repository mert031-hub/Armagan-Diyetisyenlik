import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dytgizemkantar.com"),
  title: "Diyetisyen Armağan Gizem Kantar | Afyonkarahisar",
  description:
    "Afyonkarahisar'da uzman diyetisyen Armağan Gizem Kantar ile sağlıklı ve sürdürülebilir beslenme programları. Online ve yüz yüze beslenme danışmanlığı.",
  keywords: [
    "diyetisyen Afyonkarahisar",
    "Afyon diyetisyen",
    "online diyetisyen",
    "beslenme danışmanlığı",
    "kilo verme",
    "sağlıklı beslenme",
    "Gizem Kantar",
    "Armağan Gizem Kantar",
  ],
  authors: [{ name: "Armağan Gizem Kantar" }],
  openGraph: {
    title: "Diyetisyen Armağan Gizem Kantar | Afyonkarahisar",
    description:
      "Sağlıklı yaşamı sürdürülebilir hale getirin. Afyonkarahisar'da uzman diyetisyen ile online ve yüz yüze beslenme danışmanlığı.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/uzman1.jpg",
        width: 1200,
        height: 630,
        alt: "Diyetisyen Armağan Gizem Kantar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyetisyen Armağan Gizem Kantar | Afyonkarahisar",
    description:
      "Sağlıklı yaşamı sürdürülebilir hale getirin. Uzman diyetisyen ile online ve yüz yüze beslenme danışmanlığı.",
    images: ["/images/uzman1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dietitian",
              name: "Armağan Gizem Kantar",
              jobTitle: "Diyetisyen",
              description:
                "Afyonkarahisar'da online ve yüz yüze beslenme danışmanlığı hizmetleri sunan uzman diyetisyen.",
              url: "https://dytgizemkantar.com",
              telephone: "+905422722893",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Selçuklu Mah. 1455. Sok. No:2/1 Suit Ophelia B Blok D:3",
                addressLocality: "Afyonkarahisar",
                addressRegion: "Afyonkarahisar",
                addressCountry: "TR",
              },
              sameAs: ["https://www.instagram.com/dytgizemkantar"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "9",
              },
              areaServed: [
                "Afyonkarahisar",
                "Türkiye",
              ],
              serviceType: [
                "Kilo Verme Programı",
                "Online Beslenme Danışmanlığı",
                "Kişiye Özel Beslenme Programı",
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-warm-white text-warm-charcoal overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
