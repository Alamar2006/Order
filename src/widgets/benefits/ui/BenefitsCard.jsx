import { memo } from 'react';
import { BenefitsIcon } from './BenefitsIcons';

const CARD_BASE_CLASSES = "benefits__card relative p-8 lg:p-12 bg-[--surface] border border-[--border] rounded-3xl transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.04),0_0_rgba(var(--accent-rgb),0)] hover:translate-y-[-4px] hover:bg-[--surface] hover:border-[--border] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(var(--accent-rgb),0.1),0_4px_16px_rgba(var(--accent-rgb),0.08)] focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4";

const ICON_WRAPPER_CLASSES = "inline-flex items-center justify-center w-16 h-16 mb-6 bg-[--surface] border-2 border-[--border] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-400 flex-shrink-0 group-hover:bg-[--surface] group-hover:border-[--accent] group-hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.2),0_0_0_3px_rgba(var(--accent-rgb),0.08)] group-hover:scale-105";

const ANIMATION_CLASSES = [
  'animate-[fadeInUp_1s_ease-out_0.2s_both]',
  'animate-[fadeInUp_1s_ease-out_0.3s_both]',
  'animate-[fadeInUp_1s_ease-out_0.4s_both]',
];

export const BenefitsCard = memo(({ title, description, iconType, index }) => {
  const animationClass = ANIMATION_CLASSES[index % ANIMATION_CLASSES.length];
  
  return (
    <article className={`${CARD_BASE_CLASSES} group ${animationClass}`}>
      <div className={ICON_WRAPPER_CLASSES}>
        <BenefitsIcon 
          type={iconType} 
          className="benefits__icon w-8 h-8 text-[--text] transition-colors duration-400 group-hover:text-[--accent]" 
        />
      </div>

      <h3 className="text-xl lg:text-2xl font-bold leading-[1.3] mb-3 p-0 text-[--text] tracking-[-0.02em]">
        {title}
      </h3>
      
      <p className="text-base leading-[1.6] text-[--text-2] m-0 p-0 tracking-[-0.01em] font-normal">
        {description}
      </p>
    </article>
  );
});