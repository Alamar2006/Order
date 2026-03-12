import { Fragment } from 'react';

const TRUST_DATA = [
  { icon: '★', label: 'отзывов', value: '4.9', suffix: '(1 247 отзывов)' },
  { icon: '✓', label: 'купили', value: '2 340+' },
  { icon: '⚡', label: 'доставка', value: 'Мгновенная', suffix: 'доставка' }
];

const TrustItem = ({ icon, label, value, suffix }) => (
  <div className="flex items-center gap-2 text-[clamp(0.875rem,1.5vw,1rem)] text-[--text] font-medium">
    <span className="flex-shrink-0 text-[--accent]">{icon}</span>
    <span className="font-bold text-[--text] text-[clamp(1rem,1.8vw,1.125rem)]">{value}</span>
    <span className="text-[--text-2] font-normal">{suffix || label}</span>
  </div>
);

export function HeroTrustBar() {
  return (
    <div className="relative z-10 w-full pt-[clamp(4rem,8vw,8rem)] pb-[clamp(1.5rem,3vw,2rem)] mt-auto animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
      <div className="max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)] flex items-center justify-center gap-[clamp(1rem,3vw,2rem)] flex-wrap">
        {TRUST_DATA.map((item, index) => (
          <Fragment key={index}>
            <TrustItem {...item} />
            {index < TRUST_DATA.length - 1 && (
              <div className="w-px h-6 bg-[--border] flex-shrink-0 hidden sm:block" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}