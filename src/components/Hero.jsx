import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Activity, Users } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Hero = ({ onOpenDonation }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroBg})` }}>
      <div className="hero-bg-overlay"></div>
      <div className="hero-particles">
        {/* Decorative particles or subtle CSS animations can go here */}
      </div>
      
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <Heart size={16} /> <span>{t('title')}</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          {t('hero.title')}
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-description">
          {t('hero.description')}
        </motion.p>

        <motion.div variants={itemVariants} className="hero-actions">
          <button className="btn-primary btn-glow" onClick={onOpenDonation}>
            {t('hero.supportBtn')}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-stats">
          <div className="stat-card">
            <Activity className="stat-icon" />
            <div className="stat-info">
              <h4>{t('metrics.totalAidValue')}</h4>
              <p>{t('metrics.totalAid')}</p>
            </div>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" />
            <div className="stat-info">
              <h4>{t('metrics.beneficiariesValue')}</h4>
              <p>{t('metrics.beneficiaries')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
