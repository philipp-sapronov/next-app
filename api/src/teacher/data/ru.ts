import { Teacher } from '../teacher.interface';

export const teachers: Teacher[] = [
  {
    avatar: { webp: './assets/photos/teacher1.webp', jpg: './assets/photos/teacher1.jpg' },
    name: 'Мельник Светлана',
    socials: [],
    options: [
      {
        text: ['Киевский национальный лингвистический университет'],
        title: 'Образование',
      },

      { title: 'Опыт работы', text: 'Более 5 лет' },
      {
        additional: true,
        title: 'Тренинги',
        text: [
          'Dragonfly',
          'Create & Inspire: The Child-centred Early Years Curriculum',
          'Developing Mindsets, Mindfulness and the Thinking Mind',
        ],
      },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          'Статья в журнале «Іноземні мови»',
          'Участие в международной научной конференции с докладом на тему «The theory of identity in Modern Linguistics»',
        ],
      },
      {
        title: 'Увлечения',
        text: 'Когнитивная лингвистика, стилистика, дизайн',
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher2.webp',
      jpg: './assets/photos/teacher2.jpg',
    },
    name: 'Голинко Алина',
    socials: [],
    options: [
      { text: ['Киевский национальный лингвистический университет'], title: 'Образование' },

      { title: 'Опыт работы', text: '3 года' },
      {
        additional: true,
        title: 'Тренинги',
        text: [
          'Microteaching: A New Approach to Teacher Training and Research',
          'English for Specific Purposes: A New Perspective',
          'CLIL: Dual-Focused Education Strategies',
          'Dogme ELT: Teaching Unplugged',
        ],
      },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          '6 научных публикаций на темы мультимодального и медиа дискурса, а также на тему проявления социолингвистической и социокультурной компетентности',
          'Участие в международных конференциях с докладами “Проблематика преподавания английского языка как второго иностранного для студентов-востоковедов”, “Психологический анализ механизма влияния слоганов рекламы на массовое сознание как способ манипулирования массовым поведением”, “Использование средств влияния на сознание читателя в заглавиях газет англоязычных периодических изданий”, “Характеристика реализации языковой личности в твиттературе”, “English, German, and Chinese slang vocabulary in “Twitter” social network ”',
        ],
      },
      { title: 'Увлечения', text: 'Лингводидактика, андрагогика, китайский язык' },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher3.webp',
      jpg: './assets/photos/teacher3.jpg',
    },
    name: 'Богдан Кость',
    socials: [],
    options: [
      {
        text: [
          'Ужгородский национальный университет',
          'Канадский международный карьерный колледж. Торонто',
        ],
        title: 'Образование',
      },
      { title: 'Опыт работы', text: 'Более 5 лет' },
      { additional: true, title: 'Тренинги', text: ['MyTEFL 120 часовой курс для преподавателей'] },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          `Logoe 29.11.19 BELGIQUE
The Concept «Idiostyle» and its structure in contemporary linguistic studies`,

          `Logoe 26.06.20 ITALIA
Axiological Modality as a text category`,
        ],
      },
      {
        title: 'Увлечения',
        text: `Филология, психология, маркетинг, музыка, путешествия.`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher4.webp',
      jpg: './assets/photos/teacher4.jpg',
    },
    name: 'Марина Гатальская',
    socials: [],
    options: [
      { text: ['Киевский национальный лингвистический университет'], title: 'Образование' },
      { title: 'Опыт работы', text: 'Более 6 лет' },
      {
        additional: true,
        title: 'Тренинги',
        text: [
          'Эффективные методы достижения лучших результатов при изучении английского языка взрослыми слушателями',
          'Интерактивные онлайн компоненты к учебникам Pearson - изучение английского в любых условиях',
          'Расширяем педагогический репертуар: эффективная технология изучения языка с помощью лексического подхода',
          'Новый взгляд на любимые игры для развития коммуникативных навычек на уроках английского языка',
        ],
      },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          'Linguistic manipulation and ways of its rendering in translation go newspaper discourse texts',
          'Language manipulation means in English love discourse and its translation into Ukrainian',
        ],
      },
      {
        title: 'Интересы',
        text: `Подорожі, психологія, вивчення іноземних мов`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher5.webp',
      jpg: './assets/photos/teacher5.jpg',
    },
    name: 'Костюченко Алина',
    socials: [],
    options: [
      { text: ['Киевский национальный университет'], title: 'Образование' },
      { title: 'Опыт работы', text: 'Более 5 лет' },
      {
        additional: true,
        title: 'Тренинги',
        text: [
          'British Council - недельный курс развития учителя «Teaching for Success»',
          'Семинары и вебинары от международного образовательного методического центра Dinternal Education в партнёрстве с Pearson',
          'British Council: Teaching online - alternative platform',
        ],
      },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          'Блог по изучению английского языка дистанционно «Socially distant. Intellectually engaged',
        ],
      },
      {
        title: 'Интересы',
        text: `Плавание, чтение, фотосъемка, путешествия, кулинария, моделирование из полимерной глины`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher6.webp',
      jpg: './assets/photos/teacher6.jpg',
    },
    name: 'Погинайко Юлия',
    socials: [],
    options: [
      { text: ['Хмельницкий национальный университет'], title: 'Образование' },
      { title: 'Опыт работы', text: 'Более 3 лет' },
      {
        additional: true,
        title: 'Научные работы',
        text: [
          'Участие в конференции «Межкультурная коммуникация» с докладом на тему «Особенности перевода американского сленга»',
          'Статья на тему «Понятие экфразиса как способа интерсемиотического перевода в ракурсе взаимодествия литературы и кино»',
        ],
      },
      {
        title: 'Интересы',
        text: `Рисование, путешествия, литература`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher7.webp',
      jpg: './assets/photos/teacher7.jpg',
    },
    name: 'Валерия Пикула',
    socials: [],
    options: [
      { text: ['Мариупольский государственный гуманитарный университет'], title: 'Образование' },
      { title: 'Опыт работы', text: '8 лет' },
      {
        additional: true,
        title: 'Научные работы',
        text: ['Перевод видеоуроков на YouTube канале Look bad Play'],
      },
      {
        title: 'Интересы',
        text: `Литература, саморазвитие в сфере английского языка`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher8.webp',
      jpg: './assets/photos/teacher8.jpg',
    },
    name: 'Абрамова Лариса',
    socials: [],
    options: [
      { text: ['Житомирский педагогический университ'], title: 'Образование' },
      { title: 'Опыт работы', text: '17 лет' },
      {
        additional: true,
        title: 'Тренинги',
        text: ['Стажировка в Великобритании - Шеффилд', 'Стажировка в Германии - Штутгарт'],
      },
      {
        title: 'Интересы',
        text: `Путешествия, рок-музыка, пилатес, декупаж`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher9.webp',
      jpg: './assets/photos/teacher9.jpg',
    },
    name: 'Сергей Смирнов',
    socials: [],
    options: [
      {
        title: 'Образование',
        text: [
          'Московский военный институт иностранных языков',
          'Львовский национальный университет имени Ивана Франка',
        ],
      },
      { title: 'Опыт работы', text: '37 лет' },
      {
        additional: true,
        title: 'Тренинги',
        text: ['Различные тренинги по методике изучения иностранных языков'],
      },
      {
        title: 'Интересы',
        text: `Литература, плавание, шахматы`,
      },
    ],
  },

  {
    avatar: {
      webp: './assets/photos/teacher10.webp',
      jpg: './assets/photos/teacher10.jpg',
    },
    name: 'Галинич Кристина',
    socials: [],
    options: [
      {
        text: [`Харьковской национальный педагогический университет`],
        title: 'Образование',
      },
      { title: 'Опыт работы', text: 'Более 5 лет' },
      {
        additional: true,
        title: 'Научные работы',
        text: ['Peculiarities of speech in play "Dangerous corner" by J. B. Priestley'],
      },
      {
        title: 'Интересы',
        text: `Психология, спорт, мода`,
      },
    ],
  },
];
