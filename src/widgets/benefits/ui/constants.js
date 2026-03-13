
export const BENEFITS = [
    {
      id: 'unified-system',
      title: 'Одна система вместо десятка сервисов',
      description:
        'Все планеры связаны между собой: задачи, привычки и финансы отражаются на общей картине недели.',
      iconType: 'grid'
    },
    {
      id: 'simple-interface',
      title: 'Понятный интерфейс на базе Google Таблиц',
      description:
        'Никаких лишних функций. Только то, что помогает планировать и держать фокус на приоритетах.',
      iconType: 'document'
    },
    {
      id: 'customizable',
      title: 'Настраиваете под себя за 10–15 минут',
      description:
        'Добавляете свои категории, цели и проекты — система подстраивается под ваш формат работы.',
      iconType: 'settings'
    },
  ];
  
    export const HEADER_CONTENT = {
    title: 'Почему LifeTrack — это удобно',
    subtitle: 'LifeTrack собрал в себе лучшие практики по планированию задач, привычек и финансов в одном наборе понятных шаблонов.',
  };


  
  export const BACKGROUND_CONFIG = {
    gradients: [
      {
        id: 'primary',
        className: 'benefits__gradient benefits__gradient--primary',
        style: {
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '900px',
          background: 'var(--gradient-glow)',
          filter: 'blur(40px)',
        },
      },
      {
        id: 'secondary',
        className: 'benefits__gradient benefits__gradient--secondary',
        style: {
          bottom: '-20%',
          right: '10%',
          width: '1000px',
          height: '1000px',
          background: 'var(--gradient-glow)',
          filter: 'blur(40px)',
          animationDelay: '-10s',
        },
      },
    ],
    grain: {
      className: 'benefits__grain',
      style: {
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px)`,
        backgroundSize: '3px 3px',
      },
    },
  };
  
  



