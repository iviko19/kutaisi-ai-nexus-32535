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

  const offerings = [
    {
      icon: Wrench,
      title: 'ტექნიკური მხარდაჭერა',
      features: [
        'AI პროდუქტის განვითარება',
        'ტექნოლოგიური კონსულტაციები',
        'კოდის რევიუ',
      ],
    },
    {
      icon: Briefcase,
      title: 'ბიზნეს მხარდაჭერა',
      features: [
        'ბიზნესმოდელის განვითარება',
        'ბაზარზე გასვლის სტრატეგია',
        'მომხმარებელთა მართვა',
      ],
    },
    {
      icon: DollarSign,
      title: 'დაფინანსება',
      features: [
        'თანადაფინანსება',
        'ინვესტორებთან დაკავშირება',
        'გრანტების მოძიება',
      ],
    },
    {
      icon: Cloud,
      title: 'ინფრასტრუქტურა',
      features: [
        'Cloud და GPU სერვისები',
        'სამუშაო სივრცე',
        'ტექნიკური აღჭურვილობა',
      ],
    },
    {
      icon: Users,
      title: 'ქსელი და მენტორობა',
      features: [
        'გამოცდილი მენტორები',
        'პარტნიორების ქსელი',
        'ინვესტორული კავშირები',
      ],
    },
  ];

  const process = [
    { step: '1', title: 'განაცხადის შევსება', desc: 'შეავსე განაცხადი ონლაინ' },
    { step: '2', title: 'იდეის პრეზენტაცია', desc: 'წარმოადგინე შენი იდეა გუნდთან' },
    { step: '3', title: 'შეფასება', desc: 'ექსპერტების მიერ შეფასება' },
    { step: '4', title: 'პროგრამაში მიღება', desc: 'დაიწყე მუშაობა Nebula-სთან' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Startup Form Submission:', formData);
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
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
            {t('startups.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t('startups.hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-[hsl(var(--nebula-orange))] hover:bg-[hsl(var(--nebula-orange)/0.8)] text-white text-lg px-8 glow-accent"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('startups.hero.cta')}
          </Button>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            რას გთავაზობთ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offer, index) => (
              <Card
                key={index}
                className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)] hover:border-[hsl(var(--nebula-cyan))] transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center mb-3">
                    <offer.icon className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
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

      {/* Process Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            განაცხადის პროცესი
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

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                წარადგინე შენი სტარტაპი
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">{t('form.lastname')} *</Label>
                    <Input
                      id="lastname"
                      value={formData.lastname}
                      onChange={(e) => handleChange('lastname', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startupName">სტარტაპის სახელი *</Label>
                  <Input
                    id="startupName"
                    value={formData.startupName}
                    onChange={(e) => handleChange('startupName', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">მოკლე აღწერა *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    required
                    maxLength={500}
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] min-h-32"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.description.length}/500
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stage">განვითარების ეტაპი</Label>
                  <Select value={formData.stage} onValueChange={(value) => handleChange('stage', value)}>
                    <SelectTrigger className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectValue placeholder="აირჩიე ეტაპი" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                      <SelectItem value="idea">იდეა</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="beta">Beta</SelectItem>
                      <SelectItem value="ready">Launch Ready</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team">გუნდის შემადგენლობა</Label>
                  <Textarea
                    id="team"
                    value={formData.team}
                    onChange={(e) => handleChange('team', e.target.value)}
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] min-h-20"
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
