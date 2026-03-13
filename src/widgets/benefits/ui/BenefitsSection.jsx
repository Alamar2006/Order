
import { useEffect } from 'react';
import { BenefitsBackground } from './BenefitsBackground';
import { BenefitsHeader } from './BenefitsHeader';
import { BenefitsGrid } from './BenefitsGrid';
import { BENEFITS, BACKGROUND_CONFIG, HEADER_CONTENT } from './constants';
import { BENEFITS_STYLES } from './BenefitsStyles';

const SECTION_CLASSES = "benefits relative py-[clamp(4rem,6vw,6.5rem)] overflow-hidden bg-[--bg] text-[--text]";
const CONTAINER_CLASSES = "benefits__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8";

export const BenefitsSection = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = BENEFITS_STYLES;
    style.setAttribute('data-benefits-styles', 'true');
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.querySelector('[data-benefits-styles]');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <section className={SECTION_CLASSES}>
      <BenefitsBackground 
        gradients={BACKGROUND_CONFIG.gradients}
        grain={BACKGROUND_CONFIG.grain}
      />

      <div className={CONTAINER_CLASSES}>
        <BenefitsHeader 
          title={HEADER_CONTENT.title}
          subtitle={HEADER_CONTENT.subtitle}
        />
        
        <BenefitsGrid benefits={BENEFITS} />
      </div>
    </section>
  );
};