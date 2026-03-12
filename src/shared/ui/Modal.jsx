import { useEffect } from 'preact/hooks';
import { createPortal } from 'preact/compat';

export function Modal({
  isOpen,
  onClose,
  overlayClassName = "fixed inset-0 bg-black/60 backdrop-blur z-[5000] flex items-center justify-center p-4",
  panelClassName = "",
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) {

  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeOnEscape, onClose]);


  if (!isOpen) return null;

  const modalContent = (
    <div
      className={overlayClassName}
      onClick={closeOnOverlayClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={panelClassName}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}