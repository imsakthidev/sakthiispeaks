"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  signInWithPopup, GoogleAuthProvider, OAuthProvider, 
  signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { X, Eye, EyeOff } from 'lucide-react';
import styles from './LoginModal.module.css';

export default function LoginModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const { user, isLoginModalOpen, setIsLoginModalOpen, setGlobalToast } = useAuth();

  if (!isLoginModalOpen) return null;

  const handleClose = () => {
    setError('');
    setEmail('');
    setPassword('');
    setIsLoginModalOpen(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setGlobalToast('Signed in with Google successfully!');
      handleClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setGlobalToast('Signed in successfully!');
      handleClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className={styles.modal}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
        >
          <button className={styles.closeBtn} onClick={handleClose}>
            <X size={20} />
          </button>
          
          <h1 className={styles.title}>Login</h1>
          <p className={styles.subtitle}>Sign in to manage your projects or leave a review.</p>

          <div className={styles.providerButtons}>
            <button className={`${styles.btn} ${styles.googleBtn}`} onClick={handleGoogleLogin}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className={styles.divider}>or</div>

          <form className={styles.form} onSubmit={handleEmailAuth}>
            <input 
              type="email" 
              placeholder="Email address" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className={styles.passwordWrapper}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className={styles.input} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className={styles.eyeButton} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Sign In
            </button>
          </form>

          {error && <div className={styles.error}>{error}</div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
