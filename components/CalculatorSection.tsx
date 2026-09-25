"use client";

import { useMemo, useState } from "react";
import {
  Wrench,
  Settings,
  ThermometerSun,
  Zap,
  Calculator,
  ArrowRight,
  RotateCcw,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/i18n/LanguageContext";

type ServiceId = "install" | "maintenance" | "repair" | "ventilation";
type ClassId = "economy" | "standard" | "premium";

/** Base labour price (EUR) and per-square-meter rate for each service. */
const SERVICE_RATES: Record<
  ServiceId,
  { base: number; perSqm: number; supportsEquipment: boolean }
> = {
  install: { base: 180, perSqm: 3.2, supportsEquipment: true },
  maintenance: { base: 60, perSqm: 0.8, supportsEquipment: false },
  repair: { base: 90, perSqm: 1.2, supportsEquipment: false },
  ventilation: { base: 250, perSqm: 6.5, supportsEquipment: true },
};

/** Equipment price per square meter by quality class. */
const CLASS_RATES: Record<ClassId, { perSqm: number; multiplier: number }> = {
  economy: { perSqm: 11, multiplier: 1 },
  standard: { perSqm: 17, multiplier: 1.12 },
  premium: { perSqm: 26, multiplier: 1.25 },
};

const LONG_PIPE_COST = 85;
const HIGH_ALTITUDE_COST = 120;
const URGENT_RATE = 0.2;

const formatEur = (value: number) =>
  `${Math.round(value).toLocaleString("de-DE")} €`;

export default function CalculatorSection() {
  const { t } = useLanguage();

  const [service, setService] = useState<ServiceId>("install");
  const [area, setArea] = useState<number>(35);
  const [equipmentClass, setEquipmentClass] = useState<ClassId>("standard");
  const [includeEquipment, setIncludeEquipment] = useState(true);
  const [longPipe, setLongPipe] = useState(false);
  const [highAltitude, setHighAltitude] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const services: {
    id: ServiceId;
    icon: typeof Wrench;
    title: string;
    desc: string;
  }[] = [
    {
      id: "install",
      icon: Wrench,
      title: t("calc.svcInstall"),
      desc: t("calc.svcInstallDesc"),
    },
    {
      id: "maintenance",
      icon: Settings,
      title: t("calc.svcMaintenance"),
      desc: t("calc.svcMaintenanceDesc"),
    },
    {
      id: "repair",
      icon: ThermometerSun,
      title: t("calc.svcRepair"),
      desc: t("calc.svcRepairDesc"),
    },
    {
      id: "ventilation",
      icon: Zap,
      title: t("calc.svcVentilation"),
      desc: t("calc.svcVentilationDesc"),
    },
  ];

  const classes: { id: ClassId; title: string; desc: string }[] = [
    {
      id: "economy",
      title: t("calc.classEconomy"),
      desc: t("calc.classEconomyDesc"),
    },
    {
      id: "standard",
      title: t("calc.classStandard"),
      desc: t("calc.classStandardDesc"),
    },
    {
      id: "premium",
      title: t("calc.classPremium"),
      desc: t("calc.classPremiumDesc"),
    },
  ];

  const rate = SERVICE_RATES[service];
  const equipmentEnabled = rate.supportsEquipment && includeEquipment;

  const result = useMemo(() => {
    const classRate = CLASS_RATES[equipmentClass];
    const baseWork = rate.base;
    const areaWork = area * rate.perSqm * classRate.multiplier;
    const equipment = equipmentEnabled ? area * classRate.perSqm : 0;

    let extras = 0;
    if (longPipe) extras += LONG_PIPE_COST;
    if (highAltitude) extras += HIGH_ALTITUDE_COST;

    const subtotal = baseWork + areaWork + equipment + extras;
    const urgentFee = urgent ? subtotal * URGENT_RATE : 0;
    const total = subtotal + urgentFee;

    return {
      baseWork,
      areaWork,
      equipment,
      extras,
      urgentFee,
      min: total * 0.9,
      max: total * 1.15,
    };
  }, [
    rate,
    area,
    equipmentClass,
    equipmentEnabled,
    longPipe,
    highAltitude,
    urgent,
  ]);

  const handleReset = () => {
    setService("install");
    setArea(35);
    setEquipmentClass("standard");
    setIncludeEquipment(true);
    setLongPipe(false);
    setHighAltitude(false);
    setUrgent(false);
  };

  const breakdownRows = [
    { label: t("calc.baseWork"), value: result.baseWork, show: true },
    { label: t("calc.areaSurcharge"), value: result.areaWork, show: true },
    {
      label: t("calc.equipmentCost"),
      value: result.equipment,
      show: result.equipment > 0,
    },
    {
      label: t("calc.extrasCost"),
      value: result.extras,
      show: result.extras > 0,
    },
    {
      label: t("calc.urgentCost"),
      value: result.urgentFee,
      show: result.urgentFee > 0,
    },
  ].filter((row) => row.show);

  return (
    <section id="kalkulators" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-[#00B4D8] uppercase tracking-widest mb-3">
            {t("calc.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            {t("calc.title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("calc.subtitle")}
          </p>
        </div>

        {/* Approximate price notice */}
        <div className="max-w-4xl mx-auto -mt-8 mb-12 flex items-start gap-4 rounded-2xl border border-[#FF6B35]/25 bg-[#FF6B35]/5 p-5 sm:p-6">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/15 flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-[#FF6B35]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#0F172A] mb-1">
              {t("calc.noticeTitle")}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("calc.noticeText")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Controls */}
          <div className="lg:col-span-3 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8">
            {/* Service type */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
                {t("calc.serviceType")}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {services.map((item) => {
                  const Icon = item.icon;
                  const active = service === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setService(item.id)}
                      className={`flex items-start gap-3 text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        active
                          ? "border-[#0B3D91] bg-white shadow-md"
                          : "border-slate-200 bg-white hover:border-[#00B4D8]/60 hover:shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          active
                            ? "bg-gradient-to-br from-[#0B3D91] to-[#00B4D8]"
                            : "bg-slate-100"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            active ? "text-white" : "text-slate-500"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            active ? "text-[#0B3D91]" : "text-[#0F172A]"
                          }`}
                        >
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Room size */}
            <div className="mb-8">
              <div className="flex items-end justify-between mb-4">
                <label className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">
                  {t("calc.roomSize")}
                </label>
                <span className="text-2xl font-extrabold text-[#0B3D91] leading-none">
                  {area}
                  <span className="text-sm font-bold text-slate-400 ml-1">
                    {t("calc.roomSizeUnit")}
                  </span>
                </span>
              </div>
              <Slider
                value={[area]}
                min={10}
                max={300}
                step={5}
                onValueChange={(value) => setArea(value[0])}
                className="py-2"
              />
              <div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
                <span>10 {t("calc.roomSizeUnit")}</span>
                <span>300 {t("calc.roomSizeUnit")}</span>
              </div>
            </div>

            {/* Equipment class */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
                {t("calc.equipmentClass")}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {classes.map((item) => {
                  const active = equipmentClass === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEquipmentClass(item.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        active
                          ? "border-[#0B3D91] bg-white shadow-md"
                          : "border-slate-200 bg-white hover:border-[#00B4D8]/60"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold ${
                          active ? "text-[#0B3D91]" : "text-[#0F172A]"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Extras */}
            <div>
              <label className="block text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
                {t("calc.extras")}
              </label>
              <div className="space-y-3">
                {rate.supportsEquipment && (
                  <label className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:border-[#00B4D8]/60 transition-colors">
                    <Checkbox
                      checked={includeEquipment}
                      onCheckedChange={(checked) =>
                        setIncludeEquipment(checked === true)
                      }
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      {t("calc.extraEquipment")}
                    </span>
                  </label>
                )}
                <label className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:border-[#00B4D8]/60 transition-colors">
                  <span className="flex items-center gap-3">
                    <Checkbox
                      checked={longPipe}
                      onCheckedChange={(checked) =>
                        setLongPipe(checked === true)
                      }
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      {t("calc.extraLongPipe")}
                    </span>
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    +{formatEur(LONG_PIPE_COST)}
                  </span>
                </label>
                <label className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:border-[#00B4D8]/60 transition-colors">
                  <span className="flex items-center gap-3">
                    <Checkbox
                      checked={highAltitude}
                      onCheckedChange={(checked) =>
                        setHighAltitude(checked === true)
                      }
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      {t("calc.extraHighAltitude")}
                    </span>
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    +{formatEur(HIGH_ALTITUDE_COST)}
                  </span>
                </label>
                <label className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 cursor-pointer hover:border-[#00B4D8]/60 transition-colors">
                  <span className="flex items-center gap-3">
                    <Checkbox
                      checked={urgent}
                      onCheckedChange={(checked) => setUrgent(checked === true)}
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      {t("calc.extraUrgent")}
                    </span>
                  </span>
                  <span className="text-xs font-bold text-slate-400">+20%</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#0B3D91] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-[#00B4D8]" />
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
                  {t("calc.estimate")}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">
                  {t("calc.priceFrom")}
                </p>
                <p className="text-4xl sm:text-[2.75rem] font-extrabold text-white leading-none tracking-tight">
                  {formatEur(result.min)}
                </p>
                <p className="text-sm font-semibold text-[#00B4D8] mt-2">
                  {t("calc.priceTo")} {formatEur(result.max)}
                </p>
              </div>

              {/* Breakdown */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-5">
                <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-3">
                  {t("calc.breakdown")}
                </p>
                <div className="space-y-2">
                  {breakdownRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/60">{row.label}</span>
                      <span className="font-bold text-white">
                        {formatEur(row.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="flex items-start gap-2 text-xs text-white/50 leading-relaxed mb-2">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                {t("calc.vatNote")}
              </p>
              <p className="text-xs text-white/50 leading-relaxed mb-6">
                {t("calc.disclaimer")}
              </p>

              <Button
                asChild
                className="w-full bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-xl py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#kontakti">
                  {t("calc.ctaButton")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 mt-3 py-2.5 text-sm font-semibold text-white/60 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                {t("calc.reset")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}