export function useDispatchEvent() {
  const dispatchEvent = <D>(eventName: string, data?: D) => {
    const event = new CustomEvent(eventName, { detail: data });
    window.dispatchEvent(event);
  };

  return { dispatchEvent };
}
