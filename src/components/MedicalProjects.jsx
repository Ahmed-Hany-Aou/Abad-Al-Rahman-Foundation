import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, animate, useInView } from 'framer-motion';
import {
  Activity, Eye, Bone, HeartPulse, Droplets,
  Stethoscope, Baby, Scissors, FlaskConical, Hospital,
  Pill, Clock, DollarSign, Construction, Building2,
  Layers, FileText, Syringe, Microscope, Users,
  HandHeart, Heart, ShieldCheck
} from 'lucide-react';
import { IMAGES } from '../constants/images';

/* ── Animated Counter ────────────────────────── */
const Counter = ({ value, suffix = '', prefix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

/* ── Main Component ──────────────────────────── */
const MedicalProjects = ({ onOpenDonation }) => {
  const { t } = useTranslation('projects');

  /* ─ Data: upcoming centers ─ */
  const upcomingCenters = [
    { id: 'radiology', icon: <Activity size={28} />, titleKey: 'radiology', descKey: 'radiologyDesc' },
    { id: 'eye',       icon: <Eye size={28} />,      titleKey: 'eye',       descKey: 'eyeDesc' },
    { id: 'physical',  icon: <Bone size={28} />,     titleKey: 'physical',  descKey: 'physicalDesc' },
    { id: 'icu',       icon: <HeartPulse size={28} />, titleKey: 'icu',     descKey: 'icuDesc' },
    { id: 'dialysis',  icon: <Droplets size={28} />, titleKey: 'dialysis',  descKey: 'dialysisDesc' },
  ];

  /* ─ Data: existing complex services ─ */
  const complexServices = [
    { icon: <Baby size={20} />,          key: 'complexService1' },
    { icon: <Scissors size={20} />,      key: 'complexService2' },
    { icon: <FlaskConical size={20} />,  key: 'complexService3' },
    { icon: <Hospital size={20} />,      key: 'complexService4' },
    { icon: <Stethoscope size={20} />,   key: 'complexService5' },
  ];

  /* ─ Data: annual impact metrics ─ */
  const impactMetrics = [
    { value: 1396,   label: 'impactPrescriptions',     icon: <FileText size={24} />,   color: '#3b82f6' },
    { value: 646885, label: 'impactPrescriptionsCost',  icon: <DollarSign size={24} />, color: '#10b981', prefix: '', suffix: ` ${t('impactEGP')}` },
    { value: 55,     label: 'impactSurgeries',          icon: <Syringe size={24} />,    color: '#ef4444' },
    { value: 69500,  label: 'impactSurgeriesCost',      icon: <DollarSign size={24} />, color: '#f59e0b', suffix: ` ${t('impactEGP')}` },
    { value: 105,    label: 'impactLabTests',            icon: <Microscope size={24} />, color: '#8b5cf6' },
    { value: 38890,  label: 'impactLabTestsCost',        icon: <DollarSign size={24} />, color: '#06b6d4', suffix: ` ${t('impactEGP')}` },
    { value: 4,      label: 'impactIncubator',           icon: <Baby size={24} />,       color: '#ec4899' },
    { value: 13,     label: 'impactIncubatorPartial',    icon: <Baby size={24} />,       color: '#f472b6' },
    { value: 171,    label: 'impactPhysioSessions',      icon: <Bone size={24} />,       color: '#14b8a6' },
    { value: 235,    label: 'impactConsultations',        icon: <Stethoscope size={24} />,color: '#6366f1' },
    { value: 874,    label: 'impactBeneficiaries',        icon: <Users size={24} />,      color: '#f97316' },
    { value: 1654944, label: 'impactTotalAid',            icon: <HandHeart size={24} />,  color: '#22c55e', suffix: ` ${t('impactEGP')}` },
  ];

  /* ─ Framer Motion Variants ─ */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="medical-projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ═══════ 1. PAGE HERO ═══════ */}
      <section className="projects-hero">
        <div className="projects-hero__overlay" />
        <div className="projects-hero__content container">
          <motion.span className="projects-hero__badge" variants={fadeUp} initial="hidden" animate="visible">
            <ShieldCheck size={16} /> {t('heroBadge')}
          </motion.span>
          <motion.h1 className="projects-hero__title" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            {t('heroHeading')}
          </motion.h1>
          <motion.p className="projects-hero__desc" variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            {t('heroDescription')}
          </motion.p>
        </div>
      </section>

      {/* ═══════ 2. EXISTING SERVICES ═══════ */}
      <section className="projects-existing section-padding">
        <div className="container">
          <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">{t('existingTitle')}</h2>
            <p className="section-description">{t('existingSubtitle')}</p>
          </motion.div>

          <div className="projects-existing__grid">
            {/* Medical Complex Card */}
            <motion.div className="service-showcase" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="service-showcase__img-wrap">
                <img src={IMAGES.medicalProjectsFeature} alt={t('complexTitle')} className="service-showcase__img" />
                <div className="service-showcase__years-badge">
                  <Clock size={16} /> {t('complexYears')}
                </div>
              </div>
              <div className="service-showcase__body">
                <div className="service-showcase__icon-row">
                  <div className="service-showcase__icon" style={{ background: '#3b82f622', color: '#3b82f6' }}>
                    <Hospital size={28} />
                  </div>
                  <h3 className="service-showcase__title">{t('complexTitle')}</h3>
                </div>
                <p className="service-showcase__desc">{t('complexDesc')}</p>
                <ul className="service-showcase__list">
                  {complexServices.map((s) => (
                    <li key={s.key}>
                      <span className="service-showcase__list-icon">{s.icon}</span>
                      {t(s.key)}
                    </li>
                  ))}
                </ul>
                <p className="service-showcase__tagline">{t('complexTagline')}</p>
              </div>
            </motion.div>

            {/* Pharmacy Card */}
            <motion.div className="service-showcase" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
              <div className="service-showcase__img-wrap">
                <img src={IMAGES.pharmacyInterior} alt={t('pharmacyTitle')} className="service-showcase__img" />
                <div className="service-showcase__years-badge" style={{ background: 'rgba(16,185,129,0.9)' }}>
                  <Clock size={16} /> {t('pharmacyYears')}
                </div>
              </div>
              <div className="service-showcase__body">
                <div className="service-showcase__icon-row">
                  <div className="service-showcase__icon" style={{ background: '#10b98122', color: '#10b981' }}>
                    <Pill size={28} />
                  </div>
                  <h3 className="service-showcase__title">{t('pharmacyTitle')}</h3>
                </div>
                <p className="service-showcase__desc">{t('pharmacyDesc')}</p>
                <div className="service-showcase__stat-row">
                  <div className="service-showcase__stat">
                    <DollarSign size={18} />
                    <span>{t('pharmacyCost')}</span>
                  </div>
                </div>
                <p className="service-showcase__tagline">{t('pharmacyTagline')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. ANNUAL IMPACT DASHBOARD ═══════ */}
      <section className="projects-impact section-padding">
        <div className="container">
          <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title" style={{ color: 'white' }}>{t('impactTitle')}</h2>
            <p className="section-description" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('impactSubtitle')}</p>
          </motion.div>

          <motion.div className="impact-metrics-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            {impactMetrics.map((metric) => (
              <motion.div key={metric.label} className="impact-metric-card" variants={fadeUp}>
                <div className="impact-metric-card__icon" style={{ background: `${metric.color}18`, color: metric.color, border: `1px solid ${metric.color}33` }}>
                  {metric.icon}
                </div>
                <div className="impact-metric-card__value">
                  <Counter value={metric.value} suffix={metric.suffix || ''} prefix={metric.prefix || ''} />
                </div>
                <div className="impact-metric-card__label">{t(metric.label)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ 4. UPCOMING PROJECT ═══════ */}
      <section className="projects-upcoming section-padding">
        <div className="container">
          <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">{t('upcomingTitle')}</h2>
            <p className="section-description">{t('upcomingSubtitle')}</p>
          </motion.div>

          {/* Building info banner */}
          <motion.div className="upcoming-banner" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="upcoming-banner__img-wrap">
              <img src={IMAGES.newComplexRender} alt={t('upcomingHeading')} className="upcoming-banner__img" />
              <div className="upcoming-banner__badge">
                <Construction size={16} /> {t('upcomingBadge')}
              </div>
            </div>
            <div className="upcoming-banner__body">
              <h3 className="upcoming-banner__title">{t('upcomingHeading')}</h3>
              <p className="upcoming-banner__desc">{t('upcomingDesc')}</p>
              <div className="upcoming-banner__specs">
                <div className="upcoming-banner__spec">
                  <Building2 size={20} />
                  <span>{t('upcomingArea')}</span>
                </div>
                <div className="upcoming-banner__spec">
                  <Layers size={20} />
                  <span>{t('upcomingFloors')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5 Center cards */}
          <motion.div className="upcoming-centers-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            {upcomingCenters.map((center) => (
              <motion.div key={center.id} className="upcoming-center-card" variants={fadeUp}>
                <div className="upcoming-center-card__icon">
                  {center.icon}
                </div>
                <h4 className="upcoming-center-card__title">{t(center.titleKey)}</h4>
                <p className="upcoming-center-card__desc">{t(center.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ 5. CTA BANNER ═══════ */}
      <section className="projects-cta">
        <div className="container">
          <motion.div className="projects-cta__inner" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Heart size={40} className="projects-cta__icon" />
            <h2 className="projects-cta__title">{t('ctaTitle')}</h2>
            <p className="projects-cta__desc">{t('ctaDescription')}</p>
            <button className="btn-primary btn-glow" onClick={onOpenDonation}>
              {t('ctaButton')}
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MedicalProjects;
