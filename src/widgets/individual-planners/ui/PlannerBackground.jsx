import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop.jsx';
import { BACKGROUND_CONFIG } from './PlannerConstants';

const BACKGROUND_CLASSES = "product-catalog__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden";

// Вычисляем один раз при загрузке модуля
const gradientsWithAnimation = BACKGROUND_CONFIG.gradients.map(gradient => ({
  ...gradient,
  className: `${gradient.className} animate-[catalogBreathe_20s_ease-in-out_infinite]`,
}));

export const PlannerBackground = () => (
  <SectionBackdrop
    backgroundClassName={BACKGROUND_CLASSES}
    gradients={gradientsWithAnimation}
    grain={BACKGROUND_CONFIG.grain}
    divider={BACKGROUND_CONFIG.divider}
  />
);