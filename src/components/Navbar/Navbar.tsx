"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileNav} glass`}>
          <a href="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#skills" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
