import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    alert(t('contact.successMsg'));
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t('contact.getInTouch')}</h3>
            <p>{t('contact.info.address')}</p>
            <p>{t('contact.info.phone')}</p>
            <p>{t('contact.info.email')}</p>
            
            <div className="social-links">
              {/* Add social media icons here */}
              <a href="#">{t('social.fb')}</a>
              <a href="#">{t('social.ig')}</a>
              <a href="#">{t('social.tw')}</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">{t('contact.form.send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
