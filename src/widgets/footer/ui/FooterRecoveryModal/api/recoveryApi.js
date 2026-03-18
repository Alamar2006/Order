export const sendCode = async (email) => {
    const res = await fetch("https://lifetrack-tau.vercel.app/auth/send-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  
    if (!res.ok) {
      throw new Error("EMAIL_NOT_FOUND");
    }
  
    return res.json();
  };
  
  export const verifyCode = async (email, code) => {
    const res = await fetch("https://lifetrack-tau.vercel.app/auth/verify-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });
  
    if (!res.ok) {
      throw new Error("INVALID_CODE");
    }
  
    return res.json();
  };