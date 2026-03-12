import { useCallback } from 'preact/hooks';
import { MODAL_TEXTS, CONTACTS } from './FooterConstants';
import { FooterModal } from './FooterModal';

// Константы классов
const DESCRIPTION_CLASSES = "recovery-modal__description text-sm text-[--text-2] leading-relaxed mb-5";
const FORM_CLASSES = "recovery-modal__form flex flex-col gap-4";
const FIELD_CLASSES = "recovery-modal__field flex flex-col gap-2";
const LABEL_CLASSES = "recovery-modal__label text-sm font-medium text-[--text]";
const INPUT_CLASSES = "recovery-modal__input w-full px-4 py-2.5 text-base bg-[--surface-soft] border border-[--border] rounded-xl focus:border-[--accent] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.15)] outline-none transition-all duration-200";
const SUBMIT_BUTTON_CLASSES = "recovery-modal__submit flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-xl cursor-pointer hover:translate-y-[-1px] hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2";
const HELP_CLASSES = "recovery-modal__help mt-5 pt-4 border-t border-[--border] text-xs text-[--text-2] text-center";
const TELEGRAM_LINK_CLASSES = "recovery-modal__telegram inline-flex items-center gap-1 text-[--text] font-medium hover:text-[#08c] transition-colors duration-200";

const TELEGRAM_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.5 4.5L2.5 10.5L9 13.5M21.5 4.5L15.5 20L9 13.5M21.5 4.5L9 13.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FooterRecoveryModal = ({ isOpen, onClose }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: обработка формы
    console.log('Form submitted');
  }, []);

  return (
    <FooterModal
      isOpen={isOpen}
      onClose={onClose}
      title={MODAL_TEXTS.recovery.title}
      maxWidth="max-w-md"
    >
      <p className={DESCRIPTION_CLASSES}>
        {MODAL_TEXTS.recovery.description}
      </p>
      
      <form className={FORM_CLASSES} onSubmit={handleSubmit}>
        <div className={FIELD_CLASSES}>
          <label className={LABEL_CLASSES}>
            Ваш email для доставки
          </label>
          <input 
            type="email" 
            placeholder="example@mail.com" 
            className={INPUT_CLASSES}
            required
            autoFocus
          />
        </div>
        
        <button 
          type="submit" 
          className={SUBMIT_BUTTON_CLASSES}
        >
          Отправить запрос
        </button>
      </form>
      
      <div className={HELP_CLASSES}>
        Или напишите нам в Telegram:{' '}
        <a 
          href={CONTACTS.telegramLink} 
          className={TELEGRAM_LINK_CLASSES}
        >
          {TELEGRAM_ICON}
          {CONTACTS.telegram}
        </a>
      </div>
    </FooterModal>
  );
};