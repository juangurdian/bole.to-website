'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-full bg-foreground/5 p-1">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'es'
            ? 'bg-foreground text-background shadow-sm'
            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-foreground text-background shadow-sm'
            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}