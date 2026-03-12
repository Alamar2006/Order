import { HeroButton, ArrowIcon } from './HeroButton';

const HEADING_TEXT = "Планеры для задач, привычек и финансов — в одной системе";
const DESCRIPTION_TEXT = "Готовые шаблоны в Google Таблицах. Копируете в свой аккаунт и начинаете планировать уже сегодня. Мгновенный доступ сразу после оплаты.";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)] text-left">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[--text] m-0 p-0 max-w-full animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
        {HEADING_TEXT}
      </h1>
      
      <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-[1.6] text-[--text-2] m-0 p-0 max-w-[90%] font-normal animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
        {DESCRIPTION_TEXT}
      </p>

      <div className="flex flex-row items-center gap-4 flex-wrap animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
        <HeroButton href="#planners" icon={ArrowIcon}>
          Получить шаблоны
        </HeroButton>
      </div>
    </div>
  );
}