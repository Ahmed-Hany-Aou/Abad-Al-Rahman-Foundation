import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const AboutSection = () => {
  const { t } = useTranslation('about');

  const renderBullets = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      const parts = line.split(':');
      const title = parts[0];
      const description = parts.slice(1).join(':');

      return (
        <motion.div 
          key={index} 
          className="bullet-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            marginBottom: '1rem',
            gap: '12px'
          }}
        >
          <div style={{ 
            marginTop: '6px',
            minWidth: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: 'var(--color-primary)',
            boxShadow: '0 0 10px var(--color-primary)'
          }} />
          <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.6' }}>
            {description ? (
              <>
                <strong style={{ color: 'var(--color-primary)', fontWeight: '700' }}>{title}:</strong>
                {description}
              </>
            ) : (
              line
            )}
          </p>
        </motion.div>
      );
    });
  };

  return (
    <section id="about" className="about-section" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
      <div className="container">
        
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center', marginBottom: '4rem' }}>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '3rem', fontWeight: '800' }}>
              {t('title')}
            </h2>
            <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-text)', marginBottom: '3rem', lineHeight: '1.6', borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem', opacity: 0.9 }}>
              {t('description')}
            </p>
            
            <div className="mission-box" style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={28} />
                {t('mission')}
              </h3>
              <div className="bullets-container">
                {renderBullets(t('missionText'))}
              </div>
            </div>
            
            <div className="history-box">
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={28} />
                {t('history')}
              </h3>
              <div className="bullets-container">
                {renderBullets(t('historyText'))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              borderRadius: '32px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              position: 'relative',
              height: '100%',
              minHeight: '600px'
            }}
          >
            <img 
              src={IMAGES.aboutVision} 
              alt={t('altEvent')} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
              display: 'flex',
              alignItems: 'bottom',
              padding: '2rem'
            }} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
