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
    return (saved as Language) || 'en';
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
    'nav.solutions': 'ჩვენი გადაწყვეტები',
    'nav.careers': 'კარიერა',
    'nav.contact': 'კონტაქტი',
    
    // Solutions
    'solutions.hero.title': 'ჩვენი გადაწყვეტები',
    'solutions.hero.subtitle': 'ვამძლიერებთ ბიზნესებს AI-ით მართულ ინოვაციებით იურიდიულ ტექნოლოგიებში, კონტენტის შექმნაში, მედია ინტელექტსა და მის მიღმა',
    
    'solutions.legalguard.title': 'LegalGuard AI',
    'solutions.legalguard.desc': 'LegalGuard AI არის ხელოვნური ინტელექტით მხარდაჭერილი პლატფორმა, რომელიც ამარტივებს დოკუმენტების მართვას კლინიკებისა და ნოტარიუსებისთვის. ჩვენი სისტემა ავტომატურად ავსებს, არედაქტირებს და ამოწმებს თქვენ მიერ მოწოდებულ შაბლონებს — მხოლოდ მარტივი ბრძანების ან საუბრის საშუალებით. ჩვენი სერვისი ამცირებს დროს, ხარვეზებს, და უზრუნველყოფს მონაცემების უსაფრთხო, საიმედო დამუშავებას, სრული კონფიდენციალურობის დაცვით.',
    
    'solutions.travelplanner.title': 'TravelPlanner AI',
    'solutions.travelplanner.desc': 'ხელოვნურ ინტელექტზე დაფუძნებული პლატფორმა პერსონალიზებული მოგზაურობის დასაგეგმად. TravelPlanner გიქმნით მორგებულ მარშრუტებს, გათვლით ხარჯებს და გაძლევთ მარტივ წვდომას დაჯავშნის სერვისებთან. ინტეგრირებული რეალურ დროში განახლებად ფასებთან და დანიშნულების მონაცემებთან, რაც მოგზაურობის დაგეგმვას ინტუიტიურსა და ეფექტურს ხდის.',
    
    'solutions.media.title': 'Media Monitoring AI',
    'solutions.media.desc': 'გაიგეთ თქვენი მედია ლანდშაფტი მყისიერად 24/7 ავტომატური მონიტორინგით. ჩვენი AI აანალიზებს სენტიმენტს, აკონტროლებს ბრენდის ხსენებებს ყველა არხზე და აძლევს რეალურ დროში შეტყობინებებს მოქმედი ინსაითებით. მიიღეთ სრული Share of Voice მეტრიკა, ტრენდების ანალიზი და ავტომატური რეპორტინგი—ერთ ძლიერ პლატფორმაზე.',
    
    'solutions.contentai.title': 'ContentAI',
    'solutions.contentai.desc': 'შექმენით, დაგეგმეთ და გამოაქვეყნეთ კონტენტი 3-ჯერ სწრაფად. ContentAI არის თქვენი AI-ით გაძლიერებული კონტენტ შექმნის პაკეტი მარკეტერებისა და გუნდებისთვის. გენერირება ბრენდის შესაბამისი ვიზუალებისა და ტექსტის, დაგეგმვა მრავალ პლატფორმაზე და შესრულების თვალთვალი—ყველაფერი ბრენდის სრულყოფილი შესაბამისობის შენარჩუნებით.',
    
    'solutions.talentbridge.title': 'TalentBridge',
    'solutions.talentbridge.desc': 'დაუკავშირეთ განსაკუთრებული ტალანტები პროგრესული კომპანიებისთვის. TalentBridge არის AI-ით გაძლიერებული რეკრუტინგის პლატფორმა, რომელიც აკავშირებს კვალიფიციურ პროფესიონალებს შესაძლებლობების ძიებაში და კომპანიებს, რომლებიც ეძებენ სრულყოფილ მატჩს. ჩვენი ინტელექტუალური მეჩინგ სისტემა ამარტივებს დაქირავებას და აძლიერებს სამუშაოს მაძიებლებს.',

   'careers.title': 'კარიერა Nebula-ში',
