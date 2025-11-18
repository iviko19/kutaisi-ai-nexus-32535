// // import { Link } from 'react-router-dom';
// // import { useLanguage } from '@/contexts/LanguageContext';
// // import { Facebook, Linkedin } from 'lucide-react';
// // import nebulaLogo from '@/assets/nebula-logo.svg';

// // export const Footer = () => {
// //   const { t } = useLanguage();

// //   const quickLinks = [
// //     { path: '/', label: t('nav.home') },
// //     { path: '/about', label: t('nav.about') },
// //     { path: '/education', label: t('nav.education') },
// //     { path: '/business', label: t('nav.business') },
// //     { path: '/startups', label: t('nav.startups') },
// //     { path: '/careers', label: t('nav.careers') },
// //     { path: '/contact', label: t('nav.contact') },
// //   ];

// //   // const services = [
// //   //   'AI აუდიტი',
// //   //   'ჩატბოტები',
// //   //   'AI იურისტი',
// //   //   'ინდუსტრიული გადაწყვეტები',
// //   //   'Computer Vision',
// //   //   'მონაცემთა მართვა',
// //   // ];
// // const services = [
// //   t('footer.services_list.ai'),
// //   t('footer.services_list.chatbots'),
// //   t('footer.services_list.ai_tools'),
// //   t('footer.services_list.custom_dev'),
// //   t('footer.services_list.computer_vision'),
// //   t('footer.services_list.analytics'),
// // ];

// //   const socialLinks = [
// //     { icon: Facebook, href: '#', label: 'Facebook' },
// //     { icon: Linkedin, href: '#', label: 'LinkedIn' },
// //   ];

// //   return (
// //     <footer className="bg-[hsl(var(--nebula-darker))] border-t border-[hsl(var(--nebula-cyan)/0.2)] mt-20">
// //       <div className="container mx-auto px-4 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
// //           {/* Column 1: Brand */}
// //           <div>
// //             <Link to="/" className="inline-block mb-4">
// //               <img src={nebulaLogo} alt="Nebula AI Hub" className="h-12 w-auto" />
// //             </Link>
// //             <p className="text-sm text-muted-foreground mb-4">
// //               {t('footer.description')}
// //             </p>
// //             <div className="flex space-x-3">
// //               {socialLinks.map((social) => (
// //                 <a
// //                   key={social.label}
// //                   href={social.href}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-9 h-9 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] hover:bg-[hsl(var(--nebula-cyan)/0.2)] flex items-center justify-center transition-all hover:scale-110"
// //                   aria-label={social.label}
// //                 >
// //                   <social.icon className="h-4 w-4 text-[hsl(var(--nebula-cyan))]" />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Column 2: Quick Links */}
// //           <div>
// //             <h3 className="font-semibold text-foreground mb-4">{t('footer.quicklinks')}</h3>
// //             <ul className="space-y-2">
// //               {quickLinks.map((link) => (
// //                 <li key={link.path}>
// //                   <Link
// //                     to={link.path}
// //                     className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Column 3: Services */}
// //           {/* <div>
// //             <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
// //             <ul className="space-y-2">
// //               {services.map((service) => (
// //                 <li key={service}>
// //                   <span className="text-sm text-muted-foreground">{service}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div> */}
// // {/* Column 3: Services */}
// // <div>
// //   <h3 className="font-semibold text-foreground mb-4">
// //     {t('footer.services')}
// //   </h3>

// //   <ul className="space-y-2">
// //   {[
// //     'footer.services_list.ai_academy',
// //     'footer.services_list.chatbots',
// //     'footer.services_list.ai_solutions',
// //     'footer.services_list.industry_solutions',
// //     'footer.services_list.computer_vision',
// //     'footer.services_list.data_analytics',
// //   ].map((key, index) => (
// //     <li key={index}>
// //       <span className="text-sm text-muted-foreground">{t(key)}</span>
// //     </li>
// //   ))}
// // </ul>

// // </div>

// //         {/* Bottom Bar */}
// //         <div className="pt-8 border-t border-[hsl(var(--nebula-cyan)/0.2)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
// //           <p className="text-sm text-muted-foreground">
// //             © 2025 Nebula AI Hub. {t('footer.rights')}
// //           </p>
// //           <div className="flex space-x-6">
// //             <a href="#" className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors">
// //               {t('footer.privacy')}
// //             </a>
// //             {/* <a href="#" className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors">
// //               {t('footer.terms')}
// //             </a> */}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };


// import { Link } from 'react-router-dom';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Facebook, Linkedin } from 'lucide-react';
// import nebulaLogo from '@/assets/nebula-logo.svg';

// export const Footer = () => {
//   const { t } = useLanguage();

//   const quickLinks = [
//     { path: '/', label: t('nav.home') },
//     { path: '/about', label: t('nav.about') },
//     { path: '/education', label: t('nav.education') },
//     { path: '/business', label: t('nav.business') },
//     { path: '/startups', label: t('nav.startups') },
//     { path: '/careers', label: t('nav.careers') },
//     { path: '/contact', label: t('nav.contact') },
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
//     { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
//   ];

//   // 🔥 Correct multilingual services
//   const serviceKeys = [
//     'footer.services_list.ai_academy',
//     'footer.services_list.chatbots',
//     'footer.services_list.ai_solutions',
//     'footer.services_list.industry_solutions',
//     'footer.services_list.data_analytics',
//   ];

//   return (
//     <footer className="bg-[hsl(var(--nebula-darker))] border-t border-[hsl(var(--nebula-cyan)/0.2)] mt-20">
//       <div className="container mx-auto px-4 py-12">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

//           {/* Column 1: Brand */}
//           <div>
//             <Link to="/" className="inline-block mb-4">
//               <img src={nebulaLogo} alt="Nebula AI Hub" className="h-12 w-auto" />
//             </Link>

//             <p className="text-sm text-muted-foreground mb-4">
//               {t('footer.description')}
//             </p>

//             <div className="flex space-x-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] hover:bg-[hsl(var(--nebula-cyan)/0.2)] flex items-center justify-center transition-all hover:scale-110"
//                 >
//                   <social.icon className="h-4 w-4 text-[hsl(var(--nebula-cyan))]" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="font-semibold text-foreground mb-4">{t('footer.quicklinks')}</h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
//             <ul className="space-y-2">
//               {serviceKeys.map((key, index) => (
//                 <li key={index}>
//                   <span className="text-sm text-muted-foreground">
//                     {t(key)}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-[hsl(var(--nebula-cyan)/0.2)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p className="text-sm text-muted-foreground">
//             © 2025 Nebula AI Hub. {t('footer.rights')}
//           </p>

//           <div className="flex space-x-6">
//             <a
//               href="#"
//               className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors"
//             >
//               {t('footer.privacy')}
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };


import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Linkedin } from 'lucide-react';
import nebulaLogo from '@/assets/nebula-logo.svg';

export const Footer = () => {
  const { t, language } = useLanguage(); // <-- ADDED language

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/education', label: t('nav.education') },
    { path: '/business', label: t('nav.business') },
    { path: '/startups', label: t('nav.startups') },
    { path: '/careers', label: t('nav.careers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const serviceKeys = [
    'footer.services_list.ai_academy',
    'footer.services_list.chatbots',
    'footer.services_list.ai_solutions',
    'footer.services_list.industry_solutions',
    'footer.services_list.data_analytics',
  ];

  // 👇 Auto-switch PDF depending on language
  const privacyPolicyPdf =
    language === 'ka'
      ? '/privacy-policy-ka.pdf'
      : '/privacy-policy-en.pdf';

  return (
    <footer className="bg-[hsl(var(--nebula-darker))] border-t border-[hsl(var(--nebula-cyan)/0.2)] mt-20">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={nebulaLogo} alt="Nebula AI Hub" className="h-12 w-auto" />
            </Link>

            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.description')}
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] hover:bg-[hsl(var(--nebula-cyan)/0.2)] flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="h-4 w-4 text-[hsl(var(--nebula-cyan))]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {serviceKeys.map((key, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--nebula-cyan)/0.2)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Nebula AI Hub. {t('footer.rights')}
          </p>

          <div className="flex space-x-6">
            {/* 🔥 Auto-switch Georgian / English PDF */}
            <a
              href={privacyPolicyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors"
            >
              {t('footer.privacy')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
