"use client";
import React, { useState } from 'react';
import { Check, Info, Layout, Video, PenTool, Share2, Bot, Rocket } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'web' | 'video' | 'content' | 'social' | 'ai' | 'growth'>('web');

  const handleGetStarted = (planName: string) => {
    const messageEl = document.getElementById('message') as HTMLTextAreaElement;
    if (messageEl) {
      messageEl.value = `I am interested in the ${planName}.`;
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                <button onClick={() => handleGetStarted('Starter Website package')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Professional Website package')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Business Website package')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Enterprise Website package')} className={styles.ctaButton}>Get Started</button>
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
                  <div className={styles.planPrice}>₹1000<span>/video</span></div>
                </div>
                <ul className={styles.featuresList}>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Cuts & Trimming</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Standard Captions</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Background Music</li>
                  <li className={styles.feature}><Check size={18} className={styles.checkIcon} /> Basic Color Correction</li>
                </ul>
                <button onClick={() => handleGetStarted('Basic Shorts Editing')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Pro Shorts Editing')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Viral Shorts Editing')} className={styles.ctaButton}>Get Started</button>
              </div>
            </div>

            <h3 className={styles.sectionTitle} style={{marginTop: '2rem'}}>🎥 Long Form Editing</h3>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>5–10 Minutes Video</div>
                  <div className={styles.servicePrice}>₹3,500/video</div>
                </div>
                <button onClick={() => handleGetStarted('5-10 Min Long Form Video Editing')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>10–20 Minutes Video</div>
                  <div className={styles.servicePrice}>₹6,000/video</div>
                </div>
                <button onClick={() => handleGetStarted('10-20 Min Long Form Video Editing')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>Documentary Style</div>
                  <div className={styles.servicePrice}>₹10,000–25,000/video</div>
                </div>
                <button onClick={() => handleGetStarted('Documentary Style Video Editing')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>Podcast Editing</div>
                  <div className={styles.servicePrice}>₹5,000/video</div>
                </div>
                <button onClick={() => handleGetStarted('Podcast Editing')} className={styles.smallCtaButton}>Select</button>
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
                    <div>
                      <div className={styles.serviceName}>Instagram Caption</div>
                      <div className={styles.servicePrice}>₹300</div>
                    </div>
                    <button onClick={() => handleGetStarted('Instagram Caption Writing')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>LinkedIn Post</div>
                      <div className={styles.servicePrice}>₹700</div>
                    </div>
                    <button onClick={() => handleGetStarted('LinkedIn Post Writing')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Blog Article (1000 words)</div>
                      <div className={styles.servicePrice}>₹2,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('Blog Article Writing')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Website Content</div>
                      <div className={styles.servicePrice}>₹5,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('Website Content Writing')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Product Description</div>
                      <div className={styles.servicePrice}>₹500</div>
                    </div>
                    <button onClick={() => handleGetStarted('Product Description Writing')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Email Copywriting</div>
                      <div className={styles.servicePrice}>₹1,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('Email Copywriting')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Sales Landing Page</div>
                      <div className={styles.servicePrice}>₹7,500</div>
                    </div>
                    <button onClick={() => handleGetStarted('Sales Landing Page Copywriting')} className={styles.smallCtaButton}>Select</button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={styles.sectionTitle}>📖 Storytelling Scripts</h3>
                <div className={styles.servicesGrid} style={{gridTemplateColumns: '1fr'}}>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>60-sec Story Script</div>
                      <div className={styles.servicePrice}>₹2,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('60-sec Story Script')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>3–5 min Story</div>
                      <div className={styles.servicePrice}>₹4,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('3-5 min Story Script')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>10 min Documentary Script</div>
                      <div className={styles.servicePrice}>₹8,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('10 min Documentary Script')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Brand Story</div>
                      <div className={styles.servicePrice}>₹10,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('Brand Story Script')} className={styles.smallCtaButton}>Select</button>
                  </div>
                  <div className={styles.serviceItem}>
                    <div>
                      <div className={styles.serviceName}>Founder Story</div>
                      <div className={styles.servicePrice}>₹12,000</div>
                    </div>
                    <button onClick={() => handleGetStarted('Founder Story Script')} className={styles.smallCtaButton}>Select</button>
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
                <button onClick={() => handleGetStarted('Starter Social Media Management')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Growth Social Media Management')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Premium Social Media Management')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Starter Personal Branding')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Professional Personal Branding')} className={styles.ctaButton}>Get Started</button>
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
              <button onClick={() => handleGetStarted('Complete Brand Management Package')} className={styles.ctaButton} style={{marginTop: '2rem'}}>Request A Consultation</button>
            </div>
          </div>
        )}

        {/* 5. AI SERVICES TAB */}
        {activeTab === 'ai' && (
          <div className={styles.tabContent}>
            <h3 className={styles.sectionTitle}>🤖 AI Services & Integrations</h3>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>AI Workflow Setup</div>
                  <div className={styles.servicePrice}>₹10,000</div>
                </div>
                <button onClick={() => handleGetStarted('AI Workflow Setup')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>ChatGPT Integration</div>
                  <div className={styles.servicePrice}>₹15,000</div>
                </div>
                <button onClick={() => handleGetStarted('ChatGPT Integration')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>AI Content Automation</div>
                  <div className={styles.servicePrice}>₹20,000</div>
                </div>
                <button onClick={() => handleGetStarted('AI Content Automation')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>Custom AI Assistant</div>
                  <div className={styles.servicePrice}>₹25,000+</div>
                </div>
                <button onClick={() => handleGetStarted('Custom AI Assistant')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>Prompt Engineering</div>
                  <div className={styles.servicePrice}>₹5,000</div>
                </div>
                <button onClick={() => handleGetStarted('Prompt Engineering')} className={styles.smallCtaButton}>Select</button>
              </div>
              <div className={styles.serviceItem}>
                <div>
                  <div className={styles.serviceName}>AI Consultation (1 Hour)</div>
                  <div className={styles.servicePrice}>₹3,000</div>
                </div>
                <button onClick={() => handleGetStarted('AI Consultation (1 Hour)')} className={styles.smallCtaButton}>Select</button>
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
                <button onClick={() => handleGetStarted('Creator Launch Kit')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Business Growth Kit')} className={styles.ctaButton}>Get Started</button>
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
                <button onClick={() => handleGetStarted('Complete Digital Presence Kit')} className={styles.ctaButton}>Get Started</button>
              </div>
            </div>
          </div>
        )}

        {/* Global Footer: Additional Services & Payment Policy */}
        <div style={{ marginTop: '2rem' }}>
          <h3 className={styles.sectionTitle}>🔧 Additional Add-On Services</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Logo Design</div>
                <div className={styles.servicePrice}>₹3,000</div>
              </div>
              <button onClick={() => handleGetStarted('Logo Design')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Thumbnail Design</div>
                <div className={styles.servicePrice}>₹800</div>
              </div>
              <button onClick={() => handleGetStarted('Thumbnail Design')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Business Card</div>
                <div className={styles.servicePrice}>₹2,000</div>
              </div>
              <button onClick={() => handleGetStarted('Business Card Design')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Pitch Deck</div>
                <div className={styles.servicePrice}>₹10,000</div>
              </div>
              <button onClick={() => handleGetStarted('Pitch Deck Design')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Presentation Design</div>
                <div className={styles.servicePrice}>₹8,000</div>
              </div>
              <button onClick={() => handleGetStarted('Presentation Design')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Domain Setup</div>
                <div className={styles.servicePrice}>₹1,000</div>
              </div>
              <button onClick={() => handleGetStarted('Domain Setup')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Business Email Setup</div>
                <div className={styles.servicePrice}>₹2,000</div>
              </div>
              <button onClick={() => handleGetStarted('Business Email Setup')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Analytics & Console Setup</div>
                <div className={styles.servicePrice}>₹3,000</div>
              </div>
              <button onClick={() => handleGetStarted('Google Analytics & Search Console Setup')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>WhatsApp Integration</div>
                <div className={styles.servicePrice}>₹1,000</div>
              </div>
              <button onClick={() => handleGetStarted('WhatsApp Integration')} className={styles.smallCtaButton}>Select</button>
            </div>
            <div className={styles.serviceItem}>
              <div>
                <div className={styles.serviceName}>Payment Gateway</div>
                <div className={styles.servicePrice}>₹7,500</div>
              </div>
              <button onClick={() => handleGetStarted('Payment Gateway Integration')} className={styles.smallCtaButton}>Select</button>
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
