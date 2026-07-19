"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          <span className="text-gradient">Sakthi Speaks</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>{t('nav.about')}</a>
          <a href="#projects" className={styles.navLink}>{t('nav.projects')}</a>
          <a href="#pricing" className={styles.navLink}>{t('nav.pricing')}</a>
          <a href="#contact" className={styles.navLink}>{t('nav.contact')}</a>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className={styles.mobileOnly}>
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileNav} glass`}>
          <a href="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            {t('nav.about')}
          </a>
          <a href="#projects" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            {t('nav.projects')}
          </a>
          <a href="#pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            {t('nav.pricing')}
          </a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            {t('nav.contact')}
          </a>
          
          <div className={styles.mobileActions}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
