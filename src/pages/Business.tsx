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

  const services = [
    {
      icon: Search,
      title: 'AI აუდიტი და სტრატეგია',
      features: [
        'ბიზნეს პროცესების ანალიზი',
        'AI მზადყოფნის შეფასება',
        'მორგებული სტრატეგია',
        'ROI პროგნოზირება',
      ],
    },
    {
      icon: Settings,
      title: 'ბიზნეს ოპერაციების ავტომატიზაცია',
      features: [
        'Power BI, Tableau ინტეგრაცია',
        'Asana, Jira ავტომატიზაცია',
        'დოკუმენტების გენერაცია',
        'მონაცემთა სტრუქტურიზაცია',
      ],
    },
    {
      icon: Box,
      title: 'AI პროდუქტები და SaaS',
      features: [
        'Custom GPT-ჩატბოტები ქართულ ენაზე',
        'თვითმომსახურების სისტემები',
        'დინამიკური ფასების მოდელები',
        'Text-to-Speech და Speech-to-Text',
      ],
    },
    {
      icon: Factory,
      title: 'ინდუსტრიული გადაწყვეტები',
      features: [
        'ენერგეტიკა - პროგნოზირება',
        'ფინანსები - თაღლითობის გამოვლენა',
        'ლოჯისტიკა - მარშრუტის ოპტიმიზაცია',
        'ავიაცია - ფრენის დაგეგმვა',
      ],
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      features: [
        'CCTV ინტეგრაცია',
        'ობიექტების ამოცნობა',
        'უსაფრთხოების სისტემები',
        'ხარისხის კონტროლი',
      ],
    },
    {
      icon: Database,
      title: 'მონაცემთა მენეჯმენტი',
      features: [
        'მონაცემთა ეტიკეტირება',
        'დატასეტების მომზადება',
        'მოდელების fine-tuning',
        'მონაცემთა ანალიზი',
      ],
    },
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

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          
          <h1 className="gradient-title font-orbitron text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
  {t('business.hero.title')}
</h1>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            20-30% {t('business.hero.stats').split('|')[0]} | 40% {t('business.hero.stats').split('|')[1]}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('business.hero.cta')}
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      {/* <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)] hover:border-[hsl(var(--nebula-cyan))] transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-[hsl(var(--nebula-cyan))] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

{/* Services Grid */}
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
            <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
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

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                მიიღე უფასო კონსულტაცია
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company">კომპანიის სახელი *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact">საკონტაქტო პირი *</Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">ინდუსტრია</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
                      <SelectTrigger className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                        <SelectValue placeholder="აირჩიე ინდუსტრია" />
                      </SelectTrigger>
                      <SelectContent className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                        <SelectItem value="energy">ენერგეტიკა</SelectItem>
                        <SelectItem value="finance">ფინანსები</SelectItem>
                        <SelectItem value="logistics">ლოჯისტიკა</SelectItem>
                        <SelectItem value="aviation">ავიაცია</SelectItem>
                        <SelectItem value="retail">საცალო ვაჭრობა</SelectItem>
                        <SelectItem value="healthcare">ჯანდაცვა</SelectItem>
                        <SelectItem value="education">განათლება</SelectItem>
                        <SelectItem value="other">სხვა</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">პროექტის აღწერა *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[hsl(var(--nebula-cyan))] hover:bg-[hsl(var(--nebula-cyan)/0.8)] text-[hsl(var(--nebula-dark))]"
                  disabled={loading}
                >
                  {loading ? 'იგზავნება...' : t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
