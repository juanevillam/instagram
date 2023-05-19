import { useEffect } from "react";
import { useMedia } from "./useMedia";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );

  const [enabled, setEnabled] = useLocalStorage(
    "dark-mode-enabled",
    prefersDarkMode
  );

  useEffect(() => {
    const className = "dark";

    const element = window.document.body;

    enabled
      ? element.classList.add(className)
      : element.classList.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
};
