import "i18next";
import en from "@/i18n/resources/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}
