"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

const words = [
  "LET'S WORK TOGETHER", "•", "WEB DEVELOPMENT", "•", "AI SOLUTIONS", "•",
  "CONTENT CREATION", "•", "SAKTHI SPEAKS DIGITAL", "•"
];

export default function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <motion.div 
        className={styles.marqueeContent}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      >
        {/* We duplicate the words array to ensure smooth infinite loop */}
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={index} className={word === "•" ? styles.bullet : styles.text}>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
