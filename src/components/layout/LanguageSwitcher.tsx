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
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          size="sm"
          className="
            bg-transparent
            text-white
            border border-white/40
            hover:bg-white/10
            px-4
            py-2
            rounded-md
            flex items-center gap-2
          "
        >
          <Globe className="h-4 w-4 text-white" />
          <span className="hidden sm:inline">{currentLang?.short}</span>
        </Button>
      </DropdownMenuTrigger>

     
      <DropdownMenuContent
        align="end"
        className="
          bg-[#0B1420]
          border border-white/30
          text-white
          rounded-md
          shadow-xl
          w-36
          z-[200]
        "
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'ka' | 'en')}
            className={`
              cursor-pointer 
              px-3 py-2 
              text-sm 
              rounded-md
              ${
                language === lang.code
                  ? "bg-[#A45A2A] text-white"
                  : "hover:bg-[#A45A2A]/60"
              }
            `}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
