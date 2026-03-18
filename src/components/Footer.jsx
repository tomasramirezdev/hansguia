"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const WA_LINK = "https://wa.me/5521997867767";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink-soft pt-12 md:pt-14 pb-8 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-10 md:pb-12 border-b border-white/5 max-w-[1200px] mx-auto">
        
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-[24px] md:text-[26px] font-light italic text-white leading-none">Hans Bustos</div>
          <div className="text-[8px] tracking-[0.22em] uppercase text-orange-300 mt-1 mb-4">{t("footer.role")}</div>
          <p className="text-[12px] font-light text-white/30 leading-[1.7] max-w-[220px]">
            {t("footer.desc")}
          </p>
        </div>
        
        <div>
          <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/25 mb-4">{t("footer.col1")}</div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c1l1")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c1l2")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c1l3")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c1l4")}</span>
          </div>
        </div>
        
        <div>
          <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/25 mb-4">{t("footer.col2")}</div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c2l1")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c2l2")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c2l3")}</span>
            <span className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">{t("footer.c2l4")}</span>
          </div>
        </div>
        
        <div>
          <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/25 mb-4">{t("footer.col3")}</div>
          <div className="flex flex-col gap-2.5">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[13px] font-light text-white/45 transition-colors duration-150 hover:text-[#25D366]">WhatsApp</a>
            <span className="text-[13px] font-light text-white/45">hans@hansbustos.com.br</span>
            <span className="text-[13px] font-light text-white/45">Vila do Abraão, RJ</span>
            <a href="https://www.instagram.com/hansguia/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-light text-white/45 cursor-pointer transition-colors duration-150 hover:text-orange-300">Instagram</a>
          </div>
        </div>

      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 max-w-[1200px] mx-auto gap-4">
        <span className="text-[11px] text-white/20 text-center md:text-left">{t("footer.rights")}</span>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/hansguia/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/20 hover:text-orange-300 transition-colors">Instagram</a>
          <span className="text-white/10">·</span>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#25D366]/50 hover:text-[#25D366] transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
