import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ka' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ka';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  ka: {
    // Navigation
    'nav.home': 'მთავარი',
    'nav.about': 'ჩვენს შესახებ',
    'nav.education': 'განათლება',
    'nav.business': 'ბიზნეს სერვისები',
    'nav.startups': 'სტარტაპები',
    'nav.careers': 'კარიერა',
    'nav.contact': 'კონტაქტი',

    // Home Hero
    'home.hero.title': 'ხელოვნური ინტელექტის მომავალი იწყება აქ',
    'home.hero.subtitle': 'სივრცე, სადაც განათლება, ინოვაცია და ბიზნესის ტრანსფორმაცია ერთიანდება',
    'home.hero.cta1': 'დაიწყე სწავლა',
    'home.hero.cta2': 'ბიზნეს გადაწყვეტები',

    // Home Stats
    'home.stats.students': 'სტუდენტი',
    'home.stats.courses': 'AI კურსი',
    'home.stats.coursera': 'Official Coursera Partner',
    'home.stats.mastercard': 'Mastercard Support',

    // Home Services
    'home.services.education.title': 'განათლება',
    'home.services.education.desc': 'უფასო AI კურსები Coursera და Mastercard-ის მხარდაჭერით',
    'home.services.business.title': 'ბიზნეს სერვისები',
    'home.services.business.desc': 'AI გადაწყვეტები თქვენი ბიზნესის ტრანსფორმაციისთვის',
    'home.services.startups.title': 'სტარტაპ ინკუბაცია',
    'home.services.startups.desc': 'მხარდაჭერა და დაფინანსება AI სტარტაპებისთვის',
    'home.services.learnmore': 'გაიგე მეტი',

    // Partners
    'home.partners.title': 'ჩვენი პარტნიორები',

    // CTA
    'home.cta.title': 'მზად ხარ AI მოგზაურობისთვის?',
    'home.cta.button1': 'დაგვიკავშირდი',
    'home.cta.button2': 'ნახე კურსები',

    // About
    'about.hero.title': 'ვინ ვართ ჩვენ',
    'about.hero.subtitle': 'პლატფორმა ხელოვნური ინტელექტის განვითარებისა და მომავლის პროფესიონალების მომზადებისთვის',
    'about.story.title': 'ჩვენი ისტორია',
    'about.story.content': 'Nebula AI Hub არის ქუთაისის მულტიფუნქციური ცენტრის ბაზაზე შექმნილი პლატფორმა ხელოვნური ინტელექტის განვითარებისა და მომავლის პროფესიონალების მომზადების მიზნით. ჩვენი დაარსების იდეა გაჩნდა მაშინ, როდესაც გააცნობიერდა, რომ საქართველოში ხელოვნური ინტელექტის მიმართულებით, ქართულ ენაზე მორგებული, ხელმისაწვდომი რესურსები თითქმის არ არსებობდა.',
    'about.mission.quote': 'ხელოვნური ინტელექტის სფეროს განვითარება რეგიონში, განათლებიდან ინოვაციამდე და ეკონომიკურ ზრდამდე',
    
    'about.values.title': 'ჩვენი ღირებულებები',
    'about.values.access': 'ხელმისაწვდომობა ცოდნაზე',
    'about.values.equality': 'თანაბარი შესაძლებლობები',
    'about.values.innovation': 'ლოკალური ინოვაციის გლობალური პოტენციალი',
    'about.values.ethics': 'AI ტექნოლოგიების ეთიკური განვითარება',

    'about.team.title': 'ჩვენი გუნდი',
    'about.partnerships.title': 'პარტნიორობები',

    // Education
    'education.hero.title': 'დაიწყე AI კარიერა დღესვე - სრულიად უფასოდ',
    'education.hero.subtitle': 'საერთაშორისო კურსები ქართულენოვანი მხარდაჭერით',
    'education.hero.cta': 'დარეგისტრირდი ახლავე',

    'education.coursera.title': 'Coursera საერთაშორისო პროგრამა',
    'education.coursera.feature1': '250+ AI კურსი 250 მიმართულებით',
    'education.coursera.feature2': 'სრულიად უფასო წვდომა',
    'education.coursera.feature3': 'ქართულენოვანი მხარდაჭერა',
    'education.coursera.feature4': 'საერთაშორისო სერტიფიკატები',

    'education.mastercard.title': 'Mastercard AI პრაქტიკული კურსი',
    'education.btu.title': 'BTU სტუდენტური პროგრამა',

    'education.form.title': 'დარეგისტრირდი პროგრამაზე',
    'education.benefits.title': 'რატომ Nebula?',

    // Business
    'business.hero.title': 'AI გადაწყვეტები თქვენი ბიზნესისთვის',
    'business.hero.stats': 'ხარჯების შემცირება | პროდუქტიულობის ზრდა',
    'business.hero.cta': 'მიიღე უფასო კონსულტაცია',

    // Startups
    'startups.hero.title': 'შენი AI იდეის რეალიზაცია',
    'startups.hero.subtitle': 'ტექნიკური მხარდაჭერა, დაფინანსება და მენტორობა',
    'startups.hero.cta': 'წარადგინე შენი იდეა',

    // Careers
    'careers.hero.title': 'შემოუერთდი Nebula გუნდს',
    'careers.hero.subtitle': 'მუშაობა მომავლის ტექნოლოგიებზე',
    'careers.positions.title': 'ღია ვაკანსიები',
    'careers.internship.title': 'სტაჟირება და Junior პროგრამები',

    // Contact
    'contact.address': 'მისამართი',
    'contact.phone': 'ტელეფონი',
    'contact.email': 'ელფოსტა',
    'contact.hours': 'სამუშაო საათები',
    'contact.hours.weekdays': 'ორშაბათი - პარასკევი: 10:00 - 18:00',
    'contact.hours.weekend': 'შაბათი-კვირა: დახურულია',
    'contact.form.title': 'გამოგვიგზავნე შეტყობინება',
    
    // Form Fields
    'form.name': 'სახელი',
    'form.lastname': 'გვარი',
    'form.email': 'ელფოსტა',
    'form.phone': 'ტელეფონი',
    'form.message': 'შეტყობინება',
    'form.submit': 'გაგზავნა',
    'form.success': 'წარმატებით გაიგზავნა!',
    'form.required': 'ველი სავალდებულოა',

    // Footer
    'footer.description': 'პლატფორმა AI განათლებისა და ინოვაციისთვის',
    'footer.quicklinks': 'სწრაფი ბმულები',
    'footer.services': 'სერვისები',
    'footer.partners': 'პარტნიორები',
    'footer.rights': 'ყველა უფლება დაცულია',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.education': 'Education',
    'nav.business': 'Business Services',
    'nav.startups': 'Startups',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    // Home Hero
    'home.hero.title': 'The Future of AI Starts Here',
    'home.hero.subtitle': 'A space where education, innovation, and business transformation unite',
    'home.hero.cta1': 'Start Learning',
    'home.hero.cta2': 'Business Solutions',

    // Home Stats
    'home.stats.students': 'Students',
    'home.stats.courses': 'AI Courses',
    'home.stats.coursera': 'Official Coursera Partner',
    'home.stats.mastercard': 'Mastercard Support',

    // Home Services
    'home.services.education.title': 'Education',
    'home.services.education.desc': 'Free AI courses with Coursera and Mastercard support',
    'home.services.business.title': 'Business Services',
    'home.services.business.desc': 'AI solutions for your business transformation',
    'home.services.startups.title': 'Startup Incubation',
    'home.services.startups.desc': 'Support and funding for AI startups',
    'home.services.learnmore': 'Learn More',

    // Partners
    'home.partners.title': 'Our Partners',

    // CTA
    'home.cta.title': 'Ready for Your AI Journey?',
    'home.cta.button1': 'Contact Us',
    'home.cta.button2': 'View Courses',

    // About
    'about.hero.title': 'Who We Are',
    'about.hero.subtitle': 'A platform for AI development and training future professionals',
    'about.story.title': 'Our Story',
    'about.story.content': 'Nebula AI Hub is a platform created at the Kutaisi Multifunctional Center for the development of artificial intelligence and training future professionals. Our founding idea emerged when we realized that in Georgia, accessible resources adapted to the Georgian language in the field of artificial intelligence were almost non-existent.',
    'about.mission.quote': 'Developing the AI sector in the region, from education to innovation and economic growth',
    
    'about.values.title': 'Our Values',
    'about.values.access': 'Access to Knowledge',
    'about.values.equality': 'Equal Opportunities',
    'about.values.innovation': 'Local Innovation, Global Potential',
    'about.values.ethics': 'Ethical AI Development',

    'about.team.title': 'Our Team',
    'about.partnerships.title': 'Partnerships',

    // Education
    'education.hero.title': 'Start Your AI Career Today - Completely Free',
    'education.hero.subtitle': 'International courses with Georgian language support',
    'education.hero.cta': 'Register Now',

    'education.coursera.title': 'Coursera International Program',
    'education.coursera.feature1': '250+ AI courses in 250 directions',
    'education.coursera.feature2': 'Completely free access',
    'education.coursera.feature3': 'Georgian language support',
    'education.coursera.feature4': 'International certificates',

    'education.mastercard.title': 'Mastercard AI Practical Course',
    'education.btu.title': 'BTU Student Program',

    'education.form.title': 'Register for Program',
    'education.benefits.title': 'Why Nebula?',

    // Business
    'business.hero.title': 'AI Solutions for Your Business',
    'business.hero.stats': 'Cost Reduction | Productivity Growth',
    'business.hero.cta': 'Get Free Consultation',

    // Startups
    'startups.hero.title': 'Realize Your AI Idea',
    'startups.hero.subtitle': 'Technical support, funding, and mentorship',
    'startups.hero.cta': 'Submit Your Idea',

    // Careers
    'careers.hero.title': 'Join the Nebula Team',
    'careers.hero.subtitle': 'Work on future technologies',
    'careers.positions.title': 'Open Positions',
    'careers.internship.title': 'Internship and Junior Programs',

    // Contact
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.weekdays': 'Monday - Friday: 10:00 - 18:00',
    'contact.hours.weekend': 'Saturday-Sunday: Closed',
    'contact.form.title': 'Send Us a Message',
    
    // Form Fields
    'form.name': 'First Name',
    'form.lastname': 'Last Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.success': 'Successfully sent!',
    'form.required': 'This field is required',

    // Footer
    'footer.description': 'Platform for AI education and innovation',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.partners': 'Partners',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.education': 'Образование',
    'nav.business': 'Бизнес-услуги',
    'nav.startups': 'Стартапы',
    'nav.careers': 'Карьера',
    'nav.contact': 'Контакты',

    // Home Hero
    'home.hero.title': 'Будущее ИИ начинается здесь',
    'home.hero.subtitle': 'Пространство, где объединяются образование, инновации и бизнес-трансформация',
    'home.hero.cta1': 'Начать обучение',
    'home.hero.cta2': 'Бизнес-решения',

    // Home Stats
    'home.stats.students': 'Студентов',
    'home.stats.courses': 'ИИ курсов',
    'home.stats.coursera': 'Официальный партнер Coursera',
    'home.stats.mastercard': 'Поддержка Mastercard',

    // Home Services
    'home.services.education.title': 'Образование',
    'home.services.education.desc': 'Бесплатные курсы по ИИ при поддержке Coursera и Mastercard',
    'home.services.business.title': 'Бизнес-услуги',
    'home.services.business.desc': 'ИИ-решения для трансформации вашего бизнеса',
    'home.services.startups.title': 'Инкубация стартапов',
    'home.services.startups.desc': 'Поддержка и финансирование для ИИ-стартапов',
    'home.services.learnmore': 'Узнать больше',

    // Partners
    'home.partners.title': 'Наши партнеры',

    // CTA
    'home.cta.title': 'Готовы к путешествию в мир ИИ?',
    'home.cta.button1': 'Связаться с нами',
    'home.cta.button2': 'Просмотреть курсы',

    // About
    'about.hero.title': 'Кто мы',
    'about.hero.subtitle': 'Платформа для развития ИИ и подготовки будущих профессионалов',
    'about.story.title': 'Наша история',
    'about.story.content': 'Nebula AI Hub - это платформа, созданная на базе Кутаисского многофункционального центра для развития искусственного интеллекта и подготовки будущих профессионалов. Идея нашего создания возникла, когда стало ясно, что в Грузии почти не существовало доступных ресурсов по искусственному интеллекту, адаптированных на грузинский язык.',
    'about.mission.quote': 'Развитие сферы искусственного интеллекта в регионе, от образования до инноваций и экономического роста',
    
    'about.values.title': 'Наши ценности',
    'about.values.access': 'Доступ к знаниям',
    'about.values.equality': 'Равные возможности',
    'about.values.innovation': 'Локальные инновации, глобальный потенциал',
    'about.values.ethics': 'Этичное развитие ИИ',

    'about.team.title': 'Наша команда',
    'about.partnerships.title': 'Партнерства',

    // Education
    'education.hero.title': 'Начните карьеру в ИИ сегодня - совершенно бесплатно',
    'education.hero.subtitle': 'Международные курсы с поддержкой на грузинском языке',
    'education.hero.cta': 'Зарегистрироваться сейчас',

    'education.coursera.title': 'Международная программа Coursera',
    'education.coursera.feature1': '250+ курсов по ИИ в 250 направлениях',
    'education.coursera.feature2': 'Совершенно бесплатный доступ',
    'education.coursera.feature3': 'Поддержка на грузинском языке',
    'education.coursera.feature4': 'Международные сертификаты',

    'education.mastercard.title': 'Практический курс Mastercard AI',
    'education.btu.title': 'Студенческая программа БТУ',

    'education.form.title': 'Регистрация на программу',
    'education.benefits.title': 'Почему Nebula?',

    // Business
    'business.hero.title': 'ИИ-решения для вашего бизнеса',
    'business.hero.stats': 'Снижение затрат | Рост производительности',
    'business.hero.cta': 'Получить бесплатную консультацию',

    // Startups
    'startups.hero.title': 'Реализация вашей ИИ-идеи',
    'startups.hero.subtitle': 'Техническая поддержка, финансирование и менторство',
    'startups.hero.cta': 'Представить свою идею',

    // Careers
    'careers.hero.title': 'Присоединяйтесь к команде Nebula',
    'careers.hero.subtitle': 'Работа над технологиями будущего',
    'careers.positions.title': 'Открытые вакансии',
    'careers.internship.title': 'Стажировка и Junior-программы',

    // Contact
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.hours': 'Часы работы',
    'contact.hours.weekdays': 'Понедельник - Пятница: 10:00 - 18:00',
    'contact.hours.weekend': 'Суббота-Воскресенье: Закрыто',
    'contact.form.title': 'Отправьте нам сообщение',
    
    // Form Fields
    'form.name': 'Имя',
    'form.lastname': 'Фамилия',
    'form.email': 'Эл. почта',
    'form.phone': 'Телефон',
    'form.message': 'Сообщение',
    'form.submit': 'Отправить',
    'form.success': 'Успешно отправлено!',
    'form.required': 'Обязательное поле',

    // Footer
    'footer.description': 'Платформа для образования и инноваций в области ИИ',
    'footer.quicklinks': 'Быстрые ссылки',
    'footer.services': 'Услуги',
    'footer.partners': 'Партнеры',
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
};
