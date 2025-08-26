import { useEffect } from "react";

export function useStyle(styleUrl: string) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleUrl;
    document.head.append(link);

    return () => {
      link.remove();
    };
  }, [styleUrl]);
}
