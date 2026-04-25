import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImpactSection from './components/ImpactSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import TrustGallery from './components/TrustGallery';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';
import ContactSection from './components/ContactSection';
import DonationModal from './components/DonationModal';

// Navbar Component with Mobile Toggle
const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{cursor: 'pointer'}}>
          {t('title')}
        </div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t('nav.close') : t('nav.open')}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => scrollTo(e, 'home')}>{t('nav.home')}</a>
          <a href="#impact" onClick={(e) => scrollTo(e, 'impact')}>{t('nav.impact')}</a>
          <a href="#about" onClick={(e) => scrollTo(e, 'about')}>{t('nav.about')}</a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>{t('nav.contact')}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = ({ onOpenDonation }) => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onOpenDonation}>{t('hero.supportBtn')}</button>
        </div>
      </div>
    </section>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const [isDonationOpen, setIsDonationOpen] = useState(false);

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
        <Hero onOpenDonation={() => setIsDonationOpen(true)} />
        <div id="impact">
          <ImpactSection />
        </div>
        <AboutSection />
        <VolunteerSection />
        <TrustGallery />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>{t('footer.copy')} {t('title')}. {t('footer.rights')}</p>
        </div>
      </footer>
      
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </div>
  );
}

export default App;
