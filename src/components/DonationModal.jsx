import React from 'react';
import { useTranslation } from 'react-i18next';

const DonationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">{t('donation.title')}</h2>
        <p className="modal-description">{t('donation.description')}</p>
        
        <div className="donation-details">
          <h3>{t('donation.bankDetails')}</h3>
          <p><strong>{t('donation.bankName')}</strong></p>
          <p>{t('donation.accountNumber')}</p>
        </div>
        
        <div className="modal-actions">
          <button className="btn-primary" onClick={onClose}>{t('donation.close')}</button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
