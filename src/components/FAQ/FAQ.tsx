"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: "How long does it usually take to build a website?",
    answer: "Most standard portfolio and business websites take 2-4 weeks from start to finish. Custom SaaS or e-commerce platforms can take 4-8 weeks depending on complexity."
  },
  {
    id: 2,
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! I offer monthly retainers to handle updates, security patches, content changes, and SEO monitoring so you can focus on running your business."
  },
  {
    id: 3,
    question: "How does the payment process work?",
    answer: "I typically require a 50% deposit to secure your spot in my schedule and begin work, with the remaining 50% due upon project completion and launch."
  },
  {
    id: 4,
    question: "Do you also write the content for the website?",
    answer: "Absolutely. As a Digital Content Strategist, I can write highly-converting, SEO-optimized copy for your entire website if you don't already have the text prepared."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div 
                key={faq.id} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <div className={`${styles.iconContainer} ${isOpen ? styles.iconRotated : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ''}`}>
                  <div className={styles.faqAnswerInner}>
                    <p className={styles.faqAnswer}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
