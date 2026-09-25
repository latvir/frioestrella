"use client";

import { useState } from "react";
import { Menu, X, Phone, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: "lv", label: "LV", flag: "🇱🇻" },
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "de", label: "DE", flag: "🇩🇪" },
  ];

  const navLinks = [
    { href: "#pakalpojumi", label: t("nav.services") },
    { href: "#kalkulators", label: t("calc.label") },
    { href: "#par-mums", label: t("nav.about") },
    { href: "#zimoli", label: t("nav.brands") },
    { href: "#atsauksmes", label: t("nav.testimonials") },
    { href: "#bieziejautajumi", label: t("faq.label") },
    { href: "#kontakti", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Frioestrella
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-[#0B3D91] rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  title={item.label}
                  className={`px-2 py-1.5 text-xs font-bold rounded-md transition-all ${
                    lang === item.code
                      ? "bg-white text-[#0B3D91] shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href={lang === "es" ? "tel:+34692332266" : "tel:+37129710824"}
              className="flex items-center gap-2 text-sm font-semibold text-[#0B3D91]"
            >
              <Phone className="w-4 h-4" />
              {lang === "es" ? "+34 692 332 266" : "+371 2971 0824"}
            </a>
            <Button
              asChild
              className="bg-[#FF6B35] hover:bg-[#e55a25] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <a href="#kontakti">{t("nav.cta")}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === item.code
                      ? "bg-white text-[#0B3D91] shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  {item.flag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:text-[#0B3D91] hover:bg-slate-50 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={lang === "es" ? "tel:+34692332266" : "tel:+37129710824"}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#0B3D91]"
              >
                <Phone className="w-4 h-4" />
                {lang === "es" ? "+34 692 332 266" : "+371 2971 0824"}
              </a>
              <Button
                asChild
                className="w-full mt-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-semibold rounded-lg"
              >
                <a href="#kontakti" onClick={() => setIsOpen(false)}>
                  {t("nav.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}