'careers.desc1': 'ჩვენ გვჯერა, რომ ჩვენი თანამშრომლები ყველაზე მნიშვნელოვანი რესურსია. ჩვენ ვქმნით თანაბარ შესაძლებლობებს, რომლებიც სხვადასხვა კულტურის და ღირებულებების მქონე ადამიანებს აძლევს საშუალებას ჩაერთონ საინტერესო და გამოწვევებით სავსე სამუშაოში.',
'careers.desc2': 'ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვითარდებით. არასდროს ვართ კმაყოფილი უკვე მიღწეულით და მუდმივად ვცდილობთ გავაუმჯობესოთ ჩვენი თავი. ამაში გვეხმარება უწყვეტი სწავლა, ურთიერთდახმარება და მიზნების მიღწევის oriented გარემო.',
'careers.button': 'იხილეთ ღია ვაკანსიები',



    'solutions.explore': 'გაეცანი პროდუქტს',
    'solutions.comingsoon': 'მალე',

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
'education.mastercard.feature1': 'ჩატბოტების შექმნა',
'education.mastercard.feature2': 'სურათების ამოცნობა',
'education.mastercard.feature3': 'რეკომენდაციის ალგორითმები',
'education.mastercard.feature4': 'პროგნოზირებადი ანალიტიკა',
'education.form.subtitle': 'გამოგვიგზავნეთ ფორმა და დაგიკავშირდებით კურსის შემდეგ მიღებისთვის',

'form.program': 'აირჩიე პროგრამა',
'form.programPlaceholder': 'აირჩიე პროგრამა',
'form.education': 'განათლების დონე',
'form.educationPlaceholder': 'აირჩიე განათლების დონე',
'form.basic': 'საბაზო',
'form.bachelor': 'ბაკალავრი',
'form.master': 'მაგისტრი',
'form.phd': 'დოქტორი',
'form.other': 'სხვა',
'form.interest': 'ინტერესის სფერო',
'form.sending': 'იგზავნება...',
    // Business
    // 'business.hero.title': 'AI გადაწყვეტები თქვენი ბიზნესისთვის',
    // 'business.hero.stats': 'ხარჯების შემცირება | პროდუქტიულობის ზრდა',
    // 'business.hero.cta': 'მიიღე უფასო კონსულტაცია',
    // BUSINESS – KA
'business.hero.title': 'AI გადაწყვეტილებები თქვენი ბიზნესისთვის',
'business.hero.stats': 'ხარჯების შემცირება|პროდუქტიულობის ზრდა',
'business.hero.cta': 'მიიღე უფასო კონსულტაცია',

'business.services.audit.title': 'AI აუდიტი და სტრატეგია',
'business.services.audit.feature1': 'ბიზნეს პროცესების ანალიზი',
'business.services.audit.feature2': 'AI მზადყოფნის შეფასება',
'business.services.audit.feature3': 'მორგებული სტრატეგია',
'business.services.audit.feature4': 'ROI პროგნოზირება',

'business.services.automation.title': 'ბიზნეს ოპერაციების ავტომატიზაცია',
'business.services.automation.feature1': 'Power BI, Tableau ინტეგრაცია',
'business.services.automation.feature2': 'Asana, Jira ავტომატიზაცია',
'business.services.automation.feature3': 'დოკუმენტების გენერაცია',
'business.services.automation.feature4': 'მონაცემთა სტრუქტურიზაცია',

'business.services.products.title': 'AI პროდუქტები და SaaS',
'business.services.products.feature1': 'Custom GPT-ჩატბოტები ქართულ ენაზე',
'business.services.products.feature2': 'თვითმომსახურების სისტემები',
'business.services.products.feature3': 'დინამიკური ფასების მოდელები',
'business.services.products.feature4': 'Text-to-Speech და Speech-to-Text',

'business.services.industry.title': 'ინდუსტრიული გადაწყვეტები',
'business.services.industry.feature1': 'ენერგეტიკა – პროგნოზირება',
'business.services.industry.feature2': 'ფინანსები – თაღლითობის გამოვლენა',
'business.services.industry.feature3': 'ლოჯისტიკა – მარშრუტის ოპტიმიზაცია',
'business.services.industry.feature4': 'ავიაცია – ფრენის დაგეგმვა',

