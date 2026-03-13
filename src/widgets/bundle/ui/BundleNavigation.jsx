import { memo } from 'preact/compat';

const NAV_BUTTON_CLASSES = "product-pack__nav absolute top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 border border-black/15 rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--accent] hover:scale-110 hover:text-[--accent] active:scale-95 focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4 z-10";

export const BundleNavigation = memo(({ onPrev, onNext }) => (
  <>
    <button 
      className={`${NAV_BUTTON_CLASSES} left-4`}
      onClick={onPrev}
      aria-label="Предыдущее изображение"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    
    <button 
      className={`${NAV_BUTTON_CLASSES} right-4`}
      onClick={onNext}
      aria-label="Следующее изображение"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </>
));