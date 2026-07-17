"use client";
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
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
                <span>imsakthidev@gmail.com</span>
              </div>
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
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" className={styles.input} placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" className={styles.textarea} placeholder="How can I help you?" rows={5}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
