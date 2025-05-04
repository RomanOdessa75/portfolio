import { useSyncExternalStore } from "react";

function useMediaQuery(query: string): boolean {
  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  const subscribe = (callback: () => void): (() => void) => {
    if (typeof window === "undefined") return () => {};
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener("change", callback);
    return () => mediaQueryList.removeEventListener("change", callback);
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
