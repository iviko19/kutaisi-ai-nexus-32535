import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ka' | 'en' ;

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
    'solutions.hero.title': 'ხელოვნური ინტელექტის პრაქტიკული გადაწყვეტები რეალური ბიზნეს ამოცანებისთვის',
    'solutions.hero.subtitle': 'შეამცირეთ ხარჯები, გაზარდეთ პროდუქტიულობა. ჩვენ ვქმნით პრაქტიკულ AI სისტემებს, რომლებიც აძლიერებს ეფექტურობას იურიდიულ სექტორში, კონტენტის შექმნაში, მედიაში და მის მიღმა.',
    
    'solutions.legalguard.title': 'LegalGuard AI',
    'solutions.legalguard.desc': 'LegalGuard AI არის AI სისტემებით აღჭურვილი პლატფორმა, რომელიც ამარტივებს დოკუმენტების მართვას იურისტებისთვის, კლინიკებისა და ნოტარიუსებისთვის. ჩვენი სისტემა ავტომატურად ავსებს, არედაქტირებს და ამოწმებს შენს მიერ მოწოდებულ შაბლონებს მხოლოდ მარტივი ბრძანების ან ხმოვანი მითითების მეშვეობით. ჩვენი სერვისი ამცირებს ოპერაციულ დროსა და ხარვეზებს და უზრუნველყოფს მონაცემების უსაფრთხო და საიმედო დამუშავებას სრული კონფიდენციალურობის დაცვით.',
    
    'solutions.travelplanner.title': 'TravelPlanner AI',
    'solutions.travelplanner.desc': 'TravelPlanner არის ხელოვნური ინტელექტით ოპტიმიზირებული პლატფორმა, რომელიც პერსონალიზებული მოგზაურობის დასაგეგმად შეიქმნა. TravelPlanner გიქმნის შენზე მორგებულ მარშრუტებს, ითვლის ხარჯებს და გაძლევს მარტივ წვდომას დაჯავშნის სერვისებთან.',
    
    'solutions.media.title': 'Media Monitoring AI',
    'solutions.media.desc': 'სრული სურათის მიღება. ჩვენი გადაწყვეტა არის AI-ზე დაფუძნებული 24/7 მონიტორინგი, რომელიც ამ პრობლემას აგვარებს. სისტემა იღებს მონაცემებს მრავალი წყაროდან და საბოლოოდ შენ მიიღებ სრულ ინფორმაციას, რამდენს საუბრობენ შენს ბრენდზე, ტრენდების ანალიზსა და ავტომატურ რეპორტინგს — ყველაფერს ერთ მძლავრ პლატფორმაზე.',
    
    'solutions.contentai.title': 'ContentAI',
    'solutions.contentai.desc': 'ContentAI არის ხელოვნური ინტელექტით ოპტიმიზებული, სრულფასოვანი პლატფორმა შენი მარკეტინგული გუნდისთვის. ის ბრენდის იდენტობის სრული დაცვით აგენერირებს, გეგმავს და აქვეყნებს ვიზუალურ თუ ტექსტურ მასალას მყისიერად, მრავალ სოციალურ არხზე ერთდროულად. AI ავტომატურად ითვალისწინებს ოპტიმალური ჩართულობის დროს, ხოლო შენ აკონტროლებ შესრულებას და აუმჯობესებ შენს სტრატეგიას.',
    
    'solutions.talentbridge.title': 'TalentBridge',
    'solutions.talentbridge.desc': 'TalentBridge ჩვენი რეკრუტინგის პლატფორმაა, რომელიც აკავშირებს კვალიფიცირებულ IT სპეციალისტებს შესაძლებლობების ძიებაში და კომპანიებს, რომლებიც ეძებენ სრულყოფილ კანდიდატს. ჩვენი ხელოვნური ინტელექტით მხარდაჭერილი სისტემა ამარტივებს დაქირავების პროცესს და უზრუნველყოფს კანდიდატისა და კომპანიის საუკეთესო შესაბამისობას.',


   'careers.title': 'კარიერა Nebula-ში',
