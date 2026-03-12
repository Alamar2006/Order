import { Modal } from '../../../shared/ui/Modal.jsx';
import {PlannerModalGallery} from './PlannerModalGallery';
import {PlannerModalInfo} from './PlannerModalInfo';

const CLOSE_BUTTON_CLASSES = "product-detail__close absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--text-2] hover:rotate-90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4";

export const PlannerModal = ({ 
  isOpen, 
  onClose, 
  planner,
  activeImageIndex,
  onSelectImage,
  onPrevImage,
  onNextImage,
  onImageClick
}) => {
  if (!planner) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName="product-detail-overlay fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur z-[2000] flex items-center justify-center p-4 md:p-8 overflow-y-auto animate-[overlayFadeIn_0.3s_ease-out]"
      panelClassName="product-detail relative w-full max-w-5xl max-h-[95vh] bg-[--surface] backdrop-blur border border-[--border] rounded-2xl overflow-hidden animate-[detailSlideUp_0.4s_ease-out] flex flex-col"
    >
      <button 
        className={CLOSE_BUTTON_CLASSES}
        onClick={onClose}
        aria-label="Закрыть"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="product-detail__container p-4 md:p-8 overflow-y-auto flex-1 min-w-0">
        <div className="product-detail__content grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 min-w-0">
          <PlannerModalGallery 
            images={planner.gallery}
            title={planner.title}
            activeIndex={activeImageIndex}
            onSelectImage={onSelectImage}
            onPrev={onPrevImage}
            onNext={onNextImage}
            onImageClick={onImageClick}
          />
          
          <PlannerModalInfo planner={planner} />
        </div>
      </div>
    </Modal>
  );
};