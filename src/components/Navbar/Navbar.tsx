"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { t } = useLanguage();
  const { user, loading, logout, setIsLoginModalOpen, globalToast, setGlobalToast } = useAuth();

  useEffect(() => {
    if (globalToast) {
      const timer = setTimeout(() => {
        setGlobalToast('');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [globalToast, setGlobalToast]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix for Next.js anchor links across pages with dynamic content
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        // Wait for Firebase components to finish rendering their height
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -80; // Offset for sticky navbar
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 800);
      }
    };

    handleHashScroll();
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we are already on the home page, manually scroll to the section with offset
    if (window.location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
      setMobileMenuOpen(false);
    }
  };

  const confirmLogout = async () => {
    await logout();
    setShowLogoutConfirm(false);
    setMobileMenuOpen(false);
    setGlobalToast('Logged out successfully!');
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Sakthi Speaks</span>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          <Link href="/#about" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#about')}>About</Link>
          <Link href="/#projects" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#projects')}>Projects</Link>
          <Link href="/#testimonials" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#testimonials')}>Reviews</Link>
          <Link href="/#pricing" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#pricing')}>Pricing</Link>
          <Link href="/#faq" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#faq')}>FAQ</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/#links" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#links')}>Links</Link>
          <Link href="/#contact" className={styles.navLink} onClick={(e) => handleNavClick(e, '/#contact')}>Contact</Link>
          
          {loading ? (
            <div style={{ width: '50px' }}></div>
          ) : user ? (
            <button onClick={handleLogoutClick} className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
          ) : (
            <button onClick={() => setIsLoginModalOpen(true)} className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Login</button>
          )}
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
          <Link href="/#about" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#about')}>
            About
          </Link>
          <Link href="/#projects" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#projects')}>
            Projects
          </Link>
          <Link href="/#testimonials" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#testimonials')}>
            Reviews
          </Link>
          <Link href="/#pricing" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#pricing')}>
            Pricing
          </Link>
          <Link href="/#faq" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#faq')}>
            FAQ
          </Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/#links" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#links')}>
            Links
          </Link>
          <Link href="/#contact" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/#contact')}>
            Contact
          </Link>

          {loading ? (
             <div style={{ height: '24px' }}></div>
          ) : user ? (
            <button 
              className={styles.mobileNavLink} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          ) : (
            <button 
              className={styles.mobileNavLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
              onClick={() => { setIsLoginModalOpen(true); setMobileMenuOpen(false); }}
            >
              Login
            </button>
          )}
          
          <div className={styles.mobileActions}>
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Confirm Logout</h3>
            <p className={styles.modalText}>Are you sure you want to log out of your account?</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={() => setShowLogoutConfirm(false)}>
                Cancel
              </button>
              <button className={styles.confirmBtn} onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Success Toast */}
      <AnimatePresence>
        {globalToast && (
          <motion.div 
            className={styles.logoutToast}
            initial={{ opacity: 0, scale: 0.8, y: -50, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, y: -50, x: "-50%" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className={styles.checkIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            {globalToast}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
