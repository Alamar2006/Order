

import { useEffect, useCallback, useLayoutEffect, useState } from 'preact/hooks';
import { useBodyScrollLock } from '../../../shared/lib/useBodyScrollLock.js';
import { useBundleGallery } from './hooks/useBundleGallery.js';
import { BundleBackground } from './BundleBackground';
import { BundleHeader } from './BundleHeader';
import { BundleGallery } from './BundleGallery';
import { BundleInfo } from './BundleInfo';
import { BundleLightbox } from './BundleLightbox';
import { GALLERY_IMAGES } from './BundleConstants';
import { BUNDLE_STYLES } from './BundleStyles';

const SECTION_CLASSES = "product-pack relative py-[clamp(4rem,6vw,6.5rem)] overflow-clip bg-[--bg] text-[--text] w-full max-w-full box-border";
const CONTAINER_CLASSES = "product-pack__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8 box-border overflow-clip";
const CONTENT_CLASSES = "product-pack__content grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-start w-full max-w-full min-w-0 box-border overflow-clip";

// Константы
const TIMER_VALUE = '06:27:25'; // Если статический

export const BundleSection = () => {
  const {
    activeImageIndex,
    setActiveImageIndex,
    handlePrevImage,
    handleNextImage,
    isLightboxOpen,
    setIsLightboxOpen,
  } = useBundleGallery(GALLERY_IMAGES.length);

  useBodyScrollLock(isLightboxOpen);

  // Мемоизированные коллбэки
  const handleOpenLightbox = useCallback(() => {
    setIsLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Добавляем стили до рендера (useLayoutEffect)
  useLayoutEffect(() => {
    if (!document.getElementById('bundle-styles')) {
      const style = document.createElement('style');
      style.id = 'bundle-styles';
      style.textContent = BUNDLE_STYLES;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section id='planners' className={SECTION_CLASSES}>
      <BundleBackground />

      <div className={CONTAINER_CLASSES}>
        <BundleHeader />
        
        <div className={CONTENT_CLASSES}>
          <BundleGallery 
            images={GALLERY_IMAGES}
            activeIndex={activeImageIndex}
            onSelectImage={setActiveImageIndex}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
            onImageClick={handleOpenLightbox}
          />
          
          <BundleInfo timer={TIMER_VALUE} />
        </div>
      </div>

      <BundleLightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        images={GALLERY_IMAGES}
        activeIndex={activeImageIndex}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
};