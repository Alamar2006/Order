// import { SectionBackdrop } from '../../../shared/ui/SectionBackdrop.jsx';

// const benefits = [
//   {
//     title: 'Одна система вместо десятка сервисов',
//     description:
//       'Все планеры связаны между собой: задачи, привычки и финансы отражаются на общей картине недели.',
//   },
//   {
//     title: 'Понятный интерфейс на базе Google Таблиц',
//     description:
//       'Никаких лишних функций. Только то, что помогает планировать и держать фокус на приоритетах.',
//   },
//   {
//     title: 'Настраиваете под себя за 10–15 минут',
//     description:
//       'Добавляете свои категории, цели и проекты — система подстраивается под ваш формат работы.',
//   },
// ];

// export function BenefitsSection() {
//   return (
//     <section className="benefits relative py-[clamp(4rem,6vw,6.5rem)] overflow-hidden bg-[--bg] text-[--text]">
//       {/* Фоновые элементы */}
//       <SectionBackdrop
//         backgroundClassName="benefits__background absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
//         gradients={[
//           {
//             key: 'primary',
//             className:
//               'benefits__gradient benefits__gradient--primary absolute rounded-full opacity-30 animate-[benefitsBreathe_20s_ease-in-out_infinite]',
//             style: {
//               top: '-30%',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '1600px',
//               height: '1600px',
//               background: 'var(--gradient-glow)',
//               filter: 'blur(120px)',
//             },
//           },
//           {
//             key: 'secondary',
//             className:
//               'benefits__gradient benefits__gradient--secondary absolute rounded-full opacity-30 animate-[benefitsBreathe_20s_ease-in-out_infinite]',
//             style: {
//               bottom: '-20%',
//               right: '10%',
//               width: '1000px',
//               height: '1000px',
//               background: 'var(--gradient-glow)',
//               filter: 'blur(120px)',
//               animationDelay: '-10s',
//             },
//           },
//         ]}
//         grain={{
//           className:
//             'benefits__grain absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay',
//           style: {
//             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px)`,
//             backgroundSize: '3px 3px',
//           },
//         }}
//       />

//       {/* Контент */}
//       <div className="benefits__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8">
//         {/* Заголовок секции */}
//         <div className="benefits__header text-center mb-[clamp(3rem,5vw,4.5rem)] w-full animate-[fadeInUp_1s_ease-out]">
//           <h2 className="benefits__title text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.2] mb-4 p-0 tracking-[-0.03em] text-[--text]">
//             Почему ЛайфСтатс — это удобно
//           </h2>
//           <p className="benefits__subtitle text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] max-w-2xl mx-auto p-0 tracking-[-0.01em] font-normal">
//             ЛайфСтатс собрал в себе лучшие практики по планированию задач, привычек и финансов в одном
//             наборе понятных шаблонов.
//           </p>
//         </div>

//         {/* Сетка с карточками */}
//         <div className="benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative w-full">
//           {benefits.map((benefit, index) => (
//             <article
//               key={benefit.title}
//               className={`benefits__card relative p-8 lg:p-12 bg-[--surface] border border-[--border] rounded-3xl transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.04),0_0_rgba(var(--accent-rgb),0)] hover:translate-y-[-4px] hover:bg-[--surface] hover:border-[--border] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(var(--accent-rgb),0.1),0_4px_16px_rgba(var(--accent-rgb),0.08)] focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 animate-[fadeInUp_1s_ease-out_${0.2 + index * 0.1}s_both]`}
//             >
//               {/* Иконка */}
//               <div className="benefits__icon-wrapper inline-flex items-center justify-center w-16 h-16 mb-6 bg-[--surface] border-2 border-[--border] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-400 flex-shrink-0 group-hover:bg-[--surface] group-hover:border-[--accent] group-hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.2),0_0_0_3px_rgba(var(--accent-rgb),0.08)] group-hover:scale-105">
//                 <svg 
//                   className="benefits__icon w-8 h-8 text-[--text] transition-colors duration-400 group-hover:text-[--accent]" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   stroke="currentColor"
//                 >
//                   {index === 0 && (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                   )}
//                   {index === 1 && (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   )}
//                   {index === 2 && (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                   )}
//                 </svg>
//               </div>

