import { CONTACTS } from './FooterConstants';

const TELEGRAM_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.5 4.5L2.5 10.5L9 13.5M21.5 4.5L15.5 20L9 13.5M21.5 4.5L9 13.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FooterContacts = () => (
  <div className="footer__contact-block flex flex-col items-center md:items-end gap-3">
    <div className="footer__contacts flex flex-col items-center md:items-end gap-1">
      <a 
        href={`mailto:${CONTACTS.email}`} 
        className="footer__email text-sm font-medium text-[--text] hover:text-[--accent] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
      >
        {CONTACTS.email}
      </a>
      <a 
        href={CONTACTS.telegramLink} 
        className="footer__telegram inline-flex items-center gap-1.5 text-sm font-medium text-[--text] hover:text-[#08c] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4"
      >
        {TELEGRAM_ICON}
        {CONTACTS.telegram}
      </a>
    </div>
  </div>
);