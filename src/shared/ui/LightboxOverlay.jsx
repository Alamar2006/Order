import { useEffect } from 'preact/hooks';

export function LightboxOverlay({
  isOpen,
  onClose,
  overlayClassName,
  children,
  closeOnEscape = true,
}) {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  return (
    <div className={overlayClassName} onClick={onClose}>
      {children}
    </div>
  );
}

