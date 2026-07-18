import React from 'react';
import { Code, Mic, Video, BookOpen, TrendingUp, Plane, Shield } from 'lucide-react';
import { Caveat, Montserrat } from 'next/font/google';
import styles from './About.module.css';

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'] });

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.subtitle}>
              Building Digital Experiences That Help Brands Grow.
            </p>
            <p className={styles.text}>
              I'm Sakthi, the founder of Sakthi Speaks. I help businesses, startups, creators, and professionals establish a powerful online presence through modern websites, engaging content, and strategic digital solutions.
            </p>
            <p className={styles.text}>
              My expertise combines web development, content creation, video editing, storytelling, personal branding, and AI-powered workflows to create digital experiences that not only look professional but also drive meaningful results.
            </p>
            <p className={styles.text}>
              Whether you're launching a new business, building your personal brand, or scaling your online presence, I deliver solutions tailored to your goals—from design and development to content strategy and ongoing digital growth.
            </p>
            
            <h3 className={styles.sectionHeading}>What I Do</h3>
            <ul className={styles.servicesList}>
              <li>🌐 Professional Website Development</li>
              <li>🎬 Short & Long Form Video Editing</li>
              <li>✍️ Content Writing & Copywriting</li>
              <li>📖 Storytelling & Script Writing</li>
              <li>📱 Social Media Management</li>
              <li>🚀 Personal Branding</li>
              <li>🤖 AI-Powered Digital Solutions</li>
              <li>💼 SaaS & Business Solutions</li>
            </ul>

            <h3 className={styles.sectionHeading}>My Approach</h3>
            <p className={styles.text}>
              I believe every brand has a story worth telling. My goal is to combine creativity, technology, and strategy to build digital products and content that leave a lasting impression and help businesses grow with confidence.
            </p>
            <p className={styles.text}>
              Let's turn your ideas into impactful digital experiences.
            </p>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.brandCard}>
                <div className={styles.brandGlow}></div>
                <div className={`${styles.brandText} ${montserrat.className}`}>SAKTHI<br/>SPEAKS</div>
                <div className={`${styles.brandSubtitle} ${caveat.className}`}>Creator</div>
              </div>
              <div className={styles.imageBackdrop}></div>
              
              <div className={`${styles.floatingIcon} ${styles.icon1}`} title="Coding">
                <Code size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon2}`} title="Podcast/Speaking">
                <Mic size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon3}`} title="Content Creation">
                <Video size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon4}`} title="Learning/Education">
                <BookOpen size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon5}`} title="Finance/Growth">
                <TrendingUp size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon6}`} title="Travel">
                <Plane size={24} />
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon7}`} title="Armed Forces/Discipline">
                <Shield size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
