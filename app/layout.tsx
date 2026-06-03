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

const siteUrl = "https://dytgizemkantar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diyetisyen Armağan Gizem Kantar | Afyonkarahisar",
  description:
    "Afyonkarahisar'da uzman diyetisyen Armağan Gizem Kantar ile sağlıklı ve sürdürülebilir beslenme programları. Online ve yüz yüze beslenme danışmanlığı. 0542 272 28 93",
  keywords: [
    "diyetisyen Afyonkarahisar",
    "diyetisyen Afyon",
    "Afyon diyetisyen",
    "online diyetisyen",
    "online beslenme danışmanlığı",
    "beslenme danışmanlığı Afyonkarahisar",
    "kilo verme diyetisyen",
    "sağlıklı beslenme programı",
    "Gizem Kantar",
    "Armağan Gizem Kantar",
    "dyt Gizem Kantar",
    "beslenme uzmanı Afyon",
  ],
  authors: [{ name: "Armağan Gizem Kantar" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Diyetisyen Armağan Gizem Kantar | Afyonkarahisar",
    description:
      "Sağlıklı yaşamı sürdürülebilir hale getirin. Afyonkarahisar'da uzman diyetisyen ile online ve yüz yüze beslenme danışmanlığı.",
    type: "website",
    url: siteUrl,
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
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dietitian", "LocalBusiness"],
      "@id": `${siteUrl}/#dietitian`,
      name: "Armağan Gizem Kantar",
      jobTitle: "Diyetisyen",
      description:
        "Afyonkarahisar'da online ve yüz yüze beslenme danışmanlığı hizmetleri sunan uzman diyetisyen.",
      url: siteUrl,
      telephone: "+905422722893",
      priceRange: "₺₺",
      image: `${siteUrl}/images/uzman1.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Selçuklu Mah. 1455. Sok. No:2/1 Suit Ophelia B Blok D:3",
        addressLocality: "Afyonkarahisar",
        addressRegion: "Afyonkarahisar",
        postalCode: "03200",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.7565",
        longitude: "30.5383",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/dytgizemkantar",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        { "@type": "City", name: "Afyonkarahisar" },
        { "@type": "Country", name: "Türkiye" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Beslenme Danışmanlığı Hizmetleri",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kilo Verme Programı" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Beslenme Danışmanlığı" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kişiye Özel Beslenme Programı" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gebelikte Beslenme" } },
        ],
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased bg-warm-white text-warm-charcoal overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
