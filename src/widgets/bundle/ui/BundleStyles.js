export const BUNDLE_STYLES = `
  @keyframes productPackBreathe {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }
  
  @keyframes productPackFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .product-pack__gradient,
    .product-pack__header,
    .product-pack__gallery,
    .product-pack__info {
      animation: none !important;
    }
  }

  .product-pack__main-image-wrapper:hover .product-pack__zoom-hint {
    opacity: 1;
  }
`;