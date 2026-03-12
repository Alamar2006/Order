import { memo } from 'preact/compat';
import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop.jsx';
import { BACKGROUND_CONFIG } from './BundleConstants';

const BACKGROUND_CLASSES = "product-pack__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden";

// ✅ Вычисляем один раз при загрузке модуля
const gradientsWithAnimation = BACKGROUND_CONFIG.gradients.map(gradient => ({
  ...gradient,
  className: `${gradient.className} animate-[productPackBreathe_20s_ease-in-out_infinite]`,
}));

// ✅ Мемоизация вообще не нужна! Просто экспортируем функцию
export const BundleBackground = () => {
  return (
    <SectionBackdrop
      backgroundClassName={BACKGROUND_CLASSES}
      gradients={gradientsWithAnimation}
      grain={BACKGROUND_CONFIG.grain}
      divider={BACKGROUND_CONFIG.divider}
    />
  );
};

// Или если очень хочется memo (но это ничего не дает):
// export const BundleBackground = memo(() => { ... });