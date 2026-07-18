"use client";
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');
    
    try {
      const formData = new FormData(form);
      const response = await fetch('https://formsubmit.co/ajax/sakthiispeaks@gmail.com', {
        method: 'POST',
        headers: { 
            'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h3 className={styles.subtitle}>Let's talk about your next project.</h3>
            <p className={styles.text}>
              I'm currently available for freelance work and full-time opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
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
          </div>

          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" className={styles.input} placeholder="+91 98765 43210" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="How can I help you?" rows={5} required></textarea>
              </div>
              
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <button type="submit" className={styles.submitButton} disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status && status !== 'Sending...' && (
                <p className={styles.statusMessage} style={{ marginTop: '15px', color: status.includes('successfully') ? '#10b981' : '#ef4444', fontSize: '14px', textAlign: 'center' }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className={styles.visitorCount}>
          <p>Page Views</p>
          <img src="https://api.visitorbadge.io/api/visitors?path=sakthiispeaks.vercel.app&label=VISITORS&countColor=%233b82f6" alt="Visitor Count" />
        </div>
      </div>
    </section>
  );
}
