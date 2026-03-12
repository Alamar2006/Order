const BUTTON_CLASSES = "inline-flex items-center justify-center gap-2.5 px-[clamp(1.75rem,4vw,2.75rem)] py-[clamp(1rem,2vw,1.125rem)] text-[clamp(0.9375rem,1.5vw,1.125rem)] font-semibold tracking-[0.02em] border-none rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden min-h-[48px] no-underline bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.35),0_0_0_4px_rgba(59,130,246,0.1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-[0_4px_20px_rgba(59,130,246,0.3),0_0_0_2px_rgba(59,130,246,0.15)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4";

const SPAN_CLASSES = "relative z-10 leading-[1.2] text-white";
const ICON_CLASSES = "relative z-10 transition-transform duration-300 flex-shrink-0 text-white";

export function HeroButton({ href, children, icon: Icon, onClick }) {

  const handleClick = (e) => {

    if (href?.startsWith("#")) {
      e.preventDefault();

      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }

    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} className={BUTTON_CLASSES}>
      <span className={SPAN_CLASSES}>{children}</span>
      {Icon && <Icon className={ICON_CLASSES} />}
    </a>
  );
}


// Иконка
export function ArrowIcon({ className }) {
  return (
    <svg 
      className={className}
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}