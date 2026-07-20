"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import styles from './ReviewForm.module.css';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewForm({ isOpen, onClose }: ReviewFormProps) {
  const { user } = useAuth();
  
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill name if user is logged in
  React.useEffect(() => {
    if (user && user.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalName = user?.displayName || name;
    
    if (!finalName || !review) {
      setError("Name and Review are required.");
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'testimonials'), {
        name: finalName,
        role,
        review,
        initial: finalName.charAt(0).toUpperCase(),
        userId: user?.uid || null,
        userPhoto: user?.photoURL || null,
        status: 'pending', // IMPORTANT: Requires admin approval
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setName('');
        setRole('');
        setReview('');
      }, 3000);
    } catch (err: any) {
      console.error("Error adding document: ", err);
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div 
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>

          <h3 className={styles.title}>Leave a Review</h3>

          {isSuccess ? (
            <div className={styles.successMessage}>
              Thank you! Your review has been submitted and is pending approval.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              {(!user || !user.displayName) && (
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name *</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah J."
                    required
                  />
                </div>
              )}

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Role / Company</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Tech Startup CEO"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Your Review *</label>
                <textarea 
                  className={styles.textarea}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your experience working with me..."
                  required
                />
              </div>

              {error && <div className={styles.errorMessage}>{error}</div>}

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
