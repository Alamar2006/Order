import { useState } from 'preact/hooks';
import { PaymentModal } from '../../../shared/ui/paymentFolder/Payment.jsx';

export const PlannerModalInfo = ({ planner }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="product-detail__info flex flex-col gap-5 min-w-0 break-words">

      <h2 className="product-detail__title text-2xl md:text-3xl font-extrabold leading-tight text-[--text] tracking-tight">
        {planner.title}
      </h2>
      
      <p className="product-detail__description text-sm md:text-base text-[--text-2] leading-relaxed whitespace-pre-line">
        {planner.fullDescription}
      </p>
  
      <div className="space-y-2">
        <h4 className="font-semibold text-[--text]">Что входит:</h4>

        <ul className="space-y-1">
          {planner.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-[--text-2]">
              
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-[--accent] flex-shrink-0 mt-0.5"
              >
                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <span>{feature}</span>

            </li>
          ))}
        </ul>
      </div>
  
      <div className="product-detail__price-stack flex flex-col items-start gap-2 mt-2">

        <div className="product-detail__pricing flex items-baseline gap-3 flex-wrap">

          <span className="product-detail__price-new text-2xl md:text-3xl font-semibold text-[--text] tracking-tight">
            {planner.price}
          </span>

          <span className="product-detail__price-old text-lg text-gray-400 line-through">
            {planner.oldPrice}
          </span>

        </div>

      </div>
  
      <button
        onClick={() => setIsOpen(true)}
        className="product-detail__cta inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-full cursor-pointer transition-all duration-400 relative overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(var(--accent-rgb),0.35)] hover:outline hover:outline-4 hover:outline-[rgba(var(--accent-rgb),0.1)] active:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4 w-full max-w-md min-h-[56px] group"
      >

        <span className="product-detail__cta-text relative z-10">
          Купить сейчас
        </span>

        <svg 
          className="product-detail__cta-icon relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </button>

      <PaymentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productName={planner.title}
        productPrice={planner.price}
      />
  
      <p className="text-xs text-[--text-2] mt-2">
        Мгновенный доступ после оплаты. Работает в Google Таблицах.
      </p>

    </div>
  );
};