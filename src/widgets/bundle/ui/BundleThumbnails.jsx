import { memo, useCallback } from 'preact/compat';

// Константы классов
const THUMBNAIL_BASE_CLASSES = "product-pack__thumbnail flex-1 min-w-0 aspect-square p-0 bg-gray-100 border-2 rounded-xl cursor-pointer transition-all duration-200 overflow-hidden relative shadow-sm";
const ACTIVE_CLASS = 'border-[--accent] border-2 shadow-[0_0_0_2px_rgba(var(--accent-rgb),0.25),0_4px_20px_rgba(var(--accent-rgb),0.3)]';
const INACTIVE_CLASS = 'border-[--border] hover:border-[--accent] hover:shadow-[0_4px_16px_rgba(var(--accent-rgb),0.25),0_0_0_2px_rgba(var(--accent-rgb),0.1)]';

// Отдельный мемоизированный компонент для миниатюры
const ThumbnailButton = memo(({ image, isActive, onSelect, index }) => {
  // Мемоизируем обработчик
  const handleClick = useCallback(() => {
    onSelect(index);
  }, [onSelect, index]);

  // Вычисляем класс один раз для этой кнопки
  const buttonClass = isActive 
    ? `${THUMBNAIL_BASE_CLASSES} ${ACTIVE_CLASS}`
    : `${THUMBNAIL_BASE_CLASSES} ${INACTIVE_CLASS}`;

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      aria-label={`Переключить на ${image.alt}`}
      aria-current={isActive}
    >
      <img 
        src={image.src} 
        alt={image.alt}
        className="product-pack__thumbnail-image w-full h-full object-cover"
        loading="lazy"
        width="150"
        height="150"
        decoding="async"
      />
    </button>
  );
});

// Основной компонент
export const BundleThumbnails = memo(({ images, activeIndex, onSelect }) => (
  <div className="product-pack__thumbnails flex gap-2 justify-center flex-nowrap w-full max-w-full min-w-0">
    {images.map((image, index) => (
      <ThumbnailButton
        key={image.id}
        image={image}
        isActive={index === activeIndex}
        onSelect={onSelect}
        index={index}
      />
    ))}
  </div>
));