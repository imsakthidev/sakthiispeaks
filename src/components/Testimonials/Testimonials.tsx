"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Sarah J.",
    role: "E-commerce Founder",
    review: "Sakthi completely transformed our online presence. Not only is the new website incredibly fast and beautiful, but our conversion rate has doubled since launch!",
    initial: "S"
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Tech Startup CEO",
    review: "The AI solutions Sakthi integrated into our workflow saved us countless hours. A true professional who understands both code and business growth.",
    initial: "M"
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Content Creator",
    review: "My Linktree was a mess before Sakthi built my custom portfolio. Now my brand looks premium, and I'm landing better sponsorships.",
    initial: "E"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Client Success</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
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
                <div className={styles.avatarPlaceholder}>
                  {testimonial.initial}
                </div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
