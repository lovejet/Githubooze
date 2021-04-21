import { useMemo } from "react";
import { debounce } from "lodash";

export function useDebounce(callback: Function, delay: number) {
  const debouncedFn = useMemo(
    () => debounce((...args) => callback(...args), delay),
    [callback, delay] // will recreate if delay changes
  );
  return debouncedFn;
}
