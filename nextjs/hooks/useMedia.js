import { useCallback, useEffect, useState } from "react";

export const useMedia = (queries, values, defaultValue) => {
  const [mediaQueryLists, setMediaQueryLists] = useState(null);

  const getValue = useCallback(() => {
    const index = mediaQueryLists?.findIndex((mql) => mql.matches);

    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  }, [mediaQueryLists, values, defaultValue]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMediaQueryLists(queries.map((q) => window.matchMedia(q)));
    }
  }, []);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists?.forEach((mql) => mql.addListener(handler));

    return () => mediaQueryLists?.forEach((mql) => mql.removeListener(handler));
  }, [getValue, mediaQueryLists]);

  return value;
};
