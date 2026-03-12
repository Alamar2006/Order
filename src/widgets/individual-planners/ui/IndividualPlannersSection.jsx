// import { useCallback, useState } from 'preact/hooks';
// import { useBodyScrollLock } from '../../../shared/lib/useBodyScrollLock.js';
// import { Modal } from '../../../shared/ui/Modal.jsx';
// import { useCyclingIndex } from '../../../shared/lib/useCyclingIndex.js';
// import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop.jsx';
// import { LightboxOverlay } from '../../../shared/ui/LightboxOverlay.jsx';
// import { PlannerCard } from './PlannerCardFolder/PlannerCard.jsx';

// const planners = [
//   {
//     id: 1,
//     badge: 'Скидка',
//     title: 'Недельный планер',
//     description:
//       'Помогает видеть всю неделю целиком, планировать задачи, цели и привычки и держать баланс между работой и личной жизнью.',
//     price: '1 390 ₽',
//     oldPrice: '2 090 ₽',
//     image: '/assets/Week1.avif',
//     gallery: [
//       '/assets/Week1.avif',
//       '/assets/Week2.avif',
//       '/assets/Week3.avif',
//       '/assets/Week4.avif',
//     ],
//     fullDescription: 'Недельный планер — это ваш личный помощник для организации времени. С ним вы сможете:\n\n• Планировать задачи на каждый день\n• Отслеживать привычки\n• Балансировать между работой и отдыхом\n• Видеть прогресс за неделю\n\nВсе данные автоматически синхронизируются и сохраняются в вашем Google аккаунте.',
//     features: [
//       'Готовый шаблон в Google Таблицах',
//       'Автоматические расчеты',
//       'Визуальные графики прогресса',
//       'Доступ с любого устройства',
//       'Обновления бесплатно'
//     ]
//   },
//   {
//     id: 2,
//     badge: 'Скидка',
//     title: 'Финансовый трекер',
//     description:
//       'Дает ясность в деньгах: отслеживаете доходы и расходы, понимаете баланс и управляете финансами без сложных формул.',
//     price: '1 690 ₽',
//     oldPrice: '2 790 ₽',
//     image: '/assets/Week2.avif',
//     gallery: [
//       '/assets/Week1.avif',
//       '/assets/Week2.avif',
//       '/assets/Week3.avif',
//       '/assets/Week4.avif',
//     ],
//     fullDescription: 'Финансовый трекер помогает держать деньги под контролем. Вы будете точно знать, куда уходят средства и как оптимизировать бюджет.\n\n• Учет доходов и расходов\n• Категории трат\n• Ежемесячные отчеты\n• Планирование бюджета\n• Анализ финансовых привычек',
//     features: [
//       'Готовый шаблон в Google Таблицах',
//       'Автоматические расчеты',
//       'Визуальные графики прогресса',
//       'Доступ с любого устройства',
//       'Обновления бесплатно'
//     ]
//   },
//   {
//     id: 3,
//     badge: 'Скидка',
//     title: 'Трекер задач',
//     description:
//       'Наводит порядок в делах и помогает сосредоточиться на приоритетах. Меньше хаоса, больше выполненных задач и ощущения контроля.',
//     price: '1 290 ₽',
//     oldPrice: '1 990 ₽',
//     image: '/assets/Week3.avif',
//     gallery: [
//       '/assets/Week1.avif',
//       '/assets/Week2.avif',
//       '/assets/Week3.avif',
//       '/assets/Week4.avif',
//     ],
//     fullDescription: 'Трекер задач превращает хаос в структуру. Вы всегда будете знать, что нужно сделать сегодня, а что можно отложить.\n\n• Приоритеты задач\n• Дедлайны и напоминания\n• Статусы выполнения\n• Проекты и подзадачи\n• Статистика продуктивности',
//     features: [
//       'Готовый шаблон в Google Таблицах',
//       'Автоматические расчеты',
//       'Визуальные графики прогресса',
//       'Доступ с любого устройства',
//       'Обновления бесплатно'
//     ]
//   },
// ];

