export const PaymentFailed = () => {

    return (
  
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
  
        <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl">
  
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
  
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="3">
              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
  
          </div>
  
          <h1 className="text-2xl font-semibold mb-3">
            Платёж отменён
          </h1>
  
          <p className="text-gray-500 mb-8">
            Оплата не была завершена.
          </p>
  
          <button
            onClick={() => window.location.href = "/"}
            className="w-full py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
          >
            Попробовать снова
          </button>
  
        </div>
  
      </div>
  
    );
  
  };