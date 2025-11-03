import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, Clock, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+995 XXX XXX XXX\n+995 XXX XXX XXX',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@nebulaai.ge\npartnerships@nebulaai.ge\neducation@nebulaai.ge',
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: t('contact.hours.weekdays') + '\n' + t('contact.hours.weekend'),
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Contact Form Submission:', formData);
    toast.success(t('form.success'));
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
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
            {t('nav.contact')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Social Media
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center transition-all hover:scale-110 text-muted-foreground ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)] animate-scale-in">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {t('contact.form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="category">კატეგორია</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                      <SelectTrigger className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.3)]">
                        <SelectValue placeholder="აირჩიე კატეგორია" />
                      </SelectTrigger>
                      <SelectContent className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)]">
                        <SelectItem value="education">განათლება</SelectItem>
                        <SelectItem value="business">ბიზნეს სერვისები</SelectItem>
                        <SelectItem value="startups">სტარტაპ ინკუბაცია</SelectItem>
                        <SelectItem value="career">კარიერა</SelectItem>
                        <SelectItem value="partnership">პარტნიორობა</SelectItem>
                        <SelectItem value="other">სხვა</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('form.message')} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
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
        </div>
      </section>

    </div>
  );
}
