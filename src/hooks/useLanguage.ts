// hooks/useLanguage.ts
import { useTranslation } from "react-i18next";

interface UseLanguageReturn {
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
  languages: Array<{ code: string; name: string }>;
}

export const useLanguage = (): UseLanguageReturn => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English" },
    { code: "bn", name: "বাংলা" },
    { code: "ar", name: "العربية" },
  ];

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    languages,
  };
};
