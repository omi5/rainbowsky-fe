"use client";

import { useLanguage } from "@/context/LanguageContext";
import messages from "@/messages/en.json";
import bnMessages from "@/messages/bn.json";
import arMessages from "@/messages/ar.json";
import { useMemo } from "react";

const allMessages: any = {
  en: messages,
  bn: bnMessages,
  ar: arMessages,
};

export function useTranslations(namespace: string) {
  const { language } = useLanguage();

  return useMemo(() => {
    const langMessages = allMessages[language] || allMessages.en;
    const namespaceMessages = langMessages[namespace];

    return (key: string): any => {
      // Return the entire namespace if key is not provided
      if (!key) return namespaceMessages;

      // For nested keys like 'services.services'
      if (key.includes(".")) {
        return key
          .split(".")
          .reduce((obj, k) => (obj || {})[k], namespaceMessages);
      }

      return namespaceMessages ? namespaceMessages[key] : key;
    };
  }, [language, namespace]);
}
