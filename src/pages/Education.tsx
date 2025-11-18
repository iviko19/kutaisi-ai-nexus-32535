
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';
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

export default function Education() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    program: '',
    education: '',
    interest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const programs = [
    {
      icon: Award,
      title: t('education.coursera.title'),
      features: [
        t('education.coursera.feature1'),
        t('education.coursera.feature2'),
        t('education.coursera.feature3'),
        t('education.coursera.feature4'),
      ],
    },
    {
      icon: Award,
      title: t('education.mastercard.title'),
      features: [
        t('education.mastercard.feature1'),
        t('education.mastercard.feature2'),
        t('education.mastercard.feature3'),
        t('education.mastercard.feature4'),
      ],
    },
  ];

  const educationLevels = [
    { value: 'basic', label: t('form.basic') },
    { value: 'bachelor', label: t('form.bachelor') },
    { value: 'master', label: t('form.master') },
    { value: 'phd', label: t('form.phd') },
    { value: 'other', label: t('form.other') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Education Form Submission:', formData);
    toast.success(t('form.success'));
    
    // Reset form
    setFormData({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      program: '',
      education: '',
      interest: '',
      message: '',
    });
    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t('education.hero.title')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('education.hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('education.hero.cta')}
          </Button>
        </div>
      </section>

      {/* our programs */}
      <section className="py-24 px-4">
        <div className="container mx-auto">

          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t('education.programs.title') || "Our Programs"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  cosmic-card
                  p-8
                  rounded-xl
                  hover:scale-[1.03]
                  transition-transform
                  duration-300
                  animate-fade-in
                  border border-white/10
                "
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <program.icon className="h-7 w-7" />
                </div>

                <h3 className="font-space text-2xl font-semibold mb-4 text-foreground">
                  {program.title}
                </h3>

                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Application Form */}
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
            {/* Title */}
            <h2 className="font-orbitron text-3xl font-bold text-center mb-4 text-foreground">
              {t('education.form.title')}
            </h2>

            <p className="text-center text-muted-foreground mb-10">
              {t('education.form.subtitle')}
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Lastname */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('form.name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="
                      bg-[hsl(var(--nebula-darker))]
                      border-white/20
                      text-foreground
                      focus:border-[hsl(var(--nebula-cyan))]
                      focus:ring-1
                      focus:ring-[hsl(var(--nebula-cyan))]
                    "
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastname">{t('form.lastname')} *</Label>
                  <Input
                    id="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleChange('lastname', e.target.value)}
                    required
                    className="
                      bg-[hsl(var(--nebula-darker))]
                      border-white/20
                      text-foreground
                      focus:border-[hsl(var(--nebula-cyan))]
                      focus:ring-1
                      focus:ring-[hsl(var(--nebula-cyan))]
                    "
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="
                      bg-[hsl(var(--nebula-darker))]
                      border-white/20
                      text-foreground
                      focus:border-[hsl(var(--nebula-cyan))]
                      focus:ring-1
                      focus:ring-[hsl(var(--nebula-cyan))]
                    "
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
                    className="
                      bg-[hsl(var(--nebula-darker))]
                      border-white/20
                      text-foreground
                      focus:border-[hsl(var(--nebula-cyan))]
                      focus:ring-1
                      focus:ring-[hsl(var(--nebula-cyan))]
                    "
                  />
                </div>
              </div>

              {/* Program Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="program">{t('form.program')} *</Label>
                <Select
                  value={formData.program}
                  onValueChange={(v) => handleChange('program', v)}
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
                    <SelectValue placeholder={t('form.programPlaceholder')} />
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
                      value="coursera"
                      className="
                        text-white
                        hover:bg-[#EA8247]/20
                        focus:bg-[#EA8247]/20
                        data-[highlighted]:bg-[#EA8247]/20
                        cursor-pointer
                      "
                    >
                      {t('education.coursera.title')}
                    </SelectItem>

                    <SelectItem 
                      value="mastercard"
                      className="
                        text-white
                        hover:bg-[#EA8247]/20
                        focus:bg-[#EA8247]/20
                        data-[highlighted]:bg-[#EA8247]/20
                        cursor-pointer
                      "
                    >
                      {t('education.mastercard.title')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Education Level */}
              <div className="space-y-2">
                <Label htmlFor="education">{t('form.education')}</Label>
                <Select
                  value={formData.education}
                  onValueChange={(v) => handleChange('education', v)}
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
                    <SelectValue placeholder={t('form.educationPlaceholder')} />
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
                    {educationLevels.map(({ value, label }) => (
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

              {/* Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest">{t('form.interest')}</Label>
                <Textarea
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => handleChange('interest', e.target.value)}
                  className="
                    bg-[hsl(var(--nebula-darker))]
                    border-white/20
                    text-foreground
                    focus:border-[hsl(var(--nebula-cyan))]
                    focus:ring-1
                    focus:ring-[hsl(var(--nebula-cyan))]
                    min-h-20 resize-none
                  "
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">{t('form.message')}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="
                    bg-[hsl(var(--nebula-darker))]
                    border-white/20
                    text-foreground
                    focus:border-[hsl(var(--nebula-cyan))]
                    focus:ring-1
                    focus:ring-[hsl(var(--nebula-cyan))]
                    min-h-32 resize-none
                  "
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="
                  w-full
                  bg-gradient-to-r from-[#EA8247] to-[#3D8DBC]
                  hover:scale-[1.02]
                  transition-all
                  text-white
                  font-semibold
                  py-6
                  rounded-xl
                "
                disabled={loading}
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