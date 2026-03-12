import { INCLUDED_ITEMS } from './BundleConstants';

const CHECK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--accent] flex-shrink-0">
    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ✅ Просто экспортируем функцию
export const BundleIncludedList = () => (
  <div className="product-pack__included bg-[--surface] backdrop-blur border border-[--border] rounded-2xl p-6 w-full max-w-full shadow-sm">
    <h3 className="product-pack__included-title text-lg font-semibold mb-5 p-0 text-[--text] tracking-[-0.01em] leading-tight">
      В набор входит:
    </h3>
    <ul className="product-pack__included-list list-none flex flex-col gap-3 m-0 p-0 w-full">
      {INCLUDED_ITEMS.map((item) => (
        <li key={item} className="product-pack__included-item flex items-center gap-3 text-base text-[--text] leading-relaxed m-0 p-0 font-normal">
          {CHECK_ICON}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);