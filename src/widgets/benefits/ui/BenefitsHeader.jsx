import { memo } from 'react';

const HEADER_CLASSES = "benefits__header text-center mb-[clamp(3rem,5vw,4.5rem)] w-full animate-[fadeInUp_1s_ease-out]";
const TITLE_CLASSES = "benefits__title text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.2] mb-4 p-0 tracking-[-0.03em] text-[--text]";
const SUBTITLE_CLASSES = "benefits__subtitle text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] max-w-2xl mx-auto p-0 tracking-[-0.01em] font-normal";

export const BenefitsHeader = memo(({ title, subtitle }) => (
  <div className={HEADER_CLASSES}>
    <h2 className={TITLE_CLASSES}>{title}</h2>
    <p className={SUBTITLE_CLASSES}>{subtitle}</p>
  </div>
));