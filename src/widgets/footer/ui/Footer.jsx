import { useEffect } from 'preact/hooks'; 
import { useFooterModal } from './hooks/useFooterModal'; 
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