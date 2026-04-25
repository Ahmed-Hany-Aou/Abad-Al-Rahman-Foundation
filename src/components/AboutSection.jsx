import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section" style={{ padding: '6rem 0', background: 'white' }}>
      <div className="container">
        
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2.5rem' }}>
              {t('about.title')}
            </h2>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
              {t('about.mission')}
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '2rem' }}>
              {t('about.missionText')}
            </p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
              {t('about.history')}
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
              {t('about.historyText')}
            </p>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <img 
              src={IMAGES.aboutVision} 
              alt={t('about.altEvent')} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
