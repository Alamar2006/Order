import { useRef } from "preact/hooks";

export const VerificationCodeInput = ({ value, onChange, onComplete }) => {
  const inputs = useRef([]);

  const updateCode = (index, digit) => {
    const newCode = [...value];
    newCode[index] = digit;

    onChange(newCode);

    if (newCode.every((v) => v !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/\D/g, "");

    if (!val) {
      updateCode(index, "");
      return;
    }

    updateCode(index, val);

    if (index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").replace(/\D/g, "");

    if (paste.length === 4) {
      const arr = paste.split("");
      onChange(arr);
      onComplete(paste);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div
      class="flex justify-center gap-3"
      onPaste={handlePaste}
    >
      {value.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          value={digit}
          maxLength="1"
          inputMode="numeric"
          autoComplete="one-time-code"
          onInput={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          class="
  w-14 h-14
  text-center
  text-2xl
  font-semibold
  rounded-xl
  border-2
  border-gray-200
  bg-gray-50          // Легкий серый фон
  text-gray-800
  shadow-sm
  shadow-gray-200
  
  transition-all
  duration-150
  caret-blue-500
  
  hover:border-gray-300
  hover:bg-white       // На hover становятся белыми
  hover:shadow-md
  
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-100
  focus:bg-white       // При фокусе тоже белые
  focus:scale-105
  focus:shadow-lg
  focus:shadow-blue-100
  
  outline-none
"
        />
      ))}
    </div>
  );
};