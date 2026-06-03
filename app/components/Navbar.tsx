"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Ana navigasyon"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col leading-tight"
            onClick={handleNavClick}
          >
            <span className="font-poppins font-bold text-terracotta-600 text-sm md:text-base">
              Dyt. Armağan Gizem
            </span>
            <span className="font-poppins font-light text-warm-charcoal text-xs md:text-sm tracking-wide">
              Kantar
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-inter text-sm text-warm-charcoal hover:text-terracotta-600 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/905422722893?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold py-2.5 px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md font-poppins text-sm"
            >
              Randevu Al
            </a>
          </div>

          {/* Hamburger — min 44×44px touch target */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-warm-charcoal hover:bg-coral-100 transition-colors"
          >
            <span className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`block h-0.5 bg-warm-charcoal transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-warm-charcoal transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-warm-charcoal transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobil navigasyon"
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[28rem] pb-6" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 mt-2">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 font-inter text-sm text-warm-charcoal hover:text-terracotta-600 hover:bg-coral-50 rounded-lg transition-all min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/905422722893?text=Merhaba,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-3 w-full block text-center bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold py-3.5 px-6 rounded-full transition-all font-poppins text-sm min-h-[44px] flex items-center justify-center"
            >
              Randevu Al
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
