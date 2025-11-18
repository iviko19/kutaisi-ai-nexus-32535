// import { useLanguage } from '@/contexts/LanguageContext';
// import { Phone, Mail, Clock, Facebook, Linkedin } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// export default function Contact() {
//   const { t, language } = useLanguage();

//   return (
//     <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">
      
//       {/* Hero */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto text-center">
//           <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
//             {t('nav.contact')}
//           </h1>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="pb-20 px-4">
//         <div className="container mx-auto max-w-4xl">

//           <div className="grid md:grid-cols-2 gap-8">

//             {/* Email */}
//             <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)] hover:border-[hsl(215_55%_65%/.45)] transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center flex-shrink-0">
//                     <Mail className="h-6 w-6 text-[hsl(215_55%_65%)]" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
//                     <a href="mailto:info@nebulahub.ai" className="text-muted-foreground hover:text-[hsl(215_55%_65%)] transition-colors">
//                       info@nebulahub.ai
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Phone */}
//             <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)] hover:border-[hsl(215_55%_65%/.45)] transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center flex-shrink-0">
//                     <Phone className="h-6 w-6 text-[hsl(215_55%_65%)]" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
//                     <div className="text-muted-foreground space-y-1">
//                       <p>
//                         <a href="tel:+995571333303" className="hover:text-[hsl(215_55%_65%)] transition-colors">
//                           +995 571 33 33 03
//                         </a>
//                       </p>
//                       <p>
//                         <a href="tel:+995579588859" className="hover:text-[hsl(215_55%_65%)] transition-colors">
//                           +995 579 58 88 59
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Location */}
//             <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)] hover:border-[hsl(215_55%_65%/.45)] transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center flex-shrink-0">
//                     <Clock className="h-6 w-6 text-[hsl(215_55%_65%)]" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2 text-foreground">
//                       {language === 'ka' ? 'მისამართი' : 'Location'}
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {language === 'ka' ? 'ქ.ქუთაისი წმინდა ნინოს N4' : 'Kutaisi, St. Nino N4'}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Social Media */}
//             <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)] hover:border-[hsl(215_55%_65%/.45)] transition-all">
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-4 text-foreground">Social Media</h3>
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://www.facebook.com/p/Nebula-AI-Hub-61573891437689/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center hover:bg-[hsl(215_55%_65%/.25)] transition-colors"
//                   >
//                     <Facebook className="h-5 w-5 text-[hsl(215_55%_65%)]" />
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/company/nebula-ai-hub/posts"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center hover:bg-[hsl(215_55%_65%/.25)] transition-colors"
//                   >
//                     <Linkedin className="h-5 w-5 text-[hsl(215_55%_65%)]" />
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6">
            {t('nav.contact')}
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* EMAIL */}
            <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)]">
              <CardContent className="p-6 flex space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[hsl(215_55%_65%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('contact.email')}
                  </h3>
                  <a href="mailto:info@nebulahub.ai" className="text-muted-foreground">
                    info@nebulahub.ai
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* PHONE */}
            <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)]">
              <CardContent className="p-6 flex space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[hsl(215_55%_65%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('contact.phone')}
                  </h3>
                  <p className="text-muted-foreground">+995 571 33 33 03</p>
                  <p className="text-muted-foreground">+995 579 58 88 59</p>
                </div>
              </CardContent>
            </Card>

          

            {/* SOCIAL */}
            <Card className="bg-[hsl(215_45%_22%)] border-[hsl(215_55%_65%/.25)]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t('contact.social')}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/p/Nebula-AI-Hub-61573891437689/"
                    className="w-10 h-10 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center"
                  >
                    <Facebook className="h-5 w-5 text-[hsl(215_55%_65%)]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nebula-ai-hub/posts"
                    className="w-10 h-10 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center"
                  >
                    <Linkedin className="h-5 w-5 text-[hsl(215_55%_65%)]" />
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>

{/* RIGHT SIDE COLUMN */}
<div className="space-y-6">

  {/* Address Card — same style as Email/Phone */}
  <Card className="
      bg-[hsl(215_45%_22%)]
      border-[hsl(215_55%_65%/.25)]
      hover:border-[hsl(215_55%_65%/.45)]
      transition-all
    ">
    <CardContent className="p-6 flex space-x-4">

      <div className="w-12 h-12 rounded-lg bg-[hsl(215_55%_65%/.12)] flex items-center justify-center">
        <MapPin className="h-6 w-6 text-[hsl(215_55%_65%)]" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {t('contact.address')}
        </h3>

        <p className="text-muted-foreground">
          {t('contact.address.full')}
        </p>
      </div>

    </CardContent>
  </Card>

  {/* GOOGLE MAP BELOW ADDRESS — nicely aligned */}
  {/* <iframe
    title="Nebula Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23894.41190204911!2d42.6957962!3d42.2725167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d9f18f6443fdf%3A0x6b8d2d05f8e4f884!2s7PC3%2BP4F%20Kutaisi!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
    width="100%"
    height="330"
    className="rounded-xl border border-white/10 shadow-xl"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe> */}

<iframe
  title="Nebula Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23894.41190204911!2d42.6957962!3d42.2725167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d9f18f6443fdf%3A0x6b8d2d05f8e4f884!2s7PC3%2BP4F%20Kutaisi!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
  width="100%"
  height="280"
  className="
    rounded-xl
    border border-white/10
    shadow-xl
    object-cover
  "
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

</div>


        </div>
      </section>

    </div>
  );
}

