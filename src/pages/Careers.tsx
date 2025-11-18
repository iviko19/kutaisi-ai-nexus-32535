import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Target, Globe, Users, BookOpen } from 'lucide-react';
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

export default function Careers() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    position: '',
    portfolio: '',
    motivation: '',
  });

  const [loading, setLoading] = useState(false);

  const benefits = [
    { icon: Target, title: t('careers.benefit.real_projects') },
    { icon: BookOpen, title: t('careers.benefit.development') },
    { icon: Globe, title: t('careers.benefit.partners') },
    { icon: Users, title: t('careers.benefit.team') },
    { icon: Briefcase, title: t('careers.benefit.learning') },
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
      position: '',
      portfolio: '',
      motivation: '',
    });

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="gradient-title text-4xl md:text-6xl font-orbitron font-bold mb-6 animate-fade-in-up">
            {t('careers.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t('careers.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {benefit.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">

          <h2 className="gradient-title text-3xl md:text-4xl font-orbitron font-bold mb-6">
            {t('careers.title')}
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>{t('careers.desc1')}</p>
            <p>{t('careers.desc2')}</p>
          </div>

          <div className="mt-10">
            <Button
              size="lg"
              className="font-space bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 rounded-md"
              onClick={() => (window.location.href = '/open-jobs')}
            >
              View Open Jobs
            </Button>
          </div>

        </div>
      </section>

      {/* Internship */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto max-w-4xl text-center">

          <h2 className="gradient-title text-3xl md:text-4xl font-orbitron font-bold mb-6">
            {t('careers.internship.title')}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {t('careers.internship.subtitle')}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              {t('careers.internship.program')}
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              {t('careers.internship.junior')}
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              {t('careers.internship.mentorship')}
            </li>
          </ul>

        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">

          <div className="cosmic-card p-10 rounded-2xl border border-white/10 animate-fade-in">

            <h2 className="font-orbitron text-3xl font-bold text-center mb-4 text-foreground">
              {t('careers.form.title')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Lastname */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>{t('form.name')} *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground"
                  />
                </div>

                <div>
                  <Label>{t('form.lastname')} *</Label>
                  <Input
                    value={formData.lastname}
                    onChange={(e) => handleChange('lastname', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>{t('form.email')} *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground"
                  />
                </div>

                <div>
                  <Label>{t('form.phone')} *</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground"
                  />
                </div>
              </div>

            
{/* Position Dropdown */}
<div className="space-y-2">
  <Label>{t('careers.form.position')} *</Label>

  <Select
    value={formData.position}
    onValueChange={(v) => handleChange('position', v)}
  >
    <SelectTrigger
      className="
        bg-[hsl(var(--nebula-darker))]
        border-white/20
        text-foreground
        focus:border-[hsl(var(--nebula-cyan))]
        focus:ring-1
        focus:ring-[hsl(var(--nebula-cyan))]
      "
    >
      <SelectValue placeholder={t('careers.form.positionPlaceholder')} />
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
      {[
        ['ai-ml', 'AI/ML Engineer'],
        ['data-scientist', 'Data Scientist'],
        ['nlp', 'NLP Specialist'],
        ['frontend', 'Frontend Developer'],
        ['business', 'Business Development Manager'],
        ['trainer', 'AI Trainer/Educator'],
      ].map(([value, label]) => (
        <SelectItem
          key={value}
          value={value}
          className="
            text-white
            hover:bg-[#EA8247]/20
            focus:bg-[#EA8247]/20
            data-[highlighted]:bg-[#EA8247]/20
            cursor-pointer
          "
        >
          {label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

              {/* Portfolio */}
              <div>
                <Label>{t('careers.form.portfolio')}</Label>
                <Input
                  value={formData.portfolio}
                  onChange={(e) => handleChange('portfolio', e.target.value)}
                  className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground"
                />
              </div>

              {/* Motivation */}
              <div>
                <Label>{t('careers.form.motivation')} *</Label>
                <Textarea
                  value={formData.motivation}
                  onChange={(e) => handleChange('motivation', e.target.value)}
                  required
                  className="bg-[hsl(var(--nebula-dark))] border-white/20 text-foreground min-h-28 resize-none"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <Label>{t('careers.form.resume')} *</Label>

                <input
                  type="file"
                  accept=".pdf"
                  required
                  className="w-full bg-[hsl(var(--nebula-dark))] border border-white/20 rounded-md p-3 text-white file:bg-[#EA8247] file:text-white file:border-none file:px-4 file:py-2 hover:file:bg-[#EA8247]/90 cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#EA8247] to-[#3D8DBC] hover:scale-[1.02] text-white font-semibold py-6 rounded-xl transition-all"
              >
                {loading ? t('careers.form.sending') : t('careers.form.submit')}
              </Button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
