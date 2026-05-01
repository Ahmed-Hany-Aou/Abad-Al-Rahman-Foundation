import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Heart, Copy, Check, Smartphone, Building2, Wallet,
  ChevronDown, ArrowRight, Shield, Users, Stethoscope, Home, AlertCircle
} from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// ─── PLACEHOLDER VALUES — Replace with real details from ENG Hany ───
const DONATION_CONFIG = {
  instapay: {
    ipa: 'ebad-al-rahmantestqr@instapay',       // ← REPLACE with real IPA
    name: 'ebad-al-rahmantestqr',               // ← REPLACE with account holder name
  },
  bank: {
    name_en: 'National Bank of Egypt',
    name_ar: 'البنك الأهلي المصري',
    account: '1234567890123',             // ← REPLACE with real account number
    iban: 'EG12 0003 0004 0000 1234 5678 901', // ← REPLACE with real IBAN
    branch_en: 'Al-Namrouth Branch',
    branch_ar: 'فرع النمروط',
  },
  wallet: {
    number: '01065232774',                // ← REPLACE with real wallet number
    provider: 'Vodafone Cash',
  },
  whatsapp: '201065232774',
};

/* ── Copy-to-clipboard button ── */
const CopyButton = ({ text, isRTL }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button className={`copy-btn ${copied ? 'copy-btn--copied' : ''}`} onClick={handleCopy} title={isRTL ? 'نسخ' : 'Copy'}>
      {copied ? <><Check size={14} /> {isRTL ? 'تم النسخ' : 'Copied'}</> : <><Copy size={14} /> {isRTL ? 'نسخ' : 'Copy'}</>}
    </button>
  );
};

/* ── Detail Row (label + value + copy) ── */
const DetailRow = ({ label, value, isRTL }) => (
  <div className="detail-row">
    <span className="detail-row__label">{label}</span>
    <div className="detail-row__value-wrap">
      <span className="detail-row__value">{value}</span>
      <CopyButton text={value} isRTL={isRTL} />
    </div>
  </div>
);

/* ── Step Card for InstaPay guide ── */
const StepCard = ({ number, icon: Icon, title, desc }) => (
  <motion.div
    className="step-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: number * 0.1 }}
  >
    <div className="step-card__number">{number}</div>
    <div className="step-card__icon"><Icon size={24} /></div>
    <h4 className="step-card__title">{title}</h4>
    <p className="step-card__desc">{desc}</p>
  </motion.div>
);

