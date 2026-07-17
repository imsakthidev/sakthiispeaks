"use client";
import React from 'react';
import { Check, Info } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Website Development Pricing</h2>
          <div className={styles.line}></div>
          <p className={styles.subtitle}>
            Transparent, competitive pricing for premium web development services. 
            Choose the package that perfectly fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={styles.cardsGrid}>
          {/* Starter */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>🚀 Starter Portfolio</h3>
              <div className={styles.planPrice}>₹9,999</div>
              <p className={styles.planDesc}>Perfect for students, freelancers and professionals.</p>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 1 Responsive Landing Page</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Modern UI Design</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Mobile & Tablet Optimized</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Contact Form</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> GitHub + Vercel Deployment</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic SEO & SSL Security</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 2 Revisions</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery: 3–5 Days</li>
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>

          {/* Professional */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>💼 Professional</h3>
              <div className={styles.planPrice}>₹19,999</div>
              <p className={styles.planDesc}>Ideal for creators, engineers, doctors, and personal brands.</p>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Up to 5 Pages</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Custom UI/UX & Smooth Animations</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Resume Download & Project Showcase</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Social Media Integration</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Google Analytics & Advanced SEO</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Domain Connection & Performance Opt.</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 5 Revisions</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery: 5–7 Days</li>
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>

          {/* Business (Most Popular) */}
          <div className={`${styles.card} ${styles.popularCard}`}>
            <div className={styles.popularBadge}>Most Popular</div>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>🏢 Business</h3>
              <div className={styles.planPrice}>₹34,999</div>
              <p className={styles.planDesc}>Designed for startups and small businesses.</p>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Up to 10 Pages</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Premium UI Design</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Services, Testimonials, Gallery</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> WhatsApp & Google Maps Integration</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Blog Support & Technical SEO</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Search Console Setup</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 30 Days Support</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery: 7–14 Days</li>
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>

          {/* Premium */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>⚡ Premium</h3>
              <div className={styles.planPrice}>₹59,999<span>+</span></div>
              <p className={styles.planDesc}>For businesses requiring advanced functionality.</p>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Unlimited Pages</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Fully Custom Design</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Admin Dashboard (if required)</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Booking System & API Integration</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Auth, Database & Email Automation</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Security Hardening</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 3 Months Support</li>
              <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery: 2–6 Weeks</li>
            </ul>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className={styles.sectionTitle}>Additional Services</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Extra Page</span>
              <span className={styles.servicePrice}>₹1,500/page</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Blog Setup</span>
              <span className={styles.servicePrice}>₹4,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Domain Setup</span>
              <span className={styles.servicePrice}>₹1,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Google Analytics</span>
              <span className={styles.servicePrice}>₹1,500</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Search Console</span>
              <span className={styles.servicePrice}>₹1,500</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Pro Email Setup</span>
              <span className={styles.servicePrice}>₹2,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>WhatsApp Integration</span>
              <span className={styles.servicePrice}>₹1,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Payment Gateway</span>
              <span className={styles.servicePrice}>₹7,500</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Multilingual Website</span>
              <span className={styles.servicePrice}>₹10,000+</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Website Redesign</span>
              <span className={styles.servicePrice}>Starting ₹15,000</span>
            </div>
          </div>
        </div>

        {/* Monthly Maintenance */}
        <div>
          <h3 className={styles.sectionTitle}>Monthly Maintenance</h3>
          <div className={styles.maintenanceGrid}>
            <div className={styles.mCard}>
              <h4 className={styles.mCardTitle}>Basic</h4>
              <div className={styles.mCardPrice}>₹999<span>/mo</span></div>
              <ul className={styles.mCardList}>
                <li>Security Monitoring</li>
                <li>Monthly Backup</li>
                <li>Minor Bug Fixes</li>
              </ul>
            </div>
            <div className={styles.mCard}>
              <h4 className={styles.mCardTitle}>Standard</h4>
              <div className={styles.mCardPrice}>₹1,999<span>/mo</span></div>
              <ul className={styles.mCardList}>
                <li>Basic Plan Included</li>
                <li>Content Updates</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className={styles.mCard}>
              <h4 className={styles.mCardTitle}>Premium</h4>
              <div className={styles.mCardPrice}>₹3,999<span>/mo</span></div>
              <ul className={styles.mCardList}>
                <li>Standard Plan Included</li>
                <li>Priority Technical Support</li>
                <li>Advanced Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className={styles.termsSection}>
          <h4 className={styles.termsTitle}><Info size={20} className={styles.infoIcon} /> Payment Terms & Information</h4>
          <ul className={styles.termsList}>
            <li><Check size={16} className={styles.infoIcon} /> 50% Advance payment required to begin work.</li>
            <li><Check size={16} className={styles.infoIcon} /> 50% Remaining balance due before final delivery.</li>
            <li><Check size={16} className={styles.infoIcon} /> Free minor bug fixes included for 30 Days after launch.</li>
            <li><Check size={16} className={styles.infoIcon} /> Domain & Premium Third-Party Services are charged separately.</li>
            <li><Check size={16} className={styles.infoIcon} /> GST extra (if applicable).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
