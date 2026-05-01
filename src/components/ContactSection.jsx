import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// Egyptian number → international WhatsApp format
const WHATSAPP_NUMBER = '201065232774';

// Build emojis at JS runtime via code-points (avoids file-encoding issues)
const EMOJI = {
  leaf:    String.fromCodePoint(0x1F33F), // 🌿
  person:  String.fromCodePoint(0x1F464), // 👤
  email:   String.fromCodePoint(0x1F4E7), // 📧
  phone:   String.fromCodePoint(0x1F4DE), // 📞
  speech:  String.fromCodePoint(0x1F4AC), // 💬
};

/* ── Validation rules ───────────────────────── */
const validate = (form) => {
  const errors = {};

  // Name — required, 2–60 chars, letters (Arabic + Latin) and spaces only
  if (!form.name.trim()) {
    errors.name = { ar: 'الاسم مطلوب', en: 'Name is required' };
  } else if (form.name.trim().length < 2) {
    errors.name = { ar: 'الاسم قصير جداً (2 أحرف على الأقل)', en: 'Name is too short (min 2 characters)' };
  } else if (form.name.trim().length > 60) {
    errors.name = { ar: 'الاسم طويل جداً (60 حرفاً كحد أقصى)', en: 'Name is too long (max 60 characters)' };
  } else if (!/^[\u0600-\u06FFa-zA-Z\s'-]+$/.test(form.name.trim())) {
    errors.name = { ar: 'الاسم يجب أن يحتوي على حروف فقط', en: 'Name must contain letters only' };
  }

  // Email — optional, but must be valid if provided
  if (form.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      errors.email = { ar: 'صيغة البريد الإلكتروني غير صحيحة', en: 'Invalid email address format' };
    }
  }

  // Phone — optional, but must be at least 8 chars if provided
  if (form.phone && form.phone.trim().length > 0 && form.phone.trim().length < 8) {
    errors.phone = { ar: 'رقم الهاتف يجب أن يكون صحيحاً', en: 'Must be a valid phone number' };
  }

  // Message — required, 5–1000 chars
  if (!form.message.trim()) {
    errors.message = { ar: 'الرسالة مطلوبة', en: 'Message is required' };
  } else if (form.message.trim().length < 5) {
    errors.message = { ar: 'الرسالة قصيرة جداً (5 أحرف على الأقل)', en: 'Message is too short (min 5 characters)' };
  } else if (form.message.trim().length > 1000) {
    errors.message = { ar: 'الرسالة طويلة جداً (1000 حرف كحد أقصى)', en: 'Message is too long (max 1000 characters)' };
  }

  return errors;
};

/* ── Field Error Component ───────────────────── */
const FieldError = ({ error, isRTL }) =>
  error ? (
    <span className="field-error">
      <AlertCircle size={13} />
      {isRTL ? error.ar : error.en}
    </span>
  ) : null;

