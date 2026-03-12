import { useCallback } from 'preact/hooks';

// Константы классов
const NAV_BASE_CLASSES = "product-detail__nav absolute top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10 shadow-md";
const NAV_PREV_CLASSES = "left-2";
const NAV_NEXT_CLASSES = "right-2";

// Иконки как константы
const PREV_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NEXT_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlannerModalNavigation = ({ onPrev, onNext }) => {
  // Мемоизируем обработчики
  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    onPrev();
  }, [onPrev]);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    onNext();
  }, [onNext]);

  return (
    <>
      <button 
        className={`${NAV_BASE_CLASSES} ${NAV_PREV_CLASSES}`}
        onClick={handlePrev}
        aria-label="Предыдущее изображение"
      >
        {PREV_ICON}
      </button>
      
      <button 
        className={`${NAV_BASE_CLASSES} ${NAV_NEXT_CLASSES}`}
        onClick={handleNext}
        aria-label="Следующее изображение"
      >
        {NEXT_ICON}
      </button>
    </>
  );
};