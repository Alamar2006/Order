import { memo } from 'preact/compat';
import { BundleTimer } from './BundleTimer';

const HEADER_CLASSES = "product-pack__header text-center w-full animate-[productPackFadeIn_1s_ease-out_both]";
const TITLE_CLASSES = "product-pack__title text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.2] mb-4 p-0 tracking-[-0.03em] text-[--text]";
const SUBTITLE_CLASSES = "product-pack__subtitle text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] max-w-3xl mx-auto p-0 tracking-[-0.01em] font-medium";

export const BundleHeader = memo(() => (
  <div className={HEADER_CLASSES}>
    <h2 className={TITLE_CLASSES}>
      4 планера со скидкой -70%
    </h2>
    <p className={SUBTITLE_CLASSES}>
      Набор из четырёх шаблонов для порядка и контроля в жизни.
    </p>
    <BundleTimer />
  </div>
));