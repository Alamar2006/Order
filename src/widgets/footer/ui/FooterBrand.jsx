import { COMPANY_INFO } from './FooterConstants';

export const FooterBrand = () => (
  <div className="footer__brand-block flex flex-col items-center md:items-start gap-0">
    <p className="footer__brand text-sm font-semibold text-[--text] tracking-tight">
      {COMPANY_INFO.name}
    </p>
    <div className="footer__legal-block flex flex-col items-center md:items-start gap-1 mt-1">
      <p className="footer__legal text-sm text-[--text-2] leading-relaxed">
        {COMPANY_INFO.legalName}
      </p>
      <p className="footer__inn text-sm text-[--text-2] leading-relaxed">
        {COMPANY_INFO.inn}
      </p>
    </div>
  </div>
);