import { useEffect, useState } from "preact/hooks";

export const useCountdown = (initial = 30) => {
  const [time, setTime] = useState(0);

  const start = () => setTime(initial);

  useEffect(() => {
    if (time <= 0) return;

    const id = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [time]);

  return { time, start };
};