'careers.desc1': 'ჩვენ გვჯერა, რომ ჩვენი თანამშრომლები ყველაზე მნიშვნელოვანი რესურსია. ჩვენ ვქმნით თანაბარ შესაძლებლობებს, რომლებიც სხვადასხვა კულტურის და ღირებულებების მქონე ადამიანებს აძლევს საშუალებას ჩაერთონ საინტერესო და გამოწვევებით სავსე სამუშაოში.',
'careers.desc2': 'ჩვენ ერთად ვსწავლობთ, ვმოქმედებთ და ვითარდებით. არასდროს ვართ კმაყოფილი უკვე მიღწეულით და მუდმივად ვცდილობთ გავაუმჯობესოთ ჩვენი თავი. ამაში გვეხმარება უწყვეტი სწავლა, ურთიერთდახმარება და მიზნების მიღწევის oriented გარემო.',
'careers.button': 'იხილეთ ღია ვაკანსიები',



    'solutions.explore': 'გაეცანი პროდუქტს',
    'solutions.comingsoon': 'მალე',

    // Home Hero
    'home.hero.title': 'განათლებიდან რეალურ ინდუსტრიამდე',
    'home.hero.subtitle': 'ჩვენ ვქმნით ინოვაციურ ეკოსისტემას, რომელიც პირდაპირ უკავშირდებაეკონომიკურ წინსვლას, განათლებისა და ხელოვნური ინტელექტისტრანსფორმაციით',
    'home.hero.cta1': 'დაიწყე სწავლა',
    'home.hero.cta2': 'ბიზნეს გადაწყვეტები',
    'buttons.startLearning': 'ისწავლე უფასოდ',
'buttons.businessSolutions': 'ნახე AI გადაწყვეტები',

    // Home Services
    'home.services.education.title': 'განათლება',
    'home.services.education.desc': 'გლობალური AI განათლება. უფასოდ, საერთაშორისო სერტიფიკატით',
    'home.services.business.title': 'AI გადაწყვეტები ბიზნესისთვის',
    'home.services.business.desc': 'პროცესების სრული ავტომატიზაცია კონკურენტუნარიანობის გასაძლიერებლად',
    'home.services.startups.title': 'სტარტაპ ინკუბაცია',
    'home.services.startups.desc': 'ტექნოლოგიური პროდუქტის განვითარება და ინოვაციის კომერციალიზაცია',
    'home.services.learnmore': 'გაიგე მეტი',

    // Partners
    'home.partners.title': 'ჩვენი პარტნიორები',
