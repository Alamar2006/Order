import { useEffect } from 'preact/hooks';

export const PaymentSuccess = () => {

  useEffect(() => {
    const inProgress = localStorage.getItem("payment_in_progress");

    if (!inProgress) {
      window.location.href = "/payment-failed";
      return;
    }

    localStorage.removeItem("payment_in_progress");

  }, []);

    return (
  
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
  
        <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl">
  
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
  
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="3">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
  
          </div>
  
          <h1 className="text-2xl font-semibold mb-3">
            Оплата прошла успешно
          </h1>
  
          <p className="text-gray-500 mb-6">
            Спасибо за покупку.
          </p>
  
          <p className="text-gray-500 mb-8">
            Ссылка для скачивания отправлена на ваш email.
            Письмо может прийти в течение 1-2 минут.
          </p>
  
          <button
            onClick={() => window.location.href = "/"}
            className="w-full py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
          >
            Вернуться на сайт
          </button>
  
        </div>
  
      </div>
  
    );
  
  };