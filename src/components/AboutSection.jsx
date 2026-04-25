import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>{t('about.mission')}</h3>
            <p>{t('about.missionText')}</p>
          </div>
          
          <div className="about-card">
            <h3>{t('about.history')}</h3>
            <p>{t('about.historyText')}</p>
          </div>
        </div>
        
        <div className="about-image-cta">
          <img src="/images/foundation-event.jpg" alt={t('about.altEvent')} className="about-hero-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
