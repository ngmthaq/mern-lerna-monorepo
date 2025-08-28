import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LOCALE_CONF } from "@/constants";
import en from "./resources/en.json";
import vi from "./resources/vi.json";
import "dayjs/locale/en";
import "dayjs/locale/vi";

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: { en, vi },
  lng: LOCALE_CONF.fallbackLng,
  fallbackLng: LOCALE_CONF.fallbackLng,
  supportedLngs: Object.values(LOCALE_CONF.supportedLngs),
  debug: import.meta.env.DEV,
  interpolation: { escapeValue: false },
});
