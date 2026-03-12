// import { useState } from 'preact/hooks';
// import { useBodyScrollLock } from '../../../shared/lib/useBodyScrollLock.js';
// import { Modal } from '../../../shared/ui/Modal.jsx';

// export function Footer() {
//   const [activeModal, setActiveModal] = useState(null); // 'offer', 'policy', 'recovery'

//   const openModal = (modal) => {
//     setActiveModal(modal);
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   const isAnyModalOpen = activeModal !== null;
//   useBodyScrollLock(isAnyModalOpen);

//   return (
//     <>
//       <footer className="footer bg-[--surface-soft] border-t border-[--border] py-6 md:py-8 text-[--text]">
//         <div className="footer__container max-w-7xl w-full mx-auto px-4 md:px-8 box-border">
//           <div className="footer__grid grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-start text-center md:text-left">
            
//             {/* Левая колонка - бренд */}
//             <div className="footer__brand-block flex flex-col items-center md:items-start gap-0">
//               <p className="footer__brand text-sm font-semibold text-[--text] tracking-tight">
//                 ЛайфСтатс
//               </p>
//               <div className="footer__legal-block flex flex-col items-center md:items-start gap-1 mt-1">
//                 <p className="footer__legal text-sm text-[--text-2] leading-relaxed">
//                   Самозанятый Рыбаков Илья Витальевич
//                 </p>
//                 <p className="footer__inn text-sm text-[--text-2] leading-relaxed">
//                   ИНН 860402638808
//                 </p>
//               </div>
//             </div>

//             {/* Центральная колонка - кнопки */}
//             <div className="footer__contact-block flex flex-col items-center md:items-center gap-3">
//               <div className="footer__buttons flex flex-wrap justify-center gap-2">
//                 <button 
//                   className="footer__offer inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-[--text] bg-transparent border border-[--border] rounded-xl hover:text-[--accent] hover:border-[--accent] hover:bg-[rgba(var(--accent-rgb),0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
//                   onClick={() => openModal('offer')}
//                 >
//                   Оферта
//                 </button>
//                 <button 
//                   className="footer__policy inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-[--text] bg-transparent border border-[--border] rounded-xl hover:text-[--accent] hover:border-[--accent] hover:bg-[rgba(var(--accent-rgb),0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
//                   onClick={() => openModal('policy')}
//                 >
//                   Политика
//                 </button>
//                 <button 
//                   className="footer__recovery inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-[--text] bg-transparent border border-[--border] rounded-xl hover:text-[--accent] hover:border-[--accent] hover:bg-[rgba(var(--accent-rgb),0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
//                   onClick={() => openModal('recovery')}
//                 >
//                   Не получили товар
//                 </button>
//               </div>
//             </div>

//             {/* Правая колонка - контакты */}
//             <div className="footer__contact-block flex flex-col items-center md:items-end gap-3">
//               <div className="footer__contacts flex flex-col items-center md:items-end gap-1">
//                 <a 
//                   href="mailto:allblacktraffic@gmail.com" 
//                   className="footer__email text-sm font-medium text-[--text] hover:text-[--accent] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
//                 >
//                   allblacktraffic@gmail.com
//                 </a>
//                 <a 
//                   href="https://t.me/lifestatseco" 
//                   className="footer__telegram inline-flex items-center gap-1.5 text-sm font-medium text-[--text] hover:text-[#08c] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M21.5 4.5L2.5 10.5L9 13.5M21.5 4.5L15.5 20L9 13.5M21.5 4.5L9 13.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   @lifestatseco
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Модальное окно - Оферта */}
//       <Modal
//         isOpen={activeModal === 'offer'}
//         onClose={closeModal}
//         overlayClassName="recovery-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0b0e0cd9] backdrop-blur-sm animate-[recoveryOverlayFadeIn_0.2s_ease]"
//         panelClassName="recovery-modal relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[--surface] rounded-2xl shadow-2xl animate-[recoveryModalSlideIn_0.25s_ease]"
//       >
//         <div className="recovery-modal__header flex items-center justify-between p-5 border-b border-[--border]">
//           <h2 className="recovery-modal__title text-lg font-semibold text-[--text] m-0">
//             Публичная оферта
//           </h2>
//           <button 
//             className="recovery-modal__close flex items-center justify-center w-9 h-9 p-0 bg-transparent border-none rounded-full text-[--text-2] cursor-pointer hover:bg-[--surface-soft] hover:text-[--text] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
//             onClick={closeModal}
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//         <div className="recovery-modal__content p-5">
//           <p className="recovery-modal__description text-sm text-[--text-2] leading-relaxed mb-4">
//             Настоящая публичная оферта регулирует отношения между самозанятым Рыбаковым Ильей Витальевичем и покупателем.
//           </p>
//           <div className="space-y-4 text-sm text-[--text-2]">
//             <p><strong className="text-[--text]">1. Общие положения</strong><br />
//             Оплачивая товар, вы соглашаетесь с условиями настоящей оферты. Товар считается переданным покупателю с момента предоставления доступа к шаблонам в Google Таблицах.</p>
            