//               {/* Текст */}
//               <h3 className="benefits__card-title text-xl lg:text-2xl font-bold leading-[1.3] mb-3 p-0 text-[--text] tracking-[-0.02em]">
//                 {benefit.title}
//               </h3>
//               <p className="benefits__card-description text-base leading-[1.6] text-[--text-2] m-0 p-0 tracking-[-0.01em] font-normal">
//                 {benefit.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* Стили для анимаций */}
//       <style jsx>{`
//         @keyframes benefitsBreathe {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.2;
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
//         @media (prefers-reduced-motion: reduce) {
//           .benefits__gradient,
//           .benefits__header,
//           .benefits__card {
//             animation: none !important;
//           }
//         }
//       `}</style>

//       {/* Медиа-запросы для адаптивности */}
//       <style jsx>{`
//         @media (max-width: 767px) {
//           .benefits {
//             padding: clamp(3.5rem, 5vw, 4.5rem) 0;
//           }
//           .benefits__container {
//             padding: 0 1rem;
//           }
//           .benefits__header {
//             margin-bottom: clamp(2.5rem, 4vw, 3rem);
//           }
//           .benefits__title {
//             margin-bottom: 0.875rem;
//           }
//           .benefits__subtitle {
//             font-size: 0.9375rem;
//           }
//           .benefits__grid {
//             gap: 1.5rem;
//           }
//           .benefits__card {
//             padding: 2rem 1.5rem;
//           }
//           .benefits__icon-wrapper {
//             width: 56px;
//             height: 56px;
//             margin-bottom: 1.25rem;
//           }
//           .benefits__icon {
//             width: 28px;
//             height: 28px;
//           }
//           .benefits__card-title {
//             font-size: 1.25rem;
//             margin-bottom: 0.625rem;
//           }
//           .benefits__card-description {
//             font-size: 0.9375rem;
//           }
//         }
//         @media (min-width: 768px) and (max-width: 1023px) {
//           .benefits {
//             padding: clamp(4.5rem, 5.5vw, 5.5rem) 0;
//           }
//           .benefits__container {
//             padding: 0 2rem;
//           }
//           .benefits__header {
//             margin-bottom: clamp(3rem, 4vw, 3.5rem);
//           }
//           .benefits__grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.5rem;
//           }
//           .benefits__card:last-child {
//             grid-column: 1 / -1;
//             max-width: 500px;
//             margin: 0 auto;
//           }
//           .benefits__card {
//             padding: 3rem 2rem;
//           }
//         }
//         @media (min-width: 1440px) {
//           .benefits {
//             padding: clamp(6rem, 6.5vw, 6.5rem) 0;
//           }
//           .benefits__grid {
//             gap: 2rem;
//           }
//           .benefits__card {
//             padding: 3.5rem 3rem;
//           }
//           .benefits__card-title {
//             font-size: 1.5rem;
//           }
//           .benefits__card-description {
//             font-size: 1.0625rem;
//           }
//         }
//         @media (max-width: 360px) {
//           .benefits {
//             padding: clamp(3rem, 4vw, 3.5rem) 0;
//           }
//           .benefits__container {
//             padding: 0 0.875rem;
//           }
//           .benefits__header {
//             margin-bottom: 2.5rem;
//           }
//           .benefits__card {
//             padding: 1.75rem 1.25rem;
//           }
//           .benefits__icon-wrapper {
//             width: 52px;
//             height: 52px;
//           }
//           .benefits__icon {
//             width: 26px;
//             height: 26px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


import { useEffect } from 'react';
import { BenefitsBackground } from './BenefitsBackground';
import { BenefitsHeader } from './BenefitsHeader';
import { BenefitsGrid } from './BenefitsGrid';
import { BENEFITS, BACKGROUND_CONFIG, HEADER_CONTENT } from './constants';
import { BENEFITS_STYLES } from './BenefitsStyles';

const SECTION_CLASSES = "benefits relative py-[clamp(4rem,6vw,6.5rem)] overflow-hidden bg-[--bg] text-[--text]";
const CONTAINER_CLASSES = "benefits__container relative z-1 max-w-7xl w-full mx-auto px-4 md:px-8";

export const BenefitsSection = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = BENEFITS_STYLES;
    style.setAttribute('data-benefits-styles', 'true');
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.querySelector('[data-benefits-styles]');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <section className={SECTION_CLASSES}>
      <BenefitsBackground 
        gradients={BACKGROUND_CONFIG.gradients}
        grain={BACKGROUND_CONFIG.grain}
      />

      <div className={CONTAINER_CLASSES}>
        <BenefitsHeader 
          title={HEADER_CONTENT.title}
          subtitle={HEADER_CONTENT.subtitle}
        />
        
        <BenefitsGrid benefits={BENEFITS} />
      </div>
    </section>
  );
};