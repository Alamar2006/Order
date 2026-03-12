import { Modal } from '../../../shared/ui/Modal.jsx';

const CLOSE_BUTTON_CLASSES = "footer-modal__close flex items-center justify-center w-9 h-9 p-0 bg-transparent border-none rounded-full text-[--text-2] cursor-pointer hover:bg-[--surface-soft] hover:text-[--text] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-2";

export const FooterModal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    overlayClassName="recovery-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0b0e0cd9] backdrop-blur-sm animate-[recoveryOverlayFadeIn_0.2s_ease]"
    panelClassName={`recovery-modal relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-[--surface] rounded-2xl shadow-2xl animate-[recoveryModalSlideIn_0.25s_ease]`}
  >
    <div className="recovery-modal__header flex items-center justify-between p-5 border-b border-[--border]">
      <h2 className="recovery-modal__title text-lg font-semibold text-[--text] m-0">
        {title}
      </h2>
      <button 
        className={CLOSE_BUTTON_CLASSES}
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
    <div className="recovery-modal__content p-5">
      {children}
    </div>
  </Modal>
);