// export function IndividualPlannersSection() {
//   const [selectedPlanner, setSelectedPlanner] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
//   // Безопасно получаем длину галереи
//   const galleryLength = selectedPlanner?.gallery?.length ?? 0;
  
//   const {
//     index: activeImageIndex,
//     setIndex: setActiveImageIndex,
//     prev: handlePrevImage,
//     next: handleNextImage,
//     reset: resetActiveImage,
//   } = useCyclingIndex(galleryLength, 0);

//   const openDetails = useCallback((planner) => {
//     setSelectedPlanner(planner);
//     resetActiveImage();
//     setIsModalOpen(true);
//   }, [resetActiveImage]);

//   const closeModal = useCallback(() => {
//     setIsModalOpen(false);
//     resetActiveImage();
//   }, [resetActiveImage]);

//   const isOverlayOpen = isModalOpen || isLightboxOpen;
//   useBodyScrollLock(isOverlayOpen);

//   return (
//     <section className="product-catalog relative py-[clamp(3rem,4vw,4.5rem)] overflow-hidden bg-[--bg] text-[--text] w-full">
//       {/* Фоновые элементы */}
//       <SectionBackdrop
//         backgroundClassName="product-catalog__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
//         gradients={[
//           {
//             key: 'primary',
//             className:
//               'product-catalog__gradient product-catalog__gradient--primary absolute rounded-full opacity-60 animate-[catalogBreathe_20s_ease-in-out_infinite]',
//             style: {
//               top: '20%',
//               left: '10%',
//               width: '1400px',
//               height: '1400px',
//               background: 'var(--gradient-glow)',
//               filter: 'blur(120px)',
//             },
//           },
//           {
//             key: 'secondary',
//             className:
//               'product-catalog__gradient product-catalog__gradient--secondary absolute rounded-full opacity-60 animate-[catalogBreathe_20s_ease-in-out_infinite]',
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
//             'product-catalog__grain absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none mix-blend-overlay',
//           style: {
//             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px)`,
//             backgroundSize: '3px 3px',
//           },
//         }}
//         divider={{
//           className:
//             'product-catalog__divider absolute top-0 left-0 w-full h-px pointer-events-none',
//           style: {
//             background:
//               'linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.15) 20%, rgba(var(--accent-rgb), 0.25) 50%, rgba(var(--accent-rgb), 0.15) 80%, transparent 100%)',
//           },
//         }}
//       />

//       <div className="product-catalog__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8">
//         {/* Заголовок секции */}
//         <div className="product-catalog__header text-center mb-6 md:mb-8 w-full animate-[fadeInUp_1s_ease-out]">
//           <h2 className="product-catalog__title text-2xl md:text-3xl font-extrabold leading-tight mb-2 p-0 tracking-tight text-[--text]">
//             Отдельные планеры
//           </h2>
//           <p className="product-catalog__subtitle text-sm md:text-base text-[--text-2] max-w-2xl mx-auto p-0 tracking-tight">
//             Выберите нужный планер или купите весь набор со скидкой.
//           </p>
//         </div>

//         {/* Сетка карточек */}
//         <div className="product-catalog__grid grid grid-cols-1 gap-4 md:gap-5 w-full">
//           {planners.map((planner, index) => (
//             <div 
//               key={planner.id} 
//               className={`animate-[fadeInUp_1s_ease-out_${0.1 + index * 0.1}s_both]`}
//             >
//               <PlannerCard 
//                 planner={planner} 
//                 onOpenDetails={openDetails}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Модальное окно деталей планера */}
//       <Modal
//         isOpen={isModalOpen && !!selectedPlanner}
//         onClose={closeModal}
//         overlayClassName="product-detail-overlay fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur z-[2000] flex items-center justify-center p-4 md:p-8 overflow-y-auto animate-[overlayFadeIn_0.3s_ease-out]"
//         panelClassName="product-detail relative w-full max-w-5xl max-h-[95vh] bg-[--surface] backdrop-blur border border-[--border] rounded-2xl overflow-hidden animate-[detailSlideUp_0.4s_ease-out] flex flex-col"
//       >
//         {/* Проверяем наличие selectedPlanner перед рендерингом содержимого */}
//         {selectedPlanner && (
//           <>
//             {/* Кнопка закрытия */}
//             <button 
//               className="product-detail__close absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--text-2] hover:rotate-90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4"
//               onClick={closeModal}
//               aria-label="Закрыть"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>

