export const FOOTER_STYLES = `
  @keyframes recoveryOverlayFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes recoveryModalSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .recovery-modal-overlay,
    .recovery-modal {
      animation: none !important;
    }
  }
`;