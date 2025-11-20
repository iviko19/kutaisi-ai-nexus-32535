
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
    name: "",
    lastname: "",
    email: "",
    phone: "",
    startupName: "",
    description: "",
    stage: "",
    team: "",
  });

  const [loading, setLoading] = useState(false);

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgybrnp", {
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
          startupName: "",
          description: "",
          stage: "",
          team: "",
        });
      } else {
        toast.error(t("form.error") || "An error occurred.");
      }
    } catch {
      toast.error("Network error. Try again later.");
    }

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

      {/* HERO */}
      <section className="py-20 mt-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="gradient-title font-inter text-5xl  font-bold leading-normal overflow-visible  whitespace-normal max-w-4xl mx-auto mb-6 animate-fade-in-up">
            {t("startups.hero.title")}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            {t("startups.hero.subtitle")}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-glow"
            onClick={() =>
              document.getElementById("application-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {t("startups.hero.cta")}
          </Button>
        </div>
      </section>

    

      {/* APPLICATION FORM */}
      <section id="application-form" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="cosmic-card p-10 rounded-2xl border border-white/10 animate-fade-in">

            <h2 className="font-inter text-3xl font-bold leading-normal overflow-visible break-words whitespace-normal text-center mb-4 text-foreground">
              {t("startups.form.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + LASTNAME */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>{t("form.name")} *</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("form.lastname")} *</Label>
                  <Input
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleChange("lastname", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>{t("form.email")} *</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("form.phone")} *</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* STARTUP NAME */}
              <div className="space-y-2">
                <Label>{t("startups.form.startupName")} *</Label>
                <Input
                  name="startupName"
                  value={formData.startupName}
                  onChange={(e) => handleChange("startupName", e.target.value)}
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div className="space-y-2">
                <Label>{t("startups.form.description")} *</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  required
                  maxLength={500}
                  className="min-h-32 resize-none"
                />
              </div>

              {/* STAGE  */}
              <div className="space-y-2">
                <Label>{t("startups.form.stage")}</Label>

                <Select
                  value={formData.stage}
                  onValueChange={(v) => handleChange("stage", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("startups.form.stagePlaceholder")} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="idea">{t("startups.stages.idea")}</SelectItem>
                    <SelectItem value="mvp">{t("startups.stages.mvp")}</SelectItem>
                    <SelectItem value="beta">{t("startups.stages.beta")}</SelectItem>
                    <SelectItem value="ready">{t("startups.stages.ready")}</SelectItem>
                  </SelectContent>
                </Select>

                {/* Hidden field for Formspree */}
                <input type="hidden" name="stage" value={formData.stage} />
              </div>

              {/* TEAM */}
              <div className="space-y-2">
                <Label>{t("startups.form.team")}</Label>
                <Textarea
                  name="team"
                  value={formData.team}
                  onChange={(e) => handleChange("team", e.target.value)}
                  className="min-h-20 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#EA8247] to-[#3D8DBC] text-white py-6 rounded-xl"
              >
                {loading ? t("form.sending") : t("form.submit")}
              </Button>

            </form>

          </div>
        </div>
      </section>
    </div>
  );

}

