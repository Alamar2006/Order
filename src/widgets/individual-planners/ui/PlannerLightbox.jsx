import { useCallback } from 'preact/hooks';
import { LightboxOverlay } from '../../../shared/ui/LightboxOverlay.jsx';

// Константы классов
const OVERLAY_CLASSES = "product-detail__lightbox fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur z-[10001] flex items-center justify-center p-4 overflow-hidden animate-[lightboxFadeIn_0.3s_ease-out]";
const IMAGE_CLASSES = "product-detail__lightbox-image max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-[lightboxImageZoom_0.4s_ease-out]";
const COUNTER_CLASSES = "product-detail__lightbox-counter text-white/90 text-sm font-medium px-4 py-2 bg-black/50 backdrop-blur border border-white/20 rounded-full";
const CLOSE_BUTTON_CLASSES = "product-detail__lightbox-close absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur border border-white/20 rounded-full text-white hover:bg-white/30 hover:border-[--accent] hover:rotate-90 transition-all duration-300";
const NAV_BUTTON_CLASSES = "product-detail__lightbox-nav absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur border border-white/20 rounded-full text-white hover:bg-[rgba(var(--accent-rgb),0.3)] hover:border-[--accent] hover:scale-110 transition-all duration-300";
const NAV_PREV_CLASSES = "left-4";
const NAV_NEXT_CLASSES = "right-4";

export const PlannerLightbox = ({ 
  isOpen, 
  onClose, 
  images, 
  title, 
  activeIndex, 
  onPrev, 
  onNext 
}) => {
  // Ранний возврат, если нет изображений
  if (!images?.length) return null;
  
  const activeImage = images[activeIndex];
  if (!activeImage) return null;

  // Мемоизированные обработчики
  const handleClose = useCallback((e) => {
    e.stopPropagation();
    onClose();
  }, [onClose]);

  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    onPrev();
  }, [onPrev]);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    onNext();
  }, [onNext]);

  return (
    <LightboxOverlay
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName={OVERLAY_CLASSES}
    >
      <div className="product-detail__lightbox-content relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4">
        <img 
          src={activeImage} 
          alt={title}
          className={IMAGE_CLASSES}
          loading="lazy"   
          decoding="async"
        />
        
        <div className={COUNTER_CLASSES}>
          {activeIndex + 1} / {images.length}
        </div>

        <button 
          className={CLOSE_BUTTON_CLASSES}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          ✕
        </button>

        <button 
          className={`${NAV_BUTTON_CLASSES} ${NAV_PREV_CLASSES}`}
          onClick={handlePrev}
          aria-label="Предыдущее изображение"
        >
          ←
        </button>

        <button 
          className={`${NAV_BUTTON_CLASSES} ${NAV_NEXT_CLASSES}`}
          onClick={handleNext}
          aria-label="Следующее изображение"
        >
          →
        </button>
      </div>
    </LightboxOverlay>
  );
};