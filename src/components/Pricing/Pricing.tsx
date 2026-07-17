"use client";
import React, { useState } from 'react';
import { Check, Info, Layout, Video } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'web' | 'content'>('content');

  return (
    <section id="pricing" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Digital Services & Pricing</h2>
          <div className={styles.line}></div>
          <p className={styles.subtitle}>
            Transparent, competitive pricing for premium digital growth solutions. 
            Select a service category below to view packages.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsWrapper}>
            <button 
              className={`${styles.tab} ${activeTab === 'web' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('web')}
            >
              <Layout size={18} /> Web Development
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'content' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <Video size={18} /> Content Creation
            </button>
          </div>
        </div>

        {/* WEB DEVELOPMENT TAB CONTENT */}
        {activeTab === 'web' && (
          <div className={styles.tabContent}>
            {/* Pricing Cards */}
            <div className={styles.cardsGrid}>
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
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

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
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

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
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

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
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h3 className={styles.sectionTitle}>Additional Web Services</h3>
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
              <h3 className={styles.sectionTitle}>Monthly Web Maintenance</h3>
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
          </div>
        )}

        {/* CONTENT CREATION TAB CONTENT */}
        {activeTab === 'content' && (
          <div className={styles.tabContent}>
            {/* Content Packages */}
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>🟢 Starter Creator</h3>
                  <div className={styles.planPrice}>₹15,000<span>/mo</span></div>
                  <p className={styles.planDesc}>Best For: Local businesses, doctors, gyms, cafes, small startups.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 8 Short Videos</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Video Editing</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Caption Writing</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic Thumbnail Design</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Calendar</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Hashtag Research</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 2 Strategy Calls</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Posting Support</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

              <div className={`${styles.card} ${styles.popularCard}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>🔵 Growth Package</h3>
                  <div className={styles.planPrice}>₹30,000<span>/mo</span></div>
                  <p className={styles.planDesc}>Best For: Personal brands and growing businesses.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 12–16 Short Videos</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 2 Long Videos (up to 10 min)</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Script Writing & Storytelling</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Professional Editing</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Custom Thumbnails</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Insta & YouTube Management</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Caption Writing & SEO</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Analytics & Weekly Strategy</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>🟣 Premium Brand</h3>
                  <div className={styles.planPrice}>₹60,000<span>/mo</span></div>
                  <p className={styles.planDesc}>Best For: CEOs, influencers, coaches, startups.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 20+ Short Videos & 4 Long Videos</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Advanced Storytelling & Research</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Premium Editing & Motion Graphics</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Complete Social Media Management</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic Community Management</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Strategy & Competitor Analysis</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Analytics Dashboard & Reports</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Unlimited Strategy Calls</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>
            </div>

            {/* Ultimate Personal Brand Package */}
            <div className={styles.ultimatePackage}>
              <div className={styles.ultimateHeader}>
                <div className={styles.ultimateBadge}>The Ultimate Solution</div>
                <h3 className={styles.ultimateTitle}>🎯 Complete Personal Brand Package</h3>
                <div className={styles.ultimatePrice}>₹75,000 – ₹1.5L <span>/ month</span></div>
                <p className={styles.ultimateDesc}>
                  A full-stack digital marketing department dedicated to scaling your personal brand across all platforms. We handle everything from ideation to publishing.
                </p>
              </div>
              <div className={styles.ultimateFeatures}>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Brand Strategy & Research</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Content Calendar</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Script Writing & Storytelling</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Recording Guidance</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Short & Long Video Editing</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Thumbnail Design & SEO</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Multi-platform Publishing</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Social Media Management</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Weekly Analytics</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Monthly Growth Strategy</div>
              </div>
            </div>

            {/* A la carte / Individual Services */}
            <div>
              <h3 className={styles.sectionTitle}>✍️ Individual Services</h3>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Short Video Editing</span>
                  <span className={styles.servicePrice}>₹800–2,500/video</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Premium Shorts Editing</span>
                  <span className={styles.servicePrice}>₹2,500–5,000/video</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Long Video (10–15 min)</span>
                  <span className={styles.servicePrice}>₹3,000–8,000/video</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Documentary Editing</span>
                  <span className={styles.servicePrice}>₹8,000–25,000/video</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Script Writing</span>
                  <span className={styles.servicePrice}>₹1,500–5,000/script</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Storytelling Script</span>
                  <span className={styles.servicePrice}>₹3,000–10,000/script</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Thumbnail Design</span>
                  <span className={styles.servicePrice}>₹500–2,000</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Brand Consult (60m)</span>
                  <span className={styles.servicePrice}>₹3,000–7,500</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>IG Management</span>
                  <span className={styles.servicePrice}>₹8k–20k/mo</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>YT Management</span>
                  <span className={styles.servicePrice}>₹12k–30k/mo</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>LinkedIn Management</span>
                  <span className={styles.servicePrice}>₹10k–25k/mo</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Content Strategy</span>
                  <span className={styles.servicePrice}>₹5k–20k</span>
                </div>
              </div>
            </div>

            {/* Bundles */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className={styles.sectionTitle}>💻 Website + Branding Bundles</h3>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Portfolio Site + 1 Mo. Content</span>
                  <span className={styles.servicePrice}>₹35,000</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Business Site + 1 Mo. Content</span>
                  <span className={styles.servicePrice}>₹60,000</span>
                </div>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceName}>Complete Brand Launch</span>
                  <span className={styles.servicePrice}>₹1,00,000+</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Payment Terms */}
        <div className={styles.termsSection}>
          <h4 className={styles.termsTitle}><Info size={20} className={styles.infoIcon} /> Payment Terms & Information</h4>
          <ul className={styles.termsList}>
            <li><Check size={16} className={styles.infoIcon} /> 50% Advance payment required to begin work.</li>
            <li><Check size={16} className={styles.infoIcon} /> 50% Remaining balance due before final delivery (or monthly in advance for retainers).</li>
            <li><Check size={16} className={styles.infoIcon} /> Free minor bug fixes included for 30 Days after launch (for websites).</li>
            <li><Check size={16} className={styles.infoIcon} /> Premium stock assets, paid AI tools, domains, hosting, and ad spend billed separately.</li>
            <li><Check size={16} className={styles.infoIcon} /> GST extra (if applicable).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
