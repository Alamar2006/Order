import { memo } from 'preact/compat';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton.jsx';
import { PRICING } from './BundleConstants';
import { PaymentModal } from '../../../shared/ui/paymentFolder/Payment.jsx';
import { useState } from 'preact/hooks';

export const BundlePricing = memo(({ timer = '06:27:25' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-[--surface] border border-[--border] rounded-xl p-6 w-full max-w-full shadow-sm flex flex-col gap-4">
      <p className="text-sm font-medium text-[--text-2] text-center">
        Набор ЛайфСтатс
      </p>
      
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-semibold text-[--text]">
            {PRICING.currentPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">
            {PRICING.oldPrice}
          </span>
        </div>
        
        <span className="text-sm font-medium text-[--accent]">
          Экономия {PRICING.savings}
        </span>

        <div className="text-sm text-[--text-2] mt-2">
          до конца акции: {timer}
        </div>
      </div>

      <PrimaryButton onClick={() => setIsOpen(true)} className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
        Купить набор
      </PrimaryButton>  

      <PaymentModal
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        productName="Набор LifeTrack (4 планера)"
        productPrice={1897}
      />
    </div>
  );
});

