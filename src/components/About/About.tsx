"use client";
import React from 'react';
import { Code, Mic, Video, BookOpen, TrendingUp, Plane, Shield } from 'lucide-react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Caveat, Montserrat } from 'next/font/google';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'] });

const HighlightText = ({ children }: { children: React.ReactNode }) => {
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "start 40%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  
  return (
    <motion.p 
      ref={textRef}
      className={styles.text} 
      style={{ opacity, transition: 'opacity 0.1s ease' }}
    >
      {children}
    </motion.p>
  );
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <AnimatedTitle className={styles.title} text={t('about.title')} />
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.textSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.subtitle}>
              {t('about.subtitle')}
            </p>
            <p className={styles.text}>
              {t('about.p1')}
            </p>
            <p className={styles.text}>
              {t('about.p2')}
            </p>
            <p className={styles.text}>
              {t('about.p3')}
            </p>
            
            <h3 className={styles.sectionHeading}>{t('about.whatIDo')}</h3>
            <ul className={styles.servicesList}>
              <li>{t('about.s1')}</li>
              <li>{t('about.s2')}</li>
              <li>{t('about.s3')}</li>
              <li>{t('about.s4')}</li>
              <li>{t('about.s5')}</li>
              <li>{t('about.s6')}</li>
              <li>{t('about.s7')}</li>
              <li>{t('about.s8')}</li>
            </ul>

            <h3 className={styles.sectionHeading}>{t('about.myApproach')}</h3>
            <HighlightText>
              {t('about.p4')}
            </HighlightText>
            <HighlightText>
              {t('about.p5')}
            </HighlightText>
            
            <motion.div 
              style={{ marginTop: '30px', width: '150px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <svg viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M10,40 C30,10 60,70 90,40 C110,20 130,20 150,40 C170,60 190,60 210,40 C230,20 240,30 240,40"
                  fill="transparent"
                  stroke="url(#sigGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 }
                    }
                  }}
                />
                <defs>
                  <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '14px', fontWeight: 'bold', color: 'var(--text-secondary)', marginTop: '5px', marginLeft: '10px' }}>
                Sakthi Speaks Digital
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.imageSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.brandCard}>
                <div className={styles.brandGlow}></div>
                <div className={`${styles.brandText} ${montserrat.className}`}>SAKTHI<br/>SPEAKS</div>
                <div className={`${styles.brandSubtitle} ${caveat.className}`}>Digital</div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
