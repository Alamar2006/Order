export const BENEFITS_STYLES = `
  @keyframes benefitsBreathe {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.2;
    }
  }
  
  .benefits__gradient {
    animation: benefitsBreathe 4s ease-in-out infinite;
  }
  
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

  .benefits__header,
  .benefits__card {
    animation: fadeInUp 0.6s ease-out forwards;
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

    .benefits__grid {
      gap: 1.5rem;
    }

    .benefits__card {
      padding: 2rem 1.5rem;
    }

    /* отключаем анимацию градиента на мобильных */
    .benefits__gradient {
      animation: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .benefits__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .benefits__card:last-child {
      grid-column: 1 / -1;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .benefits__gradient {
      animation: benefitsBreathe 4s ease-in-out infinite;
    }
  }
`;