'home.stats.students': 'კურსდამთავრებული',
'home.stats.courses': 'საგანმანათლებლო პროგრამა',
'home.stats.coursera': 'ოფიციალური  პარტნიორი',
'home.stats.mastercard': 'სტრატეგიული თანამშრომლობა',

    // CTA
    'home.cta.title': 'დაიწყე AI ტრანსფორმაცია დღესვე',
    'home.cta.button1': 'დაგვიკავშირდი',
    'home.cta.button2': 'ისწავლე უფასოდ',

    // About
    'about.hero.title': 'წამყვანი AI ჰაბი',
    'about.hero.subtitle': 'პლატფორმა, რომელიც ორიენტირებულია ხელოვნური ინტელექტის განვითარებაზე, მომავლის პროფესიონალების მომზადებასა და ბიზნესის მიერ AI-ის საუკეთესოდ გამოყენებაზე',
    'about.story.title': 'ჩვენი ამბავი',
    'about.story.content': 'ქუთაისის მულტიფუნქციურ ცენტრში გაჩნდა იდეა საქართველოში ხელოვნური ინტელექტის განვითარების შესახებ. ამ ინიციატივის მთავარი მიზანი იყო AI-ის გადაქცევა ეკონომიკური პროგრესის ინსტრუმენტად. სწორედ ამ მიზნის მისაღწევად, ჩვენი სტრატეგიული მიმართულება განათლებით დაიწყო. პლატფორმის ფარგლებში, ასობით ახალგაზრდამ გაიარა Coursera-ს საერთაშორისო კურსები და Mastercard-ის მხარდაჭერით შემუშავებული ხელოვნური ინტელექტის სასწავლო პროგრამა. ამ პროგრამების წარმატებულმა კურსდამთავრებულებმა, როგორც მაღალკვალიფიციურმა პროფესიონალებმა, შექმნეს Nebula AI Hub-ის ძირითადი გუნდი. ამ კომპეტენციურმა რესურსმა მოგვცა შანსი, გადავსულიყავით შემდეგ ეტაპზე: ჩვენ მივეცით ახალგაზრდა პროფესიონალებს შანსი, შეექმნათ პრაქტიკული AI გადაწყვეტილებები და ტექნოლოგიური პროდუქტები (SaaS მოდელების ჩათვლით). ამ პროდუქტების შექმნის მთავარი მიზანია ბიზნესის მიერ AI-ის საუკეთესოდ გამოყენება — პროცესების ავტომატიზაცია, მონაცემთა ინტელექტუალური ანალიტიკა და ორგანიზაციების ციფრული ტრანსფორმაციის დაჩქარება. შედეგად, ჩვენ ვახდენთ ცოდნის კომერციალიზაციას და ვქმნით ახალ ეკონომიკურ შესაძლებლობებს თანამედროვე საქართველოსთვის და მსოფლიოსთვის.',
    'about.mission.quote': 'ვაჩქარებთ ციფრულ ტრანსფორმაციას და ვქმნით ახალ ეკონომიკურ შესაძლებლობებს',
    
    'about.values.title': 'ჩვენი ღირებულებები',
    'about.values.access': 'ცოდნის სრული ხელმისაწვდომობა ',
    'about.values.equality': 'თანაბარი შესაძლებლობები და ინკლუზიურობა',
    'about.values.innovation': 'ლოკალური ინოვაცია, გლობალური პოტენციალით',
    'about.values.ethics': 'AI ტექნოლოგიების ეთიკური და პასუხისმგებლიანი განვითარება',

    'about.team.title': 'ჩვენი გუნდი',
    'about.partnerships.title': 'პარტნიორობები',

    // Education

    'education.hero.title': 'AI ცოდნა მსოფლიო გიგანტების სტანდარტით',
    'education.hero.subtitle': 'საერთაშორისო კურსები ქართულენოვანი მხარდაჭერით',
    'education.hero.cta': 'დარეგისტრირდი ახლავე',

    'education.coursera.title': 'Coursera საერთაშორისო პროგრამა',
    'education.coursera.feature1': '250+ AI კურსი 250 მიმართულებით',
    'education.coursera.feature2': 'სრულიად უფასო წვდომა',
    'education.coursera.feature3': 'ქართულენოვანი მხარდაჭერა',
    'education.coursera.feature4': 'საერთაშორისო სერტიფიკატები',
    'education.programs.title': 'ჩვენი პროგრამები',
    'education.benefits.title': 'რატომ Nebula?',
      'education.mastercard.title': 'Mastercard AI პრაქტიკული კურსი',
'education.mastercard.feature1': 'ჩატბოტების შექმნა',
'education.mastercard.feature2': 'სურათების ამოცნობა',
'education.mastercard.feature3': 'რეკომენდაციის ალგორითმები',
'education.mastercard.feature4': 'პროგნოზირებადი ანალიტიკა',

    'education.form.title': 'შეავსე ფორმა და დაელოდე უკუკავშირს',
// 'education.form.subtitle': 'გამოგვიგზავნეთ ფორმა და დაგიკავშირდებით კურსის შემდეგ მიღებისთვის',

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
'business.hero.title': 'AI გადაწყვეტილებები  ბიზნესისთვის',
'business.hero.stats': 'შეამცირე ხარჯები, გაზარდე პროდუქტიულობა. ჩვენ ვქმნით პრაქტიკულ AI სისტემებს, რომლებიც აძლიერებს ეფექტურობას, ინოვაციას და კონკურენტუნარიანობას.',
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
    
'startups.hero.title': 'შენი AI იდეის რეალიზაცია: ტექნოლოგიური პროდუქტი კომერციალიზაციისთვის',
'startups.hero.subtitle': 'ვეხმარებით სტარტაპებს ტექნოლოგიურ განვითარებასა და ზრდაში. ეს მოიცავს ტექნიკურ მხარდაჭერას, ინვესტირებას შიდა კვლევისა და განვითარების მიმართულებით და მოდელების კომერციალიზაციას.',
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
'startups.form.title': 'გამოგვიგზავნე შენი იდეა',

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
'careers.hero.title': 'შემოუერთდი ჩვენს ვარსკვლავურ გუნდს',
'careers.hero.subtitle': 'იმუშავე მომავლის ტექნოლოგიებზე',