'business.services.cv.title': 'Computer Vision',
'business.services.cv.feature1': 'CCTV ინტეგრაცია',
'business.services.cv.feature2': 'ობიექტების ამოცნობა',
'business.services.cv.feature3': 'უსაფრთხოების სისტემები',
'business.services.cv.feature4': 'ხარისხის კონტროლი',

'business.services.data.title': 'მონაცემთა მენეჯმენტი',
'business.services.data.feature1': 'მონაცემთა ეტიკეტირება',
'business.services.data.feature2': 'დატასეტების მომზადება',
'business.services.data.feature3': 'მოდელების fine-tuning',
'business.services.data.feature4': 'მონაცემთა ანალიზი',

'business.form.title': 'მიიღე უფასო კონსულტაცია',
'business.form.subtitle': 'შეავსე ფორმა და ჩვენი გუნდი დაგიკავშირდებათ AI გადაწყვეტების შესათანხმებლად',
'business.form.company': 'კომპანიის სახელი',
'business.form.contact': 'საკონტაქტო პირი',
'business.form.industry': 'ინდუსტრია',
'business.form.industryPlaceholder': 'აირჩიე ინდუსტრია',
'business.form.description': 'პროექტის აღწერა',
'business.form.budget': 'დაახლოებითი ბიუჯეტი',

'business.industry.energy': 'ენერგეტიკა',
'business.industry.finance': 'ფინანსები',
'business.industry.logistics': 'ლოჯისტიკა',
'business.industry.aviation': 'ავიაცია',
'business.industry.retail': 'საცალო ვაჭრობა',
'business.industry.healthcare': 'ჯანდაცვა',
'business.industry.education': 'განათლება',
'business.industry.other': 'სხვა',


    // Startups
    // 'startups.hero.title': 'შენი AI იდეის რეალიზაცია',
    // 'startups.hero.subtitle': 'ტექნიკური მხარდაჭერა, დაფინანსება და მენტორობა',
    // 'startups.hero.cta': 'წარადგინე შენი იდეა',
    // STARTUPS HERO
// HERO
'startups.hero.title': 'AI მხარდაჭერა სტარტაპებისთვის',
'startups.hero.subtitle': 'განვითარე, დაასქეილე და დააჩქარე შენი სტარტაპი ჩვენი ტექნიკური, ბიზნეს და ინფრასტრუქტურული ეკოსისტემით.',
'startups.hero.cta': 'განაცხადის შევსება',

// OFFERINGS
'startups.offerings.title': 'რას გთავაზობთ',

'startups.offerings.tech.title': 'ტექნიკური მხარდაჭერა',
'startups.offerings.tech.feature1': 'AI პროდუქტის განვითარება',
'startups.offerings.tech.feature2': 'ტექნოლოგიური კონსულტაციები',
'startups.offerings.tech.feature3': 'კოდის რევიუ',

'startups.offerings.business.title': 'ბიზნეს მხარდაჭერა',
'startups.offerings.business.feature1': 'ბიზნესმოდელის განვითარება',
'startups.offerings.business.feature2': 'ბაზარზე გასვლის სტრატეგია',
'startups.offerings.business.feature3': 'მომხმარებელთა მართვა',

'startups.offerings.funding.title': 'დაფინანსება',
'startups.offerings.funding.feature1': 'თანადაფინანსება',
'startups.offerings.funding.feature2': 'ინვესტორებთან დაკავშირება',
'startups.offerings.funding.feature3': 'გრანტების მოძიება',

'startups.offerings.infrastructure.title': 'ინფრასტრუქტურა',
'startups.offerings.infrastructure.feature1': 'Cloud და GPU სერვისები',
'startups.offerings.infrastructure.feature2': 'სამუშაო სივრცე',
'startups.offerings.infrastructure.feature3': 'ტექნიკური აღჭურვილობა',

'startups.offerings.network.title': 'ქსელი და მენტორობა',
'startups.offerings.network.feature1': 'გამოცდილი მენტორები',
'startups.offerings.network.feature2': 'პარტნიორების ქსელი',
'startups.offerings.network.feature3': 'ინვესტორული კავშირები',

