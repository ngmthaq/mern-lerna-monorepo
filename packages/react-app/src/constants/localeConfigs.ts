import {
  AG_GRID_LOCALE_EN,
  AG_GRID_LOCALE_VN,
} from "@ag-grid-community/locale";
import TIME_AGO_LOCALE_EN from "timeago.js/lib/lang/en_US";
import TIME_AGO_LOCALE_VI from "timeago.js/lib/lang/vi";

export const LOCALE_CONF = {
  fallbackLng: "en",
  supportedLngs: {
    en: "en",
    vi: "vi",
  },
  agGridLocaleMap: {
    en: AG_GRID_LOCALE_EN,
    vi: AG_GRID_LOCALE_VN,
  },
  timeAgoLocaleMap: {
    en: TIME_AGO_LOCALE_EN,
    vi: TIME_AGO_LOCALE_VI,
  },
};
