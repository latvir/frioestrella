"use client";

import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/1002238/2026-03-04/aa6aee94-e453-41c2-86e3-3931ee90abab.png"
          alt={t("hero.imageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0B3D91]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            {t("hero.title1")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all px-8 py-6"
            >
              <a href="#kontakti">
                {t("hero.cta1")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="!bg-transparent !hover:bg-white/10 border-2 border-white/30 text-white font-bold text-base rounded-xl px-8 py-6 hover:border-white/60 transition-all"
            >
              <a href="#pakalpojumi">{t("hero.cta2")}</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Shield className="w-8 h-8 text-[#00B4D8] flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">
                  {t("hero.guarantee")}
                </p>
                <p className="text-white/60 text-xs">
                  {t("hero.guaranteeDesc")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Clock className="w-8 h-8 text-[#00B4D8] flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">
                  {t("hero.fast")}
                </p>
                <p className="text-white/60 text-xs">{t("hero.fastDesc")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Award className="w-8 h-8 text-[#00B4D8] flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">
                  {t("hero.experience")}
                </p>
                <p className="text-white/60 text-xs">
                  {t("hero.experienceDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}