'careers.title': 'შექმენი მომავალი',
'careers.desc1': 'ჩვენ გვჯერა, რომ ორგანიზაციის მთავარი ღირებულება ადამიანები არიან — ისინი, ვინც ქმნიან ინოვაციას, ავითარებენ ცოდნას და მოძრაობენ ტექნოლოგიური მომავლისკენ. ჩვენთვის მნიშვნელოვანია ისეთი გარემოს შექმნა, სადაც სხვადასხვა გამოცდილების, კულტურისა და შეხედულებების მქონე ადამიანები თანაბარ შესაძლებლობებს იღებენ და საკუთარ უნარებს სრულად იყენებენ. ერთად ვსწავლობთ, ერთად ვმოქმედებთ და ერთად ვვითარდებით. ჩვენი გუნდი არასდროს რჩება ერთ ადგილზე — მუდმივად ვისწრაფვით უკეთესობისკენ და ვაშენებთ სამუშაო კულტურას.',
'buttons.viewOpenJobs': 'ნახე ღია ვაკანსიები',


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



    //Footer
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
    'nav.solutions': 'Our Solutions',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    
    // Solutions
    'solutions.hero.title': 'Practical AI Solutions for Real-World Business Challenges',
    'solutions.hero.subtitle': 'Reduce Costs, Increase Productivity. We develop practical AI systems that boost efficiency across the legal sector, content creation, media intelligence, and beyond.',
    
    'solutions.legalguard.title': 'LegalGuard AI',
    'solutions.legalguard.desc': 'LegalGuard AI: An AI-equipped platform that simplifies document management for lawyers, clinics, and notaries. Our system automatically completes, edits, and verifies the templates you provide via simple text or voice commands. It reduces operational time and errors, ensuring secure and reliable data processing with full confidentiality.',
    
    'solutions.travelplanner.title': 'TravelPlanner AI',
    'solutions.travelplanner.desc': 'TravelPlanner AI: An AI-optimized platform designed for personalized travel planning. TravelPlanner creates customized itineraries, calculates expenses, and gives you easy access to booking services.',
    'solutions.media.title': 'Media Monitoring AI',
    'solutions.media.desc': 'Media Monitoring AI: Companies struggle to get a complete picture of media coverage about themselves and their competitors. Our solution is AI-based 24/7 monitoring, which solves this problem. The system processes data from multiple sources and provides full information on brand share, trend analysis, and automated reporting—all in one powerful platform.',
    'solutions.contentai.title': 'ContentAI',
    'solutions.contentai.desc': 'ContentAI: A comprehensive, AI-optimized platform for your marketing team. It generates, schedules, and publishes visual and text content while maintaining full brand identity consistency. This happens instantly across multiple social channels, with AI optimizing engagement times while you track performance and refine your strategy.',
    
    'solutions.talentbridge.title': 'TalentBridge',
    'solutions.talentbridge.desc': 'TalentBridge: Our recruiting platform connects qualified IT specialists seeking opportunities with companies looking for the perfect match. Our AI-supported system simplifies the hiring process and ensures the best alignment between candidates and employers.',
    'careers.title': 'Career in',
    'careers.desc1': 'We believe that our employees are the most important asset. We create equal opportunities that allow people of different cultures and values to engage in work which is interesting and full of challenges.',
    'careers.desc2': 'We learn, act, and develop together. We are never content with what we have achieved and continuously strive to improve on what we are today. In this endeavor, we are aided by continuous learning, mutual support, and an environment geared toward the achievement of goals.',
    'careers.button': 'View Open Jobs',



    'solutions.explore': 'Explore Product',
    'solutions.comingsoon': 'Coming Soon',

    // Home Hero
    'home.hero.title': 'From Education to Real Industry',
    'home.hero.subtitle': 'We are building an innovative ecosystem that directly links to economic progress through AI education and technological transformation.',
    
    'buttons.startLearning': 'Start Learning for Free',
    'buttons.businessSolutions': 'Explore AI Solutions',



    // Home Stats
   'home.stats.students': 'Students',
