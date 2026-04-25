import React from 'react';
import { useTranslation } from 'react-i18next';

const ImpactCard = ({ icon, value, label }) => (
  <div className="impact-card">
    <div className="impact-icon">{icon}</div>
    <div className="impact-value">{value}</div>
    <div className="impact-label">{label}</div>
  </div>
);

const ImpactSection = () => {
  const { t } = useTranslation();

  const metrics = [
    { icon: "🍱", value: "26,525", label: t('metrics.ramadanMeals') },
    { icon: "🍳", value: "3,250", label: t('metrics.weeklyMeals') },
    { icon: "📦", value: "300", label: t('metrics.foodBoxes') },
    { icon: "💰", value: "1,654,944", label: t('metrics.totalAid') },
    { icon: "👥", value: "874", label: t('metrics.beneficiaries') },
    { icon: "💊", value: "1,396", label: t('metrics.prescriptions') }
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
