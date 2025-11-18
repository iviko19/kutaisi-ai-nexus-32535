import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Wrench, Briefcase, DollarSign, Cloud, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

export default function Startups() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    startupName: '',
    description: '',
    stage: '',
    team: '',
  });

  const [loading, setLoading] = useState(false);

  // Offerings (translated)
  const offerings = [
    {
      icon: Wrench,
      title: t('startups.offerings.tech.title'),
      features: [
        t('startups.offerings.tech.feature1'),
        t('startups.offerings.tech.feature2'),
        t('startups.offerings.tech.feature3'),
      ],
    },
    {
      icon: Briefcase,
      title: t('startups.offerings.business.title'),
      features: [
        t('startups.offerings.business.feature1'),
        t('startups.offerings.business.feature2'),
        t('startups.offerings.business.feature3'),
      ],
    },
    {
      icon: DollarSign,
      title: t('startups.offerings.funding.title'),
      features: [
        t('startups.offerings.funding.feature1'),
        t('startups.offerings.funding.feature2'),
        t('startups.offerings.funding.feature3'),
      ],
    },
    {
      icon: Cloud,
      title: t('startups.offerings.infrastructure.title'),
      features: [
        t('startups.offerings.infrastructure.feature1'),
        t('startups.offerings.infrastructure.feature2'),
        t('startups.offerings.infrastructure.feature3'),
      ],
    },
    {
      icon: Users,
      title: t('startups.offerings.network.title'),
      features: [
        t('startups.offerings.network.feature1'),
        t('startups.offerings.network.feature2'),
        t('startups.offerings.network.feature3'),
      ],
    },
  ];

  // Process steps (translated)
  const process = [
    {
      step: '1',
      title: t('startups.process.step1.title'),
      desc: t('startups.process.step1.desc'),
    },
    {
      step: '2',
      title: t('startups.process.step2.title'),
      desc: t('startups.process.step2.desc'),
    },
    {
      step: '3',
      title: t('startups.process.step3.title'),
      desc: t('startups.process.step3.desc'),
    },
    {
      step: '4',
      title: t('startups.process.step4.title'),
      desc: t('startups.process.step4.desc'),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t('form.success'));

    setFormData({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      startupName: '',
      description: '',
      stage: '',
      team: '',
    });

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t('startups.hero.title')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('startups.hero.subtitle')}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() =>
              document
                .getElementById('application-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('startups.hero.cta')}
          </Button>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">

          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t('startups.offerings.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offer, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <offer.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {offer.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {offer.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t('startups.process.title')}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-nebula flex items-center justify-center text-2xl font-bold text-[hsl(var(--nebula-dark))] mx-auto mb-4">
                  {item.step}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM — IDENTICAL STYLE TO EDUCATION + BUSINESS */}
      <section id="application-form" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">

          <div
            className="
              cosmic-card
              p-10
              rounded-2xl
              border border-white/10
              hover:scale-[1.01]
              transition-transform
              duration-300
              animate-fade-in
            "
          >
            <h2 className="font-orbitron text-3xl font-bold text-center mb-4 text-foreground">
              {t('startups.form.title')}
            </h2>

          

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + LASTNAME */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('form.name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastname">{t('form.lastname')} *</Label>
                  <Input
                    id="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleChange('lastname', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))]"
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('form.phone')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))]"
                  />
                </div>
              </div>

              {/* STARTUP NAME */}
              <div className="space-y-2">
                <Label htmlFor="startupName">{t('startups.form.startupName')} *</Label>
                <Input
                  id="startupName"
                  value={formData.startupName}
                  onChange={(e) => handleChange('startupName', e.target.value)}
                  required
                  className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))]"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="space-y-2">
                <Label htmlFor="description">{t('startups.form.description')} *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  required
                  maxLength={500}
                  className="bg-[hsl(var(--nebula-darker))] border-white/20 text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-[hsl(var(--nebula-cyan))] min-h-32 resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.description.length}/500
                </p>
              </div>

              {/* STAGE DROPDOWN — copied from Education dropdown style */}
              <div className="space-y-2">
                <Label htmlFor="stage">{t('startups.form.stage')}</Label>
                <Select
                  value={formData.stage}
                  onValueChange={(v) => handleChange('stage', v)}
                >
                  <SelectTrigger
                    className="
                      bg-[hsl(var(--nebula-darker))]
                      border-white/20
                      text-foreground
                      focus:border-[hsl(var(--nebula-cyan))]
                      focus:ring-[hsl(var(--nebula-cyan))]
                    "
                  >
                    <SelectValue placeholder={t('startups.form.stagePlaceholder')} />
                  </SelectTrigger>

                  <SelectContent
                    className="
                      bg-[rgba(15,27,43,0.95)]
                      backdrop-blur-xl
                      border-white/20
                      text-foreground
                      shadow-2xl
                      z-50
                    "
                  >
                    <SelectItem
                      value="idea"
                      className="text-white hover:bg-[#EA8247]/20 data-[highlighted]:bg-[#EA8247]/20 cursor-pointer"
                    >
                      {t('startups.stages.idea')}
                    </SelectItem>

                    <SelectItem
                      value="mvp"
                      className="text-white hover:bg-[#EA8247]/20 data-[highlighted]:bg-[#EA8247]/20 cursor-pointer"
                    >
                      {t('startups.stages.mvp')}
                    </SelectItem>

                    <SelectItem
                      value="beta"
                      className="text-white hover:bg-[#EA8247]/20 data-[highlighted]:bg-[#EA8247]/20 cursor-pointer"
                    >
                      {t('startups.stages.beta')}
                    </SelectItem>

                    <SelectItem
                      value="ready"
                      className="text-white hover:bg-[#EA8247]/20 data-[highlighted]:bg-[#EA8247]/20 cursor-pointer"
                    >
                      {t('startups.stages.ready')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* TEAM */}
              <div className="space-y-2">
                <Label htmlFor="team">{t('startups.form.team')}</Label>
                <Textarea
                  id="team"
                  value={formData.team}
                  onChange={(e) => handleChange('team', e.target.value)}
                  className="
                    bg-[hsl(var(--nebula-darker))]
                    border-white/20
                    text-foreground
                    focus:border-[hsl(var(--nebula-cyan))]
                    focus:ring-[hsl(var(--nebula-cyan))]
                    min-h-20
                    resize-none
                  "
                />
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="
                  w-full
                  bg-gradient-to-r
                  from-[#EA8247]
                  to-[#3D8DBC]
                  text-white
                  font-semibold
                  py-6
                  rounded-xl
                  hover:scale-[1.02]
                  transition-all
                "
              >
                {loading ? t('form.sending') : t('form.submit')}
              </Button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