//             <p><strong className="text-[--text]">2. Оплата и доставка</strong><br />
//             Оплата производится через платежные системы на сайте. Доступ к шаблонам предоставляется мгновенно после оплаты на указанную при оформлении электронную почту.</p>
            
//             <p><strong className="text-[--text]">3. Возврат</strong><br />
//             В соответствии с законодательством, цифровые товары надлежащего качества не подлежат возврату. При возникновении технических проблем напишите на allblacktraffic@gmail.com</p>
            
//             <p><strong className="text-[--text]">4. Реквизиты</strong><br />
//             Самозанятый Рыбаков Илья Витальевич<br />
//             ИНН 860402638808<br />
//             Email: allblacktraffic@gmail.com</p>
//           </div>
//         </div>
//       </Modal>

//       {/* Модальное окно - Политика конфиденциальности */}
//       <Modal
//         isOpen={activeModal === 'policy'}
//         onClose={closeModal}
//         overlayClassName="recovery-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0b0e0cd9] backdrop-blur-sm animate-[recoveryOverlayFadeIn_0.2s_ease]"
//         panelClassName="recovery-modal relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[--surface] rounded-2xl shadow-2xl animate-[recoveryModalSlideIn_0.25s_ease]"
//       >
//         <div className="recovery-modal__header flex items-center justify-between p-5 border-b border-[--border]">
//           <h2 className="recovery-modal__title text-lg font-semibold text-[--text] m-0">
//             Политика конфиденциальности
//           </h2>
//           <button 
//             className="recovery-modal__close flex items-center justify-center w-9 h-9 p-0 bg-transparent border-none rounded-full text-[--text-2] cursor-pointer hover:bg-[--surface-soft] hover:text-[--text] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
//             onClick={closeModal}
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//         <div className="recovery-modal__content p-5">
//           <p className="recovery-modal__description text-sm text-[--text-2] leading-relaxed mb-4">
//             Мы уважаем вашу конфиденциальность и защищаем персональные данные.
//           </p>
//           <div className="space-y-4 text-sm text-[--text-2]">
//             <p><strong className="text-[--text]">1. Какие данные собираем</strong><br />
//             Имя, email адрес, платежную информацию (обрабатывается платежными системами, мы не храним данные карт).</p>
            
//             <p><strong className="text-[--text]">2. Как используем</strong><br />
//             Для отправки доступа к шаблонам, поддержки и информирования о новых продуктах (с возможностью отписаться).</p>
            
//             <p><strong className="text-[--text]">3. Защита данных</strong><br />
//             Используем современные методы шифрования и защиты. Данные не передаются третьим лицам, кроме случаев, предусмотренных законом.</p>
            
//             <p><strong className="text-[--text]">4. Контакты</strong><br />
//             По вопросам конфиденциальности: allblacktraffic@gmail.com</p>
//           </div>
//         </div>
//       </Modal>

