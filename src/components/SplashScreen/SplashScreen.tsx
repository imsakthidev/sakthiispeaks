"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Caveat, Montserrat } from 'next/font/google';
import { useTheme } from 'next-themes';

const caveat = Caveat({ subsets: ['latin'], weight: ['700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'] });

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    const splashShown = sessionStorage.getItem('splashShown');
    if (!splashShown) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isMounted) return null;

  const isLight = isMounted && resolvedTheme === 'light';
  const bgColor = isLight ? '#FAFAFA' : '#050505';
  const textColor = isLight ? '#111827' : '#fff';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: bgColor,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '3.5rem', color: textColor, letterSpacing: '4px' }} className={montserrat.className}>
              SAKTHI<br/>SPEAKS
            </div>
            <div style={{ fontSize: '3rem', color: '#7c3aed', marginTop: '-15px' }} className={caveat.className}>
              Digital
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "250px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
              marginTop: '40px',
              borderRadius: '2px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
