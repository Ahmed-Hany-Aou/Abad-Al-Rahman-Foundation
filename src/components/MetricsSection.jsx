import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, animate, useInView } from 'framer-motion';
import { Stethoscope, Utensils, Heart, Construction } from 'lucide-react';

const Counter = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
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

const MetricsSection = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      id: 'medical',
      title: t('metrics.categories.medical'),
      icon: <Stethoscope size={28} />,
      color: '#3b82f6', // blue
      items: [
        { key: 'clinics' },
        { key: 'medicalYears' },
        { key: 'pharmacyCost' }
      ]
    },
    {
      id: 'food',
      title: t('metrics.categories.food'),
      icon: <Utensils size={28} />,
      color: '#10b981', // emerald
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
      icon: <Heart size={28} />,
      color: '#ef4444', // red
      items: [
        { key: 'families' },
        { key: 'monthlyAid' },
        { key: 'totalAid' }
      ]
    },
    {
      id: 'future',
      title: t('metrics.categories.future'),
      icon: <Construction size={28} />,
      color: '#f59e0b', // amber
      items: [
        { key: 'newArea' },
        { key: 'newFloors' },
        { key: 'newUnits' }
      ]
    }
  ];

  return (
    <section className="metrics-section" style={{ 
      position: 'relative', 
      padding: '10rem 0', 
      background: '#000', 
      color: 'white',
      overflow: 'hidden'
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
          opacity: 0.4, // Subtle video background
          zIndex: 1
        }}
      >
        <source src="/assets/videos/drone-shot.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
        zIndex: 2
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <span style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '3px', 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            color: 'var(--color-primary)',
            marginBottom: '1rem',
            display: 'block'
          }}>
            {i18n.language === 'ar' ? 'أثرنا الملموس' : 'Our Tangible Impact'}
          </span>
          <h2 className="section-title" style={{ color: 'white', fontSize: '3rem' }}>
            {i18n.language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Impact in Numbers'}
          </h2>
        </motion.div>

        <div className="metrics-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {sections.map((section, sIdx) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.1, duration: 0.5 }}
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '2.5rem', 
                borderRadius: '32px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  padding: '12px', 
                  background: `${section.color}22`, 
                  borderRadius: '16px',
                  color: section.color,
                  border: `1px solid ${section.color}44`
                }}>
                  {section.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', letterSpacing: '-0.5px' }}>{section.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {section.items.map((item) => (
                  <div key={item.key} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.2rem', color: '#fff' }}>
                      <Counter 
                        value={Number(t(`metrics.${item.key}.value`))} 
                        suffix={t(`metrics.${item.key}.suffix`)} 
                      />
                    </div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.6, fontWeight: '500' }}>
                      {t(`metrics.${item.key}.label`)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
