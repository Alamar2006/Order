import { PlannerModalNavigation } from './PlannerModalNavigation';
import { PlannerModalThumbnails } from './PlannerModalThumbnails';

export const PlannerModalGallery = ({ 
  images, 
  title, 
  activeIndex, 
  onSelectImage,
  onPrev,
  onNext,
  onImageClick 
}) => (
  <div className="product-detail__gallery flex flex-col gap-4 min-w-0">
    <div className="product-detail__main-image-wrapper relative flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
      <div 
        className="product-detail__main-image relative w-full aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
        onClick={onImageClick}
        role="button"
        tabIndex={0}
        aria-label="Увеличить изображение"
      >
        <img 
          src={images[activeIndex]} 
          alt={title}
          className="product-detail__image w-full h-full object-contain"
        />
        
        <div className="product-detail__zoom-hint absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur border border-white/20 rounded-full text-white/95 text-xs opacity-0 transition-opacity duration-300 pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Нажмите для увеличения</span>
        </div>
      </div>

      <PlannerModalNavigation onPrev={onPrev} onNext={onNext} />
    </div>

    <PlannerModalThumbnails 
      images={images}
      title={title}
      activeIndex={activeIndex}
      onSelect={onSelectImage}
    />
  </div>
);