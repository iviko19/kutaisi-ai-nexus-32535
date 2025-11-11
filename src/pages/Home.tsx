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
    'მულტიფუნქციური ცენტრი',
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-space text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="font-space text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-space bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 rounded-md"
                asChild
              >
                <Link to="/education">{t('home.hero.cta1')}</Link>
              </Button>
              <Button
                size="lg"
                className="font-space bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 rounded-md"
                asChild
              >
                <Link to="/business">{t('home.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="clean-card hover:border-primary transition-all animate-fade-in rounded-md group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-md bg-primary flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
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

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in clean-card p-8 rounded-md"
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

      {/* Partners Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('home.partners.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 clean-card rounded-md hover:border-primary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-space text-sm font-medium text-muted-foreground hover:text-foreground text-center transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-10 text-foreground tracking-tight">
            {t('home.cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-space bg-primary hover:bg-primary/90 text-primary-foreground text-base px-10 py-6 rounded-md"
              asChild
            >
              <Link to="/contact">{t('home.cta.button1')}</Link>
            </Button>
            <Button
              size="lg"
              className="font-space bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-6 rounded-md"
              asChild
            >
              <Link to="/education">{t('home.cta.button2')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
