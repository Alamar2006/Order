// Выделенная логика галереи (Single Responsibility)
import { useState } from 'preact/hooks';
import { useCyclingIndex } from '../../../../shared/lib/useCyclingIndex';

export const useBundleGallery = (imagesLength) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { 
    index: activeImageIndex, 
    setIndex: setActiveImageIndex, 
    prev: handlePrevImage, 
    next: handleNextImage 
  } = useCyclingIndex(imagesLength, 0);

  return {
    activeImageIndex,
    setActiveImageIndex,
    handlePrevImage,
    handleNextImage,
    isLightboxOpen,
    setIsLightboxOpen,
  };
};