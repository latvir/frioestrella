"use client";

import {
  Wrench,
  Settings,
  ThermometerSun,
  Headphones,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t("services.installation"),
      description: t("services.installationDesc"),
      image: "/images/installation-service.png",
    },
    {
      icon: Settings,
      title: t("services.maintenance"),
      description: t("services.maintenanceDesc"),
      image: "/images/maintenance-service.png",
    },
    {
      icon: ThermometerSun,
      title: t("services.repair"),
      description: t("services.repairDesc"),
    },
    {
      icon: Headphones,
      title: t("services.consultation"),
      description: t("services.consultationDesc"),
    },
    {
      icon: Zap,
      title: t("services.ventilation"),
      description: t("services.ventilationDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("services.warranty"),
      description: t("services.warrantyDesc"),
    },
  ];

  return (
    <section id="pakalpojumi" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
            {t("services.label")}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            {t("services.title")}
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}