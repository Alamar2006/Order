import { Modal } from '../Modal.jsx';
import { useState } from 'preact/hooks';
import { FooterOfferModal } from '../../../widgets/footer/ui/FooterOfferModal.jsx';
import { FooterPolicyModal } from '../../../widgets/footer/ui/FooterPolicyModal.jsx';

const CLOSE_BUTTON_CLASSES =
"product-detail__close absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--text-2] hover:rotate-90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4";

export const PaymentModal = ({
  isOpen,
  onClose,
  productName = "Планер Weekly",
  productPrice = 1290,
  onSuccess,
  requiredConsents = [
    { id: 'terms', label: 'Согласие с условиями оферты', required: true },
    { id: 'privacy', label: 'Согласие на обработку персональных данных', required: true }
  ]
}) => {

  const [consents, setConsents] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const handleConsentChange = (id) => {
    setConsents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePayment = async () => {

    const requiredUnchecked = requiredConsents
      .filter(c => c.required && !consents[c.id]);

    if (requiredUnchecked.length > 0) {
      alert('Необходимо согласиться с условиями оферты и обработкой персональных данных');
      return;
    }

    setIsProcessing(true);

    try {

      if (onSuccess) {
        await onSuccess({ consents });
      }

      onClose();

    } catch (error) {

      console.error('Payment error:', error);

    } finally {

      setIsProcessing(false);

    }

  };

  const handlePolicyClick = (e) => {
    e.preventDefault();
    setIsPolicyOpen(true);
  };

  const handleOfferClick = (e) => {
    e.preventDefault();
    setIsOfferOpen(true);
  };

  const bothConsentsChecked = requiredConsents
    .filter(c => c.required)
    .every(c => consents[c.id]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur z-[5000] flex items-center justify-center p-4 md:p-8"
        panelClassName="relative w-full max-w-[480px] max-h-[95vh] bg-[--surface] backdrop-blur border border-[--border] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >

        <button
          className={CLOSE_BUTTON_CLASSES}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="bg-[--surface-soft] px-6 py-5 md:px-8 md:py-6 border-b border-[--border]">
          <h2 className="text-xl font-semibold text-[--text]">
            Оплата заказа
          </h2>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1 min-w-0">

          <div className="mb-6 p-4 bg-[--surface-soft] rounded-xl text-sm text-[--text-2]">

            <div className="flex justify-between items-center">
              <span className="font-medium">Товар:</span>
              <strong className="text-[--text] font-semibold">
                {productName}
              </strong>
            </div>

            <div className="flex justify-between items-center mt-2 pt-2 border-t border-[--border]">
              <span className="font-medium">Сумма:</span>
              <span className="text-lg font-bold text-[--text]">
                {productPrice.toLocaleString()} ₽
              </span>
            </div>

          </div>

          <p className="text-sm text-[--text-2] leading-relaxed mb-6">
            Для завершения покупки подтвердите согласие с условиями
          </p>

          <div className="space-y-4 mb-8">

            {requiredConsents.map(({ id, label, required }) => (

              <label key={id} className="flex items-start gap-3 cursor-pointer select-none">

                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[--border] text-[--accent]"
                  checked={consents[id] || false}
                  onChange={() => handleConsentChange(id)}
                />

                <span className="text-sm text-[--text] leading-tight pt-0.5">

                  {id === 'terms' ? (
                    <>
                      Согласие с{' '}
                      <button
                        onClick={handleOfferClick}
                        className="text-[--accent] underline"
                      >
                        условиями оферты
                      </button>
                    </>
                  ) : id === 'privacy' ? (
                    <>
                      Согласие на{' '}
                      <button
                        onClick={handlePolicyClick}
                        className="text-[--accent] underline"
                      >
                        обработку персональных данных
                      </button>
                    </>
                  ) : label}

                  {required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}

                </span>

              </label>

            ))}

          </div>

          <div className="flex gap-3">

            <button
              className="flex-1 py-3 px-6 text-sm font-semibold rounded-xl bg-[--surface-soft] border border-[--border]"
              onClick={onClose}
              disabled={isProcessing}
            >
              Отмена
            </button>

            <button
              className="flex-1 py-3 px-6 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              onClick={handlePayment}
              disabled={isProcessing || !bothConsentsChecked}
            >
              {isProcessing
                ? 'Обработка...'
                : `Оплатить ${productPrice.toLocaleString()} ₽`}
            </button>

          </div>

        </div>

      </Modal>

      <FooterPolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />

      <FooterOfferModal
        isOpen={isOfferOpen}
        onClose={() => setIsOfferOpen(false)}
      />
    </>
  );
};