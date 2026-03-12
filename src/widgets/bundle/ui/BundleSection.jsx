// import { useState } from 'preact/hooks';
// import { useBodyScrollLock } from '../../../shared/lib/useBodyScrollLock.js';
// import { useCyclingIndex } from '../../../shared/lib/useCyclingIndex.js';
// import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop.jsx';
// import { LightboxOverlay } from '../../../shared/ui/LightboxOverlay.jsx';
// import { PrimaryButton } from '../../../shared/ui/PrimaryButton.jsx';

// const INCLUDED_ITEMS = [
//   'Недельный планер',
//   'Трекер привычек',
//   'Финансовый трекер',
//   'Трекер задач',
// ];

// // Пример данных для галереи (замените на свои изображения)
// const GALLERY_IMAGES = [
//   { id: 1, src: '/assets/q1.jpg', alt: 'Недельный планер' },
//   { id: 2, src: '/assets/q2.jpg', alt: 'Трекер привычек' },
//   { id: 3, src: '/assets/q3.jpg', alt: 'Финансовый трекер' },
//   { id: 4, src: '/assets/q4.jpg', alt: 'Трекер задач' },
//   { id: 5, src: '/assets/q5.jpg', alt: 'Трекер задач' },
// ];

// export function BundleSection() {
//   const { index: activeImageIndex, setIndex: setActiveImageIndex, prev: handlePrevImage, next: handleNextImage } =
//     useCyclingIndex(GALLERY_IMAGES.length, 0);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);

//   useBodyScrollLock(isLightboxOpen);

//   return (
//     <section className="product-pack relative py-[clamp(4rem,6vw,6.5rem)] overflow-clip bg-[--bg] text-[--text] w-full max-w-full box-border">
//       {/* Фоновые элементы */}
//       <SectionBackdrop
//         backgroundClassName="product-pack__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
//         gradients={[
//           {
//             key: 'primary',
//             className:
//               'product-pack__gradient product-pack__gradient--primary absolute rounded-full opacity-60 animate-[productPackBreathe_20s_ease-in-out_infinite]',
//             style: {
//               top: '20%',
//               left: '10%',
//               width: '1400px',
//               height: '1400px',
//               background:
//                 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, rgba(var(--accent-rgb), 0.04) 30%, transparent 70%)',
//               filter: 'blur(120px)',
//             },
//           },
//           {
//             key: 'secondary',
//             className:
//               'product-pack__gradient product-pack__gradient--secondary absolute rounded-full opacity-60 animate-[productPackBreathe_20s_ease-in-out_infinite]',
//             style: {
//               bottom: '10%',
//               right: '15%',
//               width: '1100px',
//               height: '1100px',
//               background: 'var(--gradient-glow)',
//               filter: 'blur(120px)',
//               animationDelay: '-10s',
//             },
//           },
//         ]}
//         grain={{
//           className:
//             'product-pack__grain absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none mix-blend-overlay',
//           style: {
//             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px)`,
//             backgroundSize: '3px 3px',
//           },
//         }}
//         divider={{
//           className:
//             'product-pack__divider absolute top-0 left-0 w-full h-px pointer-events-none',
//           style: {
//             background:
//               'linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.15) 20%, rgba(var(--accent-rgb), 0.25) 50%, rgba(var(--accent-rgb), 0.15) 80%, transparent 100%)',
//           },
//         }}
//       />

//       <div className="product-pack__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8 box-border overflow-clip">
//         {/* Заголовок секции с таймером */}
//         <div className="product-pack__header text-center w-full animate-[productPackFadeIn_1s_ease-out_both]">
//           <h2 className="product-pack__title text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.2] mb-4 p-0 tracking-[-0.03em] text-[--text]">
//             4 планера со скидкой -70%
//           </h2>
//           <p className="product-pack__subtitle text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] max-w-3xl mx-auto p-0 tracking-[-0.01em] font-medium">
//             Набор из четырёх шаблонов для порядка и контроля в жизни.
//           </p>
          
//           {/* Таймер в шапке */}
//           <div className="product-pack__header-timer mt-3 mb-5">
//             <div className="product-pack__header-countdown countdown--strip inline-flex items-center justify-center gap-2 whitespace-nowrap">
//               <span className="countdown__time text-white px-4 py-1.5 rounded-[10px] bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
//                 06:27:25
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Основной контент */}
//         <div className="product-pack__content grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-start w-full max-w-full min-w-0 box-border overflow-clip">
//           {/* Левая колонка - галерея */}
//           <div className="product-pack__gallery flex flex-col gap-6 w-full max-w-full min-w-0 box-border overflow-clip animate-[productPackFadeIn_1s_ease-out_0.2s_both]">
//             <div className="product-pack__main-image-wrapper relative flex items-center justify-center bg-gray-100 border border-[--border] rounded-2xl p-6 lg:p-10 filter drop-shadow-lg w-full max-w-full min-w-0 box-border overflow-hidden">
//               <div 
//                 className="product-pack__main-image relative w-full max-w-[600px] aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
//                 onClick={() => setIsLightboxOpen(true)}
//               >
//                 <img 
//   src={GALLERY_IMAGES[activeImageIndex].src} 
//   alt={GALLERY_IMAGES[activeImageIndex].alt}
//   className="product-pack__image w-full h-full object-cover rounded-xl select-none pointer-events-none"
// />
                
