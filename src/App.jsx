import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ImpactSection from './components/ImpactSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import TrustGallery from './components/TrustGallery';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';
import ContactSection from './components/ContactSection';
import DonationModal from './components/DonationModal';
import MedicalProjects from './components/MedicalProjects';
import Hero from './components/Hero';
import SupportPage from './components/SupportPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Navbar Component with Mobile Toggle and Router Links
const Navbar = ({ onOpenDonation }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          {t('title')}
        </Link>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t('nav.close') : t('nav.open')}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>{t('nav.home')}</Link>
          <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
          <Link to="/projects" onClick={handleLinkClick}>{t('nav.projects')}</Link>
          <Link to="/volunteer" onClick={handleLinkClick}>{t('volunteer.title')}</Link>
          <Link to="/contact" onClick={handleLinkClick}>{t('nav.contact')}</Link>
          <Link to="/support" className="btn-donate-nav" onClick={handleLinkClick}>
            {t('nav.support')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar onOpenDonation={() => setIsDonationOpen(true)} />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero onOpenDonation={() => setIsDonationOpen(true)} />
                  <ImpactSection />
                  <TrustGallery />
                </>
              } />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/projects" element={<MedicalProjects onOpenDonation={() => setIsDonationOpen(true)} />} />
              <Route path="/volunteer" element={<VolunteerSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </AnimatePresence>
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
    </Router>
  );
}

export default App;
