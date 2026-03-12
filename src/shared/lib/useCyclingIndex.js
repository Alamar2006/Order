import { useCallback, useEffect, useState } from 'preact/hooks';

export function useCyclingIndex(length, initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (length <= 0) return;
    if (index >= length) setIndex(0);
  }, [index, length]);

  const prev = useCallback(() => {
    if (length <= 0) return;
    setIndex((current) => (current === 0 ? length - 1 : current - 1));
  }, [length]);

  const next = useCallback(() => {
    if (length <= 0) return;
    setIndex((current) => (current === length - 1 ? 0 : current + 1));
  }, [length]);

  const reset = useCallback(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return { index, setIndex, prev, next, reset };
}