'home.stats.courses': 'AI Courses',
'home.stats.coursera': 'Official Coursera Partner',
'home.stats.mastercard': 'Mastercard Support',


    // Home Services
    'home.services.education.title': 'Education',
    'home.services.education.desc': 'Global AI Education. Free Access, International Certification.',
    'home.services.business.title': 'Business Services',
    'home.services.business.desc': 'Business Solutions: AI Solutions for Business: Full Process Automation to Boost Competitiveness.',
    'home.services.startups.title': 'Startup Incubation',
    'home.services.startups.desc': 'Startup Incubation: Startup Incubation: Tech Product Development and Innovation Commercialization',
    'home.services.learnmore': 'Learn More',

    // Partners
    'home.partners.title': 'Our Partners',

    // CTA
    'home.cta.title': 'Start Your AI Transformation Today',
    'home.cta.button1': 'Contact Us',
    'home.cta.button2': 'View Courses',

    // About
    'about.hero.title': 'Leading AI Hub',
    'about.hero.subtitle': 'Platform focused on advancing Artificial Intelligence, preparing future professionals, and ensuring optimal AI adoption by businesses.',
    'about.story.title': 'Our Story',
    'about.story.content': 'Our journey began at Kutaisi Multifunctional Center with a vision to advance Artificial Intelligence in Georgia. The core mission of this initiative was to transform AI into an instrument for economic progress. Our strategic focus started with education.Hundreds of young professionals completed international Coursera courses and anAI training program supported by Mastercard. These successful graduates, highlyqualified professionals, formed the core team of Nebula AI Hub. This skilled teamenabled us to create practical AI solutions and technological products (includingSaaS models) aimed at the optimal use of AI in business. By automating processes,analyzing data intelligently, and accelerating digital transformation, we arecommercializing knowledge and creating new economic opportunities for modernGeorgia and the world.',
    'about.mission.quote': 'We accelerate digital transformation and create new economic opportunities ',
    
    'about.values.title': 'Our Values',
    'about.values.access': 'Full Access to Knowledge',
    'about.values.equality': 'Equal Opportunities and Inclusivity',
    'about.values.innovation': 'Local Innovation, Global Potential',
    'about.values.ethics': 'Ethical and Responsible AI Development',

    'about.team.title': 'Our Team',
    'about.partnerships.title': 'Partnerships',

    // Education
    'education.hero.title': 'AI Knowledge by Global Giants Standards',
    'education.hero.subtitle': 'International courses with Georgian language support',
    'education.hero.cta': 'Register Now',

    'education.coursera.title': 'Coursera International Program',
    'education.coursera.feature1': '250+ AI courses in 250 directions',
    'education.coursera.feature2': 'Completely free access',
    'education.coursera.feature3': 'Georgian language support',
    'education.coursera.feature4': 'International certificates',
'education.programs.title': 'Our Programs',
    'education.mastercard.title': 'Mastercard AI Practical Course',
    'education.btu.title': 'BTU Student Program',

    'education.form.title': 'Register for Program',
    'education.benefits.title': 'Why Nebula?',
'education.mastercard.feature1': 'Creating chatbots',
'education.mastercard.feature2': 'Image recognition',
'education.mastercard.feature3': 'Recommendation algorithms',
'education.mastercard.feature4': 'Predictive analytics',

'education.form.subtitle': 'Submit the form and wait for our representative to get in touch with you',

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
'business.hero.stats': 'Reduce costs, increase productivity. We build practical AI systems that boost efficiency',
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

'startups.hero.title': 'Realize Your AI Idea: From Concept to Commercial Product.',
'startups.hero.subtitle': 'We help startups with technological development and growth. This includes technical support, investment in internal research and development, and model commercialization.',
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
'startups.form.title': 'Submit Your Idea',
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
'careers.hero.title': 'Join Our Star Team',
'careers.hero.subtitle': 'Shape the Future with AI',

'careers.title': 'Careers at Nebula',
'careers.desc1': 'Advance knowledge and drive the technological future. It is crucial for us to create an environment where individuals from diverse backgrounds, cultures, and viewpoints receive equal opportunities and fully utilize their skills. We learn, act, and develop together. Our team never stays complacent; we constantly strive for improvement and build a culture focused on continuous growth.',
'buttons.viewOpenJobs': 'View Open Vacancies',


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
