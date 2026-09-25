"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQ_IDS = [1, 2, 3, 4, 5] as const;

/** Biežāk uzdotie jautājumi — uzlabo meklētāju rezultātu izskatu (FAQ rich results). */
export default function FaqSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="bieziejautajumi" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
            {t("faq.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-slate-600 leading-relaxed">{t("faq.subtitle")}</p>
        </div>

        <div className="space-y-3">
          {FAQ_IDS.map((id) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className="rounded-xl border border-slate-200 bg-[#F8FAFC] overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 flex-shrink-0 text-[#0B3D91]" />
                    <span className="text-base font-bold text-[#0F172A]">
                      {t(`faq.q${id}`)}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-13">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t(`faq.a${id}`)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
