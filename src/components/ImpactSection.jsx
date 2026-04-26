import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';

const ImpactSection = () => {
  const { t } = useTranslation('home');

  const activities = [
    {
      id: 'kitchen',
      img: IMAGES.actKitchen,
      titleKey: 'activities.kitchen',
      descKey: 'activities.kitchenDesc'
    },
    {
      id: 'pharmacy',
      img: IMAGES.actPharmacy,
      titleKey: 'activities.pharmacy',
      descKey: 'activities.pharmacyDesc'
    },
    {
      id: 'medical',
      img: IMAGES.actMedical,
      titleKey: 'activities.medical',
      descKey: 'activities.medicalDesc'
    },
    {
      id: 'aid',
      img: IMAGES.actAid,
      titleKey: 'activities.aid',
      descKey: 'activities.aidDesc'
    }
  ];

  return (
    <section className="impact-section" style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ marginBottom: '1rem' }}>{t('activities.title')}</h2>
        
        <div className="impact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          marginTop: '3rem' 
        }}>
          {activities.map((act, index) => (
            <motion.div 
              key={act.id} 
              className="impact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={act.img} 
                  alt={t(act.titleKey)} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  {t(act.titleKey)}
                </h3>
                <p style={{ color: 'var(--color-text)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {t(act.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
