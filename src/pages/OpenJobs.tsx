import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function OpenJobs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Resume Submission:', formData);
    toast.success('Resume submitted successfully! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Open Positions
            </h1>
            <p className="text-xl text-muted-foreground">
              At the moment, there are no open positions available.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              However, we're always looking for talented individuals. Leave your resume below and we'll contact you when suitable opportunities arise.
            </p>
          </div>

          <Card className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Submit Your Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Additional Information *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    required
                    className="bg-[hsl(var(--nebula-darker))] border-[hsl(var(--nebula-cyan)/0.2)]"
                    placeholder="Tell us about yourself, your experience, and why you'd like to work with us..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-[hsl(var(--nebula-orange))] hover:bg-[hsl(var(--nebula-orange)/0.8)] text-white shadow-glow-accent"
                >
                  {loading ? 'Submitting...' : 'Submit Resume'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