//       {/* Модальное окно - Не получили товар */}
//       <Modal
//         isOpen={activeModal === 'recovery'}
//         onClose={closeModal}
//         overlayClassName="recovery-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0b0e0cd9] backdrop-blur-sm animate-[recoveryOverlayFadeIn_0.2s_ease]"
//         panelClassName="recovery-modal relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[--surface] rounded-2xl shadow-2xl animate-[recoveryModalSlideIn_0.25s_ease]"
//       >
//         <div className="recovery-modal__header flex items-center justify-between p-5 border-b border-[--border]">
//           <h2 className="recovery-modal__title text-lg font-semibold text-[--text] m-0">
//             Не получили товар?
//           </h2>
//           <button 
//             className="recovery-modal__close flex items-center justify-center w-9 h-9 p-0 bg-transparent border-none rounded-full text-[--text-2] cursor-pointer hover:bg-[--surface-soft] hover:text-[--text] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
//             onClick={closeModal}
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//         <div className="recovery-modal__content p-5">
//           <p className="recovery-modal__description text-sm text-[--text-2] leading-relaxed mb-5">
//             Обычно письмо с доступом приходит в течение 1-3 минут после оплаты. Проверьте папку "Спам" или "Промоакции". Если письма нет — напишите нам, и мы поможем.
//           </p>
          
//           <form className="recovery-modal__form flex flex-col gap-4">
//             <div className="recovery-modal__field flex flex-col gap-2">
//               <label className="recovery-modal__label text-sm font-medium text-[--text]">
//                 Ваш email для доставки
//               </label>
//               <input 
//                 type="email" 
//                 placeholder="example@mail.com" 
//                 className="recovery-modal__input w-full px-4 py-2.5 text-base bg-[--surface-soft] border border-[--border] rounded-xl focus:border-[--accent] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.15)] outline-none transition-all duration-200"
//                 required
//               />
//             </div>
            
//             <button 
//               type="submit" 
//               className="recovery-modal__submit flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-xl cursor-pointer hover:translate-y-[-1px] hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2"
//             >
//               Отправить запрос
//             </button>
//           </form>
          
//           <div className="recovery-modal__help mt-5 pt-4 border-t border-[--border] text-xs text-[--text-2] text-center">
//             Или напишите нам в Telegram:{' '}
//             <a 
//               href="https://t.me/lifestatseco" 
//               className="recovery-modal__telegram inline-flex items-center gap-1 text-[--text] font-medium hover:text-[#08c] transition-colors duration-200"
//             >
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M21.5 4.5L2.5 10.5L9 13.5M21.5 4.5L15.5 20L9 13.5M21.5 4.5L9 13.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               @lifestatseco
//             </a>
//           </div>
//         </div>
//       </Modal>

//       {/* Стили для анимаций */}
//       <style jsx>{`
//         @keyframes recoveryOverlayFadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes recoveryModalSlideIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.98);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .recovery-modal-overlay,
//           .recovery-modal {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import { useEffect } from 'preact/hooks'; // ✅ useEffect вместо useLayoutEffect
import { useFooterModal } from './hooks/useFooterModal'; // ✅ Убрали неиспользуемый MODAL_TYPES
import { FooterBrand } from './FooterBrand';
import { FooterButtons } from './FooterButtons';
import { FooterContacts } from './FooterContacts';
import { FooterModalContainer } from './FooterModalContainer';
import { FOOTER_STYLES } from './FooterStyles';

// Константы классов
const FOOTER_CLASSES = "footer bg-[--surface-soft] border-t border-[--border] py-6 md:py-8 text-[--text]";
const CONTAINER_CLASSES = "footer__container max-w-7xl w-full mx-auto px-4 md:px-8 box-border";
const GRID_CLASSES = "footer__grid grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-start text-center md:text-left";

export function Footer() {
  const {
    openModal,
    closeModal,
    isOfferOpen,
    isPolicyOpen,
    isRecoveryOpen,
  } = useFooterModal();

  // Добавляем стили асинхронно
  useEffect(() => {
    if (!document.getElementById('footer-styles')) {
      const style = document.createElement('style');
      style.id = 'footer-styles';
      style.textContent = FOOTER_STYLES;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <footer className={FOOTER_CLASSES}>
        <div className={CONTAINER_CLASSES}>
          <div className={GRID_CLASSES}>
            <FooterBrand />
            <FooterButtons onOpenModal={openModal} />
            <FooterContacts />
          </div>
        </div>
      </footer>

      <FooterModalContainer
        isOfferOpen={isOfferOpen}
        isPolicyOpen={isPolicyOpen}
        isRecoveryOpen={isRecoveryOpen}
        onClose={closeModal}
      />
    </>
  );
}