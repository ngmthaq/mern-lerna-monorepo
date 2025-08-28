import { useContext } from "react";
import { HelmetContext } from "@/contexts";

export function useHelmet() {
  const context = useContext(HelmetContext);

  if (!context) {
    throw new Error("useHelmet should be call inside HelmetContext");
  }

  return context;
}
