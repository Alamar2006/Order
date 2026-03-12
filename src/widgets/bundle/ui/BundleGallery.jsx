import { memo } from 'preact/compat';
import { BundleNavigation } from './BundleNavigation';
import { BundleThumbnails } from './BundleThumbnails';

const MAIN_IMAGE_WRAPPER_CLASSES = "product-pack__main-image-wrapper relative flex items-center justify-center bg-gray-100 border border-[--border] rounded-2xl p-6 lg:p-10 filter drop-shadow-lg w-full max-w-full min-w-0 box-border overflow-hidden";
const MAIN_IMAGE_CLASSES = "product-pack__main-image relative w-full max-w-[600px] aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer transition-shadow duration-300 hover:shadow-lg";

export const BundleGallery = memo(({ 
  images, 
  activeIndex, 
  onSelectImage,
  onPrev,
  onNext,
  onImageClick 
}) => {
  const activeImage = images[activeIndex];

  return (
    <div className="product-pack__gallery flex flex-col gap-6 w-full max-w-full min-w-0 box-border overflow-clip animate-[productPackFadeIn_1s_ease-out_0.2s_both]">
      <div className={MAIN_IMAGE_WRAPPER_CLASSES}>
        <div 
          className={MAIN_IMAGE_CLASSES}
          onClick={onImageClick}
        >
          <img 
            src={activeImage.src} 
            alt={activeImage.alt}
            className="product-pack__image w-full h-full object-cover rounded-xl select-none pointer-events-none"
          />
          
          <div className="product-pack__zoom-hint absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/75 backdrop-blur border border-white/10 rounded-full text-white/95 text-sm opacity-0 transition-opacity duration-300 pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>Нажмите для увеличения</span>
          </div>
        </div>

        <BundleNavigation onPrev={onPrev} onNext={onNext} />
      </div>

      <BundleThumbnails 
        images={images}
        activeIndex={activeIndex}
        onSelect={onSelectImage}
      />
    </div>
  );
});