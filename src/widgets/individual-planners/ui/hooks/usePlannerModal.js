import { useState, useCallback } from 'preact/hooks';
import { useCyclingIndex } from '../../../../shared/lib/useCyclingIndex';

export const usePlannerModal = () => {
  const [selectedPlanner, setSelectedPlanner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryLength = selectedPlanner?.gallery?.length ?? 0;
  
  const {
    index: activeImageIndex,
    setIndex: setActiveImageIndex,
    prev: handlePrevImage,
    next: handleNextImage,
    reset: resetActiveImage,
  } = useCyclingIndex(galleryLength, 0);

  const openDetails = useCallback((planner) => {
    setSelectedPlanner(planner);
    resetActiveImage();
    setIsModalOpen(true);
  }, [resetActiveImage]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    resetActiveImage();
  }, [resetActiveImage]);

  return {
    selectedPlanner,
    isModalOpen,
    isLightboxOpen,
    activeImageIndex,
    setActiveImageIndex,
    handlePrevImage,
    handleNextImage,
    openDetails,
    closeModal: handleModalClose,
    openLightbox,
    closeLightbox,
  };
};