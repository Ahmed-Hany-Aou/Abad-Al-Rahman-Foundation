import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'en', label: 'EN', dir: 'ltr' },
    { code: 'de', label: 'DE', dir: 'ltr' },
    { code: 'fr', label: 'FR', dir: 'ltr' },
    { code: 'es', label: 'ES', dir: 'ltr' },
    { code: 'id', label: 'ID', dir: 'ltr' }
  ];

  const changeLanguage = (lng, dir) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  };

  return (
    <div className="language-selector">
      <select 
        value={i18n.language} 
        onChange={(e) => {
          const lang = languages.find(l => l.code === e.target.value);
          changeLanguage(lang.code, lang.dir);
        }}
        className="lang-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
