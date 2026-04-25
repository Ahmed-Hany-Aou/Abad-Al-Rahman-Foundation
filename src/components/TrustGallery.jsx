import React from 'react';
import { useTranslation } from 'react-i18next';

const CertificateCard = ({ image, title }) => (
  <div className="certificate-card">
    <div className="certificate-image">
      <img src={image} alt={title} />
    </div>
    <div className="certificate-overlay">
      <span>🔍</span>
    </div>
  </div>
);

const TrustGallery = () => {
  const { t } = useTranslation();

  const certificates = [
    { image: "/images/certificates/ministry-appreciation.jpg", title: t('trust.certTitles.ministry') },
    { image: "/images/certificates/reg-cert-1.png", title: t('trust.certTitles.reg1') },
    { image: "/images/certificates/reg-cert-2.png", title: t('trust.certTitles.reg2') },
    { image: "/images/certificates/appreciation-1.jpg", title: t('trust.certTitles.appreciation') }
  ];

  return (
    <section className="trust-section section-padding">
      <div className="container">
        <h2 className="section-title">{t('trust.title')}</h2>
        <p className="section-description">{t('trust.description')}</p>
        
        <div className="certificate-grid">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGallery;