// PROCESS
'startups.process.title': 'განაცხადის პროცესი',
'startups.process.step1.title': 'განაცხადის შევსება',
'startups.process.step1.desc': 'შეავსე განაცხადი ონლაინ',
'startups.process.step2.title': 'იდეის წარდგენა',
'startups.process.step2.desc': 'წარმოადგინე შენი იდეა გუნდთან',
'startups.process.step3.title': 'შეფასება',
'startups.process.step3.desc': 'ექსპერტების მიერ შეფასება',
'startups.process.step4.title': 'მიღება',
'startups.process.step4.desc': 'დაიწყე მუშაობა Nebula-სთან',

// FORM
'startups.form.title': 'წარადგინე შენი სტარტაპი',
'startups.form.subtitle': 'მოგვიყევი მეტი თქვენს იდეაზე, რათა შევაფასოთ განაცხადი.',
'startups.form.startupName': 'სტარტაპის სახელი',
'startups.form.description': 'მოკლე აღწერა',
'startups.form.stage': 'განვითარების ეტაპი',
'startups.form.stagePlaceholder': 'აირჩიე ეტაპი',
'startups.form.team': 'გუნდის შემადგენლობა',

// STAGES
'startups.stages.idea': 'იდეა',
'startups.stages.mvp': 'MVP',
'startups.stages.beta': 'Beta',
'startups.stages.ready': 'Launch Ready',


    // Careers
  // CAREERS PAGE TRANSLATIONS (KA)
'careers.hero.title': 'შემოუერთდი Nebula გუნდს',
'careers.hero.subtitle': 'მუშაობა მომავლის ტექნოლოგიებზე',

'careers.title': 'კარიერა Nebula-ში',
'careers.desc1': 'ჩვენ გვჯერა, რომ ჩვენი თანამშრომლები ყველაზე მნიშვნელოვანი რესურსია. ჩვენ ვქმნით თანაბარ შესაძლებლობებს სხვადასხვა კულტურის ადამიანებისთვის.',
'careers.desc2': 'ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვითარდებით — მუდმივად ვცდილობთ გავაუმჯობესოთ ჩვენი თავი უწყვეტი სწავლითა და მხარდაჭერით.',

'careers.benefit.real_projects': 'რეალური AI პროექტები',
'careers.benefit.development': 'პროფესიული განვითარება',
'careers.benefit.partners': 'საერთაშორისო პარტნიორები',
'careers.benefit.team': 'ახალგაზრდა გუნდი',
'careers.benefit.learning': 'უწყვეტი სწავლა',

'careers.internship.title': 'სტაჟირება და Junior პროგრამები',
'careers.internship.subtitle': 'ჩვენი საუკეთესო კურსდამთავრებულები დღეს Nebula AI Hub-ში მუშაობენ.',
'careers.internship.program': 'სტაჟირების პროგრამა',
'careers.internship.junior': 'Junior პოზიციები',
'careers.internship.mentorship': 'მენტორობა',

'careers.form.title': 'გააგზავნე რეზიუმე',
'careers.form.position': 'დეველოპერი პოზიცია',
'careers.form.positionPlaceholder': 'აირჩიე პოზიცია',
'careers.form.portfolio': 'პორტფოლიო / GitHub ლინკი',
'careers.form.motivation': 'მოტივაციური წერილი',
'careers.form.resume': 'რეზიუმე (PDF)',
'careers.form.sending': 'იგზავნება...',
'careers.form.submit': 'გაგზავნა',

  // Contact
    
  'contact.email': 'ელფოსტა',
'contact.phone': 'ტელეფონი',
'contact.address': 'მისამართი',
'contact.address.full': 'ქუთაისი, წმინდა ნინოს N4',
'contact.social': 'სოციალური ქსელები',



    // Form Fields
    'form.name': 'სახელი',
    'form.lastname': 'გვარი',
    'form.email': 'ელფოსტა',
    'form.phone': 'ტელეფონი',
    'form.message': 'შეტყობინება',
    'form.submit': 'გაგზავნა',
    'form.success': 'წარმატებით გაიგზავნა!',
    'form.required': 'ველი სავალდებულოა',

