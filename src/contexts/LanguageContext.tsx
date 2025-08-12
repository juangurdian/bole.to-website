'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, detectLanguage, setLanguage } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.es) => string;
  isSpanish: boolean;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>('es');

  useEffect(() => {
    const detectedLang = detectLanguage();
    setCurrentLanguage(detectedLang);
    
    // Update HTML lang attribute on initial load
    if (typeof document !== 'undefined') {
      document.documentElement.lang = detectedLang;
    }
  }, []);

  const t = (key: keyof typeof translations.es): string => {
    return translations[language][key] || translations.es[key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setLanguage(lang);
    
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const value: LanguageContextType = {
    language,
    changeLanguage,
    t,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}