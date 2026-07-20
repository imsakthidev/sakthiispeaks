"use client";
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import ReviewForm from './ReviewForm';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  initial: string;
  userPhoto?: string;
}

// Fallback data if DB is empty or fails
const fallbackData: Testimonial[] = [
  {
    id: '1',
    name: "Sarah J.",
    role: "E-commerce Founder",
    review: "Sakthi completely transformed our online presence. Not only is the new website incredibly fast and beautiful, but our conversion rate has doubled since launch!",
    initial: "S"
  },
  {
    id: '2',
    name: "Michael T.",
    role: "Tech Startup CEO",
    review: "The AI solutions Sakthi integrated into our workflow saved us countless hours. A true professional who understands both code and business growth.",
    initial: "M"
  },
  {
    id: '3',
    name: "Elena R.",
    role: "Content Creator",
    review: "My Linktree was a mess before Sakthi built my custom portfolio. Now my brand looks premium, and I'm landing better sponsorships.",
    initial: "E"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user, setIsLoginModalOpen } = useAuth();

  const handleLeaveReview = () => {
    if (user) {
      setIsFormOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const q = query(
          collection(db, 'testimonials'), 
          where('status', '==', 'approved'),
          limit(6)
        );
        const querySnapshot = await getDocs(q);
        const data: Testimonial[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as Testimonial);
        });
        
        // If DB has no approved reviews yet, show fallback data
        if (data.length === 0) {
          setTestimonials(fallbackData);
        } else {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
        setTestimonials(fallbackData);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className={`container ${styles.container}`}>
        
        <div className={styles.headerRow}>
          <div className={styles.header}>
            <h2 className={styles.title}>Client Success</h2>
            <div className={styles.line}></div>
          </div>
          <button className={styles.leaveReviewBtn} onClick={handleLeaveReview}>
            Leave a Review
          </button>
        </div>

        {loading ? (
          <div className={styles.emptyState} style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading reviews...</div>
        ) : (
          <div className={styles.grid}>
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className={styles.quoteIcon} size={32} />
                
                <p className={styles.review}>
                  "{testimonial.review}"
                </p>

                <div className={styles.authorInfo}>
                  <div className={styles.avatarPlaceholder} style={{ overflow: 'hidden', padding: 0 }}>
                    {testimonial.userPhoto ? (
                      <img src={testimonial.userPhoto} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      testimonial.initial || testimonial.name?.charAt(0) || 'U'
                    )}
                  </div>
                  <div className={styles.authorDetails}>
                    <span className={styles.authorName}>{testimonial.name}</span>
                    <span className={styles.authorRole}>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ReviewForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
