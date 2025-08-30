import { AG_GRID_LOCALE_EN } from "@ag-grid-community/locale";
import { en } from "@toolpad/core/locales";
import TIME_AGO_LOCALE_EN from "timeago.js/lib/lang/en_US";

export const LOCALE_CONF = {
  fallbackLng: "en",
  supportedLngs: {
    en: "en",
  },
  agGridLocaleMap: {
    en: AG_GRID_LOCALE_EN,
  },
  timeAgoLocaleMap: {
    en: TIME_AGO_LOCALE_EN,
  },
  toolpadLocaleMap: {
    en: en.components.MuiLocalizationProvider.defaultProps.localeText,
  },
};
