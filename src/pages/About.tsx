import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: BookOpen, title: t('about.values.access') },
    { icon: Users, title: t('about.values.equality') },
    { icon: Globe, title: t('about.values.innovation') },
    { icon: Shield, title: t('about.values.ethics') },
  ];

  const partnerships = [
    { name: 'Coursera', desc: 'Official Partner - 250+ courses' },
    { name: 'Mastercard', desc: 'Financial Support' },
    { name: 'BTU', desc: '400 students program' },
    { name: 'Kutaisi International University', desc: 'Academic Partnership' },
    { name: 'Fastoo', desc: 'Career opportunities' },
    { name: 'ქუთაისის მულტიფუნქციური ცენტრი', desc: 'Base location' },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="gradient-title font-orbitron text-3xl font-bold mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.story.content')}
              </p>
            </div>
            <div className="bg-[hsl(var(--nebula-darker))] rounded-2xl h-64 md:h-96 flex items-center justify-center border border-[hsl(var(--nebula-cyan)/0.2)] animate-scale-in">
              <span className="text-muted-foreground">Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <blockquote className="gradient-title font-orbitron text-2xl md:text-4xl font-bold text-center max-w-4xl mx-auto animate-fade-in-up">
            "{t('about.mission.quote')}"
          </blockquote>
        </div>
      </section>

      
{/* Values */}
<section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
  <div className="container mx-auto">
    <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
      {t('about.values.title')}
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <Card
          key={index}
          className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <value.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{value.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Partnerships */}
<section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
  <div className="container mx-auto">
    <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
      {t('about.partnerships.title')}
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partnerships.map((partner, index) => (
        <Card
          key={index}
          className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {partner.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {partner.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
