// export function HeroSection() {
//   return (
//     <section className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,2vw,2rem)] py-[clamp(2rem,5vw,40rem)] flex flex-col gap-[clamp(2rem,5vw,4rem)]">
//       {/* Основной контент - сетка 2 колонки */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-center w-full">
//         {/* Левая колонка с текстом */}
//         <div className="flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)] text-left animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
//           <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[--text] m-0 p-0 max-w-full">
//             Планеры для задач, привычек и финансов — в одной системе
//           </h1>
          
//           <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] m-0 p-0 max-w-[90%] font-normal animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
//             Готовые шаблоны в Google Таблицах. Копируете в свой аккаунт и начинаете планировать уже сегодня. 
//             Мгновенный доступ сразу после оплаты.
//           </p>

//           {/* CTA группа с кнопкой */}
//           <div className="flex flex-row items-center gap-4 flex-wrap animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
//           <a 
//   href="#bundle"
//   className="inline-flex items-center justify-center gap-2.5 px-[clamp(1.75rem,4vw,2.75rem)] py-[clamp(1rem,2vw,1.125rem)] text-[clamp(0.9375rem,1.5vw,1.125rem)] font-semibold tracking-[0.02em] border-none rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden min-h-[48px] no-underline bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.35),0_0_0_4px_rgba(59,130,246,0.1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-[0_4px_20px_rgba(59,130,246,0.3),0_0_0_2px_rgba(59,130,246,0.15)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4"
// >
//   <span className="relative z-10 leading-[1.2] text-white">Получить шаблоны</span>
//   <svg 
//     className="relative z-10 transition-transform duration-300 flex-shrink-0 hero__cta-icon text-white" 
//     width="16" 
//     height="16" 
//     viewBox="0 0 16 16" 
//     fill="none"
//   >
//     <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// </a>
// </div>
//         </div>

//         {/* Правая колонка с визуалом */}
//         <div className="flex items-center justify-center relative w-full min-h-[400px] hero__visual animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
//           <div className="relative w-full max-w-[600px] hero__preview-wrapper">
//           <div className="w-full rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hero__preview-image animate-[heroImageFadeIn_1.2s_ease-in-out] overflow-hidden">
//   {/* Здесь будет изображение планера */}
//   <div className="w-full h-full">
//     <img 
//       src="/assets/abc.png" 
//       alt="Планер" 
//       className="w-full h-full object-cover rounded-xl"
//     />
//   </div>
// </div>
//           </div>
//         </div>
//       </div>

//       {/* Блок доверия (рейтинг и статистика) - горизонтальный как в CSS */}
//       <div className="relative z-10 w-full pt-[clamp(4rem,8vw,8rem)] pb-[clamp(1.5rem,3vw,2rem)] mt-auto animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
//         <div className="max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)] flex items-center justify-center gap-[clamp(1rem,3vw,2rem)] flex-wrap">
//           {/* Рейтинг со звездами */}
//           <div className="flex items-center gap-2 text-[clamp(0.875rem,1.5vw,1rem)] text-[--text] font-medium">
//             <span className="flex-shrink-0 text-yellow-400 text-lg">★</span>
//             <span className="font-bold text-[--text] text-[clamp(1rem,1.8vw,1.125rem)]">4.9</span>
//             <span className="text-[--text-2] font-normal">(1 247 отзывов)</span>
//           </div>

//           {/* Разделитель */}
//           <div className="w-px h-6 bg-[--border] flex-shrink-0 hidden sm:block" />

//           {/* Количество покупок */}
//           <div className="flex items-center gap-2 text-[clamp(0.875rem,1.5vw,1rem)] text-[--text] font-medium">
//             <span className="flex-shrink-0 text-[--accent]">✓</span>
//             <span className="font-bold text-[--text] text-[clamp(1rem,1.8vw,1.125rem)]">2 340+</span>
//             <span className="text-[--text-2] font-normal">купили</span>
//           </div>

//           {/* Разделитель */}
//           <div className="w-px h-6 bg-[--border] flex-shrink-0 hidden sm:block" />

//           {/* Мгновенная доставка */}
//           <div className="flex items-center gap-2 text-[clamp(0.875rem,1.5vw,1rem)] text-[--text] font-medium">
//             <span className="flex-shrink-0 text-[--accent]">⚡</span>
//             <span className="font-bold text-[--text] text-[clamp(1rem,1.8vw,1.125rem)]">Мгновенная</span>
//             <span className="text-[--text-2] font-normal">доставка</span>
//           </div>
//         </div>
//       </div>

//       {/* Стили для анимаций и иконки */}
//       <style jsx>{`
//         .hero__cta-icon {
//           transition: transform 0.3s ease;
//         }
//         a:hover .hero__cta-icon {
//           transform: translateX(3px);
//         }
//         .hero__preview-wrapper:hover .hero__preview-image {
//           transform: translateY(-4px);
//           box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
//         }
//         @keyframes heroImageFadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
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
//         @media (prefers-reduced-motion: reduce) {
//           .hero__logo,
//           .hero__title,
//           .hero__subtitle,
//           .hero__cta-group,
//           .hero__visual,
//           .hero__trust-bar {
//             animation: none !important;
//           }
//         }
//       `}</style>

//       {/* Медиа-запросы для мобильных устройств */}
//       <style jsx>{`
//         @media (max-width: 767px) {
//           section :global(.hero__visual) {
//             min-height: 300px;
//           }
//           section :global(.hero__preview-wrapper) {
//             max-width: 100%;
//           }
//           section :global(.hero__cta) {
//             flex: 1;
//             min-width: 140px;
//             max-width: 100%;
//           }
//         }
//         @media (min-width: 768px) and (max-width: 1023px) {
//           section :global(.hero__preview-wrapper) {
//             max-width: 500px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HeroTrustBar } from './HeroTrustBar';
import { animations, mediaQueries, interactiveStyles } from './HeroStyles';

export function HeroSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,2vw,2rem)] py-[clamp(2rem,5vw,40rem)] flex flex-col gap-[clamp(2rem,5vw,4rem)]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-center w-full">
        <HeroContent />
        <HeroVisual />
      </div>

      
      <HeroTrustBar />

      
      <style jsx>{animations}</style>
      <style jsx>{interactiveStyles}</style>
      <style jsx>{mediaQueries}</style>
    </section>
  );
}