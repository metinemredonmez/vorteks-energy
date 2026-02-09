'use client';
import React from 'react';
import { useLanguage, Language, languageLabels } from '@/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value as Language;
    setLanguage(newLang);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      style={{
        padding: '10px 16px',
        borderRadius: '8px',
        border: '2px solid #0D47A1',
        backgroundColor: '#fff',
        color: '#0D47A1',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 600,
        outline: 'none',
        minWidth: '140px',
      }}
    >
      {(Object.keys(languageLabels) as Language[]).map((lang) => (
        <option key={lang} value={lang}>
          {languageLabels[lang].flag} {languageLabels[lang].name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