"footer.services_list.ai_academy": "AI აკადემია",
"footer.services_list.chatbots": "ჩატბოტები",
"footer.services_list.ai_solutions": "AI გადაწყვეტილებები",
"footer.services_list.industry_solutions": "ინდუსტრიული გადაწყვეტები",
"footer.services_list.computer_vision": "Computer Vision",
"footer.services_list.data_analytics": "მონაცემთა ანალიტიკა",



    // Footer
    // 'footer.description': 'პლატფორმა AI განათლებისა და ინოვაციისთვის',
    // 'footer.quicklinks': 'სწრაფი ბმულები',
    // 'footer.services': 'სერვისები',
    // 'footer.partners': 'პარტნიორები',
    // 'footer.rights': 'ყველა უფლება დაცულია',
    // 'footer.privacy': 'Privacy Policy',
    // 'footer.terms': 'Terms of Service',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.education': 'Education',
    'nav.business': 'Business Services',
    'nav.startups': 'Startups',
    'nav.solutions': 'Our Solutions',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    
    // Solutions
    'solutions.hero.title': 'Our Solutions',
    'solutions.hero.subtitle': 'Empowering businesses with AI-driven innovation across legal tech, content creation, media intelligence, and beyond',
    
    'solutions.legalguard.title': 'LegalGuard AI',
    'solutions.legalguard.desc': 'AI-powered document automation for legal professionals. LegalGuard streamlines document management for clinics and notaries, automatically filling, editing, and validating templates through simple commands or conversation—reducing errors, saving time, and ensuring secure, confidential data handling.',
    
    'solutions.travelplanner.title': 'TravelPlanner AI',
    'solutions.travelplanner.desc': 'Your AI-powered travel planning assistant. TravelPlanner creates personalized itineraries, calculates costs in advance, and seamlessly connects you with booking services. Integrated with real-time pricing and destination data through partnerships with Kiwi, Booking.com, and more—making travel planning intuitive and efficient.',
    
    'solutions.media.title': 'Media Monitoring AI',
    'solutions.media.desc': 'Understand your media landscape instantly with 24/7 automated monitoring. Our AI analyzes sentiment, tracks brand mentions across all channels, and delivers real-time alerts with actionable insights. Get comprehensive share of voice metrics, trend analysis, and automated reporting—all on one powerful platform.',
    
    'solutions.contentai.title': 'ContentAI',
    'solutions.contentai.desc': 'Create, schedule, and publish content 3x faster. ContentAI is your AI-powered content creation suite for marketers and teams. Generate on-brand visuals and copy, schedule across multiple platforms, and track performance—all while maintaining perfect brand consistency with smart templates and automated workflows.',
    
    'solutions.talentbridge.title': 'TalentBridge',
    'solutions.talentbridge.desc': 'Connecting exceptional talent with forward-thinking companies. TalentBridge is an AI-powered recruitment platform that bridges the gap between skilled professionals seeking opportunities and companies searching for the perfect match. Our intelligent matching system streamlines hiring while empowering job seekers to connect with their ideal roles.',
    
    'careers.title': 'Career in',
    'careers.desc1': 'We believe that our employees are the most important asset. We create equal opportunities that allow people of different cultures and values to engage in work which is interesting and full of challenges.',
    'careers.desc2': 'We learn, act, and develop together. We are never content with what we have achieved and continuously strive to improve on what we are today. In this endeavor, we are aided by continuous learning, mutual support, and an environment geared toward the achievement of goals.',
    'careers.button': 'View Open Jobs',



    'solutions.explore': 'Explore Product',
    'solutions.comingsoon': 'Coming Soon',

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
'education.mastercard.feature1': 'Creating chatbots',
'education.mastercard.feature2': 'Image recognition',
'education.mastercard.feature3': 'Recommendation algorithms',
'education.mastercard.feature4': 'Predictive analytics',

'education.form.subtitle': 'Submit the form and we will contact you for the next course intake',

