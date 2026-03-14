import { Modal } from '../Modal.jsx';
import { useState, useRef, useEffect } from 'preact/hooks';
import { FooterOfferModal } from '../../../widgets/footer/ui/FooterOfferModal.jsx';
import { FooterPolicyModal } from '../../../widgets/footer/ui/FooterPolicyModal.jsx';

const CLOSE_BUTTON_CLASSES =
"product-detail__close absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[--surface] border border-[--border] rounded-full text-[--text] cursor-pointer transition-all duration-300 hover:bg-[--surface-soft] hover:border-[--text-2] hover:rotate-90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[rgba(var(--accent-rgb),0.5)] focus-visible:outline-offset-4";

export const PaymentModal = ({
  isOpen,
  onClose,
  productName = "Планер Weekly",
  productPrice = 1290,
  requiredConsents = [
    { id: 'terms', label: 'Согласие с условиями оферты', required: true },
    { id: 'privacy', label: 'Согласие на обработку персональных данных', required: true }
  ]
}) => {

  const [consents, setConsents] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const emailRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      emailRef.current?.focus();
    }
  }, [isOpen]);

  const emailInputClass =
  "w-full px-4 py-3 rounded-xl border border-[--border] bg-[--surface] text-[--text] outline-none transition-all duration-200 focus:border-[--accent] focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.2)]";

  const validateEmail = (value) => {

    const emailRegex = /\S+@\S+\.\S+/;

    if (!value) {
      setEmailError("Введите email");
      return false;
    }

    if (!emailRegex.test(value)) {
      setEmailError("Неверный формат email");
      return false;
    }

    setEmailError("");
    return true;

  };

  const handleConsentChange = (id) => {
    setConsents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const bothConsentsChecked = requiredConsents
    .filter(c => c.required)
    .every(c => consents[c.id]);

  const isFormValid = bothConsentsChecked && !emailError && email;

  const handlePayment = async () => {

    if (!validateEmail(email)) return;

    setIsProcessing(true);

    try {
      const orderId = crypto.randomUUID();
      const response = await fetch("https://wonderingly-tuneful-emu.cloudpub.ru/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productName,
          amount: productPrice,
          email,
          orderId,
          successUrl: `${window.location.origin}/payment-success`,
          failedUrl: `${window.location.origin}/payment-failed`
        })
      });
      

      
      if(!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      const data = await response.json();
      if (data.confirmation_url) {

        setIsRedirecting(true);

        setTimeout(() => {
          window.location.href = data.confirmation_url;
        }, 900);

      }

    } catch (error) {

      console.error(error);
      alert("Ошибка оплаты");

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

          <div className="mb-6">

            <label className="text-sm font-medium text-[--text] mb-2 block">
              Email для получения продукта (перепроверяйте)
            </label>

            <input
              ref={emailRef}
              type="email"
              placeholder="example@mail.com"
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`
                ${emailInputClass}
                ${emailError ? "border-red-500 focus:ring-red-200" : ""}
              `}
            />

            {emailError && (
              <p className="text-red-500 text-xs mt-2">
                {emailError}
              </p>
            )}

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
              className="flex-1 py-3 px-6 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2 disabled:opacity-60"
              onClick={handlePayment}
              disabled={!isFormValid || isProcessing}
            >

              {isProcessing ? (
                <>
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.25"/>
                    <path d="M22 12a10 10 0 0 1-10 10" stroke="white" strokeWidth="3"/>
                  </svg>
                  Обработка...
                </>
              ) : (
                `Оплатить ${productPrice.toLocaleString()} ₽`
              )}

            </button>

          </div>

          {isRedirecting && (
            <p className="text-center text-sm text-[--text-2] mt-4 animate-pulse">
              Подготовка платежа...
            </p>
          )}

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