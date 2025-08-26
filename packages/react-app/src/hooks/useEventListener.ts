import { useEffect } from "react";

export function useEventListener<D>(
  eventName: string,
  handler: (event: CustomEvent, data?: D) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const e = event as CustomEvent;
      const data = e.detail as D;
      handler(e, data);
    };

    window.addEventListener(eventName, listener);

    return () => {
      window.removeEventListener(eventName, listener);
    };
  }, [eventName, handler]);
}