//             <div className="product-detail__container p-4 md:p-8 overflow-y-auto flex-1 min-w-0">
//               <div className="product-detail__content grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 min-w-0">
//                 {/* Левая колонка - галерея */}
//                 <div className="product-detail__gallery flex flex-col gap-4 min-w-0">
//                   <div className="product-detail__main-image-wrapper relative flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
//                     <div 
//                       className="product-detail__main-image relative w-full aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
//                       onClick={() => setIsLightboxOpen(true)}
//                     >
//                       <img 
//                         src={selectedPlanner.gallery[activeImageIndex]} 
//                         alt={selectedPlanner.title}
//                         className="product-detail__image w-full h-full object-contain"
//                       />
                      
//                       {/* Подсказка для увеличения */}
//                       <div className="product-detail__zoom-hint absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur border border-white/20 rounded-full text-white/95 text-xs opacity-0 transition-opacity duration-300 pointer-events-none">
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <circle cx="11" cy="11" r="8" />
//                           <line x1="21" y1="21" x2="16.65" y2="16.65" />
//                         </svg>
//                         <span>Нажмите для увеличения</span>
//                       </div>
//                     </div>

//                     {/* Навигационные стрелки для галереи */}
//                     <button 
//                       className="product-detail__nav product-detail__nav--prev absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10 shadow-md"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handlePrevImage();
//                       }}
//                       aria-label="Предыдущее изображение"
//                     >
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
                    
//                     <button 
//                       className="product-detail__nav product-detail__nav--next absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10 shadow-md"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleNextImage();
//                       }}
//                       aria-label="Следующее изображение"
//                     >
//                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                   </div>

//                   {/* Миниатюры */}
//                   <div className="product-detail__thumbnails flex gap-2 justify-start overflow-x-auto pb-2">
//                     {selectedPlanner.gallery.map((img, idx) => (
//                       <button
//                         key={idx}
//                         className={`product-detail__thumbnail w-16 h-16 min-w-[64px] min-h-[64px] p-0 bg-gray-100 border-2 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden flex-shrink-0 shadow-sm ${
//                           idx === activeImageIndex 
//                             ? 'border-[--accent] border-3 shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.15),0_4px_20px_rgba(var(--accent-rgb),0.3)]' 
//                             : 'border-[--border] hover:border-[--accent] hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.25),0_0_0_2px_rgba(var(--accent-rgb),0.1)]'
//                         }`}
//                         onClick={() => setActiveImageIndex(idx)}
//                       >
//                         <img 
//                           src={img} 
//                           alt={`${selectedPlanner.title} ${idx + 1}`}
//                           className="product-detail__thumbnail-image w-full h-full object-contain"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Правая колонка - информация */}
//                 <div className="product-detail__info flex flex-col gap-5 min-w-0 break-words">
//                   <h2 className="product-detail__title text-2xl md:text-3xl font-extrabold leading-tight text-[--text] tracking-tight">
//                     {selectedPlanner.title}
//                   </h2>
                  
//                   <p className="product-detail__description text-sm md:text-base text-[--text-2] leading-relaxed whitespace-pre-line">
//                     {selectedPlanner.fullDescription}
//                   </p>

