import { atom, useAtom } from "jotai";
import { STORAGE_KEYS } from "@/constants";

const localStorageLocale = localStorage.getItem(STORAGE_KEYS.LOCALE) || "en";
const localeAtom = atom<string>(localStorageLocale);
localeAtom.debugLabel = "localeAtom";

const useLocaleAtom = () => useAtom(localeAtom);

export { useLocaleAtom };
