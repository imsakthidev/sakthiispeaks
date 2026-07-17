"use client";
import React, { useState } from 'react';
import { Check, Info, Layout, Video, PenTool, Share2, Bot, Rocket } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'web' | 'video' | 'content' | 'social' | 'ai' | 'growth'>('web');

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

        {/* 6-Tab Navigation */}
        <div className={styles.tabsScrollWrapper}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsWrapper}>
              <button className={`${styles.tab} ${activeTab === 'web' ? styles.activeTab : ''}`} onClick={() => setActiveTab('web')}>
                <Layout size={18} /> Web Dev
              </button>
              <button className={`${styles.tab} ${activeTab === 'video' ? styles.activeTab : ''}`} onClick={() => setActiveTab('video')}>
                <Video size={18} /> Video Editing
              </button>
              <button className={`${styles.tab} ${activeTab === 'content' ? styles.activeTab : ''}`} onClick={() => setActiveTab('content')}>
                <PenTool size={18} /> Content & Story
              </button>
              <button className={`${styles.tab} ${activeTab === 'social' ? styles.activeTab : ''}`} onClick={() => setActiveTab('social')}>
                <Share2 size={18} /> Social & Brand
              </button>
              <button className={`${styles.tab} ${activeTab === 'ai' ? styles.activeTab : ''}`} onClick={() => setActiveTab('ai')}>
                <Bot size={18} /> AI Services
              </button>
              <button className={`${styles.tab} ${activeTab === 'growth' ? styles.activeTab : ''}`} onClick={() => setActiveTab('growth')}>
                <Rocket size={18} /> Growth Kits
              </button>
            </div>
          </div>
        </div>

        {/* 1. WEB DEVELOPMENT TAB */}
        {activeTab === 'web' && (
          <div className={styles.tabContent}>
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>🚀 Starter Website</h3>
                  <div className={styles.planPrice}>₹9,999</div>
                  <p className={styles.planDesc}>Perfect for individuals and freelancers.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Responsive 1 Landing Page</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Modern UI Design & Mobile Opt.</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Contact Form & SSL Security</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> GitHub + Vercel Deployment</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic SEO & Perf. Opt.</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 2 Revisions</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery in 3–5 Days</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>💼 Professional Website</h3>
                  <div className={styles.planPrice}>₹19,999</div>
                  <p className={styles.planDesc}>Perfect for professionals and personal brands.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Up to 5 Pages (Premium UI/UX)</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Resume, Portfolio & Gallery</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Blog Setup & Contact Form</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Domain Config & Advanced SEO</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Google Analytics & Search Console</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 5 Revisions</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery in 5–7 Days</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

              <div className={`${styles.card} ${styles.popularCard}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>🏢 Business Website</h3>
                  <div className={styles.planPrice}>₹34,999</div>
                  <p className={styles.planDesc}>Ideal for companies and startups.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Up to 10 Pages (Premium Design)</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Services, Team, Testimonials</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> WhatsApp & Google Maps</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Blog, Analytics & Search Console</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Technical SEO & Speed Opt.</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 30 Days Support</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Delivery in 7–14 Days</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>⚡ Enterprise Website</h3>
                  <div className={styles.planPrice}>₹59,999<span>+</span></div>
                  <p className={styles.planDesc}>Fully custom, advanced web applications.</p>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Unlimited Pages (Custom Design)</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Admin Dashboard & Database</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Booking System & Authentication</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Payment Gateway & API Integration</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Email Auto, Security & Animations</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 3 Months Support</li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>Get Started</a>
              </div>
            </div>
          </div>
        )}

        {/* 2. VIDEO EDITING TAB */}
        {activeTab === 'video' && (
          <div className={styles.tabContent}>
            
            <h3 className={styles.sectionTitle}>📱 Shorts Editing</h3>
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Basic Shorts</h3>
                  <div className={styles.planPrice}>₹800<span>/video</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Cuts & Trimming</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Standard Captions</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Background Music</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic Color Correction</li>
                </ul>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Pro Shorts</h3>
                  <div className={styles.planPrice}>₹2,000<span>/video</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Motion Graphics</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Sound Design</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Premium Captions</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> AI Effects & Color Grading</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Hook Optimization</li>
                </ul>
              </div>
              <div className={`${styles.card} ${styles.popularCard}`}>
                <div className={styles.popularBadge}>Best For Growth</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Viral Shorts</h3>
                  <div className={styles.planPrice}>₹4,000<span>/video</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Research & Storytelling</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Viral Structure Planning</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Premium Motion Graphics</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Advanced Editing & VFX</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Custom Thumbnail Included</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.sectionTitle} style={{marginTop: '2rem'}}>🎥 Long Form Editing</h3>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>5–10 Minutes Video</span>
                <span className={styles.servicePrice}>₹3,500/video</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>10–20 Minutes Video</span>
                <span className={styles.servicePrice}>₹6,000/video</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>Documentary Style</span>
                <span className={styles.servicePrice}>₹10,000–25,000/video</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>Podcast Editing</span>
                <span className={styles.servicePrice}>₹5,000/video</span>
              </div>
            </div>

          </div>
        )}

        {/* 3. CONTENT & STORYTELLING TAB */}
        {activeTab === 'content' && (
          <div className={styles.tabContent}>
            <div className={styles.twoColumnLayout}>
              <div>
                <h3 className={styles.sectionTitle}>✍️ Content Writing</h3>
                <div className={styles.servicesGrid} style={{gridTemplateColumns: '1fr'}}>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Instagram Caption</span>
                    <span className={styles.servicePrice}>₹300</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>LinkedIn Post</span>
                    <span className={styles.servicePrice}>₹700</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Blog Article (1000 words)</span>
                    <span className={styles.servicePrice}>₹2,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Website Content</span>
                    <span className={styles.servicePrice}>₹5,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Product Description</span>
                    <span className={styles.servicePrice}>₹500</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Email Copywriting</span>
                    <span className={styles.servicePrice}>₹1,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Sales Landing Page</span>
                    <span className={styles.servicePrice}>₹7,500</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={styles.sectionTitle}>📖 Storytelling Scripts</h3>
                <div className={styles.servicesGrid} style={{gridTemplateColumns: '1fr'}}>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>60-sec Story Script</span>
                    <span className={styles.servicePrice}>₹2,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>3–5 min Story</span>
                    <span className={styles.servicePrice}>₹4,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>10 min Documentary Script</span>
                    <span className={styles.servicePrice}>₹8,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Brand Story</span>
                    <span className={styles.servicePrice}>₹10,000</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceName}>Founder Story</span>
                    <span className={styles.servicePrice}>₹12,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. SOCIAL MEDIA & BRANDING TAB */}
        {activeTab === 'social' && (
          <div className={styles.tabContent}>
            
            <h3 className={styles.sectionTitle}>📱 Social Media Management</h3>
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Starter</h3>
                  <div className={styles.planPrice}>₹15,000<span>/mo</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 12 Posts</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Caption Writing</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Posting & Hashtag Research</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Monthly Report</li>
                </ul>
              </div>
              <div className={`${styles.card} ${styles.popularCard}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Growth</h3>
                  <div className={styles.planPrice}>₹30,000<span>/mo</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 20 Posts & 8 Reels</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Story Management</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Community Replies</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Calendar</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Analytics & Strategy Meeting</li>
                </ul>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Premium</h3>
                  <div className={styles.planPrice}>₹60,000<span>/mo</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Daily Posting (Reels & Long Vids)</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Community Management</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Strategy & Competitor Analysis</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Analytics Dashboard</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Monthly Growth Report</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.sectionTitle} style={{marginTop: '3rem'}}>🎯 Personal Branding</h3>
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Starter</h3>
                  <div className={styles.planPrice}>₹20,000<span>/mo</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Brand Strategy</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Planning</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 8 Reels</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 4 Posts</li>
                </ul>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Professional</h3>
                  <div className={styles.planPrice}>₹45,000<span>/mo</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Strategy</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 16 Reels & 4 Long Videos</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Script Writing & Storytelling</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Thumbnails & SEO</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.ultimatePackage} style={{marginTop: '2rem'}}>
              <div className={styles.ultimateHeader}>
                <div className={styles.ultimateBadge}>The Ultimate Solution</div>
                <h3 className={styles.ultimateTitle}>Complete Brand Management</h3>
                <div className={styles.ultimatePrice}>₹75,000 – ₹1.5L <span>/ month</span></div>
              </div>
              <div className={styles.ultimateFeatures}>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Brand Positioning & Strategy</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> In-Depth Research</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Script Writing & Storytelling</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Recording Guidance</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Video Editing & Thumbnails</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Publishing & Analytics</div>
                <div className={styles.uFeature}><Check size={20} className={styles.checkIcon} /> Monthly Consultation</div>
              </div>
            </div>
          </div>
        )}

        {/* 5. AI SERVICES TAB */}
        {activeTab === 'ai' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>🤖 AI Services & Integrations</h3>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>AI Workflow Setup</span>
                <span className={styles.servicePrice}>₹10,000</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>ChatGPT Integration</span>
                <span className={styles.servicePrice}>₹15,000</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>AI Content Automation</span>
                <span className={styles.servicePrice}>₹20,000</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>Custom AI Assistant</span>
                <span className={styles.servicePrice}>₹25,000+</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>Prompt Engineering</span>
                <span className={styles.servicePrice}>₹5,000</span>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceName}>AI Consultation (1 Hour)</span>
                <span className={styles.servicePrice}>₹3,000</span>
              </div>
            </div>
          </div>
        )}

        {/* 6. GROWTH PACKAGES TAB */}
        {activeTab === 'growth' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>🚀 Digital Growth Kits (Web + Content)</h3>
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Creator Launch Kit</h3>
                  <div className={styles.planPrice}>₹35,000</div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Portfolio Website</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Branding & Logo Placement</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 8 Reels Included</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Initial SEO Setup</li>
                </ul>
              </div>

              <div className={`${styles.card} ${styles.popularCard}`}>
                <div className={styles.popularBadge}>Best Value</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Business Growth Kit</h3>
                  <div className={styles.planPrice}>₹75,000</div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Full Business Website</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Analytics & Search Console</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> 20 Social Posts & 12 Reels</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Calendar</li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>Complete Digital Presence</h3>
                  <div className={styles.planPrice}>₹1,50,000<span>+</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Premium Website</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Complete Personal Branding</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Content Strategy & SMM</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Advanced Video Editing & SEO</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Monthly Consulting Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Global Footer: Additional Services & Payment Policy */}
        <div style={{ marginTop: '2rem' }}>
          <h3 className={styles.sectionTitle}>🔧 Additional Add-On Services</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Logo Design</span>
              <span className={styles.servicePrice}>₹3,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Thumbnail Design</span>
              <span className={styles.servicePrice}>₹800</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Business Card</span>
              <span className={styles.servicePrice}>₹2,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Pitch Deck</span>
              <span className={styles.servicePrice}>₹10,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Presentation Design</span>
              <span className={styles.servicePrice}>₹8,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Domain Setup</span>
              <span className={styles.servicePrice}>₹1,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Business Email Setup</span>
              <span className={styles.servicePrice}>₹2,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Analytics & Console Setup</span>
              <span className={styles.servicePrice}>₹3,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>WhatsApp Integration</span>
              <span className={styles.servicePrice}>₹1,000</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceName}>Payment Gateway</span>
              <span className={styles.servicePrice}>₹7,500</span>
            </div>
          </div>
        </div>

        {/* Global Payment Terms */}
        <div className={styles.termsSection}>
          <h4 className={styles.termsTitle}><Info size={20} className={styles.infoIcon} /> Payment Policy</h4>
          <ul className={styles.termsList}>
            <li><Check size={16} className={styles.infoIcon} /> 50% advance before project starts.</li>
            <li><Check size={16} className={styles.infoIcon} /> Remaining 50% before final delivery (or monthly in advance for retainers).</li>
            <li><Check size={16} className={styles.infoIcon} /> Scope changes are billed separately.</li>
            <li><Check size={16} className={styles.infoIcon} /> Premium software, stock assets, domains, hosting, paid APIs, and advertising costs are charged separately.</li>
            <li><Check size={16} className={styles.infoIcon} /> Website projects include 30 days of free bug-fix support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
