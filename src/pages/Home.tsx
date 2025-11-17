
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, BookOpen, Award, Star, Briefcase, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: '1,400+', label: t('home.stats.students'), icon: GraduationCap },
    { value: '250+', label: t('home.stats.courses'), icon: BookOpen },
    { value: 'Coursera', label: t('home.stats.coursera'), icon: Award },
    { value: 'Mastercard', label: t('home.stats.mastercard'), icon: Star },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: t('home.services.education.title'),
      description: t('home.services.education.desc'),
      link: '/education',
    },
    {
      icon: Briefcase,
      title: t('home.services.business.title'),
      description: t('home.services.business.desc'),
      link: '/business',
    },
    {
      icon: Rocket,
      title: t('home.services.startups.title'),
      description: t('home.services.startups.desc'),
      link: '/startups',
    },
  ];

  const partners = [
    'Coursera',
    'Mastercard',
    'BTU',
    'KIU',
    'Fastoo',
    'Multifunctional Center',
  ];

  return (
    <div className="min-h-screen relative">
{/* Hero Section */}
<section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center animate-fade-in">

      {/* Headline */}
      <h1 className="font-orbitron text-5xl md:text-7xl font-bold 
                     bg-gradient-to-r from-primary via-accent to-primary 
                     bg-clip-text text-transparent animate-gradient mt-8 mb-6">
        {t('solutions.hero.title')}
      </h1>

      {/* Subtitle with BIG spacing below */}
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-20">
        {t('solutions.hero.subtitle')}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

        {/* Gradient Button */}
        <a
          href="#"
          className="px-12 py-6 rounded-xl text-xl font-semibold text-white
                     bg-gradient-to-r from-[#EA8247] to-[#3D8DBC]
                     shadow-xl hover:shadow-2xl hover:-translate-y-1
                     transition-all duration-300 flex items-center gap-2"
        >
          Start Learning →
        </a>

        {/* Outline Button */}
        <a
          href="#"
          className="px-12 py-6 rounded-xl text-xl font-semibold text-[#EA8247]
                     border-2 border-[#EA8247]
                     hover:bg-[#EA8247] hover:text-white 
                     hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300"
        >
          Business Solutions
        </a>
      </div>
    </div>
  </div>
</section>
      {/* SERVICES SECTION – COSMIC STYLE */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <Card
                key={index}
                className="
                  cosmic-card 
                  h-full 
                  hover:scale-[1.03] 
                  transition-transform 
                  duration-300 
                  rounded-xl 
                  animate-fade-in
                "
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">

                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-space text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  <p className="font-space text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="font-space text-primary hover:text-primary hover:bg-secondary px-0"
                    asChild
                  >
                    <Link to={service.link}>
                      {t('home.services.learnmore')} →
                    </Link>
                  </Button>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* STATS SECTION – COSMIC STYLE */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  cosmic-card 
                  text-center 
                  p-8 
                  rounded-xl 
                  hover:scale-[1.03] 
                  transition-transform 
                  duration-300 
                  animate-scale-in
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />

                <div className="font-space text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>

                <div className="font-space text-sm text-muted-foreground">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PARTNERS SECTION – COSMIC STYLE */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">

          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t('home.partners.title')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="
                  cosmic-card 
                  flex 
                  items-center 
                  justify-center 
                  p-6 
                  rounded-xl 
                  hover:scale-[1.03] 
                  transition-transform 
                  duration-300 
                  animate-fade-in
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-space text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-center">
                  {partner}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
     {/* CTA SECTION */}
<section className="py-24 px-4">
  <div className="container mx-auto text-center">

    <h2 className="gradient-title font-orbitron text-3xl md:text-5xl font-bold mb-10">
      {t('home.cta.title')}
    </h2>

    <div className="flex flex-col sm:flex-row gap-6 justify-center">

      {/* Smaller Gradient Button */}
      <Link
        to="/contact"
        className="px-8 py-4 rounded-lg text-lg font-semibold text-white
                   bg-gradient-to-r from-[#EA8247] to-[#3D8DBC]
                   shadow-lg hover:shadow-xl hover:-translate-y-1
                   transition-all duration-300 flex items-center justify-center gap-2"
      >
        {t('home.cta.button1')} →
      </Link>

      {/* Smaller Outline Button */}
      <Link
        to="/education"
        className="px-8 py-4 rounded-lg text-lg font-semibold text-[#EA8247]
                   border-2 border-[#EA8247]
                   hover:bg-[#EA8247] hover:text-white
                   hover:shadow-lg hover:-translate-y-1
                   transition-all duration-300 flex items-center justify-center"
      >
        {t('home.cta.button2')}
      </Link>

    </div>

  </div>
</section>


    </div>
  );
}
