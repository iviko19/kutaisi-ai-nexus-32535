

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Settings, Box, Factory, Eye, Database } from 'lucide-react';
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

export default function Business() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    industry: '',
    description: '',
    budget: '',
  });
  const [loading, setLoading] = useState(false);

  // SERVICES – now fully translatable
  const services = [
    {
      icon: Search,
      title: t('business.services.audit.title'),
      features: [
        t('business.services.audit.feature1'),
        t('business.services.audit.feature2'),
        t('business.services.audit.feature3'),
        t('business.services.audit.feature4'),
      ],
    },
    {
      icon: Settings,
      title: t('business.services.automation.title'),
      features: [
        t('business.services.automation.feature1'),
        t('business.services.automation.feature2'),
        t('business.services.automation.feature3'),
        t('business.services.automation.feature4'),
      ],
    },
    {
      icon: Box,
      title: t('business.services.products.title'),
      features: [
        t('business.services.products.feature1'),
        t('business.services.products.feature2'),
        t('business.services.products.feature3'),
        t('business.services.products.feature4'),
      ],
    },
    {
      icon: Factory,
      title: t('business.services.industry.title'),
      features: [
        t('business.services.industry.feature1'),
        t('business.services.industry.feature2'),
        t('business.services.industry.feature3'),
        t('business.services.industry.feature4'),
      ],
    },
    {
      icon: Eye,
      title: t('business.services.cv.title'),
      features: [
        t('business.services.cv.feature1'),
        t('business.services.cv.feature2'),
        t('business.services.cv.feature3'),
        t('business.services.cv.feature4'),
      ],
    },
    {
      icon: Database,
      title: t('business.services.data.title'),
      features: [
        t('business.services.data.feature1'),
        t('business.services.data.feature2'),
        t('business.services.data.feature3'),
        t('business.services.data.feature4'),
      ],
    },
  ];

  // INDUSTRY OPTIONS – translatable like educationLevels
  const industryOptions = [
    { value: 'energy', label: t('business.industry.energy') },
    { value: 'finance', label: t('business.industry.finance') },
    { value: 'logistics', label: t('business.industry.logistics') },
    { value: 'aviation', label: t('business.industry.aviation') },
    { value: 'retail', label: t('business.industry.retail') },
    { value: 'healthcare', label: t('business.industry.healthcare') },
    { value: 'education', label: t('business.industry.education') },
    { value: 'other', label: t('business.industry.other') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Business Form Submission:', formData);
    toast.success(t('form.success'));

    setFormData({
      company: '',
      contact: '',
      email: '',
      phone: '',
      industry: '',
      description: '',
      budget: '',
    });
    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // split hero stats like you already had: "text1|text2"
  const [stat1, stat2] = t('business.hero.stats').split('|');

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t('business.hero.title')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            20–30% {stat1} | 40% {stat2}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() =>
              document
                .getElementById('consultation-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('business.hero.cta')}
          </Button>
        </div>
      </section>

      {/* Services Grid – can keep this look, just text now translated */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
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

      {/* Consultation Form – styled like Education application form */}
      <section id="consultation-form" className="py-24 px-4">
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
              {t('business.form.title')}
            </h2>

            <p className="text-center text-muted-foreground mb-10">
              {t('business.form.subtitle')}
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company">{t('business.form.company')} *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
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

              {/* Contact + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact">{t('business.form.contact')} *</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
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
              </div>

              {/* Phone + Industry */}
              <div className="grid md:grid-cols-2 gap-6">
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

                <div className="space-y-2">
                  <Label htmlFor="industry">{t('business.form.industry')}</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => handleChange('industry', value)}
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
                      <SelectValue
                        placeholder={t('business.form.industryPlaceholder')}
                      />
                    </SelectTrigger>
                    {/* DROPDOWN STYLE COPIED FROM EDUCATION FORM */}
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
                      {industryOptions.map(({ value, label }) => (
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
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  {t('business.form.description')} *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  required
                  className="
                    bg-[hsl(var(--nebula-darker))]
                    border-white/20
                    text-foreground
                    focus:border-[hsl(var(--nebula-cyan))]
                    focus:ring-1
                    focus:ring-[hsl(var(--nebula-cyan))]
                    min-h-32
                    resize-none
                  "
                />
              </div>

              {/* Budget (optional, but in your state) */}
              <div className="space-y-2">
                <Label htmlFor="budget">{t('business.form.budget')}</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
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

              {/* Submit Button – same as Education form */}
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
