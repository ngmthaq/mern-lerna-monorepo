import { createContext } from "react";

export type HelmetContextType = {
  title: string;
  icon: string;
  setTitle: (title: string) => void;
  setIcon: (icon: string) => void;
};

export const HelmetContext = createContext({} as HelmetContextType);