/* ── Main Component ──────────────────────────── */
const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent]     = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Re-validate the touched field on change
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handlePhoneChange = (phone) => {
    setForm((prev) => ({ ...prev, phone }));
    if (touched.phone) {
      const newErrors = validate({ ...form, phone });
      setErrors((prev) => ({ ...prev, phone: newErrors.phone }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched and validate
    setTouched({ name: true, email: true, phone: true, message: true });
    const allErrors = validate(form);
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) return; // abort if invalid

    // Build WhatsApp message — Always in Arabic with emojis
    const sep = '-----------------------------';
    const lines = [
      EMOJI.leaf + ' *رسالة جديدة من موقع مؤسسة عباد الرحمن*',
      sep,
      EMOJI.person + ' *الاسم:* ' + form.name.trim(),
    ];

    if (form.email.trim()) {
      lines.push(EMOJI.email + ' *البريد:* ' + form.email.trim());
    }
    if (form.phone.trim()) {
      lines.push(EMOJI.phone + ' *الهاتف:* ' + form.phone.trim());
    }

    lines.push(sep);
    lines.push(EMOJI.speech + ' *الرسالة:*');
    lines.push(form.message.trim());

    // Build the full message, then encode it properly for WhatsApp:
    // 1. Join lines with real newlines
    // 2. encodeURIComponent handles emojis correctly (%F0%9F... sequences)
    // 3. But it doesn't encode * — we must replace * with %2A for bold to work
    const fullMessage = lines.join('\n');
    const encoded = encodeURIComponent(fullMessage).replace(/\*/g, '%2A');

    // Use api.whatsapp.com/send (more reliable for emojis than wa.me)
    const waURL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encoded}`;

    window.open(waURL, '_blank', 'noopener,noreferrer');

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTouched({});
      setErrors({});
    }, 3000);
  };

  const hasError = (field) => touched[field] && errors[field];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="contact"
      className="contact-section section-padding"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div className="section-header text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="section-title">{t('contact.title')}</h2>
        </motion.div>

        <div className="contact-grid">
          {/* ── Info Panel ── */}
          <motion.div className="contact-info" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3>{t('contact.getInTouch')}</h3>

            <div className="contact-info__item">
              <MapPin size={18} className="contact-info__icon" />
              <span>{t('contact.info.address')}</span>
            </div>

            <div className="contact-info__item">
              <Phone size={18} className="contact-info__icon" />
              <span>{t('contact.info.phone')}</span>
            </div>

            <div className="contact-info__item contact-info__item--whatsapp">
              <MessageCircle size={18} className="contact-info__icon" />
              <span>{t('contact.info.whatsapp')}</span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-direct"
            >
              <MessageCircle size={20} />
              {isRTL ? 'راسلنا مباشرةً على واتساب' : 'Chat with us on WhatsApp'}
            </a>
          </motion.div>

          {/* ── Form Panel ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <div className={`form-group ${hasError('name') ? 'form-group--error' : ''}`}>
                <label htmlFor="contact-name">
                  {t('contact.form.name')} <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={isRTL ? 'الاسم الكامل' : 'Your full name'}
                  maxLength={60}
                />
                <FieldError error={errors.name} isRTL={isRTL} />
              </div>

              {/* Email + Phone side by side */}
              <div className="form-row">
                <div className={`form-group ${hasError('email') ? 'form-group--error' : ''}`}>
                  <label htmlFor="contact-email">{t('contact.form.email')}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="example@mail.com"
                  />
                  <FieldError error={errors.email} isRTL={isRTL} />
                </div>

                <div className={`form-group ${hasError('phone') ? 'form-group--error' : ''}`}>
                  <label htmlFor="contact-phone">{t('contact.phonePlaceholder')}</label>
                  <PhoneInput
                    defaultCountry="eg"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur({ target: { name: 'phone' } })}
                    inputClassName="phone-input-field"
                    className="phone-input-container"
                  />
                  <FieldError error={errors.phone} isRTL={isRTL} />
                </div>
              </div>

              {/* Message */}
              <div className={`form-group ${hasError('message') ? 'form-group--error' : ''}`}>
                <label htmlFor="contact-message">
                  {t('contact.form.message')} <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  maxLength={1000}
                />
                <div className="form-footer-row">
                  <FieldError error={errors.message} isRTL={isRTL} />
                  <span className="char-count">{form.message.length}/1000</span>
                </div>
              </div>

              <button
                type="submit"
                className={`btn-primary btn-whatsapp-submit ${sent ? 'btn-sent' : ''}`}
                disabled={sent}
              >
                {sent ? (
                  <><CheckCircle size={20} />{isRTL ? 'تم الإرسال!' : 'Sent!'}</>
                ) : (
                  <><Send size={20} />{t('contact.form.send')}</>
                )}
              </button>

              <p className="contact-form__hint">
                {isRTL
                  ? '📲 سيفتح واتساب تلقائياً برسالتك جاهزة للإرسال'
                  : '📲 WhatsApp will open with your message ready to send'}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
