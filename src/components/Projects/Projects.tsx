"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'Sakthi Speaks Digital',
    description: 'My official digital agency and consulting portfolio built with Next.js and Vercel.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiispeaks.vercel.app'
  },
  {
    id: 2,
    title: 'Electricals',
    description: 'A dedicated project for an electricals business, featuring a modern UI and responsive design.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://sakthivelelectricals.vercel.app/'
  },
  {
    id: 3,
    title: 'Sakthi\'s Bakery',
    description: 'A delightful web application for a bakery, showcasing products and services with an elegant interface.',
    tech: ['React', 'CSS', 'JavaScript'],
    demo: 'https://imsakthidev.github.io/Sakthi-s-Bakery/'
  },
  {
    id: 4,
    title: 'Wedding Website',
    description: 'An interactive and beautifully designed digital wedding invitation platform.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiwedsdivya.vercel.app/'
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('projects.title')}</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <div className={styles.folderIcon}>📁</div>
                  <div className={styles.cardLinks}>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.personalAccounts}>
          <div className={styles.header}>
            <div className={styles.line}></div>
            <h2 className={styles.title}>Personal Accounts</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socialAccountsGrid}>
             <motion.a 
                href="https://www.youtube.com/@sakthiispeaks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialAccountCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
             >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                <span>@sakthiispeaks</span>
             </motion.a>
             <motion.a 
                href="https://www.instagram.com/sakthiispeaks" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialAccountCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
             >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>@sakthiispeaks</span>
             </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
