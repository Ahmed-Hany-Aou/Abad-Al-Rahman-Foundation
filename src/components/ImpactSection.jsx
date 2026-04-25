import React from 'react';
import { useTranslation } from 'react-i18next';

const ImpactCard = ({ image, value, label }) => (
  <div className="impact-card">
    <div className="impact-image-container">
      <img src={image} alt={label} className="impact-img" />
    </div>
    <div className="impact-value">{value}</div>
    <div className="impact-label">{label}</div>
  </div>
);

const ImpactSection = () => {
  const { t } = useTranslation();

  const metrics = [
    { image: "/images/meals-ramadan.jpg", value: t('metrics.ramadanValue'), label: t('metrics.ramadanMeals') },
    { image: "/images/meals-weekly.jpg", value: t('metrics.weeklyValue'), label: t('metrics.weeklyMeals') },
    { image: "/images/food-boxes.jpg", value: t('metrics.boxesValue'), label: t('metrics.foodBoxes') },
    { image: "/images/medical-aid.jpg", value: t('metrics.medicalValue'), label: t('metrics.prescriptions') },
    { image: "/images/event-beneficiaries.jpg", value: t('metrics.beneficiariesValue'), label: t('metrics.beneficiaries') },
    { image: "/images/certificate-preview.png", value: t('metrics.totalAidValue'), label: t('metrics.totalAid') }
  ];

  return (
    <section className="impact-section section-padding">
      <div className="container">
        <h2 className="section-title">{t('nav.impact')}</h2>
        <div className="impact-grid">
          {metrics.map((m, i) => (
            <ImpactCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
