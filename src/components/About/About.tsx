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
            <p className={styles.text}>
              I'm Sakthivelpandian P, professionally known as Sakthi. With a background in Computer Science Engineering and experience in national service through the Central Armed Police Forces, I combine discipline with technical problem-solving.
            </p>
            <p className={styles.text}>
              I build AI-powered software, desktop applications, and modern web solutions while creating educational content that reaches a wide audience under the brand "Sakthi Speaks". I'm passionate about artificial intelligence, software engineering, and building products that solve real-world problems.
            </p>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>750K+</span>
                <span className={styles.statLabel}>Instagram Views</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>550K+</span>
                <span className={styles.statLabel}>YouTube Views</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Languages Spoken</span>
              </div>
            </div>
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
