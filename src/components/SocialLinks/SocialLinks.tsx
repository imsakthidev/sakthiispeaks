"use client";
import React from 'react';
import { Video, Camera, Briefcase, Mail, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  const links = [
    {
      title: 'Sakthi Speaks Digital (YouTube)',
      url: 'https://www.youtube.com/@sakthiispeaks.digital',
      icon: <Video className={styles.linkIcon} />,
    },
    {
      title: 'Personal (YouTube)',
      url: 'https://www.youtube.com/@sakthiispeaks',
      icon: <Video className={styles.linkIcon} />,
    },
    {
      title: 'Sakthi Speaks Digital (Instagram)',
      url: 'https://www.instagram.com/sakthiispeaks.digital',
      icon: <Camera className={styles.linkIcon} />,
    },
    {
      title: 'Personal (Instagram)',
      url: 'https://www.instagram.com/sakthiispeaks/',
      icon: <Camera className={styles.linkIcon} />,
    },
    {
      title: 'Read the Blog',
      url: '/blog',
      icon: <BookOpen className={styles.linkIcon} />,
    },
  ];

  return (
    <section id="links" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <AnimatedTitle className={styles.title} text="Connect With Me" />
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.linksGrid}>
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.linkCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{link.icon}</div>
              <span className={styles.linkTitle}>{link.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