//                   {/* Особенности */}
//                   <div className="space-y-2">
//                     <h4 className="font-semibold text-[--text]">Что входит:</h4>
//                     <ul className="space-y-1">
//                       {selectedPlanner.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-[--text-2]">
//                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--accent] flex-shrink-0 mt-0.5">
//                             <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
//                           </svg>
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Цена */}
//                   <div className="product-detail__price-stack flex flex-col items-start gap-2 mt-2">
//                     <div className="product-detail__pricing flex items-baseline gap-3 flex-wrap">
//                       <span className="product-detail__price-new text-2xl md:text-3xl font-semibold text-[--text] tracking-tight">
//                         {selectedPlanner.price}
//                       </span>
//                       <span className="product-detail__price-old text-lg text-gray-400 line-through">
//                         {selectedPlanner.oldPrice}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Кнопка покупки */}
//                   <button className="product-detail__cta inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-full cursor-pointer transition-all duration-400 relative overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(var(--accent-rgb),0.35)] hover:outline hover:outline-4 hover:outline-[rgba(var(--accent-rgb),0.1)] active:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 w-full max-w-md min-h-[56px] group">
//                     <span className="product-detail__cta-text relative z-10">Купить сейчас</span>
//                     <svg 
//                       className="product-detail__cta-icon relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
//                       width="18" 
//                       height="18" 
//                       viewBox="0 0 24 24" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       strokeWidth="2"
//                     >
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>

//                   {/* Дополнительная информация */}
//                   <p className="text-xs text-[--text-2] mt-2">
//                     Мгновенный доступ после оплаты. Работает в Google Таблицах.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </Modal>

//       {/* Лайтбокс для увеличения изображения */}
//       <LightboxOverlay
//         isOpen={isLightboxOpen && !!selectedPlanner}
//         onClose={() => setIsLightboxOpen(false)}
//         overlayClassName="product-detail__lightbox fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur z-[3000] flex items-center justify-center p-4 overflow-hidden animate-[lightboxFadeIn_0.3s_ease-out]"
//       >
//         {/* Проверяем наличие selectedPlanner перед рендерингом содержимого */}
//         {selectedPlanner && (
//           <div className="product-detail__lightbox-content relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4">
//             <img 
//               src={selectedPlanner.gallery[activeImageIndex]} 
//               alt={selectedPlanner.title}
//               className="product-detail__lightbox-image max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-[lightboxImageZoom_0.4s_ease-out]"
//             />
            
//             <div className="product-detail__lightbox-counter text-white/90 text-sm font-medium px-4 py-2 bg-black/50 backdrop-blur border border-white/20 rounded-full">
//               {activeImageIndex + 1} / {selectedPlanner.gallery.length}
//             </div>

//             <button 
//               className="product-detail__lightbox-close absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur border border-white/20 rounded-full text-white hover:bg-white/30 hover:border-[--accent] hover:rotate-90 transition-all duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsLightboxOpen(false);
//               }}
//             >
//               ✕
//             </button>

//             <button 
//               className="product-detail__lightbox-nav product-detail__lightbox-nav--prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur border border-white/20 rounded-full text-white hover:bg-[rgba(var(--accent-rgb),0.3)] hover:border-[--accent] hover:scale-110 transition-all duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handlePrevImage();
//               }}
//             >
//               ←
//             </button>

//             <button 
//               className="product-detail__lightbox-nav product-detail__lightbox-nav--next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur border border-white/20 rounded-full text-white hover:bg-[rgba(var(--accent-rgb),0.3)] hover:border-[--accent] hover:scale-110 transition-all duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNextImage();
//               }}
//             >
//               →
//             </button>
//           </div>
//         )}
//       </LightboxOverlay>

//       {/* Стили для анимаций */}
//       <style jsx>{`
//         @keyframes catalogBreathe {
//           0%, 100% {
//             opacity: 0.6;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.4;
//             transform: scale(1.1);
//           }
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes overlayFadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes detailSlideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes lightboxFadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes lightboxImageZoom {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .product-catalog__gradient,
//           .product-catalog__header,
//           .product-catalog__card,
//           .product-detail-overlay,
//           .product-detail {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

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