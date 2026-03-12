import { useCallback } from 'preact/hooks';
import { BUTTON_CLASSES, BUTTON_LABELS } from './FooterConstants';

export const FooterButtons = ({ onOpenModal }) => {
  // Единый обработчик для всех кнопок
  const handleClick = useCallback((e) => {
    const { type } = e.currentTarget.dataset;
    onOpenModal(type);
  }, [onOpenModal]);

  return (
    <div className="footer__contact-block flex flex-col items-center md:items-center gap-3">
      <div className="footer__buttons flex flex-wrap justify-center gap-2">
        {Object.entries(BUTTON_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={BUTTON_CLASSES}
            data-type={key}
            onClick={handleClick}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};