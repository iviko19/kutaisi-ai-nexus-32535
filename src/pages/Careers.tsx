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
    { icon: Target, title: 'რეალური AI პროექტები' },
    { icon: BookOpen, title: 'პროფესიული განვითარება' },
    { icon: Globe, title: 'საერთაშორისო პარტნიორები' },
    { icon: Users, title: 'ახალგაზრდა გუნდი' },
    { icon: Briefcase, title: 'უწყვეტი სწავლა' },
  ];

  const positions = [
    { title: 'AI/ML Engineer', type: 'სრული განაკვეთი', location: 'ქუთაისი' },
    { title: 'Data Scientist', type: 'სრული განაკვეთი', location: 'ქუთაისი' },
    { title: 'NLP Specialist', type: 'სრული განაკვეთი', location: 'ქუთაისი' },
    { title: 'Frontend Developer', type: 'სრული განაკვეთი', location: 'ქუთაისი' },
    { title: 'Business Development Manager', type: 'სრული განაკვეთი', location: 'ქუთაისი' },
    { title: 'AI Trainer/Educator', type: 'ნახევარი განაკვეთი', location: 'ქუთაისი' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Career Form Submission:', formData);
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            რატომ Nebula?
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)] hover:border-[hsl(var(--nebula-cyan))] transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{benefit.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t('careers.positions.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)] hover:border-[hsl(var(--nebula-cyan))] transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-1">
                    📍 {position.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    ⏰ {position.type}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[hsl(var(--nebula-cyan))] text-[hsl(var(--nebula-cyan))] hover:bg-[hsl(var(--nebula-cyan)/0.1)]"
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('careers.internship.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            დღეს ჩვენს კურსდამთავრებულთაგან საუკეთესოები სწორედ Nebula AI Hub-ში მუშაობენ
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              სტაჟირების პროგრამა
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              Junior პოზიციები
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              მენტორობა
            </li>
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                გააგზავნე რეზიუმე
              </CardTitle>
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
                  <Label htmlFor="position">პოზიცია *</Label>
                  <Select value={formData.position} onValueChange={(value) => handleChange('position', value)}>
                    <SelectTrigger className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectValue placeholder="აირჩიე პოზიცია" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      {positions.map((pos) => (
                        <SelectItem key={pos.title} value={pos.title}>
                          {pos.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/GitHub</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleChange('portfolio', e.target.value)}
                    placeholder="https://"
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">სამოტივაციო წერილი</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleChange('motivation', e.target.value)}
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
