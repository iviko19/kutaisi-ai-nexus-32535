import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, Clock, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t, language } = useLanguage();

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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <img
              src="/src/assets/nebula-logo.svg"
              alt="Nebula Hub Logo"
              className="h-24 mx-auto mb-8"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                    <a href="mailto:info@nebulahub.ai" className="text-muted-foreground hover:text-[hsl(var(--nebula-cyan))] transition-colors">
                      info@nebulahub.ai
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>
                        <a href="tel:+995571333303" className="hover:text-[hsl(var(--nebula-cyan))] transition-colors">
                          +995 571 33 33 03
                        </a>
                      </p>
                      <p>
                        <a href="tel:+995579588859" className="hover:text-[hsl(var(--nebula-cyan))] transition-colors">
                          +995 579 58 88 59
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[hsl(var(--nebula-cyan))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {language === 'ka' ? 'მისამართი' : 'Location'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ka' ? 'ქ.ქუთაისი წმინდა ნინოს N4' : 'Kutaisi, St. Nino N4'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/p/Nebula-AI-Hub-61573891437689/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--nebula-cyan)/0.2)] transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-[hsl(var(--nebula-cyan))]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nebula-ai-hub/posts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[hsl(var(--nebula-cyan)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--nebula-cyan)/0.2)] transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[hsl(var(--nebula-cyan))]" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
