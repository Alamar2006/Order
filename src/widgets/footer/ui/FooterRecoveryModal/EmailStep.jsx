export const EmailStep = ({
    email,
    setEmail,
    onSubmit,
    loading,
    error,
  }) => {
    return (
      <form onSubmit={onSubmit} class="flex flex-col gap-5">
        <p class="text-sm text-[--text-2]">
          Введите email, который использовали при покупке. Мы попробуем найти вашу покупку!
        </p>
  
        <input
          type="email"
          required
          autoFocus
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          class="w-full px-4 py-3 bg-[--surface-soft] border border-[--border] rounded-xl focus:border-[--accent] focus:ring-2 focus:ring-[--accent]/20 outline-none"
        />
  
        {error && (
          <div class="text-sm text-red-500">{error}</div>
        )}
  
        <button
          disabled={loading}
          class="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg disabled:opacity-60"
        >
          {loading ? "Отправка..." : "Получить код"}
        </button>
      </form>
    );
  };