import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Target, Globe, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import nebulaLogo from '@/assets/nebula-logo.svg';
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
    {/* <h2 className="gradient-title text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">
      რატომ Nebula?
    </h2> */}

    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
      {benefits.map((benefit, index) => (
        <Card
          key={index}
          className="
            bg-[hsl(215_45%_22%)]
            border-[hsl(215_55%_65%/.25)]
            hover:border-[hsl(215_55%_65%/.45)]
            transition-all hover:scale-105
            animate-fade-in
          "
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6 text-center">
            <div
              className="
                w-14 h-14 rounded-xl
                bg-[hsl(215_55%_65%/.12)]
                flex items-center justify-center mx-auto mb-4
              "
            >
              <benefit.icon className="h-7 w-7 text-[hsl(215_55%_65%)]" />
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
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="gradient-title text-3xl md:text-4xl font-orbitron font-bold">
              {t('careers.title')}
            </h2>
            <img src="/src/assets/nebula-logo.svg" alt="Nebula" className="h-10" />
          </div>

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

      {/* Internship Section */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto max-w-4xl text-center">
          
          <h2 className="gradient-title text-3xl md:text-4xl font-orbitron font-bold mb-6">
            {t('careers.internship.title')}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            დღეს ჩვენს კურსდამთავრებულთაგან საუკეთესოები სწორედ Nebula AI Hub-ში მუშაობენ
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground max-w-3xl mx-auto">
            <li className="flex items-center">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              სტაჟირების პროგრამა
            </li>
            <li className="flex items-center">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              Junior პოზიციები
            </li>
            <li className="flex items-center">
              <span className="text-[hsl(var(--nebula-cyan))] mr-2">✓</span>
              მენტორობა
            </li>
          </ul>

        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          
          <Card className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)] shadow-2xl">
            
            <CardHeader className="bg-[hsl(var(--nebula-dark))] border-b border-[hsl(var(--nebula-cyan)/0.2)]">
              <CardTitle className="text-2xl text-center text-foreground">
                გააგზავნე რეზიუმე
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-8">
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastname">{t('form.lastname')} *</Label>
                    <Input
                      id="lastname"
                      value={formData.lastname}
                      onChange={(e) => handleChange('lastname', e.target.value)}
                      required
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]"
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]"
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
                      className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]"
                    />
                  </div>

                </div>

                {/* Position Selector */}
                <div className="space-y-2">
                  <Label htmlFor="position">დეველოპერი პოზიცია *</Label>

                  <Select
                    value={formData.position}
                    onValueChange={(value) => handleChange('position', value)}
                  >
                    <SelectTrigger className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]">
                      <SelectValue placeholder="აირჩიე პოზიცია" />
                    </SelectTrigger>

                    <SelectContent className="bg-[#1a2332] border-[hsl(var(--nebula-cyan)/0.2)] z-50">
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
                            bg-[#1a2332] text-white
                            data-[highlighted]:bg-orange-500
                            data-[highlighted]:text-[hsl(var(--nebula-dark))]
                            cursor-pointer
                            transition-colors
                          "
                        >
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Portfolio */}
                <div className="space-y-2">
                  <Label htmlFor="portfolio">პორტფოლიო/GitHub ლინკი</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleChange('portfolio', e.target.value)}
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))]"
                  />
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <Label htmlFor="motivation">მოტივაციური წერილი *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleChange('motivation', e.target.value)}
                    rows={5}
                    required
                    className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] text-foreground focus:border-[hsl(var(--nebula-cyan))] focus:ring-1 focus:ring-[hsl(var(--nebula-cyan))] min-h-28 resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">რეზიუმე (PDF) *</Label>

                  <input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    required
                    className="
                      w-full
                      bg-[hsl(var(--nebula-dark))]
                      border border-orange-400/50
                      text-white
                      rounded-md
                      p-3
                      focus:border-orange-400
                      focus:ring-1
                      focus:ring-orange-500
                      file:bg-orange-600
                      file:hover:bg-orange-500
                      file:text-white
                      file:border-none
                      file:px-4
                      file:py-2
                      cursor-pointer
                      transition-all
                    "
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-[hsl(var(--nebula-cyan))] hover:bg-[hsl(var(--nebula-cyan)/0.8)] text-[hsl(var(--nebula-dark))] glow-cyan"
                >
                  {loading ? 'იგზავნება...' : 'გაგზავნა'}
                </Button>

              </form>
            </CardContent>

          </Card>
        </div>
      </section>

    </div>
  );
}



