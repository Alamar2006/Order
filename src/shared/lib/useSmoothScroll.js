import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((href, options = {}) => {
    const {
      offset = 0,
      behavior = 'smooth',
      block = 'start'
    } = options;

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      if (offset) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
      } else {
        targetElement.scrollIntoView({
          behavior,
          block,
        });
      }
    }
  }, []);

  return scrollToElement;
};