// Контакты
export const CONTACTS = {
    email: 'allblacktraffic@gmail.com',
    telegram: '@LifeTrackSeo',
    telegramLink: 'https://web.telegram.org/k/#@LifeTrackSeo',
  };
  
  // Информация о компании
  export const COMPANY_INFO = {
    name: 'LifeTrack',
    legalName: 'Марущенко Господин Павел',
    inn: 'ИНН 860402638808',
  };
  
  // Тексты для кнопок
  export const BUTTON_LABELS = {
    offer: 'Оферта',
    policy: 'Политика',
    recovery: 'Не получили товар',
  };
  
  // Тексты для модальных окон
  export const MODAL_TEXTS = {
    offer: {
      title: 'Публичная оферта',
      description: 'Настоящая публичная оферта регулирует отношения между самозанятым Рыбаковым Ильей Витальевичем и покупателем.',
      sections: [
        {
          title: '1. Общие положения',
          content: 'Оплачивая товар, вы соглашаетесь с условиями настоящей оферты. Товар считается переданным покупателю с момента предоставления доступа к шаблонам в Google Таблицах.'
        },
        {
          title: '2. Оплата и доставка',
          content: 'Оплата производится через платежные системы на сайте. Доступ к шаблонам предоставляется мгновенно после оплаты на указанную при оформлении электронную почту.'
        },
        {
          title: '3. Возврат',
          content: 'В соответствии с законодательством, цифровые товары надлежащего качества не подлежат возврату. При возникновении технических проблем напишите на allblacktraffic@gmail.com'
        },
        {
          title: '4. Реквизиты',
          content: 'Самозанятый Рыбаков Илья Витальевич\nИНН 860402638808\nEmail: allblacktraffic@gmail.com'
        }
      ]
    },
    policy: {
      title: 'Политика конфиденциальности',
      description: 'Мы уважаем вашу конфиденциальность и защищаем персональные данные.',
      sections: [
        {
          title: '1. Какие данные собираем',
          content: 'Имя, email адрес, платежную информацию (обрабатывается платежными системами, мы не храним данные карт).'
        },
        {
          title: '2. Как используем',
          content: 'Для отправки доступа к шаблонам, поддержки и информирования о новых продуктах (с возможностью отписаться).'
        },
        {
          title: '3. Защита данных',
          content: 'Используем современные методы шифрования и защиты. Данные не передаются третьим лицам, кроме случаев, предусмотренных законом.'
        },
        {
          title: '4. Контакты',
          content: 'По вопросам конфиденциальности: allblacktraffic@gmail.com'
        }
      ]
    },
    recovery: {
      title: 'Не получили товар?',
      description: 'Обычно письмо с доступом приходит в течение 1-3 минут после оплаты. Проверьте папку "Спам" или "Промоакции". Если письма нет — напишите нам, и мы поможем.'
    }
  };
  
  // Классы для кнопок
  export const BUTTON_CLASSES = "inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-[--text] bg-transparent border border-[--border] rounded-xl hover:text-[--accent] hover:border-[--accent] hover:bg-[rgba(var(--accent-rgb),0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[--accent] focus-visible:outline-offset-4";