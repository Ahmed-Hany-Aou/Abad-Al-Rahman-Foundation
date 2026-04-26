import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, animate, useInView } from 'framer-motion';
import { Heart, Stethoscope, Utensils, Heart as HeartIcon, Construction } from 'lucide-react';

const Counter = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const Hero = ({ onOpenDonation }) => {
  const { t, i18n } = useTranslation();

  const metricsGroups = [
    {
      id: 'medical',
      title: t('metrics.categories.medical'),
      icon: <Stethoscope size={24} />,
      color: '#3b82f6',
      items: [
        { key: 'clinics' },
        { key: 'medicalYears' },
        { key: 'pharmacyCost' }
      ]
    },
    {
      id: 'food',
      title: t('metrics.categories.food'),
      icon: <Utensils size={24} />,
      color: '#10b981',
      items: [
        { key: 'ramadanMeals' },
        { key: 'mealCost' },
        { key: 'foodYears' },
        { key: 'villages' }
      ]
    },
    {
      id: 'social',
      title: t('metrics.categories.social'),
      icon: <HeartIcon size={24} />,
      color: '#ef4444',
      items: [
        { key: 'families' },
        { key: 'monthlyAid' },
        { key: 'totalAid' }
      ]
    },
    {
      id: 'future',
      title: t('metrics.categories.future'),
      icon: <Construction size={24} />,
      color: '#f59e0b',
      items: [
        { key: 'newArea' },
        { key: 'newFloors' },
        { key: 'newUnits' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#000',
      padding: '80px 0 40px 0'
    }}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          zIndex: 1
        }}
      >
        <source src="/assets/videos/drone-shot.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0.9))',
        zIndex: 2
      }}></div>
      
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 3, width: '100%' }}
      >
        {/* Hero Text */}
        <div style={{ 
          maxWidth: '800px', 
          margin: i18n.language === 'ar' ? '0 0 4rem auto' : '0 auto 4rem 0',
          textAlign: i18n.language === 'ar' ? 'right' : 'left'
        }}>
          <motion.div variants={itemVariants} className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={16} /> <span>{t('title')}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, margin: '1rem 0' }}>
            {t('hero.title')}
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description" style={{ fontSize: '1.1rem', maxWidth: '600px', opacity: 0.9, marginBottom: '2rem' }}>
            {t('hero.description')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="btn-primary btn-glow" onClick={onOpenDonation}>
              {t('hero.supportBtn')}
            </button>
          </motion.div>
        </div>

        {/* Tall Metrics Cards Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {metricsGroups.map((group, gIdx) => (
            <motion.div 
              key={group.id}
              variants={itemVariants}
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '2rem', 
                borderRadius: '30px', 
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                minHeight: '450px'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  padding: '10px', 
                  background: `${group.color}22`, 
                  borderRadius: '12px', 
                  color: group.color,
                  border: `1px solid ${group.color}44`
                }}>
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{group.title}</h3>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {group.items.map((item, iIdx) => (
                  <div key={item.key} style={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderBottom: iIdx === group.items.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                    padding: '1rem 0'
                  }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', lineHeight: 1.2 }}>
                      <Counter value={Number(t(`metrics.${item.key}.value`))} suffix={t(`metrics.${item.key}.suffix`)} />
                    </div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.6, fontWeight: '500', marginTop: '4px' }}>
                      {t(`metrics.${item.key}.label`)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
