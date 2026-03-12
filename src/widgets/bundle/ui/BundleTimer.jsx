import { memo } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';

const STORAGE_KEY = 'bundle_timer_end';
const DURATION = 7 * 60 * 60 * 1000; // 7 часов в ms

// формат времени
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

const TimerDisplay = memo(({ time }) => (
  <span className="countdown__time text-white px-4 py-1.5 rounded-[10px] bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
    {time}
  </span>
));

export const BundleTimer = memo(() => {

  const [timeLeft, setTimeLeft] = useState(DURATION);

  useEffect(() => {

    function getEndTime() {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) return Number(stored);

      const newEnd = Date.now() + DURATION;
      localStorage.setItem(STORAGE_KEY, newEnd);

      return newEnd;
    }

    let endTime = getEndTime();

    const update = () => {

      const now = Date.now();
      let diff = endTime - now;

      if (diff <= 0) {

        // сброс таймера
        endTime = Date.now() + DURATION;
        localStorage.setItem(STORAGE_KEY, endTime);

        diff = DURATION;
      }

      setTimeLeft(diff);
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="product-pack__header-timer mt-3 mb-5">
      <div className="product-pack__header-countdown countdown--strip inline-flex items-center justify-center gap-2 whitespace-nowrap">
        <TimerDisplay time={formatTime(timeLeft)} />
      </div>
    </div>
  );

});