import { FooterOfferModal } from './FooterOfferModal';
import { FooterPolicyModal } from './FooterPolicyModal';
import { FooterRecoveryModal } from './FooterRecoveryModal/FooterRecoveryModal';

export const FooterModalContainer = ({ isOfferOpen, isPolicyOpen, isRecoveryOpen, onClose }) => (
  <>
    <FooterOfferModal isOpen={isOfferOpen} onClose={onClose} />
    <FooterPolicyModal isOpen={isPolicyOpen} onClose={onClose} />
    <FooterRecoveryModal isOpen={isRecoveryOpen} onClose={onClose} />
  </>
);