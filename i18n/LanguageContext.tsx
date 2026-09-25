"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const supported: Lang[] = ["lv", "es", "ru", "en", "de"];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lv");

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    if (value && supported.includes(value)) setLangState(value);
  }, []);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    const url = new URL(window.location.href);
    if (nextLang === "lv") url.searchParams.delete("lang");
    else url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    document.documentElement.lang = nextLang;
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.lv[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
