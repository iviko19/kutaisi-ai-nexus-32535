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

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzojeaj", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        toast.success(t("form.success"));

        setFormData({
          company: '',
          contact: '',
          email: '',
          phone: '',
          industry: '',
          description: '',
          budget: '',
        });
      } else {
        toast.error(t("form.error") || "Submission failed.");
      }
    } catch {
      toast.error("Network error. Try again later.");
    }

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  
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

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* HERO */}
      <section className="py-20 mt-20 px-4">
        <div className="container mx-auto text-center">

          <h1 className="gradient-title font-inter text-6xl  font-bold leading-normal overflow-visible break-words whitespace-normal max-w-4xl mx-auto mb-6 animate-fade-in-up">
            {t('business.hero.title')}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('business.hero.stats')}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() =>
              document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('business.hero.cta')}
          </Button>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 mt-28 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

            </Card>
          ))}
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="consultation-form" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">

          <div className="cosmic-card p-10 rounded-2xl border border-white/10 animate-fade-in">

            <h2 className="font-inter text-3xl font-bold leading-normal overflow-visible break-words whitespace-normal text-center mb-4 text-foreground">
              {t('business.form.title')}
            </h2>

            <p className="text-center text-muted-foreground mb-10">
              {t('business.form.subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* COMPANY */}
              <div className="space-y-2">
                <Label>{t('business.form.company')} *</Label>
                <Input
                  name="company"
                  required
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              {/* CONTACT + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>{t('business.form.contact')} *</Label>
                  <Input
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={(e) => handleChange("contact", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t('form.email')} *</Label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>

              {/* PHONE + INDUSTRY */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <Label>{t('form.phone')} *</Label>
                  <Input
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t('business.form.industry')}</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(v) => handleChange("industry", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('business.form.industryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Hidden input for Formspree */}
                  <input type="hidden" name="industry" value={formData.industry} />
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="space-y-2">
                <Label>{t('business.form.description')} *</Label>
                <Textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>

              {/* BUDGET */}
              <div className="space-y-2">
                <Label>{t('business.form.budget')}</Label>
                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                />
              </div>

              {/* SUBMIT */}
              <Button type="submit" disabled={loading}>
                {loading ? t("form.sending") : t("form.submit")}
              </Button>

            </form>

          </div>
        </div>
      </section>

    </div>
  );
}
