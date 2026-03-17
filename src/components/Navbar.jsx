"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FLAGS = { 
  es: { code: "ar", label: "ES" }, 
  pt: { code: "br", label: "PT" }, 
  en: { code: "gb", label: "EN" }, 
  fr: { code: "fr", label: "FR" }, 
  de: { code: "de", label: "DE" } 
};

const WA_LINK = "https://wa.me/5521997867767";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("tours");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, changeLanguage, t } = useLanguage();
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handler = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "tours", label: t("nav.tours") },
    { id: "guia", label: t("nav.guide") },
    { id: "testimonios", label: t("nav.testimonials") },
    { id: "reserva", label: t("nav.contact") },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-20 h-[60px] md:h-[68px] flex items-center justify-center transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-ink/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] w-full flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex flex-col gap-[1px] cursor-pointer"
            onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span className="font-display text-[20px] md:text-[22px] font-light italic text-white leading-none tracking-wide">
              Hans Bustos
            </span>
            <span className="text-[7px] font-normal tracking-[0.24em] uppercase text-orange-300 leading-none">
              {t("footer.role").split(" · ")[0]}
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-xs font-normal cursor-pointer tracking-wider transition-colors duration-150 ${
                  activeSection === link.id
                    ? "text-orange-300"
                    : "text-white/45 hover:text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: lang + cta + hamburger */}
          <div className="flex items-center gap-3 md:gap-7">
            {/* Language picker */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity p-2"
                aria-label="Change language"
              >
                {FLAGS[lang] && (
                  <img
                    src={`https://flagcdn.com/w20/${FLAGS[lang].code}.png`}
                    srcSet={`https://flagcdn.com/w40/${FLAGS[lang].code}.png 2x`}
                    width="20"
                    height="14"
                    alt={lang}
                    className="rounded-[2px] block"
                    loading="lazy"
                  />
                )}
                <span className="text-[9px] text-white/50">▼</span>
              </button>

              {langMenuOpen && (
                <div className="absolute top-[120%] right-0 bg-ink-soft border border-white/10 rounded-xl p-2 flex flex-col gap-1 min-w-[110px] shadow-2xl z-50 animate-[fadeUp_0.2s_ease-out_forwards]">
                  {Object.keys(FLAGS).map((l) => (
                    <button
                      key={l}
                      onClick={() => { changeLanguage(l); setLangMenuOpen(false); }}
                      className={`flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-lg text-xs font-sans cursor-pointer transition-colors duration-150 border-none ${
                        lang === l ? "bg-white/10 text-white" : "bg-transparent text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${FLAGS[l].code}.png`}
                        srcSet={`https://flagcdn.com/w40/${FLAGS[l].code}.png 2x`}
                        width="20"
                        height="14"
                        alt={l}
                        className="rounded-[2px] block shrink-0"
                        loading="lazy"
                      />
                      <span className="uppercase tracking-widest text-[10px]">{l}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo("reserva")}
              className="hidden md:block bg-orange-500 text-white border-none rounded-full px-[22px] py-[9px] font-sans text-xs font-medium cursor-pointer tracking-wide transition-all duration-150 hover:bg-orange-700 hover:-translate-y-[1px] whitespace-nowrap"
            >
              {t("nav.book")}
            </button>

            {/* Mobile: WhatsApp shortcut + hamburger */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] shrink-0"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/>
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="Menu"
            >
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-ink/98 flex flex-col items-center justify-center gap-8 animate-[fadeUp_0.2s_ease-out_forwards]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-display text-[32px] font-light italic text-white hover:text-orange-300 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2.5 bg-[#25D366] text-white rounded-full px-8 py-3.5 font-sans text-[14px] font-medium"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/>
            </svg>
            {t("nav.book")}
          </a>
        </div>
      )}
    </>
  );
}
