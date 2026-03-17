"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const CROSSFADE_SECONDS = 1.8;

// Detect mobile to skip autoplay video (saves ~342MB download)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Consider mobile: narrow screen OR touch-only device
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Hero() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const videoA = useRef(null);
  const videoB = useRef(null);
  const activeRef = useRef("A");
  const [visibleVideo, setVisibleVideo] = useState("A");
  const fadingRef = useRef(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isMobile) return; // skip video logic on mobile
    const vA = videoA.current;
    const vB = videoB.current;
    if (!vA || !vB) return;

    vA.play().catch(() => { });

    const tick = () => {
      const active = activeRef.current === "A" ? vA : vB;
      const next = activeRef.current === "A" ? vB : vA;
      if (!active.duration || fadingRef.current) return;
      const timeLeft = active.duration - active.currentTime;
      if (timeLeft <= CROSSFADE_SECONDS) {
        fadingRef.current = true;
        next.currentTime = 0;
        next.play().catch(() => { });
        const nextName = activeRef.current === "A" ? "B" : "A";
        activeRef.current = nextName;
        setVisibleVideo(nextName);
        setTimeout(() => { fadingRef.current = false; }, CROSSFADE_SECONDS * 1000 + 500);
      }
    };

    const interval = setInterval(tick, 250);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden bg-ink">

      {/* Mobile: static image background, fast to load */}
      {isMobile && (
        <div className="absolute inset-0">
          <Image
            src="/Lagoa.jpg"
            alt="Ilha Grande"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* Desktop: dual-video crossfade */}
      {!isMobile && (
        <>
          <video
            ref={videoA}
            src="/hero-video.MP4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: visibleVideo === "A" ? 1 : 0,
              transition: `opacity ${CROSSFADE_SECONDS}s ease-in-out`,
            }}
          />
          <video
            ref={videoB}
            src="/hero-video.MP4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: visibleVideo === "B" ? 1 : 0,
              transition: `opacity ${CROSSFADE_SECONDS}s ease-in-out`,
            }}
          />
        </>
      )}

      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/95 via-[#0e0c0a]/50 to-[#0e0c0a]/20 z-[1]" />

      <div className="relative z-10 px-6 md:px-20 pb-14 md:pb-20 max-w-[1200px] w-full mx-auto">
        <div className="flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] uppercase text-orange-300 mb-4 md:mb-5 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards] before:content-[''] before:w-8 before:h-[0.5px] before:bg-orange-300">
          {t("hero.eyebrow")}
        </div>

        <h1 className="font-display font-light text-white leading-none mb-4 md:mb-5 opacity-0 animate-[fadeUp_0.9s_0.5s_forwards]">
          <span className="block text-[clamp(44px,7vw,96px)]">{t("hero.title1")}</span>
          <span className="block text-[clamp(44px,7vw,96px)] font-semibold">
            {t("hero.title2")}
          </span>
          <span className="block text-[clamp(14px,2vw,26px)] italic text-orange-300/80 mt-2 font-light tracking-wide">
            {t("hero.tagline")}
          </span>
        </h1>

        <p className="text-[14px] md:text-[15px] font-light text-white/45 leading-[1.7] max-w-[420px] mb-7 md:mb-9 opacity-0 animate-[fadeUp_0.9s_0.7s_forwards]">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-wrap gap-3 items-center mb-10 md:mb-16 opacity-0 animate-[fadeUp_0.9s_0.9s_forwards]">
          <button
            onClick={() => scrollTo("tours")}
            className="bg-orange-500 text-white rounded-full px-7 py-3 md:px-8 md:py-3.5 font-sans text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-orange-700 hover:-translate-y-0.5"
          >
            {t("hero.btnPrimary")} &rarr;
          </button>
          <button
            onClick={() => scrollTo("guia")}
            className="bg-transparent text-white/60 border border-white/20 rounded-full px-7 py-3 md:px-8 md:py-3.5 font-sans text-[13px] font-light transition-all duration-200 hover:text-white hover:border-white/50"
          >
            {t("hero.btnSecondary")}
          </button>
        </div>

        <div className="flex flex-wrap gap-7 md:gap-10 pt-6 md:pt-7 border-t border-white/10 opacity-0 animate-[fadeUp_0.9s_1.1s_forwards]">
          <div>
            <div className="font-display text-[30px] md:text-[34px] font-light text-white leading-none">
              <strong className="font-semibold">113</strong>
            </div>
            <div className="text-[9px] tracking-[0.14em] uppercase text-white/30 mt-1">
              Playas en la isla
            </div>
          </div>
          <div>
            <div className="font-display text-[30px] md:text-[34px] font-light text-white leading-none">
              <strong className="font-semibold">+80</strong>
              <span className="text-[18px] md:text-[20px] font-light text-white/40">%</span>
            </div>
            <div className="text-[9px] tracking-[0.14em] uppercase text-white/30 mt-1">
              Reserva natural
            </div>
          </div>
          <div>
            <div className="font-display text-[30px] md:text-[34px] italic font-light text-white leading-none">
              +15
            </div>
            <div className="text-[9px] tracking-[0.14em] uppercase text-white/30 mt-1">
              {t("hero.statExp")}
            </div>
          </div>
          <div>
            <div className="font-display text-[30px] md:text-[34px] font-light text-white leading-none">
              <strong className="font-semibold">5</strong>
            </div>
            <div className="text-[9px] tracking-[0.14em] uppercase text-white/30 mt-1">
              {t("hero.statLang")}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
