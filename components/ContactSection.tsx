"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Send,
  Snowflake,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Message delivery failed.");

      toast.success(t("contact.toastTitle"), {
        description: t("contact.toastDesc"),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Message delivery failed.");
    }
  };

  const contactRegions = [
    {
      region: `🇱🇻 ${t("contact.regionLV")}`,
      items: [
        {
          icon: Phone,
          label: t("contact.phone"),
          value: "+371 2971 0824",
          href: "tel:+37129710824",
        },
        {
          icon: Mail,
          label: t("contact.email"),
          value: "frioestrellasl@gmail.com",
          href: "mailto:frioestrellasl@gmail.com",
        },
        {
          icon: Clock,
          label: t("contact.hours"),
          value: t("contact.hoursLV"),
          href: "#",
        },
      ],
    },
    {
      region: `🇪🇸 ${t("contact.regionES")}`,
      items: [
        {
          icon: Phone,
          label: t("contact.phone"),
          value: "+34 692 332 266",
          href: "tel:+34692332266",
        },
        {
          icon: Mail,
          label: t("contact.email"),
          value: "frioestrellasl@gmail.com",
          href: "mailto:frioestrellasl@gmail.com",
        },
        {
          icon: Clock,
          label: t("contact.hours"),
          value: t("contact.hoursES"),
          href: "#",
        },
      ],
    },
  ];

  const footerLinks = [
    { href: "#pakalpojumi", label: t("nav.services") },
    { href: "#kalkulators", label: t("calc.label") },
    { href: "#par-mums", label: t("nav.about") },
    { href: "#zimoli", label: t("nav.brands") },
    { href: "#atsauksmes", label: t("nav.testimonials") },
    { href: "#bieziejautajumi", label: t("faq.label") },
    { href: "#kontakti", label: t("nav.contact") },
  ];

  return (
    <>
      <section id="kontakti" className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
              {t("contact.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info - Two Regions */}
            <div className="lg:col-span-2 space-y-6">
              {contactRegions.map((region, regionIndex) => (
                <div key={regionIndex}>
                  <h3 className="text-base font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                    <span className="text-xl">
                      {region.region.split(" ")[0]}
                    </span>
                    <span>
                      {region.region.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {region.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#0B3D91] transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  {t("contact.formTitle")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      {t("contact.name")}
                    </label>
                    <Input
                      required
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="rounded-lg border-slate-300 focus:border-[#0B3D91] focus:ring-[#0B3D91]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      {t("contact.phone")} *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder={t("contact.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="rounded-lg border-slate-300 focus:border-[#0B3D91] focus:ring-[#0B3D91]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                    {t("contact.emailLabel")}
                  </label>
                  <Input
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-lg border-slate-300 focus:border-[#0B3D91] focus:ring-[#0B3D91]"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder={t("contact.messagePlaceholder")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-lg border-slate-300 focus:border-[#0B3D91] focus:ring-[#0B3D91] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-xl py-6 text-base shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t("contact.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B3D91] to-[#00B4D8] flex items-center justify-center">
                  <Snowflake className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-extrabold">
                  Frioestrella SIA
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-300">
                {t("footer.quickLinks")}
              </h4>
              <div className="space-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-300">
                {t("footer.followUs")}
              </h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0B3D91] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0B3D91] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-slate-400">
                frioestrellasl@gmail.com
                <br />
                🇱🇻 +371 2971 0824
                <br />
                🇪🇸 +34 692 332 266
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-xs text-slate-500">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}