//                 {/* Подсказка для увеличения */}
//                 <div className="product-pack__zoom-hint absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/75 backdrop-blur border border-white/10 rounded-full text-white/95 text-sm opacity-0 transition-opacity duration-300 pointer-events-none">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="11" cy="11" r="8" />
//                     <line x1="21" y1="21" x2="16.65" y2="16.65" />
//                   </svg>
//                   <span>Нажмите для увеличения</span>
//                 </div>
//               </div>

//               {/* Навигационные стрелки */}
//               <button 
//                 className="product-pack__nav product-pack__nav--prev absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 flex items-center justify-center bg-black/10 backdrop-blur border border-black/15 rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10"
//                 onClick={handlePrevImage}
//                 aria-label="Предыдущее изображение"
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
              
//               <button 
//                 className="product-pack__nav product-pack__nav--next absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 flex items-center justify-center bg-black/10 backdrop-blur border border-black/15 rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10"
//                 onClick={handleNextImage}
//                 aria-label="Следующее изображение"
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>

//             {/* Миниатюры */}
//             <div className="product-pack__thumbnails flex gap-2 justify-center flex-nowrap w-full max-w-full min-w-0">
//               {GALLERY_IMAGES.map((image, index) => (
//                 <button
//                   key={image.id}
//                   className={`product-pack__thumbnail flex-1 min-w-0 aspect-square p-0 bg-gray-100 border-2 rounded-xl cursor-pointer transition-all duration-200 overflow-hidden relative shadow-sm ${
//                     index === activeImageIndex 
//                       ? 'border-[--accent] border-2 shadow-[0_0_0_2px_rgba(var(--accent-rgb),0.25),0_4px_20px_rgba(var(--accent-rgb),0.3)]' 
//                       : 'border-[--border] hover:border-[--accent] hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.25),0_0_0_2px_rgba(var(--accent-rgb),0.1)]'
//                   }`}
//                   onClick={() => setActiveImageIndex(index)}
//                   aria-label={`Переключить на ${image.alt}`}
//                 >
//                   <img 
//   src={image.src} 
//   alt={image.alt}
//   className="product-pack__thumbnail-image w-full h-full object-cover"
// />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Правая колонка - информация */}
//           <div className="product-pack__info flex flex-col gap-6 w-full animate-[productPackFadeIn_1s_ease-out_0.3s_both]">
//             {/* Блок "В набор входит" */}
//             <div className="product-pack__included bg-[--surface] backdrop-blur border border-[--border] rounded-2xl p-6 w-full max-w-full shadow-sm">
//               <h3 className="product-pack__included-title text-lg font-semibold mb-5 p-0 text-[--text] tracking-[-0.01em] leading-tight">
//                 В набор входит:
//               </h3>
//               <ul className="product-pack__included-list list-none flex flex-col gap-3 m-0 p-0 w-full">
//                 {INCLUDED_ITEMS.map((item) => (
//                   <li key={item} className="product-pack__included-item flex items-center gap-3 text-base text-[--text] leading-relaxed m-0 p-0 font-normal">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--accent] flex-shrink-0">
//                       <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Карточка с ценой - упрощенная */}
//             <div className="bg-[--surface] border border-[--border] rounded-xl p-6 w-full max-w-full shadow-sm flex flex-col gap-4">
//               <p className="text-sm font-medium text-[--text-2] text-center">
//                 Набор ЛайфСтатс
//               </p>
              
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl font-semibold text-[--text]">
//                     1 897 ₽
//                   </span>
//                   <span className="text-sm text-gray-400 line-through">
//                     9 260 ₽
//                   </span>
//                 </div>
                
//                 <span className="text-sm font-medium text-[--accent]">
//                   Экономия 7 363 ₽
//                 </span>

//                 <div className="text-sm text-[--text-2] mt-2">
//                   до конца акции: 06:27:25
//                 </div>
//               </div>

//               {/* Упрощенная кнопка */}
//               <PrimaryButton className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
//                 Купить набор
//               </PrimaryButton>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Лайтбокс для увеличения изображения */}
//       <LightboxOverlay
//         isOpen={isLightboxOpen}
//         onClose={() => setIsLightboxOpen(false)}
//         overlayClassName="product-pack__lightbox fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur z-[1000] flex items-center justify-center p-4 overflow-hidden"
//       >
//           <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4">
//           <img 
//   src={GALLERY_IMAGES[activeImageIndex].src} 
//   alt={GALLERY_IMAGES[activeImageIndex].alt}
//   className="max-w-full max-h-[85vh] object-cover rounded-2xl"
// />
            
//             <div className="text-white/90 text-sm font-medium px-4 py-2 bg-black/50 rounded-full">
//               {activeImageIndex + 1} / {GALLERY_IMAGES.length}
//             </div>

//             <button 
//               className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsLightboxOpen(false);
//               }}
//             >
//               ✕
//             </button>

//             <button 
//               className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handlePrevImage();
//               }}
//             >
//               ←
//             </button>

//             <button 
//               className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNextImage();
//               }}
//             >
//               →
//             </button>
//           </div>
//       </LightboxOverlay>

//       {/* Стили для анимаций */}
//       <style jsx>{`
//         @keyframes productPackBreathe {
//           0%, 100% {
//             opacity: 0.6;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.4;
//             transform: scale(1.1);
//           }
//         }
//         @keyframes productPackFadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .product-pack__gradient,
//           .product-pack__header,
//           .product-pack__gallery,
//           .product-pack__info {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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