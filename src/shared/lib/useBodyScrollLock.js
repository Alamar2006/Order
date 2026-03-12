import { useEffect } from 'preact/hooks';

let lockCount = 0;
let initialOverflow = null;

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    if (lockCount === 0) {
      initialOverflow = document.body.style.overflow;
      document.body.style.overflow = 'scroll';
    }
    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = initialOverflow || '';
        initialOverflow = null;
      }
    };
  }, [isLocked]);
}

