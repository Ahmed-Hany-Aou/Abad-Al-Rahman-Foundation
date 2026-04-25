import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants/images';

const VolunteerSection = () => {
  const { t } = useTranslation();

  return (
    <section id="volunteer" className="volunteer-section section-padding">
      <div className="container volunteer-content">
        <div className="volunteer-text">
          <h2 className="section-title">{t('volunteer.title')}</h2>
          <p>{t('volunteer.description')}</p>
          <button className="btn-primary">{t('volunteer.cta')}</button>
        </div>
        <div className="volunteer-visual">
          <img src={IMAGES.volunteerTeam} alt={t('volunteer.alt')} style={{ borderRadius: '16px' }} />
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
