"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const WA_NUMBER = "5521997867767"; // +55 21 99786-7767

function buildWaLink(message = "") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}

export default function Booking() {
  const { t } = useLanguage();

  const waDefault = buildWaLink(t("booking.waDefaultMsg"));

  return (
    <section className="py-[100px] px-8 md:px-[80px] max-w-[1200px] mx-auto" id="reserva">
      <div className="flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-4 before:content-[''] before:w-6 before:h-[0.5px] before:bg-orange-500">
        {t("booking.eyebrow")}
      </div>

      <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light text-ink leading-[1.1] mb-12">
        {t("booking.title1")}<br />
        <strong className="font-semibold">{t("booking.title2")}</strong>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left panel — dark info box */}
        <div className="bg-ink rounded-[20px] p-10 md:p-[52px_48px] flex flex-col justify-between">
          <div>
            <div className="font-display text-[clamp(28px,3vw,44px)] font-light italic text-white leading-[1.15] mb-4">
              <em>{t("booking.boxTitle1")}</em>
              <strong className="not-italic font-semibold block">{t("booking.boxTitle2")}</strong>
            </div>
            <p className="text-[13px] font-light text-white/40 leading-[1.7] mb-10">
              {t("booking.boxDesc")}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3 text-[13px] font-light text-white/50">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[13px] shrink-0">📍</div>
              {t("booking.loc")}
            </div>
            <div className="flex items-center gap-3 text-[13px] font-light text-white/50">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[13px] shrink-0">📱</div>
              +55 21 99786-7767
            </div>
            <div className="flex items-center gap-3 text-[13px] font-light text-white/50">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[13px] shrink-0">🌐</div>
              {t("booking.lang")}
            </div>
          </div>
        </div>

        {/* Right panel — WhatsApp CTA */}
        <div className="bg-white border border-stone-100 rounded-[20px] p-10 md:p-[52px_44px] flex flex-col justify-between">
          <div>
            {/* WhatsApp icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 32 32" className="w-7 h-7 fill-[#25D366]">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.773-1.853l-.485-.29-5.032 1.188 1.22-4.904-.317-.503A13.253 13.253 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/>
              </svg>
            </div>

            <div className="font-display text-[22px] font-semibold text-ink mb-3">
              {t("booking.waTitle")}
            </div>
            <p className="text-[13px] font-light text-stone-500 leading-[1.7] mb-8">
              {t("booking.waDesc")}
            </p>

            {/* Quick tour buttons */}
            <div className="flex flex-col gap-2.5 mb-8">
              {[
                { label: "Lagoa Azul & Freguesia — Snorkel", tour: "Lagoa Azul & Freguesia" },
                { label: "Pico do Papagaio — Trekking", tour: "Pico do Papagaio" },
                { label: t("booking.fTourOpt3"), tour: "Volta a la isla" },
                { label: t("booking.fTourOpt4"), tour: "" },
              ].map(({ label, tour }) => (
                <a
                  key={label}
                  href={buildWaLink(`Hola Hans! Me interesa el tour: ${tour || "personalizado"}. ¿Podés darme más info?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 border border-stone-100 rounded-xl text-[12px] font-light text-ink hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-150 group"
                >
                  <span>{label}</span>
                  <svg viewBox="0 0 32 32" className="w-4 h-4 fill-stone-300 group-hover:fill-[#25D366] transition-colors shrink-0 ml-2">
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <a
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white rounded-full py-4 font-sans text-[14px] font-medium tracking-wide transition-all duration-200 hover:bg-[#1fba59] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.479-2.003A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.199-2.357-1.163-2.723-1.296-.365-.132-.631-.199-.897.199-.266.398-1.031 1.296-1.264 1.562-.232.266-.464.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.464.597-.696.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.23-2.96-.323-.778-.651-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.327 0 1.963 1.429 3.86 1.628 4.126.199.266 2.814 4.295 6.818 6.025.953.411 1.696.657 2.276.84.956.304 1.826.261 2.515.158.767-.114 2.357-.964 2.69-1.894.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.763-.465z"/>
            </svg>
            {t("booking.waCta")}
          </a>
          <p className="text-center text-[10px] text-stone-300 mt-2.5 tracking-[0.04em]">
            {t("booking.footer")}
          </p>
        </div>

      </div>
    </section>
  );
}