'form.program': 'Choose Program',
'form.programPlaceholder': 'Select a program',
'form.education': 'Education Level',
'form.educationPlaceholder': 'Select education level',
'form.basic': 'Basic',
'form.bachelor': 'Bachelor',
'form.master': 'Master',
'form.phd': 'PhD',
'form.other': 'Other',
'form.interest': 'Field of Interest',
'form.sending': 'Sending...',
    // Business
 
'business.hero.title': 'AI Solutions for Your Business',
'business.hero.stats': 'cost reduction|productivity increase',
'business.hero.cta': 'Get a Free Consultation',

'business.services.audit.title': 'AI Audit & Strategy',
'business.services.audit.feature1': 'Analysis of business processes',
'business.services.audit.feature2': 'AI readiness assessment',
'business.services.audit.feature3': 'Tailor-made AI strategy',
'business.services.audit.feature4': 'ROI forecasting',

'business.services.automation.title': 'Business Operations Automation',
'business.services.automation.feature1': 'Power BI, Tableau integration',
'business.services.automation.feature2': 'Asana, Jira automation',
'business.services.automation.feature3': 'Document generation',
'business.services.automation.feature4': 'Data structuring',

'business.services.products.title': 'AI Products & SaaS',
'business.services.products.feature1': 'Custom GPT chatbots in Georgian',
'business.services.products.feature2': 'Self-service systems',
'business.services.products.feature3': 'Dynamic pricing models',
'business.services.products.feature4': 'Text-to-Speech & Speech-to-Text',

'business.services.industry.title': 'Industry Solutions',
'business.services.industry.feature1': 'Energy – forecasting',
'business.services.industry.feature2': 'Finance – fraud detection',
'business.services.industry.feature3': 'Logistics – route optimization',
'business.services.industry.feature4': 'Aviation – flight planning',

'business.services.cv.title': 'Computer Vision',
'business.services.cv.feature1': 'CCTV integration',
'business.services.cv.feature2': 'Object detection',
'business.services.cv.feature3': 'Security systems',
'business.services.cv.feature4': 'Quality control',

'business.services.data.title': 'Data Management',
'business.services.data.feature1': 'Data labeling',
'business.services.data.feature2': 'Dataset preparation',
'business.services.data.feature3': 'Model fine-tuning',
'business.services.data.feature4': 'Data analysis',

'business.form.title': 'Get a Free Consultation',
'business.form.subtitle': 'Fill out the form and our team will contact you with tailored AI solutions',
'business.form.company': 'Company Name',
'business.form.contact': 'Contact Person',
'business.form.industry': 'Industry',
'business.form.industryPlaceholder': 'Select industry',
'business.form.description': 'Project Description',
'business.form.budget': 'Approximate Budget',

'business.industry.energy': 'Energy',
'business.industry.finance': 'Finance',
'business.industry.logistics': 'Logistics',
'business.industry.aviation': 'Aviation',
'business.industry.retail': 'Retail',
'business.industry.healthcare': 'Healthcare',
'business.industry.education': 'Education',
'business.industry.other': 'Other',

  

    // Startups
    // 'startups.hero.title': 'Realize Your AI Idea',
    // 'startups.hero.subtitle': 'Technical support, funding, and mentorship',
    // 'startups.hero.cta': 'Submit Your Idea',
    // STARTUPS HERO
'startups.hero.title': 'AI Support for Startups',
'startups.hero.subtitle': 'Build, scale, and accelerate your startup with our full ecosystem of technical, business, and infrastructure support.',
'startups.hero.cta': 'Apply Now',

// OFFERINGS
'startups.offerings.title': 'What We Offer',

'startups.offerings.tech.title': 'Technical Support',
'startups.offerings.tech.feature1': 'AI product development',
'startups.offerings.tech.feature2': 'Technical consulting',
'startups.offerings.tech.feature3': 'Code review',

'startups.offerings.business.title': 'Business Support',
'startups.offerings.business.feature1': 'Business model development',
'startups.offerings.business.feature2': 'Go-to-market strategy',
'startups.offerings.business.feature3': 'Customer management',

