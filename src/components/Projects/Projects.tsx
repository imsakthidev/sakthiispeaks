"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import { useLanguage } from '@/context/LanguageContext';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'Sakthi Speaks Digital',
    description: 'My official digital agency and consulting portfolio built with Next.js and Vercel.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiispeaks.vercel.app'
  },
  {
    id: 2,
    title: 'Electricals',
    description: 'A dedicated project for an electricals business, featuring a modern UI and responsive design.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://sakthivelelectricals.vercel.app/'
  },
  {
    id: 3,
    title: 'Sakthi\'s Bakery',
    description: 'A delightful web application for a bakery, showcasing products and services with an elegant interface.',
    tech: ['React', 'CSS', 'JavaScript'],
    demo: 'https://imsakthidev.github.io/Sakthi-s-Bakery/'
  },
  {
    id: 4,
    title: 'Wedding Website',
    description: 'An interactive and beautifully designed digital wedding invitation platform.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiwedsdivya.vercel.app/'
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02, 
        boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)" 
      }}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <div className={styles.cardInner} style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={styles.cardHeader}>
          <motion.div 
            className={styles.folderIcon}
            whileHover={{ rotate: 15, scale: 1.2 }}
          >
            📁
          </motion.div>
          <div className={styles.cardLinks}>
            <motion.a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Live Demo"
              whileHover={{ scale: 1.2, color: "var(--accent)" }}
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech && (Array.isArray(project.tech) ? project.tech : (project.tech as string).split(',')).map((tech: string, i: number) => (
            <motion.span 
              key={i} 
              className={styles.techBadge}
              whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "#fff" }}
            >
              {tech.trim()}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Background gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('order', 'asc'), limit(6));
        const snap = await getDocs(q);
        if (!snap.empty) {
          setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <AnimatedTitle className={styles.title} text={t('projects.title')} />
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {loading ? (
            <div style={{ textAlign: 'center', width: '100%', color: '#9ca3af', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading projects...</div>
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          )}
        </div>


      </div>
    </section>
  );
}
