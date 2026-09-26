"use client";

import { CheckCircle2, Users, Building2, Thermometer } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "2000+", label: t("about.clients") },
    { icon: Building2, value: "500+", label: t("about.projects") },
    { icon: Thermometer, value: "15+", label: t("about.years") },
  ];

  const features = [
    t("about.feature1"),
    t("about.feature2"),
    t("about.feature3"),
    t("about.feature4"),
    t("about.feature5"),
    t("about.feature6"),
  ];

  return (
    <section id="par-mums" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/frioestrella-about.png"
                alt={t("about.imageAlt")}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-[#0B3D91]">98%</p>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {t("about.satisfaction")}
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
              {t("about.label")}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-6 leading-tight">
              {t("about.title1")}
              <span className="text-[#0B3D91]">{t("about.title2")}</span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {t("about.description")}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-[#F8FAFC] border border-slate-100"
                  >
                    <Icon className="w-6 h-6 text-[#0B3D91] mx-auto mb-2" />

                    <p className="text-2xl font-extrabold text-[#0F172A]">
                      {stat.value}
                    </p>

                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}