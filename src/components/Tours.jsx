"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const WA_NUMBER = "5521997867767";
const buildWaLink = (tour) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola Hans! Me interesa el tour: ${tour}. ¿Podés darme más info?`)}`;

export default function Tours() {
  const { t } = useLanguage();

  return (
    <section className="py-[100px] px-8 md:px-[80px] max-w-[1200px] mx-auto" id="tours">
      <div className="flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-4 before:content-[''] before:w-6 before:h-[0.5px] before:bg-orange-500">
        {t("tours.eyebrow")}
      </div>
      
      <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light text-ink leading-[1.1] mb-3">
        {t("tours.title1")}<br />
        <em className="italic text-stone-500">{t("tours.title2")}</em> {t("tours.title3")}
      </h2>
      
      <p className="text-[15px] font-light text-stone-500 leading-[1.7] max-w-[480px] mb-[52px]">
        {t("tours.desc")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* CARD 1 */}
        <div className="bg-white border border-stone-100 rounded-[20px] flex flex-col cursor-pointer transition-all duration-200 hover:bg-off-white hover:border-stone-300 group relative overflow-hidden">
          <div className="h-[260px] overflow-hidden relative bg-stone-300/20">
            <Image src="/Lagoa.jpg" alt="Lagoa Azul" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          </div>
          
          <div className="p-[24px_22px_20px] flex flex-col gap-2 flex-1">
            <div>
              <div className="font-display text-[11px] text-stone-300 tracking-[0.1em]">01</div>
              <div className="text-[9px] font-medium tracking-[0.16em] uppercase text-orange-500">
                {t("tours.card1.cat")}
              </div>
            </div>
            
            <div className="font-display text-[24px] font-semibold text-ink leading-[1.15]">
              {t("tours.card1.title1")}<br />
              <em className="italic font-light text-stone-500 block">{t("tours.card1.title2")}</em>
            </div>
            
            <p className="text-[12px] font-light text-stone-500 leading-[1.6] flex-1">
              {t("tours.card1.desc")}
            </p>
            
            <div className="flex gap-[14px] mt-1">
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {t("tours.card1.dur")}
              </span>
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><path d="M8 2C5.79 2 4 3.79 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                {t("tours.card1.loc")}
              </span>
            </div>
          </div>
          
          <div className="px-[22px] py-[16px] border-t border-stone-100">
            <a href={buildWaLink("Lagoa Azul & Freguesia")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-full py-2.5 font-sans text-[12px] font-medium tracking-wide transition-all duration-150 hover:bg-[#1fba59]">
              <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-white shrink-0"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/></svg>
              {t("tours.waBtn")}
            </a>
          </div>
        </div>

        {/* CARD 2 — DESTACADO */}
        <div className="bg-white border border-stone-100 rounded-[20px] flex flex-col cursor-pointer transition-all duration-200 hover:bg-off-white hover:border-stone-300 group relative overflow-hidden">
          <span className="absolute top-[14px] left-[14px] z-10 bg-sage-500 text-white text-[9px] font-medium tracking-[0.12em] uppercase px-[10px] py-1 rounded-full">
            {t("tours.featured")}
          </span>
          <div className="h-[260px] overflow-hidden relative bg-stone-300/20">
            <Image src="/Pico.jpg" alt="Pico do Papagaio" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          </div>
          
          <div className="p-[24px_22px_20px] flex flex-col gap-2 flex-1">
            <div>
              <div className="font-display text-[11px] text-stone-300 tracking-[0.1em]">02</div>
              <div className="text-[9px] font-medium tracking-[0.16em] uppercase text-orange-500">
                {t("tours.card2.cat")}
              </div>
            </div>
            
            <div className="font-display text-[24px] font-semibold text-ink leading-[1.15]">
              {t("tours.card2.title1")}<br />
              <em className="italic font-light text-stone-500 block">{t("tours.card2.title2")}</em>
            </div>
            
            <p className="text-[12px] font-light text-stone-500 leading-[1.6] flex-1">
              {t("tours.card2.desc")}
            </p>
            
            <div className="flex gap-[14px] mt-1">
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {t("tours.card2.dur")}
              </span>
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><path d="M2 12L6 5l4 6 2-4 2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t("tours.card2.loc")}
              </span>
            </div>
          </div>
          
          <div className="px-[22px] py-[16px] border-t border-stone-100">
            <a href={buildWaLink("Pico do Papagaio")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-full py-2.5 font-sans text-[12px] font-medium tracking-wide transition-all duration-150 hover:bg-[#1fba59]">
              <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-white shrink-0"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/></svg>
              {t("tours.waBtn")}
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white border border-stone-100 rounded-[20px] flex flex-col cursor-pointer transition-all duration-200 hover:bg-off-white hover:border-stone-300 group relative overflow-hidden">
          <div className="h-[260px] overflow-hidden relative bg-stone-300/20">
            <Image src="/Volta.jpg" alt="Volta à ilha" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          </div>
          
          <div className="p-[24px_22px_20px] flex flex-col gap-2 flex-1">
            <div>
              <div className="font-display text-[11px] text-stone-300 tracking-[0.1em]">03</div>
              <div className="text-[9px] font-medium tracking-[0.16em] uppercase text-orange-500">
                {t("tours.card3.cat")}
              </div>
            </div>
            
            <div className="font-display text-[24px] font-semibold text-ink leading-[1.15]">
              {t("tours.card3.title1")}<br />
              <em className="italic font-light text-stone-500 block">{t("tours.card3.title2")}</em>
            </div>
            
            <p className="text-[12px] font-light text-stone-500 leading-[1.6] flex-1">
              {t("tours.card3.desc")}
            </p>
            
            <div className="flex gap-[14px] mt-1">
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {t("tours.card3.dur")}
              </span>
              <span className="text-[10px] text-stone-500 flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="opacity-50"><path d="M8 2C5.79 2 4 3.79 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                {t("tours.card3.loc")}
              </span>
            </div>
          </div>
          
          <div className="px-[22px] py-[16px] border-t border-stone-100">
            <a href={buildWaLink("Vuelta a la isla")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-full py-2.5 font-sans text-[12px] font-medium tracking-wide transition-all duration-150 hover:bg-[#1fba59]">
              <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-white shrink-0"><path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/></svg>
              {t("tours.waBtn")}
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
