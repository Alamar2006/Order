

import { useEffect, useState } from "preact/hooks";

import { FooterModal } from "../FooterModal";

import { sendCode, verifyCode } from "./api/recoveryApi";

import { EmailStep } from "./EmailStep";
import { CodeStep } from "./CodeStep";
import { SuccessStep } from "./SuccessStep";

import { useCountdown } from "./hooks/useCountdown";

export const FooterRecoveryModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("email");

  const [email, setEmail] = useState(
    localStorage.getItem("recovery_email") || ""
  );

  const [code, setCode] = useState(["", "", "", ""]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const [downloadUrl, setDownloadUrl] = useState(null);

  const { time, start } = useCountdown(30);

  useEffect(() => {
    if (!isOpen) {
      setStep("email");
      setCode(["", "", "", ""]);
      setError(null);
    }
  }, [isOpen]);

  const handleSendCode = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await sendCode(email);

      localStorage.setItem("recovery_email", email);

      setStep("code");

      start();
    } catch {
      setError("Email не найден среди покупок :<");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (otp) => {
    if (!otp || otp.length !== 4) return;

    setLoading(true);
    setError(null);

    try {
      const data = await verifyCode(email, otp);

      setDownloadUrl(data.downloadUrl);

      setStep("success");
    } catch {
      setError("Неверный код");
      setCode(["", "", "", ""]);
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    if (time > 0) return;

    await sendCode(email);

    start();
  };

  return (
    <FooterModal
      isOpen={isOpen}
      onClose={onClose}
      title="Не получили товар?"
      maxWidth="max-w-md"
    >
      {step === "email" && (
        <EmailStep
          email={email}
          setEmail={setEmail}
          onSubmit={handleSendCode}
          loading={loading}
          error={error}
        />
      )}

      {step === "code" && (
        <CodeStep
          email={email}
          code={code}
          setCode={setCode}
          verify={handleVerify}
          resend={resend}
          timer={time}
          loading={loading}
          error={error}
        />
      )}

      {step === "success" && (
        <SuccessStep downloadUrl={downloadUrl} />
      )}
    </FooterModal>
  );
};