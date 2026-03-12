export const PLANNER_STYLES = `
  @keyframes catalogBreathe {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes overlayFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes detailSlideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes lightboxFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes lightboxImageZoom {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .product-detail__main-image-wrapper:hover .product-detail__zoom-hint {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .product-catalog__gradient,
    .product-catalog__header,
    .product-catalog__card,
    .product-detail-overlay,
    .product-detail {
      animation: none !important;
    }
  }
`;