/* ── Impact Card ── */
const ImpactMiniCard = ({ icon: Icon, value, label, color }) => (
  <div className="impact-mini-card" style={{ '--accent': color }}>
    <div className="impact-mini-card__icon"><Icon size={22} /></div>
    <div className="impact-mini-card__value">{value}</div>
    <div className="impact-mini-card__label">{label}</div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */
const SupportPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeMethod, setActiveMethod] = useState('instapay');
  const [instapayMobile, setInstapayMobile] = useState('');
  const [instapayErrors, setInstapayErrors] = useState({});

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const methods = [
    { id: 'instapay', icon: Smartphone, label: isRTL ? 'إنستاباي' : 'InstaPay', color: '#7C3AED' },
    { id: 'bank',     icon: Building2,  label: isRTL ? 'تحويل بنكي' : 'Bank Transfer', color: '#0E183F' },
    { id: 'wallet',   icon: Wallet,     label: isRTL ? 'محفظة إلكترونية' : 'Mobile Wallet', color: '#E60000' },
  ];

  return (
    <motion.div
      className="support-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── HERO ── */}
      <section className="support-hero">
        <div className="support-hero__bg" />
        <div className="container support-hero__inner">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="support-hero__icon-wrap">
              <Heart size={40} className="support-hero__icon" />
            </div>
            <h1 className="support-hero__title">
              {isRTL ? 'ساهم في صنع الفرق' : 'Make a Difference'}
            </h1>
            <p className="support-hero__subtitle">
              {isRTL
                ? 'تبرعك يصل مباشرةً لمن يحتاجه. اختر الطريقة الأنسب لك وساهم في بناء مستقبل أفضل.'
                : 'Your donation reaches those in need directly. Choose the method that suits you and help build a better future.'}
            </p>
            <a href="#donation-methods" className="support-hero__scroll">
              <ChevronDown size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── DONATION METHODS ── */}
      <section id="donation-methods" className="support-methods section-padding">
        <div className="container">
          <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">{isRTL ? 'طرق التبرع' : 'Donation Methods'}</h2>
            <p className="section-description">
              {isRTL
                ? 'اختر الطريقة المناسبة لك — جميع التبرعات تصل فوراً'
                : 'Choose your preferred method — all donations arrive instantly'}
            </p>
          </motion.div>

          {/* Method Tabs */}
          <div className="method-tabs">
            {methods.map((m) => (
              <button
                key={m.id}
                className={`method-tab ${activeMethod === m.id ? 'method-tab--active' : ''}`}
                onClick={() => setActiveMethod(m.id)}
                style={{ '--tab-color': m.color }}
              >
                <m.icon size={20} />
                <span>{m.label}</span>
              </button>
            ))}
          </div>

          {/* Method Content */}
          <motion.div
            className="method-content"
            key={activeMethod}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* ── INSTAPAY TAB ── */}
            {activeMethod === 'instapay' && (
              <div className="method-panel method-panel--instapay">
                <div className="method-panel__header">
                  <Smartphone size={28} className="method-panel__icon" style={{ color: '#7C3AED' }} />
                  <div>
                    <h3>{isRTL ? 'التبرع عبر إنستاباي' : 'Donate via InstaPay'}</h3>
                    <p>{isRTL ? 'حوّل فوراً من أي بنك مصري' : 'Transfer instantly from any Egyptian bank'}</p>
                  </div>
                </div>

                {/* Direct Payment Link & QR */}
                <div className="instapay-direct text-center">
                  <p className="instapay-link-text">
                    {t('donation.instapay.payLink')} 
                    <a 
                      href={`https://ipn.eg/S/${DONATION_CONFIG.instapay.ipa.split('@')[0]}/instapay/6sX1HW`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="instapay-highlight-link"
                    >
                      {DONATION_CONFIG.instapay.ipa.split('@')[0]}
                    </a>
                  </p>
                  <p className="instapay-or-scan">{t('donation.instapay.orScan')}</p>
                  <div className="instapay-qr-wrapper">
                    <img 
                      src="/instapay-qr.jpeg" 
                      alt="InstaPay QR Code" 
                      style={{ width: '200px', height: '200px', objectFit: 'contain', borderRadius: '12px', border: '1px solid #e5e7eb' }} 
                    />
                  </div>
                </div>

                <div className="instapay-divider"></div>

                {/* Confirmation Form */}
                <form className="instapay-confirm-form" onSubmit={(e) => {
                  e.preventDefault();
                  const ref = e.target.elements.reference.value.trim();
                  
                  const errors = {};
                  if (!/^\d{6,20}$/.test(ref)) {
                    errors.ref = isRTL ? 'يجب أن يحتوي الرقم المرجعي على أرقام فقط (6-20 رقم)' : 'Reference must be digits only (6-20 digits)';
                  }
                  
                  if (!instapayMobile || instapayMobile.length < 8) {
                    errors.mobile = isRTL ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
                  }

                  if (Object.keys(errors).length > 0) {
                    setInstapayErrors(errors);
                    return;
                  }
                  
                  setInstapayErrors({});
                  
                  // Build WhatsApp Message
                  const sep = '-----------------------------';
                  const lines = [
                    '🌿 *تأكيد تبرع عبر إنستاباي* 🌿',
                    sep,
                    `*الرقم المرجعي:* ${ref}`,
                    `*رقم هاتف المتبرع:* ${instapayMobile}`,
                    sep,
                    isRTL ? '(يرجى إرفاق صورة الإيصال في هذه المحادثة قبل الإرسال)' : '(Please attach your receipt screenshot in this chat before sending)'
                  ];
                  
                  const text = lines.map(line => encodeURIComponent(line)).join('%0A').replace(/\*/g, '%2A');
                  const waURL = `https://api.whatsapp.com/send/?phone=${DONATION_CONFIG.whatsapp}&text=${text}`;
                  window.open(waURL, '_blank', 'noopener,noreferrer');
                }}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="reference" 
                      placeholder={t('donation.instapay.refPlaceholder')} 
                      required 
                      className={`form-input ${instapayErrors.ref ? 'input-error' : ''}`}
                      onChange={() => setInstapayErrors({ ...instapayErrors, ref: null })}
                    />
                    {instapayErrors.ref && (
                      <p className="error-msg"><AlertCircle size={14} /> {instapayErrors.ref}</p>
                    )}
                  </div>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                      {t('donation.instapay.mobileLabel')}
                    </label>
                    <div dir="ltr" style={{ width: '100%' }}>
                      <PhoneInput
                        defaultCountry="eg"
                        value={instapayMobile}
                        onChange={(phone) => {
                          setInstapayMobile(phone);
                          setInstapayErrors({ ...instapayErrors, mobile: null });
                        }}
                        style={{ width: '100%', '--react-international-phone-height': '46px', '--react-international-phone-border-radius': '8px' }}
                        inputStyle={{ width: '100%', fontSize: '0.95rem' }}
                      />
                    </div>
                    {instapayErrors.mobile && (
                      <p className="error-msg"><AlertCircle size={14} /> {instapayErrors.mobile}</p>
                    )}
                  </div>
                  <div className="whatsapp-notice">
                    <Smartphone size={16} />
                    <span>{t('donation.instapay.whatsappNote')}</span>
                  </div>
                  <button type="submit" className="btn-primary w-full mt-4" style={{ width: '100%', marginTop: '1.5rem' }}>
                    {t('donation.instapay.submit')}
                  </button>
                </form>
              </div>
            )}

            {/* ── BANK TRANSFER TAB ── */}
            {activeMethod === 'bank' && (
              <div className="method-panel method-panel--bank">
                <div className="method-panel__header">
                  <Building2 size={28} className="method-panel__icon" style={{ color: '#0E183F' }} />
                  <div>
                    <h3>{isRTL ? 'التحويل البنكي' : 'Bank Transfer'}</h3>
                    <p>{isRTL ? 'حوّل من أي فرع أو عبر الإنترنت' : 'Transfer from any branch or online banking'}</p>
                  </div>
                </div>

                <div className="bank-details">
                  <DetailRow
                    label={isRTL ? 'اسم البنك' : 'Bank Name'}
                    value={isRTL ? DONATION_CONFIG.bank.name_ar : DONATION_CONFIG.bank.name_en}
                    isRTL={isRTL}
                  />
                  <DetailRow
                    label={isRTL ? 'الفرع' : 'Branch'}
                    value={isRTL ? DONATION_CONFIG.bank.branch_ar : DONATION_CONFIG.bank.branch_en}
                    isRTL={isRTL}
                  />
                  <DetailRow
                    label={isRTL ? 'رقم الحساب' : 'Account Number'}
                    value={DONATION_CONFIG.bank.account}
                    isRTL={isRTL}
                  />
                  <DetailRow
                    label="IBAN"
                    value={DONATION_CONFIG.bank.iban}
                    isRTL={isRTL}
                  />
                </div>
              </div>
            )}

            {/* ── MOBILE WALLET TAB ── */}
            {activeMethod === 'wallet' && (
              <div className="method-panel method-panel--wallet">
                <div className="method-panel__header">
                  <Wallet size={28} className="method-panel__icon" style={{ color: '#E60000' }} />
                  <div>
                    <h3>{isRTL ? 'المحفظة الإلكترونية' : 'Mobile Wallet'}</h3>
                    <p>{isRTL ? 'حوّل عبر فودافون كاش أو أي محفظة إلكترونية' : 'Send via Vodafone Cash or any mobile wallet'}</p>
                  </div>
                </div>

                <div className="wallet-details">
                  <DetailRow
                    label={isRTL ? 'مزود الخدمة' : 'Provider'}
                    value={DONATION_CONFIG.wallet.provider}
                    isRTL={isRTL}
                  />
                  <DetailRow
                    label={isRTL ? 'رقم المحفظة' : 'Wallet Number'}
                    value={DONATION_CONFIG.wallet.number}
                    isRTL={isRTL}
                  />
                </div>

                <div className="wallet-note">
                  <Shield size={16} />
                  <span>
                    {isRTL
                      ? 'تأكد من اسم المستفيد قبل إتمام التحويل'
                      : 'Verify the recipient name before completing the transfer'}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── WHERE YOUR MONEY GOES ── */}
      <section className="support-impact section-padding">
        <div className="container">
          <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title" style={{ color: 'white' }}>
              {isRTL ? 'أين يذهب تبرعك؟' : 'Where Does Your Donation Go?'}
            </h2>
          </motion.div>

          <div className="impact-mini-grid">
            <ImpactMiniCard
              icon={Home}
              value={isRTL ? '١٣+ عائلة' : '13+ Families'}
              label={isRTL ? 'دعم شهري للأسر المحتاجة' : 'Monthly support for families in need'}
              color="#10B981"
            />
            <ImpactMiniCard
              icon={Stethoscope}
              value={isRTL ? '٢٥٠ م²' : '250 m²'}
              label={isRTL ? 'مجمع طبي قيد الإنشاء' : 'Medical complex under construction'}
              color="#3B82F6"
            />
            <ImpactMiniCard
              icon={Users}
              value={isRTL ? '٢٠,٠٠٠ ج.م' : '20,000 EGP'}
              label={isRTL ? 'مساعدات شهرية' : 'Monthly aid distributed'}
              color="#F59E0B"
            />
            <ImpactMiniCard
              icon={Heart}
              value={isRTL ? '١٠٠%' : '100%'}
              label={isRTL ? 'من تبرعك يصل للمستفيدين' : 'Of your donation reaches beneficiaries'}
              color="#EF4444"
            />
          </div>
        </div>
      </section>

      {/* ── NEED HELP? ── */}
      <section className="support-help section-padding">
        <div className="container text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3>{isRTL ? 'تحتاج مساعدة في التبرع؟' : 'Need Help Donating?'}</h3>
            <p>
              {isRTL
                ? 'تواصل معنا مباشرةً عبر واتساب وسنساعدك خطوة بخطوة'
                : 'Contact us directly on WhatsApp and we\'ll guide you step by step'}
            </p>
            <a
              href={`https://wa.me/${DONATION_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-direct"
              style={{ marginTop: '1rem' }}
            >
              <Smartphone size={20} />
              {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SupportPage;
