"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-[100px] px-8 md:px-[80px] max-w-[1200px] mx-auto bg-white" id="guia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        <div className="relative">
          <div className="h-[380px] md:h-[560px] rounded-[20px] overflow-hidden bg-stone-100 relative">
            <Image
              src="/hans-bustos.jpg"
              alt="Hans Bustos — Guía oficial Ilha Grande"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="absolute -bottom-4 md:-bottom-5 -right-2.5 md:-right-5 bg-ink rounded-[20px] p-5 md:p-[20px_24px] border-[3px] border-off-white">
            <div className="font-display text-[40px] font-light text-white leading-none">
              <strong className="font-semibold text-orange-300">{t("about.yearsPrefix")}</strong>
            </div>
            <div className="text-[9px] tracking-[0.12em] uppercase text-white/30 mt-1">
              {t("about.yearsSuffix")}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-4 before:content-[''] before:w-6 before:h-[0.5px] before:bg-orange-500">
            {t("about.eyebrow")}
          </div>
          
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light text-ink leading-[1.1] mb-3">
            {t("about.title1")} <strong className="font-semibold">{t("about.title2")}</strong>
          </h2>
          
          <blockquote className="font-display text-[clamp(22px,2.5vw,32px)] font-light italic text-ink leading-[1.4] border-l-2 border-orange-500 pl-6 my-7 md:my-8">
            {t("about.quote1")}<em className="text-stone-500">{t("about.quote2")}</em>{t("about.quote3")}
          </blockquote>
          
          <p className="text-[14px] font-light text-stone-500 leading-[1.8] mb-5">
            {t("about.p1")}
          </p>
          
          <p className="text-[14px] font-light text-stone-500 leading-[1.8] mb-5">
            {t("about.p2")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-stone-100 rounded-[14px] overflow-hidden mt-9">
            <div className="bg-white p-[16px_18px]">
              <div className="text-[16px] mb-1.5">🪪</div>
              <div className="text-[13px] font-medium text-ink mb-[3px]">{t("about.f1t")}</div>
              <div className="text-[11px] font-light text-stone-500 leading-[1.5]">{t("about.f1d")}</div>
            </div>
            <div className="bg-white p-[16px_18px]">
              <div className="text-[16px] mb-1.5">🌿</div>
              <div className="text-[13px] font-medium text-ink mb-[3px]">{t("about.f2t")}</div>
              <div className="text-[11px] font-light text-stone-500 leading-[1.5]">{t("about.f2d")}</div>
            </div>
            <div className="bg-white p-[16px_18px]">
              <div className="text-[16px] mb-1.5">🗣️</div>
              <div className="text-[13px] font-medium text-ink mb-[3px]">{t("about.f3t")}</div>
              <div className="text-[11px] font-light text-stone-500 leading-[1.5]">{t("about.f3d")}</div>
            </div>
            <div className="bg-white p-[16px_18px]">
              <div className="text-[16px] mb-1.5">👥</div>
              <div className="text-[13px] font-medium text-ink mb-[3px]">{t("about.f4t")}</div>
              <div className="text-[11px] font-light text-stone-500 leading-[1.5]">{t("about.f4d")}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
