import { VerificationCodeInput } from "./VerificationCodeInput";

export const CodeStep = ({
  email,
  code,
  setCode,
  verify,
  resend,
  timer,
  loading,
  error,
}) => {
  return (
    <div class="flex flex-col gap-6">
      <p class="text-sm text-center text-[--text-2]">
        Код отправлен на
        <br />
        <span class="font-medium text-[--text]">{email}</span>
      </p>

      <VerificationCodeInput
        value={code}
        onChange={setCode}
        onComplete={verify}
      />

      {error && (
        <div class="text-sm text-red-500 text-center">
          {error}
        </div>
      )}

      <button
        onClick={() => verify(code.join(""))}
        disabled={loading}
        class="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg disabled:opacity-60"
      >
        {loading ? "Проверка..." : "Подтвердить"}
      </button>

      <div class="text-center text-xs text-[--text-2]">
        {timer > 0 ? (
          <span>Отправить код снова через {timer}s</span>
        ) : (
          <button
            onClick={resend}
            class="text-[--accent] hover:underline"
          >
            Отправить код снова
          </button>
        )}
      </div>
    </div>
  );
};