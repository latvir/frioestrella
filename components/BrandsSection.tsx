"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function BrandsSection() {
  const { t } = useLanguage();

  const brands = [
    {
      name: "Daikin",
      description: t("brands.daikin"),
      specialty: t("brands.daikinSpec"),
    },
    {
      name: "Mitsubishi Electric",
      description: t("brands.mitsubishi"),
      specialty: t("brands.mitsubishiSpec"),
    },
    {
      name: "Samsung",
      description: t("brands.samsung"),
      specialty: t("brands.samsungSpec"),
    },
    {
      name: "LG",
      description: t("brands.lg"),
      specialty: t("brands.lgSpec"),
    },
    {
      name: "Toshiba",
      description: t("brands.toshiba"),
      specialty: t("brands.toshibaSpec"),
    },
    {
      name: "Gree",
      description: t("brands.gree"),
      specialty: t("brands.greeSpec"),
    },
    {
      name: "Nordis",
      description: t("brands.nordis"),
      specialty: t("brands.nordisSpec"),
    },
  ];

  return (
    <section id="zimoli" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
            {t("brands.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            {t("brands.title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("brands.subtitle")}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B3D91]/10 to-[#00B4D8]/10 flex items-center justify-center border border-[#0B3D91]/10">
                  <span className="text-xl font-extrabold text-[#0B3D91]">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {brand.name}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-[#00B4D8] bg-[#00B4D8]/10 rounded-full px-2.5 py-0.5 mt-1">
                    {brand.specialty}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}