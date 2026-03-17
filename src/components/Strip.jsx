"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Strip() {
  const { t } = useLanguage();

  return (
    <div className="bg-ink p-0">
      <div className="max-w-[1200px] mx-auto px-0 grid grid-cols-2 md:grid-cols-4 border-white/5">
        
        <div className="flex flex-col items-center justify-center p-5 md:py-12 md:px-6 border-r border-t border-b border-white/5 md:border-l">
          <div className="font-display text-[36px] md:text-[48px] font-light text-white leading-none mb-1 md:mb-2 text-center">
            <strong className="font-semibold text-orange-300">{t("strip.stat1Val")}</strong> <span className="text-[24px] md:text-[32px]">{t("strip.stat1Unit")}</span>
          </div>
          <div className="text-[8px] md:text-[10px] tracking-widest uppercase text-white/30 text-center">
            {t("strip.stat1Title")}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 md:py-12 md:px-6 border-t border-b border-white/5 md:border-r">
          <div className="font-display text-[36px] md:text-[48px] font-light text-white leading-none mb-1 md:mb-2 text-center">
            <strong className="font-semibold text-orange-300">{t("strip.stat2Val")}</strong>
          </div>
          <div className="text-[8px] md:text-[10px] tracking-widest uppercase text-white/30 text-center">
            {t("strip.stat2Title")}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 md:py-12 md:px-6 border-r border-t border-b border-white/5">
          <div className="font-display text-[36px] md:text-[48px] font-light text-white leading-none mb-1 md:mb-2 text-center">
            <strong className="font-semibold text-orange-300">{t("strip.stat3Val")}</strong>
          </div>
          <div className="text-[8px] md:text-[10px] tracking-widest uppercase text-white/30 text-center">
            {t("strip.stat3Title")}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 md:py-12 md:px-6 border-t border-b border-white/5 md:border-r">
          <div className="font-display text-[28px] md:text-[48px] font-light italic text-white leading-none mb-1 md:mb-2 text-center">
            {t("strip.stat4Title")}
          </div>
          <div className="text-[8px] md:text-[10px] tracking-widest uppercase text-white/30 text-center">
            {t("strip.stat4Subtitle")}
          </div>
        </div>

      </div>
    </div>
  );

}
