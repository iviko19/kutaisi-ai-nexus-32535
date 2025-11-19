

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Target, Globe, Users, BookOpen } from 'lucide-react';
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

export default function Careers() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    motivation: "",
    resumeUploaded: "No",
  });

  const [loading, setLoading] = useState(false);

  const benefits = [
    { icon: Target, title: t("careers.benefit.real_projects") },
    { icon: BookOpen, title: t("careers.benefit.development") },
    { icon: Globe, title: t("careers.benefit.partners") },
    { icon: Users, title: t("careers.benefit.team") },
    { icon: Briefcase, title: t("careers.benefit.learning") },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpyboaw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        toast.success(t("form.success"));

        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          position: "",
          portfolio: "",
          motivation: "",
          resumeUploaded: "No",
        });
      } else {
        toast.error(t("form.error") || "Submission failed.");
      }
    } catch {
      toast.error("Network error. Try again.");
    }

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* HERO */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="gradient-title text-4xl md:text-6xl font-orbitron font-bold mb-6">
            {t("careers.hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("careers.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform"
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

      {/* APPLICATION FORM */}
      <section id="application-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">

          <div className="cosmic-card p-10 rounded-2xl border border-white/10">

            <h2 className="font-orbitron text-3xl font-bold text-center mb-4 text-foreground">
              {t("careers.form.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Lastname */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>{t("form.name")} *</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>{t("form.lastname")} *</Label>
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleChange("lastname", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>{t("form.email")} *</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>{t("form.phone")} *</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Position Dropdown */}
              <div>
                <Label>{t("careers.form.position")} *</Label>

                <Select
                  value={formData.position}
                  onValueChange={(v) => handleChange("position", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("careers.form.positionPlaceholder")} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="ai-ml">AI/ML Engineer</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="nlp">NLP Specialist</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="business">Business Development Manager</SelectItem>
                    <SelectItem value="trainer">AI Trainer/Educator</SelectItem>
                  </SelectContent>
                </Select>

                {/* Hidden for Formspree */}
                <input type="hidden" name="position" value={formData.position} />
              </div>

              {/* Portfolio */}
              <div>
                <Label>{t("careers.form.portfolio")}</Label>
                <Input
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => handleChange("portfolio", e.target.value)}
                />
              </div>

              {/* Motivation */}
              <div>
                <Label>{t("careers.form.motivation")} *</Label>
                <Textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleChange("motivation", e.target.value)}
                  required
                  className="min-h-28 resize-none"
                />
              </div>

              {/* Resume Upload — Not supported by Formspree Free */}
              <div>
                <Label>{t("careers.form.resume")} *</Label>

                <input
                  type="file"
                  accept=".pdf"
                  required
                  onChange={() => handleChange("resumeUploaded", "Yes")}
                  className="w-full bg-[hsl(var(--nebula-dark))] border border-white/20 rounded-md p-3 text-white file:bg-[#EA8247] file:text-white file:border-none file:px-4 file:py-2"
                />
              </div>

              {/* Hidden "resume uploaded" flag */}
              <input type="hidden" name="resumeUploaded" value={formData.resumeUploaded} />

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#EA8247] to-[#3D8DBC] text-white py-6 rounded-xl"
              >
                {loading ? t("careers.form.sending") : t("careers.form.submit")}
              </Button>

            </form>

          </div>
        </div>
      </section>

    </div>
  );
}
