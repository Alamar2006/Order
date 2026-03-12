export const animations = `
  @keyframes heroImageFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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
`;

export const mediaQueries = `
  @media (max-width: 767px) {
    .hero__visual { min-height: 300px; }
    .hero__preview-wrapper { max-width: 100%; }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .hero__preview-wrapper { max-width: 500px; }
  }
`;

export const interactiveStyles = `
  .hero__cta-icon {
    transition: transform 0.3s ease;
  }
  a:hover .hero__cta-icon {
    transform: translateX(3px);
  }
  .hero__preview-wrapper:hover .hero__preview-image {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
  @media (prefers-reduced-motion: reduce) {
    [class*="hero__"] {
      animation: none !important;
      transition: none !important;
    }
    .hero__visual,
    .hero__trust-bar,
    .hero__preview-image {
      animation: none !important;
    }
  }
`;