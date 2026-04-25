import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImpactSection from './components/ImpactSection';
import LanguageSwitcher from './components/LanguageSwitcher';

// Navbar Component with Mobile Toggle
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">{t('title')}</div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => setIsOpen(false)}>{t('nav.home')}</a>
          <a href="#" onClick={() => setIsOpen(false)}>{t('nav.impact')}</a>
          <a href="#" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
          <a href="#" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <div className="hero-actions">
          <button className="btn-primary">دعمنا الآن | Support Us</button>
        </div>
      </div>
    </section>
  );
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ImpactSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 {i18n.t('title')}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
