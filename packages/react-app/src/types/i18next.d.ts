import "i18next";
import en from "@/i18n/resources/en.json";

export type NestedKeyOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any>,
  K extends keyof T = keyof T,
> = K extends string
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T[K] extends Record<string, any>
    ? `${K}.${NestedKeyOf<T[K]>}` | K
    : K
  : never;

export type TranslationKeys = NestedKeyOf<typeof en.translation>;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}
