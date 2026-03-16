export const INCLUDED_ITEMS = [
    'Недельный планер',
    'Трекер привычек',
    'Финансовый трекер',
    'Трекер задач',
  ];
  
  export const GALLERY_IMAGES = [
    { id: 1, src: '/assets/hero_picture.avif', alt: 'Недельный планер' },
    { id: 2, src: '/assets/planners/planners_no_text/weekly-2.png', alt: 'Недельный трекер' },
    { id: 3, src: '/assets/planners/planners_no_text/weekly-3.png', alt: 'Недельный трекер' },
    { id: 4, src: '/assets/planners/planners_no_text/habit-tracker-2.png', alt: 'Трекер привычек' },
    { id: 5, src: '/assets/planners/planners_no_text/habit-tracker-3.png', alt: 'Трекер привычек' },
    { id: 6, src: '/assets/planners/planners_no_text/habit-tracker-4.png', alt: 'Трекер привычек' },
    { id: 7, src: '/assets/planners/planners_no_text/habit-tracker-5.png', alt: 'Трекер привычек' },
    { id: 8, src: '/assets/planners/planners_no_text/task-tracker-2.png', alt: 'Трекер задач' },
    { id: 9, src: '/assets/planners/planners_no_text/task-tracker-3.png', alt: 'Трекер задач' },
    { id: 10, src: '/assets/planners/planners_no_text/habit-tracker-4.png', alt: 'Трекер задач' },
    { id: 11, src: '/assets/planners/planners_no_text/habit-tracker-5.png', alt: 'Трекер задач' },
    { id: 12, src: '/assets/planners/planners_no_text/finance-tracker-2.png', alt: 'Финансовый трекер' },
    { id: 13, src: '/assets/planners/planners_no_text/finance-tracker-3.png', alt: 'Финансовый трекер' },
  ];
  
  export const PRICING = {
    currentPrice: '1 490 ₽',
    oldPrice: '9 260 ₽',
    savings: '7 363 ₽',
  };


  
  
  export const BACKGROUND_CONFIG = {
    gradients: [
      {
        key: 'primary',
        className: 'product-pack__gradient product-pack__gradient--primary',
        style: {
          top: '20%',
          left: '10%',
          width: '1400px',
          height: '1400px',
          background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, rgba(var(--accent-rgb), 0.04) 30%, transparent 70%)',
          filter: 'blur(120px)',
        },
      },
      {
        key: 'secondary',
        className: 'product-pack__gradient product-pack__gradient--secondary',
        style: {
          bottom: '10%',
          right: '15%',
          width: '1100px',
          height: '1100px',
          background: 'var(--gradient-glow)',
          filter: 'blur(120px)',
          animationDelay: '-10s',
        },
      },
    ],
    grain: {
      className: 'product-pack__grain',
      style: {
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px)`,
        backgroundSize: '3px 3px',
      },
    },
    divider: {
      className: 'product-pack__divider',
      style: {
        background: 'linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.15) 20%, rgba(var(--accent-rgb), 0.25) 50%, rgba(var(--accent-rgb), 0.15) 80%, transparent 100%)',
      },
    },
  };