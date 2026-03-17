"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <div className="bg-ink py-[100px]" id="testimonios">
      <div className="max-w-[1200px] mx-auto px-8 md:px-[80px]">
        <div className="flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] uppercase text-orange-300 mb-4 before:content-[''] before:w-6 before:h-[0.5px] before:bg-orange-300">
          {t("testimonials.eyebrow")}
        </div>
        
        <h2 className="font-display text-[clamp(28px,3vw,36px)] font-light text-white leading-[1.1] mb-3">
          {t("testimonials.title")}
        </h2>
        <p className="text-[15px] font-light text-white/50 leading-[1.7] max-w-[480px]">
          {t("testimonials.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-[20px] overflow-hidden mt-12 md:mt-[42px]">
          
          <div className="bg-white/5 p-8 md:p-[32px_28px] transition-colors duration-200 hover:bg-white/10">
            <div className="text-orange-300 text-[13px] tracking-[2px] mb-4">★★★★★</div>
            <p className="font-display text-[18px] font-light italic text-white/75 leading-[1.6] mb-6">
              "Hans nos llevó a playas que ni aparecen en Google Maps. Una experiencia
              que nunca hubiéramos tenido por nuestra cuenta. Absolutamente recomendable."
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/5">
              <div className="w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center font-display text-[14px] font-semibold text-orange-300 shrink-0">
                MA
              </div>
              <div>
                <div className="text-[13px] font-medium text-white/70">Martina A.</div>
                <div className="text-[10px] text-white/25 mt-0.5 tracking-[0.04em]">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-[32px_28px] transition-colors duration-200 hover:bg-white/10">
            <div className="text-orange-300 text-[13px] tracking-[2px] mb-4">★★★★★</div>
            <p className="font-display text-[18px] font-light italic text-white/75 leading-[1.6] mb-6">
              "El trekking al Pico do Papagaio fue brutal. Hans conoce cada roca del camino,
              cuenta la historia de la isla mientras subís y eso lo hace único."
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/5">
              <div className="w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center font-display text-[14px] font-semibold text-orange-300 shrink-0">
                JR
              </div>
              <div>
                <div className="text-[13px] font-medium text-white/70">Javier R.</div>
                <div className="text-[10px] text-white/25 mt-0.5 tracking-[0.04em]">Montevideo, Uruguay</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-[32px_28px] transition-colors duration-200 hover:bg-white/10">
            <div className="text-orange-300 text-[13px] tracking-[2px] mb-4">★★★★★</div>
            <p className="font-display text-[18px] font-light italic text-white/75 leading-[1.6] mb-6">
              "Viajé sola y Hans hizo que me sintiera completamente segura y bienvenida.
              El velero al atardecer por Lopes Mendes fue lo más hermoso que vi en la vida."
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/5">
              <div className="w-[38px] h-[38px] rounded-full bg-white/10 flex items-center justify-center font-display text-[14px] font-semibold text-orange-300 shrink-0">
                SL
              </div>
              <div>
                <div className="text-[13px] font-medium text-white/70">Sofia L.</div>
                <div className="text-[10px] text-white/25 mt-0.5 tracking-[0.04em]">Santiago, Chile</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
