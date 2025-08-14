"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations("Languages");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang === "en" || savedLang === "bn" || savedLang === "ar") {
      setLanguage(savedLang);
    }
  }, [setLanguage]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    if (newLanguage === "en" || newLanguage === "bn" || newLanguage === "ar") {
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    }
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="bg-transparent border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="en">{t("en")}</option>
      <option value="bn">{t("bn")}</option>
      <option value="ar">{t("ar")}</option>
    </select>
  );
}
