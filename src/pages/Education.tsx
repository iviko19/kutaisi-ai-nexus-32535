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
        'ჩატბოტების შექმნა',
        'სურათების ამოცნობა',
        'რეკომენდაციის ალგორითმები',
        'პროგნოზირებადი ანალიტიკა',
      ],
    },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
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

      {/* Programs */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)] hover:border-[hsl(var(--nebula-cyan))] transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center mb-4">
                    <program.icon className="h-7 w-7 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <CardTitle className="text-foreground">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nebula-cyan))] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                {t('education.form.title')}
              </CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                გამოგვიგზავნეთ ფორმა და დაგიკავშრდებით კურსის შემდეგ მიღებისთვის
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('form.name')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">{t('form.lastname')} *</Label>
                    <Input
                      id="lastname"
                      value={formData.lastname}
                      onChange={(e) => handleChange('lastname', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]"
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
                      className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">აირჩიე პროგრამა *</Label>
                  <Select value={formData.program} onValueChange={(value) => handleChange('program', value)}>
                    <SelectTrigger className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectValue placeholder="აირჩიე პროგრამა" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectItem value="coursera">Coursera</SelectItem>
                      <SelectItem value="mastercard">Mastercard</SelectItem>
                      <SelectItem value="btu">BTU</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">განათლების დონე</Label>
                  <Select value={formData.education} onValueChange={(value) => handleChange('education', value)}>
                    <SelectTrigger className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectValue placeholder="აირჩიე განათლების დონე" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectItem value="basic">საბაზო</SelectItem>
                      <SelectItem value="bachelor">ბაკალავრი</SelectItem>
                      <SelectItem value="master">მაგისტრი</SelectItem>
                      <SelectItem value="phd">დოქტორი</SelectItem>
                      <SelectItem value="other">სხვა</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">ინტერესის სფერო</Label>
                  <Textarea
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => handleChange('interest', e.target.value)}
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)] min-h-20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('form.message')}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)] min-h-32"
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
