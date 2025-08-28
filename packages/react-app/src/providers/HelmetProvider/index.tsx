import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { HelmetContext, type HelmetContextType } from "@/contexts";

const HelmetProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  useEffect(() => {
    if (!icon) return;
    const faviconSelector = "link[rel='shortcut icon']";
    const favicon = document.querySelector(faviconSelector) as HTMLLinkElement;
    if (favicon) favicon.href = icon;
  }, [icon]);

  const value: HelmetContextType = {
    title,
    icon,
    setTitle,
    setIcon,
  };

  return (
    <HelmetContext.Provider value={value}>{children}</HelmetContext.Provider>
  );
};

export default HelmetProvider;
