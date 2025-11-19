import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, Plane, Radio, PenTool, Users, ExternalLink } from 'lucide-react';
import nebulaLogo from '@/assets/nebula-logo.svg';

const Solutions = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: Scale,
      title: t('solutions.legalguard.title'),
      description: t('solutions.legalguard.desc'),
      link: 'https://dev.legalguard.nebulahub.ai/',
      available: true,
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Plane,
      title: t('solutions.travelplanner.title'),
      description: t('solutions.travelplanner.desc'),
      link: '#',
      available: false,
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Radio,
      title: t('solutions.media.title'),
      description: t('solutions.media.desc'),
      link: 'https://mediamonitorai.netlify.app/',
      available: true,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: PenTool,
      title: t('solutions.contentai.title'),
      description: t('solutions.contentai.desc'),
      link: 'https://contentcreatorainebulaaihub.netlify.app/',
      available: true,
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Users,
      title: t('solutions.talentbridge.title'),
      description: t('solutions.talentbridge.desc'),
      link: '#',
      available: false,
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {t('solutions.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('solutions.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto space-y-8">
      {products.map((product, index) => {
        const Icon = product.icon;
        return (
          <Card
            key={index}
            className="cosmic-card group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Gradient hover overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
            />

            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Icon bubble */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div>
                    <CardTitle className="text-2xl font-orbitron text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>

                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {product.description}
              </CardDescription>

<Button
  asChild
  className="group/btn cosmic-button w-fit"
>
  <a
    href={product.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2"
  >
    {t('solutions.explore')}
    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
  </a>
</Button>


            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>

    </div>
  );
};

export default Solutions;
