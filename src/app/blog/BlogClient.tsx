"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { BlogPost } from '@/lib/blog';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './blog.module.css';

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const { language, t } = useLanguage();
  
  // Filter posts based on current language
  const filteredPosts = posts.filter(post => post.language === language);

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className="text-gradient">{t('nav.blog')}</span>
        </h1>
        <p className={styles.subtitle}>
          {language === 'en' 
            ? 'Insights, tutorials, and strategies for digital growth.' 
            : 'டிஜிட்டல் வளர்ச்சி மற்றும் இணையதள உருவாக்கம் பற்றிய கட்டுரைகள்.'}
        </p>
      </div>

      {filteredPosts.length === 0 ? (
        <div className={`${styles.emptyState} glass`}>
          {language === 'en' ? 'No posts found in English yet.' : 'தமிழில் இன்னும் பதிவுகள் இல்லை.'}
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} style={{ display: 'block', height: '100%' }}>
                <div className={`${styles.card} glass`}>
                  {post.image && (
                    <div className={styles.imageContainer}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className={styles.image}
                      />
                    </div>
                  )}
                  
                  <div className={styles.meta}>
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  
                  <h2 className={styles.cardTitle}>
                    {post.title}
                  </h2>
                  
                  <p className={styles.excerpt}>
                    {post.excerpt}
                  </p>
                  
                  <div className={styles.readMore}>
                    {language === 'en' ? 'Read More' : 'மேலும் படிக்க'}
                    <ArrowRight size={16} className={styles.readMoreIcon} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
