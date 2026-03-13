export const PLANNER_STYLES = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0,20px,0);
    }
    to {
      opacity: 1;
      transform: translate3d(0,0,0);
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
      transform: translate3d(0,30px,0);
    }
    to {
      opacity: 1;
      transform: translate3d(0,0,0);
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