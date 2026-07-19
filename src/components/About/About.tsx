"use client";
import React from 'react';
import { Code, Mic, Video, BookOpen, TrendingUp, Plane, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Caveat, Montserrat } from 'next/font/google';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'] });

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('about.title')}</h2>
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
            <p className={styles.text}>
              {t('about.p4')}
            </p>
            <p className={styles.text}>
              {t('about.p5')}
            </p>
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
