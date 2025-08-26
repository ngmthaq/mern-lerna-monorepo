import { useEffect, type FC, type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { LOCAL_STORAGE_KEYS, LOCALE_CONF } from "@/constants";
import "@/i18n";

const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const localStorageLocale = localStorage.getItem(LOCAL_STORAGE_KEYS.locale);
    if (!localStorageLocale) return;
    const language = localStorageLocale.trim();
    if (!LOCALE_CONF.supportedLngs.includes(language)) return;
    if (i18n.language === language) return;
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const key = LOCAL_STORAGE_KEYS.locale;
      const localStorageLocale = localStorage.getItem(key);
      if (localStorageLocale !== lng) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.locale, lng);
      }
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  return children;
};

export default I18nProvider;