'startups.offerings.funding.title': 'Funding',
'startups.offerings.funding.feature1': 'Co-funding',
'startups.offerings.funding.feature2': 'Investor connections',
'startups.offerings.funding.feature3': 'Grant sourcing',

'startups.offerings.infrastructure.title': 'Infrastructure',
'startups.offerings.infrastructure.feature1': 'Cloud & GPU services',
'startups.offerings.infrastructure.feature2': 'Workspace access',
'startups.offerings.infrastructure.feature3': 'Technical equipment',

'startups.offerings.network.title': 'Network & Mentorship',
'startups.offerings.network.feature1': 'Experienced mentors',
'startups.offerings.network.feature2': 'Partner network',
'startups.offerings.network.feature3': 'Investor relations',

// PROCESS
'startups.process.title': 'Application Process',
'startups.process.step1.title': 'Submit Application',
'startups.process.step1.desc': 'Fill out the form online',
'startups.process.step2.title': 'Pitch Your Idea',
'startups.process.step2.desc': 'Present your idea to our team',
'startups.process.step3.title': 'Evaluation',
'startups.process.step3.desc': 'Review by our experts',
'startups.process.step4.title': 'Acceptance',
'startups.process.step4.desc': 'Start building with Nebula',

// FORM
'startups.form.title': 'Submit Your Startup',
'startups.form.subtitle': 'Tell us more about your idea so we can evaluate your application.',
'startups.form.startupName': 'Startup Name',
'startups.form.description': 'Short Description',
'startups.form.stage': 'Development Stage',
'startups.form.stagePlaceholder': 'Select Stage',
'startups.form.team': 'Team Overview',

// STAGES
'startups.stages.idea': 'Idea',
'startups.stages.mvp': 'MVP',
'startups.stages.beta': 'Beta',
'startups.stages.ready': 'Launch Ready',


    // Careers
     // CAREERS PAGE TRANSLATIONS (EN)
'careers.hero.title': 'Join the Nebula Team',
'careers.hero.subtitle': 'Work on future technologies',

'careers.title': 'Careers at Nebula',
'careers.desc1': 'We believe our people are our greatest asset. We create equal opportunities for individuals of all cultures and backgrounds to engage in meaningful, challenging work.',
'careers.desc2': 'We learn, act, and grow together — constantly improving through continuous learning, collaboration, and a shared drive to achieve our goals.',

'careers.benefit.real_projects': 'Real AI Projects',
'careers.benefit.development': 'Professional Growth',
'careers.benefit.partners': 'International Partners',
'careers.benefit.team': 'Young Team',
'careers.benefit.learning': 'Continuous Learning',

'careers.internship.title': 'Internship and Junior Programs',
'careers.internship.subtitle': 'Our top graduates are now part of Nebula AI Hub.',
'careers.internship.program': 'Internship Program',
'careers.internship.junior': 'Junior Positions',
'careers.internship.mentorship': 'Mentorship',

'careers.form.title': 'Submit Your Resume',
'careers.form.position': 'Developer Position',
'careers.form.positionPlaceholder': 'Select a Position',
'careers.form.portfolio': 'Portfolio / GitHub Link',
'careers.form.motivation': 'Motivation Letter',
'careers.form.resume': 'Resume (PDF)',
'careers.form.sending': 'Sending...',
'careers.form.submit': 'Submit',



    // Contact
  
   'contact.email': 'Email',
'contact.phone': 'Phone',
'contact.address': 'Address',
'contact.address.full': 'Kutaisi, St. Nino N4',
'contact.social': 'Social Media',


    
    // Form Fields
    'form.name': 'First Name',
    'form.lastname': 'Last Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.success': 'Successfully sent!',
    'form.required': 'This field is required',

    "footer.services_list.ai_academy": "AI Academy",
"footer.services_list.chatbots": "Chatbots",
"footer.services_list.ai_solutions": "AI Solutions",
"footer.services_list.industry_solutions": "Industry Solutions",
"footer.services_list.computer_vision": "Computer Vision",
"footer.services_list.data_analytics": "Data Analytics",

    // Footer
    'footer.description': 'Platform for AI education and innovation',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.partners': 'Partners',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
}
