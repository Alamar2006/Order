

import { useEffect } from 'preact/hooks';
import { useBodyScrollLock } from '../../../shared/lib/useBodyScrollLock.js';
import { usePlannerModal } from './hooks/usePlannerModal.js';
import { IndividualPlannersHeader } from './IndividualPlannersHeader';
import { IndividualPlannersGrid } from './IndividualPlannersGrid';
import { PlannerModal } from './PlannerModal';
import { PlannerLightbox } from './PlannerLightbox';
import { PlannerBackground } from './PlannerBackground';
import { PLANNERS } from './PlannerConstants';

export function IndividualPlannersSection() {
  const {
    selectedPlanner,
    isModalOpen,
    isLightboxOpen,
    activeImageIndex,
    setActiveImageIndex,
    handlePrevImage,
    handleNextImage,
    openDetails,
    closeModal,
    openLightbox,
    closeLightbox,
  } = usePlannerModal();

  const isOverlayOpen = isModalOpen || isLightboxOpen;
  useBodyScrollLock(isOverlayOpen);

  return (
    <section className="product-catalog relative py-[clamp(3rem,4vw,4.5rem)] overflow-hidden bg-[--bg] text-[--text] w-full">
      <PlannerBackground />

      <div className="product-catalog__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8">
        <IndividualPlannersHeader />
        
        <IndividualPlannersGrid 
          planners={PLANNERS} 
          onOpenDetails={openDetails}
        />
      </div>

      <PlannerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        planner={selectedPlanner}
        activeImageIndex={activeImageIndex}
        onSelectImage={setActiveImageIndex}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
        onImageClick={openLightbox}
      />

      <PlannerLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={selectedPlanner?.gallery}
        title={selectedPlanner?.title}
        activeIndex={activeImageIndex}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
}