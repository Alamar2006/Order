import { memo, useCallback } from 'preact/compat';
import { LightboxOverlay } from '../../../shared/ui/LightboxOverlay.jsx';

export const BundleLightbox = memo(({ 
  isOpen, 
  onClose, 
  images, 
  activeIndex, 
  onPrev, 
  onNext 
}) => {
  const activeImage = images[activeIndex];

  // ✅ Мемоизируем коллбэки
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
      overlayClassName="product-pack__lightbox fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur z-[1000] flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4">
        <img 
          src={activeImage.src} 
          alt={activeImage.alt}
          className="max-w-full max-h-[85vh] object-cover rounded-2xl"
        />
        
        <div className="text-white/90 text-sm font-medium px-4 py-2 bg-black/50 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>

        <button 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          onClick={handleClose}  // ✅ Одна и та же функция
        >
          ✕
        </button>

        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          onClick={handlePrev}  // ✅ Одна и та же функция
        >
          ←
        </button>

        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          onClick={handleNext}  // ✅ Одна и та же функция
        >
          →
        </button>
      </div>
    </LightboxOverlay>
  );
});