import { memo } from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';
import { PaymentModal } from '../../../../shared/ui/paymentFolder/Payment.jsx';

// Константы классов
const CARD_CLASSES = "product-catalog__card grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-4 md:gap-6 bg-[--surface] backdrop-blur border border-[--border] rounded-2xl p-4 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full max-w-full";
const BADGE_CLASSES = "product-catalog__sale-badge absolute top-2 left-2 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg";
const BUTTON_SECONDARY_CLASSES = "product-catalog__btn product-catalog__btn--secondary inline-flex items-center justify-center px-3 py-2.5 text-sm font-semibold tracking-wide border border-[--border] rounded-xl bg-[--surface] text-[--text] hover:bg-[--surface-soft] hover:border-[--text-2] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 w-full";
const BUTTON_PRIMARY_CLASSES = "product-catalog__btn product-catalog__btn--primary inline-flex items-center justify-center px-3 py-2.5 text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 w-full";

export const PlannerCard = memo(function PlannerCard({ planner, onOpenDetails }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDetails = useCallback(() => {
    onOpenDetails(planner);
  }, [onOpenDetails, planner]);

  return (
    <article className={CARD_CLASSES}>
      
      {/* Изображение */}
      <div className="product-catalog__card-image-wrapper relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
        
        <span className={BADGE_CLASSES}>
          {planner.badge}
        </span>

        <div className="product-catalog__card-image w-full h-full flex items-center justify-center bg-gray-100 overflow-hidden">
          <img 
            src={planner.image} 
            alt={planner.title}
            className="product-catalog__image w-full h-full object-cover object-center"
            loading="lazy"
            width="400"
            height="225"
            decoding="async"
          />
        </div>

      </div>

      {/* Контент */}
      <div className="product-catalog__card-content flex flex-col gap-3 w-full">
        
        <h3 className="product-catalog__card-title text-lg md:text-xl font-bold leading-tight text-[--text] tracking-tight">
          {planner.title}
        </h3>

        <p className="product-catalog__card-description text-sm text-[--text-2] leading-relaxed">
          {planner.description}
        </p>

        {/* Цена */}
        <div className="product-catalog__card-pricing flex items-baseline gap-2 flex-wrap">
          
          <span className="product-catalog__card-price-new text-xl md:text-2xl font-semibold tracking-tight text-[--text]">
            {planner.price}
          </span>

          <span className="product-catalog__card-price-old text-base text-gray-400 line-through">
            {planner.oldPrice}
          </span>

        </div>

        {/* Кнопки */}
        <div className="product-catalog__card-actions grid grid-cols-2 gap-2 w-full mt-2">
          
          <button 
            className={BUTTON_SECONDARY_CLASSES}
            onClick={handleOpenDetails}
          >
            Что внутри
          </button>

          <button 
            onClick={() => setIsOpen(true)} 
            className={BUTTON_PRIMARY_CLASSES}
          >
            Купить
          </button>

        </div>

        {/* Модалка */}
        <PaymentModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          productName={planner.title}
          productPrice={planner.price}
        />

      </div>

    </article>
  );
});

