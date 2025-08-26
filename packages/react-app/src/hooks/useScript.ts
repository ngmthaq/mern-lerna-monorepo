import { useEffect } from "react";

export function useScript(scriptUrl: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptUrl;
    document.body.append(script);

    return () => {
      script.remove();
    };
  }, [scriptUrl]);
}
