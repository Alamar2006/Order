export const PLANNERS = [
    {
      id: 1,
      badge: 'Скидка',
      title: 'Недельный планер',
      description:
        'Помогает видеть всю неделю целиком, планировать задачи, цели и привычки и держать баланс между работой и личной жизнью.',
      price: '1 090',
      oldPrice: '2 090',
      image: '/assets/planners/week/week1.avif',
      gallery: [
        '/assets/planners/week/week1.avif',
        '/assets/planners/week/week2.png',
        '/assets/planners/week/week3.png',
      ],
      fullDescription: 'Недельный планер — это ваш личный помощник для организации времени. С ним вы сможете:\n\n• Планировать задачи на каждый день\n• Отслеживать привычки\n• Балансировать между работой и отдыхом\n• Видеть прогресс за неделю\n\nВсе данные автоматически синхронизируются и сохраняются в вашем Google аккаунте.',
      features: [
        'Готовый шаблон в Google Таблицах',
        'Автоматические расчеты',
        'Визуальные графики прогресса',
        'Доступ с любого устройства'
      ]
    },
    {
      id: 2,
      badge: 'Скидка',
      title: 'Финансовый трекер',
      description:
        'Дает ясность в деньгах: отслеживаете доходы и расходы, понимаете баланс и управляете финансами без сложных формул.',
      price: '1 290',
      oldPrice: '2 790',
      image: '/assets/planners/finance/finance1.avif',
      gallery: [
        '/assets/planners/finance/finance1.avif',
        '/assets/planners/finance/finance2.png',
        '/assets/planners/finance/finance3.png',
      ],
      fullDescription: 'Финансовый трекер помогает держать деньги под контролем. Вы будете точно знать, куда уходят средства и как оптимизировать бюджет.\n\n• Учет доходов и расходов\n• Категории трат\n• Ежемесячные отчеты\n• Планирование бюджета\n• Анализ финансовых привычек',
      features: [
        'Готовый шаблон в Google Таблицах',
        'Автоматические расчеты',
        'Визуальные графики прогресса',
        'Доступ с любого устройства'
      ]
    },
    {
      id: 3,
      badge: 'Скидка',
      title: 'Трекер задач',
      description:
        'Наводит порядок в делах и помогает сосредоточиться на приоритетах. Меньше хаоса, больше выполненных задач и ощущения контроля.',
      price: '990',
      oldPrice: '1 990',
      image: '/assets/planners/tasks/task1.avif',
      gallery: [
        '/assets/planners/tasks/task1.avif',
        '/assets/planners/tasks/task2.png',
        '/assets/planners/tasks/task3.png',
        '/assets/planners/tasks/task4.png',
        '/assets/planners/tasks/task5.png',
        '/assets/planners/tasks/task6.png',
      ],
      fullDescription: 'Трекер задач превращает хаос в структуру. Вы всегда будете знать, что нужно сделать сегодня, а что можно отложить.\n\n• Приоритеты задач\n• Дедлайны и напоминания\n• Статусы выполнения\n• Проекты и подзадачи\n• Статистика продуктивности',
      features: [
        'Готовый шаблон в Google Таблицах',
        'Автоматические расчеты',
        'Визуальные графики прогресса',
        'Доступ с любого устройства'
      ]
    },
    {
      id: 4,
      badge: 'Скидка',
      title: 'Трекер привычек',
      description:
        'Помогает выстроить полезные привычки без давления и перегруза. Ты наглядно видишь свой прогресс и понимаешь, что действительно работает.',
      price: '1 190',
      oldPrice: '2390',
      image: '/assets/planners/habits/habit1.avif',
      gallery: [
        '/assets/planners/habits/habit1.avif',
        '/assets/planners/habits/habit2.png',
        '/assets/planners/habits/habit3.png',
        '/assets/planners/habits/habit4.png',
        '/assets/planners/habits/habit5.png',
      ],
      fullDescription: 'Этот шаблон помогает выстроить полезные привычки и сделать их частью повседневной жизни без давления и перегруза. Ты отмечаешь выполнение каждый день и видишь наглядный прогресс, что помогает сохранять мотивацию и не бросать начатое. Трекер подходит как для работы над здоровьем, обучением, дисциплиной, так и для личных целей. Со временем привычки перестают требовать усилий и становятся стабильной частью твоего дня.',
      features: [
        'Готовый шаблон в Google Таблицах',
        'Автоматические расчеты',
        'Визуальные графики прогресса',
        'Доступ с любого устройства'
      ]
    },
  ];
  
  export const BACKGROUND_CONFIG = {
    gradients: [
      {
        key: 'primary',
        className: 'product-catalog__gradient product-catalog__gradient--primary',
        style: {
          top: '20%',
          left: '10%',
          width: '1400px',
          height: '1400px',
          background: 'var(--gradient-glow)',
          filter: 'blur(120px)',
        },
      },
      {
        key: 'secondary',
        className: 'product-catalog__gradient product-catalog__gradient--secondary',
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
      className: 'product-catalog__grain',
      style: {
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0.06) 2px)`,
        backgroundSize: '3px 3px',
      },
    },
    divider: {
      className: 'product-catalog__divider',
      style: {
        background: 'linear-gradient(90deg, transparent 0%, rgba(var(--accent-rgb), 0.15) 20%, rgba(var(--accent-rgb), 0.25) 50%, rgba(var(--accent-rgb), 0.15) 80%, transparent 100%)',
      },
    },
  };