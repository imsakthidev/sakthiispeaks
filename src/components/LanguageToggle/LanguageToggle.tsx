"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/locales/translations';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.toggleButton} 
        onClick={toggleLanguage}
        aria-label="Toggle Language"
        title={language === 'en' ? "Switch to Tamil" : "Switch to English"}
      >
        <Globe size={20} />
        <span className={styles.currentLang}>{language === 'en' ? 'EN' : 'தமிழ்'}</span>
      </button>
    </div>
  );
}
