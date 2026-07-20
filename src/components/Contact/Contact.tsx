"use client";
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import MagneticWrapper from '@/components/MagneticWrapper/MagneticWrapper';
import { useLanguage } from '@/context/LanguageContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { t, language } = useLanguage();
  const { user } = useAuth();

  React.useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');
    
    try {
      const formData = new FormData(form);
      
      await addDoc(collection(db, 'queries'), {
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        message: formData.get('message'),
        status: 'new',
        createdAt: serverTimestamp()
      });
      
      // Also send an email notification to the site owner
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            message: formData.get('message'),
          }),
        });
      } catch (emailError) {
        console.error("Failed to trigger email notification:", emailError);
        // We don't throw here because the Firebase save was successful
      }
      
      setStatus(t('contact.success'));
      form.reset();
    } catch (error) {
      console.error("Error submitting query:", error);
      setStatus(t('contact.error'));
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <AnimatedTitle className={styles.title} text={t('contact.title')} />
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <motion.div 
            className={styles.infoSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.subtitle}>{t('contact.subtitle')}</h3>
            <p className={styles.text}>
              {language === 'ta' ? 'நான் தற்போது ஃப்ரீலான்ஸ் மற்றும் முழுநேர வேலை வாய்ப்புகளுக்கு தயாராக உள்ளேன். உங்களுக்கு ஏதேனும் கேள்விகள் இருந்தால், தயங்காமல் தொடர்பு கொள்ளவும்!' :
               "I'm currently available for freelance work and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
            </p>

              <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <span>sakthiispeaks@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <span>+91 9585992141</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <span>Tamilnadu, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.formSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>{t('contact.name')}</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>{t('contact.email')}</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  className={styles.input} 
                  placeholder="9876543210" 
                  required 
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Please enter exactly 10 digits"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>{t('contact.message')}</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="How can I help you?" rows={5} required></textarea>
              </div>
              
              <MagneticWrapper>
                <button type="submit" className={styles.submitButton} disabled={status === 'Sending...'}>
                  {status === 'Sending...' ? 'Sending...' : t('contact.send')}
                </button>
              </MagneticWrapper>
              
              {status && status !== t('contact.sending') && (
                <p className={styles.statusMessage} style={{ marginTop: '15px', color: status === t('contact.success') ? '#10b981' : '#ef4444', fontSize: '14px', textAlign: 'center' }}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <div className={styles.footerText}>
          <p>&copy; 2026 Sakthi Speaks. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
