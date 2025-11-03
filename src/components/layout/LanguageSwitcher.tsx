import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ka', label: '🇬🇪 ქართული', short: 'ქარ' },
    { code: 'en', label: '🇬🇧 English', short: 'ENG' },
    { code: 'ru', label: '🇷🇺 Русский', short: 'РУС' },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-[hsl(var(--nebula-cyan)/0.1)] border-[hsl(var(--nebula-cyan)/0.3)] hover:bg-[hsl(var(--nebula-cyan)/0.2)]">
          <Globe className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">{currentLang?.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[hsl(var(--nebula-dark))] border-[hsl(var(--nebula-cyan)/0.3)] z-[100]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'ka' | 'en' | 'ru')}
            className={`cursor-pointer ${
              language === lang.code
                ? 'bg-[hsl(var(--nebula-cyan)/0.2)] text-[hsl(var(--nebula-cyan))]'
                : 'hover:bg-[hsl(var(--nebula-cyan)/0.1)]'
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
