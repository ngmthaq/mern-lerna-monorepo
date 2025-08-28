import { useEffect, type FC, type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import * as timeago from "timeago.js";
import { LOCAL_STORAGE_KEYS, LOCALE_CONF } from "@/constants";
import { dayjs } from "@/utils";
import "@/i18n";

const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();

  const handleSyncLanguage = (lng: string) => {
    type Key = keyof typeof LOCALE_CONF.timeAgoLocaleMap;
    timeago.register(lng, LOCALE_CONF.timeAgoLocaleMap[lng as Key]);
    document.documentElement.lang = lng;
    dayjs.locale(lng);
  };

  useEffect(() => {
    const localStorageLocale = localStorage.getItem(LOCAL_STORAGE_KEYS.locale);
    if (!localStorageLocale) return;
    const lng = localStorageLocale.trim();
    if (!Object.values(LOCALE_CONF.supportedLngs).includes(lng)) return;
    if (i18n.language === lng) return;
    i18n.changeLanguage(lng);
    handleSyncLanguage(lng);
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const key = LOCAL_STORAGE_KEYS.locale;
      const localStorageLocale = localStorage.getItem(key);
      if (localStorageLocale === lng) return;
      localStorage.setItem(LOCAL_STORAGE_KEYS.locale, lng);
      handleSyncLanguage(lng);
    };

    const handleInitLanguage = () => {
      handleSyncLanguage(LOCALE_CONF.fallbackLng);
    };

    i18n.on("initialized", handleInitLanguage);
    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("initialized", handleInitLanguage);
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  return children;
};

export default I18nProvider;
