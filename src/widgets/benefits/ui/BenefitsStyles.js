// Единый объект со стилями
export const BENEFITS_STYLES = `
  @keyframes benefitsBreathe {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
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

  @media (prefers-reduced-motion: reduce) {
    .benefits__gradient,
    .benefits__header,
    .benefits__card {
      animation: none !important;
    }
  }

  @media (max-width: 767px) {
    .benefits {
      padding: clamp(3.5rem, 5vw, 4.5rem) 0;
    }
    .benefits__container {
      padding: 0 1rem;
    }
    .benefits__header {
      margin-bottom: clamp(2.5rem, 4vw, 3rem);
    }
    .benefits__title {
      margin-bottom: 0.875rem;
    }
    .benefits__subtitle {
      font-size: 0.9375rem;
    }
    .benefits__grid {
      gap: 1.5rem;
    }
    .benefits__card {
      padding: 2rem 1.5rem;
    }
    .benefits__icon-wrapper {
      width: 56px;
      height: 56px;
      margin-bottom: 1.25rem;
    }
    .benefits__icon {
      width: 28px;
      height: 28px;
    }
    .benefits__card-title {
      font-size: 1.25rem;
      margin-bottom: 0.625rem;
    }
    .benefits__card-description {
      font-size: 0.9375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .benefits {
      padding: clamp(4.5rem, 5.5vw, 5.5rem) 0;
    }
    .benefits__container {
      padding: 0 2rem;
    }
    .benefits__header {
      margin-bottom: clamp(3rem, 4vw, 3.5rem);
    }
    .benefits__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .benefits__card:last-child {
      grid-column: 1 / -1;
      max-width: 500px;
      margin: 0 auto;
    }
    .benefits__card {
      padding: 3rem 2rem;
    }
  }

  @media (min-width: 1440px) {
    .benefits {
      padding: clamp(6rem, 6.5vw, 6.5rem) 0;
    }
    .benefits__grid {
      gap: 2rem;
    }
    .benefits__card {
      padding: 3.5rem 3rem;
    }
    .benefits__card-title {
      font-size: 1.5rem;
    }
    .benefits__card-description {
      font-size: 1.0625rem;
    }
  }

  @media (max-width: 360px) {
    .benefits {
      padding: clamp(3rem, 4vw, 3.5rem) 0;
    }
    .benefits__container {
      padding: 0 0.875rem;
    }
    .benefits__header {
      margin-bottom: 2.5rem;
    }
    .benefits__card {
      padding: 1.75rem 1.25rem;
    }
    .benefits__icon-wrapper {
      width: 52px;
      height: 52px;
    }
    .benefits__icon {
      width: 26px;
      height: 26px;
    }
  }
`;