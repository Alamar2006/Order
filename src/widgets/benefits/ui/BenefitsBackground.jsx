import { memo, useMemo } from 'react';
import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop';

const BACKGROUND_CLASSES = "benefits__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden";
const ANIMATION_CLASS = "animate-[benefitsBreathe_20s_ease-in-out_infinite]";

export const BenefitsBackground = memo(({ gradients, grain }) => {
  // useMemo запоминает результат, пока gradients не изменились
  const gradientsWithAnimation = useMemo(() => {
    return gradients.map(gradient => ({
      ...gradient,
      className: `${gradient.className} ${ANIMATION_CLASS}`,
    }));
  }, [gradients]); // Пересоздаем только если gradients изменились

  return (
    <SectionBackdrop
      backgroundClassName={BACKGROUND_CLASSES}
      gradients={gradientsWithAnimation}
      grain={grain}
    />
  );
});