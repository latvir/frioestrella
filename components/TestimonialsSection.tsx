"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.name1"),
      role: t("testimonials.role1"),
      text: t("testimonials.text1"),
      rating: 5,
    },
    {
      name: t("testimonials.name2"),
      role: t("testimonials.role2"),
      text: t("testimonials.text2"),
      rating: 5,
    },
    {
      name: t("testimonials.name3"),
      role: t("testimonials.role3"),
      text: t("testimonials.text3"),
      rating: 5,
    },
  ];

  return (
    <section id="atsauksmes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
            {t("testimonials.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-[#0B3D91]/10 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}