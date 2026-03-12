import { useState, useCallback } from 'preact/hooks';
import { useBodyScrollLock } from '../../../../shared/lib/useBodyScrollLock';

export const MODAL_TYPES = {
  OFFER: 'offer',
  POLICY: 'policy',
  RECOVERY: 'recovery',
  NONE: null
};

export const useFooterModal = () => {
  const [activeModal, setActiveModal] = useState(MODAL_TYPES.NONE);

  const openModal = useCallback((modal) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(MODAL_TYPES.NONE);
  }, []);

  const isAnyModalOpen = activeModal !== MODAL_TYPES.NONE;
  useBodyScrollLock(isAnyModalOpen);

  return {
    activeModal,
    openModal,
    closeModal,
    isOfferOpen: activeModal === MODAL_TYPES.OFFER,
    isPolicyOpen: activeModal === MODAL_TYPES.POLICY,
    isRecoveryOpen: activeModal === MODAL_TYPES.RECOVERY,
  };
};